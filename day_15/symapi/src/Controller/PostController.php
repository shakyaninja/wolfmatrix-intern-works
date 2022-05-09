<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


#[Route('/post', name: 'post.')]
class PostController extends AbstractController
{

    #[Route('/', name: 'get',methods: ['GET'])]
    public function index(ManagerRegistry $doctrine,Request $request): Response
    {

        // Handling circular reference exceptions
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return ["id" => $object->getId()];
            },
        ];
        $normalizers = [new ObjectNormalizer(null, null, null, null, null, null, $defaultContext)];

        $encoder = [new JsonEncoder()];
        $serializer = new Serializer($normalizers, $encoder);

        $id = $request->query->get('id');

        if(!empty($id)){
            $post = $doctrine
            ->getRepository(Post::class)
            ->find($id);

            $jsonContent = $serializer->serialize($post,'json');

            return $this->json([
                'message' => 'fetched post ',
                'data' => json_decode($jsonContent)
            ]);
        }else{
            $posts = $doctrine
            ->getRepository(Post::class)
            ->findAll();

            $jsonContent = $serializer->serialize($posts,'json');

            return $this->json([
                'message' => 'fetched all posts ',
                'data' => json_decode($jsonContent)
            ]);
        }

    }

    #[Route('/', name: 'update',methods: ['PUT'])]
    public function update(ManagerRegistry $doctrine, Request $request): Response
    {
        $data = json_decode($request->getContent(),true);

        $post = $doctrine->getRepository(Post::class)->find($data['id']);

        if(!empty($post)){
            $title = isset($data['title'])?$data['title']:$post->getTitle();
            $content = isset($data['content'])?$data['content']:$post->getContent();
            $description = isset($data['description'])?$data['description']:$post->getDescription();

            $post->setTitle($title);
            $post->setContent($content);
            $post->setDescription($description);

            $em  = $doctrine->getManager();

            $em->flush();

            return $this->json([
                'message' => 'post updated'
            ],200);
        }else{
            return $this->json([
                'message' => 'post not found to update'
            ],200);
        }
        
    }

    #[Route('/', name: 'create',methods: ['POST'])]
    public function create(ManagerRegistry $doctrine, Request $request): Response
    {
        $data = json_decode($request->getContent(),true);

        $title = $data['title'];
        $content = $data['content']?$data['content']:'';
        $description = $data['description']?$data['description']:'';
        $user_id = $data['user_id'];

        // dump($user_id);
        $user = $doctrine->getRepository(User::class)->find($user_id);

        // dump($user);

        $post = new Post();
        $post->setTitle($title);
        $post->setContent($content);
        $post->setDescription($description);
        $post->setUser($user);

        $em  = $doctrine->getManager();

        $em->persist($post);
        $em->flush();

        return $this->json([
            'message' => 'post created',
            'path' => 'src/Controller/PostController.php',
        ],200);
    }

    #[Route('/', name: 'delete',methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine ,Request $request): Response
    {
        $id = $request->query->get('id');
        $user = $doctrine->getRepository(User::class)->find($id);

        if(!empty($user)){

            $em = $doctrine->getManager();
            $em->remove($user);
            $em->flush();

            return $this->json([
                'message' => 'delete post here',
                'path' => 'src/Controller/PostController.php',
            ],200);
        }else{
            return $this->json([
                'message' => 'User not found to delete',
                'path' => 'src/Controller/PostController.php',
            ],200);
        }
    }

}

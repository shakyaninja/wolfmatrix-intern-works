<?php

namespace App\Controller;

use App\Entity\Post;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/post', name: 'post.')]
class PostController extends AbstractController
{

    #[Route('/', name: 'get')]
    public function index(): Response
    {
        $data = [
            [
                'title'=>'post 1',
                'content'=> 'post 1 content'
            ],
            [
                'title'=>'post 2',
                'content'=> 'post 2 content'
            ],
            [
                'title'=>'post 3',
                'content'=> 'post 3 content'
            ],
            [
                'title'=>'post 4',
                'content'=> 'post 4 content'
            ],
            [
                'title'=>'post 5',
                'content'=> 'post 5 content'
                ]
            ];

        // return $this->json([
        //     'message' => 'get post here',
        //     'path' => 'src/Controller/PostController.php',
        // ]);

        return $this->json($data, 200, ["Content-Type" => "application/json"]);
    }

    #[Route('/create', name: 'create')]
    public function create(ManagerRegistry $doctrine): Response
    {
        $title = 'post 1';
        $content = 'content of post 1';

        $post = new Post();
        $post->setTitle($title);
        $post->setContent($content);

        $em  = $doctrine->getManager();

        $em->persist($post);
        $em->flush();

        return $this->json([
            'message' => 'post created',
            'path' => 'src/Controller/PostController.php',
        ]);
    }

    #[Route('/delete', name: 'delete')]
    public function delete(): Response
    {
        return $this->json([
            'message' => 'delete post here',
            'path' => 'src/Controller/PostController.php',
        ]);
    }

}

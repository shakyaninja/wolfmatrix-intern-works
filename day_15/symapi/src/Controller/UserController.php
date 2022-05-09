<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('/user', name: 'user.')]
class UserController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(ManagerRegistry $doctrine,Request $request): Response
    {
        $encoder = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoder);

        $id = $request->query->get('id');
        $method = $request->getMethod();

        if($method === 'POST'){
            $em = $doctrine->getManager();

            $user = new User();

            $data = json_decode($request->getContent(),true);

            $user->setName($data['name']);
            $user->setEmail($data['email']);
            $user->setPassword(md5($data['password']));
            $user->setUsername($data['username']);

            $em->persist($user);
            $em->flush();

            return $this->json([
                'message' => 'user is created here',
                'path' => 'src/Controller/UserController.php',
            ]);
        }

        else if($method === 'GET'){
            if(!empty($id)){

                $user = $doctrine->getRepository(User::class)->find($id);

                $jsonContent = $serializer->serialize($user,'json');
                return $this->json([
                    'message' => 'fetched user with id='.$id.' succesfully',
                    'data' => [
                        'user' => json_decode($jsonContent)
                    ]
                ],200, ["Content-Type" => "application/json"]);
            }else{
                $users = $doctrine->getRepository(User::class)->findAll();
                // dd($users);
                $jsonContent = $serializer->serialize($users,'json');
                // return new JsonResponse($users);
                // dump(getType($users));


                return $this->json([
                    'message' => 'fetched all user succesfully',
                    'data' => json_decode($jsonContent)
                ],200, ["Content-Type" => "application/json"]);
            }
        }
        elseif($method === 'PUT'){
            $em = $doctrine->getManager();

            $data = json_decode($request->getContent(),true);

            $user = $em->getRepository(User::class)->find($data['id']);

            dump($user);
            $user->setName($data['name']);
            $user->setEmail($data['email']);
            $user->setPassword(md5($data['password']));
            $user->setUsername($data['username']);

            // updation here
            // $em->persist($user); //not necessary while updating
            $em->flush();

            return $this->json([
                'message' => 'updated user succesfully',
                'data' => $user
            ],200, ["Content-Type" => "application/json"]);
        }
        elseif($method === 'DELETE'){
            $em = $doctrine->getManager();

            $data = json_decode($request->getContent(),true);

            $user = $em->getRepository(User::class)->find($data['id']);
            //  deletion here
            $em->remove($user);
            $em->flush();

            return $this->json([
                'message' => 'Deleted user succesfully',
            ],200, ["Content-Type" => "application/json"]);
        }
    }
}

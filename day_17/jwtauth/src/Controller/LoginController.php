<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class LoginController extends AbstractController
{
    #[Route('/api/login_check', name: 'api_login_check',methods:['POST'])]
    public function getTokenUser(ManagerRegistry $doctrine, JWTTokenManagerInterface $JWTManager, Request $request): Response
    {
        $encoder = [new JsonEncoder()];
        $normalizer = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizer,$encoder);

        $data = json_decode($request->getContent(),true);
        // dump($data);
        $findUser = $doctrine->getRepository(User::class)->findBy(['username' => $data['username']]);
        $findUserJson = $serializer->serialize($findUser,'json');
        $fUser = json_decode($findUserJson);
        $password = $fUser[0]->password;
        // $password = $fUser['password'];

        if($password === md5($data['password'])){
            $user = new User();
            $user->setUsername($data['username']);
            $user->setPassword(md5($data['password']));

            return $this->json(['token' => $JWTManager->create($user)]);

        }else{
            // unauthorized
            return $this->json(['message' => "User not authorized"]);
        }
       
        // $jsonContent = $serializer->serialize($user,'json');

    }
}

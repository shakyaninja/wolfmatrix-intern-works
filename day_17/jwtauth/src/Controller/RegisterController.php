<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Lcobucci\JWT\Signer\Ecdsa\Sha256;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegisterController extends AbstractController
{
    
    #[Route('/api/register', name: 'api_register')]
    public function index(ManagerRegistry $doctrine,Request $request,UserPasswordHasherInterface $passwordHasher): Response
    {
    
        // $username = $request->request->get('username');
        // $password = $request->request->get('password');

        // $hashedPassword = md5($password);
        // dump($password);



        $data = json_decode($request->getContent(),true);

        $username = $data['username'];
        $password = $data['password'];
        $user = new User();
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $password
        );

        $user->setUsername($username);
        $user->setRoles(['admin']);
        $user->setPassword($hashedPassword);

        $em = $doctrine->getManager();
        $em->persist($user);
        $em->flush();

        return $this->json([
            'message' => 'user registered'
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RegisterController extends AbstractController
{
    
    #[Route('/api/register', name: 'api_register')]
    public function index(ManagerRegistry $doctrine,Request $request): Response
    {
        $username = $request->request->get('username');
        $password = $request->request->get('password');

        $hashedPassword = md5($password);
        // dump($password);

        $user = new User();
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

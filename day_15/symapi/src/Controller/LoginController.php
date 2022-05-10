<?php

namespace App\Controller;

use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class LoginController extends AbstractController
{
    // public function index(Request $request): Response
    // {
    //     $username = $request->request->get('username');
    //     $password = $request->request->get('password');
    //     // return $this->json([
    //     //     "message" => "Login reached",
    //     //     "request data" => [
    //     //         "username" => $username,
    //     //         "password" => $password
    //     //     ]
    //     // ]);
    // }
    #[Route('/api/login_check', name: 'api_login_check')]
    public function getTokenUser(UserInterface $user, JWTTokenManagerInterface $JWTManager)
    {
        return $this->json(['token' => $JWTManager->create($user)]);
    }
}

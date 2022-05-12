<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class TestController extends AbstractController
{
    #[Route('/api/test', name: 'app_test')]
    public function index(): Response
    {
       
        return $this->json([
            'message' => 'Welcome to your test controller!',
            // 'user' => 'user'.$user->getUserIdentifier(),
        ]);
    }
}

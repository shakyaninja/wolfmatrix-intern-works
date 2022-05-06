<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/', name: 'index.')]
class IndexController extends AbstractController
{
    #[Route('/', name: 'main')]
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to symapi!',
            'path' => 'src/Controller/IndexController.php',
        ]);
    }
}

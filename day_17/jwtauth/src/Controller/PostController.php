<?php

namespace App\Controller;

use Exception;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class PostController extends AbstractController
{
    #[Route('/api/post', name: 'app_post')]
    public function index(Request $request): Response
    {
        // $Verification = new VerificationController();
        // $Verification->check_jwt($request,'App/Controller/PostController');

        return $this->json([
            "message" => "welcome to restricted zone"
        ]);
    }
}

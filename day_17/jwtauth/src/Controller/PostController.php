<?php

namespace App\Controller;

use App\Entity\User;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class PostController extends AbstractController
{

    #[Route('/api/post', name: 'app_post',methods:['GET','POST'])]
    public function index(#[CurrentUser]?User $user,Request $request): Response
    {

        // return $this->json([
        //     "message" => "welcome to restricted zone"
        // ]); 
        // dump($request->headers->get('Authorization'));
        if(null === $user){
            return $this->json([
                "message" => "Invalid token"
            ]);
        }
        return $this->json([
            "message" => "welcome to restricted zone"
        ]); 
    }
}

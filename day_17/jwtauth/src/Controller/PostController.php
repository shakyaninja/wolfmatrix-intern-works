<?php

namespace App\Controller;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class PostController extends AbstractController
{
    public function __construct(JWTEncoderInterface $jwtEncoder)
    {
        $this->jwtEncoder = $jwtEncoder;
    }
    #[Route('/api/post', name: 'app_post')]
    public function index(Request $request): Response
    {
        $tokenArray = explode(' ',$request->headers->get('Authorization'));
        $token = $tokenArray[1];
        try {
            $this->jwtEncoder->decode($token);
            if($token){
                return $this->json([
                    'message' => 'Welcome to restricted zone'
                ]);
            }else{
                return $this->json([
                    'message' => 'Sorry not authorized to enter restricted zone'
                ]);
            }
          } catch (JWTDecodeFailureException $ex) {
                  // if no exception thrown then the token could be used
                  return $this->json([
                      "error" => $ex
                  ]);
          }
    }
}

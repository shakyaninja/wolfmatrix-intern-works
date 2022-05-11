<?php

namespace App\Controller;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VerificationController extends AbstractController
{
    public function __construct(JWTEncoderInterface $jwtEncoder)
    {
        $this->jwtEncoder = $jwtEncoder;
    }

    // #[Route('/api', name: 'api_verification')]
    public function check_jwt(Request $request,$controller_path = "App\Controller\PostController::index"){
        $bearer_token = $request->headers->get('Authorization');
        if($bearer_token){
            $tokenArray = explode(' ',$bearer_token);
            $token = $tokenArray[1];
            try {
                $decoded =$this->jwtEncoder->decode($token);
                // dump($decoded);
                $response = $this->forward($controller_path,[
                    "verified" => true,
                    "verified_data" => $decoded,
                    "message" => "JWT validated succesfully"
                ]);
                return $response;
                
            } catch (JWTDecodeFailureException $ex) {
                    // if no exception thrown then the token could be used
                    return $this->json([
                        "verified" => false,
                        "message" => "JWT token invalid",
                        "error" => $ex
                    ]);
            }
        }else{
            return $this->json([
                "verified" => false,
                "message" => "No bearer token found"
            ]);
        }
    }
}

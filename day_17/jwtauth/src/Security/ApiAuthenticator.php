<?php

namespace App\Security;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class ApiAuthenticator extends AbstractAuthenticator
{
    public function __construct(JWTEncoderInterface $jwtEncoder)
    {
        $this->jwtEncoder = $jwtEncoder;
    }
    public function supports(Request $request): ?bool
    {
        // TODO: Implement supports() method.
        return $request->headers->has('Authorization');
    }

    public function authenticate(Request $request): Passport
    {
        // TODO: Implement authenticate() method.
        $apiToken = $request->headers->get('Authorization');
        dump($apiToken);
        if (null === $apiToken) {
            // The token header was empty, authentication fails with HTTP Status
            // Code 401 "Unauthorized"
            throw new CustomUserMessageAuthenticationException('No API token provided');
        }else{
            $tokenArray = explode(' ',$apiToken);
            $token = $tokenArray[1];
            try {
                $decoded =$this->jwtEncoder->decode($token);
                // dump($decoded);
                $response = $this->$this->forward("App/Controller/PostController::index",[
                    "verified" => true,
                    "verified_data" => $decoded,
                    "message" => "JWT validated succesfully"
                ]);
                return $response;
                
            } catch (JWTDecodeFailureException $ex) {
                    // if no exception thrown then the token could be used
                    return [
                        "verified" => false,
                        "message" => "JWT token invalid",
                        "error" => $ex
                    ];
            }
            return new SelfValidatingPassport(new UserBadge($apiToken));
        }

    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // TODO: Implement onAuthenticationSuccess() method.
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        // TODO: Implement onAuthenticationFailure() method.
        $data = [
            // you may want to customize or obfuscate the message first
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())

            // or to translate this message
            // $this->translator->trans($exception->getMessageKey(), $exception->getMessageData())
        ];

        return new JsonResponse($data,200);
    }

//    public function start(Request $request, AuthenticationException $authException = null): Response
//    {
//        /*
//         * If you would like this class to control what happens when an anonymous user accesses a
//         * protected page (e.g. redirect to /login), uncomment this method and make this class
//         * implement Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface.
//         *
//         * For more details, see https://symfony.com/doc/current/security/experimental_authenticators.html#configuring-the-authentication-entry-point
//         */
//    }
}

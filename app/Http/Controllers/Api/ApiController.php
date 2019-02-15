<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 2/15/2019
 * Time: 5:41 PM
 */

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Post;

class ApiController extends Controller
{

    protected $statusCode ;

    /**
     * @param mixed $statusCode
     * @return ApiController
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @param $message
     * @return response
     */
    public function respondWithError($message)
    {
        $response = [
            "status" => $this->getStatusCode(),
            "message" => $message,
        ];

        return  $response;
    }
    /**
     * @param $data
     * @return mixed
     */
    public function respond($data)
    {
        $response = [
            "status" => $this->getStatusCode(),
            "message" => "successful",
        ];

        if(!empty($res))
        {
            $response += [
                "response" => $data
            ];
        }

        return  $response;
    }

    public function wrap($post, $data)
    {
        $post->title = $data['title'];
        $post->html = $data['html'];
        $post->sub_url = $data['sub_url'];
        $post->category = $data['category'];
        $post->auther = $data['auther'];
        $post->visits = $data['visits'];
        $post->cover_image = $data['cover_image'];

        return $post;
    }
}
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\ApiController;
use App\Repositories\PostRepository;

class PostController extends ApiController
{
    protected $postRepository;

    public function __construct()
    {
        $this->postRepository = new PostRepository();
    }

    public function getAllPosts()
    {
        return $this->setStatusCode(200)
            ->respond( $this->postRepository->getAllActivePosts() );
    }

    public function getPost( $sub_url )
    {
        return $this->setStatusCode(200)
            ->respond(
                $this->postRepository->getPostUsingSuburl( $sub_url )
            );
    }

    public function getPostsForMenu()
    {
        return $this->setStatusCode(200)
            ->respond($this->postRepository->getPostsAsTitleAndSuburl());
    }

}

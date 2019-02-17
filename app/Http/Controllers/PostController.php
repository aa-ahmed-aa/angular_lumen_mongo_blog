<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    public function addPost(Request $request)
    {
        if( $this->postRepository->addPost($request) )
        {
            return $this->setStatusCode(200)->respond("Post saved successfully");
        } else {
            return $this->setStatusCode(404)->respondWithError("Can't update the post");
        }
    }

    public function updatePost(Request $request, $postId)
    {
        if( $this->postRepository->updatePost($request, $postId) )
        {
            return $this->setStatusCode(200)->respond("Post updated successfully");
        } else {
            return $this->setStatusCode(404)->respondWithError("Can't update the post");
        };
    }

    public function deletePost($postId)
    {
        if( $this->postRepository->deletePostUsingPostId($postId) )
        {
           return $this->setStatusCode(200)->respond("Post deleted successfully");
        }else{
            return $this->setStatusCode(404)->respondWithError("Can't delete this post");
        }
    }
}

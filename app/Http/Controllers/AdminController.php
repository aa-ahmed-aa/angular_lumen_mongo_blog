<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 2/17/2019
 * Time: 12:19 PM
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiController;
use App\Repositories\AdminRepository;

class AdminController extends ApiController
{
    protected $adminRepository;

    public function __construct()
    {
        $this->adminRepository = new AdminRepository();
    }


    public function getAll()
    {
        return $this->setStatusCode(200)
            ->respond($this->adminRepository->getAllPosts());
    }

    public function addPost(Request $request)
    {
        if( $this->adminRepository->addPost($request) )
        {
            return $this->setStatusCode(200)->respond("Post saved successfully");
        } else {
            return $this->setStatusCode(404)->respondWithError("Can't save the post");
        }
    }

    public function updatePost(Request $request, $postId)
    {
        if( $this->adminRepository->updatePost($request, $postId) )
        {
            return $this->setStatusCode(200)->respond("Post updated successfully");
        } else {
            return $this->setStatusCode(404)->respondWithError("Can't update the post");
        };
    }

    public function deletePost($postId)
    {
        if( $this->adminRepository->deletePostUsingPostId($postId) )
        {
            return $this->setStatusCode(200)->respond("Post deleted successfully");
        }else{
            return $this->setStatusCode(404)->respondWithError("Can't delete this post");
        }
    }
}
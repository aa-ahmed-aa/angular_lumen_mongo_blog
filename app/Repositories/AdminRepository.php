<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 2/15/2019
 * Time: 6:15 PM
 */

namespace App\Repositories;


class AdminRepository extends Repository
{

    protected $entityName = "Post";

    public function __construct()
    {

        parent::__construct($this->entityName);

    }

    public function getAllPosts()
    {

        return $this->entityModel->get();

    }

    public function getPostUsingSuburl( $sub_url )
    {

        return $this->entityModel->where('sub_url', '=', $sub_url)->get();

    }

    public function addPost($request)
    {

        return $this->entityModel->create($request->all());

    }

    public function updatePost($request, $postId)
    {

        $oldPost = $this->entityModel->where('_id', '=', $postId)->get()->first();

        $oldPost = $this->wrap($oldPost ,$request->all());

        return $oldPost->save();

    }

    public function deletePostUsingPostId($postId)
    {

        return $this->entityModel->destroy($postId);

    }

}
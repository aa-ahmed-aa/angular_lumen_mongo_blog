<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 2/15/2019
 * Time: 6:15 PM
 */

namespace App\Repositories;


class PostRepository extends Repository
{
    protected $entityName = "Post";

    public function __construct()
    {
        parent::__construct($this->entityName);
    }

    public function getAllActivePosts()
    {
        return $this->entityModel->where( 'active', '=', true )->get();
    }
}
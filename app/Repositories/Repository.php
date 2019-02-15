<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 2/15/2019
 * Time: 6:14 PM
 */

namespace App\Repositories;

class Repository
{
    protected $entityName;
    protected $entityModel;

    public function __construct( string $entityModel )
    {
        if(empty($this->entityName))
        {
            throw new \RuntimeException(
                get_class($this) . '::$entityModel is not found'
            );
        }
        $this->entityName = 'App\\'.$entityModel;
        $this->entityModel = new $this->entityName();
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
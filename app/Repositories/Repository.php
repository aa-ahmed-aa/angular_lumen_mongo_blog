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

    public function wrap($post)
    {
        return [
            'title' => $post['title'],
            'sub_url'=> $post['sub_url'],
            'html'=> $post['html'],
            'id'=> $post['id'],
            'category'=> $post['category'],
            'author'=> $post['author'],
            'visits'=> $post['visits'],
            'active'=> $post['active'],
            'cover_image'=> $post['cover_image'],
            'created_at'=> $post['created_at'],
            'updated_at'=> $post['updated_at']
        ];
    }
}
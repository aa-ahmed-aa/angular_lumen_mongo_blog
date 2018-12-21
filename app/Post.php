<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 12/17/2018
 * Time: 8:51 PM
 */
namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Post extends Eloquent
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'html', 'sub_url', 'category', 'auther', 'visits', 'cover_image'
    ];

    protected $collection = 'posts';

}
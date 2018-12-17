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
    protected $collection = 'posts';
}
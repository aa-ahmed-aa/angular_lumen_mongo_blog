<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 12/17/2018
 * Time: 8:51 PM
 */
namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Adventure extends Eloquent
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'html', 'date'
    ];

    protected $collection = 'adventures';

}
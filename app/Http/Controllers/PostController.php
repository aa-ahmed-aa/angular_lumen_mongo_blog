<?php

namespace App\Http\Controllers;

use App\Post;

class PostController extends Controller
{
    public function getAllPosts()
    {
        return Post::get();
    }

    public function getPost( $sub_url )
    {
        return Post::where('sub_url', '=', $sub_url)->get();
    }

    public function getPostsForMenu()
    {
        return Post::get(['title','sub_url']);
    }
}

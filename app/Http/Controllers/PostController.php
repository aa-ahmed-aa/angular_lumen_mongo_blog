<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function getAllPosts()
    {
        return Post::get();
    }

    public function getPost( $sub_url )
    {
        return $this->response( Post::where('sub_url', '=', $sub_url)->get() );
    }

    public function getPostsForMenu()
    {
        return $this->response( Post::get(['title','sub_url']) );
    }

    public function addPost(Request $request)
    {
        $data = Post::create($request->all());
        return $this->response($data);
    }

    public function updatePost(Request $request, $postId)
    {
        $post_old = Post::where('_id', '=', $postId)->get()->first();

        $post_old->title = $request->all()['title'];
        $post_old->html = $request->all()['html'];
        $post_old->sub_url = $request->all()['sub_url'];
        $post_old->category = $request->all()['category'];
        $post_old->auther = $request->all()['auther'];
        $post_old->visits = $request->all()['visits'];
        $post_old->cover_image = $request->all()['cover_image'];


        $result = $post_old->save();

        return $this->response($result);
    }

    public function deletePost($postId)
    {
        if( Post::destroy($postId) )
        {
            $res = $this->response();
        }else{
            $res = $this->response( 404, "can't delete this post");
        }

        return $res;
    }

    private function response($res = null , $status = 200, $message = "successful")
    {
        $response = [
           "status" => $status,
            "message" => $message,
        ];

        if(!empty($res))
        {
            $response += [
                "response" => $res
            ];
        }

        return  $response;
    }
}

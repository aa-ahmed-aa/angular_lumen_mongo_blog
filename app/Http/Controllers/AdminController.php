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

    public function uploadImage(Request $request)
    {
        $ds = DIRECTORY_SEPARATOR;
        $storeFolder = 'images';

        // checking data is valid.
        if ( !empty($request) )
        {
            $data = $request->all();
            if ($request->file('image')->isValid())
            {
                //saving the main_image
                $extension = $request->file('image')->getClientOriginalExtension(); // getting image extension
                $main_image = time() . rand(11111,99999).'.'.$extension; // renameing image
                $request->file('image')->move($storeFolder, $main_image); // uploading file to given path
            }

            die('http://68.183.161.14:5050/'.$storeFolder.'/'.$main_image);
        }
        else
        {
            return 'File is Not Valid';
            return \Redirect::route('rests.index');
        }
    }

//    public function serveImage( $imageName )
//    {
//        die($imageName);
//        header('Content-type: image/jpeg');
//        die(file_get_contents('/var/www/blog/public/images/'.$imageName));
//    }
}
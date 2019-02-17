<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('posts', [ 'uses' => 'PostController@getAllPosts'] );

$router->get('posts/menu', [ 'uses' => 'PostController@getPostsForMenu'] );

$router->get('posts/{post_title}', [ 'uses' => 'PostController@getPost'] );

/**
 * Admin Routes
 */
$router->get('admin/posts', ['middleware' => 'auth', 'uses' => 'AdminController@getAll']);

$router->post('admin/posts/addPost', ['middleware' => 'auth', 'uses' => 'AdminController@addPost'] );

$router->put('admin/posts/updatePost/{postId}', ['middleware' => 'auth', 'uses' => 'AdminController@updatePost'] );

$router->delete('admin/posts/deletePost/{postId}', ['middleware' => 'auth', 'uses' => 'AdminController@deletePost'] );

$router->post('admin/uploadImage', ['uses' => 'AdminController@uploadImage'] );
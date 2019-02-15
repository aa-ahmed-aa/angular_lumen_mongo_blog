<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
    ];
});

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->name,
        'sub_url' => str_replace([" ","//", ".","/"], "_", $faker->name),
        'html' => $faker->randomHtml(),
        'category' => $faker->firstName,
        'auther' => $faker->name,
        'visits' => $faker->numberBetween(0,100000),
        'active' => $faker->boolean,
        'cover_image' => $faker->imageUrl()
    ];
});

$factory->define(App\Adventure::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->name,
        'sub_url' => $faker->str_replace([" ","//", ".","/"], "_", $faker->title),
        'cover_image' => $faker->imageUrl(),
        'date' => $faker->date(),
        'visits' => $faker->numberBetween(0,100000),
        'active' => $faker->boolean,
        'html' => $faker->randomHtml()
    ];
});
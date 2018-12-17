<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection($this->connection)
            ->table('actions', function (Blueprint $collection)
            {
            $collection->increments('id');
            $collection->string("title");
            $collection->string("sub_url");
            $collection->string("html");
            $collection->string("category");
            $collection->string("auther");
            $collection->bigInteger("visits");
            $collection->string("cover_image");
            $collection->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection($this->connection)
            ->table('actions', function (Blueprint $collection)
            {
                $collection->dropIfExists();
            });
    }
}

<?php

use Illuminate\Database\Seeder;
use App\Adventure;

class AdventuresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Adventure::class, 2)->create();
    }
}

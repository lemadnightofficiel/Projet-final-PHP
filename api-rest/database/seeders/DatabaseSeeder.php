<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        // Appel de ton UserSeeder
        $this->call(UserSeeder::class);
        //$this->call(SuperheroSeeder::class);
    }
}

?>
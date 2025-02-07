<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuperheroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('superheroes')->insert([
            [
                'real_name' => 'Tony Stark',
                'pseudo_name' => 'Iron Man',
                'gender' => 'Male',
                'origin_planet' => 'Earth',
                'description' => 'Genius billionaire and philanthropist.',
                'superpowers' => json_encode(['Intelligence', 'Engineering']),
                'city_of_protection' => 'New York',
                'gadgets' => json_encode(['Iron Man Suit']),
                'team' => 'Avengers',
                'vehicle' => 'Audi R8',
                'user_id' => 1,
            ],
            [
                'real_name' => 'Bruce Wayne',
                'pseudo_name' => 'Batman',
                'gender' => 'Male',
                'origin_planet' => null,
                'description' => 'The Dark Knight of Gotham.',
                'superpowers' => json_encode(['Martial Arts', 'Detective Skills']),
                'city_of_protection' => 'Gotham',
                'gadgets' => json_encode(['Batarang', 'Grappling Gun']),
                'team' => null,
                'vehicle' => 'Batmobile',
                'user_id' => 2,
            ],
        ]);
    }
}

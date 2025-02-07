<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuperheroesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('superheroes', function (Blueprint $table) {
            $table->id(); // Ajoute une colonne auto-incrémentée "id"
            $table->string('real_name'); // Nom réel du superhéros
            $table->string('superhero_name'); // Pseudo du superhéros
            $table->string('gender')->nullable(); // Sexe du superhéros
            $table->string('home_planet')->nullable(); // Planète d'origine
            $table->text('description')->nullable(); // Description
            $table->text('superpowers')->nullable(); // Superpouvoirs
            $table->string('city')->nullable(); // Ville de protection
            $table->text('gadgets')->nullable(); // Gadgets
            $table->string('team')->nullable(); // Équipe du superhéros
            $table->string('vehicle')->nullable(); // Véhicule du superhéros
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('superheroes');
    }
}

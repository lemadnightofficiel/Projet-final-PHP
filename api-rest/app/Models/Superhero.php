<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Superhero extends Model
{
    use HasFactory;

    /**
     * Les attributs assignables en masse.
     */
    protected $fillable = [
        'real_name',
        'pseudo_name',
        'gender',
        'origin_planet',
        'description',
        'superpowers',
        'city_of_protection',
        'gadgets',
        'team',
        'vehicle',
        'user_id',
    ];

    /**
     * Les attributs qui doivent être castés.
     */
    protected $casts = [
        'superpowers' => 'array',
        'gadgets' => 'array',
    ];

    /**
     * Relation : un superhéros appartient à un utilisateur.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

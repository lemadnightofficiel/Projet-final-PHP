<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Superhero extends Model
{
    use HasFactory;

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

    protected $casts = [
        'superpowers' => 'array',
        'gadgets' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
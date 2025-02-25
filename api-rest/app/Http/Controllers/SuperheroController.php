<?php

namespace App\Http\Controllers;

use App\Models\Superhero;
use Illuminate\Http\Request;

class SuperheroController extends Controller
{

    public function index()
    {
        $superheroes = Superhero::all();
        return response()->json($superheroes);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'real_name' => 'nullable|string|max:255',
            'pseudo_name' => 'required|string|max:255',
            'gender' => 'nullable|string|max:50',
            'origin_planet' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'superpowers' => 'nullable|array',
            'city_of_protection' => 'nullable|string|max:255',
            'gadgets' => 'nullable|array',
            'team' => 'nullable|string|max:255',
            'vehicle' => 'nullable|string|max:255',
            'user_id' => 'required|exists:users,id',
        ]);

        if (isset($validated['superpowers'])) {
            $validated['superpowers'] = json_encode($validated['superpowers']);
        }

        if (isset($validated['gadgets'])) {
            $validated['gadgets'] = json_encode($validated['gadgets']);
        }

        $superhero = Superhero::create($validated);

        return response()->json($superhero, 201);
    }

    public function show($id)
    {
        $superhero = Superhero::findOrFail($id);
        return response()->json($superhero);
    }

    public function update(Request $request, $id)
    {
        $superhero = Superhero::findOrFail($id);

        $validated = $request->validate([
            'real_name' => 'nullable|string|max:255',
            'pseudo_name' => 'sometimes|required|string|max:255',
            'gender' => 'nullable|string|max:50',
            'origin_planet' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'superpowers' => 'nullable|array',
            'city_of_protection' => 'nullable|string|max:255',
            'gadgets' => 'nullable|array',
            'team' => 'nullable|string|max:255',
            'vehicle' => 'nullable|string|max:255',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        if (isset($validated['superpowers'])) {
            $validated['superpowers'] = json_encode($validated['superpowers']);
        }

        if (isset($validated['gadgets'])) {
            $validated['gadgets'] = json_encode($validated['gadgets']);
        }

        $superhero->update($validated);

        return response()->json($superhero);
    }

    public function destroy($id)
    {
        $superhero = Superhero::findOrFail($id);
        $superhero->delete();

        return response()->json(['message' => "Superhéros supprimé avec succès"]);
    }
}
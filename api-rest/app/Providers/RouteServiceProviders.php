<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Le chemin de la route d'accueil de votre application.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * DÃ©finir les routes de l'application.
     */
    public function boot(): void
    {
        $this->routes(function () {
            Route::prefix('api')
                ->middleware('api')
                ->group(base_path('routes/api.php')); // Charge bien routes/api.php

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}

<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        // Laravel 8 からページネーションの既定ビューが Tailwind になったため、Bootstrap 4 を指定する
        Paginator::useBootstrap();
        //Schema::defaultStringLength(191);
    }
}

<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register(): void
	{
		$url = $this->app['url'];
		$this->app->singleton('url', function() use ( $url ) {
			return new \App\Services\Route\UrlGenerator($url);
		});
	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot(): void
	{
		//
		Paginator::defaultView('vendor.pagination.default');
	}
}

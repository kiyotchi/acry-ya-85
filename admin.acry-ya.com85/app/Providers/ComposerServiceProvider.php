<?php

namespace App\Providers;

use App\Services\FileService;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        //
		view()->composer('common.image_uploader', function($view){
			$file_service = new FileService();
            $post_max_size = $file_service->getPostMaxSize();
			return $view->with('post_max_size', $post_max_size);
		});
    }
}

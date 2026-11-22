<?php

namespace Tests;

use Illuminate\Contracts\Console\Kernel;

trait CreatesApplication
{
    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(Kernel::class)->bootstrap();

        // 本番相当DBをテストで初期化しないための安全装置
        $db = $app['config']->get('database.connections.' . $app['config']->get('database.default') . '.database');
        if (substr((string) $db, -5) !== '_test') {
            throw new \RuntimeException("Refusing to run tests against non-test database: {$db}");
        }

        return $app;
    }
}

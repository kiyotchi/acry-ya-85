<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable $exception)
    {
		if($this->isHttpException($exception)) {
			$status_code = $exception->getStatusCode();
			// 403
			if ($status_code == 403) {
				return response()->view('errors.403', ['is_error_page' => true], 403);
			}
			// 404
			if ($status_code == 404) {
				return response()->view('errors.404', ['is_error_page' => true], 404);
				// return redirect('/404.html'); // TOPページにリダイレクト
			}
			// 500
			return response()->view('errors.500', ['is_error_page' => true], 500);
		}
		return parent::render($request, $exception);
    }
}

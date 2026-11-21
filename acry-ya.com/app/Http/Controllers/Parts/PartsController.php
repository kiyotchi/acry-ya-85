<?php

namespace App\Http\Controllers\Parts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class PartsController
 *
 * @package App\Http\Controllers\Parts
 */
class PartsController extends Controller
{
	/**
	 * PartsController constructor.
	 */
	public function __construct()
	{
	}

	/**
	 * test
	 */
	public function test(){
		echo 1111;
	}

    /**
     * header
     */
    public function header(Request $request)
    {
        return view('common.header', ['is_error_page' => $request->is_error_page]);
    }

    /**
     * head_start
     */
    public function head_start()
    {
        return view('common.head_start');
    }

	/**
	 * body_end
	 */
	public function body_end()
	{
		return view('common.body_end');
	}

	/**
	 * footer
	 */
	public function footer()
	{
		return view('common.footer');
	}

	/**
	 * sidemenu
	 */
	public function sidemenu()
	{
		return view('common.sidemenu');
	}

	/**
	 * notice
	 */
	public function notice()
	{
		return view('common.notice');
	}

}

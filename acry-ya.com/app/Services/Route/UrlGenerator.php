<?php

namespace App\Services\Route;

use Illuminate\Routing\UrlGenerator as BaseUrlGenerator;

class UrlGenerator extends BaseUrlGenerator
{
	/**
	 * Create a new manager instance.
	 *
	 * @param Illuminate\Routing\UrlGenerator $url
	 */
	public function __construct(BaseUrlGenerator $url)
	{
		parent::__construct($url->routes, $url->request);
	}

	/**
	 * Format the given URL segments into a single URL.
	 *
	 * @param  string  $root
	 * @param  string  $path
	 * @return string
	 */
	public function format($root, $path, $route = NULL)
	{
		$path = parent::format($root, $path, $route = NULL);

		$mathes = null;
		preg_match("/([^\/]+?)?$/", $path, $mathes);
		$last = $mathes[0] ?? '';

		if (strpos($last, ".") === false) {
			return $path."/";
		}
		return $path;
	}
}
<?php

namespace App\Services;

/**
 *
 * Class FileService
 * @package App\Services
 */
class FileService
{
    /**
     * Determine the server 'post_max_size' as bytes.
     *
     * @return int
     */
    public static function getPostMaxSize()
    {
        if ( is_numeric($postMaxSize = ini_get('post_max_size')) ) {
            return (int)$postMaxSize;
        }

        $metric = strtoupper(substr($postMaxSize, -1));
        $postMaxSize = (int)$postMaxSize;

        switch ($metric) {
            case 'K':
                return $postMaxSize * 1024;
            case 'M':
                return $postMaxSize * 1048576;
            case 'G':
                return $postMaxSize * 1073741824;
            default:
                return $postMaxSize;
        }
    }
}

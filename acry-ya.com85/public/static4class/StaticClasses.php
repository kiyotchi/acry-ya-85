<?php
/* ===========================================================================
 * スタティッククラス
 * @Author
 * ========================================================================= */
class StaticClasses {
    
    public $host = '';
    
    // --------------------------------------------------------
    /**
     * コンストラクタ
     */
    public function __construct( $host ) {
        
        $this->host = $host;
        
        // オペレータクラスを呼ぶ
        $pathList = glob( __DIR__.'/operator/*.php' );
        foreach( $pathList as $path ){
            require_once $path;
            $pathinfo = pathinfo( $path );
            $className = $pathinfo['filename'];
            $this->{$className} = new $className( $this );
        }
        
        require_once __DIR__.'/View.php';
        $this->View = new View();
        
        require_once __DIR__.'/Helper.php';
        $this->Helper = new Helper();
    }
    
    // --------------------------------------------------------
}

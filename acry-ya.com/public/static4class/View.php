<?php
/* ===========================================================================
 * ビュー処理
 * @Author
 * ========================================================================= */
class View {
    
    public $viewDir = '';
    
    // --------------------------------------------------------
    /**
     * コンストラクタ
     */
    public function __construct() {
        $this->viewDir = __DIR__.'/views';
    }
    
    // --------------------------------------------------------
    /**
     * render
     */
    public function render( $path, $params, $returnContent = false ){
        $path = $this->viewDir . DIRECTORY_SEPARATOR . $path;
        
        foreach( $params as $key => $val ){
            ${$key} = $val;
        }
        ob_start();
        include $path;
        $content = ob_get_clean();
        
        if( $returnContent === false ){
            echo $content;
            return;
        }
        else {
            return $content;
        }
    }
    
    // --------------------------------------------------------
}

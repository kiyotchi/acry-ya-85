<?php
$link = mysql_connect( 'localhost', 'akuriya_root', 'pJ82BbZAcXBr' );
mysql_select_db('akuriya_db', $link);
mysql_query('SET NAMES sjis;', $link);
mysql_set_charset('sjis');

$columns = getColumnsOrder_history();

$insert = 'INSERT INTO order_history
    ( '. implode( ',',$columns ) . ')
    VALUES
    ( __KAKIKAE__ );';


$fh2 = fopen( dirname(__FILE__).'/check.txt', 'w' );
$fh = fopen( dirname(__FILE__).'/order_history__err.csv', 'r' );
while( $row = fgetcsv($fh) )
{
    $x = 0;
    $set = array();
    foreach( $row as $one )
    {
        if( $x == 3 )
        {
            $set[] = "'".mysql_real_escape_string($one)."'";
        }
        else
        {
            if( $one == '' ){ $set[] = 'NULL'; }
            else{ $set[] = $one; }
        }
        $x ++ ;
    }
    
    
    $exec = str_replace( '__KAKIKAE__', implode( ',', $set ), $insert );
    $res = mysql_query( $exec );
    //var_dump($res);
    if( $res === FALSE )
    {
        //echo mb_convert_encoding($exec, 'UTF-8', 'SJIS-WIN') . "\n";
        fwrite( $fh2, $exec . "\n\n\n\n\n----\n\n\n\n\n" );
        echo mysql_error();
        echo "\n\n\n";
    }
    
    
}
fclose( $fh );



mysql_close($link);


function getColumnsOrder_history()
{
    return array(
        'idorder_history',
        'orderid',
        'idmembers',
        'datas',
        'idorder',
        'getpoint',
        'pointstat',
        'createdate',
        'updatedate',
        'pointchangeflag',
        'addpoint',
        'minuspoint',
        'changepointdate',
        'init_point',
        'init_point_get',
        'init_point_save'
    );
}
<?php
try {
    $pdo = new PDO( 'mysql:host=localhost;dbname=akuriya_db','akuriya_root','pJ82BbZAcXBr');
} catch (PDOException $e) {
 exit('データベース接続失敗。'.$e->getMessage());
}
$pdo->exec('SET CHARACTER SET sjis');
$pdo->exec('set names sjis;');
mb_internal_encoding('sjis');
$columns = getColumnsOrder_history();
$hatena = array();
foreach( $columns as $one )
{
    $hatena[] = '?';
}
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$insert = 'INSERT INTO order_history
    ( '. implode( ',',$columns ) . ')
    VALUES
    ( ' . implode( ',', $hatena ) . ');';

$sth = $pdo->prepare($insert);

$fh = fopen( dirname(__FILE__).'/order_history__err.csv', 'r' );
while( $row = fgetcsv($fh) )
{
    //var_dump($row);
    try {
        $sth->execute( $row );
    }
    catch (PDOException $e) {
        echo "ErrorMes : " . $e->getMessage() . "\n";
    }
}
fclose( $fh );




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
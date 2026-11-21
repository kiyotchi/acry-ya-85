<?php
  
$data=[
	'type', 
    'key',
    'code', 
    'suu', 
    'mcost', 
    'pcost', 
    'thickness', 
    'body_color', 
    'Orders_URL', 
    '3d_URL', 
    'width_f', 
    'tate_f', 
    'X1_f', 
    'Y1_f',
    'X2_f',
    'Y2_f', 
    'full_f', 
    'white_f', 
    'full_white_f', 
    'pre_f', 
    'side_f',
    'disabled_f',
    'yobi_f',
    image_URL_f,
    white_URL_f,
    hinmei

];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  
    $data['type'] =htmlspecialchars( $_POST["type"], ENT_QUOTES, 'UTF-8') ;
 
	$data['key']=htmlspecialchars( $_POST["key"], ENT_QUOTES, 'UTF-8') ;
	$data['code']=htmlspecialchars( $_POST["code"], ENT_QUOTES, 'UTF-8') ;
	$data['suu']=htmlspecialchars( $_POST["suu"], ENT_QUOTES, 'UTF-8') ;
	$data['mcost']=htmlspecialchars( $_POST["mcost"], ENT_QUOTES, 'UTF-8') ;
	$data['pcost']=htmlspecialchars( $_POST["pcost"], ENT_QUOTES, 'UTF-8') ;
	$data['thickness']=htmlspecialchars( $_POST["thickness"], ENT_QUOTES, 'UTF-8') ;
	$data['body_color']=htmlspecialchars( $_POST["body_color"], ENT_QUOTES, 'UTF-8') ;
	$data['Orders_URL']=htmlspecialchars( $_POST["Orders_URL"], ENT_QUOTES, 'UTF-8') ;
	$data['3d_URL']=htmlspecialchars( $_POST["3d_URL"], ENT_QUOTES, 'UTF-8') ;
	$data['width_f']=htmlspecialchars( $_POST["width_f"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_f']=htmlspecialchars( $_POST["tate_f"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_f']=htmlspecialchars( $_POST["X1_f"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_f']=htmlspecialchars( $_POST["Y1_f"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_f']=htmlspecialchars( $_POST["X2_f"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_f']=htmlspecialchars( $_POST["Y2_f"], ENT_QUOTES, 'UTF-8') ;
	$data['full_f']=htmlspecialchars( $_POST["full_f"], ENT_QUOTES, 'UTF-8') ;
	$data['white_f']=htmlspecialchars( $_POST["white_f"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_f']=htmlspecialchars( $_POST["full_white_f"], ENT_QUOTES, 'UTF-8') ;
	$data['pre_f']=htmlspecialchars( $_POST["pre_f"], ENT_QUOTES, 'UTF-8') ;
	$data['side_f']=htmlspecialchars( $_POST["side_f"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_f']=htmlspecialchars( $_POST["disabled_f"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_f']=htmlspecialchars( $_POST["yobi_f"], ENT_QUOTES, 'UTF-8') ;
	$data['image_URL_f']=htmlspecialchars( $_POST["image_URL_f"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_f']=htmlspecialchars( $_POST["white_URL_f"], ENT_QUOTES, 'UTF-8') ;
	$data['fraise']=htmlspecialchars( $_POST["fraise"], ENT_QUOTES, 'UTF-8') ;
  	$data['hinmei']=htmlspecialchars( $_POST["hinmei"], ENT_QUOTES, 'UTF-8') ;
}

	 $json_array= json_encode($data);


?>
  
  
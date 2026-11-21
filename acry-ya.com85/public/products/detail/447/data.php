<?php
  
$data=[
	'type', 
    'key',
    'code', 
    'suu', 
    'mcost', 
    'pcost', 
    'body_thickness', 
    'pedestal_type', 
    'pedestal_thickness', 
    'body_color', 
    'pedestal_color', 
    'body_rear_mirror', 
    'pedestal_upper_mirror', 
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
    'image_URL_f', 
    'white_URL_f',
    'width_l', 
    'tate_l', 
    'X1_l', 
    'Y1_l', 
    'X2_l', 
    'Y2_l',
    'full_l',
    'white_l', 
    'full_white_l',
    'pre_l', 
    'side_l',
    'image_URL_l', 
    'white_URL_l',
    'width_b', 
    'tate_b',
    'X1_b', 
    'Y1_b', 
    'X2_b',
    'Y2_b', 
    'full_b',
    'white_b', 
    'full_white_b',
    'pre_b', 
    'side_b',
    'disabled_b',
    'yobi_b',
    'image_URL_b', 
    'white_URL_b',
    'width_r',
    'tate_r', 
    'X1_r',
    'Y1_r', 
    'X2_r', 
    'Y2_r', 
    'full_r',
    'white_r', 
    'full_white_r',
    'pre_r', 
    'side_r',
    'disabled_r',
    'yobi_r',
    'image_URL_r', 
    'white_URL_r',
    'width_t',
    'tate_t', 
    'X1_t', 
    'Y1_t',
    'X2_t', 
    'Y2_t', 
    'full_t',
    'white_t', 
    'full_white_t',
    'pre_t', 
    'side_t',
    'disabled_t',
    'yobi_t',
    'image_URL_t', 
    'white_URL_t',
    'width_d_bo', 
    'tate_d_bo', 
    'X1_d_bo', 
    'Y1_d_bo', 
    'X2_d_bo',
    'Y2_d_bo', 
    'full_d_bo', 
    
    'white_d_bo', 
    'full_white_d_do',
    'pre_d_bo', 
    'side_d_do',
    'disabled_d_do',
    'yobi_d_do',
    'image_URL_d_do', 
    'white_URL_d_do',
    'width_d_fr', 
    'tate_d_fr',
    'X1_d_fr', 
    'Y1_d_fr',
    'X2_d_fr',
    'Y2_d_fr', 
    'full_d_fr', 
    
    'white_d_fr', 
    'full_white_d_fr',
    'pre_d_fr', 
    'side_d_fr',
    'disabled_d_fr',
    'yobi_d_fr',
    'image_URL_d_fr', 
    'white_URL_d_fr',
    'hinmei'
 

];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  
    $data['type'] =htmlspecialchars( $_POST["type"], ENT_QUOTES, 'UTF-8') ;
 
	$data['key']=htmlspecialchars( $_POST["key"], ENT_QUOTES, 'UTF-8') ;
	$data['code']=htmlspecialchars( $_POST["code"], ENT_QUOTES, 'UTF-8') ;
	$data['suu']=htmlspecialchars( $_POST["suu"], ENT_QUOTES, 'UTF-8') ;
	$data['mcost']=htmlspecialchars( $_POST["mcost"], ENT_QUOTES, 'UTF-8') ;
	$data['pcost']=htmlspecialchars( $_POST["pcost"], ENT_QUOTES, 'UTF-8') ;
	$data['body_thickness']=htmlspecialchars( $_POST["body_thickness"], ENT_QUOTES, 'UTF-8') ;
	$data['pedestal_type']=htmlspecialchars( $_POST["pedestal_type"], ENT_QUOTES, 'UTF-8') ;
	$data['pedestal_thickness']=htmlspecialchars( $_POST["pedestal_thickness"], ENT_QUOTES, 'UTF-8') ;
	$data['body_color']=htmlspecialchars( $_POST["body_color"], ENT_QUOTES, 'UTF-8') ;
	$data['pedestal_color']=htmlspecialchars( $_POST["pedestal_color"], ENT_QUOTES, 'UTF-8') ;
	$data['body_rear_mirror']=htmlspecialchars( $_POST["body_rear_mirror"], ENT_QUOTES, 'UTF-8') ;
	$data['pedestal_upper_mirror']=htmlspecialchars( $_POST["pedestal_upper_mirror"], ENT_QUOTES, 'UTF-8') ;
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
	
	$data['width_l']=htmlspecialchars( $_POST["width_l"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_l']=htmlspecialchars( $_POST["tate_l"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_l']=htmlspecialchars( $_POST["X1_l"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_l']=htmlspecialchars( $_POST["Y1_l"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_l']=htmlspecialchars( $_POST["X2_l"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_l']=htmlspecialchars( $_POST["Y2_l"], ENT_QUOTES, 'UTF-8') ;
	
	$data['full_l']=htmlspecialchars( $_POST["full_l"], ENT_QUOTES, 'UTF-8') ;
	$data['white_l']=htmlspecialchars( $_POST["white_l"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_l']=htmlspecialchars( $_POST["full_white_l"], ENT_QUOTES, 'UTF-8') ;
	
	$data['pre_l']=htmlspecialchars( $_POST["pre_l"], ENT_QUOTES, 'UTF-8') ;
	$data['side_l']=htmlspecialchars( $_POST["side_l"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_l']=htmlspecialchars( $_POST["disabled_l"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_l']=htmlspecialchars( $_POST["yobi_l"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['image_URL_l']=htmlspecialchars( $_POST["image_URL_l"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_l']=htmlspecialchars( $_POST["white_URL_l"], ENT_QUOTES, 'UTF-8') ;
	
	
	
	
	$data['width_b']=htmlspecialchars( $_POST["width_b"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_b']=htmlspecialchars( $_POST["tate_b"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_b']=htmlspecialchars( $_POST["X1_b"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_b']=htmlspecialchars( $_POST["Y1_b"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_b']=htmlspecialchars( $_POST["X2_b"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_b']=htmlspecialchars( $_POST["Y2_b"], ENT_QUOTES, 'UTF-8') ;
	
	$data['full_b']=htmlspecialchars( $_POST["full_b"], ENT_QUOTES, 'UTF-8') ;
	$data['white_b']=htmlspecialchars( $_POST["white_b"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_b']=htmlspecialchars( $_POST["full_white_b"], ENT_QUOTES, 'UTF-8') ;
	
	$data['pre_b']=htmlspecialchars( $_POST["pre_b"], ENT_QUOTES, 'UTF-8') ;
	$data['side_b']=htmlspecialchars( $_POST["side_b"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_b']=htmlspecialchars( $_POST["disabled_b"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_b']=htmlspecialchars( $_POST["yobi_b"], ENT_QUOTES, 'UTF-8') ;
	
	$data['image_URL_b']=htmlspecialchars( $_POST["image_URL_b"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_b']=htmlspecialchars( $_POST["white_URL_b"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['width_r']=htmlspecialchars( $_POST["width_r"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_r']=htmlspecialchars( $_POST["tate_r"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_r']=htmlspecialchars( $_POST["X1_r"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_r']=htmlspecialchars( $_POST["Y1_r"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_r']=htmlspecialchars( $_POST["X2_r"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_r']=htmlspecialchars( $_POST["Y2_r"], ENT_QUOTES, 'UTF-8') ;
	
	$data['full_r']=htmlspecialchars( $_POST["full_r"], ENT_QUOTES, 'UTF-8') ;
	$data['white_r']=htmlspecialchars( $_POST["white_r"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_r']=htmlspecialchars( $_POST["full_white_r"], ENT_QUOTES, 'UTF-8') ;
	
	$data['pre_r']=htmlspecialchars( $_POST["pre_r"], ENT_QUOTES, 'UTF-8') ;
	$data['side_r']=htmlspecialchars( $_POST["side_r"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_r']=htmlspecialchars( $_POST["disabled_r"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_r']=htmlspecialchars( $_POST["yobi_r"], ENT_QUOTES, 'UTF-8') ;
	
	$data['image_URL_r']=htmlspecialchars( $_POST["image_URL_r"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_r']=htmlspecialchars( $_POST["white_URL_r"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['width_t']=htmlspecialchars( $_POST["width_t"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_t']=htmlspecialchars( $_POST["tate_t"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_t']=htmlspecialchars( $_POST["X1_t"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_t']=htmlspecialchars( $_POST["Y1_t"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_t']=htmlspecialchars( $_POST["X2_t"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_t']=htmlspecialchars( $_POST["Y2_t"], ENT_QUOTES, 'UTF-8') ;
	
	$data['full_t']=htmlspecialchars( $_POST["full_t"], ENT_QUOTES, 'UTF-8') ;
	$data['white_t']=htmlspecialchars( $_POST["white_t"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_t']=htmlspecialchars( $_POST["full_white_t"], ENT_QUOTES, 'UTF-8') ;
	
	$data['pre_t']=htmlspecialchars( $_POST["pre_t"], ENT_QUOTES, 'UTF-8') ;
	$data['side_t']=htmlspecialchars( $_POST["side_t"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_t']=htmlspecialchars( $_POST["disabled_t"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_t']=htmlspecialchars( $_POST["yobi_t"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['image_URL_t']=htmlspecialchars( $_POST["image_URL_t"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_t']=htmlspecialchars( $_POST["white_URL_t"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['width_d_bo']=htmlspecialchars( $_POST["width_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_d_bo']=htmlspecialchars( $_POST["tate_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_d_bo']=htmlspecialchars( $_POST["X1_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_d_bo']=htmlspecialchars( $_POST["Y1_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_d_bo']=htmlspecialchars( $_POST["X2_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_d_bo']=htmlspecialchars( $_POST["Y2_d_bo"], ENT_QUOTES, 'UTF-8') ;
	
	$data['full_d_bo']=htmlspecialchars( $_POST["full_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['white_d_bo']=htmlspecialchars( $_POST["white_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_d_bo']=htmlspecialchars( $_POST["full_white_d_bo"], ENT_QUOTES, 'UTF-8') ;
	
	$data['pre_d_bo']=htmlspecialchars( $_POST["pre_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['side_d_bo']=htmlspecialchars( $_POST["side_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_d_bo']=htmlspecialchars( $_POST["disabled_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_d_bo']=htmlspecialchars( $_POST["yobi_d_bo"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['image_URL_bo']=htmlspecialchars( $_POST["image_URL_d_bo"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_d_bo']=htmlspecialchars( $_POST["white_URL_d_bo"], ENT_QUOTES, 'UTF-8') ;
	
	
	$data['width_d_fr']=htmlspecialchars( $_POST["width_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['tate_d_fr']=htmlspecialchars( $_POST["tate_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['X1_d_fr']=htmlspecialchars( $_POST["X1_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['Y1_d_fr']=htmlspecialchars( $_POST["Y1_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['X2_d_fr']=htmlspecialchars( $_POST["X2_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['Y2_d_fr']=htmlspecialchars( $_POST["Y2_d_fr"], ENT_QUOTES, 'UTF-8') ;
	
	$data['full_d_fr']=htmlspecialchars( $_POST["full_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['white_d_fr']=htmlspecialchars( $_POST["white_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['full_white_d_fr']=htmlspecialchars( $_POST["full_white_d_fr"], ENT_QUOTES, 'UTF-8') ;
	
	$data['pre_d_fr']=htmlspecialchars( $_POST["pre_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['side_d_fr']=htmlspecialchars( $_POST["side_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['disabled_d_fr']=htmlspecialchars( $_POST["disabled_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['yobi_d_fr']=htmlspecialchars( $_POST["yobi_d_fr"], ENT_QUOTES, 'UTF-8') ;
	
	$data['image_URL_d_fr']=htmlspecialchars( $_POST["image_URL_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['white_URL_d_fr']=htmlspecialchars( $_POST["white_URL_d_fr"], ENT_QUOTES, 'UTF-8') ;
	$data['hinmei'] =htmlspecialchars( $_POST["hinmei"], ENT_QUOTES, 'UTF-8') ;
  
}

	 $json_array= json_encode($data);


?>
  
  
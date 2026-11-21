

	var h_co=new Array(0,"","",0,0,0,0,0,"","",0,0,"","");
	
	var h_fr=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");
	var h_le=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");
	var h_ba=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");
	var h_ri=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");
	var h_to=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");
	var h_d_to=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");
	var h_d_fr=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,"","","");




	h_co[0]=h_data_all['type']
	h_co[1]=h_data_all['key']
	h_co[2]=h_data_all['code']
	h_co[3]=h_data_all['suu']
	h_co[4]=h_data_all['pcost']
	//h_co[5]=h_data_all['pcost']
	h_co[5]=h_data_all['body_thickness']
	h_co[6]=h_data_all['pedestal_type']
	h_co[7]=h_data_all['pedestal_thickness']
	h_co[8]=h_data_all['body_color']
	h_co[9]=h_data_all['pedestal_color']
	h_co[10]=h_data_all['body_rear_mirror']
	h_co[11]=h_data_all['pedestal_upper_mirror']
	
	h_fr[0]=h_data_all['width_f']
	h_fr[1]=h_data_all['tate_f']
	h_fr[2]=h_data_all['X1_f']
	h_fr[3]=h_data_all['Y1_f']
	h_fr[4]=h_data_all['X2_f']
	h_fr[5]=h_data_all['Y2_f']
	
	h_fr[6]=h_data_all['full_f']
	h_fr[7]=h_data_all['white_f']
	h_fr[8]=h_data_all['full_white_f']
	h_fr[9]=h_data_all['pre_f']
	h_fr[10]=h_data_all['side_f']
	h_fr[11]=h_data_all['disabled_f']
	h_fr[12]=h_data_all['yobi_f']
	
	h_fr[13]=h_data_all['image_URL_f']
	h_fr[14]=h_data_all['white_URL_f']
	
	
	
	h_le[0]=h_data_all['width_l']
	h_le[1]=h_data_all['tate_l']
	h_le[2]=h_data_all['X1_l']
	h_le[3]=h_data_all['Y1_l']
	h_le[4]=h_data_all['X2_l']
	h_le[5]=h_data_all['Y2_l']
	
	h_le[6]=h_data_all['full_l']
	h_le[7]=h_data_all['white_l']
	h_le[8]=h_data_all['full_white_l']
	h_le[9]=h_data_all['pre_l']
	h_le[10]=h_data_all['side_l']
	h_le[11]=h_data_all['disabled_l']
	h_le[12]=h_data_all['yobi_l']
	
	h_le[13]=h_data_all['image_URL_l']
	h_le[14]=h_data_all['white_URL_l']
	
	h_ba[0]=h_data_all['width_b']
	h_ba[1]=h_data_all['tate_b']
	h_ba[2]=h_data_all['X1_b']
	h_ba[3]=h_data_all['Y1_b']
	h_ba[4]=h_data_all['X2_b']
	h_ba[5]=h_data_all['Y2_b']
	
	h_ba[6]=h_data_all['full_b']
	h_ba[7]=h_data_all['white_b']
	h_ba[8]=h_data_all['full_white_b']
	h_ba[9]=h_data_all['pre_b']
	h_ba[10]=h_data_all['side_b']
	h_ba[11]=h_data_all['disabled_b']
	h_ba[12]=h_data_all['yobi_b']
	
	h_ba[13]=h_data_all['image_URL_b']
	h_ba[14]=h_data_all['white_URL_b']
	
	h_ri[0]=h_data_all['width_r']
	h_ri[1]=h_data_all['tate_r']
	h_ri[2]=h_data_all['X1_r']
	h_ri[3]=h_data_all['Y1_r']
	h_ri[4]=h_data_all['X2_r']
	h_ri[5]=h_data_all['Y2_r']
	
	h_ri[6]=h_data_all['full_r']
	h_ri[7]=h_data_all['white_r']
	h_ri[8]=h_data_all['full_white_r']
	h_ri[9]=h_data_all['pre_r']
	h_ri[10]=h_data_all['side_r']
	h_ri[11]=h_data_all['disabled_r']
	h_ri[12]=h_data_all['yobi_r']
	
	h_ri[13]=h_data_all['image_URL_r']
	h_ri[14]=h_data_all['white_URL_r']
	
	
	h_to[0]=h_data_all['width_t']
	h_to[1]=h_data_all['tate_t']
	h_to[2]=h_data_all['X1_t']
	h_to[3]=h_data_all['Y1_t']
	h_to[4]=h_data_all['X2_t']
	h_to[5]=h_data_all['Y2_t']
	
	h_to[6]=h_data_all['full_t']
	h_to[7]=h_data_all['white_t']
	h_to[8]=h_data_all['full_white_t']
	h_to[9]=h_data_all['pre_t']
	h_to[10]=h_data_all['side_t']
	h_to[11]=h_data_all['disabled_t']
	h_to[12]=h_data_all['yobi_t']
	
	h_to[13]=h_data_all['image_URL_t']
	h_to[14]=h_data_all['white_URL_t']
	
	h_d_to[0]=h_data_all['width_d_bo']
	h_d_to[1]=h_data_all['tate_d_bo']
	h_d_to[2]=h_data_all['X1_d_bo']
	h_d_to[3]=h_data_all['Y1_d_bo']
	h_d_to[4]=h_data_all['X2_d_bo']
	h_d_to[5]=h_data_all['Y2_d_bo']
	
	h_d_to[6]=h_data_all['full_d_bo']
	h_d_to[7]=h_data_all['white_d_bo']
	h_d_to[8]=h_data_all['full_white_d_bo']
	h_d_to[9]=h_data_all['pre_d_bo']
	h_d_to[10]=h_data_all['side_d_bo']
	h_d_to[11]=h_data_all['disabled_d_bo']
	h_d_to[12]=h_data_all['yobi_d_bo']
	
	h_d_to[13]=h_data_all['image_URL_bo']

	//h_d_to[13]="/assets/images/products/UV/111111.png"

	h_d_to[14]=h_data_all['white_URL_d_bo']
	
	h_d_fr[0]=h_data_all['width_d_fr']
	h_d_fr[1]=h_data_all['tate_d_fr']
	h_d_fr[2]=h_data_all['X1_d_fr']
	h_d_fr[3]=h_data_all['Y1_d_fr']
	h_d_fr[4]=h_data_all['X2_d_fr']
	h_d_fr[5]=h_data_all['Y2_d_fr']
	
	h_d_fr[6]=h_data_all['full_d_fr']
	h_d_fr[7]=h_data_all['white_d_fr']
	h_d_fr[8]=h_data_all['full_white_d_fr']
	h_d_fr[9]=h_data_all['pre_d_fr']
	h_d_fr[10]=h_data_all['side_d_fr']
	h_d_fr[11]=h_data_all['disabled_d_fr']
	h_d_fr[12]=h_data_all['yobi_d_fr']
	
	h_d_fr[13]=h_data_all['image_URL_d_fr']
	h_d_fr[14]=h_data_all['white_URL_d_fr']
	




var scene;
var camera;
var mesh;

var x1;
var y1;

var x2;
var y2;
var iro;
// ##### ①仕様_表示項目 ケース ##### 
var b_width ;    //横幅(外寸)
var b_depth ;  //奥行(外寸)
var b_height ;   //高さ(外寸)
var b_width11 ;    //横幅(外寸)
var b_depth1 ;  //奥行(外寸)
var b_height1 ;   //高さ(外寸)

var b_thickness ;    //板厚
var b_color ;        //色
var b_rear_mirror ;  //背面ミラー

// ##### ②仕様_表示項目 台 ##### 
var p_height ;     //台高さ
var p_thickness ;  //台板厚
var p_color ;  //台色
var p_type ;       //台タイプ
var p_upper_mirror ; //台上面ミラー

// ##### ③仕様_表示項目 数量 ##### 
var c_suryo ; //数量
var h_direction= new Array(0,0,0,0); //加工面
var h_position= new Array(0,0,0,0);//基準角
var h_diameter= new Array(0,0,0,0);//穴直径
var h_x = new Array(0,0,0,0);         //穴位置_X
var h_y= new Array(0,0,0,0);         //穴位置_Y

var s_direction= new Array(0,0,0,0); //加工面
var s_position= new Array(0,0,0,0);//基準角
var s_x1= new Array(0,0,0,0);     //角抜き位置_X1
var s_y1= new Array(0,0,0,0);       //角抜き位置_Y1
var s_x2= new Array(0,0,0,0);     //角抜きサイズ_X2
var s_y2= new Array(0,0,0,0);       //角抜きサイズ_Y2
var s_angle= new Array(0,0,0,0);     //角抜き内角
var c_cnt_u=0;	//穴カウント上
var c_cnt_f=0;	//穴カウント前
var c_cnt_b=0;	//穴カウント背
var c_cnt_l=0;	//穴カウント左
var c_cnt_r=0;	//穴カウント右

var s_cnt_u=0;	//角抜きカウント上
var s_cnt_f=0;	//角抜きカウント前
var s_cnt_b=0;	//角抜きカウント背
var s_cnt_l=0;	//角抜きカウント左
var s_cnt_r=0;	//角抜きカウント右

var c_cnt=0;
var s_cnt=0;
var h_m_u_x1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_y1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_x2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_y2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_u_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_u_ban=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var m_u_cnt=0;

var h_m_f_x1=new Array(0,0,0,0,0,0,0,0);
var h_m_f_y1=new Array(0,0,0,0,0,0,0,0);
var h_m_f_x2=new Array(0,0,0,0,0,0,0,0);
var h_m_f_y2=new Array(0,0,0,0,0,0,0,0);
var h_m_f_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_f_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_f_cnt=0;

var h_m_b_x1=new Array(0,0,0,0,0,0,0,0);
var h_m_b_y1=new Array(0,0,0,0,0,0,0,0);
var h_m_b_x2=new Array(0,0,0,0,0,0,0,0);
var h_m_b_y2=new Array(0,0,0,0,0,0,0,0);

var h_m_b_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_b_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_b_cnt=0;

var h_m_l_x1=new Array(0,0,0,0,0,0,0,0);
var h_m_l_y1=new Array(0,0,0,0,0,0,0,0);
var h_m_l_x2=new Array(0,0,0,0,0,0,0,0);
var h_m_l_y2=new Array(0,0,0,0,0,0,0,0);

var h_m_l_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_l_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_l_cnt=0;

var h_m_r_x1=new Array(0,0,0,0,0,0,0,0);
var h_m_r_y1=new Array(0,0,0,0,0,0,0,0);
var h_m_r_x2=new Array(0,0,0,0,0,0,0,0);
var h_m_r_y2=new Array(0,0,0,0,0,0,0,0);

var h_m_r_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_r_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_r_cnt=0;
var iro;
	// ##### ①仕様_表示項目 ケース ##### 

	
	b_width= parseFloat(window.opener.document.form_semiorder.body_width.value) ;         //横幅(外寸)
	b_depth =parseFloat(window.opener.document.form_semiorder.body_depth.value) ; //奥行(外寸)
	b_height =parseFloat(window.opener.document.form_semiorder.body_height.value) ;       //高さ(外寸)
	
	b_thickness =parseFloat(window.opener.document.form_semiorder.body_thickness.value) ; //板厚
//	b_color ="0xddffff";// window.opener.document.form_semiorder.body_color.value ; //色
	
	// ##### ②仕様_表示項目 台 ##### 
	p_height =parseFloat(window.opener.document.form_semiorder.pedestal_height.value) ;     //台高さ
	p_thickness = parseFloat(window.opener.document.form_semiorder.pedestal_thickness.value) ; //台板厚
	p_color ="0x000000";// window.opener.document.form_semiorder.pedestal_color.value ;             //台色
	p_type =window.opener.document.form_semiorder.pedestal_type.value ;                   //台タイプ
	
	// ##### ③仕様_表示項目 数量 ##### 
	c_suryo =1;// parseFloat(window.opener.document.form_semiorder.suryo.value) ;  //数量
	
	// ##### ④穴あけ１～４_追加工詳細 ##### 
	
	h_direction[0] =window.opener.document.form_semiorder.hole_direction1.value ;        //加工面_1
	h_position[0] =window.opener.document.form_semiorder.hole_position1.value ;//基準角_1
	h_diameter[0] =parseFloat(window.opener.document.form_semiorder.hole_diameter1.value) ; //穴直径_1
	h_x[0]=parseFloat(window.opener.document.form_semiorder.hole_x1.value) ;               //穴位置_X1
	h_y[0] =parseFloat(window.opener.document.form_semiorder.hole_y1.value) ;               //穴位置_Y1
	
	
	h_direction[1] =window.opener.document.form_semiorder.hole_direction2.value ;       //加工面_2
	h_position[1] =window.opener.document.form_semiorder.hole_position2.value ; //基準角_2
	h_diameter[1] =parseFloat(window.opener.document.form_semiorder.hole_diameter2.value) ; //穴直径_2
	h_x[1] =parseFloat(window.opener.document.form_semiorder.hole_x2.value) ;               //穴位置_X2
	h_y[1]=parseFloat(window.opener.document.form_semiorder.hole_y2.value) ;               //穴位置_Y2
	
	h_direction[2] =window.opener.document.form_semiorder.hole_direction3.value ;       //加工面_3
	h_position[2] =window.opener.document.form_semiorder.hole_position3.value ; //基準角_3
	h_diameter[2] = parseFloat(window.opener.document.form_semiorder.hole_diameter3.value) ; //穴直径_3
	h_x[2] = parseFloat(window.opener.document.form_semiorder.hole_x3.value) ;               //穴位置_X3
	h_y[2] =parseFloat(window.opener.document.form_semiorder.hole_y3.value) ;               //穴位置_Y3
	
	h_direction[3] = window.opener.document.form_semiorder.hole_direction4.value ;       //加工面_4
	h_position[3] = window.opener.document.form_semiorder.hole_position4.value ; //基準角_4
	h_diameter[3] = parseFloat(window.opener.document.form_semiorder.hole_diameter4.value) ; //穴直径_4
	h_x[3] = parseFloat(window.opener.document.form_semiorder.hole_x4.value) ;               //穴位置_X4
	h_y[3] = parseFloat(window.opener.document.form_semiorder.hole_y4.value) ;               //穴位置_Y4



// ##### ⑤角抜き１～４_追加工詳細 ##### 
	s_direction[0] = window.opener.document.form_semiorder.square_direction1.value ; //加工面_1
	s_position[0] = window.opener.document.form_semiorder.square_position1.value ; //基準角_1
	s_x1[0] = parseFloat(window.opener.document.form_semiorder.square_x1_1.value) ;     //角抜き位置_X1
	s_y1[0] = parseFloat(window.opener.document.form_semiorder.square_y1_1.value) ;     //角抜き位置_Y1
	s_x2[0] = parseFloat(window.opener.document.form_semiorder.square_x2_1.value) ;     //角抜きサイズ_X1
	s_y2[0] = parseFloat(window.opener.document.form_semiorder.square_y2_1.value) ;     //角抜きサイズ_Y1
	s_angle[0] = window.opener.document.form_semiorder.square_angle1.value ;         //角抜き内角_1
	
	s_direction[1] = window.opener.document.form_semiorder.square_direction2.value ; //加工面_2
	s_position[1] = window.opener.document.form_semiorder.square_position2.value ; //基準角_2
	s_x1[1] = parseFloat(window.opener.document.form_semiorder.square_x1_2.value) ;     //角抜き位置_X2
	s_y1[1] = parseFloat(window.opener.document.form_semiorder.square_y1_2.value) ;     //角抜き位置_Y2
	s_x2[1] = parseFloat(window.opener.document.form_semiorder.square_x2_2.value) ;     //角抜きサイズ_X2
	s_y2[1] = parseFloat(window.opener.document.form_semiorder.square_y2_2.value) ;     //角抜きサイズ_Y2
	s_angle[1]= window.opener.document.form_semiorder.square_angle2.value ;         //角抜き内角_2
	
	s_direction[2] = window.opener.document.form_semiorder.square_direction3.value ; //加工面_3
	s_position[2] = window.opener.document.form_semiorder.square_position3.value ; //基準角_3
	s_x1[2] = parseFloat(window.opener.document.form_semiorder.square_x1_3.value) ;     //角抜き位置_X3
	s_y1[2] = parseFloat(window.opener.document.form_semiorder.square_y1_3.value) ;     //角抜き位置_Y3
	s_x2[2] = parseFloat(window.opener.document.form_semiorder.square_x2_3.value) ;     //角抜きサイズ_X3
	s_y2[2] = parseFloat(window.opener.document.form_semiorder.square_y2_3.value) ;     //角抜きサイズ_Y3
	s_angle[2] = window.opener.document.form_semiorder.square_angle3.value ;         //角抜き内角_3
	
	s_direction[3] = window.opener.document.form_semiorder.square_direction4.value ; //加工面_4
	s_position[3] = window.opener.document.form_semiorder.square_position4.value ; //基準角_4
	s_x1[3] = parseFloat(window.opener.document.form_semiorder.square_x1_4.value) ;     //角抜き位置_X4
	s_y1[3] = parseFloat(window.opener.document.form_semiorder.square_y1_4.value) ;     //角抜き位置_Y4
	s_x2[3] = parseFloat(window.opener.document.form_semiorder.square_x2_4.value) ;     //角抜きサイズ_X4
	s_y2[3] = parseFloat(window.opener.document.form_semiorder.square_y2_4.value) ;     //角抜きサイズ_Y4
	s_angle[3] = window.opener.document.form_semiorder.square_angle4.value ;         //角抜き内角_4

	
	iro="0xddffff";//"0x0000ff";//window.opener.document.form_semiorder.iro.value;
var container;
     
var g_seek=0;
var g_s=10;
var renderer;
var scene;
var scene2;
var camera;
var mesh;
var r_flag=1;
var x1;
var y1;

var x2;
var y2;
var iro;
var tani=0.6;
var atu=0.5;
var tani2=0.3;
var atu2=0.3;

/* ##### ①仕様_表示項目 ケース ##### */
var b_width ;    //横幅(外寸)
var b_depth ; //奥行(外寸)
var b_height ;   //高さ(外寸)
var b_width11 ;    //横幅(外寸)
var b_depth1 ; //奥行(外寸)
var b_height1 ;   //高さ(外寸)

var b_thickness ;    //板厚
var b_color ;        //色
var b_rear_mirror ;  //背面ミラー

/* ##### ②仕様_表示項目 台 ##### */
var p_height ;     //台高さ
var p_thickness ;  //台板厚
var p_color ; //台色
var p_type ;       //台タイプ
var p_upper_mirror ; //台上面ミラー

/* ##### ③仕様_表示項目 数量 ##### */
var c_suryo ; //数量
var h_direction= new Array(0,0,0,0,0,0,0,0); //加工面
var h_position= new Array(0,0,0,0,0,0,0,0); //基準角
var h_diameter= new Array(0,0,0,0,0,0,0,0); //穴直径
var h_x = new Array(0,0,0,0,0,0,0,0);         //穴位置_X
var h_y= new Array(0,0,0,0,0,0,0,0);         //穴位置_Y

var s_direction= new Array(0,0,0,0,0,0); //加工面
var s_position= new Array(0,0,0,0,0,0); //基準角
var s_x1= new Array(0,0,0,0,0,0);     //角抜き位置_X1
var s_y1= new Array(0,0,0,0,0,0);       //角抜き位置_Y1
var s_x2= new Array(0,0,0,0,0,0);      //角抜きサイズ_X2
var s_y2= new Array(0,0,0,0,0,0);       //角抜きサイズ_Y2
var s_angle= new Array(0,0,0,0,0,0);     //角抜き内角
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
var h_m_u_x1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_y1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_x2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_y2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_u_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_u_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_u_ban=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var m_u_cnt=0;

var h_m_f_x1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_f_y1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_f_x2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_f_y2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_f_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_f_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_f_cnt=0;

var h_m_b_x1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_b_y1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_b_x2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_b_y2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);

var h_m_b_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_b_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_b_cnt=0;

var h_m_l_x1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_l_y1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_l_x2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_l_y2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);

var h_m_l_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_l_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_l_cnt=0;

var h_m_r_x1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_r_y1=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_r_x2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var h_m_r_y2=new Array(0,0,0,0,0,0,0,0,0,0,0,0);

var h_m_r_sx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var h_m_r_sy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//1,2,3,4 u:5 s:6 mu:0;
var m_r_cnt=0;
var message = document.getElementById("message");

var geometry = new THREE.Geometry();
var geometry2 = new THREE.Geometry();

var geometry12 = new THREE.Geometry();
var geometry13 = new THREE.Geometry();
var geometry14 = new THREE.Geometry();
var geometry15 = new THREE.Geometry();
var geometry16 = new THREE.Geometry();
var geometry17 = new THREE.Geometry();
var geometry62 = new THREE.Geometry();
var geometry63 = new THREE.Geometry();
var geometry64 = new THREE.Geometry();
var geometry65 = new THREE.Geometry();
var geometry66 = new THREE.Geometry();
var geometry67 = new THREE.Geometry();
var geometry70 = new THREE.Geometry();
var geometry71 = new THREE.Geometry();
var geometry72 = new THREE.Geometry();
var geometry73 = new THREE.Geometry();
var geometry74 = new THREE.Geometry();
var geometry75 = new THREE.Geometry();
var geometry76 = new THREE.Geometry();
var geometry77 = new THREE.Geometry();
var geometry80 = new THREE.Geometry();
var geometry81 = new THREE.Geometry();
var geometry91 = new THREE.Geometry();
var geometry92 = new THREE.Geometry();
var geometry93 = new THREE.Geometry();


var cnt80=0;
var s_t_0=40;
var s_t_1=40;
var s_t_2=40;
var s_t_3=40;
var s_t_4=40;
var colo;
var light1;
var light2;
var light3;
var light4;
var light5;
var light6;
var light7;
var light;
var left, right, up, down;
left = false;
right = false;
up = false;
down = false;
var str1 = "";
var c_local_x=0.0001;
var c_local_y=0.0001;
var ll=0.0001;


function draw_init()
{
	/* ##### ①仕様_表示項目 ケース ##### */

	
	b_width=500;// parseFloat(window.opener.document.form_semiorder.body_width.value) ;         //横幅(外寸)
	b_depth =500;//parseFloat(window.opener.document.form_semiorder.body_depth.value) ;  //奥行(外寸)
	b_height =300;//parseFloat(window.opener.document.form_semiorder.body_height.value) ;       //高さ(外寸)
	
	b_thickness =5;//parseFloat(window.opener.document.form_semiorder.body_thickness.value) ; //板厚
//	b_color ="0xddffff";// window.opener.document.form_semiorder.body_color.value ;  //色
	
	/* ##### ②仕様_表示項目 台 ##### */
	p_height =0;//parseFloat(window.opener.document.form_semiorder.pedestal_height.value) ;      //台高さ
	p_thickness =0;// parseFloat(window.opener.document.form_semiorder.pedestal_thickness.value) ; //台板厚
	p_color ="0x000000";// window.opener.document.form_semiorder.pedestal_color.value ;               //台色
	p_type ="台無し";//window.opener.document.form_semiorder.pedestal_type.value ;                   //台タイプ
	if (isNaN(p_height)){
		p_height=0;
	}
	if (isNaN(p_thickness)){
		p_thickness=0;
	}
	
	/* ##### ③仕様_表示項目 数量 ##### */
	c_suryo =1;// parseFloat(window.opener.document.form_semiorder.suryo.value) ;  //数量
	
	/* ##### ④穴あけ１～４_追加工詳細 ##### */
	
	h_direction[0] ="前面";// window.opener.document.form_semiorder.hole_direction1.value ;        //加工面_1
	h_position[0] ="B";//window.opener.document.form_semiorder.hole_position1.value ;     //基準角_1
	h_diameter[0] =5;//parseFloat(window.opener.document.form_semiorder.hole_diameter1.value) ; //穴直径_1
	h_x[0]=25;//parseFloat(window.opener.document.form_semiorder.hole_x1.value) ;               //穴位置_X1
	h_y[0] =40;//parseFloat(window.opener.document.form_semiorder.hole_y1.value) ;               //穴位置_Y1
	
	
	h_direction[1] ="前面";// window.opener.document.form_semiorder.hole_direction2.value ;       //加工面_2
	h_position[1] ="B";//window.opener.document.form_semiorder.hole_position2.value ;     //基準角_2
	h_diameter[1] =5;//parseFloat(window.opener.document.form_semiorder.hole_diameter2.value) ; //穴直径_2
	h_x[1] =65;//parseFloat(window.opener.document.form_semiorder.hole_x2.value) ;               //穴位置_X2
	h_y[1]=40;//parseFloat(window.opener.document.form_semiorder.hole_y2.value) ;               //穴位置_Y2
	
	h_direction[2] ="前面";// window.opener.document.form_semiorder.hole_direction3.value ;       //加工面_3
	h_position[2] ="B";//window.opener.document.form_semiorder.hole_position3.value ;     //基準角_3
	h_diameter[2] =5;// parseFloat(window.opener.document.form_semiorder.hole_diameter3.value) ; //穴直径_3
	h_x[2] =115;// parseFloat(window.opener.document.form_semiorder.hole_x3.value) ;               //穴位置_X3
	h_y[2] =70;//parseFloat(window.opener.document.form_semiorder.hole_y3.value) ;               //穴位置_Y3
	
	h_direction[3] ="前面";//  window.opener.document.form_semiorder.hole_direction4.value ;       //加工面_4
	h_position[3] ="B";// window.opener.document.form_semiorder.hole_position4.value ;     //基準角_4
	h_diameter[3] =5;// parseFloat(window.opener.document.form_semiorder.hole_diameter4.value) ; //穴直径_4
	h_x[3] =165;// parseFloat(window.opener.document.form_semiorder.hole_x4.value) ;               //穴位置_X4
	h_y[3] =70;// parseFloat(window.opener.document.form_semiorder.hole_y4.value) ;               //穴位置_Y4


	h_direction[4] ="前面";      //加工面_4
	h_position[4] ="C";     //基準角_4
	h_diameter[4] =5;// //穴直径_4
	h_x[4] =40;//               //穴位置_X4
	h_y[4] =110;// 

	h_direction[5] ="前面";      //加工面_4
	h_position[5] ="C";     //基準角_4
	h_diameter[5] =5;// //穴直径_4
	h_x[5] =95;//               //穴位置_X4
	h_y[5] =110;// 

	h_direction[6] ="前面";      //加工面_4
	h_position[6] ="C";     //基準角_4
	h_diameter[6] =5;// //穴直径_4
	h_x[6] =155;//               //穴位置_X4
	h_y[6] =80;// 
	
	h_direction[7] ="前面";      //加工面_4
	h_position[7] ="C";     //基準角_4
	h_diameter[7] =5;// //穴直径_4
	h_x[7] =185;//               //穴位置_X4
	h_y[7] =80;// 


/* ##### ⑤角抜き１～４_追加工詳細 ##### */
	s_direction[0] ="前面";// window.opener.document.form_semiorder.square_direction1.value ; //加工面_1
	s_position[0] ="B";// window.opener.document.form_semiorder.square_position1.value ;  //基準角_1
	s_x1[0] =30;// parseFloat(window.opener.document.form_semiorder.square_x1_1.value) ;     //角抜き位置_X1
	s_y1[0] =0;// parseFloat(window.opener.document.form_semiorder.square_y1_1.value) ;     //角抜き位置_Y1
	s_x2[0] =30;// parseFloat(window.opener.document.form_semiorder.square_x2_1.value) ;     //角抜きサイズ_X1
	s_y2[0] =30;// parseFloat(window.opener.document.form_semiorder.square_y2_1.value) ;     //角抜きサイズ_Y1
	s_angle[0] =2;// window.opener.document.form_semiorder.square_angle1.value ;         //角抜き内角_1
	
	s_direction[1] ="前面";// window.opener.document.form_semiorder.square_direction2.value ; //加工面_2
	s_position[1] ="C";// window.opener.document.form_semiorder.square_position2.value ;  //基準角_2
	s_x1[1] =40;// parseFloat(window.opener.document.form_semiorder.square_x1_2.value) ;     //角抜き位置_X2
	s_y1[1] =0;// parseFloat(window.opener.document.form_semiorder.square_y1_2.value) ;     //角抜き位置_Y2
	s_x2[1] =50;// parseFloat(window.opener.document.form_semiorder.square_x2_2.value) ;     //角抜きサイズ_X2
	s_y2[1] =100;// parseFloat(window.opener.document.form_semiorder.square_y2_2.value) ;     //角抜きサイズ_Y2
	s_angle[1]=2;// window.opener.document.form_semiorder.square_angle2.value ;         //角抜き内角_2
	
	s_direction[2] ="前面";//window.opener.document.form_semiorder.square_direction3.value ; //加工面_3
	s_position[2] ="B";// window.opener.document.form_semiorder.square_position3.value ;  //基準角_3
	s_x1[2] =120;// parseFloat(window.opener.document.form_semiorder.square_x1_3.value) ;     //角抜き位置_X3
	s_y1[2] =0;// parseFloat(window.opener.document.form_semiorder.square_y1_3.value) ;     //角抜き位置_Y3
	s_x2[2] =40;// parseFloat(window.opener.document.form_semiorder.square_x2_3.value) ;     //角抜きサイズ_X3
	s_y2[2] = 60;//parseFloat(window.opener.document.form_semiorder.square_y2_3.value) ;     //角抜きサイズ_Y3
	s_angle[2] = 2;//window.opener.document.form_semiorder.square_angle3.value ;         //角抜き内角_3
	
	s_direction[3] ="前面";// window.opener.document.form_semiorder.square_direction4.value ; //加工面_4
	s_position[3] ="C";// window.opener.document.form_semiorder.square_position4.value ;  //基準角_4
	s_x1[3] =160;// parseFloat(window.opener.document.form_semiorder.square_x1_4.value) ;     //角抜き位置_X4
	s_y1[3] =0;// parseFloat(window.opener.document.form_semiorder.square_y1_4.value) ;     //角抜き位置_Y4
	s_x2[3] = 20;//parseFloat(window.opener.document.form_semiorder.square_x2_4.value) ;     //角抜きサイズ_X4
	s_y2[3] =70;// parseFloat(window.opener.document.form_semiorder.square_y2_4.value) ;     //角抜きサイズ_Y4
	s_angle[3] =2;// window.opener.document.form_semiorder.square_angle4.value ;         //角抜き内角_4

	s_direction[4] ="左面";
	s_position[4] ="C";
	s_x1[4] =200; 
	s_y1[4] =0; 
	s_x2[4] = 100;  
	s_y2[4] =10;
	s_angle[4] =5;

	s_direction[5] ="右面";
	s_position[5] ="C";
	s_x1[5] =200; 
	s_y1[5] =0; 
	s_x2[5] = 100;  
	s_y2[5] =10;
	s_angle[5] =5;

	ll=1500+(b_width-600)*1.4;
	
	iro="0xddffff";//"0x0000ff";//window.opener.document.form_semiorder.iro.value;
	
      renderer = new THREE.WebGLRenderer({ antialias:true });
 //  //   renderer.setSize(1200, 960);
	renderer.setSize(window.innerWidth, window.innerHeight);
	shadowMapEnabled = true;
      //背景色
      renderer.setClearColorHex(0x000055, 0.9);
      document.body.appendChild(renderer.domElement);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight,1,65000); 
	//camera = new THREE.PerspectiveCamera(38, 1200 / 960,1,100);
	
	camera.position = new THREE.Vector3(30+c_local_x, 0+c_local_y, ll);
      camera.lookAt(new THREE.Vector3(0+c_local_x, 0+c_local_y, 0));
	
      scene.add(camera);

	var controls = new THREE.OrbitControls(camera);
	
	controls.userZoom = true;    //true:ズーム操作可能,false:ズーム操作不可
	controls.userZoomSpeed = 1.0;

var mousedown = false;	
	var lx=0;
	var ly=0;
	var llx1=0;
	var llx2=0;
	var lly1=0;
	var lly2=0;
 // 	var baseTime = +new Date;

	renderer.domElement.addEventListener( 'touchstart', onDocumentTouchStart, false );      
	
//###################################################

	if(window.MouseScrollEvent){

		// ------------------------------------------------------------
		// マウスホイールを回すと実行されるイベント（FireFox 専用）
		// ------------------------------------------------------------
		document.addEventListener("DOMMouseScroll", function (e) {
			
			// 回転量
			var delta = e.detail;

			// 出力テスト
			camera.position.z =camera.position.z- delta*5;
			if (camera.position.z<1){
				camera.position.z=1
			}
			if (camera.position.z>62000){
				camera.position.z=62000
			}
		});
	}

//###################################################


renderer.domElement.addEventListener( 'touchend', gesturestart, false );
	function gesturestart(event) {
		event.preventDefault();

		//alert(event.touches.length);
		var n=event.touches.length;



		//alert(n);
		if(n==2){
		}
		if (n>2){
			if(r_flag==0){
					r_flag=1;
					scene.remove(mesh80);
					scene.remove(mesh81);
				}else{
					r_flag=0;
					scene.add(mesh80);
					scene.remove(mesh81);
				}
			//draw_3d(controls);


		}
		
	}

	renderer.domElement.addEventListener("touchmove", onTouchMove, false);
	function onDocumentTouchStart(event) {

		event.preventDefault();
		lx=event.pageX;
		ly=event.pageY;
		var n=event.touches.length;
		if(n==2){
			llx1=event.touches[0].pageX
			lly1=event.touches[0].pageY
			
			llx2=event.touches[1].pageX
			lly2=event.touches[1].pageY

			//alert(llx1 + "aa"+ llx2+ "bb"+ lly1+ "cc"+ lly2);
		}
		//prevPosition = {x: event.pageX, y: event.pageY};
	}
	// タッチイベントを拾う
	function onTouchMove(event) {
		event.preventDefault();
		var xx=0;
		var yy=0;

		var n=event.touches.length;
		
		if (n>2){
			if(r_flag==0){
					r_flag=1;
					scene.remove(mesh80);
					scene.remove(mesh81);
				}else{
					r_flag=0;
					scene.add(mesh80);
					scene.remove(mesh81);
				}
		}else{
			
		if(n>1){
			var xx1=0;
			var xx2=0;
			var yy1=0;
			var yy2=0;
			var dd1=0;
			var dd2=0;

			xx1=event.touches[0].pageX
			xx2=event.touches[1].pageX

			yy1=event.touches[0].pageY
			yy2=event.touches[1].pageY
			dd1=Math.sqrt((llx2-llx1)*(llx2-llx1)+(lly2-lly1)*(lly2-lly1))
			dd2=Math.sqrt((xx2-xx1)*(xx2-xx1)+(yy2-yy1)*(yy2-yy1))
			if (dd2>dd1){
				camera.position.z =camera.position.z- (dd2-dd1)*0.1;
			}else{
				camera.position.z =camera.position.z- (dd2-dd1)*0.1;
			}
			if (camera.position.z<1){
				camera.position.z=1
			}
			if (camera.position.z>62000){
				camera.position.z=62000
			}

		}else{
		yy=lx-event.pageX;
		xx=ly-event.pageY;
		
		

   		mesh.rotation.x -= xx* 0.0001;
   		mesh.rotation.y -= yy* 0.0001;

   		mesh11.rotation.x -=  xx* 0.0001;
   		mesh11.rotation.y -= yy* 0.0001;

   		mesh12.rotation.x -=  xx* 0.0001;
   		mesh12.rotation.y -=  yy* 0.0001;
   		mesh13.rotation.x -=   xx* 0.0001;
   		mesh13.rotation.y -=  yy* 0.0001;

   		mesh14.rotation.x -=   xx* 0.0001;
   		mesh14.rotation.y -=  yy* 0.0001;
   		mesh15.rotation.x -=   xx* 0.0001;
   		mesh15.rotation.y -=  yy* 0.0001;
   		mesh16.rotation.x -=   xx* 0.0001;
   		mesh16.rotation.y -=  yy* 0.0001;
   		mesh17.rotation.x -=   xx* 0.0001;
   		mesh17.rotation.y -=  yy* 0.0001;
   	
		mesh41.rotation.x -=   xx* 0.0001;
   		mesh41.rotation.y -=  yy* 0.0001;
	
   		mesh42.rotation.x -=   xx* 0.0001;
   		mesh42.rotation.y -= yy* 0.0001;
   		mesh43.rotation.x -=   xx* 0.0001;
   		mesh43.rotation.y -=  yy* 0.0001;
   		mesh44.rotation.x -=   xx* 0.0001;
   		mesh44.rotation.y -=  yy* 0.0001;
   		mesh45.rotation.x -=   xx* 0.0001;
   		mesh45.rotation.y -=  yy* 0.0001;

   		mesh46.rotation.x -=   xx* 0.0001;
  		mesh46.rotation.y -=  yy* 0.0001;
   		mesh47.rotation.x -=   xx* 0.0001;
   		mesh47.rotation.y -=  yy* 0.0001;
   		mesh48.rotation.x -=   xx* 0.0001;
   		mesh48.rotation.y -= yy* 0.0001;
		mesh50.rotation.x -=   xx* 0.0001;
   		mesh50.rotation.y -= yy* 0.0001;
		mesh51.rotation.x -=   xx* 0.0001;
   		mesh51.rotation.y -= yy* 0.0001;
		mesh52.rotation.x -=   xx* 0.0001;
   		mesh52.rotation.y -=  yy* 0.0001;
		mesh53.rotation.x -=   xx* 0.0001;
   		mesh53.rotation.y -=  yy* 0.0001;
		mesh54.rotation.x -=  xx* 0.0001;
   		mesh54.rotation.y -= yy* 0.0001;
		mesh60.rotation.x -=   xx* 0.0001;
   		mesh60.rotation.y -=  yy* 0.0001;
		mesh62.rotation.x -=   xx* 0.0001;
   		mesh62.rotation.y -=  yy* 0.0001;
		mesh63.rotation.x -=   xx* 0.0001;
   		mesh63.rotation.y -=  yy* 0.0001;
		mesh64.rotation.x -=   xx* 0.0001;
   		mesh64.rotation.y -= yy* 0.0001;
		mesh65.rotation.x -=  xx* 0.0001;
   		mesh65.rotation.y -= yy* 0.0001;
		mesh66.rotation.x -=   xx* 0.0001;
   		mesh66.rotation.y -=  yy* 0.0001;
	//	mesh67.rotation.x -=  xx* 0.0001;
   	//	mesh67.rotation.y -=  yy* 0.0001;
		mesh70.rotation.x -=  xx* 0.0001;
		mesh70.rotation.y -=  yy* 0.0001;
		mesh71.rotation.x -=  xx* 0.0001;
		mesh71.rotation.y -=  yy* 0.0001;
		mesh72.rotation.x -=  xx* 0.0001;
		mesh72.rotation.y -=  yy* 0.0001;
		mesh73.rotation.x -=   xx* 0.0001;
		mesh73.rotation.y -= yy* 0.0001;
		mesh74.rotation.x -=  xx* 0.0001;
		mesh74.rotation.y -= yy* 0.0001;
		mesh75.rotation.x -=   xx* 0.0001;
		mesh75.rotation.y -=  yy* 0.0001;

		mesh76.rotation.x -=  xx* 0.0001;
		mesh76.rotation.y -=  yy* 0.0001;
	//	mesh77.rotation.x -=   xx* 0.0001;
	//	mesh77.rotation.y -=  yy* 0.0001;
		mesh80.rotation.x -=   xx* 0.0001;
		mesh80.rotation.y -= yy* 0.0001;
		mesh81.rotation.x -=   xx* 0.0001;
		mesh81.rotation.y -=  yy* 0.0001;
	
		mesh91.rotation.x -=   xx* 0.0001;
		mesh91.rotation.y -=  yy* 0.0001;
		mesh92.rotation.x -=  xx* 0.0001;
		mesh92.rotation.y -=  yy* 0.0001;
		mesh93.rotation.x -=   xx* 0.0001;
		mesh93.rotation.y -= yy* 0.0001;
		json.rotation.x -= moveDistance.x * 0.01;
		json.rotation.y -= moveDistance.x * 0.01;
		json2.rotation.x -= moveDistance.x * 0.01;
		json2.rotation.y -= moveDistance.x * 0.01;
		//prevPosition = {x: e.pageX, y: e.pageY};		
		render();
		lx=event.pageX;
		ly=event.pageY;


		}
		}
	}


 renderer.domElement.addEventListener('mousedown', function(e){
   mousedown = true;
	
	var str = "";
                    // 押しているボタンに応じて処理を切り替える
                    // ここで2の時に独自のコンテキストメニューを表示したりする
                    switch (e.button) {
                        case 0 :
                            str = "left click";
				 
                            break;
                        case 1 :
                            str = "middle click";
                            break;
                        case 2 :
                           str = "right click";
				 mousedown = false;
				g_seek=g_seek+g_s;
				if (g_seek>200){
					g_s=-10;
				}
				if (g_seek<-200){
					g_s=10;
				}
				if(r_flag==0){
					r_flag=1;
					scene.remove(mesh80);
					scene.remove(mesh81);
				}else{
					r_flag=0;
					scene.add(mesh80);
					scene.remove(mesh81);
				}
                           break;
			case 37:
				str = "left";
                            	break;
			case 38:
				str = "upper";
                            	break;
			case 39:
				str = "right";
                            	break;
			case 40:
				str = "down";
                            	break;
			
                   }
                   
                   // メッセージ表示
           //         message.innerHTML = str;

   prevPosition = {x: e.pageX, y: e.pageY};
}, false);
	
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

	draw_3d(controls);
}
function onKeyDown(event) {
var cx=0;
var cy=0;

	if (event.keyCode == "37" ) {
		left = true;
		str1 = "left";
		c_local_x=c_local_x-10;
		cx=-10;
		
	} else if (event.keyCode == "39" ) {
		right = true;
		str1 = "right";
		c_local_x=c_local_x+10;
		cx=10;
	}
	if (event.keyCode == "38" ) {
		up = true;
		str1 = "up";
		c_local_y=c_local_y+10;
		cy=10;
	} else if (event.keyCode == "40") {
		down = true;
		str1 = "down";
		c_local_y=c_local_y-10;
		cy=-10;
		
	}

/*	if (c_local_x<=-b_width/2-30-20){
		c_local_x=-b_width/2-30-20+1;
	}
	if (c_local_x>=b_width/2){
		c_local_x=b_width/2-1;
	}
	if (c_local_y>=b_height/2+20){
		c_local_y=b_height/2+20-1;
	}
	if (c_local_y<=-b_height/2-20){
		c_local_y=-b_height/2-20+1;
	}
*/
	//if (30+c_local_x>-b_width/2 && 30+c_local_x<b_width/2 && c_local_y>-b_height/2 && c_local_y<b_height/2){
		camera.position.x =camera.position.x+cx;
		camera.position.y =camera.position.y+ cy;
      	//	camera.lookAt(new THREE.Vector3(0+c_local_x, 0+c_local_y, 0));
		camera.lookAt.x=camera.lookAt.x+cx;
		camera.lookAt.y=camera.lookAt.y+cy;
//		render();
	//}
	
}
function onKeyUp(event) {
	if (event.keyCode == "37") {
		left = false;
	}
	if (event.keyCode == "39") {
		right = false;
	}
	if (event.keycode == "38") {
		up = false;
	}
	if (event.keycode == "40") {
		down = false;
	}
}





function draw_3d(controls)
{
      
      
	var ll=0;
	
	
      
        // ライトオブジェクトの作成
 
      var ambient = new THREE.AmbientLight(0xffffff);
      	
     scene.add(ambient);




	colo=0x1fffff;


	light = new THREE.DirectionalLight(0xffffff, 2.5, 0);
//  light.position.set( -450, 700, -700 );
	light.position.set( 1,0, 0 );
  scene.add(light);

  light7 = new THREE.DirectionalLight(0xFFffff, 2.5, 0);
  light7.position.set( 300, 200, 250 );
 // scene.add(light7);

light4 = new THREE.PointLight(0xff00ff,6); 

    light4.position.set(-700, 700,700); 

 //   scene.add(light4); 

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 ); 
    directionalLight.position.set(0,0,3);
    scene.add( directionalLight );

var LIGHT_HEX = 0xffffff;//光の色
    var LIGHT_INTENSITY = 12;//光の強さ
    var LIGHT_DISTANCE = 1700;//光の届く距離
    var LIGHT_ANGLE = 1 / 2;//照らす範囲角
    var LIGHT_EXPONENT = 10;//光の減衰度合い
    
    light1 = new THREE.SpotLight(LIGHT_HEX,LIGHT_INTENSITY,LIGHT_DISTANCE,LIGHT_ANGLE,LIGHT_EXPONENT);
    light1.target.position = new THREE.Vector3(-200,200,0);
    light1.position.set(-1000,1000,1000);
 //   scene.add( light1 );

	light2 = new THREE.SpotLight(0xcc00cc,3,800,1,10);
    light2.target.position = new THREE.Vector3(-200,200,0);
    light2.position.set(-500,500,700);
  //  scene.add( light2 );

      
      // (1)形状オブジェクトの作成
      
	

      // (2)頂点データの作成
      var uvs = [];
	var t=10;
	var x=0;
	var y=0;
	var r=0;
	var f_f=0;
	var f_b=0;
	var f_l=0;
	var f_r=0;	
	var s_f= new Array(0,0,0,0);     //前面
	var s_b= new Array(0,0,0,0);     //背面
	var s_l= new Array(0,0,0,0);     //左面
	var s_r= new Array(0,0,0,0);     //右面
	var s_f2= new Array(0,0,0,0);     //前面
	var s_b2= new Array(0,0,0,0);     //背面
	var s_l2= new Array(0,0,0,0);     //左面
	var s_r2= new Array(0,0,0,0);     //右面
	var fi=0;
	var bi=0;
	var li=0;
	var ri=0;
	var work=0;
	var work2=0;
	
//###################################### 開始 ############################	
	for(j=0;j<6;j++){
		if (s_position[j]=="A" || s_position[j]=="D"){	
			if (s_direction[j]=="前面"){
				if(s_y1[j]+s_y2[j]==b_height){
					f_f=1;
					if (s_position[j]=="A"){
						s_f[fi]=s_x1[j];
						h_m_f_x1[m_f_cnt]=s_x1[j];
						h_m_f_y1[m_f_cnt]=s_y1[j];
						h_m_f_x2[m_f_cnt]=s_x1[j]+s_x2[j];
						h_m_f_y2[m_f_cnt]=s_y1[j]+s_y2[j];
	
						m_f_cnt=m_f_cnt+1;
						draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1)
					}else{
						s_f[fi]=b_width-s_x1[j]-s_x2[j];
						h_m_f_x1[m_f_cnt]=b_width-s_x1[j]-s_x2[j];
						h_m_f_y1[m_f_cnt]=s_y1[j];
						h_m_f_x2[m_f_cnt]=b_width-s_x1[j];
						h_m_f_y2[m_f_cnt]=s_y1[j]+s_y2[j];
						m_f_cnt=m_f_cnt+1;
						draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1)		
					}
					s_f2[fi]=s_x2[j];
					
					
					
					if (fi>0){
						if(s_f[fi]<s_f[fi-1]){
							work=s_f[fi-1];
							s_f[fi-1]=s_f[fi];
							s_f[fi]=work;
							work2=s_f2[fi-1];
							s_f2[fi-1]=s_f2[fi];
							s_f2[fi]=work2;
						}
						if (fi-1>0){
							if(s_f[fi-1]<s_f[fi-2]){
								work=s_f[fi-2];
								s_f[fi-2]=s_f[fi-1];
								s_f[fi-1]=work;
								work2=s_f2[fi-2];
								s_f2[fi-2]=s_f2[fi-1];
								s_f2[fi-1]=work2;
							}
						}
						if (fi-2>0){
							if(s_f[fi-2]<s_f[fi-3]){
								work=s_f[fi-3];
								s_f[fi-3]=s_f[fi-2];
								s_f[fi-2]=work;
								work2=s_f2[fi-3];
								s_f2[fi-3]=s_f2[fi-2];
								s_f2[fi-2]=work2;
							}
						}
					}
					fi=fi+1;			
				}else{
					if (s_position[j]=="A"){
						h_m_f_x1[m_f_cnt]=s_x1[j];
						h_m_f_y1[m_f_cnt]=s_y1[j];
						h_m_f_x2[m_f_cnt]=s_x1[j]+s_x2[j];
						h_m_f_y2[m_f_cnt]=s_y1[j]+s_y2[j];
						
						m_f_cnt=m_f_cnt+1;
						draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1)
					}else{
						h_m_f_x1[m_f_cnt]=b_width-s_x1[j]-s_x2[j];
						h_m_f_y1[m_f_cnt]=s_y1[j];
						h_m_f_x2[m_f_cnt]=b_width-s_x1[j];
						h_m_f_y2[m_f_cnt]=s_y1[j]+s_y2[j];
							
						m_f_cnt=m_f_cnt+1;
						
						draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1)
					}
					
					
					
					
				}
			}
			if (s_direction[j]=="背面"){
				if(s_y1[j]+s_y2[j]==b_height){
					f_b=1;
					if (s_position[j]=="A"){
						s_b[bi]=s_x1[j];
						//draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1)
					}else{
						s_b[bi]=b_width-s_x1[j]-s_x2[j];
						//draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1)
						
					}
					s_b2[bi]=s_x2[j];
					
	
					if (bi>0){
						if(s_b[bi]<s_b[bi-1]){
							work=s_b[bi-1];
							s_b[bi-1]=s_b[bi];
							s_b[bi]=work;
							work2=s_b2[bi-1];
							s_b2[bi-1]=s_b2[bi];
							s_b2[bi]=work2;
						}
						if (bi-1>0){
							if(s_b[bi-1]<s_b[bi-2]){
								work=s_b[bi-2];
								s_b[bi-2]=s_b[bi-1];
								s_b[bi-1]=work;
								work2=s_b2[bi-2];
								s_b2[bi-2]=s_b2[bi-1];
								s_b2[bi-1]=work2;
							}
						}
						if (bi-2>0){
							if(s_b[bi-2]<s_b[bi-3]){
								work=s_b[bi-3];
								s_b[bi-3]=s_b[bi-2];
								s_b[bi-2]=work;
								work2=s_b2[bi-3];
								s_b2[bi-3]=s_b2[bi-2];
								s_b2[bi-2]=work2;
							}
						}
					}
					bi=bi+1;			
				}
				if (s_position[j]=="A"){
						
					h_m_b_x1[m_b_cnt]=b_width-s_x1[j]-s_x2[j];
					h_m_b_y1[m_b_cnt]=s_y1[j];
					h_m_b_x2[m_b_cnt]=b_width-s_x1[j];
					h_m_b_y2[m_b_cnt]=s_y1[j]+s_y2[j];

					m_b_cnt=m_b_cnt+1;
					draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1)
				}else{
						
					h_m_b_x1[m_b_cnt]=s_x1[j];
					h_m_b_y1[m_b_cnt]=s_y1[j];
					h_m_b_x2[m_b_cnt]=s_x1[j]+s_x2[j];
					h_m_b_y2[m_b_cnt]=s_y1[j]+s_y2[j];

					m_b_cnt=m_b_cnt+1;
					draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1)
						
				}
			}
			if (s_direction[j]=="左面"){
				if(s_y1[j]+s_y2[j]==b_height){
					f_l=1;
					if (s_position[j]=="A"){
						s_l[li]=s_x1[j];
						//draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1);
					}else{
						s_l[li]=b_depth-s_x1[j]-s_x2[j];
						//draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1);
					}
					s_l2[li]=s_x2[j];


					if (li>0){
						if(s_l[li]<s_l[li-1]){
							work=s_l[li-1];
							s_l[li-1]=s_l[li];
							s_l[li]=work;
							work2=s_l2[li-1];
							s_l2[li-1]=s_l2[li];
							s_l2[li]=work2;
						}
						if (li-1>0){
							if(s_l[li-1]<s_l[li-2]){
								work=s_l[li-2];
								s_l[li-2]=s_l[li-1];
								s_l[li-1]=work;
								work2=s_l2[li-1];
								s_l2[li-2]=s_l2[li-1];
								s_l2[li-1]=work2;
							}
						}
						if (li-2>0){
							if(s_l[li-2]<s_l[li-3]){
								work=s_l[li-3];
								s_l[li-3]=s_l[li-2];
								s_l[li-2]=work;
								work2=s_l2[li-2];
								s_l2[li-3]=s_l2[li-2];
								s_l2[li-2]=work2;
							}
						}
					}
					li=li+1;
				}
				if (s_position[j]=="A"){
						
					h_m_l_x1[m_l_cnt]=s_x1[j];
					h_m_l_y1[m_l_cnt]=s_y1[j];
					h_m_l_x2[m_l_cnt]=s_x1[j]+s_x2[j];
					h_m_l_y2[m_l_cnt]=s_y1[j]+s_y2[j];

					m_l_cnt=m_l_cnt+1;
					draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1);
				}else{
						
					h_m_l_x1[m_l_cnt]=b_depth-s_x1[j]-s_x2[j];
					h_m_l_y1[m_l_cnt]=s_y1[j];
					h_m_l_x2[m_l_cnt]=b_depth-s_x1[j];
					h_m_l_y2[m_l_cnt]=s_y1[j]+s_y2[j];
					
					m_l_cnt=m_l_cnt+1;
					draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1);	
				}
			}
			if (s_direction[j]=="右面"){
				if(s_y1[j]+s_y2[j]==b_height){
					f_r=1;
					if (s_position[j]=="A"){
						s_r[ri]=s_x1[j];
						//draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1);
					}else{
						s_r[ri]=b_depth-s_x1[j]-s_x2[j];
						//draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1);
					}
					s_r2[ri]=s_x2[j];
					

					if (ri>0){
						if(s_r[ri]<s_r[ri-1]){
							work=s_r[ri-1];
							s_r[ri-1]=s_r[ri];
							s_r[ri]=work;
							work2=s_r2[ri-1];
							s_r2[ri-1]=s_r2[ri];
							s_r2[ri]=work2;
						}
						if (ri-1>0){
							if(s_r[ri-1]<s_r[ri-2]){
								work=s_r[ri-2];
								s_r[ri-2]=s_r[ri-1];
								s_r[ri-1]=work;
								work2=s_r2[ri-2];
								s_r2[ri-2]=s_r2[ri-1];
								s_r2[ri-1]=work2;
							}
						}
						if (ri-2>0){
							if(s_r[ri-2]<s_r[ri-3]){
								work=s_r[ri-3];
								s_r[ri-3]=s_r[ri-2];
								s_r[ri-2]=work;
								work2=s_r2[ri-3];
								s_r2[ri-3]=s_r2[ri-2];
								s_r2[ri-2]=work2;
							}
						}
					}
					ri=ri+1;
				}
				if (s_position[j]=="A"){
						
					h_m_r_x1[m_r_cnt]=b_depth-s_x1[j]-s_x2[j];
					h_m_r_y1[m_r_cnt]=s_y1[j];
					h_m_r_x2[m_r_cnt]=b_depth-s_x1[j];
					h_m_r_y2[m_r_cnt]=s_y1[j]+s_y2[j];

					m_r_cnt=m_r_cnt+1;
					draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1);
				}else{
						
					h_m_r_x1[m_r_cnt]=s_x1[j];
					h_m_r_y1[m_r_cnt]=s_y1[j];
					h_m_r_x2[m_r_cnt]=s_x1[j]+s_x2[j];
					h_m_r_y2[m_r_cnt]=s_y1[j]+s_y2[j];

					m_r_cnt=m_r_cnt+1;
					draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1);
				}
			}
			if (s_direction[j]=="上面"){
				if (s_position[j]=="A"){
						
					h_m_u_x1[m_u_cnt]=s_x1[j];
					h_m_u_y1[m_u_cnt]=s_y1[j];
					h_m_u_x2[m_u_cnt]=s_x1[j]+s_x2[j];
					h_m_u_y2[m_u_cnt]=s_y1[j]+s_y2[j];

					m_u_cnt=m_u_cnt+1;
					draw_kakou(0,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],0,1);
				}else{
						
					h_m_u_x1[m_u_cnt]=b_width-s_x1[j]-s_x2[j];
					h_m_u_y1[m_u_cnt]=s_y1[j];
					h_m_u_x2[m_u_cnt]=b_width-s_x1[j];
					h_m_u_y2[m_u_cnt]=s_y1[j]+s_y2[j];

					m_u_cnt=m_u_cnt+1;
					draw_kakou(0,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],3,1);		
				}

			}
		}
		if (s_position[j]=="B" || s_position[j]=="C"){	
			if (s_direction[j]=="前面"){
				if(s_y1[j]==0){
					f_f=1;
					if (s_position[j]=="B"){
						s_f[fi]=s_x1[j];
						//draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1)
					}else{
						s_f[fi]=b_width-s_x1[j]-s_x2[j];
						//draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1)
					}
					s_f2[fi]=s_x2[j];
					

					if (fi>0){
						if(s_f[fi]<s_f[fi-1]){
							work=s_f[fi-1];
							s_f[fi-1]=s_f[fi];
							s_f[fi]=work;
							work2=s_f2[fi-1];
							s_f2[fi-1]=s_f2[fi];
							s_f2[fi]=work2;
						}
						if (fi-1>0){
							if(s_f[fi-1]<s_f[fi-2]){
								work=s_f[fi-2];
								s_f[fi-2]=s_f[fi-1];
								s_f[fi-1]=work;
								work2=s_f2[fi-2];
								s_f2[fi-2]=s_f2[fi-1];
								s_f2[fi-1]=work2;
							}
						}
						if (fi-2>0){
							if(s_f[fi-2]<s_f[fi-3]){
								work=s_f[fi-3];
								s_f[fi-3]=s_f[fi-2];
								s_f[fi-2]=work;
								work2=s_f2[fi-3];
								s_f2[fi-3]=s_f2[fi-2];
								s_f2[fi-2]=work2;
							}
						}
					}
					fi=fi+1;
				}
				if (s_position[j]=="B"){
						h_m_f_x1[m_f_cnt]=s_x1[j];
						h_m_f_y1[m_f_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_f_x2[m_f_cnt]=s_x1[j]+s_x2[j];
						h_m_f_y2[m_f_cnt]=b_height-s_y1[j];

						m_f_cnt=m_f_cnt+1;
						draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1)
				}else{
						h_m_f_x1[m_f_cnt]=b_width-s_x1[j]-s_x2[j];
						h_m_f_y1[m_f_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_f_x2[m_f_cnt]=b_width-s_x1[j];
						h_m_f_y2[m_f_cnt]=b_height-s_y1[j];

						m_f_cnt=m_f_cnt+1;
						draw_kakou(1,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1)
						
				}
			}
			if (s_direction[j]=="背面"){
				if(s_y1[j]==0){
					f_b=1;
					if (s_position[j]=="B"){
						s_b[bi]=s_x1[j];
						//draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1)
					}else{
						s_b[bi]=b_width-s_x1[j]-s_x2[j];
						//draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1)
					}
					s_b2[bi]=s_x2[j];
					
					if (bi>0){
						if(s_b[bi]<s_b[bi-1]){
							work=s_b[bi-1];
							s_b[bi-1]=s_b[bi];
							s_b[bi]=work;
							work2=s_b2[bi-1];
							s_b2[bi-1]=s_b2[bi];
							s_b2[bi]=work2;
						}
						if (bi-1>0){
							if(s_b[bi-1]<s_b[bi-2]){
								work=s_b[bi-2];
								s_b[bi-2]=s_b[bi-1];
								s_b[bi-1]=work;
								work2=s_b2[bi-2];
								s_b2[bi-2]=s_b2[bi-1];
								s_b2[bi-1]=work2;
							}
						}
						if (bi-2>0){
							if(s_b[bi-2]<s_b[bi-3]){
								work=s_b[bi-3];
								s_b[bi-3]=s_b[bi-2];
								s_b[bi-2]=work;
								work2=s_b2[bi-3];
								s_b2[bi-3]=s_b2[bi-2];
								s_b2[bi-2]=work2;
							}
						}
					}
					bi=bi+1;
				}
				if (s_position[j]=="B"){
						h_m_b_x1[m_b_cnt]=b_width-s_x1[j]-s_x2[j];
						h_m_b_y1[m_b_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_b_x2[m_b_cnt]=b_width-s_x1[j];
						h_m_b_y2[m_b_cnt]=b_height-s_y1[j];

						m_b_cnt=m_b_cnt+1;
						draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1)
				}else{
						h_m_b_x1[m_b_cnt]=s_x1[j];
						h_m_b_y1[m_b_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_b_x2[m_b_cnt]=s_x1[j]+s_x2[j];
						h_m_b_y2[m_b_cnt]=b_height-s_y1[j];
	
						m_b_cnt=m_b_cnt+1;
						draw_kakou(2,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1)
						
						
				}
			}
			if (s_direction[j]=="左面"){
				if(s_y1[j]==0){
					f_l=1;
					if (s_position[j]=="B"){
						s_l[li]=s_x1[j];
						//draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1);
					}else{
						s_l[li]=b_depth-s_x1[j]-s_x2[j];
						//draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1);
					}
					s_l2[li]=s_x2[j];
					
					if (li>0){
						if(s_l[li]<s_l[li-1]){
							work=s_l[li-1];
							s_l[li-1]=s_l[li];
							s_l[li]=work;
							work2=s_l2[li-1];
							s_l2[li-1]=s_l2[li];
							s_l2[li]=work2;
						}
						if (li-1>0){
							if(s_l[li-1]<s_l[li-2]){
								work=s_l[li-2];
								s_l[li-2]=s_l[li-1];
								s_l[li-1]=work;
								work2=s_l2[li-2];
								s_l2[li-2]=s_l2[li-1];
								s_l2[li-1]=work2;
							}
						}
						if (li-2>0){
							if(s_l[li-2]<s_l[li-3]){
								work=s_l[li-3];
								s_l[li-3]=s_l[li-2];
								s_l[li-2]=work;
								work2=s_l2[li-3];
								s_l2[li-3]=s_l2[li-2];
								s_l2[li-2]=work2;
							}
						}
					}
					li=li+1;
				}
				if (s_position[j]=="B"){
						h_m_l_x1[m_l_cnt]=s_x1[j];
						h_m_l_y1[m_l_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_l_x2[m_l_cnt]=s_x1[j]+s_x2[j];
						h_m_l_y2[m_l_cnt]=b_height-s_y1[j];

						m_l_cnt=m_l_cnt+1;
						draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1);
				}else{
						h_m_l_x1[m_l_cnt]=b_depth-s_x1[j]-s_x2[j];
						h_m_l_y1[m_l_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_l_x2[m_l_cnt]=b_depth-s_x1[j];
						h_m_l_y2[m_l_cnt]=b_height-s_y1[j];

						m_l_cnt=m_l_cnt+1;
						draw_kakou(3,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1);
						
				}
			}
			if (s_direction[j]=="右面"){
				if(s_y1[j]==0){
					f_r=1;
					if (s_position[j]=="B"){
						s_r[ri]=s_x1[j];
						//draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1);
					}else{
						s_r[ri]=b_depth-s_x1[j]-s_x2[j];
						//draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1);
					}
					s_r2[ri]=s_x2[j];
					
					if (ri>0){
						if(s_r[ri]<s_r[ri-1]){
							work=s_r[ri-1];
							s_r[ri-1]=s_r[ri];
							s_r[ri]=work;
							work2=s_r2[ri-1];
							s_r2[ri-1]=s_r2[ri];
							s_r2[ri]=work2;
						}
						if (ri-1>0){
							if(s_r[ri-1]<s_r[ri-2]){
								work=s_r[ri-2];
								s_r[ri-2]=s_r[ri-1];
								s_r[ri-1]=work;
								work2=s_r2[ri-2];
								s_r2[ri-2]=s_r2[ri-1];
								s_r2[ri-1]=work2;
							}
						}
						if (ri-2>0){
							if(s_r[ri-2]<s_r[ri-3]){
								work=s_r[ri-3];
								s_r[ri-3]=s_r[ri-2];
								s_r[ri-2]=work;
								work2=s_r2[ri-3];
								s_r2[ri-3]=s_r2[ri-2];
								s_r2[ri-2]=work2;
							}
						}
					}
					ri=ri+1;
				}
				if (s_position[j]=="B"){
						h_m_r_x1[m_r_cnt]=b_depth-s_x1[j]-s_x2[j];
						h_m_r_y1[m_r_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_r_x2[m_r_cnt]=b_depth-s_x1[j];
						h_m_r_y2[m_r_cnt]=b_height-s_y1[j];

						m_r_cnt=m_r_cnt+1;
						draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1);
				}else{
						h_m_r_x1[m_r_cnt]=s_x1[j];
						h_m_r_y1[m_r_cnt]=b_height-s_y1[j]-s_y2[j];
						h_m_r_x2[m_r_cnt]=s_x1[j]+s_x2[j];
						h_m_r_y2[m_r_cnt]=b_height-s_y1[j];
	
						m_r_cnt=m_r_cnt+1;
						draw_kakou(4,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1);
						
				}
			}
			if (s_direction[j]=="上面"){
				if (s_position[j]=="B"){
						
					h_m_u_x1[m_u_cnt]=s_x1[j];
					h_m_u_y1[m_u_cnt]=b_depth-s_y1[j]-s_y2[j];
					h_m_u_x2[m_u_cnt]=s_x1[j]+s_x2[j];
					h_m_u_y2[m_u_cnt]=b_depth-s_y1[j];

					m_u_cnt=m_u_cnt+1;
					draw_kakou(0,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],1,1);
				}else{
						
					h_m_u_x1[m_u_cnt]=b_width-s_x1[j]-s_x2[j];
					h_m_u_y1[m_u_cnt]=b_depth-s_y1[j]-s_y2[j];
					h_m_u_x2[m_u_cnt]=b_width-s_x1[j];
					h_m_u_y2[m_u_cnt]=b_depth-s_y1[j];

					m_u_cnt=m_u_cnt+1;
					draw_kakou(0,s_x1[j],s_y1[j],0,0,s_x2[j],s_y2[j],2,1);	
				}

			}
		}
		
		
	}
	h_init(b_width,b_depth,b_height,b_thickness,f_f,f_b,f_l,f_r,p_height,p_thickness,p_type);
	m_model(geometry,b_width,b_depth,b_height,b_thickness);


//##################### 穴 ###################################
	for(j=0;j<8;j++){
		
		if (h_direction[j]=="上面"){
			if (h_position[j]=="B"){
						
					h_m_u_x1[m_u_cnt]=h_x[j]-h_diameter[j]/2;
					h_m_u_y1[m_u_cnt]=b_depth-h_y[j]-h_diameter[j]/2;
					h_m_u_x2[m_u_cnt]=h_x[j]+h_diameter[j]/2;
					h_m_u_y2[m_u_cnt]=b_depth-h_y[j]+h_diameter[j]/2;
					m_u_cnt=m_u_cnt+1;
				draw_kakou(0,h_x[j],h_y[j],0,h_diameter[j],0,0,1,0);
					
			}
			if (h_position[j]=="C"){
						
					h_m_u_x1[m_u_cnt]=b_width-h_x[j]-h_diameter[j]/2;
					h_m_u_y1[m_u_cnt]=b_depth-h_y[j]-h_diameter[j]/2;
					h_m_u_x2[m_u_cnt]=b_width-h_x[j]+h_diameter[j]/2;
					h_m_u_y2[m_u_cnt]=b_depth-h_y[j]+h_diameter[j]/2;

					m_u_cnt=m_u_cnt+1;
				draw_kakou(0,h_x[j],h_y[j],0,h_diameter[j],0,0,2,0);		
			}
			if (h_position[j]=="A"){
						
					h_m_u_x1[m_u_cnt]=h_x[j]-h_diameter[j]/2;
					h_m_u_y1[m_u_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_u_x2[m_u_cnt]=h_x[j]+h_diameter[j]/2;
					h_m_u_y2[m_u_cnt]=h_y[j]+h_diameter[j]/2;

					m_u_cnt=m_u_cnt+1;
				draw_kakou(0,h_x[j],h_y[j],0,h_diameter[j],0,0,0,0);
			}
			if (h_position[j]=="D"){
						
					h_m_u_x1[m_u_cnt]=b_width-h_x[j]-h_diameter[j]/2;
					h_m_u_y1[m_u_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_u_x2[m_u_cnt]=b_width-h_x[j]+h_diameter[j]/2;
					h_m_u_y2[m_u_cnt]=h_y[j]+h_diameter[j]/2;

					m_u_cnt=m_u_cnt+1;
				draw_kakou(0,h_x[j],h_y[j],0,h_diameter[j],0,0,3,0);
						
			}
			if (h_position[j]=="A" ){
				draw_c(geometry,1,1,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_u=c_cnt_u+1;
				c_cnt=c_cnt+1;	
					
			}
			if (h_position[j]=="B" ){
				draw_c(geometry,1,2,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_u=c_cnt_u+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="C" ){
				draw_c(geometry,1,3,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_u=c_cnt_u+1;	
				c_cnt=c_cnt+1;		
			}
			if (h_position[j]=="D" ){
				draw_c(geometry,1,4,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_u=c_cnt_u+1;
				c_cnt=c_cnt+1;			
			}
		}
		if (h_direction[j]=="前面"){
			if (h_position[j]=="B"){
						h_m_f_x1[m_f_cnt]=h_x[j]-h_diameter[j]/2;
						h_m_f_y1[m_f_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_f_x2[m_f_cnt]=h_x[j]+h_diameter[j]/2;
						h_m_f_y2[m_f_cnt]=b_height-h_y[j]+h_diameter[j]/2;

						m_f_cnt=m_f_cnt+1;

				draw_kakou(1,h_x[j],h_y[j],0,h_diameter[j],0,0,1,0);
	
	
			}
			if (h_position[j]=="C"){
						h_m_f_x1[m_f_cnt]=b_width-h_x[j]-h_diameter[j]/2;
						h_m_f_y1[m_f_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_f_x2[m_f_cnt]=b_width-h_x[j]+h_diameter[j]/2;
						h_m_f_y2[m_f_cnt]=b_height-h_y[j]+h_diameter[j]/2;
	
						m_f_cnt=m_f_cnt+1;
						draw_kakou(1,h_x[j],h_y[j],0,h_diameter[j],0,0,2,0);
						
			}
			if (h_position[j]=="A"){
					
					h_m_f_x1[m_f_cnt]=h_x[j]-h_diameter[j]/2;
					h_m_f_y1[m_f_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_f_x2[m_f_cnt]=h_x[j]+h_diameter[j]/2;
					h_m_f_y2[m_f_cnt]=h_y[j]+h_diameter[j]/2;
	
					m_f_cnt=m_f_cnt+1;
				draw_kakou(1,h_x[j],h_y[j],0,h_diameter[j],0,0,0,0);
			}
			if (h_position[j]=="D"){
						
					h_m_f_x1[m_f_cnt]=b_width-h_x[j]-h_diameter[j]/2;
					h_m_f_y1[m_f_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_f_x2[m_f_cnt]=b_width-h_x[j]+h_diameter[j]/2;
					h_m_f_y2[m_f_cnt]=h_y[j]+h_diameter[j]/2;

					m_f_cnt=m_f_cnt+1;	
					draw_kakou(1,h_x[j],h_y[j],0,h_diameter[j],0,0,3,0);	
			}	
			if (h_position[j]=="A" ){
				draw_c(geometry,2,1,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_f=c_cnt_f+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="B" ){
				draw_c(geometry,2,2,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_f=c_cnt_f+1;	
				c_cnt=c_cnt+1;	
			}
			if (h_position[j]=="C" ){
				draw_c(geometry,2,3,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_f=c_cnt_f+1;
				c_cnt=c_cnt+1;		
			}
			if (h_position[j]=="D" ){
				draw_c(geometry,2,4,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_f=c_cnt_f+1;
				c_cnt=c_cnt+1;		
			}
		}
		if (h_direction[j]=="背面"){
			if (h_position[j]=="A"){
						
					h_m_b_x1[m_b_cnt]=b_width-h_x[j]-h_diameter[j]/2;
					h_m_b_y1[m_b_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_b_x2[m_b_cnt]=b_width-h_x[j]+h_diameter[j]/2;
					h_m_b_y2[m_b_cnt]=h_y[j]+h_diameter[j]/2;

					m_b_cnt=m_b_cnt+1;
				draw_kakou(2,h_x[j],h_y[j],0,h_diameter[j],0,0,0,0);
			}
			if (h_position[j]=="D"){
						
					h_m_b_x1[m_b_cnt]=h_x[j]-h_diameter[j]/2;
					h_m_b_y1[m_b_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_b_x2[m_b_cnt]=h_x[j]+h_diameter[j]/2;
					h_m_b_y2[m_b_cnt]=h_y[j]+h_diameter[j]/2;

					m_b_cnt=m_b_cnt+1;
				draw_kakou(2,h_x[j],h_y[j],0,h_diameter[j],0,0,3,0);
						
			}
			if (h_position[j]=="B"){
						h_m_b_x1[m_b_cnt]=b_width-h_x[j]-h_diameter[j]/2;
						h_m_b_y1[m_b_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_b_x2[m_b_cnt]=b_width-h_x[j]+h_diameter[j]/2;
						h_m_b_y2[m_b_cnt]=b_height-h_y[j]+h_diameter[j]/2;

						m_b_cnt=m_b_cnt+1;
				draw_kakou(2,h_x[j],h_y[j],0,h_diameter[j],0,0,1,0);
			}
			if (h_position[j]=="C"){
						h_m_b_x1[m_b_cnt]=h_x[j]-h_diameter[j]/2;
						h_m_b_y1[m_b_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_b_x2[m_b_cnt]=h_x[j]+h_diameter[j]/2;
						h_m_b_y2[m_b_cnt]=b_height-h_y[j]+h_diameter[j]/2;
	
						m_b_cnt=m_b_cnt+1;
				draw_kakou(2,h_x[j],h_y[j],0,h_diameter[j],0,0,2,0);
						
			}	
			if (h_position[j]=="A" ){
				draw_c(geometry,3,1,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_b=c_cnt_b+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="B" ){
				draw_c(geometry,3,2,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_b=c_cnt_b+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="C" ){
				draw_c(geometry,3,3,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_b=c_cnt_b+1;
				c_cnt=c_cnt+1;		
			}
			if (h_position[j]=="D" ){
				draw_c(geometry,3,4,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_b=c_cnt_b+1;
				c_cnt=c_cnt+1;		
			}
		}
		if (h_direction[j]=="左面"){
			if (h_position[j]=="B"){
						h_m_l_x1[m_l_cnt]=h_x[j]-h_diameter[j]/2;
						h_m_l_y1[m_l_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_l_x2[m_l_cnt]=h_x[j]+h_diameter[j]/2;
						h_m_l_y2[m_l_cnt]=b_height-h_y[j]+h_diameter[j]/2;

						m_l_cnt=m_l_cnt+1;
				draw_kakou(3,h_x[j],h_y[j],0,h_diameter[j],0,0,1,0);
			}
			if (h_position[j]=="C"){
						h_m_l_x1[m_l_cnt]=b_depth-h_x[j]-h_diameter[j]/2;
						h_m_l_y1[m_l_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_l_x2[m_l_cnt]=b_depth-h_x[j]+h_diameter[j]/2;
						h_m_l_y2[m_l_cnt]=b_height-h_y[j]+h_diameter[j]/2;
		
						m_l_cnt=m_l_cnt+1;
				draw_kakou(3,h_x[j],h_y[j],0,h_diameter[j],0,0,2,0);
						
			}
			if (h_position[j]=="A"){
						
					h_m_l_x1[m_l_cnt]=h_x[j]-h_diameter[j]/2;
					h_m_l_y1[m_l_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_l_x2[m_l_cnt]=h_x[j]+h_diameter[j]/2;
					h_m_l_y2[m_l_cnt]=h_y[j]+h_diameter[j]/2;

					m_l_cnt=m_l_cnt+1;
				draw_kakou(3,h_x[j],h_y[j],0,h_diameter[j],0,0,0,0);
			}
			if (h_position[j]=="D"){
						
					h_m_l_x1[m_l_cnt]=b_depth-h_x[j]-h_diameter[j]/2;
					h_m_l_y1[m_l_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_l_x2[m_l_cnt]=b_depth-h_x[j]+h_diameter[j]/2;
					h_m_l_y2[m_l_cnt]=h_y[j]+h_diameter[j]/2;

					m_l_cnt=m_l_cnt+1;
				draw_kakou(3,h_x[j],h_y[j],0,h_diameter[j],0,0,3,0);	
			}	
			if (h_position[j]=="A" ){
				draw_c(geometry,4,1,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_l=c_cnt_l+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="B" ){
				draw_c(geometry,4,2,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_l=c_cnt_l+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="C" ){
				draw_c(geometry,4,3,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_l=c_cnt_l+1;
				c_cnt=c_cnt+1;		
			}
			if (h_position[j]=="D" ){
				draw_c(geometry,4,4,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_l=c_cnt_l+1;
				c_cnt=c_cnt+1;			
			}
		}
		if (h_direction[j]=="右面"){
			if (h_position[j]=="B"){
						h_m_r_x1[m_r_cnt]=b_depth-h_x[j]-h_diameter[j]/2;
						h_m_r_y1[m_r_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_r_x2[m_r_cnt]=b_depth-h_x[j]+h_diameter[j]/2;
						h_m_r_y2[m_r_cnt]=b_height-h_y[j]+h_diameter[j]/2;

						m_r_cnt=m_r_cnt+1;
						draw_kakou(4,h_x[j],h_y[j],0,h_diameter[j],0,0,1,0);
			}
			if (h_position[j]=="C"){
						h_m_r_x1[m_r_cnt]=h_x[j]-h_diameter[j]/2;
						h_m_r_y1[m_r_cnt]=b_height-h_y[j]-h_diameter[j]/2;
						h_m_r_x2[m_r_cnt]=h_x[j]+h_diameter[j]/2;
						h_m_r_y2[m_r_cnt]=b_height-h_y[j]+h_diameter[j]/2;
	
						m_r_cnt=m_r_cnt+1;
						draw_kakou(4,h_x[j],h_y[j],0,h_diameter[j],0,0,2,0);
						
			}
			if (h_position[j]=="A"){
						
					h_m_r_x1[m_r_cnt]=b_depth-h_x[j]-h_diameter[j]/2;
					h_m_r_y1[m_r_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_r_x2[m_r_cnt]=b_depth-h_x[j]+h_diameter[j]/2;
					h_m_r_y2[m_r_cnt]=h_y[j]+h_diameter[j]/2;

					m_r_cnt=m_r_cnt+1;
					draw_kakou(4,h_x[j],h_y[j],0,h_diameter[j],0,0,0,0);
			}
			if (h_position[j]=="D"){
						
					h_m_r_x1[m_r_cnt]=h_x[j]-h_diameter[j]/2;
					h_m_r_y1[m_r_cnt]=h_y[j]-h_diameter[j]/2;
					h_m_r_x2[m_r_cnt]=h_x[j]+h_diameter[j]/2;
					h_m_r_y2[m_r_cnt]=h_y[j]+h_diameter[j]/2;

					m_r_cnt=m_r_cnt+1;
					draw_kakou(4,h_x[j],h_y[j],0,h_diameter[j],0,0,3,0);	
			}

			if (h_position[j]=="A" ){
				draw_c(geometry,5,1,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_r=c_cnt_r+1;
				c_cnt=c_cnt+1;		
			}
			if (h_position[j]=="B" ){
				draw_c(geometry,5,2,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_r=c_cnt_r+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="C" ){
				draw_c(geometry,5,3,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_r=c_cnt_r+1;
				c_cnt=c_cnt+1;			
			}
			if (h_position[j]=="D" ){
				draw_c(geometry,5,4,b_width,b_depth,b_height,h_x[j],h_y[j],h_diameter[j],b_thickness,c_cnt);
				c_cnt_r=c_cnt_r+1;
				c_cnt=c_cnt+1;			
			}
		}
		
		
	}
	if(p_type=="Dタイプ"){
		if(b_depth>=200){
			h_m_r_x1[m_r_cnt]=b_depth-b_depth/4-9/2;
			h_m_r_y1[m_r_cnt]=b_height-13.5-9/2;
			h_m_r_x2[m_r_cnt]=b_depth-b_depth/4+9/2;
			h_m_r_y2[m_r_cnt]=b_height-13.5+9/2;
			m_r_cnt=m_r_cnt+1;
			h_m_r_x1[m_r_cnt]=b_depth-b_depth*3/4-9/2;
			h_m_r_y1[m_r_cnt]=b_height-13.5-9/2;
			h_m_r_x2[m_r_cnt]=b_depth-b_depth*3/4+9/2;
			h_m_r_y2[m_r_cnt]=b_height-13.5+9/2;
			m_r_cnt=m_r_cnt+1;

			h_m_l_x1[m_l_cnt]=b_depth/4-9/2;
			h_m_l_y1[m_l_cnt]=b_height-13.5-9/2;
			h_m_l_x2[m_l_cnt]=b_depth/4+9/2;
			h_m_l_y2[m_l_cnt]=b_height-13.5+9/2;
			m_l_cnt=m_l_cnt+1;
			h_m_l_x1[m_l_cnt]=b_depth*3/4-9/2;
			h_m_l_y1[m_l_cnt]=b_height-13.5-9/2;
			h_m_l_x2[m_l_cnt]=b_depth*3/4+9/2;
			h_m_l_y2[m_l_cnt]=b_height-13.5+9/2;
			m_l_cnt=m_l_cnt+1;

		}else{
			h_m_r_x1[m_r_cnt]=b_depth-b_depth/2-9/2;
			h_m_r_y1[m_r_cnt]=b_height-13.5-9/2;
			h_m_r_x2[m_r_cnt]=b_depth-b_depth/2+9/2;
			h_m_r_y2[m_r_cnt]=b_height-13.5+9/2;
			m_r_cnt=m_r_cnt+1;

			h_m_l_x1[m_l_cnt]=b_depth/2-9/2;
			h_m_l_y1[m_l_cnt]=b_height-13.5-9/2;
			h_m_l_x2[m_l_cnt]=b_depth/2+9/2;
			h_m_l_y2[m_l_cnt]=b_height-13.5+9/2;
			m_l_cnt=m_l_cnt+1;

		}

	}

	for(j=0;j<6;j++){
		
		if (s_direction[j]=="上面"){
			
			if (s_position[j]=="A" ){
				draw_s(geometry,1,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_u=s_cnt_u+1;	
				s_cnt=s_cnt+1;	
				
			}
			if (s_position[j]=="B" ){
				draw_s(geometry,1,2,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_u=s_cnt_u+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="C" ){
				draw_s(geometry,1,3,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_u=s_cnt_u+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="D" ){
				draw_s(geometry,1,4,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_u=s_cnt_u+1;
				s_cnt=s_cnt+1;			
			}
		}
		if (s_direction[j]=="前面"){
				
			if (s_position[j]=="A" ){
				draw_s(geometry,2,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_f=s_cnt_f+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="B" ){
				draw_s(geometry,2,2,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_f=s_cnt_f+1;
				s_cnt=s_cnt+1;		
			}
			if (s_position[j]=="C" ){
				draw_s(geometry,2,3,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_f=s_cnt_f+1;
				s_cnt=s_cnt+1;		
			}
			if (s_position[j]=="D" ){
				draw_s(geometry,2,4,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_f=s_cnt_f+1;
				s_cnt=s_cnt+1;		
			}
		}
		if (s_direction[j]=="背面"){
				
			if (s_position[j]=="A" ){
				draw_s(geometry,3,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_b=s_cnt_b+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="B" ){
				draw_s(geometry,3,2,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_b=s_cnt_b+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="C" ){
				draw_s(geometry,3,3,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_b=s_cnt_b+1;
				s_cnt=s_cnt+1;		
			}
			if (s_position[j]=="D" ){
				draw_s(geometry,3,4,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_b=s_cnt_b+1;
				s_cnt=s_cnt+1;		
			}
		}
		if (s_direction[j]=="左面"){
				
			if (s_position[j]=="A" ){
				draw_s(geometry,4,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_l=s_cnt_l+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="B" ){
				draw_s(geometry,4,2,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_l=s_cnt_l+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="C" ){
				draw_s(geometry,4,3,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_l=s_cnt_l+1;
				s_cnt=s_cnt+1;		
			}
			if (s_position[j]=="D" ){
				draw_s(geometry,4,4,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_l=s_cnt_l+1;
				s_cnt=s_cnt+1;			
			}
		}
		if (s_direction[j]=="右面"){
			
			if (s_position[j]=="A" ){
				draw_s(geometry,5,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_r=s_cnt_r+1;
				s_cnt=s_cnt+1;		
			}
			if (s_position[j]=="B" ){
				draw_s(geometry,5,2,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_r=s_cnt_r+1;
				s_cnt=s_cnt+1;			
			}
			if (s_position[j]=="C" ){
				draw_s(geometry,5,3,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_r=s_cnt_r+1;	
				s_cnt=s_cnt+1;		
			}
			if (s_position[j]=="D" ){
				draw_s(geometry,5,4,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
				s_cnt_r=s_cnt_r+1;	
				s_cnt=s_cnt+1;		
			}
		}
		
		
	}
    	 
//###################################### 終了 #######################################

	
	draw_hen1(geometry14,1,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
	draw_hen2(geometry15,1,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
	draw_hen3(geometry16,1,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
	draw_hen4(geometry17,1,1,b_width,b_depth,b_height,s_x1[j],s_y1[j],s_x2[j],s_y2[j],s_angle[j],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);

//###################################底メッシュ##########################################

	var geometry11 = new THREE.Geometry();
	var ww=0;
	var bb=0;
	ww=b_width+300;
	bb=b_depth+300;
//	draw_b(geometry11,ww,bb,b_height,0.1,p_type);
	
	var geometry60 = new THREE.Geometry();
	var geometry41 = new THREE.Geometry();
	if (p_type=="Aタイプ"){
		
		draw_da(geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);
	}
	if (p_type=="Bタイプ"){
		
		draw_db(geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);
	}
	if (p_type=="Cタイプ"){
		
		draw_dc(geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);
	}
	if (p_type=="Dタイプ"){
		
		draw_dd(geometry70,geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);
	}
	var geometry42 = new THREE.Geometry();
	var geometry43 = new THREE.Geometry();
//	draw_dh(geometry42,geometry43,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);

	var geometry44 = new THREE.Geometry();
	var geometry45 = new THREE.Geometry();
//	draw_m1(geometry44,geometry45,b_width,b_depth,b_height,b_thickness);
	var geometry46 = new THREE.Geometry();
	if (s_cnt_f==1){
//		draw_df1(geometry46,1,4,b_width,b_depth,b_height,s_x1[0],s_y1[0],s_x2[0],s_y2[0],s_angle[0],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
	}else{
//		draw_m2(geometry46,geometry45,b_width,b_depth,b_height,b_thickness);
	}
	var geometry47 = new THREE.Geometry();
	if  (s_cnt_b==1){	
//		draw_db1(geometry47,1,4,b_width,b_depth,b_height,s_x1[1],s_y1[1],s_x2[1],s_y2[1],s_angle[1],b_thickness,c_cnt,s_cnt,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2);
	}else{
//		draw_m3(geometry47,geometry45,b_width,b_depth,b_height,b_thickness);
	}
	var geometry48 = new THREE.Geometry();
	if (c_cnt_u==1){	
//		draw_du1(geometry48,4,4,b_width,b_depth,b_height,h_x[0],h_y[0],h_diameter[0],b_thickness,c_cnt);
	}else{
//		draw_m4(geometry48,geometry45,b_width,b_depth,b_height,b_thickness);
	}

	var geometry50 = new THREE.Geometry();
	draw_50(geometry12,b_width,b_depth,b_height,b_thickness,h_m_u_x1,h_m_u_y1,h_m_u_x2,h_m_u_y2,m_u_cnt);
	var geometry51 = new THREE.Geometry();
	draw_51(geometry12,b_width,b_depth,b_height,b_thickness,h_m_f_x1,h_m_f_y1,h_m_f_x2,h_m_f_y2,m_f_cnt);
	var geometry52 = new THREE.Geometry();
	draw_52(geometry12,b_width,b_depth,b_height,b_thickness,h_m_b_x1,h_m_b_y1,h_m_b_x2,h_m_b_y2,m_b_cnt);
	var geometry53 = new THREE.Geometry();
	draw_53(geometry12,b_width,b_depth,b_height,b_thickness,h_m_l_x1,h_m_l_y1,h_m_l_x2,h_m_l_y2,m_l_cnt,p_type);
	var geometry54 = new THREE.Geometry();
	draw_54(geometry12,b_width,b_depth,b_height,b_thickness,h_m_r_x1,h_m_r_y1,h_m_r_x2,h_m_r_y2,m_r_cnt);
	
	draw_su(b_width,b_depth,b_height,b_thickness,f_f,f_b,f_l,f_r,p_height,p_thickness,p_type);









//##################################################################################
/*	var mesh100   = new THREE.Object3D(); // 読み込みが完了するまでのダミー
var loader = new THREE.JSONLoader();
loader.load('http://192.168.1.66/1.files/suzanne.js', function(geometry100) {
  mesh100 = new THREE.Mesh(geometry100, new THREE.MeshFaceMaterial);
  mesh100.scale = new THREE.Vector3(1, 1, 1);
  mesh100.position.set( 400,-100,0);
  geometry100.materials[0].ambient = geometry100.materials[0].color;
  scene.add(mesh100);
});


loader = new THREE.JSONLoader();
    loader.load( 'http://192.168.1.66/1.files/suzanne.js', function ( geometry, materials ) { 
        var faceMaterial = new THREE.MeshFaceMaterial( materials );
        json = new THREE.Mesh( geometry, faceMaterial );
        json.position.set( 0,-100,0);
        json.scale.set( 50, 50, 50 );
        scene.add( json );
        } );
*/
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/*
var TextGeometry_w = new THREE.TextGeometry( b_width, {
                size: 10, height: 2, curveSegments: 3,
                font: "optimer", weight: "bold", style: "normal",
                bevelThickness: 1, bevelSize: 0, bevelEnabled: true
});


//var material5 =   new THREE.MeshLambertMaterial({color:0x0000ff,ambient:0x000ff,transparent: false,opacity: 1});
//var Material = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
var Text_w = new THREE.Mesh( TextGeometry_w, material5 );

var TextGeometry_d = new THREE.TextGeometry( b_depth, {
                size: 10, height: 2, curveSegments: 3,
                font: "optimer", weight: "bold", style: "normal",
                bevelThickness: 1, bevelSize: 0, bevelEnabled: true
});


var Text_d = new THREE.Mesh( TextGeometry_d, material5 );

var TextGeometry_h = new THREE.TextGeometry( b_height, {
                size: 10, height: 2, curveSegments: 3,
                font: "optimer", weight: "bold", style: "normal",
                bevelThickness: 1, bevelSize: 0, bevelEnabled: true
});


var Text_h = new THREE.Mesh( TextGeometry_h, material5 );


Text_w.castShadow = true;

Text_w.position.set( 50, -b_height/2, b_depth/2+150 );

scene.add( Text_w);

Text_d.position.set( b_width/2+150, -b_height/2, 0 );

//scene.add( Text_d);
Text_h.position.set( -150-b_width/2, 0, b_depth/2 );

//scene.add( Text_h);


*/


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      // (4)マテリアルの作成


      // (5)他のデータを自動計算


      // (6)メッシュの作成







if (iro==0xddffff){
	

var material2 = new THREE.MeshLambertMaterial({color:0xa118aa,transparent: true ,opacity: 0.28,specular: 0x11ee11, shininess:50, ambient:0xffffff,
side: THREE.DoubleSide,metal:true,depthTest:true,Blending:THREE.NoBlending});

}


var material82 = new THREE.MeshLambertMaterial({color:0xffffff,transparent: false,opacity: 0.5,specular: 0xffffff, shininess:100, ambient:0xffffff});

var material22 = new THREE.MeshLambertMaterial({color:0x000000,transparent: true ,opacity: 0.08,specular: 0x333333, shininess:60, ambient:0xffffff,
side: THREE.DoubleSide,metal:true,depthTest:true,Blending:THREE.NoBlending});

var material45= new THREE.MeshPhongMaterial({color:0xffffff,transparent: true ,opacity: 0.05,specular: 0x222222, shininess:5, ambient:0xffffff,
side: THREE.DoubleSide,metal:true,depthTest:true});


var material12 = new THREE.MeshPhongMaterial({color:0xff0000,ambient:0xff0000,transparent: true ,opacity: 0.90,specular: 0xff0000});

	
var material3 =   new THREE.MeshPhongMaterial({color:0xffffff,ambient:0xeeeeee,transparent: true ,opacity: 0.7});
var material5=   new THREE.MeshBasicMaterial({color:0x000000,transparent: false ,opacity:1,specular: 0x111111, shininess:50, ambient:0x000000,
side: THREE.DoubleSide,metal:false,depthTest:true,Blending:THREE.MultiplyBlending});

var material6=   new THREE.MeshBasicMaterial({color:0x000000,transparent: false,opacity: 1,specular: 0x110000, shininess:60, ambient:0x111111,
side: THREE.DoubleSide,metal:true,depthTest:true,Blending:THREE.MultiplyBlending});

var material7=   new THREE.MeshPhongMaterial({color:0x000000,transparent: false ,opacity:1,specular: 0x444444, shininess:30, ambient:0x444444,
side: THREE.DoubleSide,metal:true,depthTest:true});

var material8 = new THREE.MeshBasicMaterial({color:0x111111,transparent: false ,opacity: 1,specular: 0x111111, shininess:600, ambient:0x011111,
side: THREE.DoubleSide,metal:true,depthTest:true,Blending:THREE.MultiplyBlending});



var material9 = new THREE.MeshBasicMaterial({color:0x555555,transparent: false ,opacity: 1,specular: 0x444444, shininess:600, ambient:0x444444,
side: THREE.DoubleSide,metal:false,depthTest:true});
var material10 = new THREE.MeshLambertMaterial({color:0x333333,transparent: false ,opacity: 1,specular: 0x333333, shininess:600, ambient:0x333333,
side: THREE.DoubleSide,metal:false,depthTest:true});
var material70 = new THREE.MeshLambertMaterial({color:0x000000,transparent: false,opacity: 0.5,specular: 0xff3333, shininess:60, ambient:0xffffff,
side: THREE.DoubleSide,metal:true,depthTest:true});

var material80=   new THREE.MeshPhongMaterial({color:0xffbf00,transparent: false ,opacity: 1,specular: 0xffbf00, shininess:30, ambient:0xffbf00,
side: THREE.DoubleSide,metal:true,depthTest:true,Blending:THREE.NoBlending});


//BackSide,FrontSide
//###########$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%$$$$$$########################
/*	loader = new THREE.JSONLoader();
    	loader.load( 'http://192.168.1.66/11.files/model272_057.json', function ( geometry100, materials100 ) { 
	
        var faceMaterial = new THREE.MeshFaceMaterial( materials100 );
        json = new THREE.Mesh( geometry100, faceMaterial );
        json.position.set( -300,-245,0);
        json.scale.set( 35, 35,35 );
        scene.add( json );
        } );

	loader2 = new THREE.JSONLoader();
    	loader2.load( 'http://192.168.1.66/11.files/suzanne.js', function ( geometry101, materials101 ) { 
	
        var faceMaterial2 = new THREE.MeshFaceMaterial( materials101 );
        json2 = new THREE.Mesh( geometry101, faceMaterial2 );
        json2.position.set( 300,-100,0);
        json2.scale.set( 100, 100,100 );
        scene.add( json2 );
        } );

	loader3 = new THREE.JSONLoader();
    	loader3.load( 'http://192.168.1.66/11.files/suzanne.js', function ( geometry102, materials102 ) { 
	
        var faceMaterial3 = new THREE.MeshFaceMaterial( materials102 );
        json3 = new THREE.Mesh( geometry102, faceMaterial3 );
        json3.position.set( -400,500,0);
        json3.scale.set( 30, 30,30 );
        scene2.add( json3 );
        } );
*/
//%%%%%%%%%%%%%%%%%%%%$$$$$$$$$$$$$$##########################################
/*	var objLoader = new THREE.OBJMTLLoader();
	objLoader.load("http://192.168.1.66/1.files/OSTM_Jason-2.obj", "http://192.168.1.66/1.files/OSTM_Jason-2.mtl", function(model) {
	// 大きさを調整し、へその位置が地面に来るようにする
	model.scale.set(0.1, 0.1, 0.1);
	model.position.y = -40;
	// モデルをダミーオブジェクトで包む（へそ中心に回転したいため）
	chara = new THREE.Object3D();
	chara.add(model);
	// シーンへ追加する
	scene.add(chara);
	
	});

	
	var loader = new THREE.OBJMTLLoader();
	loader.addEventListener( 'load', function ( event ) {
 
    var object = event.content;
     
    // Blender の距離 1 と three.js の距離 1 の換算。実際に動かしてみて THREE.GridHelper と比較して、object.scale で調整する
    //object.scale.x = 0.1;
    //object.scale.y = 0.1;
    //object.scale.z = 0.1;
     
    scene.add( object );
 
});
loader.load( "http://192.168.1.66/1.files/OSTM_Jason-2.obj", "http://192.168.1.66/1.files/OSTM_Jason-2.mtl");

*/


//###&&&%'%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
	mesh = new THREE.Mesh(geometry,material2);
	

	mesh11 = new THREE.Mesh(geometry11,material3);

	mesh12 = new THREE.Mesh(geometry12,material22);
	mesh13 = new THREE.Mesh(geometry13,material22);

	mesh14 = new THREE.Mesh(geometry14,material2);
	mesh15 = new THREE.Mesh(geometry15,material82);
	mesh16 = new THREE.Mesh(geometry16,material2);
	mesh17 = new THREE.Mesh(geometry17,material2);
	mesh41 = new THREE.Mesh(geometry41,material5);
	mesh42 = new THREE.Mesh(geometry42,material8);
	mesh43 = new THREE.Mesh(geometry43,material6);

	mesh44 = new THREE.Mesh(geometry44,material22);
	mesh45 = new THREE.Mesh(geometry45,material22);
	mesh46 = new THREE.Mesh(geometry46,material22);
	mesh47 = new THREE.Mesh(geometry47,material22);
	mesh48 = new THREE.Mesh(geometry48,material22);
	mesh50 = new THREE.Mesh(geometry50,material22);
	mesh51 = new THREE.Mesh(geometry51,material22);
	mesh52 = new THREE.Mesh(geometry52,material22);
	mesh53 = new THREE.Mesh(geometry53,material22);
	mesh54 = new THREE.Mesh(geometry54,material22);
	mesh60 = new THREE.Mesh(geometry60,material9);

	mesh62 = new THREE.Mesh(geometry62,material82);
	mesh63 = new THREE.Mesh(geometry63,material22);
	mesh64 = new THREE.Mesh(geometry64,material82);
	mesh65 = new THREE.Mesh(geometry65,material22);
	mesh66 = new THREE.Mesh(geometry66,material9);
	mesh67 = new THREE.Mesh(geometry67,material10);
	mesh70 = new THREE.Mesh(geometry70,material70);
	mesh71 = new THREE.Mesh(geometry71,material70);
	mesh72 = new THREE.Mesh(geometry72,material7);
	mesh73 = new THREE.Mesh(geometry73,material70);
	mesh74 = new THREE.Mesh(geometry74,material70);
	mesh75 = new THREE.Mesh(geometry75,material7);
	mesh76 = new THREE.Mesh(geometry75,material5);
	mesh77 = new THREE.Mesh(geometry77,material22);
	
	mesh80 = new THREE.Mesh(geometry80,material80);
	mesh81 = new THREE.Mesh(geometry81,material80);
	
	mesh91 = new THREE.Mesh(geometry91,material5);
	mesh92 = new THREE.Mesh(geometry92,material10);
	mesh93 = new THREE.Mesh(geometry93,material5);
	mesh.castShadow = true;
      	scene.add(mesh);
	


	mesh11.castShadow = true;
      	scene.add(mesh11);
	//mesh12.castShadow = true;
      	scene.add(mesh12);
	mesh13.castShadow = true;
      	scene.add(mesh13);

	mesh14.castShadow = true;
      	scene.add(mesh14);
	mesh15.castShadow = true;
      	scene.add(mesh15);
	mesh16.castShadow = true;
      	scene.add(mesh16);
	mesh17.castShadow = true;
      	scene.add(mesh17);
	mesh41.castShadow = true;
     	scene.add(mesh41);
	mesh42.castShadow = true;
      	scene.add(mesh42);
	mesh43.castShadow = true;
      	scene.add(mesh43);
	mesh44.castShadow = true;
      	scene.add(mesh44);
	scene.add(mesh45);
	mesh46.castShadow = true;
      	scene.add(mesh46);
	//mesh47.castShadow = true;
      	scene.add(mesh47);
	//mesh48.castShadow = true;
      	scene.add(mesh48);
	scene.add(mesh50);
	scene.add(mesh51);
	scene.add(mesh52);
	scene.add(mesh53);
	scene.add(mesh54);
	scene.add(mesh60);
//	scene.add(mesh62);
//	scene.add(mesh63);
//	scene.add(mesh64);
//	scene.add(mesh65);
	scene.add(mesh66);
//	scene.add(mesh67);
	scene.add(mesh70);
	scene.add(mesh71);
	scene.add(mesh72);
	scene.add(mesh73);
	scene.add(mesh74);
	scene.add(mesh75);
	scene.add(mesh76);
//	scene.add(mesh77);
	scene.add(mesh80);
	scene.add(mesh81);
	scene.add(mesh91);
	scene.add(mesh92);
	scene.add(mesh93);

	light.castShadow = true
	renderer.shadowMapEnabled = true

	scene.remove(mesh80);
	scene.remove(mesh81);
document.body.appendChild( renderer.domElement );

function render() {
 
	renderer.clear() ;
  // 回転アニメーションを追加
  requestAnimationFrame(render);
	controls.update();

 



 
  // シーンとカメラを渡してレンダリング
  renderer.render(scene, camera);
}


var moge = function(foo) {
    moge.foo = foo;
    foo = null;
    return function() {
        moge.foo.apply(this, arguments);
    };
};
var hoge = function(renderer) {
    	var fuga = function(e) {
        	if(!mousedown) return;

	
   		moveDistance = {x: prevPosition.x - e.pageX, y: prevPosition.y - e.pageY};
   		mesh.rotation.x += moveDistance.y * 0.01;
   		mesh.rotation.y -= moveDistance.x * 0.01;

   		mesh11.rotation.x += moveDistance.y * 0.01;
   		mesh11.rotation.y -= moveDistance.x * 0.01;

   		mesh12.rotation.x += moveDistance.y * 0.01;
   		mesh12.rotation.y -= moveDistance.x * 0.01;
   		mesh13.rotation.x += moveDistance.y * 0.01;
   		mesh13.rotation.y -= moveDistance.x * 0.01;

   		mesh14.rotation.x += moveDistance.y * 0.01;
   		mesh14.rotation.y -= moveDistance.x * 0.01;
   		mesh15.rotation.x += moveDistance.y * 0.01;
   		mesh15.rotation.y -= moveDistance.x * 0.01;
   		mesh16.rotation.x += moveDistance.y * 0.01;
   		mesh16.rotation.y -= moveDistance.x * 0.01;
   		mesh17.rotation.x += moveDistance.y * 0.01;
   		mesh17.rotation.y -= moveDistance.x * 0.01;
   	
		mesh41.rotation.x += moveDistance.y * 0.01;
   		mesh41.rotation.y -= moveDistance.x * 0.01;
	
   		mesh42.rotation.x += moveDistance.y * 0.01;
   		mesh42.rotation.y -= moveDistance.x * 0.01;
   		mesh43.rotation.x += moveDistance.y * 0.01;
   		mesh43.rotation.y -= moveDistance.x * 0.01;
   		mesh44.rotation.x += moveDistance.y * 0.01;
   		mesh44.rotation.y -= moveDistance.x * 0.01;
   		mesh45.rotation.x += moveDistance.y * 0.01;
   		mesh45.rotation.y -= moveDistance.x * 0.01;

   		mesh46.rotation.x += moveDistance.y * 0.01;
  		mesh46.rotation.y -= moveDistance.x * 0.01;
   		mesh47.rotation.x += moveDistance.y * 0.01;
   		mesh47.rotation.y -= moveDistance.x * 0.01;
   		mesh48.rotation.x += moveDistance.y * 0.01;
   		mesh48.rotation.y -= moveDistance.x * 0.01;
		mesh50.rotation.x += moveDistance.y * 0.01;
   		mesh50.rotation.y -= moveDistance.x * 0.01;
		mesh51.rotation.x += moveDistance.y * 0.01;
   		mesh51.rotation.y -= moveDistance.x * 0.01;
		mesh52.rotation.x += moveDistance.y * 0.01;
   		mesh52.rotation.y -= moveDistance.x * 0.01;
		mesh53.rotation.x += moveDistance.y * 0.01;
   		mesh53.rotation.y -= moveDistance.x * 0.01;
		mesh54.rotation.x += moveDistance.y * 0.01;
   		mesh54.rotation.y -= moveDistance.x * 0.01;
		mesh60.rotation.x += moveDistance.y * 0.01;
  		mesh60.rotation.y -= moveDistance.x * 0.01;
		mesh62.rotation.x += moveDistance.y * 0.01;
   		mesh62.rotation.y -= moveDistance.x * 0.01;
		mesh63.rotation.x += moveDistance.y * 0.01;
   		mesh63.rotation.y -= moveDistance.x * 0.01;
		mesh64.rotation.x += moveDistance.y * 0.01;
   		mesh64.rotation.y -= moveDistance.x * 0.01;
		mesh65.rotation.x += moveDistance.y * 0.01;
   		mesh65.rotation.y -= moveDistance.x * 0.01;
		mesh66.rotation.x += moveDistance.y * 0.01;
   		mesh66.rotation.y -= moveDistance.x * 0.01;
//		mesh67.rotation.x += moveDistance.y * 0.01;
  // 		mesh67.rotation.y -= moveDistance.x * 0.01;
		mesh70.rotation.x -= moveDistance.x * 0.01;
		mesh70.rotation.y -= moveDistance.x * 0.01;
		mesh71.rotation.x -= moveDistance.x * 0.01;
		mesh71.rotation.y -= moveDistance.x * 0.01;
		mesh72.rotation.x -= moveDistance.x * 0.01;
		mesh72.rotation.y -= moveDistance.x * 0.01;
		mesh73.rotation.x -= moveDistance.x * 0.01;
		mesh73.rotation.y -= moveDistance.x * 0.01;
		mesh74.rotation.x -= moveDistance.x * 0.01;
		mesh74.rotation.y -= moveDistance.x * 0.01;
		mesh75.rotation.x -= moveDistance.x * 0.01;
		mesh75.rotation.y -= moveDistance.x * 0.01;

		mesh76.rotation.x -= moveDistance.x * 0.01;
		mesh76.rotation.y -= moveDistance.x * 0.01;
	//	mesh77.rotation.x -= moveDistance.x * 0.01;
	//	mesh77.rotation.y -= moveDistance.x * 0.01;
		mesh80.rotation.x -= moveDistance.x * 0.01;
		mesh80.rotation.y -= moveDistance.x * 0.01;
		mesh81.rotation.x -= moveDistance.x * 0.01;
		mesh81.rotation.y -= moveDistance.x * 0.01;
	
		mesh91.rotation.x -= moveDistance.x * 0.01;
		mesh91.rotation.y -= moveDistance.x * 0.01;
		mesh92.rotation.x -= moveDistance.x * 0.01;
		mesh92.rotation.y -= moveDistance.x * 0.01;
		mesh93.rotation.x -= moveDistance.x * 0.01;
		mesh93.rotation.y -= moveDistance.x * 0.01;


		json.rotation.x -= moveDistance.x * 0.01;
		json.rotation.y -= moveDistance.x * 0.01;
		json2.rotation.x -= moveDistance.x * 0.01;
		json2.rotation.y -= moveDistance.x * 0.01;
   		prevPosition = {x: e.pageX, y: e.pageY};
   		render();
    	};
    

 	renderer.domElement.addEventListener('mousemove', moge(fuga) , false);
	
	

};

 renderer.domElement.addEventListener('mouseup', function(e){
   mousedown = false;
	

}, false);



render();

}
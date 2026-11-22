var h_zahyou_x =new Array();
var h_zahyou_y =new Array();
var h_zahyou_z =new Array();

var h_ue_x =new Array();
var h_ue_y =new Array();
var h_ue_z =new Array();

var h_ueh_x =new Array();
var h_ueh_y =new Array();
var h_ueh_z =new Array();

var h_uel_x =new Array();
var h_uel_y =new Array();
var h_uel_z =new Array();
var h_uer_x =new Array();
var h_uer_y =new Array();
var h_uer_z =new Array();


var h_c_x =new Array();
var h_c_y =new Array();
var h_c_z =new Array();
var h_s_x =new Array();
var h_s_y =new Array();
var h_s_z =new Array();

var m_c_x =new Array();
var m_c_y =new Array();
var m_c_z =new Array();
var m_c_x2 =new Array();
var m_c_y2 =new Array();
var m_c_z2 =new Array();
var m_c_tx=new Array();
var m_c_ty=new Array();
var m_c_tz=new Array();
var m_c_tx2=new Array();
var m_c_ty2=new Array();
var m_c_tz2=new Array();
var m_c_cnt=0;

var m_s_x =new Array(0,0,0,0,0,0,0,0);
var m_s_y =new Array(0,0,0,0,0,0,0,0);
var m_s_z =new Array(0,0,0,0,0,0,0,0);
var m_s_x2 =new Array(0,0,0,0,0,0,0,0);
var m_s_y2 =new Array(0,0,0,0,0,0,0,0);
var m_s_z2 =new Array(0,0,0,0,0,0,0,0);
var m_s_tx=new Array(0,0,0,0,0,0,0,0);
var m_s_ty=new Array(0,0,0,0,0,0,0,0);
var m_s_tz=new Array(0,0,0,0,0,0,0,0);
var m_s_tx2=new Array(0,0,0,0,0,0,0,0);
var m_s_ty2=new Array(0,0,0,0,0,0,0,0);
var m_s_tz2=new Array(0,0,0,0,0,0,0,0);

var draw_m_ux=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_uy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_fx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_fy=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_bx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_by=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_lx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_ly=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_rx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_m_ry=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

var draw_m_us = new Array();
var draw_m_fs = new Array();
var draw_m_bs = new Array();
var draw_m_ls = new Array();
var draw_m_rs = new Array();
for(i=0;i < 22;i++){
	draw_m_ls[i] = new Array();
	draw_m_rs[i] = new Array();

	for(j=0;j < 22;j++){
		draw_m_ls[i][j] = 0;
		draw_m_rs[i][j] = 0;
	}
}
for(i=0;i < 22;i++){

	draw_m_us[i] = new Array();
	draw_m_fs[i] = new Array();
	draw_m_bs[i] = new Array();
	

	for(j=0;j < 22;j++){
		draw_m_us[i][j] = 0;
		draw_m_fs[i][j] = 0;
		draw_m_bs[i][j] = 0;
		
	}
}

var kk_cnt=0;
var kk_cntl=0;
var kk_cntb=0;
var kk_cntr=0;
var kk_cntu=0;


var m_s_cnt=0;


var hen_cnt_f=0;
var hen_cnt_b=0;
var hen_cnt_l=0;
var hen_cnt_r=0;

var i=0;
var j=0;
var flag_f=0;
var flag_b=0;
var flag_l=0;
var flag_r=0;
var draw_f1=0;
var draw_f2=0;
var draw_f3=0;
var draw_f4=0;
var draw_f5=0;
var kk=0;
var ks=0;
var kk_l=0;
var kk_b=0;
var kk_r=0;
var kk_u=0;

function h_init(x,y,h,t,a,b,c,d,p_height,p_thickness,p_type)
{
	//座標基準点	箱中心	横/2、奥行/2、高/2
	//5面×4フレーム×8頂点
	
	//面順：1上→2前面→3背面→4左面→5右面
	//フレーム順:
	//			上面：前→背→左→右		横×奥行
	//			前面：上→下→左→右		横×（高-厚）
	//			背面：上→下→左→右		横×（高-厚）
	//			左面：上→下→前→背		（奥行-2×厚）×（高-厚）
	//			右面：上→下→前→背		（奥行-2×厚）×（高-厚）
	
	//頂点順：
	//        1→ 2→ 0
   //         2→ 3→ 0
   //         0→ 5→ 1
   //         0→ 4→ 5
   //         3→ 2→ 6
   //         6→ 7→ 3
   //         0→ 3→ 4
   //         4→ 3→ 7
   //         1→ 5→ 2
   //         2→ 5→ 6
   //         4→ 6→ 5
   //         4→ 7→ 6
	
	flag_f=a;
	flag_b=b;
	flag_l=c;
	flag_r=d;
	

	//############################# 新上面丸め端面 #####################################
//################################# 上前面端面 ################################################
	j=0;
     for (i=0;i<=179;i++){

		h_ue_x[j]=-x/2;
		h_ue_x[j+1]=x/2;

		h_ue_y[j]=y/2+t*Math.cos(i*(Math.PI/180))-t;
		h_ue_y[j+1]=y/2+t*Math.cos(i*(Math.PI/180))-t;

		h_ue_z[j]=h/2+t*Math.sin(i*(Math.PI/180))-t;

		h_ue_z[j+1]=h/2+t*Math.sin(i*(Math.PI/180))-t;
		j=j+2;


		
     }

	
	for (i=0;i<360;i++){
          geometry_u.vertices.push( new THREE.Vector3(h_ue_x[i],h_ue_z[i],h_ue_y[i]));//0
	}

	for (i=0;i<180;i++){
		
		

		 geometry_u.faces.push(new THREE.Face3(i, i+1, i+2));

		 
		
	}
//############################ end ##############################################################
//################################# 上背面端面 ################################################

	j=0;
     for (i=0;i<=179;i++){

		h_ueh_x[j]=x/2;
		h_ueh_x[j+1]=-x/2;

		h_ueh_y[j]=-y/2-t*Math.cos(i*(Math.PI/180))+t;
		h_ueh_y[j+1]=-y/2-t*Math.cos(i*(Math.PI/180))+t;

		h_ueh_z[j]=h/2+t*Math.sin(i*(Math.PI/180))-t;

		h_ueh_z[j+1]=h/2+t*Math.sin(i*(Math.PI/180))-t;
		j=j+2;


		
     }

	
	for (i=0;i<360;i++){
          geometry_uh.vertices.push( new THREE.Vector3(h_ueh_x[i],h_ueh_z[i],h_ueh_y[i]));//0
	}

	for (i=0;i<180;i++){
		
		

		 geometry_uh.faces.push(new THREE.Face3(i, i+1, i+2));
		 
		
	}

//############################ end ##############################################################

//################################# 上左面端面 ################################################

	j=0;
     for (i=0;i<=179;i++){

		h_uel_x[j]=-x/2;
		h_uel_x[j+1]=-x/2;

		h_uel_y[j]=-y/2-t*Math.cos(i*(Math.PI/180))+t;
		h_uel_y[j+1]=y/2+t*Math.cos(i*(Math.PI/180))-t;

		h_uel_z[j]=h/2+t*Math.sin(i*(Math.PI/180))-t;

		h_uel_z[j+1]=h/2+t*Math.sin(i*(Math.PI/180))-t;
		j=j+2;


		
     }

	
	for (i=0;i<360;i++){
          geometry_ul.vertices.push( new THREE.Vector3(h_uel_x[i],h_uel_z[i],h_uel_y[i]));//0
	}

	for (i=0;i<180;i++){
		
		

		 geometry_ul.faces.push(new THREE.Face3(i, i+1, i+2));
		 
		
	}

//############################ end #############################################################

//################################# 上右面端面 ################################################

	j=0;
     for (i=0;i<=179;i++){

		h_uer_x[j]=x/2;
		h_uer_x[j+1]=x/2;

		h_uer_y[j]=y/2+t*Math.cos(i*(Math.PI/180))-t;
		h_uer_y[j+1]=-y/2-t*Math.cos(i*(Math.PI/180))+t;

		h_uer_z[j]=h/2+t*Math.sin(i*(Math.PI/180))-t;

		h_uer_z[j+1]=h/2+t*Math.sin(i*(Math.PI/180))-t;
		j=j+2;


		
     }

	
	for (i=0;i<360;i++){
          geometry_ur.vertices.push( new THREE.Vector3(h_uer_x[i],h_uer_z[i],h_uer_y[i]));//0
	}

	for (i=0;i<180;i++){
		
		

		 geometry_ur.faces.push(new THREE.Face3(i, i+1, i+2));
		 
		
	}

//############################ end ##############################################################


     for (i=0;i<=160;i++){
   		//############################# 上 #####################################
 	  	if (i==0 || i==1 || i==4 || i==5 || i==8 || i==9 || i==12 || i== 13 || i==16 || i==17 || i==20 || i==21 || i==18 || i==19 || i==22 || i==23){
   			if (i==18 || i==19 || i==22 || i==23){
   				h_zahyou_x[i]=-x/2+0.001;
   			}else{
   				h_zahyou_x[i]=-x/2;
   			}
   		}
   		if (i==2 || i==3 || i==6 || i==7 || i==10 || i==11 || i==14 || i== 15 || i==24 || i==25 || i==26 || i==27 || i==28 || i==29 || i==30 || i==31){
   			if (i==24 || i==25 || i==28 || i==29){
   				h_zahyou_x[i]=x/2-0.001;
   			}else{
   				h_zahyou_x[i]=x/2;
   			}
   		}
   		if (i==0 || i==1 || i==2 || i==3 || i==4 || i==5 || i==6 || i== 7 || i==16 || i==17 || i==18 || i==19 || i==24 || i==25 || i==26 || i==27){
   			if (i==4 || i==5 || i==6 || i==7){
   				h_zahyou_y[i]=y/2-0.001;
   			}else{
   				h_zahyou_y[i]=y/2;
   			}
   		}
   		if (i==8 || i==9 || i==10 || i==11 || i==12 || i==13 || i==14 || i==15 || i==20 || i==21 || i==22 || i==23 || i==28 || i==29 || i==30 || i==31){
   			if (i==8 || i==9 || i==10 || i==11){
   				h_zahyou_y[i]=-y/2+0.001;
   			}else{
   				h_zahyou_y[i]=-y/2;
   			}
   		}
   		if (i==0 || i==3 || i==4 || i==7 || i==8 || i==11 || i==12 || i==15 || i==16 || i==19 || i==20 || i==23 || i==24 || i==27 || i==28 || i==31){
   			h_zahyou_z[i]=h/2;
   		}
   		if (i==1 || i==2 || i==5 || i==6 || i==9 || i==10 || i==13 || i==14 || i==17 || i==18 || i==21 || i==22 || i==25 || i==26 || i==29 || i==30){
   		///	h_zahyou_z[i]=h/2-t;
			h_zahyou_z[i]=h/2;
   		}
   		
   		//############################# 前 #####################################
   		if (i==32 || i==33 || i==36 || i==37 || i==40 || i==41 || i==44 || i== 45 || i==48 || i==49 || i==50 || i==51 || i==52 || i==53 || i==54 || i==55){
   			if (i==50 || i==51 || i==54 || i==55){
   				h_zahyou_x[i]=-x/2+0.001;
   			}else{
   				h_zahyou_x[i]=-x/2;
   			}
   		}
   		if (i==34 || i==35 || i==38 || i== 39 || i==42 || i==43 || i==46 || i==47 ||  i==56 || i==57 || i==58 || i==59 || i==60 || i==61 || i==62 || i==63){
   			if (i==56 || i==57 || i==60 || i==61){
   				h_zahyou_x[i]=x/2-0.001;
   			}else{
   				h_zahyou_x[i]=x/2;
   			}
   		}
   		if (i==32 || i==33 || i==34 || i==35 || i==40 || i==41 || i==42 || i==43 || i==48 || i==49 || i==50 || i==51 || i==56 || i==57 || i==58 || i==59){
   			
   			h_zahyou_y[i]=y/2;
   			
   		}
   		if (i==36 || i==37 || i==38 || i==39 || i==44 || i==45 || i==46 || i== 47 || i==52 || i==53 || i==54 || i==55 || i==60 || i==61 || i==62 || i==63){
   			h_zahyou_y[i]=y/2-t;
   		}
   		
   		if (i==32 || i==33 || i==34 || i==35 || i==36 || i==37 || i==38 || i== 39 || i==48 || i==51 || i==52 || i==55 || i==56 || i==59 || i==60 || i==63){
   			if (i==33 || i==34 || i==37 || i==38){
   				h_zahyou_z[i]=h/2-0.001-t;
   			}else{
   				h_zahyou_z[i]=h/2-t;
   			}
   		}
   		if (i==40 || i==41 || i==42 || i==43 || i==44 || i==45 || i==46 || i==47 || i==49 || i==50 || i==53 || i==54 || i==57 || i==58 || i==61 || i==62){
   			if (i==56 || i==59 || i==60 || i==63){
   				h_zahyou_z[i]=-h/2+0.001;
   			}else{
   				h_zahyou_z[i]=-h/2;
   			}
   		}
   		
  		//############################# 背 #####################################
   		if (i==32+32 || i==33+32 || i==36+32 || i==37+32 || i==40+32 || i==41+32 || i==44+32 || i== 45+32 || i==48+32 || i==49+32 || i==50+32 || i==51+32 || i==52+32 || i==53+32 || i==54+32 || i==55+32){
   			if (i==50+32 || i==51+32 || i==54+32 || i==55+32){
   				h_zahyou_x[i]=-x/2+0.001;
   			}else{
   				h_zahyou_x[i]=-x/2;
   			}
   		}
   		if (i==34+32 || i==35+32 || i==38+32 || i== 39+32 || i==42+32 || i==43+32 || i==46+32 || i==47+32 ||  i==56+32 || i==57+32 || i==58+32 || i==59+32 || i==60+32 || i==61+32 || i==62+32 || i==63+32){
   			if (i==56+32 || i==57+32 || i==60+32 || i==61+32){
   				h_zahyou_x[i]=x/2-0.001;
   			}else{
   				h_zahyou_x[i]=x/2;
   			}
   		}
   		if (i==32+32 || i==33+32 || i==34+32 || i==35+32 || i==40+32 || i==41+32 || i==42+32 || i==43+32 || i==48+32 || i==49+32 || i==50+32 || i==51+32 || i==56+32 || i==57+32 || i==58+32 || i==59+32){
   			
   			h_zahyou_y[i]=-y/2+t;
   			
   		}
   		if (i==36+32 || i==37+32 || i==38+32 || i==39+32 || i==44+32 || i==45+32 || i==46+32 || i== 47+32 || i==52+32 || i==53+32 || i==54+32 || i==55+32 || i==60+32 || i==61+32 || i==62+32 || i==63+32){
   			h_zahyou_y[i]=-y/2;
   		}
   		
   		if (i==32+32 || i==33+32 || i==34+32 || i==35+32 || i==36+32 || i==37+32 || i==38+32 || i== 39+32 || i==48+32 || i==51+32 || i==52+32 || i==55+32 || i==56+32 || i==59+32 || i==60+32 || i==63+32){
   			if (i==33+32 || i==34+32 || i==37+32 || i==38+32){
   				h_zahyou_z[i]=h/2-0.001-t;
   			}else{
   				h_zahyou_z[i]=h/2-t;
   			}
   		}
   		if (i==40+32 || i==41+32 || i==42+32 || i==43+32 || i==44+32 || i==45+32 || i==46+32 || i==47+32 || i==49+32 || i==50+32 || i==53+32 || i==54+32 || i==57+32 || i==58+32 || i==61+32 || i==62+32){
   			if (i==56+32 || i==59+32 || i==60+32 || i==63+32){
   				h_zahyou_z[i]=-h/2+0.001;
   			}else{
   				h_zahyou_z[i]=-h/2;
   			}
   		}
  		//############################# 左 #####################################
   		if (i==96 || i==97 || i==100 || i==101 || i==104 || i==105 || i==108 || i==109 || i==112 || i==113 || i==116 || i==117 || i==120 || i==121 || i==124 || i==125){
			
   			h_zahyou_x[i]=-x/2;
   				
   		}
   		if (i==98 || i==99 || i==102 || i==103 || i==106 || i==107 || i==110 || i==111 || i==114 || i==115 || i==118 || i==119 || i==122 || i==123 || i==126 || i==127){
			
   			h_zahyou_x[i]=-x/2+t;
   				
   		}
   		if (i==96 || i==97 || i==98 || i==99 || i==104 || i==105 || i==106 || i==107 || i==112 || i==113 || i==114 || i==115 || i==116 || i==117 || i==118 || i==119){
			if (i==116 || i==117 || i==118 || i==119){
   				h_zahyou_y[i]=y/2-0.001-t;
   			}else{
   				h_zahyou_y[i]=y/2-t;
   			}
   				
   		}
   		if (i==100 || i==101 || i==102 || i==103 || i==108 || i==109 || i==110 || i==111 || i==120 || i==121 || i==122 || i==123 || i==124 || i==125 || i==126 || i==127){
			if (i==120 || i==121 || i==122 || i==123){
   				h_zahyou_y[i]=-y/2+0.001+t;
   			}else{
   				h_zahyou_y[i]=-y/2+t;
   			}
   				
   		}
   		if (i==96 || i==97 || i==98 || i==99 || i==100 || i==101 || i==102 || i==103 || i==112  || i==115 || i==116 || i==119 || i==120 || i==123 || i==124 || i==127){
			if (i==97 || i==98 || i==101 || i==102){
				h_zahyou_z[i]=h/2-0.001-t;
			}else{
				h_zahyou_z[i]=h/2-t;
			}
		}
		if (i==104 || i==105 || i==106 || i==107 || i==108 || i==109 || i==110 || i==111 || i==113  || i==114 || i==117 || i==118 || i==121 || i==122 || i==125 || i==126){
			if (i==104 || i==107 || i==108 || i==111){
				h_zahyou_z[i]=-h/2+0.001;
			}else{
				h_zahyou_z[i]=-h/2;
			}
		}
   		
   		//############################# 右 #####################################
   		if (i==96+32 || i==97+32 || i==100+32 || i==101+32 || i==104+32 || i==105+32 || i==108+32 || i==109+32 || i==112+32 || i==113+32 || i==116+32 || i==117+32 || i==120+32 || i==121+32 || i==124+32 || i==125+32){
			
   			h_zahyou_x[i]=x/2-t;
   				
   		}
   		if (i==98+32 || i==99+32 || i==102+32 || i==103+32 || i==106+32 || i==107+32 || i==110+32 || i==111+32 || i==114+32 || i==115+32 || i==118+32 || i==119+32 || i==122+32 || i==123+32 || i==126+32 || i==127+32){
			
   			h_zahyou_x[i]=x/2;
   				
   		}
   		if (i==96+32 || i==97+32 || i==98+32 || i==99+32 || i==104+32 || i==105+32 || i==106+32 || i==107+32 || i==112+32 || i==113+32 || i==114+32 || i==115+32 || i==116+32 || i==117+32 || i==118+32 || i==119+32){
			if (i==116+32 || i==117+32 || i==118+32 || i==119+32){
   				h_zahyou_y[i]=y/2-0.001-t;
   			}else{
   				h_zahyou_y[i]=y/2-t;
   			}
   				
   		}
   		if (i==100+32 || i==101+32 || i==102+32 || i==103+32 || i==108+32 || i==109+32 || i==110+32 || i==111+32 || i==120+32 || i==121+32 || i==122+32 || i==123+32 || i==124+32 || i==125+32 || i==126+32 || i==127+32){
			if (i==120+32 || i==121+32 || i==122+32 || i==123+32){
   				h_zahyou_y[i]=-y/2+0.001+t;
   			}else{
   				h_zahyou_y[i]=-y/2+t;
   			}
   				
   		}
   		if (i==96+32 || i==97+32 || i==98+32 || i==99+32 || i==100+32 || i==101+32 || i==102+32 || i==103+32 || i==112+32  || i==115+32 || i==116+32 || i==119+32 || i==120+32 || i==123+32 || i==124+32 || i==127+32){
			if (i==97+32 || i==98+32 || i==101+32 || i==102+32){
				h_zahyou_z[i]=h/2-0.001-t;
			}else{
				h_zahyou_z[i]=h/2-t;
			}
		}
		if (i==104+32 || i==105+32 || i==106+32 || i==107+32 || i==108+32 || i==109+32 || i==110+32 || i==111+32 || i==113+32  || i==114+32 || i==117+32 || i==118+32 || i==121+32 || i==122+32 || i==125+32 || i==126+32){
			if (i==104+32 || i==107+32 || i==108+32 || i==111+32){
				h_zahyou_z[i]=-h/2+0.001;
			}else{
				h_zahyou_z[i]=-h/2;
			}
		}
     }   
}


function m_model(geometry,x,y,r,t)
{

		for (i=0;i<160;i++){
          geometry.vertices.push(
            new THREE.Vector3(h_zahyou_x[i],h_zahyou_z[i],h_zahyou_y[i]));//0
	 	}
	  



 		for (i=0;i<=19;i++){

//前			
			if ((flag_f==1 && i==5) || (flag_b==1 && i==9) ||(flag_l==1 && i==13) ||(flag_r==1 && i==17)){	
			}else{
	
		 		geometry.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 		geometry.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
//左
	
		 		geometry.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		 		geometry.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
//右
		 		geometry.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		 		geometry.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
//上
		 		geometry.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		 		geometry.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
	
		
	
//底	
	
				geometry.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
				geometry.faces.push( new THREE.Face3(2+i*8, 5+i*8,6+i*8));
	
	
//後ろ
				geometry.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
	
				geometry.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
			}
	  
	  	}

	
	

}


function draw_c(geometry,p,z,w,d,h,x,y,r,t,o)
{
	var cnt=0;
	var i=0;
	var j=0;
	var aa=0;
	var h_x=0;
	var h_y=0;
	var h_z=0;
	m_c_cnt=0;
	for(i=0;i<1440;i++){
		h_c_x[i]=0;
		h_c_y[i]=0;
		h_c_z[i]=0;
		
	}
	for(i=0;i<400;i++){
		m_c_x[i]=0;
		m_c_y[i]=0;
		m_c_z[i]=0;
	}
	if(p==1){
		if (z==1){
			h_x=-w/2+x;
			h_y=-d/2+y;
		}
		if (z==2){
			h_x=-w/2+x;
			h_y=d/2-y;
		}
		if (z==3){
			h_x=w/2-x;
			h_y=d/2-y;
		}
		if (z==4){
			h_x=w/2-x;
			h_y=-d/2+y;
		}
	
		for (i=0;i<90;i=i+1){	
					
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			
			h_c_z[j]=h/2;
			m_c_x[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			m_c_y[aa]=h_y-r/2*Math.cos(i*(Math.PI/180));
			
			m_c_z[aa]=h/2;
			
			m_c_x2[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			m_c_y2[aa]=h_y-r/2*Math.cos(i*(Math.PI/180));
			m_c_z2[0,c_cnt,aa]=h/2-t;
			aa=aa+1;
			
			j=j+1;

			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;

			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			if (i==0){
				m_c_tx[0]=h_x-r/2;
				m_c_ty[0]=h_y-r/2;
				m_c_tz[0]=h/2;
				
				m_c_tx[4]=h_x-r/2;
				m_c_ty[4]=h_y-r/2;
				m_c_tz[4]=h/2-t;
				m_c_cnt=m_c_cnt+1;
			}
			
		}
		for (i=90;i>0;i=i-1){
				
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			m_c_x[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			m_c_y[aa]=h_y+r/2*Math.cos(i*(Math.PI/180));
			
			m_c_z[aa]=h/2;
			
			m_c_x2[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			m_c_y2[aa]=h_y+r/2*Math.cos(i*(Math.PI/180));
			m_c_z2[aa]=h/2-t;
			aa=aa+1;

			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			if (i==90){
				m_c_tx[1]=h_x-r/2;
				m_c_ty[1]=h_y+r/2;
				m_c_tz[1]=h/2;
				
				m_c_tx[5]=h_x-r/2;
				m_c_ty[5]=h_y+r/2;
				m_c_tz[5]=h/2-t;
				m_c_cnt=m_c_cnt+1;
			}
			
		}
		for (i=0;i<90;i=i+1){
			
			
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			
			m_c_x[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			
			m_c_y[aa]=h_y+r/2*Math.cos(i*(Math.PI/180));
			
			m_c_z[aa]=h/2;
			
			m_c_x2[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			m_c_y2[aa]=h_y+r/2*Math.cos(i*(Math.PI/180));
			m_c_z2[aa]=h/2-t;
			aa=aa+1;

			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			if (i==0){
				m_c_tx[2]=h_x+r/2;
				m_c_ty[2]=h_y+r/2;
				m_c_tz[2]=h/2;
				
				m_c_tx[6]=h_x+r/2;
				m_c_ty[6]=h_y+r/2;
				m_c_tz[6]=h/2-t;
				m_c_cnt=m_c_cnt+1;
			}

		}
		for (i=89;i>=0;i=i-1){
			

			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			
			m_c_x[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			
			m_c_y[aa]=h_y-r/2*Math.cos(i*(Math.PI/180));
			
			m_c_z[aa]=h/2;
			
			m_c_x2[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			m_c_y2[aa]=h_y-r/2*Math.cos(i*(Math.PI/180));
			m_c_z2[aa]=h/2-t;
			aa=aa+1;


			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			if (i==89){
				m_c_tx[3]=h_x+r/2;
				m_c_ty[3]=h_y-r/2;
				m_c_tz[3]=h/2;
				
				m_c_tx[7]=h_x+r/2;
				m_c_ty[7]=h_y-r/2;
				m_c_tz[7]=h/2-t;
				m_c_cnt=m_c_cnt+1;
			}
		}
		draw_ku(0,c_cnt_u);
		
					
	}
	if(p==2 || p==3){
		if (z==1){
			
			if(p==2){
				h_x=-w/2+x;
				h_y=d/2;
			}else{
				h_x=w/2-x;
				h_y=-d/2+t;
			}
			h_z=h/2-y;
		}
		if (z==2){
			
			if(p==2){
				h_x=-w/2+x;
				h_y=d/2;
			}else{
				h_x=w/2-x;
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
			
		}
		if (z==3){
			
			if(p==2){
				h_x=w/2-x;
				h_y=d/2;
			}else{
				h_x=-w/2+x;
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
			
		}
		if (z==4){
			
			if(p==2){
				h_x=w/2-x;
				h_y=d/2;
			}else{
				h_y=-d/2+t;
				h_x=-w/2+x;
			}
			h_z=h/2-y;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y;
			
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			if (p==2){
				m_c_x[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y;
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));
			}else{
				m_c_x[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y-t;
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;



			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			if (i==0){
				if (p==2){
					m_c_tx[0]=h_x-r/2;
					m_c_ty[0]=h_y;
					m_c_tz[0]=h_z+r/2;
				
					m_c_tx[4]=h_x-r/2;
					m_c_ty[4]=h_y-t;
					m_c_tz[4]=h_z+r/2;
				}else{
					m_c_tx[0]=h_x-r/2;
					m_c_ty[0]=h_y-t;
					m_c_tz[0]=h_z+r/2;
				
					m_c_tx[4]=h_x-r/2;
					m_c_ty[4]=h_y-t;
					m_c_tz[4]=h_z+r/2;
				}
			}
			
			
		}
		for (i=90;i>0;i=i-1){
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			if (p==2){
				m_c_x[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y;
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));
			}else{
				m_c_x[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y-t;
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x-r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
			if (i==90){
				if (p==2){
					m_c_tx[1]=h_x-r/2;
					m_c_ty[1]=h_y;
					m_c_tz[1]=h_z-r/2;
				
					m_c_tx[5]=h_x-r/2;
					m_c_ty[5]=h_y-t;
					m_c_tz[5]=h_z-r/2;
				}else{
					m_c_tx[1]=h_x-r/2;
					m_c_ty[1]=h_y-t;
					m_c_tz[1]=h_z-r/2;
				
					m_c_tx[5]=h_x-r/2;
					m_c_ty[5]=h_y-t;
					m_c_tz[5]=h_z-r/2;
				}
			}
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			
			if (p==2){
				m_c_x[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y;
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));
			}else{
				m_c_x[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y-t;
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;

			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			if (i==0){
				if (p==2){
					m_c_tx[2]=h_x+r/2;
					m_c_ty[2]=h_y;
					m_c_tz[2]=h_z-r/2;
				
					m_c_tx[6]=h_x+r/2;
					m_c_ty[6]=h_y-t;
					m_c_tz[6]=h_z-r/2;
				}else{
					m_c_tx[2]=h_x+r/2;
					m_c_ty[2]=h_y-t;
					m_c_tz[2]=h_z-r/2;
				
					m_c_tx[6]=h_x+r/2;
					m_c_ty[6]=h_y-t;
					m_c_tz[6]=h_z-r/2;
				}
			}
		}
		for (i=89;i>=0;i=i-1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			if (p==2){
				m_c_x[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y;
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));
			}else{
				m_c_x[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_y[aa]=h_y-t;
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));
			
				m_c_x2[aa]=h_x+r/2*Math.sin(i*(Math.PI/180));
				m_c_y2[aa]=h_y-t;
				m_c_z2[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1
			
			if (i==89){
				if (p==2){
					m_c_tx[3]=h_x+r/2;
					m_c_ty[3]=h_y;
					m_c_tz[3]=h_z+r/2;
				
					m_c_tx[7]=h_x+r/2;
					m_c_ty[7]=h_y-t;
					m_c_tz[7]=h_z+r/2;
				}else{
					m_c_tx[3]=h_x+r/2;
					m_c_ty[3]=h_y-t;
					m_c_tz[3]=h_z+r/2;
				
					m_c_tx[7]=h_x+r/2;
					m_c_ty[7]=h_y-t;
					m_c_tz[7]=h_z+r/2;
				}
			}

		}
		if(p==2){
			draw_k(1,c_cnt_f);	
		}else{
			draw_kb(2,c_cnt_b);
		}		
	}
	if(p==4 || p==5){
		if (z==1){
			
			if(p==4){
				h_y=-d/2+x;
				h_x=-w/2+t;
			}else{
				h_y=d/2-x;
				h_x=w/2;
			}
			
			h_z=h/2-y;
		}
		if (z==2){
			
			if(p==4){
				h_y=-d/2+x;
				h_x=-w/2+t;
			}else{
				h_x=w/2;
				h_y=d/2-x;
			}
			
			h_z=-h/2+y;
			
		}
		if (z==3){
			
			if(p==4){
				h_x=-w/2+t;
				h_y=d/2-x;
			}else{
				h_x=w/2;
				h_y=-d/2+x;
			}
			
			h_z=-h/2+y;
			
		}
		if (z==4){
			
			if(p==4){
				h_x=-w/2+t;
				h_y=d/2-x;
			}else{
				h_x=w/2;
				h_y=-d/2+x;
			}
			
			h_z=h/2-y;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x;
			
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			if (p==4){
				m_c_x[aa]=h_x-t;
			
				m_c_y[aa]=h_y-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));

			}else{
				m_c_x[aa]=h_x;
			
				m_c_y[aa]=h_y-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;

			if (i==0){
				if (p==4){
					m_c_tx[0]=h_x-t;
					m_c_ty[0]=h_y-r/2;
					m_c_tz[0]=h_z-r/2;
				
					m_c_tx2[4]=h_x;
					m_c_ty2[4]=h_y-r/2;
					m_c_tz2[4]=h_z-r/2;
					
				}else{
					m_c_tx[0]=h_x;
					m_c_ty[0]=h_y-r/2;
					m_c_tz[0]=h_z-r/2;
				
					m_c_tx2[4]=h_x;
					m_c_ty2[4]=h_y-r/2;
					m_c_tz2[4]=h_z-r/2;
				}
			}
			
		}
		for (i=90;i>0;i=i-1){
			
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			if (p==4){
				m_c_x[aa]=h_x-t;
			
				m_c_y[aa]=h_y-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));

			}else{
				m_c_x[aa]=h_x;
			
				m_c_y[aa]=h_y-r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			if (i==90){
				if (p==4){
					m_c_tx[1]=h_x-t;
					m_c_ty[1]=h_y-r/2;
					m_c_tz[1]=h_z+r/2;
				
					m_c_tx2[5]=h_x;
					m_c_ty2[5]=h_y-r/2;
					m_c_tz2[5]=h_z+r/2;
					
				}else{
					m_c_tx[1]=h_x;
					m_c_ty[1]=h_y-r/2;
					m_c_tz[1]=h_z+r/2;
				
					m_c_tx2[5]=h_x;
					m_c_ty2[5]=h_y-r/2;
					m_c_tz2[5]=h_z+r/2;
				}
			}
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			if (p==4){
				m_c_x[aa]=h_x-t;
			
				m_c_y[aa]=h_y+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));

			}else{
				m_c_x[aa]=h_x;
			
				m_c_y[aa]=h_y+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z+r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			

			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;

			if (i==0){
				if (p==4){
					m_c_tx[2]=h_x-t;
					m_c_ty[2]=h_y+r/2;
					m_c_tz[2]=h_z+r/2;
				
					m_c_tx2[6]=h_x;
					m_c_ty2[6]=h_y+r/2;
					m_c_tz2[6]=h_z+r/2;
					
				}else{
					m_c_tx[2]=h_x;
					m_c_ty[2]=h_y+r/2;
					m_c_tz[2]=h_z+r/2;
				
					m_c_tx2[6]=h_x;
					m_c_ty2[6]=h_y+r/2;
					m_c_tz2[6]=h_z+r/2;
				}
			}

		}
		for (i=89;i>=0;i=i-1){
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			if (p==4){
				m_c_x[aa]=h_x-t;
			
				m_c_y[aa]=h_y+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));

			}else{
				m_c_x[aa]=h_x;
			
				m_c_y[aa]=h_y+r/2*Math.sin(i*(Math.PI/180));
			
				m_c_z[aa]=h_z-r/2*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+(r/2+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1
			if (i==89){
				if (p==4){
					m_c_tx[3]=h_x-t;
					m_c_ty[3]=h_y+r/2;
					m_c_tz[3]=h_z-r/2;
				
					m_c_tx2[7]=h_x;
					m_c_ty2[7]=h_y+r/2;
					m_c_tz2[7]=h_z-r/2;
					
				}else{
					m_c_tx[3]=h_x;
					m_c_ty[3]=h_y+r/2;
					m_c_tz[3]=h_z-r/2;
				
					m_c_tx2[7]=h_x;
					m_c_ty2[7]=h_y+r/2;
					m_c_tz2[7]=h_z-r/2;
				}
			}
		}
		
		if(p==4){
			draw_kl(3,c_cnt_l);	
		}else{
			draw_kr(4,c_cnt_r);
		}			
	}
	
	for (i=0;i<1440;i++){
          geometry.vertices.push(
            new THREE.Vector3(h_c_x[i],h_c_z[i],h_c_y[i]));//0
	}	

	
	for (i=20+o*180;i<20+(o+1)*180;i=i+1){
		
		 geometry.faces.push(
	            new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 geometry.faces.push(
	            new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	
//左
	
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
//右
		 	geometry.faces.push(
	            new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		 	geometry.faces.push(
	            new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
//上
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		 	geometry.faces.push(
	            new THREE.Face3(4+i*8, 3+i*8,7+i*8));
	
		
	
//底	
	
			geometry.faces.push(
	            new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry.faces.push(
	            new THREE.Face3(2+i*8, 5+i*8,6+i*8));
	
	
//後ろ
			geometry.faces.push(
	            new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
	
			geometry.faces.push(
	            new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		
		if (i<20+(o+1)*179){
			geometry.faces.push(
	            new THREE.Face3(1+i*8+4, 2+i*8+4, 0+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(2+i*8+4, 3+i*8+4, 0+i*8+4));
	
//左
	
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8+4, 5+i*8+4, 1+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8+4, 4+i*8+4, 5+i*8+4));
//右
		 	geometry.faces.push(
	            new THREE.Face3(3+i*8+4, 2+i*8+4, 6+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(6+i*8+4, 7+i*8+4, 3+i*8+4));
//上
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8+4, 3+i*8+4,4+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(4+i*8+4, 3+i*8+4,7+i*8+4));
	
		
	
//底	
	
			geometry.faces.push(
	            new THREE.Face3(1+i*8+4, 5+i*8+4,2+i*8+4));
			geometry.faces.push(
	            new THREE.Face3(2+i*8+4, 5+i*8+4,6+i*8+4));
	
	
//後ろ
			geometry.faces.push(
	            new THREE.Face3(4+i*8+4, 6+i*8+4, 5+i*8+4));
	
			geometry.faces.push(
	            new THREE.Face3(4+i*8+4, 7+i*8+4, 6+i*8+4));
		
		}

		
	}

	
}






function draw_s(geometry,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
	var cnt=0;
	var i=0;
	var j=0;
	var k=0;
	var aa=0;
	var h_x=0;
	var h_y=0;
	var h_z=0;
	var s_cnt_u=0;
	var s_cnt_f=1;
	var s_cnt_b=2;
	var s_cnt_l=3;
	var s_cnt_r=4;	
	draw_f1=0;
	draw_f2=0;
	draw_f3=0;
	draw_f4=0;
	var d_flag=0;
	for(i=0;i<1440;i++){
		h_c_x[j]=0;
		h_c_y[j]=0;
		h_c_z[j]=0;
		
	}

			for (k=0;k<400;k++){
				m_s_x[k] =0;
				m_s_y[k] =0;
				m_s_z[k] =0;
			}
		

	

	j=0;
	if (r1=="R5"){
		r=4;
		//r=40;
	}else{
		r=2;
	}

	if (p==2){
		if (z==1 || z==4){
			if (y1+y2==h){
				
				hen_cnt_f=hen_cnt_f+1;
			}
		}
		if (z==2 || z==3){
			if (y1==0){
				
				hen_cnt_f=hen_cnt_f+1;
			}
		}
	}
	if (p==3){
		if (z==1 || z==4){
			if (y1+y2==h){
				
				hen_cnt_b=hen_cnt_b+1;
			}
		}
		if (z==2 || z==3){
			if (y1==0){
				
				hen_cnt_b=hen_cnt_b+1;
			}
		}
	}
	if (p==4){
		if (z==1 || z==4){
			if (y1+y2==h){
				
				hen_cnt_l=hen_cnt_l+1;
			}
		}
		if (z==2 || z==3){
			if (y1==0){
				
				hen_cnt_l=hen_cnt_l+1;
			}
		}
	}
	if (p==5){
		if (z==1 || z==4){
			if (y1+y2==h){
				
				hen_cnt_r=hen_cnt_r+1;
			}
		}
		if (z==2 || z==3){
			if (y1==0){
				
				hen_cnt_r=hen_cnt_r+1;
			}
		}
	}
	if(p==1){
		if (z==1){
			h_x=-w/2+x1+r;
			h_y=-d/2+y1+r;
		}
		if (z==2){
			h_x=-w/2+x1+r;
			h_y=d/2-y1-y2+r;
		}
		if (z==3){
			h_x=w/2-x1-x2+r;
			h_y=d/2-y1-y2+r;
		}
		if (z==4){
			h_x=w/2-x1-x2+r;
			h_y=-d/2+y1+r;
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y-r*Math.cos(i*(Math.PI/180));
			
			h_c_z[j]=h/2;
			m_s_x[aa]=h_x-r*Math.sin(i*(Math.PI/180));
			
			m_s_y[aa]=h_y-r*Math.cos(i*(Math.PI/180));
			
			m_s_z[aa]=h/2;
			aa=aa+1;

			j=j+1;
			h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			
			if (i==0){
				m_s_tx[0]=h_x-r;
				m_s_ty[0]=h_y-r;
				m_s_tz[0]=h/2;
				
				m_s_tx[4]=h_x-r;
				m_s_ty[4]=h_y-r;
				m_s_tz[4]=h/2-t;
				
			}
			
		}
		if (z==1){
			h_x=-w/2+x1+r;
			h_y=-d/2+y1+y2-r;
		}
		if (z==2){
			h_x=-w/2+x1+r;
			h_y=d/2-y1-r;
		}
		if (z==3){
			h_x=w/2-x1-x2+r;
			h_y=d/2-y1-r;
		}
		if (z==4){
			h_x=w/2-x1-x2+r;
			h_y=-d/2+y1+y2-r;
		}	
		for (i=90;i>0;i=i-1){
			
			h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			m_s_x[aa]=h_x-r*Math.sin(i*(Math.PI/180));
			
			m_s_y[aa]=h_y+r*Math.cos(i*(Math.PI/180));
			
			m_s_z[aa]=h/2;
			aa=aa+1;
			j=j+1;
			h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			if (i==90){
				m_s_tx[1]=h_x-r;
				m_s_ty[1]=h_y+r;
				m_s_tz[1]=h/2;
				
				m_s_tx[5]=h_x-r;
				m_s_ty[5]=h_y+r;
				m_s_tz[5]=h/2-t;
				
			}
			
			
		}
		if (z==1){
			h_x=-w/2+x1+x2-r;
			h_y=-d/2+y1+y2-r;
		}
		if (z==2){
			h_x=-w/2+x1+x2-r;
			h_y=d/2-y1-r;
		}
		if (z==3){
			h_x=w/2-x1-r;
			h_y=d/2-y1-r;
		}
		if (z==4){
			h_x=w/2-x1-r;
			h_y=-d/2+y1+y2-r;
		}	
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			
			m_s_x[aa]=h_x+r*Math.sin(i*(Math.PI/180));
			
			m_s_y[aa]=h_y+r*Math.cos(i*(Math.PI/180));
			
			m_s_z[aa]=h/2;
			aa=aa+1;

			j=j+1;
			h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			if (i==0){
				m_s_tx[2]=h_x+r;
				m_s_ty[2]=h_y+r;
				m_s_tz[2]=h/2;
				
				m_s_tx[6]=h_x+r;
				m_s_ty[6]=h_y+r;
				m_s_tz[6]=h/2-t;
				
			}
		}
		if (z==1){
			h_x=-w/2+x1+x2-r;
			h_y=-d/2+y1+r;
		}
		if (z==2){
			h_x=-w/2+x1+x2-r;
			h_y=d/2-y1-y2+r;
		}
		if (z==3){
			h_x=w/2-x1-r;
			h_y=d/2-y1-y2+r;
		}
		if (z==4){
			h_x=w/2-x1-r;
			h_y=-d/2+y1+r;
		}	
		for (i=89;i>=0;i=i-1){
			h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;

			m_s_x[aa]=h_x+r*Math.sin(i*(Math.PI/180));
			
			m_s_y[aa]=h_y-r*Math.cos(i*(Math.PI/180));
			
			m_s_z[aa]=h/2;
			aa=aa+1;
			
			j=j+1;
			h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r+0.5)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1
			if (i==89){
				m_s_tx[3]=h_x+r;
				m_s_ty[3]=h_y-r;
				m_s_tz[3]=h/2;
				
				m_s_tx[7]=h_x+r;
				m_s_ty[7]=h_y-r;
				m_s_tz[7]=h/2-t;
				
			}
		}
		draw_k_s(0,s_cnt_u);
					
	}
	if(p==2 || p==3){
		if (z==1){
			
			if(p==2){
				h_x=-w/2+x1+r;
				h_y=d/2;
				
			}else{
				h_x=w/2-x1-x2+r;
				h_y=-d/2+t;
			}
			h_z=h/2-y1-r;
		}
		if (z==2){
			
			if(p==2){
				h_x=-w/2+x1+r;
				h_y=d/2;
			}else{
				h_x=w/2-x1-x2+r;
				h_y=-d/2+t;
			}
			h_z=-h/2+y1+y2-r;
			
		}
		if (z==3){
			
			if(p==2){
				h_x=w/2-x1-x2+r;
				h_y=d/2;
			}else{
				h_x=-w/2+x1+r;
				h_y=-d/2+t;
			}
			h_z=-h/2+y1+y2-r;
			
		}
		if (z==4){
			
			if(p==2){
				h_x=w/2-x1-x2+r;
				h_y=d/2;
			}else{
				h_y=-d/2+t;
				h_x=-w/2+x1+r;
			}
			h_z=h/2-y1-r;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y;
			
			h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
			if (p==2){
				m_s_x[aa]=h_x-r*Math.sin(i*(Math.PI/180));
			
				m_s_y[aa]=h_y;
			
				m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));
			
				m_s_x2[aa]=h_x-r*Math.sin(i*(Math.PI/180));
				m_s_y2[aa]=h_y-t;
				m_s_z2[aa]=h_z+r*Math.cos(i*(Math.PI/180));
			}else{
				m_s_x[aa]=h_x-r*Math.sin(i*(Math.PI/180));
			
				m_s_y[aa]=h_y;
			
				m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));
			
				m_s_x2[aa]=h_x-r*Math.sin(i*(Math.PI/180));
				m_s_y2[aa]=h_y-t;
				m_s_z2[aa]=h_z+r*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;



			j=j+1;
			h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			if (i==0){
				if(p==2){
					m_s_tx[0]=h_x-r;
					m_s_ty[0]=h_y;
					m_s_tz[0]=h_z+r;
				
					m_s_tx[4]=h_x-r;
					m_s_ty[4]=h_y;
					m_s_tz[4]=h_z+r;
				}else{
					m_s_tx[0]=h_x-r;
					m_s_ty[0]=h_y;
					m_s_tz[0]=h_z+r;
				
					m_s_tx[4]=h_x-r;
					m_s_ty[4]=h_y;
					m_s_tz[4]=h_z+r;
				}
				
			}
		}
		if (z==1){
			
			if(p==2){
				if(y1+y2==h){
					draw_f1=1;
					h_x=-w/2+x1;
					h_y=d/2;
					h_z=h/2-y1-y2;
					

				}else{
					draw_f1=0;
					h_x=-w/2+x1+r;
					h_y=d/2;
					h_z=h/2-y1-y2+r;
				}
			}else{
				if(y1+y2==h){
					draw_f1=1;
					h_x=w/2-x1-x2;
					h_y=-d/2+t;
					h_z=h/2-y1-y2;
				}else{
					draw_f1=0;
					h_x=w/2-x1-x2+r;
					h_y=-d/2+t;
					h_z=h/2-y1-y2+r;
				}
			}
			
		}
		if (z==2){
			
			if(p==2){
				if(y1==0){
					draw_f1=1;
					h_x=-w/2+x1;
					h_y=d/2;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=-w/2+x1+r;
					h_y=d/2;
					h_z=-h/2+y1+r;
				}
			}else{
				if(y1==0){
					draw_f1=1;
					h_x=w/2-x1-x2;
					h_y=-d/2+t;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=w/2-x1-x2+r;
					h_y=-d/2+t;
					h_z=-h/2+y1+r;
				}

			}
			
			
		}
		if (z==3){
			
			if(p==2){
				if(y1==0){
					draw_f1=1;
					h_x=w/2-x1-x2;
					h_y=d/2;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=w/2-x1-x2+r;
					h_y=d/2;
					h_z=-h/2+y1+r;
				}
			}else{
				if(y1==0){
					draw_f1=1;
					h_x=-w/2+x1;
					h_y=-d/2+t;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=-w/2+x1+r;
					h_y=-d/2+t;
					h_z=-h/2+y1+r;
				}
			}
			
			
		}
		if (z==4){
			
			if(p==2){
				if(y1+y2==h){
					draw_f1=1;
					h_x=w/2-x1-x2;
					h_y=d/2;
					h_z=h/2-y1-y2;
				}else{
					draw_f1=0;
					h_x=w/2-x1-x2+r;
					h_y=d/2;
					h_z=h/2-y1-y2+r;
				}
			}else{
				if(y1+y2==h){
					draw_f1=1;
					h_y=-d/2+t;
					h_x=-w/2+x1;
					h_z=h/2-y1-y2;
				}else{
					draw_f1=0;
					h_y=-d/2+t;
					h_x=-w/2+x1+r;
					h_z=h/2-y1-y2+r;
				}
			}
			
			
		
		}
		for (i=90;i>0;i=i-1){
			if(draw_f1==0){
				h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y;
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));

				if (p==2){
					m_s_x[aa]=h_x-r*Math.sin(i*(Math.PI/180));
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));
			
					m_s_x2[aa]=h_x-r*Math.sin(i*(Math.PI/180));
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z-r*Math.cos(i*(Math.PI/180));
				}else{
					m_s_x[aa]=h_x-r*Math.sin(i*(Math.PI/180));
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));
			
					m_s_x2[aa]=h_x-r*Math.sin(i*(Math.PI/180));
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z-r*Math.cos(i*(Math.PI/180));

				}
				aa=aa+1;
					
					
				j=j+1;
				h_c_x[j]=h_x-r*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y;
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x-(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				if (i==90){
					if (p==2){
						m_s_tx[1]=h_x-r;
						m_s_ty[1]=h_y;
						m_s_tz[1]=h_z-r;
				
						m_s_tx[5]=h_x-r;
						m_s_ty[5]=h_y-t;
						m_s_tz[5]=h_z-r;
						//m_s_cnt=m_s_cnt+1;
					}else{
						m_s_tx[1]=h_x-r;
						m_s_ty[1]=h_y;
						m_s_tz[1]=h_z-r;
				
						m_s_tx[5]=h_x-r;
						m_s_ty[5]=h_y;
						m_s_tz[5]=h_z-r;
						//m_s_cnt=m_s_cnt+1;
					}
				}
			}else{
				h_c_x[j]=h_x;
				h_c_y[j]=h_y;
				h_c_z[j]=h_z;
				if (p==2){
					m_s_x[aa]=h_x;
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z;
			
					m_s_x2[aa]=h_x;
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z;
				}else{
					m_s_x[aa]=h_x;
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z;
			
					m_s_x2[aa]=h_x;
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z;

				}
				aa=aa+1;
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z;
				j=j+1;
				h_c_x[j]=h_x-0.5;
				h_c_y[j]=h_y;
				h_c_z[j]=h_z-0.5;
				j=j+1;
				h_c_x[j]=h_x-0.5;
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z-0.5;
				j=j+1;
				if (i==90){
					if (p==2){
						m_s_tx[1]=h_x;
						m_s_ty[1]=h_y;
						m_s_tz[1]=h_z;
				
						m_s_tx[5]=h_x;
						m_s_ty[5]=h_y-t;
						m_s_tz[5]=h_z;
						
					}else{
						m_s_tx[1]=h_x;
						m_s_ty[1]=h_y;
						m_s_tz[1]=h_z;
				
						m_s_tx[5]=h_x;
						m_s_ty[5]=h_y;
						m_s_tz[5]=h_z;
						
					}
				}
			}
			
		}
		if (z==1){
			
			if(p==2){
				if(y1+y2==h){
					draw_f1=1;		
					h_x=-w/2+x1+x2;
					h_y=d/2;
					h_z=-h/2;
				}else{
					draw_f1=0;
					h_x=-w/2+x1+x2-r;
					h_y=d/2;
					h_z=h/2-y1-y2+r;
				}
			}else{
				if(y1+y2==h){
					draw_f1=1;
					h_x=w/2-x1;
					h_y=-d/2+t;
					h_z=h/2-y1-y2;
				}else{
					draw_f1=0;
					h_x=w/2-x1-r;
					h_y=-d/2+t;
					h_z=h/2-y1-y2+r;
				}
			}
			
		}
		if (z==2){
			
			if(p==2){
				if(y1==0){
					draw_f1=1;
					h_x=-w/2+x1+x2;
					h_y=d/2;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=-w/2+x1+x2-r;
					h_y=d/2;
					h_z=-h/2+y1+r;
				}
			}else{
				if(y1==0){
					draw_f1=1;
					h_x=w/2-x1;
					h_y=-d/2+t;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=w/2-x1-r;
					h_y=-d/2+t;
					h_z=-h/2+y1+r;
				}
			}
			
			
		}
		if (z==3){
			
			if(p==2){
				if(y1==0){
					draw_f1=1;
					h_x=w/2-x1;
					h_y=d/2;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=w/2-x1-r;
					h_y=d/2;
					h_z=-h/2+y1+r;
				}
			}else{
				if(y1==0){
					draw_f1=1;
					h_x=-w/2+x1+x2;
					h_y=-d/2+t;
					h_z=-h/2+y1;
				}else{
					draw_f1=0;
					h_x=-w/2+x1+x2-r;
					h_y=-d/2+t;
					h_z=-h/2+y1+r;

				}
			}
			
			
		}
		if (z==4){
			
			if(p==2){
				if(y1+y2==h){
					draw_f1=1;
					h_x=w/2-x1;
					h_y=d/2;
					h_z=h/2-y1-y2;
				}else{
					h_x=w/2-x1-r;
					h_y=d/2;
					h_z=h/2-y1-y2+r;

				}
			}else{
				if(y1+y2==h){
					draw_f1=1;
					h_y=-d/2+t;
					h_x=-w/2+x1+x2;
					h_z=h/2-y1-y2;
				}else{
					h_y=-d/2+t;
					h_x=-w/2+x1+x2-r;
					h_z=h/2-y1-y2+r;

				}
			}
			
			
		}
		for (i=0;i<90;i=i+1){
			if (draw_f1==0  ){
				h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y;
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				
//##############################################################################
				if (p==2){
					m_s_x[aa]=h_x+r*Math.sin(i*(Math.PI/180));
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));
			
					m_s_x2[aa]=h_x+r*Math.sin(i*(Math.PI/180));
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z-r*Math.cos(i*(Math.PI/180));
				}else{
					m_s_x[aa]=h_x+r*Math.sin(i*(Math.PI/180));
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));
			
					m_s_x2[aa]=h_x+r*Math.sin(i*(Math.PI/180));
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z-r*Math.cos(i*(Math.PI/180));

				}
				aa=aa+1;


				j=j+1;
				h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y;
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;	
				if (i==0){
					if (p==2){
						m_s_tx[2]=h_x+r;
						m_s_ty[2]=h_y;
						m_s_tz[2]=h_z-r;
				
						m_s_tx[6]=h_x+r;
						m_s_ty[6]=h_y-t;
						m_s_tz[6]=h_z-r;
					}else{
						m_s_tx[2]=h_x+r;
						m_s_ty[2]=h_y;
						m_s_tz[2]=h_z-r;
				
						m_s_tx[6]=h_x+r;
						m_s_ty[6]=h_y-t;
						m_s_tz[6]=h_z-r;
					}
				}
			}else{
				h_c_x[j]=h_x;
				h_c_y[j]=h_y;
				h_c_z[j]=h_z;
				if (p==2){
					m_s_x[aa]=h_x;//+r/2*Math.sin(i*(Math.PI/180));
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z;//-r/2*Math.cos(i*(Math.PI/180));
			
					m_s_x2[aa]=h_x;//+r/2*Math.sin(i*(Math.PI/180));
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z;//-r/2*Math.cos(i*(Math.PI/180));
				}else{
					m_s_x[aa]=h_x;//+r/2*Math.sin(i*(Math.PI/180));
			
					m_s_y[aa]=h_y;
			
					m_s_z[aa]=h_z;//-r/2*Math.cos(i*(Math.PI/180));
			
					m_s_x2[aa]=h_x;//+r/2*Math.sin(i*(Math.PI/180));
					m_s_y2[aa]=h_y-t;
					m_s_z2[aa]=h_z;//-r/2*Math.cos(i*(Math.PI/180));

				}
				aa=aa+1;
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z;
				j=j+1;
				h_c_x[j]=h_x+0.5;
				h_c_y[j]=h_y;
				h_c_z[j]=h_z+0.5;
				j=j+1;
				h_c_x[j]=h_x+0.5;
				h_c_y[j]=h_y-t;
				h_c_z[j]=h_z+0.5;
				j=j+1;	
				if (i==0){
					if (p==2){
						m_s_tx[2]=h_x;
						m_s_ty[2]=h_y;
						m_s_tz[2]=h_z;
				
						m_s_tx[6]=h_x;
						m_s_ty[6]=h_y-t;
						m_s_tz[6]=h_z;
					}else{
						m_s_tx[2]=h_x;
						m_s_ty[2]=h_y;
						m_s_tz[2]=h_z;
				
						m_s_tx[6]=h_x;
						m_s_ty[6]=h_y-t;
						m_s_tz[6]=h_z;
					}
				}

			}
		}
		if (z==1){
			
			if(p==2){
				h_x=-w/2+x1+x2-r;
				h_y=d/2;
			}else{
				h_x=w/2-x1-r;
				h_y=-d/2+t;
			}
			h_z=h/2-y1-r;
		}
		if (z==2){
			
			if(p==2){
				h_x=-w/2+x1+x2-r;
				h_y=d/2;
			}else{
				h_x=w/2-x1-r;
				h_y=-d/2+t;
			}
			h_z=-h/2+y1+y2-r;
			
		}
		if (z==3){
			
			if(p==2){
				h_x=w/2-x1-r;
				h_y=d/2;
			}else{
				h_x=-w/2+x1+x2-r;
				h_y=-d/2+t;
			}
			h_z=-h/2+y1+y2-r;
			
		}
		if (z==4){
			
			if(p==2){
				h_x=w/2-x1-r;
				h_y=d/2;
			}else{
				h_y=-d/2+t;
				h_x=-w/2+x1+x2-r;
			}
			h_z=h/2-y1-r;
			
		}
		for (i=89;i>=0;i=i-1){
			h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
			if (p==2){
				m_s_x[aa]=h_x+r*Math.sin(i*(Math.PI/180));
			
				m_s_y[aa]=h_y;
			
				m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));
			
				m_s_x2[aa]=h_x+r*Math.sin(i*(Math.PI/180));
				m_s_y2[aa]=h_y-t;
				m_s_z2[aa]=h_z+r*Math.cos(i*(Math.PI/180));
			}else{
				m_s_x[aa]=h_x+r*Math.sin(i*(Math.PI/180));
			
				m_s_y[aa]=h_y;
			
				m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));
			
				m_s_x2[aa]=h_x+r*Math.sin(i*(Math.PI/180));
				m_s_y2[aa]=h_y-t;
				m_s_z2[aa]=h_z+r*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			
			j=j+1;
			h_c_x[j]=h_x+r*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1
			if (i==89){
				if (p==2){
					m_s_tx[3]=h_x+r;
					m_s_ty[3]=h_y;
					m_s_tz[3]=h_z+r;
				
					m_s_tx[7]=h_x+r;
					m_s_ty[7]=h_y-t;
					m_s_tz[7]=h_z+r;
				}else{
					m_s_tx[3]=h_x+r;
					m_s_ty[3]=h_y-t;
					m_s_tz[3]=h_z+r;
				
					m_s_tx[7]=h_x+r;
					m_s_ty[7]=h_y-t;
					m_s_tz[7]=h_z+r;
				}
			}
		}
		
		if(p==2){
		//	draw_k_s(1,s_cnt_f);
			draw_k_s(2,s_cnt_b);
		}else{
			draw_k_s(2,s_cnt_b);
		}			
	}
	if(p==4 || p==5){
		if (y1+y2==h || y1==0){
				draw_f1=1;
			}
		if (z==1){
			if (y1+y2==h || y1==0){
				draw_f1=1;
			}
			if(p==4){
				
					h_y=-d/2+x1+x2-r;
					h_x=-w/2+t;
					h_z=h/2-y1-r;
				
			}else{
				
					

					h_y=d/2-x1-r;
					h_x=w/2;
					h_z=h/2-y1-r;
				
			}
			
			
		}
		if (z==2){
			
			if(p==4){
				
					h_y=-d/2+x1+x2-r;
					h_x=-w/2+t;
					h_z=-h/2+y1+y2-r;
				
			}else{
				
					h_x=w/2;
					h_y=d/2-x1-r;
					h_z=-h/2+y1+y2-r;
				
			}
			
			
			
		}
		if (z==3){
			
			if(p==4){
				
					h_x=-w/2+t;
					h_y=d/2-x1-r;
					h_z=-h/2+y1+y2-r;

				
			}else{
				
					h_x=w/2;
					h_y=-d/2+x1+x2-r;
					h_z=-h/2+y1+y2-r;

				
			}
			
			
			
		}
		if (z==4){
			
			if(p==4){
				
					h_x=-w/2+t;
					h_y=d/2-x1-r;
					h_z=h/2-y1-r;
				
			}else{
				
					h_x=w/2;
					h_y=-d/2+x1+x2-r;
					h_z=h/2-y1-r;
				
			}
			
			
			
		}
		for (i=0;i<90;i=i+1){	//右上
			
				h_c_x[j]=h_x;//3
				h_c_y[j]=h_y+r*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
				if (p==4){
					m_s_x[aa]=h_x-t;
			
					m_s_y[aa]=h_y+r*Math.sin(i*(Math.PI/180));
			
					m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));

				}else{
					m_s_x[aa]=h_x-t;
			
					m_s_y[aa]=h_y+r*Math.sin(i*(Math.PI/180));
			
					m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));

				}
				aa=aa+1;

				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y+r*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y+(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y+(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;	
				if (i==0){
					if (p==4){
						m_s_tx[0]=h_x-t;
						m_s_ty[0]=h_y+r;
						m_s_tz[0]=h_z+r;
				
						m_s_tx2[4]=h_x;
						m_s_ty2[4]=h_y+r;
						m_s_tz2[4]=h_z+r;
					
					}else{
						m_s_tx[0]=h_x;
						m_s_ty[0]=h_y+r;
						m_s_tz[0]=h_z+r;
				
						m_s_tx2[4]=h_x-t;
						m_s_ty2[4]=h_y-r;
						m_s_tz2[4]=h_z-r;
					}
				}
			
		}
		
		if (z==1){
			
			if(p==4){
				if(y1+y2==h){
					h_y=-d/2+x1+x2;
					h_x=-w/2+t;
					h_z=h/2-y1-y2;
				}else{
					h_y=-d/2+x1+x2-r;
					h_x=-w/2+t;
					h_z=h/2-y1-y2+r;
				}
			}else{
				if(y1+y2==h){
					h_y=d/2-x1;
					h_x=w/2;
					h_z=h/2-y1-y2;
				}else{
					h_y=d/2-x1-r;
					h_x=w/2;
					h_z=h/2-y1-y2+r;
				}
			}
			
			
		}
		if (z==2){
			
			if(p==4){
				if(y1==0){
					h_y=-d/2+x1+x2;
					h_x=-w/2+t;
					h_z=-h/2+y1;
				}else{
					h_y=-d/2+x1+x2-r;
					h_x=-w/2+t;
					h_z=-h/2+y1+r;
				}
			}else{
				if(y1==0){
					h_x=w/2;
					h_y=d/2-x1;
					h_z=-h/2+y1;
				}else{
					h_x=w/2;
					h_y=d/2-x1-r;
					h_z=-h/2+y1+r;
				}
			}
			
			
			
		}
		if (z==3){
			
			if(p==4){
				if(y1==0){
					h_x=-w/2+t;
					h_y=d/2-x1;
					h_z=-h/2+y1;
				}else{
					h_x=-w/2+t;
					h_y=d/2-x1-r;
					h_z=-h/2+y1+r;

				}
			}else{
				if(y1==0){
					h_x=w/2;
					h_y=-d/2+x1+x2;
					h_z=-h/2+y1;
				}else{
					h_x=w/2;
					h_y=-d/2+x1+x2-r;
					h_z=-h/2+y1+r;
				}
			}
			
			
			
		}
		if (z==4){
			
			if(p==4){
				if(y1+y2==h){
					h_x=-w/2+t;
					h_y=d/2-x1;
					h_z=h/2-y1-y2;
				}else{
					h_x=-w/2+t;
					h_y=d/2-x1-r;
					h_z=h/2-y1-y2+r;
				}
			}else{
				if(y1+y2==h){
					h_x=w/2;
					h_y=-d/2+x1+x2;
					h_z=h/2-y1-y2;
				}else{

					h_x=w/2;
					h_y=-d/2+x1+x2-r;
					h_z=h/2-y1-y2+r;
				}
			}
			
			
			
		}
		
		for (i=90;i>0;i=i-1){//右下
			if(draw_f1==0){
				h_c_x[j]=h_x;//4
				h_c_y[j]=h_y+r*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				if (p==4){
					m_s_x[aa]=h_x-t;
			
					m_s_y[aa]=h_y+r*Math.sin(i*(Math.PI/180));
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));

				}else{
					m_s_x[aa]=h_x;
			
					m_s_y[aa]=h_y+r*Math.sin(i*(Math.PI/180));
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));

				}
				aa=aa+1;
			

				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y+r*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y+(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y+(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1
				if (i==90){
					if (p==4){
						m_s_tx[1]=h_x-t;
						m_s_ty[1]=h_y+r;
						m_s_tz[1]=h_z-r;
				
						m_s_tx2[5]=h_x;
						m_s_ty2[5]=h_y+r;
						m_s_tz2[5]=h_z-r;
					
					}else{
						m_s_tx[1]=h_x;
						m_s_ty[1]=h_y+r;
						m_s_tz[1]=h_z-r;
				
						m_s_tx2[5]=h_x-t;
						m_s_ty2[5]=h_y+r;
						m_s_tz2[5]=h_z-r;
					}
				}
			}else{

				h_c_x[j]=h_x;//4
				h_c_y[j]=h_y;
				h_c_z[j]=h_z;
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y;
				h_c_z[j]=h_z;
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y-0.5;
				h_c_z[j]=h_z-0.5;
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y-0.5;
				h_c_z[j]=h_z-0.5;
				j=j+1

				if (i==90){
					if (p==4){
						m_s_tx[1]=h_x-t;
						m_s_ty[1]=h_y+r;
						m_s_tz[1]=h_z-r;
				
						m_s_tx2[5]=h_x;
						m_s_ty2[5]=h_y+r;
						m_s_tz2[5]=h_z-r;
					
					}else{
						m_s_tx[1]=h_x;
						m_s_ty[1]=h_y+r;
						m_s_tz[1]=h_z-r;
				
						m_s_tx2[5]=h_x-t;
						m_s_ty2[5]=h_y+r;
						m_s_tz2[5]=h_z-r;
					}
				}

			}
			
			
		}
		if (z==1){
			
			if(p==4){
				if(y1+y2==h){
					h_y=-d/2+x1;
					h_x=-w/2+t;
					h_z=h/2-y1-y2;
				}else{
					h_y=-d/2+x1+r;
					h_x=-w/2+t;
					h_z=h/2-y1-y2+r;

				}
			}else{
				if(y1+y2==h){
					h_y=d/2-x1-x2;
					h_x=w/2;
					h_z=h/2-y1-y2;
				}else{
					h_y=d/2-x1-x2+r;
					h_x=w/2;
					h_z=h/2-y1-y2+r;

				}

			}
			
			
		}
		if (z==2){
			
			if(p==4){
				if(y1==0){
					h_y=-d/2+x1;
					h_x=-w/2+t;
					h_z=-h/2+y1;
				}else{
					h_y=-d/2+x1+r;
					h_x=-w/2+t;
					h_z=-h/2+y1+r;

				}
			}else{
				if(y1==0){
					h_x=w/2;
					h_y=d/2-x1-x2;
					h_z=-h/2+y1;
				}else{
					h_x=w/2;
					h_y=d/2-x1-x2+r;
					h_z=-h/2+y1+r;
				}
			}
			
			
			
		}
		if (z==3){
			
			if(p==4){
				if(y1==0){
					h_x=-w/2+t;
					h_y=d/2-x1-x2;
					h_z=-h/2+y1;
				}else{
					h_x=-w/2+t;
					h_y=d/2-x1-x2+r;
					h_z=-h/2+y1+r;

				}
			}else{
				if(y1==0){
					h_x=w/2;
					h_y=-d/2+x1;
					h_z=-h/2+y1;
				}else{
					h_x=w/2;
					h_y=-d/2+x1+r;
					h_z=-h/2+y1+r;

				}
			}
			
			
			
		}
		if (z==4){
			
			if(p==4){
				if(y1+y2==h){
					h_x=-w/2+t;
					h_y=d/2-x1-x2;
					h_z=h/2-y1-y2;
				}else{
					h_x=-w/2+t;
					h_y=d/2-x1-x2+r;
					h_z=h/2-y1-y2+r;
				}
			}else{
				if(y1+y2==h){
					h_x=w/2;
					h_y=-d/2+x1;
					h_z=h/2-y1-y2;
				}else{
					h_x=w/2;
					h_y=-d/2+x1+r;
					h_z=h/2-y1-y2+r;

				}
			}
			
			
			
		}
		for (i=0;i<90;i=i+1){//左下

			if(draw_f1==0){
				h_c_x[j]=h_x;//1
			
				h_c_y[j]=h_y-r*Math.sin(i*(Math.PI/180));
			
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				if (p==4){
					m_s_x[aa]=h_x-t;
			
					m_s_y[aa]=h_y-r*Math.sin(i*(Math.PI/180));
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));

				}else{
					m_s_x[aa]=h_x;
			
					m_s_y[aa]=h_y-r*Math.sin(i*(Math.PI/180));
			
					m_s_z[aa]=h_z-r*Math.cos(i*(Math.PI/180));

				}
				aa=aa+1;
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y-r*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-r*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y-(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y-(r+0.5)*Math.sin(i*(Math.PI/180));
				h_c_z[j]=h_z-(r+0.5)*Math.cos(i*(Math.PI/180));
				j=j+1;
				if (i==0){
					if (p==4){
						m_s_tx[2]=h_x-t;
						m_s_ty[2]=h_y-r;
						m_s_tz[2]=h_z-r;
				
						m_s_tx2[6]=h_x;
						m_s_ty2[6]=h_y-r;
						m_s_tz2[6]=h_z-r;
					
					}else{
						m_s_tx[2]=h_x;
						m_s_ty[2]=h_y-r;
						m_s_tz[2]=h_z-r;
				
						m_s_tx2[6]=h_x-t;
						m_s_ty2[6]=h_y-r;
						m_s_tz2[6]=h_z-r;
					}
				}
			}else{
				h_c_x[j]=h_x;//1
			
				h_c_y[j]=h_y;
			
				h_c_z[j]=h_z;
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y;
				h_c_z[j]=h_z;
				j=j+1;
				h_c_x[j]=h_x;
				h_c_y[j]=h_y-0.5;
				h_c_z[j]=h_z-0.5;
				j=j+1;
				h_c_x[j]=h_x-t;
				h_c_y[j]=h_y-0.5;
				h_c_z[j]=h_z-0.5;
				j=j+1;
				if (i==0){
					if (p==4){
						m_s_tx[2]=h_x-t;
						m_s_ty[2]=h_y-r;
						m_s_tz[2]=h_z-r;
				
						m_s_tx2[6]=h_x;
						m_s_ty2[6]=h_y-r;
						m_s_tz2[6]=h_z-r;
					
					}else{
						m_s_tx[2]=h_x;
						m_s_ty[2]=h_y-r;
						m_s_tz[2]=h_z+r;
				
						m_s_tx2[6]=h_x-t;
						m_s_ty2[6]=h_y-r;
						m_s_tz2[6]=h_z-r;
					}
				}	
			
			}
		}
		if (z==1){
			
			if(p==4){
				h_y=-d/2+x1+r;
				h_x=-w/2+t;
			}else{
				h_y=d/2-x1-x2+r;
				h_x=w/2;
			}
			
			h_z=h/2-y1-r;
		}
		if (z==2){
			
			if(p==4){
				h_y=-d/2+x1+r;
				h_x=-w/2+t;
			}else{
				h_x=w/2;
				h_y=d/2-x1-x2+r;
			}
			
			h_z=-h/2+y1+y2-r;
			
		}
		if (z==3){
			
			if(p==4){
				h_x=-w/2+t;
				h_y=d/2-x1-x2+r;
			}else{
				h_x=w/2;
				h_y=-d/2+x1+r;
			}
			
			h_z=-h/2+y1+y2-r;
			
		}
		if (z==4){
			
			if(p==4){
				h_x=-w/2+t;
				h_y=d/2-x1-x2+r;
			}else{
				h_x=w/2;
				h_y=-d/2+x1+r;
			}
			
			h_z=h/2-y1-r;
			
		}
		
		for (i=89;i>=0;i=i-1){
			h_c_x[j]=h_x;//2
			h_c_y[j]=h_y-r*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
			if (p==4){
				m_s_x[aa]=h_x-t;
			
				m_s_y[aa]=h_y-r*Math.sin(i*(Math.PI/180));
			
				m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));

			}else{
				m_s_x[aa]=h_x;
			
				m_s_y[aa]=h_y-r*Math.sin(i*(Math.PI/180));
			
				m_s_z[aa]=h_z+r*Math.cos(i*(Math.PI/180));

			}
			aa=aa+1;
			
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-r*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-(r+0.5)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r+0.5)*Math.cos(i*(Math.PI/180));
			j=j+1;
			if (i==89){
				if (p==4){
					m_s_tx[3]=h_x-t;
					m_s_ty[3]=h_y-r;
					m_s_tz[3]=h_z+r;
				
					m_s_tx2[7]=h_x;
					m_s_ty2[7]=h_y-r;
					m_s_tz2[7]=h_z+r;
					
				}else{
					m_s_tx[3]=h_x;
					m_s_ty[3]=h_y-r;
					m_s_tz[3]=h_z+r;
				
					m_s_tx2[7]=h_x-t;
					m_s_ty2[7]=h_y-r;
					m_s_tz2[7]=h_z+r;
				}
			}
		}
		if(p==4){
			if(draw_f1==1){
			}else{
				draw_k_s(3,s_cnt_l);
			}
		}else{
			if(draw_f1==1){
			}else{
				draw_k_s(4,s_cnt_r);
			}
		}			
	}
	
	for (i=0;i<1440;i++){
          geometry.vertices.push(
            new THREE.Vector3(h_c_x[i],h_c_z[i],h_c_y[i]));//0
	}	

	
	for (i=20+o1*180+o2*180;i<20+o1*180+(o2+1)*180;i=i+1){
//		if (draw_f2==1 || draw_f1==1){
		if ( draw_f1==1){
			if(i<20+o1*180+o2*180+45 ||i>20+o1*180+o2*180+90){

				d_flag=0;
			}else{
				d_flag=1;
			}
		}
		if(d_flag==0){
		 geometry.faces.push(
	            new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 geometry.faces.push(
	            new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	
//左
	
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
//右
		 	geometry.faces.push(
	            new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		 	geometry.faces.push(
	            new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
//上
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		 	geometry.faces.push(
	            new THREE.Face3(4+i*8, 3+i*8,7+i*8));
	
		
	
//底	
	
			geometry.faces.push(
	            new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry.faces.push(
	            new THREE.Face3(2+i*8, 5+i*8,6+i*8));
	
	
//後ろ
			geometry.faces.push(
	            new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
	
			geometry.faces.push(
	            new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		
		if (i<20+o1*180+(o2+1)*179){
			geometry.faces.push(
	            new THREE.Face3(1+i*8+4, 2+i*8+4, 0+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(2+i*8+4, 3+i*8+4, 0+i*8+4));
	
//左
	
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8+4, 5+i*8+4, 1+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8+4, 4+i*8+4, 5+i*8+4));
//右
		 	geometry.faces.push(
	            new THREE.Face3(3+i*8+4, 2+i*8+4, 6+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(6+i*8+4, 7+i*8+4, 3+i*8+4));
//上
		 	geometry.faces.push(
	            new THREE.Face3(0+i*8+4, 3+i*8+4,4+i*8+4));
		 	geometry.faces.push(
	            new THREE.Face3(4+i*8+4, 3+i*8+4,7+i*8+4));
	
		
	
//底	
	
			geometry.faces.push(
	            new THREE.Face3(1+i*8+4, 5+i*8+4,2+i*8+4));
			geometry.faces.push(
	            new THREE.Face3(2+i*8+4, 5+i*8+4,6+i*8+4));
	
	
//後ろ
			geometry.faces.push(
	            new THREE.Face3(4+i*8+4, 6+i*8+4, 5+i*8+4));
	
			geometry.faces.push(
	            new THREE.Face3(4+i*8+4, 7+i*8+4, 6+i*8+4));
		
		}else{
			geometry.faces.push(
	            new THREE.Face3(1+(20+o1*180+o2*180)*8, 2+(20+o1*180+o2*180)*8, 0+(20+o1*180+o2*180)*8));
		 	geometry.faces.push(
	            new THREE.Face3(2+(20+o1*180+o2*180)*8, 3+(20+o1*180+o2*180)*8, 0+(20+o1*180+o2*180)*8));
	
//左
	
		 	geometry.faces.push(
	            new THREE.Face3(0+(20+o1*180+o2*180)*8, 5+(i-1)*8, 1+(20+o1*180+o2*180)*8));
		 	geometry.faces.push(
	            new THREE.Face3(0+(20+o1*180+o2*180)*8, 4+(i-1)*8, 5+(i-1)*8));
//右
		 	geometry.faces.push(
	            new THREE.Face3(3+(20+o1*180+o2*180)*8, 2+(20+o1*180+o2*180)*8, 6+(i-1)*8));
		 	geometry.faces.push(
	            new THREE.Face3(6+(i-1)*8+4, 7+(i-1)*8+4, 3+(20+o1*180+o2*180)*8));
//上
		 	geometry.faces.push(
	            new THREE.Face3(0+(20+o1*180+o2*180)*8, 3+(20+o1*180+o2*180)*8,4+(i-1)*8));
		 	geometry.faces.push(
	            new THREE.Face3(4+(i-1)*8, 3+(20+o1*180+o2*180)*8,7+(i-1)*8));
	
		
	
//底	
	
			geometry.faces.push(
	            new THREE.Face3(1+(20+o1*180+o2*180)*8, 5+(i-1)*8,2+(20+o1*180+o2*180)*8));
			geometry.faces.push(
	            new THREE.Face3(2+(20+o1*180+o2*180)*8, 5+(i-1)*8,6+(i-1)*8));
	
	
//後ろ
			geometry.faces.push(
	            new THREE.Face3(4+(i-1)*8, 6+(i-1)*8, 5+(i-1)*8));
	
			geometry.faces.push(
	            new THREE.Face3(4+(i-1)*8, 7+(i-1)*8, 6+(i-1)*8));

		}

		}
	}
	
	
}
function draw_hen1(geometry14,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
var i=0;
var jf=0;
var jb=0;
var jl=0;
var jr=0;
	for (i=0;i<4;i++){
		if (hen_cnt_f>i){
			jf=jf+1;
			if (i==0){
				geometry14.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,d/2));
				geometry14.vertices.push(new THREE.Vector3(-w/2,-h/2,d/2));
				geometry14.vertices.push(new THREE.Vector3(-w/2,-h/2,d/2-t));
				geometry14.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,d/2-t));
			}
			geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i],-h/2+0.5,d/2));
			geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i],-h/2,d/2));
			geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i],-h/2,d/2-t));
			geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i],-h/2+0.5,d/2-t));
			
			if (i<3) {
				if (hen_cnt_f>i+1){
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2+0.5,d/2));
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2,d/2));
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2,d/2-t));
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2+0.5,d/2-t));

					
				}else{
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2+0.5,d/2));
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2,d/2));
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2,d/2-t));
					geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2+0.5,d/2-t));

					
					geometry14.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2));
					geometry14.vertices.push(new THREE.Vector3(w/2,-h/2,d/2));
					geometry14.vertices.push(new THREE.Vector3(w/2,-h/2,d/2-t));
					geometry14.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2-t));

					
				}
			
			}else{
				geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2+0.5,d/2));
				geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2,d/2));
				geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2,d/2-t));
				geometry14.vertices.push(new THREE.Vector3(-w/2+s_f[i]+s_f2[i],-h/2+0.5,d/2-t));

				geometry14.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2));
				geometry14.vertices.push(new THREE.Vector3(w/2,-h/2,d/2));
				geometry14.vertices.push(new THREE.Vector3(w/2,-h/2,d/2-t));
				geometry14.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2-t));
				
			}
		}
		
	
         
	}
	  

	if (jf>0 ){

 		for (i=0;i<jf+1;i++){

//前			
			geometry14.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry14.faces.push(new THREE.Face3(5+i*8, 4+i*8, 0+i*8));
//左
	
			geometry14.faces.push(new THREE.Face3(0+i*8, 2+i*8, 1+i*8));
			geometry14.faces.push(new THREE.Face3(0+i*8, 3+i*8, 2+i*8));
//右
			geometry14.faces.push(new THREE.Face3(4+i*8, 5+i*8, 6+i*8));
			geometry14.faces.push(new THREE.Face3(6+i*8, 7+i*8, 4+i*8));
//上
			geometry14.faces.push(new THREE.Face3(0+i*8, 4+i*8,3+i*8));
			geometry14.faces.push(new THREE.Face3(3+i*8, 4+i*8,7+i*8));
	
		
	
//底	
	
			geometry14.faces.push(new THREE.Face3(1+i*8, 2+i*8,5+i*8));
			geometry14.faces.push( new THREE.Face3(5+i*8, 2+i*8,6+i*8));
	
	
//後ろ
			geometry14.faces.push(new THREE.Face3(3+i*8, 6+i*8, 2+i*8));
	
			geometry14.faces.push(new THREE.Face3(3+i*8, 7+i*8, 6+i*8));
		}
	}
	  



}
function draw_hen2(geometry15,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
var i=0;
var jf=0;
var jb=0;
var jl=0;
var jr=0;
	for (i=0;i<6;i++){
		if (hen_cnt_b>i){
			jb=jb+1;
			if (i==0){
				geometry15.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,-d/2));
				geometry15.vertices.push(new THREE.Vector3(w/2,-h/2,-d/2));
				geometry15.vertices.push(new THREE.Vector3(w/2,-h/2,-d/2+t));
				geometry15.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,-d/2+t));
			}
			geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i],-h/2+0.5,-d/2));
			geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i],-h/2,-d/2));
			geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i],-h/2,-d/2+t));
			geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i],-h/2+0.5,-d/2+t));
			
			if (i<3) {
				if (hen_cnt_b>i+1){
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2+0.5,-d/2));
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2,-d/2));
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2,-d/2+t));
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2+0.5,-d/2+t));

					
				}else{
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2+0.5,-d/2));
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2,-d/2));
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2,-d/2+t));
					geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2+0.5,-d/2+t));

					
					geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2));
					geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2));
					geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2+t));
					geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2+t));

					
				}
			
			}else{
				geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2+0.5,-d/2));
				geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2,-d/2));
				geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2,-d/2+t));
				geometry15.vertices.push(new THREE.Vector3(w/2-s_b[i]-s_b2[i],-h/2+0.5,-d/2+t));

				geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2));
				geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2));
				geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2+t));
				geometry15.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2+t));
				
			}
		}
		
	
         
	}
	  

	if (jb>0){

 		for (i=0;i<jb+1;i++){

//前			
			geometry15.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry15.faces.push(new THREE.Face3(5+i*8, 4+i*8, 0+i*8));
//左
	
			geometry15.faces.push(new THREE.Face3(0+i*8, 2+i*8, 1+i*8));
			geometry15.faces.push(new THREE.Face3(0+i*8, 3+i*8, 2+i*8));
//右
			geometry15.faces.push(new THREE.Face3(4+i*8, 5+i*8, 6+i*8));
			geometry15.faces.push(new THREE.Face3(6+i*8, 7+i*8, 4+i*8));
//上
			geometry15.faces.push(new THREE.Face3(0+i*8, 4+i*8,3+i*8));
			geometry15.faces.push(new THREE.Face3(3+i*8, 4+i*8,7+i*8));
	
		
	
//底	
	
			geometry15.faces.push(new THREE.Face3(1+i*8, 2+i*8,5+i*8));
			geometry15.faces.push( new THREE.Face3(5+i*8, 2+i*8,6+i*8));
	
	
//後ろ
			geometry15.faces.push(new THREE.Face3(3+i*8, 6+i*8, 2+i*8));
	
			geometry15.faces.push(new THREE.Face3(3+i*8, 7+i*8, 6+i*8));
		}
	  }



}
function draw_hen3(geometry16,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
var i=0;
var jf=0;
var jb=0;
var jl=0;
var jr=0;
	for (i=0;i<6;i++){
		if (hen_cnt_l>i){
			jl=jl+1;
			if (i==0){
				geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2));
				geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2));
				geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,-d/2));
				geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,-d/2));
			}
			geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2+s_l[i]));
			geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2+s_l[i]));
			geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,-d/2+s_l[i]));
			geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,-d/2+s_l[i]));
			
			if (i<3) {
				if (hen_cnt_l>i+1){
					geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2+s_l[i]+s_l2[i]));
					geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2+s_l[i]+s_l2[i]));
					geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,-d/2+s_l[i]+s_l2[i]));
					geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,-d/2+s_l[i]+s_l2[i]));

					
				}else{
					geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2+s_l[i]+s_l2[i]));
					geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2+s_l[i]+s_l2[i]));
					geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,-d/2+s_l[i]+s_l2[i]));
					geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,-d/2+s_l[i]+s_l2[i]));

					
					geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,d/2));
					geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,d/2));
					geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,d/2));
					geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,d/2));

					
				}
			
			}else{
				geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,-d/2+s_l[i]+s_l2[i]));
				geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2+s_l[i]+s_l2[i]));
				geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,-d/2+s_l[i]+s_l2[i]));
				geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,-d/2+s_l[i]+s_l2[i]));

				geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2+0.5,d/2));
				geometry16.vertices.push(new THREE.Vector3(-w/2,-h/2,d/2));
				geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2,d/2));
				geometry16.vertices.push(new THREE.Vector3(-w/2+t,-h/2+0.5,d/2));
				
			}
		}
		
	
         
	}
	  

	if (jl>0){

 		for (i=0;i<jl+1;i++){

//前			
			geometry16.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry16.faces.push(new THREE.Face3(5+i*8, 4+i*8, 0+i*8));
//左
	
			geometry16.faces.push(new THREE.Face3(0+i*8, 2+i*8, 1+i*8));
			geometry16.faces.push(new THREE.Face3(0+i*8, 3+i*8, 2+i*8));
//右
			geometry16.faces.push(new THREE.Face3(4+i*8, 5+i*8, 6+i*8));
			geometry16.faces.push(new THREE.Face3(6+i*8, 7+i*8, 4+i*8));
//上
			geometry16.faces.push(new THREE.Face3(0+i*8, 4+i*8,3+i*8));
			geometry16.faces.push(new THREE.Face3(3+i*8, 4+i*8,7+i*8));
	
		
	
//底	
	
			geometry16.faces.push(new THREE.Face3(1+i*8, 2+i*8,5+i*8));
			geometry16.faces.push( new THREE.Face3(5+i*8, 2+i*8,6+i*8));
	
	
//後ろ
			geometry16.faces.push(new THREE.Face3(3+i*8, 6+i*8, 2+i*8));
	
			geometry16.faces.push(new THREE.Face3(3+i*8, 7+i*8, 6+i*8));
		}
	  
	}


}
function draw_hen4(geometry17,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
var i=0;
var jf=0;
var jb=0;
var jl=0;
var jr=0;
	for (i=0;i<6;i++){
		if (hen_cnt_r>i){
			jr=jr+1;
			if (i==0){
				geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2));
				geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,d/2));
				geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,d/2));
				geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,d/2));
			}
			geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2-s_r[i]));
			geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,d/2-s_r[i]));
			geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,d/2-s_r[i]));
			geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,d/2-s_r[i]));
			
			if (i<3) {
				if (hen_cnt_r>i+1){
					geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2-s_r[i]-s_r2[i]));
					geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,d/2-s_r[i]-s_r2[i]));
					geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,d/2-s_r[i]-s_r2[i]));
					geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,d/2-s_r[i]-s_r2[i]));

					
				}else{
					geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2-s_r[i]-s_r2[i]));
					geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,d/2-s_r[i]-s_r2[i]));
					geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,d/2-s_r[i]-s_r2[i]));
					geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,d/2-s_r[i]-s_r2[i]));

					geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,-d/2));
					geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,-d/2));
					geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,-d/2));
					geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,-d/2));

					
				}
			
			}else{
				geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,d/2-s_r[i]-s_r2[i]));
				geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,d/2-s_r[i]-s_r2[i]));
				geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,d/2-s_r[i]-s_r2[i]));
				geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,d/2-s_r[i]-s_r2[i]));

				geometry17.vertices.push(new THREE.Vector3(w/2,-h/2+0.5,-d/2));
				geometry17.vertices.push(new THREE.Vector3(w/2,-h/2,-d/2));
				geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2,-d/2));
				geometry17.vertices.push(new THREE.Vector3(w/2-t,-h/2+0.5,-d/2));
				
			}
		}
		
	
         
	}
	  

	if (jr>0){

 		for (i=0;i<jr+1;i++){

//前			
			geometry17.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry17.faces.push(new THREE.Face3(5+i*8, 4+i*8, 0+i*8));
//左
	
			geometry17.faces.push(new THREE.Face3(0+i*8, 2+i*8, 1+i*8));
			geometry17.faces.push(new THREE.Face3(0+i*8, 3+i*8, 2+i*8));
//右
			geometry17.faces.push(new THREE.Face3(4+i*8, 5+i*8, 6+i*8));
			geometry17.faces.push(new THREE.Face3(6+i*8, 7+i*8, 4+i*8));
//上
			geometry17.faces.push(new THREE.Face3(0+i*8, 4+i*8,3+i*8));
			geometry17.faces.push(new THREE.Face3(3+i*8, 4+i*8,7+i*8));
	
		
	
//底	
	
			geometry17.faces.push(new THREE.Face3(1+i*8, 2+i*8,5+i*8));
			geometry17.faces.push( new THREE.Face3(5+i*8, 2+i*8,6+i*8));
	
	
//後ろ
			geometry17.faces.push(new THREE.Face3(3+i*8, 6+i*8, 2+i*8));
	
			geometry17.faces.push(new THREE.Face3(3+i*8, 7+i*8, 6+i*8));
		}
	  }



}
function draw_kl(p,jj)

{

	geometry62.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,0],m_c_tz[0,jj,0],m_c_ty[0,jj,0]));//0

	for (i=0;i<90;i++){
          geometry62.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	geometry62.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,1],m_c_tz[0,jj,1],m_c_ty[0,jj,1]));//0

	for (i=90;i<180;i++){
          geometry62.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry62.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,2],m_c_tz[0,jj,2],m_c_ty[0,jj,2]));//0

	for (i=180;i<270;i++){
          geometry62.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry62.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,3],m_c_tz[0,jj,3],m_c_ty[0,jj,3]));//0

	for (i=270;i<360;i++){
          geometry62.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	for(i=0;i<89;i++){
		geometry62.faces.push(
	            new THREE.Face3(0+kk_l*364, i+1+kk_l*364, i+2+kk_l*364));	
	}
	for(i=91;i<179;i++){
		geometry62.faces.push(
	            new THREE.Face3(91+kk_l*364, i+1+kk_l*364, i+2+kk_l*364));	
	}
	for(i=182;i<271;i++){
		geometry62.faces.push(
	            new THREE.Face3(182+kk_l*364, i+1+kk_l*364, i+2+kk_l*364));	
	}
	for(i=273;i<362;i++){
		geometry62.faces.push(
	            new THREE.Face3(273+kk_l*364, i+1+kk_l*364, i+2+kk_l*364));	
	}
	kk_cntl=i+2+kk_l*364;
	kk_l=kk_l+1;
	
}
function draw_kb(p,jj)

{

	geometry63.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,0],m_c_tz[0,jj,0],m_c_ty[0,jj,0]));//0

	for (i=0;i<90;i++){
          geometry63.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	geometry63.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,1],m_c_tz[0,jj,1],m_c_ty[0,jj,1]));//0

	for (i=90;i<180;i++){
          geometry63.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry63.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,2],m_c_tz[0,jj,2],m_c_ty[0,jj,2]));//0

	for (i=180;i<270;i++){
          geometry63.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry63.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,3],m_c_tz[0,jj,3],m_c_ty[0,jj,3]));//0

	for (i=270;i<360;i++){
          geometry63.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	for(i=0;i<89;i++){
		geometry63.faces.push(
	            new THREE.Face3(0+kk_b*364, i+1+kk_b*364, i+2+kk_b*364));	
	}
	for(i=91;i<179;i++){
		geometry63.faces.push(
	            new THREE.Face3(91+kk_b*364, i+1+kk_b*364, i+2+kk_b*364));	
	}
	for(i=182;i<271;i++){
		geometry63.faces.push(
	            new THREE.Face3(182+kk_b*364, i+1+kk_b*364, i+2+kk_b*364));	
	}
	for(i=273;i<362;i++){
		geometry63.faces.push(
	            new THREE.Face3(273+kk_b*364, i+1+kk_b*364, i+2+kk_b*364));	
	}
	kk_cntb=i+2+kk_b*364;
	kk_b=kk_b+1;
	
}
function draw_kr(p,jj)

{

	geometry64.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,0],m_c_tz[0,jj,0],m_c_ty[0,jj,0]));//0

	for (i=0;i<90;i++){
          geometry64.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	geometry64.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,1],m_c_tz[0,jj,1],m_c_ty[0,jj,1]));//0

	for (i=90;i<180;i++){
          geometry64.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry64.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,2],m_c_tz[0,jj,2],m_c_ty[0,jj,2]));//0

	for (i=180;i<270;i++){
          geometry64.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry64.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,3],m_c_tz[0,jj,3],m_c_ty[0,jj,3]));//0

	for (i=270;i<360;i++){
          geometry64.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	for(i=0;i<89;i++){
		geometry64.faces.push(
	            new THREE.Face3(0+kk_r*364, i+1+kk_r*364, i+2+kk_r*364));	
	}
	for(i=91;i<179;i++){
		geometry64.faces.push(
	            new THREE.Face3(91+kk_r*364, i+1+kk_r*364, i+2+kk_r*364));	
	}
	for(i=182;i<271;i++){
		geometry64.faces.push(
	            new THREE.Face3(182+kk_r*364, i+1+kk_r*364, i+2+kk_r*364));	
	}
	for(i=273;i<362;i++){
		geometry64.faces.push(
	            new THREE.Face3(273+kk_r*364, i+1+kk_r*364, i+2+kk_r*364));	
	}
	kk_cntr=i+2+kk_r*364;
	kk_r=kk_r+1;
	
}
function draw_ku(p,jj)

{

	geometry65.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,0],m_c_tz[0,jj,0],m_c_ty[0,jj,0]));//0

	for (i=0;i<90;i++){
          geometry65.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	geometry65.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,1],m_c_tz[0,jj,1],m_c_ty[0,jj,1]));//0

	for (i=90;i<180;i++){
          geometry65.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry65.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,2],m_c_tz[0,jj,2],m_c_ty[0,jj,2]));//0

	for (i=180;i<270;i++){
          geometry65.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry65.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,3],m_c_tz[0,jj,3],m_c_ty[0,jj,3]));//0

	for (i=270;i<360;i++){
          geometry65.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	for(i=0;i<89;i++){
		geometry65.faces.push(
	            new THREE.Face3(0+kk_u*364, i+1+kk_u*364, i+2+kk_u*364));	
	}
	for(i=91;i<179;i++){
		geometry65.faces.push(
	            new THREE.Face3(91+kk_u*364, i+1+kk_u*364, i+2+kk_u*364));	
	}
	for(i=182;i<271;i++){
		geometry65.faces.push(
	            new THREE.Face3(182+kk_u*364, i+1+kk_u*364, i+2+kk_u*364));	
	}
	for(i=273;i<362;i++){
		geometry65.faces.push(
	            new THREE.Face3(273+kk_u*364, i+1+kk_u*364, i+2+kk_u*364));	
	}
	kk_cntu=i+2+kk_u*364;
	kk_u=kk_u+1;
	
}
function draw_k(p,jj)

{

/*	geometry12.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,0],m_c_tz[0,jj,0],m_c_ty[0,jj,0]));//0

	for (i=0;i<90;i++){
          geometry12.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	geometry12.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,1],m_c_tz[0,jj,1],m_c_ty[0,jj,1]));//0

	for (i=90;i<180;i++){
          geometry12.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry12.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,2],m_c_tz[0,jj,2],m_c_ty[0,jj,2]));//0

	for (i=180;i<270;i++){
          geometry12.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}
	geometry12.vertices.push(
            new THREE.Vector3(m_c_tx[0,jj,3],m_c_tz[0,jj,3],m_c_ty[0,jj,3]));//0

	for (i=270;i<360;i++){
          geometry12.vertices.push(
            new THREE.Vector3(m_c_x[0,jj,i],m_c_z[0,jj,i],m_c_y[0,jj,i]));//0
	}

	for(i=0;i<89;i++){
		geometry12.faces.push(
	            new THREE.Face3(0+kk*364, i+1+kk*364, i+2+kk*364));	
	}
	for(i=91;i<179;i++){
		geometry12.faces.push(
	            new THREE.Face3(91+kk*364, i+1+kk*364, i+2+kk*364));	
	}
	for(i=182;i<271;i++){
		geometry12.faces.push(
	            new THREE.Face3(182+kk*364, i+1+kk*364, i+2+kk*364));	
	}
	for(i=273;i<362;i++){
		geometry12.faces.push(
	            new THREE.Face3(273+kk*364, i+1+kk*364, i+2+kk*364));	
	}
	kk_cnt=i+2+kk*364;
	kk=kk+1;
	*/
}

function draw_k_s(p,jj)

{
	
		geometry13.vertices.push(
            new THREE.Vector3(m_s_tx[p-1,jj,0],m_s_tz[p-1,jj,0],m_s_ty[p-1,jj,0]));//0
	
	
	for (i=0;i<90;i++){
          geometry13.vertices.push(
            new THREE.Vector3(m_s_x[p-1,jj,i],m_s_z[p-1,jj,i],m_s_y[p-1,jj,i]));//0
	}

	geometry13.vertices.push(
            new THREE.Vector3(m_s_tx[p-1,jj,1],m_s_tz[p-1,jj,1],m_s_ty[p-1,jj,1]));//0

	for (i=90;i<180;i++){
          geometry13.vertices.push(
            new THREE.Vector3(m_s_x[p-1,jj,i],m_s_z[p-1,jj,i],m_s_y[p-1,jj,i]));//0
	}
	geometry13.vertices.push(
            new THREE.Vector3(m_s_tx[p-1,jj,2],m_s_tz[p-1,jj,2],m_s_ty[p-1,jj,2]));//0

	for (i=180;i<270;i++){
          geometry13.vertices.push(
            new THREE.Vector3(m_s_x[p-1,jj,i],m_s_z[p-1,jj,i],m_s_y[p-1,jj,i]));//0
	}
	if (p==3){
		geometry13.vertices.push(
            new THREE.Vector3(m_s_tx[p-1,jj,3],m_s_tz[p-1,jj,3],m_s_ty[p-1,jj,3]));//0
	}else{
	geometry13.vertices.push(
            new THREE.Vector3(m_s_tx[p-1,jj,3],m_s_tz[p-1,jj,3],m_s_ty[p-1,jj,3]));//0
	
	}
	for (i=270;i<360;i++){
          geometry13.vertices.push(
            new THREE.Vector3(m_s_x[p-1,jj,i],m_s_z[p-1,jj,i],m_s_y[p-1,jj,i]));//0
	}

	for(i=0;i<89;i++){
		geometry13.faces.push(
	            new THREE.Face3(0+ks*364, i+1+ks*364, i+2+ks*364));	
	}
	for(i=91;i<179;i++){
		geometry13.faces.push(
	            new THREE.Face3(91+ks*364, i+1+ks*364, i+2+ks*364));	
	}
	for(i=182;i<271;i++){
		geometry13.faces.push(
	            new THREE.Face3(182+ks*364, i+1+ks*364, i+2+ks*364));	
	}
	for(i=273;i<362;i++){
		geometry13.faces.push(
	            new THREE.Face3(273+ks*364, i+1+ks*364, i+2+ks*364));	
	}

	ks=ks+1;

}

function draw_da(geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)
{
	var i=0;
		
	if (p_type=="Aタイプ" ){

          	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,b_depth/2));//0 
	  	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//1
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2));//2
	  	geometry41.vertices.push( new THREE.Vector3(b_width/2,-b_height/2-p_thickness,b_depth/2));//3	  
	 	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,-b_depth/2));//4
	 	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2));//5
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2));//6
	 	geometry41.vertices.push(new THREE.Vector3(b_width/2,-b_height/2-p_thickness,-b_depth/2));//7

			//前
		geometry41.faces.push(new THREE.Face3(1, 2, 0));
		geometry41.faces.push(new THREE.Face3(2, 3, 0));	
			//左	
		geometry41.faces.push(new THREE.Face3(0, 5, 1));
		geometry41.faces.push(new THREE.Face3(0, 4, 5));
			//右
		geometry41.faces.push(new THREE.Face3(3, 2, 6));
		geometry41.faces.push(new THREE.Face3(6, 7, 3));
			//上
		geometry41.faces.push(new THREE.Face3(0, 3,4));
		geometry41.faces.push(new THREE.Face3(4, 3,7));		
			//底		
		geometry41.faces.push(new THREE.Face3(1, 5+i,2+i));
		geometry41.faces.push(new THREE.Face3(2, 5+i,6+i));		
			//後ろ
		geometry41.faces.push(new THREE.Face3(4, 6, 5));	
		geometry41.faces.push(new THREE.Face3(4, 7, 6));	 

	}
	
}
function draw_db(geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)
{
	var i=0;
	for(i=0;i<2;i++){
        	geometry41.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness));//0	 
	  	geometry41.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,b_depth/2-b_thickness));//1
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,b_depth/2-b_thickness));//2
	  	geometry41.vertices.push( new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness));//3
	 	geometry41.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,-b_depth/2+b_thickness));//4
	 	geometry41.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,-b_depth/2+b_thickness));//5
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,-b_depth/2+b_thickness));//6
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,-b_depth/2+b_thickness));//7
          	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,b_depth/2));//0
	  	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//1
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2));//2
	  	geometry41.vertices.push( new THREE.Vector3(b_width/2,-b_height/2-p_thickness,b_depth/2));//3	  
	 	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,-b_depth/2));//4
	 	geometry41.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2));//5
	  	geometry41.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2));//6
	 	geometry41.vertices.push(new THREE.Vector3(b_width/2,-b_height/2-p_thickness,-b_depth/2));//7
			//前
		geometry41.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		geometry41.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));	
			//左	
		geometry41.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		geometry41.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			//右
		geometry41.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		geometry41.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			//上
		geometry41.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		geometry41.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));		
			//底		
		geometry41.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
		geometry41.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));		
			//後ろ
		geometry41.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));	
		geometry41.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));	 

	}
				
		geometry60.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2+0.01,-b_depth/2));//8
	
	 	geometry60.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2+0.01,b_depth/2));//9
	  
	  	geometry60.vertices.push(new THREE.Vector3(b_width/2,-b_height/2+0.01,b_depth/2));//10
	 
	  	geometry60.vertices.push(new THREE.Vector3(b_width/2,-b_height/2+0.01,-b_depth/2));//11
		
		geometry60.faces.push(new THREE.Face3(0, 1, 2));	
		geometry60.faces.push(new THREE.Face3(2, 3, 0));
	

}
function draw_dc(geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)
{
	var i=0;
	var x=b_width;
	var y=b_depth;
	var h=b_height;
	var h2=p_height;
	var t1=b_thickness;
	var t2=p_thickness;

	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+t2,y/2-t1-i*(y-2*t1)));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,y/2-t1-i*(y-2*t1)));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2,y/2-t1-i*(y-2*t1)));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2+t2,y/2-t1-i*(y-2*t1)));//3,7	
	}
	for (i=0;i<2;i++){	
		geometry41.vertices.push(new THREE.Vector3(-x/2,-h/2,y/2-i*(y)));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2,-h/2-t2,y/2-i*(y)));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2,-h/2-t2,y/2-i*(y)));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2,-h/2,y/2-i*(y)));//3,7	
	}
	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(-x/2,-h/2-t2,y/2-t2*i));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2,-h/2-h2,y/2-t2*i));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2,-h/2-h2,y/2-t2*i));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2,-h/2-t2,y/2-t2*i));//3,7	
		
		
	}
	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(x/2,-h/2-t2,-y/2+t2*i));//0,4
		geometry41.vertices.push(new THREE.Vector3(x/2,-h/2-h2,-y/2+t2*i));//1,5
		geometry41.vertices.push(new THREE.Vector3(-x/2,-h/2-h2,-y/2+t2*i));//2,6
		geometry41.vertices.push(new THREE.Vector3(-x/2,-h/2-t2,-y/2+t2*i));//3,7	
	}
	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(-x/2+t2*i,-h/2-t2,-y/2+t2));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2+t2*i,-h/2-h2,-y/2+t2));//1,5
		geometry41.vertices.push(new THREE.Vector3(-x/2+t2*i,-h/2-h2,y/2-t2));//2,6
		geometry41.vertices.push(new THREE.Vector3(-x/2+t2*i,-h/2-t2,y/2-t2));//3,7
		
		geometry67.vertices.push(new THREE.Vector3(-x/2+t2+i*(x-2*t2),-h/2-t2,-y/2+t2));//0,4
		geometry67.vertices.push(new THREE.Vector3(-x/2+t2+i*(x-2*t2),-h/2-h2,-y/2+t2));//1,5
		geometry67.vertices.push(new THREE.Vector3(-x/2+t2+i*(x-2*t2),-h/2-h2,y/2-t2));//2,6
		geometry67.vertices.push(new THREE.Vector3(-x/2+t2+i*(x-2*t2),-h/2-t2,y/2-t2));//3,7	
	}  
	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(x/2-t2*i,-h/2-t2,y/2-t2));//0,4
		geometry41.vertices.push(new THREE.Vector3(x/2-t2*i,-h/2-h2,y/2-t2));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2-t2*i,-h/2-h2,-y/2+t2));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2-t2*i,-h/2-t2,-y/2+t2));//3,7	
	}


 	for (i=0;i<=5;i++){

//前			
		geometry41.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		geometry41.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
//左
		geometry41.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		geometry41.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
//右
		geometry41.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		geometry41.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
//上
		geometry41.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		geometry41.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));	
//底	
		geometry41.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
		geometry41.faces.push( new THREE.Face3(2+i*8, 5+i*8,6+i*8));
//後ろ
		geometry41.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
		geometry41.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
	}
	geometry66.vertices.push(new THREE.Vector3(-x/2+t2,-h/2-t2,y/2-t2-0.01));//0,4
	geometry66.vertices.push(new THREE.Vector3(-x/2+t2,-h/2-h2,y/2-t2-0.01));//1,5
	geometry66.vertices.push(new THREE.Vector3(x/2-t2,-h/2-h2,y/2-t2-0.01));//2,6
	geometry66.vertices.push(new THREE.Vector3(x/2-t2,-h/2-t2,y/2-t2-0.01));//3,7

	geometry66.vertices.push(new THREE.Vector3(-x/2+t2,-h/2-t2,-y/2+t2+0.01));//0,4
	geometry66.vertices.push(new THREE.Vector3(-x/2+t2,-h/2-h2,-y/2+t2+0.01));//1,5
	geometry66.vertices.push(new THREE.Vector3(x/2-t2,-h/2-h2,-y/2+t2+0.01));//2,6
	geometry66.vertices.push(new THREE.Vector3(x/2-t2,-h/2-t2,-y/2+t2+0.01));//3,7

	geometry66.faces.push(new THREE.Face3(0, 1, 2));	
	geometry66.faces.push(new THREE.Face3(2, 3, 0));
	geometry67.faces.push(new THREE.Face3(0, 1, 2));	
	geometry67.faces.push(new THREE.Face3(2, 3, 0));
	geometry66.faces.push(new THREE.Face3(4, 5, 6));	
	geometry66.faces.push(new THREE.Face3(6, 7, 4));
	geometry67.faces.push(new THREE.Face3(4, 5, 6));	
	geometry67.faces.push(new THREE.Face3(6, 7, 4));
	if (p_type=="Cタイプ" ){

		
		geometry60.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2+0.01,-b_depth/2));//8
	
	 	geometry60.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2+0.01,b_depth/2));//9
	  
	  	geometry60.vertices.push(new THREE.Vector3(b_width/2,-b_height/2+0.01,b_depth/2));//10
	 
	  	geometry60.vertices.push(new THREE.Vector3(b_width/2,-b_height/2+0.01,-b_depth/2));//11
		
		geometry60.faces.push(new THREE.Face3(0, 1, 2));	
		geometry60.faces.push(new THREE.Face3(2, 3, 0));

		geometry60.vertices.push(new THREE.Vector3(-x/2+t2,-h/2-t2-0.01,y/2-t2));//0,4
		geometry60.vertices.push(new THREE.Vector3(x/2-t2,-h/2-t2-0.01,y/2-t2));//1,5
		geometry60.vertices.push(new THREE.Vector3(x/2-t2,-h/2-t2-0.01,-y/2+t2));//2,6
		geometry60.vertices.push(new THREE.Vector3(-x/2+t2,-h/2-t2-0.01,-y/2+t2));//3,7
		geometry60.faces.push(new THREE.Face3(4, 5, 6));	
		geometry60.faces.push(new THREE.Face3(6, 7, 4));
	}

}
function draw_dd(geometry70,geometry41,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)
{
	var i=0;
	var x=b_width;
	var y=b_depth;
	var h=b_height;
	var h2=p_height;
	var t1=b_thickness;
	var t2=p_thickness;
	
draw_dn(geometry70,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);
draw_dnr(geometry73,geometry74,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness);

	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2,y/2-t1-i*(y-2*t1)));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2,y/2-t1-i*(y-2*t1)));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2,y/2-t1-i*(y-2*t1)));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2,y/2-t1-i*(y-2*t1)));//3,7	

	}
		geometry60.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2,y/2-t1));//0,4
		geometry60.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,y/2-t1));//1,5
		geometry60.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,y/2-t1));//2,6
		geometry60.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2,y/2-t1));//3,7	
		geometry60.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2,-y/2+t1));//0,4
		geometry60.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,-y/2+t1));//1,5
		geometry60.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,-y/2+t1));//2,6
		geometry60.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2,-y/2+t1));//3,7	

	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,y/2-t1-t2*i));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,y/2-t1-t2*i));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2,y/2-t1-t2*i));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,y/2-t1-t2*i));//3,7	
		
		
	}
	for (i=0;i<2;i++){
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2,-y/2+t1+t2*i));//0,4
		geometry41.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,-y/2+t1+t2*i));//1,5
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,-y/2+t1+t2*i));//2,6
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,-y/2+t1+t2*i));//3,7	
	}
	for (i=0;i<2;i++){//左
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/2+t1+t2));//0,4
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/2+t1+t2));//1,5
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/2-t1-t2));//2,6
		geometry41.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/2-t1-t2));//3,7

		
		
			
	}  
	for (i=0;i<2;i++){//右
		geometry41.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/2-t1-t2));//0,4
		geometry41.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/2-t1-t2));//1,5
		geometry41.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/2+t1+t2));//2,6
		geometry41.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/2+t1+t2));//3,7	
	}
//tenn	
	
	//draw_sd()	

 	for (i=0;i<=4;i++){

//前			
		geometry41.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		geometry41.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
//左
		geometry41.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		geometry41.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
//右
		geometry41.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		geometry41.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
//上
		geometry41.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		geometry41.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));	
//底	
		geometry41.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
		geometry41.faces.push( new THREE.Face3(2+i*8, 5+i*8,6+i*8));
//後ろ
		geometry41.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
		geometry41.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
	}
	geometry66.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2,y/2-t1-t2-0.01));//0,4
	geometry66.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2,y/2-t1-t2-0.01));//1,5
	geometry66.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2,y/2-t1-t2-0.01));//2,6
	geometry66.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2,y/2-t1-t2-0.01));//3,7

	geometry66.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2,-y/2+t1+t2+0.01));//0,4
	geometry66.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2,-y/2+t1+t2+0.01));//1,5
	geometry66.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2,-y/2+t1+t2+0.01));//2,6
	geometry66.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2,-y/2+t1+t2+0.01));//3,7
	

	geometry67.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2,-y/2+t1+t2));//0,4
	geometry67.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2,-y/2+t1+t2));//1,5
	geometry67.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2,y/2-t1-t2));//2,6
	geometry67.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2,y/2-t1-t2));//3,7
	
	geometry67.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2,-y/2+t1+t2));//0,4
	geometry67.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2,-y/2+t1+t2));//1,5
	geometry67.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2,y/2-t1-t2));//2,6
	geometry67.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2,y/2-t1-t2));//3,7
	
	geometry60.vertices.push(new THREE.Vector3(-x/2+t2,-h/2+h2-t2-0.01,y/2-t2));//0,4
	geometry60.vertices.push(new THREE.Vector3(x/2-t2,-h/2+h2-t2-0.01,y/2-t2));//1,5
	geometry60.vertices.push(new THREE.Vector3(x/2-t2,-h/2+h2-t2-0.01,-y/2+t2));//2,6
	geometry60.vertices.push(new THREE.Vector3(-x/2+t2,-h/2+h2-t2-0.01,-y/2+t2));//3,7
	
	geometry60.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2-0.1,y/2-t1-t2));
	geometry60.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2,y/2-t1-t2));
	geometry60.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2,-y/2+t1+t2));
	geometry60.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+h2-t2-0.1,-y/2+t1+t2));

	geometry60.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2-0.1,y/2-t1-t2));
	geometry60.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2,y/2-t1-t2));
	geometry60.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2,-y/2+t1+t2));
	geometry60.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+h2-t2-0.1,-y/2+t1+t2));

	//geometry60.faces.push(new THREE.Face3(2, 1, 0));	
	//geometry60.faces.push(new THREE.Face3(0, 3, 2));
	
	geometry60.faces.push(new THREE.Face3(2, 1, 0));	
	geometry60.faces.push(new THREE.Face3(0, 3, 2));
	geometry60.faces.push(new THREE.Face3(6, 5, 4));	
	geometry60.faces.push(new THREE.Face3(4, 7, 6));

	geometry60.faces.push(new THREE.Face3(10, 9, 8));	
	geometry60.faces.push(new THREE.Face3(8, 11, 10));

	geometry60.faces.push(new THREE.Face3(14, 13, 12));	
	geometry60.faces.push(new THREE.Face3(12, 15, 14));
	
	geometry60.faces.push(new THREE.Face3(18, 17, 16));	
	geometry60.faces.push(new THREE.Face3(16, 19, 18));

	geometry66.faces.push(new THREE.Face3(0, 1, 2));	
	geometry66.faces.push(new THREE.Face3(2, 3, 0));
	geometry67.faces.push(new THREE.Face3(0, 1, 2));	
	geometry67.faces.push(new THREE.Face3(2, 3, 0));
	geometry66.faces.push(new THREE.Face3(4, 5, 6));	
	geometry66.faces.push(new THREE.Face3(6, 7, 4));
	geometry67.faces.push(new THREE.Face3(4, 5, 6));	
	geometry67.faces.push(new THREE.Face3(6, 7, 4));
	


}
function draw_dh(geometry42,geometry43,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)

{
	var i=0;
	var x=b_width;
	var y=b_depth;
	var h=b_height;
	var h2=p_height;
	var t1=b_thickness;
	var t2=p_thickness;
	if (p_type=="Bタイプ" || p_type=="Cタイプ"){

		geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness-0.01));//0
	 
	  	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,b_depth/2-b_thickness-0.01));//1
	  
	  	geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,b_depth/2-b_thickness-0.01));//2
	  
	  	geometry42.vertices.push( new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness-0.01));//3
	       
	 	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,-b_depth/2+b_thickness+0.01));//4
	
	 	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,-b_depth/2+p_thickness+0.01));//5
	  
	  	geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,-b_depth/2+b_thickness+0.01));//6
	 
	  	geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,-b_depth/2+b_thickness+0.01));//7
		 //#######  	  
	  	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,-b_depth/2+b_thickness));//0
	 
	  	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,-b_depth/2+b_thickness));//1
	  
	  	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,b_depth/2-b_thickness));//2
	  
	  	geometry42.vertices.push( new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness));//3
			
		//#########
		geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,-b_depth/2+b_thickness));//0
	 
	  	geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,-b_depth/2+b_thickness));//1
	  
	  	geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,b_depth/2-b_thickness));//2
	  
	  	geometry42.vertices.push( new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness));//3
		
		geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness));//0
	 
	  	geometry42.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,b_depth/2-b_thickness));//1
	  

	  	geometry42.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,b_depth/2-b_thickness));//2
	  

	  	geometry42.vertices.push( new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness));//3

			//前
		geometry42.faces.push(new THREE.Face3(1, 2, 0));
		geometry42.faces.push(new THREE.Face3(2, 3, 0));
	
			//後ろ
		geometry42.faces.push(new THREE.Face3(4, 6, 5));	
		geometry42.faces.push(new THREE.Face3(4, 7, 6));
			//後ろ
		geometry42.faces.push(new THREE.Face3(9, 10, 8));
		geometry42.faces.push(new THREE.Face3(10, 11,8));

	  	geometry42.faces.push(new THREE.Face3(13, 14, 12));
		geometry42.faces.push(new THREE.Face3(14, 15,12));

		geometry42.faces.push(new THREE.Face3(17, 18, 16));
		geometry42.faces.push(new THREE.Face3(18, 19,16));
		
	}		
	if ( p_type=="Bタイプ" ){

          	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,b_depth/2));//0
	 
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//1
	  
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2));//2
	  
	  	geometry43.vertices.push( new THREE.Vector3(b_width/2,-b_height/2-p_thickness,b_depth/2));//3
	       
	 	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,-b_depth/2));//4
	
	 	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2));//5
	  
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2));//6
	 
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2-p_thickness,-b_depth/2));//7
		 //#######  	  
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,-b_depth/2));//0
	 
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2));//1
	  
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//2
	  
	  	geometry43.vertices.push( new THREE.Vector3(-b_width/2,-b_height/2-p_thickness,b_depth/2));//3

			
		//#########
		geometry43.vertices.push(new THREE.Vector3(b_width/2+0.01,-b_height/2-p_thickness,-b_depth/2));//0
	 
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2+0.01,-b_height/2,-b_depth/2));//1
	  
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2+0.01,-b_height/2,b_depth/2));//2
	  
	  	geometry43.vertices.push( new THREE.Vector3(b_width/2+0.01,-b_height/2-p_thickness,b_depth/2));//3

			//前
		geometry43.faces.push(new THREE.Face3(1, 2, 0));
		geometry43.faces.push(new THREE.Face3(2, 3, 0));
	
			//後ろ
		geometry43.faces.push(new THREE.Face3(4, 6, 5));
	
		geometry43.faces.push(new THREE.Face3(4, 7, 6));
			//後ろ
		geometry43.faces.push(new THREE.Face3(9, 10, 8));
	
		geometry43.faces.push(new THREE.Face3(10, 11,8));

	  	geometry43.faces.push(new THREE.Face3(13, 14, 12));
	
		geometry43.faces.push(new THREE.Face3(14, 15,12));

	}	
	
	if ( p_type=="Cタイプ" ){

          	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_height,b_depth/2+0.01));//0
	 
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2+0.01));//1
	  
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2+0.01));//2
	  
	  	geometry43.vertices.push( new THREE.Vector3(b_width/2,-b_height/2-p_height,b_depth/2+0.01));//3
	       
	 	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_height,-b_depth/2-0.01));//4
	
	 	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2-0.01));//5
	  
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2-0.01));//6
	 
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2-p_height,-b_depth/2-0.01));//7
		 //#######  	  
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness+0.01));//0
	 
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2+b_thickness,-b_height/2,b_depth/2-b_thickness+0.01));//1
	  

	  		geometry43.vertices.push(new THREE.Vector3(b_width/2-b_thickness,-b_height/2,b_depth/2-b_thickness+0.01));//2
	  

	  		geometry43.vertices.push( new THREE.Vector3(b_width/2-b_thickness,-b_height/2+p_thickness,b_depth/2-b_thickness+0.01));//3

			
		//#########
			geometry43.vertices.push(new THREE.Vector3(b_width/2+0.01,-b_height/2-p_height,-b_depth/2));//0
	 
	  		geometry43.vertices.push(new THREE.Vector3(b_width/2+0.01,-b_height/2,-b_depth/2));//1
	  

	  		geometry43.vertices.push(new THREE.Vector3(b_width/2+0.01,-b_height/2,b_depth/2));//2
	  

	  		geometry43.vertices.push( new THREE.Vector3(b_width/2+0.01,-b_height/2-p_height,b_depth/2));//3
		//反射
		geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2-p_height,-b_depth/2-0.001));//4
	
	 	geometry43.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2-0.001));//5
	  
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2-0.001));//6
	 
	  	geometry43.vertices.push(new THREE.Vector3(b_width/2,-b_height/2-p_height,-b_depth/2-0.001));//7
		//左
		geometry43.vertices.push(new THREE.Vector3(-b_width/2-0.0001,-b_height/2-p_height,-b_depth/2));//4
	
	 	geometry43.vertices.push(new THREE.Vector3(-b_width/2-0.0001,-b_height/2,-b_depth/2));//5
	  
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2-0.0001,-b_height/2,b_depth/2));//6
	 
	  	geometry43.vertices.push(new THREE.Vector3(-b_width/2-0.0001,-b_height/2-p_height,b_depth/2));//7


			//前
		geometry43.faces.push(new THREE.Face3(1, 2, 0));
		geometry43.faces.push(new THREE.Face3(2, 3, 0));
	
			//後ろ
		geometry43.faces.push(new THREE.Face3(4, 6, 5));
	
		geometry43.faces.push(new THREE.Face3(4, 7, 6));


		
			//後ろ
			geometry43.faces.push(new THREE.Face3(9, 10, 8));
	
			geometry43.faces.push(new THREE.Face3(10, 11,8));

	  		geometry43.faces.push(new THREE.Face3(13, 14, 12));
	
			geometry43.faces.push(new THREE.Face3(14, 15,12));
			
			geometry43.faces.push(new THREE.Face3(17, 18, 16));
	
			geometry43.faces.push(new THREE.Face3(18, 19,16));
			geometry43.faces.push(new THREE.Face3(21, 22, 20));
	
			geometry43.faces.push(new THREE.Face3(22, 23,20));
			
			
		
	}

}
function draw_m1(geometry44,geometry45,b_width,b_depth,b_height,b_thickness)
{
	var i=0;
//430	for (i=0;i<2;i++){
	geometry44.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2));//0
	 
	geometry44.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2));//1
	  

	geometry44.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//2
	  

	geometry44.vertices.push( new THREE.Vector3(-b_width/2,b_height/2,b_depth/2));//3



	geometry44.vertices.push(new THREE.Vector3(b_width/2,b_height/2,-b_depth/2));//0
	 
	geometry44.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2));//1
	  

	geometry44.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2));//2
	  

	geometry44.vertices.push( new THREE.Vector3(b_width/2,b_height/2,b_depth/2));//3
//
	
//	geometry44.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,b_depth/2));//0
	 
//	geometry44.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//1
	  

//	geometry44.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2));//2
	  

//	geometry44.vertices.push( new THREE.Vector3(b_width/2,b_height/2,b_depth/2));//3
//
//	geometry44.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,b_depth/2-b_thickness));//0
	 
//	geometry44.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2-b_thickness));//1
	  

//	geometry44.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2-b_thickness));//2
	  

//	geometry44.vertices.push( new THREE.Vector3(b_width/2,b_height/2,b_depth/2-b_thickness));//3

//430	}


	geometry45.vertices.push(new THREE.Vector3(-b_width/2-0.01,b_height/2,-b_depth/2));//0
	 
	geometry45.vertices.push(new THREE.Vector3(-b_width/2-0.01,-b_height/2,-b_depth/2));//1
	  

	geometry45.vertices.push(new THREE.Vector3(-b_width/2-0.01,-b_height/2,b_depth/2));//2
	  

	geometry45.vertices.push( new THREE.Vector3(-b_width/2-0.01,b_height/2,b_depth/2));//3
	geometry45.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
	geometry45.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));

//430	for (i=0;i<2;i++){
i=0;
			//前
		 	geometry44.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 	geometry44.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	
			//後ろ
			geometry44.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
	
			geometry44.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
			//後ろ

//			geometry44.faces.push(new THREE.Face3(9+i*8, 10+i*8, 8+i*8));
	
//			geometry44.faces.push(new THREE.Face3(10+i*8, 11+i*8, 8+i*8));
			
//			geometry44.faces.push(new THREE.Face3(13+i*8, 14+i*8, 12+i*8));
	
//			geometry44.faces.push(new THREE.Face3(14+i*8, 15+i*8, 12+i*8));
//430	}       

}

function draw_b(geometry11,x1,y1,h,t,p_type)
{
	var i=0;
	var hd=0;
	
      // (2)頂点データの作成
   	if (p_type=="Cタイプ"){

		hd=60;
	}


        geometry11.vertices.push(new THREE.Vector3(-x1/2,-h/2-40-hd,y1/2));//0
	 
	geometry11.vertices.push(new THREE.Vector3(-x1/2,-h/2-40.5-hd,y1/2));//1
	  
	geometry11.vertices.push(new THREE.Vector3(x1/2,-h/2-40.5-hd,y1/2));//2
	  
	geometry11.vertices.push(new THREE.Vector3(x1/2,-h/2-40-hd,y1/2));//3

	geometry11.vertices.push(new THREE.Vector3(-x1/2,-h/2-40-hd,-y1/2));//4
	
	geometry11.vertices.push(new THREE.Vector3(-x1/2,-h/2-40.5-hd,-y1/2));//5
	  
	geometry11.vertices.push(new THREE.Vector3(x1/2,-h/2-40.5-hd,-y1/2));//6
	 
	geometry11.vertices.push(new THREE.Vector3(x1/2,-h/2-40-hd,-y1/2));//7



	geometry11.faces.push(new THREE.Face3(1, 2, 0));
	geometry11.faces.push(new THREE.Face3(2, 3, 0));
	
			//左
	
	geometry11.faces.push(new THREE.Face3(0, 5, 1));
	geometry11.faces.push(new THREE.Face3(0, 4, 5));
			//右
	geometry11.faces.push(new THREE.Face3(3, 2, 6));
	geometry11.faces.push(new THREE.Face3(6, 7, 3));
			//上
	geometry11.faces.push(new THREE.Face3(0, 3,4));
	geometry11.faces.push(new THREE.Face3(4, 3,7));	
	
			//底	
	geometry11.faces.push(new THREE.Face3(1, 5,2));
	geometry11.faces.push(new THREE.Face3(2, 5,6));
	
			//後ろ
	geometry11.faces.push(new THREE.Face3(4, 6, 5));
	
	geometry11.faces.push(new THREE.Face3(4, 7, 6));



}
function draw_du1(geometry48,p,z,w,d,h,x,y,r,t,o)
{
	var i=0;
//430	for (i=0;i<2;i++){
//上
	geometry48.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2));//0 
	geometry48.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2+y-r/2));//1 

	geometry48.vertices.push(new THREE.Vector3(b_width/2,b_height/2,-b_depth/2+y-r/2));//2 
	geometry48.vertices.push( new THREE.Vector3(b_width/2,b_height/2,-b_depth/2));//3
//左
	geometry48.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2+y-r/2));//0 
	geometry48.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2+y+r/2));//1 
	geometry48.vertices.push(new THREE.Vector3(-b_width/2+x-r/2,b_height/2,-b_depth/2+y+r/2));//2 
	geometry48.vertices.push( new THREE.Vector3(-b_width/2+x-r/2,b_height/2,-b_depth/2+y-r/2));//3
//右
	geometry48.vertices.push(new THREE.Vector3(-b_width/2+x+r/2,b_height/2,-b_depth/2+y-r/2));//0 
	geometry48.vertices.push(new THREE.Vector3(-b_width/2+x+r/2,b_height/2,-b_depth/2+y+r/2));//1 
	geometry48.vertices.push(new THREE.Vector3(b_width/2,b_height/2,-b_depth/2+y+r/2));//2 
	geometry48.vertices.push( new THREE.Vector3(b_width/2,b_height/2,-b_depth/2+y-r/2));//3

//下

	geometry48.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2+y+r/2));//0 
	geometry48.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,b_depth/2));//1 

	geometry48.vertices.push(new THREE.Vector3(b_width/2,b_height/2,b_depth/2));//2 
	geometry48.vertices.push( new THREE.Vector3(b_width/2,b_height/2,-b_depth/2+y+r/2));//3
	

//430	}
	//for (i=0;i<2;i++){
	i=0;
			//前
		 	geometry48.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 	geometry48.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	
			geometry48.faces.push(new THREE.Face3(9+i*8, 10+i*8, 8+i*8));
		 	geometry48.faces.push(new THREE.Face3(10+i*8, 11+i*8, 8+i*8));

			geometry48.faces.push(new THREE.Face3(13+i*8, 14+i*8, 12+i*8));
		 	geometry48.faces.push(new THREE.Face3(14+i*8, 15+i*8, 12+i*8));

			geometry48.faces.push(new THREE.Face3(17+i*8, 18+i*8, 16+i*8));
		 	geometry48.faces.push(new THREE.Face3(18+i*8, 19+i*8, 16+i*8));
	//}       
}


function draw_df1(geometry46,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
	var i=0;

	
//上
	geometry46.vertices.push(new THREE.Vector3(-w/2,h/2,d/2));//0 
	geometry46.vertices.push(new THREE.Vector3(-w/2,h/2-y1,d/2));//1 

	geometry46.vertices.push(new THREE.Vector3(w/2,h/2-y1,d/2));//2 
	geometry46.vertices.push( new THREE.Vector3(w/2,h/2,d/2));//3
//左
	geometry46.vertices.push(new THREE.Vector3(-w/2,h/2-y1,d/2));//0 
	geometry46.vertices.push(new THREE.Vector3(-w/2,h/2-y1-y2,d/2));//1 
	geometry46.vertices.push(new THREE.Vector3(-w/2+x1,h/2-y1-y2,d/2));//2 
	geometry46.vertices.push( new THREE.Vector3(-w/2+x1,h/2-y1,d/2));//3
//右
	geometry46.vertices.push(new THREE.Vector3(-w/2+x1+x2,h/2-y1,d/2));//0 
	geometry46.vertices.push(new THREE.Vector3(-w/2+x1+x2,h/2-y1-y2,d/2));//1 
	geometry46.vertices.push(new THREE.Vector3(w/2,h/2-y1-y2,d/2));//2 
	geometry46.vertices.push( new THREE.Vector3(w/2,h/2-y1,d/2));//3

//下
	//if(y1>0 && y1+y1>h){
	geometry46.vertices.push(new THREE.Vector3(-w/2,h/2-y1-y2,d/2));//0 
	geometry46.vertices.push(new THREE.Vector3(-w/2,-h/2,d/2));//1 

	geometry46.vertices.push(new THREE.Vector3(w/2,-h/2,d/2));//2 
	geometry46.vertices.push( new THREE.Vector3(w/2,h/2-y1-y2,d/2));//3
	
	//}
//430	}

			//前
		 	geometry46.faces.push(new THREE.Face3(1, 2, 0));
		 	geometry46.faces.push(new THREE.Face3(2, 3, 0));
			
			geometry46.faces.push(new THREE.Face3(5, 6, 4));
		 	geometry46.faces.push(new THREE.Face3(6, 7, 0));

			geometry46.faces.push(new THREE.Face3(9, 10, 8));
		 	geometry46.faces.push(new THREE.Face3(10, 11, 8));

			geometry46.faces.push(new THREE.Face3(13, 14, 12));
		 	geometry46.faces.push(new THREE.Face3(14, 15, 12));
	//	if(y1>0 && y1+y1>h){
		//	geometry46.faces.push(new THREE.Face3(17, 18, 16));
		// 	geometry46.faces.push(new THREE.Face3(18, 19, 16));
		//}
//430	}       
}
function draw_db1(geometry47,p,z,w,d,h,x1,y1,x2,y2,r1,t,o1,o2,s_f,s_f2,s_b,s_b2,s_l,s_l2,s_r,s_r2)
{
	var i=0;
//430	for (i=0;i<2;i++){
	i=0;
//上
	geometry47.vertices.push(new THREE.Vector3(-w/2,h/2,-d/2));//0 
	geometry47.vertices.push(new THREE.Vector3(-w/2,h/2-y1,-d/2));//1 

	geometry47.vertices.push(new THREE.Vector3(w/2,h/2-y1,-d/2));//2 
	geometry47.vertices.push( new THREE.Vector3(w/2,h/2,-d/2));//3
//左
	geometry47.vertices.push(new THREE.Vector3(-w/2,h/2-y1,-d/2));//0 
	geometry47.vertices.push(new THREE.Vector3(-w/2,h/2-y1-y2,-d/2));//1 
	geometry47.vertices.push(new THREE.Vector3(w/2-x1-x2,h/2-y1-y2,-d/2));//2 
	geometry47.vertices.push( new THREE.Vector3(w/2-x1-x2,h/2-y1,-d/2));//3
//右
	geometry47.vertices.push(new THREE.Vector3(w/2-x1,h/2-y1,-d/2));//0 
	geometry47.vertices.push(new THREE.Vector3(w/2-x1,h/2-y1-y2,-d/2));//1 
	geometry47.vertices.push(new THREE.Vector3(w/2,h/2-y1-y2,-d/2));//2 
	geometry47.vertices.push( new THREE.Vector3(w/2,h/2-y1,-d/2));//3

//下
	//if(y1>0 && y1+y1>h){
	geometry47.vertices.push(new THREE.Vector3(-w/2,h/2-y1-y2,-d/2));//0 
	geometry47.vertices.push(new THREE.Vector3(-w/2,-h/2,-d/2));//1 

	geometry47.vertices.push(new THREE.Vector3(w/2,-h/2,-d/2));//2 
	geometry47.vertices.push( new THREE.Vector3(w/2,h/2-y1-y2,-d/2));//3
	
	//}
//430	}
//430	for (i=0;i<2;i++){
i=0;
			//前
		 	geometry47.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 	geometry47.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	
			geometry47.faces.push(new THREE.Face3(9+i*8, 10+i*8, 8+i*8));
		 	geometry47.faces.push(new THREE.Face3(10+i*8, 11+i*8, 8+i*8));

			geometry47.faces.push(new THREE.Face3(13+i*8, 14+i*8, 12+i*8));
		 	geometry47.faces.push(new THREE.Face3(14+i*8, 15+i*8, 12+i*8));
	//	if(y1>0 && y1+y1>h){
			geometry47.faces.push(new THREE.Face3(17+i*8, 18+i*8, 16+i*8));
		 	geometry47.faces.push(new THREE.Face3(18+i*8, 19+i*8, 16+i*8));
		//}
//430	}
}


function draw_50(geometry12,b_width,b_depth,b_height,b_thickness,h_m_u_x1,h_m_u_y1,h_m_u_x2,h_m_u_y2,m_u_cnt)
{
var draw_junx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_juny=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

	var i=0;
	var j=0;
	var k=0;
	var o=0;
	var o2=0;
	var oo2=0;
	var z=0;
	var workn=0;
	draw_junx[0]=0;
	draw_juny[0]=0;
	for(i=0;i<22;i++){
		for(j=0;j<22;j++){
			draw_m_us[i][j]=0;
		}
	}
	for (i=0;i<m_u_cnt;i++){
		draw_junx[i+1]=h_m_u_x1[i];
		draw_juny[i+1]=h_m_u_y1[i];

	}
	for (i=0;i<m_u_cnt;i++){
		draw_junx[m_u_cnt+i+1]=h_m_u_x2[i];
		draw_juny[m_u_cnt+i+1]=h_m_u_y2[i];

	}
	draw_junx[m_u_cnt*2+1]=b_width;
	draw_juny[m_u_cnt*2+1]=b_depth;
	draw_junx.sort(compare);
	draw_juny.sort(compare);
	draw_m_ux[0]=0;
	draw_m_uy[0]=0;
	draw_m_us[0][0]=1;
	k=1;
	for(i=1;i<22;i++){
		o=0;
		for(j=0;j<22;j++){
			o2=0;
			oo2=0;
			if(draw_junx[i]==h_m_u_x1[j]){
				for(k=1;k<22;k++){
					if(draw_juny[k]==h_m_u_y1[j] && h_m_u_y1[j]!=0){

						draw_m_us[i][k]=1;
						o=1;
						oo2=1;
						
					}else{
						if(draw_juny[k]==h_m_u_y2[j]  && h_m_u_y2[j]!=0){

							draw_m_us[i][k]=2;
							o=0;
							oo2=2;
							
						}else{
							if(o==1){
								draw_m_us[i][k]=7;
							}

						}
					}
				}
				
			}else{

			
			
				if(draw_junx[i]==h_m_u_x2[j]){
					for(k=1;k<22;k++){
						if(draw_juny[k]==h_m_u_y1[j]  && h_m_u_y1[j]!=0){

							draw_m_us[i][k]=4;
						
							o2=1;
							oo2=0;
						}else{
							if(draw_juny[k]==h_m_u_y2[j]  && h_m_u_y2[j]!=0){

								draw_m_us[i][k]=3;
								oo2=0;
								o2=0;
							}else{
								if(o2==1){
									draw_m_us[i][k]=8;
								}
							}
						}
					}
				}else{
					if(oo2==1){
						draw_m_us[i][j]=5;
					}
					if(oo2==2){
						draw_m_us[i][j]=6;
					}

				}
			}

			
		}
	}
	for(i=1;i<21;i++){
		for(j=1;j<21;j++){
			if(draw_m_us[i][j]==1){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_us[k][j]==4  ){
						o=1;
					}
					if(draw_m_us[k][j]!=1 && draw_m_us[k][j]!=4 && o==0){
						draw_m_us[k][j]=5;
						
					}
				}
			}
			if(draw_m_us[i][j]==2){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_us[k][j]==3){
						o=1;
					}
					if(draw_m_us[k][j]!=1 && draw_m_us[k][j]!=3 && o==0){
						draw_m_us[k][j]=6;
						
					}
				}
			}
		}
	}

	draw_mu(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_us,m_u_cnt);

}

function draw_51(geometry12,b_width,b_depth,b_height,b_thickness,h_m_f_x1,h_m_f_y1,h_m_f_x2,h_m_f_y2,m_f_cnt)
{
var draw_junx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_juny=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

	var i=0;
	var j=0;
	var k=0;
	var o=0;
	var o2=0;
	var oo2=0;
	var z=0;
	var workn=0;
	draw_junx[0]=0;
	draw_juny[0]=0;
	for(i=0;i<22;i++){
		for(j=0;j<22;j++){
			draw_m_fs[i][j]=0;
		}
	}
	for (i=0;i<m_f_cnt;i++){
		draw_junx[i+1]=h_m_f_x1[i];
		draw_juny[i+1]=h_m_f_y1[i];

	}
	for (i=0;i<m_f_cnt;i++){
		draw_junx[m_f_cnt+i+1]=h_m_f_x2[i];
		draw_juny[m_f_cnt+i+1]=h_m_f_y2[i];

	}
	draw_junx[m_f_cnt*2+1]=b_width;
	draw_juny[m_f_cnt*2+1]=b_height;
	draw_junx.sort(compare);
	draw_juny.sort(compare);
	draw_m_fx[0]=0;
	draw_m_fy[0]=0;
	draw_m_fs[0][0]=1;
	k=1;
	for(i=1;i<22;i++){
		o=0;
		for(j=0;j<22;j++){
			o2=0;
			oo2=0;
			if(draw_junx[i]==h_m_f_x1[j]){
				for(k=1;k<22;k++){
					if(draw_juny[k]==h_m_f_y1[j] && h_m_f_y1[j]!=0){

						draw_m_fs[i][k]=1;
						o=1;
						oo2=1;
						
					}else{
						if(draw_juny[k]==h_m_f_y2[j]  && h_m_f_y2[j]!=0){

							draw_m_fs[i][k]=2;
							o=0;
							oo2=2;
							
						}else{
							if(o==1){
								draw_m_fs[i][k]=7;
							}

						}
					}
				}
				
			}else{

			
			
				if(draw_junx[i]==h_m_f_x2[j]){
					for(k=1;k<22;k++){
						if(draw_juny[k]==h_m_f_y1[j]  && h_m_f_y1[j]!=0){

							draw_m_fs[i][k]=4;
						
							o2=1;
							oo2=0;
						}else{
							if(draw_juny[k]==h_m_f_y2[j]  && h_m_f_y2[j]!=0){

								draw_m_fs[i][k]=3;
								oo2=0;
								o2=0;
							}else{
								if(o2==1){
									draw_m_fs[i][k]=8;
								}
							}
						}
					}
				}else{
					if(oo2==1){
						draw_m_fs[i][j]=5;
					}
					if(oo2==2){
						draw_m_fs[i][j]=6;
					}

				}
			}

			
		}
	}
	for(i=1;i<21;i++){
		for(j=1;j<21;j++){
			if(draw_m_fs[i][j]==1){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_fs[k][j]==4  ){
						o=1;
					}
					if(draw_m_fs[k][j]!=1 && draw_m_fs[k][j]!=4 && o==0){
						draw_m_fs[k][j]=5;
						
					}
				}
			}
			if(draw_m_fs[i][j]==2){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_fs[k][j]==3){
						o=1;
					}
					if(draw_m_fs[k][j]!=1 && draw_m_fs[k][j]!=3 && o==0){
						draw_m_fs[k][j]=6;
						
					}
				}
			}
		}
	}

	//draw_mf(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_fs,m_f_cnt);

}
function draw_52(geometry12,b_width,b_depth,b_height,b_thickness,h_m_b_x1,h_m_b_y1,h_m_b_x2,h_m_b_y2,m_b_cnt)
{
var draw_junx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_juny=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

	var i=0;
	var j=0;
	var k=0;
	var o=0;
	var o2=0;
	var oo2=0;
	var z=0;
	var workn=0;
	draw_junx[0]=0;
	draw_juny[0]=0;
	for(i=0;i<22;i++){
		for(j=0;j<22;j++){
			draw_m_bs[i][j]=0;
		}
	}
	for (i=0;i<m_b_cnt;i++){
		draw_junx[i+1]=h_m_b_x1[i];
		draw_juny[i+1]=h_m_b_y1[i];

	}
	for (i=0;i<m_b_cnt;i++){
		draw_junx[m_b_cnt+i+1]=h_m_b_x2[i];
		draw_juny[m_b_cnt+i+1]=h_m_b_y2[i];

	}
	draw_junx[m_b_cnt*2+1]=b_width;
	draw_juny[m_b_cnt*2+1]=b_height;
	draw_junx.sort(compare);
	draw_juny.sort(compare);
	draw_m_bx[0]=0;
	draw_m_by[0]=0;
	draw_m_bs[0][0]=1;
	k=1;
	for(i=1;i<22;i++){
		o=0;
		for(j=0;j<22;j++){
			o2=0;
			oo2=0;
			if(draw_junx[i]==h_m_b_x1[j]){
				for(k=1;k<22;k++){
					if(draw_juny[k]==h_m_b_y1[j] && h_m_b_y1[j]!=0){

						draw_m_bs[i][k]=1;
						o=1;
						oo2=1;
						
					}else{
						if(draw_juny[k]==h_m_b_y2[j]  && h_m_b_y2[j]!=0){

							draw_m_bs[i][k]=2;
							o=0;
							oo2=2;
							
						}else{
							if(o==1){
								draw_m_bs[i][k]=7;
							}

						}
					}
				}
				
			}else{

			
			
				if(draw_junx[i]==h_m_b_x2[j]){
					for(k=1;k<22;k++){
						if(draw_juny[k]==h_m_b_y1[j]  && h_m_b_y1[j]!=0){

							draw_m_bs[i][k]=4;
						
							o2=1;
							oo2=0;
						}else{
							if(draw_juny[k]==h_m_b_y2[j]  && h_m_b_y2[j]!=0){

								draw_m_bs[i][k]=3;
								oo2=0;
								o2=0;
							}else{
								if(o2==1){
									draw_m_bs[i][k]=8;
								}
							}
						}
					}
				}else{
					if(oo2==1){
						draw_m_bs[i][j]=5;
					}
					if(oo2==2){
						draw_m_bs[i][j]=6;
					}

				}
			}

			
		}
	}
	for(i=1;i<21;i++){
		for(j=1;j<21;j++){
			if(draw_m_bs[i][j]==1){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_bs[k][j]==4  ){
						o=1;
					}
					if(draw_m_bs[k][j]!=1 && draw_m_bs[k][j]!=4 && o==0){
						draw_m_bs[k][j]=5;
						
					}
				}
			}
			if(draw_m_bs[i][j]==2){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_bs[k][j]==3){
						o=1;
					}
					if(draw_m_bs[k][j]!=1 && draw_m_bs[k][j]!=3 && o==0){
						draw_m_bs[k][j]=6;
						
					}
				}
			}
		}
	}

	draw_mb(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_bs,m_b_cnt);

}
function draw_53(geometry12,b_width,b_depth,b_height,b_thickness,h_m_l_x1,h_m_l_y1,h_m_l_x2,h_m_l_y2,m_l_cnt,p_type)
{

var draw_junx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_juny=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

	var i=0;
	var j=0;
	var k=0;
	var o=0;
	var o2=0;
	var oo2=0;
	var z=0;
	var workn=0;
	
	draw_junx[0]=0;
	draw_juny[0]=0;
	for(i=0;i<21;i++){
		for(j=0;j<21;j++){
			draw_m_ls[i][j]=0;
		}
	}
	for (i=0;i<m_l_cnt;i++){
		draw_junx[i+1]=h_m_l_x1[i];
		draw_juny[i+1]=h_m_l_y1[i];

	}
	for (i=0;i<m_l_cnt;i++){
		draw_junx[m_l_cnt+i+1]=h_m_l_x2[i];
		draw_juny[m_l_cnt+i+1]=h_m_l_y2[i];

	}
	draw_junx[m_l_cnt*2+1]=b_depth;
	draw_juny[m_l_cnt*2+1]=b_height;

	draw_junx.sort(compare);
	draw_juny.sort(compare);
	
	
	draw_m_lx[0]=0;
	draw_m_ly[0]=0;
	draw_m_ls[0][0]=1;
	k=1;
	for(i=1;i<22;i++){
		o=0;
		
		for(j=0;j<22;j++){
			o2=0;
			oo2=0;
			if(draw_junx[i]==h_m_l_x1[j]){
				for(k=1;k<22;k++){
					if(draw_juny[k]==h_m_l_y1[j] && h_m_l_y1[j]!=0 ){
						
						draw_m_ls[i][k]=1;
						o=1;
						oo2=1;
						
						
					}else{
						if(draw_juny[k]==h_m_l_y2[j]  && h_m_l_y2[j]!=0 ){
						
							draw_m_ls[i][k]=2;
							o=0;
							oo2=2;
							
							
						}else{
							if(o==1){
								draw_m_ls[i][k]=7;
							}

						}
					}
				}
				
			}else{

			
			
				if(draw_junx[i]==h_m_l_x2[j]){
					for(k=1;k<22;k++){
						if(draw_juny[k]==h_m_l_y1[j]  && h_m_l_y1[j]!=0){
							
							draw_m_ls[i][k]=4;
						
							o2=1;
							oo2=0;
							
							
						}else{
							if(draw_juny[k]==h_m_l_y2[j]  && h_m_l_y2[j]!=0){
								
								draw_m_ls[i][k]=3;
								oo2=0;
								o2=0;
								
							}else{
								if(o2==1){
									draw_m_ls[i][k]=8;
								}
							}
						}
					}
				}else{
					if(oo2==1){
						draw_m_ls[i][j]=5;
					}
					if(oo2==2){
						draw_m_ls[i][j]=6;
					}

				}
			}

			
		}
	}
	for(i=1;i<21;i++){
		for(j=1;j<21;j++){
			if(draw_m_ls[i][j]==1){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_ls[k][j]==4  ){
						o=1;
					}
					if(draw_m_ls[k][j]!=1 && draw_m_ls[k][j]!=4 && o==0){
						draw_m_ls[k][j]=5;
						
					}
				}
			}
			if(draw_m_ls[i][j]==2){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_ls[k][j]==3){
						o=1;
					}
					if(draw_m_ls[k][j]!=1 && draw_m_ls[k][j]!=3 && o==0){
						draw_m_ls[k][j]=6;
						
					}
				}
			}
		}
	}

	draw_ml(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_ls,m_l_cnt);

}
function draw_54(geometry12,b_width,b_depth,b_height,b_thickness,h_m_r_x1,h_m_r_y1,h_m_r_x2,h_m_r_y2,m_r_cnt,p_type)
{
var draw_junx=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_juny=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_junx1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var draw_juny1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	var i=0;
	var j=0;
	var k=0;
	var o=0;
	var o2=0;
	var oo2=0;
	var z=0;
	var workn=0;
	draw_junx[0]=0;
	draw_juny[0]=0;
	for(i=0;i<22;i++){
		for(j=0;j<22;j++){
			draw_m_rs[i][j]=0;
		}
	}
	for (i=0;i<m_r_cnt;i++){
		draw_junx[i+1]=h_m_r_x1[i];
		draw_juny[i+1]=h_m_r_y1[i];

	}
	for (i=0;i<m_r_cnt;i++){
		draw_junx[m_r_cnt+i+1]=h_m_r_x2[i];
		draw_juny[m_r_cnt+i+1]=h_m_r_y2[i];

	}
	draw_junx[m_r_cnt*2+1]=b_depth;
	draw_juny[m_r_cnt*2+1]=b_height;
/*	if (p_type=="Dタイプ"){
		if (b_depth>=200){
			draw_junx[m_r_cnt*2+1+1]=b_depth/2-9/2;
			draw_juny[m_r_cnt*2+1+1]=b_height-13.5-9/2;

			draw_junx[m_r_cnt*2+1+1+1]=b_depth/2-9/2+9;
			draw_juny[m_r_cnt*2+1+1+1]=b_height-13.5-9/2+9;

			draw_junx[m_r_cnt*2+1+1]=b_depth/2-9/2;
			draw_juny[m_r_cnt*2+1+1]=b_height-13.5-9/2;

			draw_junx[m_r_cnt*2+1+1+1]=b_depth/2-9/2+9;
			draw_juny[m_r_cnt*2+1+1+1]=b_height-13.5-9/2+9;

		}else{
			draw_junx[m_r_cnt*2+1+1]=b_depth/2-9/2;
			draw_juny[m_r_cnt*2+1+1]=b_height-13.5-9/2;

			draw_junx[m_r_cnt*2+1+1+1]=b_depth/2-9/2+9;
			draw_juny[m_r_cnt*2+1+1+1]=b_height-13.5-9/2+9;
		}
	}*/
	draw_junx.sort(compare);
	draw_juny.sort(compare);
	draw_m_rx[0]=0;
	draw_m_ry[0]=0;
	draw_m_rs[0][0]=1;
	k=1;
	for(i=1;i<22;i++){
		o=0;
		for(j=0;j<22;j++){
			o2=0;
			oo2=0;
			if(draw_junx[i]==h_m_r_x1[j]){
				for(k=1;k<22;k++){
					if(draw_juny[k]==h_m_r_y1[j] && h_m_r_y1[j]!=0){

						draw_m_rs[i][k]=1;
						o=1;
						oo2=1;
						
					}else{
						if(draw_juny[k]==h_m_r_y2[j]  && h_m_r_y2[j]!=0){

							draw_m_rs[i][k]=2;
							o=0;
							oo2=2;
							
						}else{
							if(o==1){
								draw_m_rs[i][k]=7;
							}

						}
					}
				}
				
			}else{

			
			
				if(draw_junx[i]==h_m_r_x2[j]){
					for(k=1;k<22;k++){
						if(draw_juny[k]==h_m_r_y1[j]  && h_m_r_y1[j]!=0){

							draw_m_rs[i][k]=4;
						
							o2=1;
							oo2=0;
						}else{
							if(draw_juny[k]==h_m_r_y2[j]  && h_m_r_y2[j]!=0){

								draw_m_rs[i][k]=3;
								oo2=0;
								o2=0;
							}else{
								if(o2==1){
									draw_m_rs[i][k]=8;
								}
							}
						}
					}
				}else{
					if(oo2==1){
						draw_m_rs[i][j]=5;
					}
					if(oo2==2){
						draw_m_rs[i][j]=6;
					}

				}
			}

			
		}
	}
	for(i=1;i<21;i++){
		for(j=1;j<21;j++){
			if(draw_m_rs[i][j]==1){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_rs[k][j]==4  ){
						o=1;
					}
					if(draw_m_rs[k][j]!=1 && draw_m_rs[k][j]!=4 && o==0){
						draw_m_rs[k][j]=5;
						
					}
				}
			}
			if(draw_m_rs[i][j]==2){
				o=0;
				for(k=i+1;k<21;k++){
					if(draw_m_rs[k][j]==3){
						o=1;
					}
					if(draw_m_rs[k][j]!=1 && draw_m_rs[k][j]!=3 && o==0){
						draw_m_rs[k][j]=6;
						
					}
				}
			}
		}
	}

	draw_mr(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_rs,m_r_cnt);

}
function compare(a,b){
return a-b;
}
function draw_mu(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_us,m_u_cnt)
{
	var i=0;
	var j=0;
	var lseek=-b_width/2;
	var tseek=-b_depth/2;
	var xd=0;
	var yd=0;
	var cnt=0;
	var df=0;
	if(m_u_cnt==0){
		geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+yd));//1
		geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+b_depth));//2
		geometry65.vertices.push(new THREE.Vector3(lseek+b_width,b_height/2,tseek+b_depth));//3
		geometry65.vertices.push(new THREE.Vector3(lseek+b_width,b_height/2,tseek+yd));//4
		cnt=cnt+1;
	}else{
	for(i=0;i<21;i++){
		df=0;
		xd=draw_junx[i];
		yd=0;
		for(j=0;j<21;j++){
			if(draw_m_us[i][j]==1){
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+yd));//1
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+draw_juny[j]));//2
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+draw_juny[j]));//3
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+yd));//4
				
				
				xd=draw_junx[i];
				yd=draw_juny[j];
				cnt=cnt+1;
				
			}
			if(draw_m_us[i][j]==7){
			
				xd=draw_junx[i];
				yd=draw_juny[j];			
				
			}
			if(draw_m_us[i][j]==2){
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+draw_juny[j]));//1
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+draw_juny[j+1]));//2
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+draw_juny[j+1]));//3
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+draw_juny[j]));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				
			}
			if(df==1){
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				
			}
			if(draw_m_us[i][j]==5){
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+yd));//1
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+draw_juny[j]));//2
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+draw_juny[j]));//3
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+yd));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				df=1;
			}
			if(draw_m_us[i][j]==6){
				xd=draw_junx[i];
				yd=draw_juny[j];
				
				df=0;
			}

			if(yd<draw_juny[21] && j==20){
				if(xd==draw_junx[i+1]){
				}else{
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+yd));//1
				geometry65.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,tseek+draw_juny[21]));//2
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+draw_juny[21]));//3
				geometry65.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2,tseek+yd));//4
				yd=draw_juny[j];
				xd=draw_junx[i+1];
				cnt=cnt+1;
				}
			}
		}
	}
	}
	var i=0;
	for(i=0;i<cnt;i++){
			
		geometry65.faces.push(new THREE.Face3(1+i*4+kk_cntu, 2+i*4+kk_cntu, 0+i*4+kk_cntu));
		geometry65.faces.push(new THREE.Face3(2+i*4+kk_cntu, 3+i*4+kk_cntu, 0+i*4+kk_cntu));
		
	}     
	kk_cntu=kk_cntu+cnt*4;
}
function draw_mf(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_fs,m_f_cnt)
{
	var i=0;
	var j=0;
	var lseek=-b_width/2;
	var tseek=b_height/2;
	var xd=0;
	var yd=0;
	var cnt=0;
	var df=0;
	if(m_f_cnt==0){
		geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,b_depth/2));//1
		geometry12.vertices.push(new THREE.Vector3(lseek+xd,-b_height/2,b_depth/2));//2
		geometry12.vertices.push(new THREE.Vector3(lseek+b_width,-b_height/2,b_depth/2));//3
		geometry12.vertices.push(new THREE.Vector3(lseek+b_width,b_height/2,b_depth/2));//4
		cnt=cnt+1;
	}else{
	for(i=0;i<21;i++){
		df=0;
		xd=draw_junx[i];
		yd=0;
		for(j=0;j<21;j++){
			if(draw_m_fs[i][j]==1){
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-yd,b_depth/2));//1
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j],b_depth/2));//2
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j],b_depth/2));//3
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-yd,b_depth/2));//4
				
				
				xd=draw_junx[i];
				yd=draw_juny[j];
				cnt=cnt+1;
				
			}
			if(draw_m_fs[i][j]==7){
			
				xd=draw_junx[i];
				yd=draw_juny[j];			
				
			}
			if(draw_m_fs[i][j]==2){
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j],b_depth/2));//1
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j+1],b_depth/2));//2
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j+1],b_depth/2));//3
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j],b_depth/2));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				
			}
			if(df==1){
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				
			}
			if(draw_m_fs[i][j]==5){
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-yd,b_depth/2));//1
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j],b_depth/2));//2
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j],b_depth/2));//3
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-yd,b_depth/2));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				df=1;
			}
			if(draw_m_fs[i][j]==6){
				xd=draw_junx[i];
				yd=draw_juny[j];
				
				df=0;
			}

			if(yd<draw_juny[21] && j==20){
				if(xd==draw_junx[i+1]){
				}else{
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-yd,b_depth/2));//1
				geometry12.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[21],b_depth/2));//2
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[21],b_depth/2));//3
				geometry12.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-yd,b_depth/2));//4
				yd=draw_juny[j];
				xd=draw_junx[i+1];
				cnt=cnt+1;
				}
			}
		}
	}
	}
	var i=0;
	for(i=0;i<cnt;i++){
			
		geometry12.faces.push(new THREE.Face3(1+i*4+kk_cnt, 2+i*4+kk_cnt, 0+i*4+kk_cnt));
		geometry12.faces.push(new THREE.Face3(2+i*4+kk_cnt, 3+i*4+kk_cnt, 0+i*4+kk_cnt));
		
	}     
	kk_cnt=kk_cnt+cnt*4;
}
function draw_mb(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_bs,m_b_cnt)
{
	var i=0;
	var j=0;
	var lseek=-b_width/2;
	var tseek=-b_height/2;
	var xd=0;
	var yd=0;
	var cnt=0;
	var df=0;
	if(m_b_cnt==0){
		geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2,-b_depth/2));//1
		geometry63.vertices.push(new THREE.Vector3(lseek+xd,-b_height/2,-b_depth/2));//2
		geometry63.vertices.push(new THREE.Vector3(lseek+b_width,-b_height/2,-b_depth/2));//3
		geometry63.vertices.push(new THREE.Vector3(lseek+b_width,b_height/2,-b_depth/2));//4
		cnt=cnt+1;
	}else{
	for(i=0;i<21;i++){
		df=0;
		xd=draw_junx[i];
		yd=0;
		for(j=0;j<21;j++){
			if(draw_m_bs[i][j]==1){
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-yd,-b_depth/2));//1
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j],-b_depth/2));//2
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j],-b_depth/2));//3
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-yd,-b_depth/2));//4
				
				
				xd=draw_junx[i];
				yd=draw_juny[j];
				cnt=cnt+1;
				
			}
			if(draw_m_bs[i][j]==7){
			
				xd=draw_junx[i];
				yd=draw_juny[j];			
				
			}
			if(draw_m_bs[i][j]==2){
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j],-b_depth/2));//1
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j+1],-b_depth/2));//2
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j+1],-b_depth/2));//3
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j],-b_depth/2));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				
			}
			if(df==1){
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				
			}
			if(draw_m_bs[i][j]==5){
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-yd,-b_depth/2));//1
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[j],-b_depth/2));//2
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[j],-b_depth/2));//3
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-yd,-b_depth/2));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				df=1;
			}
			if(draw_m_bs[i][j]==6){
				xd=draw_junx[i];
				yd=draw_juny[j];
				
				df=0;
			}

			if(yd<draw_juny[21] && j==20){
				if(xd==draw_junx[i+1]){
				}else{
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-yd,-b_depth/2));//1
				geometry63.vertices.push(new THREE.Vector3(lseek+xd,b_height/2-draw_juny[21],-b_depth/2));//2
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-draw_juny[21],-b_depth/2));//3
				geometry63.vertices.push(new THREE.Vector3(lseek+draw_junx[i+1],b_height/2-yd,-b_depth/2));//4
				yd=draw_juny[j];
				xd=draw_junx[i+1];
				cnt=cnt+1;
				}
			}
		}
	}
	}

	var i=0;
	for(i=0;i<cnt;i++){
			
		geometry63.faces.push(new THREE.Face3(1+i*4+kk_cntb, 2+i*4+kk_cntb, 0+i*4+kk_cntb));
		geometry63.faces.push(new THREE.Face3(2+i*4+kk_cntb, 3+i*4+kk_cntb, 0+i*4+kk_cntb));
		
	}     
	kk_cntb=kk_cntb+cnt*4;
}
function draw_ml(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_ls,m_l_cnt)
{
	var i=0;
	var j=0;
	var lseek=-b_width/2;
	var tseek=-b_depth/2;
	var xd=0;
	var yd=0;
	var cnt=0;
	var df=0;
/*	if (p_type=="Dタイプ"){
		if (b_depth>=200){
			m_l_cnt=m_l_cnt+4
		}else{
			m_l_cnt=m_l_cnt+2
		}
	}*/
	if(m_l_cnt==0){
		geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,-b_depth/2));//1
		geometry62.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,-b_depth/2));//2
		geometry62.vertices.push(new THREE.Vector3(-b_width/2,-b_height/2,b_depth/2));//3
		geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2,b_depth/2));//4
		cnt=cnt+1;
	}else{
	for(i=0;i<21;i++){
		df=0;
		xd=draw_junx[i];
		yd=0;
		for(j=0;j<21;j++){
			if(draw_m_ls[i][j]==1){
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-yd,tseek+xd));//1
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j],tseek+xd));//2
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j],tseek+draw_junx[i+1]));//3
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-yd,tseek+draw_junx[i+1]));//4
				
				
				xd=draw_junx[i];
				yd=draw_juny[j];
				cnt=cnt+1;
				
			}
			if(draw_m_ls[i][j]==7){
			
				xd=draw_junx[i];
				yd=draw_juny[j];			
				
			}
			if(draw_m_ls[i][j]==2){
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j],tseek+xd));//1
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j+1],tseek+xd));//2
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j+1],tseek+draw_junx[i+1]));//3
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j],tseek+draw_junx[i+1]));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				
			}
			if(df==1){
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				
			}
			if(draw_m_ls[i][j]==5){
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-yd,tseek+xd));//1
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j],tseek+xd));//2
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[j],tseek+draw_junx[i+1]));//3
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-yd,tseek+draw_junx[i+1]));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				df=1;
			}
			if(draw_m_ls[i][j]==6){
				xd=draw_junx[i];
				yd=draw_juny[j];
				
				df=0;
			}

			if(yd<draw_juny[21] && j==20){
				if(xd==draw_junx[i+1]){
				}else{
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-yd,tseek+xd));//1
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[21],tseek+xd));//2
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-draw_juny[21],tseek+draw_junx[i+1]));//3
				geometry62.vertices.push(new THREE.Vector3(-b_width/2,b_height/2-yd,tseek+draw_junx[i+1]));//4
				yd=draw_juny[j];
				xd=draw_junx[i+1];
				cnt=cnt+1;
				}
			}
		}
	}
	}
	//var i=0;
	for(i=0;i<cnt;i++){
	//for(i=kk_cnt;i<cnt+kk_cntl;i++){	
			
	//	geometry62.faces.push(new THREE.Face3(1+i*4, 2+i*4, 0+i*4));
	//	geometry62.faces.push(new THREE.Face3(2+i*4, 3+i*4, 0+i*4));

		geometry62.faces.push(new THREE.Face3(0+i*4+kk_cntl, 2+i*4+kk_cntl, 1+i*4+kk_cntl));
		geometry62.faces.push(new THREE.Face3(0+i*4+kk_cntl, 3+i*4+kk_cntl, 2+i*4+kk_cntl));
		
	}     
	kk_cntl=kk_cntl+cnt*4;
}
function draw_mr(geometry12,b_width,b_depth,b_height,b_thickness,draw_junx,draw_juny,draw_m_rs,m_r_cnt)
{
	var i=0;
	var j=0;
	var lseek=-b_width/2;
	var tseek=-b_depth/2;
	var xd=0;
	var yd=0;
	var cnt=0;
	var df=0;
	var k=0;
/*	if (p_type=="Dタイプ"){
		if (b_depth>=200){
			m_r_cnt=m_r_cnt+4
		}else{
			m_r_cnt=m_r_cnt+2
		}
	}*/
	if(m_r_cnt==0){
		geometry64.vertices.push(new THREE.Vector3(b_width/2,b_height/2,-b_depth/2));//1
		geometry64.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,-b_depth/2));//2
		geometry64.vertices.push(new THREE.Vector3(b_width/2,-b_height/2,b_depth/2));//3
		geometry64.vertices.push(new THREE.Vector3(b_width/2,b_height/2,b_depth/2));//4
		cnt=cnt+1;
	}else{
	for(k=0;k<1;k++){
	for(i=0;i<21;i++){
		df=0;
		xd=draw_junx[i];
		yd=0;
		for(j=0;j<21;j++){
			if(draw_m_rs[i][j]==1){
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-yd,tseek+xd));//1
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j],tseek+xd));//2
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j],tseek+draw_junx[i+1]));//3
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-yd,tseek+draw_junx[i+1]));//4
				
				
				xd=draw_junx[i];
				yd=draw_juny[j];
				cnt=cnt+1;
				
			}
			if(draw_m_rs[i][j]==7){
			
				xd=draw_junx[i];
				yd=draw_juny[j];			
				
			}
			if(draw_m_rs[i][j]==2){
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j],tseek+xd));//1
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j+1],tseek+xd));//2
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j+1],tseek+draw_junx[i+1]));//3
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j],tseek+draw_junx[i+1]));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				
			}
			if(df==1){
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				
			}
			if(draw_m_rs[i][j]==5){
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-yd,tseek+xd));//1
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j],tseek+xd));//2
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[j],tseek+draw_junx[i+1]));//3
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-yd,tseek+draw_junx[i+1]));//4
				xd=draw_junx[i];
				yd=draw_juny[j+1];
				cnt=cnt+1;
				df=1;
			}
			if(draw_m_rs[i][j]==6){
				xd=draw_junx[i];
				yd=draw_juny[j];
				
				df=0;
			}

			if(yd<draw_juny[21] && j==20){
				if(xd==draw_junx[i+1]){
				}else{
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-yd,tseek+xd));//1
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[21],tseek+xd));//2
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-draw_juny[21],tseek+draw_junx[i+1]));//3
				geometry64.vertices.push(new THREE.Vector3(b_width/2+k*0.01,b_height/2-yd,tseek+draw_junx[i+1]));//4
				yd=draw_juny[j];
				xd=draw_junx[i+1];
				cnt=cnt+1;
				}
			}
		}
	}
	}
	}
	var i=0;
	for(i=0;i<cnt;i++){
			
		geometry64.faces.push(new THREE.Face3(1+i*4+kk_cntr, 2+i*4+kk_cntr, 0+i*4+kk_cntr));
		geometry64.faces.push(new THREE.Face3(2+i*4+kk_cntr, 3+i*4+kk_cntr, 0+i*4+kk_cntr));
		
	}    
	
	/*for(k=i;k<cnt*2;k++){
			
		geometry64.faces.push(new THREE.Face3(1+k*4+kk_cntr, 2+k*4+kk_cntr, 0+k*4+kk_cntr));
		geometry64.faces.push(new THREE.Face3(2+k*4+kk_cntr, 3+k*4+kk_cntr, 0+k*4+kk_cntr));
		
	}  */  
	kk_cntr=kk_cntr+cnt*4*2;
}
function draw_dn(geometry70,geometry60,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)
{
	
var p=0;

var k=0;
var i=0;
	var x=b_width;
	var y=b_depth;
	var h=b_height;
	var h2=p_height;
	var t1=b_thickness;
	var t2=p_thickness;
	var r1=0;
	var r2=0;
	var r3=0;
	var t_n=2.3;

var x1=0;
var y1=0;
var z1=0;
var x_1=0;
var y_1=0;
var z_1=0;
var s_cnt=0;

	if (y>=200){
		p=2;
		s_cnt=1;
	}else{
		p=1;
		r1=4;
		r2=9;
		r3=4;
		x1=-x/2+t_n;
		y1=0;
		z1=-b_height/2+13.5;
		s_cnt=0;
	}
	for(k=0;k<p;k++){
		
		if(k==0){
			r1=4;
			r2=9;
			r3=4;
			x1=-x/2+t_n;
			if(p==1){
				y1=0;
			}else{
				y1=-y/4;
			}
			z1=-b_height/2+13.5;
		}
		if(k==1){
			r1=4;
			r2=9;
			r3=4;
			x1=-x/2+t_n;
			y1=y/4;
			z1=-b_height/2+13.5;
		}
		if(k==3){
			r1=4;
			r2=9;
			r3=4;
			x1=-x/2+t_n;
			y1=0;
			z1=-b_height/2+13.5;
		}
		for (i=0;i<180;i=i+1){			
			x_1=x1;
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			j=j+1;
			x_1=x1;
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			
			j=j+1;
			x_1=x1-t_n;
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));

			j=j+1;
			x_1=x1-t_n;
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1;
		}
		for (i=180;i>0;i=i-1){
			
			x_1=x1;
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			j=j+1;
			x_1=x1;
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			
			j=j+1;
			x_1=x1-t_n;
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1;
			x_1=x1-t_n;
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1;
		}
		for (i=0;i<180;i=i+1){
			x_1=x1;
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			j=j+1;
			x_1=x1;
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			j=j+1;
			x_1=x1-t_n;
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1;
			
			x_1=x1-t_n;
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1;

			
		}
		for (i=179;i>=0;i=i-1){
			x_1=x1;
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			j=j+1;
			x_1=x1;
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));

			geometry71.vertices.push(new THREE.Vector3(x_1+t1-t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1-t_n+0.5,z_1,y_1));
			j=j+1;
			x_1=x1-t_n;
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1
			
			x_1=x1-t_n;
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry71.vertices.push(new THREE.Vector3(x_1+t_n,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1+t1+0.5+t2+0.5,z_1,y_1));
			j=j+1;
			
		}
	}
	
	for(k=0;k<=s_cnt;k++){
		for (i=0+k*360;i<360+360*k;i=i+1){
		
		/*	geometry70.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry70.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry70.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		*/	
		}
		for (i=0+k*360;i<360+360*k;i=i+1){
		
		/*	geometry71.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry71.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry71.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry71.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry71.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry71.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry71.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry71.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry71.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry71.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry71.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry71.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		*/	
		}
		for (i=0+k*360;i<360+360*k;i=i+1){
		/*
			geometry72.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry72.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry72.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		*/	
		}
	}

}
function draw_dnr(geometry73,geometry74,b_width,b_depth,p_height,p_thickness,p_type,p_color,b_height,b_thickness)
{
	
var p=0;

var k=0;
var i=0;
	var x=b_width;
	var y=b_depth;
	var h=b_height;
	var h2=p_height;
	var t1=b_thickness;
	var t2=p_thickness;
	var r1=0;
	var r2=0;
	var r3=0;
	var t_n=2.3;

var x1=0;
var y1=0;
var z1=0;
var x_1=0;
var y_1=0;
var z_1=0;
var s_cnt=0;

	if (y>=200){
		p=2;
		s_cnt=1;
	}else{
		p=1;
		r1=4;
		r2=9;
		r3=4;
		x1=x/2-t_n;
		y1=0;
		z1=-b_height/2+13.5;
		s_cnt=0;
	}
	for(k=0;k<p;k++){
		
		if(k==0){
			r1=9;
			r2=4;
			r3=4;
			x1=x/2;
			if(p==1){
				y1=0;
			}else{
				y1=-y/4;
			}
			z1=-b_height/2+13.5;
		}
		if(k==1){
			r1=9;
			r2=4;
			r3=4;
			x1=x/2;
			y1=y/4;
			z1=-b_height/2+13.5;
		}
		
		for (i=0;i<180;i=i+1){			
			x_1=x1;
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			if(i==0){
				geometry77.vertices.push(new THREE.Vector3(x1,z1-r1/2,y1));
					
			}
			geometry77.vertices.push(new THREE.Vector3(x_1,z_1,y_1));	
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));

			j=j+1;
			x_1=x1;
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			
			j=j+1;
			x_1=x1-t_n;
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));

			j=j+1;
			x_1=x1-t_n;
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));

			j=j+1;
		}
		for (i=180;i>0;i=i-1){
			
			x_1=x1;
			y_1=y1-r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			if(i==180){
				geometry77.vertices.push(new THREE.Vector3(x1,z1+r1/2,y1-r1/2));
					
			}
			geometry77.vertices.push(new THREE.Vector3(x_1,z_1,y_1));	
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));

			j=j+1;
			x_1=x1;
			y_1=y1-(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));

			
			j=j+1;
			x_1=x1-t_n;
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1-(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));

			j=j+1;
			x_1=x1-t_n;
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1-r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));


			j=j+1;
		}
		for (i=0;i<180;i=i+1){
			x_1=x1;
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			if(i==0){
				geometry77.vertices.push(new THREE.Vector3(x1,z1+r1/2,y1+r1/2));
						
			}
			geometry77.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));


			j=j+1;
			x_1=x1;
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));


			j=j+1;
			x_1=x1-t_n;
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));


			j=j+1;
			
			x_1=x1-t_n;
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1+r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));


			j=j+1;

			
		}
		for (i=179;i>=0;i=i-1){
			x_1=x1;
			y_1=y1+r1/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r1/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			if(i==179){
				geometry77.vertices.push(new THREE.Vector3(x1,z1-r1/2,y1+r1/2));
					
			}
			geometry77.vertices.push(new THREE.Vector3(x_1,z_1,y_1));	
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));

			j=j+1;
			x_1=x1;
			y_1=y1+(r1/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r1/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));

			geometry74.vertices.push(new THREE.Vector3(x_1-t_n,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x_1-t1-0.5,z_1,y_1));


			j=j+1;
			x_1=x1-t_n;
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));

			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1+(r2/2+0.5)*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-(r2/2+0.5)*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));


			j=j+1
			
			x_1=x1-t_n;
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry73.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			geometry70.vertices.push(new THREE.Vector3(x_1,z_1,y_1));
			
			y_1=y1+r2/2*Math.sin(0.5*i*(Math.PI/180));
			z_1=z1-r2/2*Math.cos(0.5*i*(Math.PI/180));
			geometry74.vertices.push(new THREE.Vector3(x/2-t1,z_1,y_1));
			geometry75.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));
			geometry72.vertices.push(new THREE.Vector3(x/2-t1-0.5-t2-0.5,z_1,y_1));

			j=j+1;
			
		}
	}

		
		for (i=0;i<=360;i=i+1){
			geometry70.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry70.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry70.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
			
			geometry72.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry72.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry72.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		}
		for (i=361;i<=720;i=i+1){
			geometry70.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry70.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry70.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));

			geometry72.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry72.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry72.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		}
		for (i=721;i<=1080;i=i+1){
			geometry70.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry70.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry70.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
			
			geometry72.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry72.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry72.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		}
		for (i=1081;i<1440;i=i+1){
			geometry70.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry70.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry70.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry70.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry70.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry70.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));

			geometry72.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry72.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry72.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry72.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry72.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry72.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		}
	
	
	for(k=0;k<=s_cnt;k++){
		for (i=0+k*360;i<360+360*k;i=i+1){
		/*
			geometry73.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry73.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry73.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry73.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry73.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry73.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry73.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry73.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry73.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry73.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry73.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry73.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		*/
		/*	geometry74.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry74.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry74.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry74.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry74.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry74.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry74.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry74.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry74.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry74.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry74.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry74.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
			
			geometry75.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry75.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry75.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry75.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry75.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry75.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry75.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry75.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry75.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry75.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry75.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry75.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		*/	
		}
	}
//	for(k=0;k<=s_cnt;k++){
	//	for (i=0+k*364;i<364+364*k;i=i+1){
		for(i=0;i<90;i++){
			geometry77.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
			geometry77.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
			geometry77.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
			geometry77.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
			geometry77.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
			geometry77.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
			geometry77.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
			geometry77.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
			geometry77.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry77.faces.push(new THREE.Face3(2+i*8, 5+i*8,6+i*8));
			geometry77.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
			geometry77.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
		}
	//}
	
}

function draw_su(b_width,b_depth,b_height,b_thickness,f_f,f_b,f_l,f_r,p_height,p_thickness,p_type)
{
	var x=0;
	var y=0;
	var h=0;
	var f=0;
	var i=0;
//f:0上、1前、2背、3左、4右、5左45°、6右45°
/*		draw_1(0,-b_width/2,-b_depth/2,b_height/2+10);
		draw_2(0,-b_width/2+2,-b_depth/2,b_height/2+10);
		draw_3(0,-b_width/2+2+4,-b_depth/2,b_height/2+10);
		draw_4(0,-b_width/2+2+4+4,-b_depth/2,b_height/2+10);
		draw_5(0,-b_width/2+2+4+4+4,-b_depth/2,b_height/2+10);
		draw_6(0,-b_width/2+2+4+4+4+4,-b_depth/2,b_height/2+10);
		draw_7(0,-b_width/2+2+4+4+4+4+4,-b_depth/2,b_height/2+10);
		draw_8(0,-b_width/2+2+4+4+4+4+4+4,-b_depth/2,b_height/2+10);
		draw_9(0,-b_width/2+2+4+4+4+4+4+4+4,-b_depth/2,b_height/2+10);
		draw_0(0,-b_width/2+2+4+4+4+4+4+4+4+4,-b_depth/2,b_height/2+10);
		draw_dod(0,-b_width/2+2+4+4+4+4+4+4+4+4+4,-b_depth/2,b_height/2+10);
		draw_m(0,-b_width/2+2+4+4+4+4+4+4+4+4+4+2,-b_depth/2,b_height/2+10);
		draw_fai(0,-b_width/2+2+4+4+4+4+4+4+4+4+4+2+4,-b_depth/2,b_height/2+10);
		draw_r(0,-b_width/2+2+4+4+4+4+4+4+4+4+4+2+4+4,-b_depth/2,b_height/2+10);

		draw_sen1(0,-b_width/2+20,-b_depth/2+20,b_height/2+20,0,200,0)
		draw_sen1(1,-b_width/2+20,b_depth/2+20,b_height/2-10,0,0,-200)

		draw_sen1(2,b_width/2-20,-b_depth/2-20,b_height/2-10,0,0,-200)
		draw_sen1(3,-b_width/2-20,-b_depth/2+20,b_height/2-10,0,0,-200)
		draw_sen1(4,b_width/2+20,b_depth/2-20,b_height/2-10,0,0,-200)


		draw_1(1,-b_width/2,b_depth/2+10,b_height/2);
		draw_2(1,-b_width/2+4,b_depth/2+10,b_height/2);
		draw_3(1,-b_width/2+4+4,b_depth/2+10,b_height/2);
		draw_4(1,-b_width/2+4+4+4,b_depth/2+10,b_height/2);
		draw_5(1,-b_width/2+4+4+4+4,b_depth/2+10,b_height/2);
		draw_6(1,-b_width/2+4+4+4+4+4,b_depth/2+10,b_height/2);
		draw_7(1,-b_width/2+4+4+4+4+4+4,b_depth/2+10,b_height/2);
		draw_8(1,-b_width/2+4+4+4+4+4+4+4,b_depth/2+10,b_height/2);
		draw_9(1,-b_width/2+4+4+4+4+4+4+4+4,b_depth/2+10,b_height/2);
		draw_0(1,-b_width/2+4+4+4+4+4+4+4+4+4,b_depth/2+10,b_height/2);
		draw_dod(1,-b_width/2+4+4+4+4+4+4+4+4+4+4,b_depth/2+10,b_height/2);
		draw_m(1,-b_width/2+4+4+4+4+4+4+4+4+4+4+2,b_depth/2+10,b_height/2);
		draw_fai(1,-b_width/2+4+4+4+4+4+4+4+4+4+4+2+4,b_depth/2+10,b_height/2);
		draw_r(1,-b_width/2+4+4+4+4+4+4+4+4+4+4+2+4+4,b_depth/2+10,b_height/2);
		draw_1(2,b_width/2,-b_depth/2-10,b_height/2);
		draw_2(2,b_width/2-4,-b_depth/2-10,b_height/2);
		draw_3(2,b_width/2-4-4,-b_depth/2-10,b_height/2);
		draw_4(2,b_width/2-4-4-4,-b_depth/2-10,b_height/2);
		draw_5(2,b_width/2-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_6(2,b_width/2-4-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_7(2,b_width/2-4-4-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_8(2,b_width/2-4-4-4-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_9(2,b_width/2-4-4-4-4-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_0(2,b_width/2-4-4-4-4-4-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_dod(2,b_width/2-4-4-4-4-4-4-4-4-4-4,-b_depth/2-10,b_height/2);
		draw_m(2,b_width/2-4-4-4-4-4-4-4-4-4-4-2,-b_depth/2-10,b_height/2);
		draw_fai(2,b_width/2-4-4-4-4-4-4-4-4-4-4-2-4,-b_depth/2-10,b_height/2);
		draw_r(2,b_width/2-4-4-4-4-4-4-4-4-4-4-2-4-4,-b_depth/2-10,b_height/2);
		draw_1(3,-b_width/2-10,-b_depth/2,b_height/2);
		draw_2(3,-b_width/2-10,-b_depth/2+4,b_height/2);
		draw_3(3,-b_width/2-10,-b_depth/2+4+4,b_height/2);
		draw_4(3,-b_width/2-10,-b_depth/2+4+4+4,b_height/2);
		draw_5(3,-b_width/2-10,-b_depth/2+4+4+4+4,b_height/2);
		draw_6(3,-b_width/2-10,-b_depth/2+4+4+4+4+4,b_height/2);
		draw_7(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4,b_height/2);
		draw_8(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4,b_height/2);
		draw_9(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4,b_height/2);
		draw_0(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4+4,b_height/2);
		draw_dod(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4+4+4,b_height/2);
		draw_1(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4+4+4+2,b_height/2);
		draw_m(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4+4+4+2+2,b_height/2);
		draw_fai(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4+4+4+2+2+4,b_height/2);
		draw_r(3,-b_width/2-10,-b_depth/2+4+4+4+4+4+4+4+4+4+4+2+2+4+4,b_height/2);
		draw_1(4,b_width/2+10,b_depth/2,b_height/2);
		draw_2(4,b_width/2+10,b_depth/2-4,b_height/2);
		draw_3(4,b_width/2+10,b_depth/2-4-4,b_height/2);
		draw_4(4,b_width/2+10,b_depth/2-4-4-4,b_height/2);
		draw_5(4,b_width/2+10,b_depth/2-4-4-4-4,b_height/2);
		draw_6(4,b_width/2+10,b_depth/2-4-4-4-4-4,b_height/2);
		draw_7(4,b_width/2+10,b_depth/2-4-4-4-4-4-4,b_height/2);
		draw_8(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4,b_height/2);
		draw_9(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4-4,b_height/2);
		draw_0(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4-4-4,b_height/2);
		draw_dod(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4-4-4-4,b_height/2);
		draw_m(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4-4-4-4-2,b_height/2);
		draw_fai(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4-4-4-4-2-4,b_height/2);
		draw_r(4,b_width/2+10,b_depth/2-4-4-4-4-4-4-4-4-4-4-2-4-4,b_height/2);
*/

/*		draw_sen2(0,-b_width/2+20,-b_depth/2+20,b_height/2+20,200,0,0)
		draw_sen2(1,-b_width/2+20,b_depth/2+20,b_height/2-10,200,0,0)

		draw_sen2(2,b_width/2-20,-b_depth/2-20,b_height/2-10,200,0,0)
		draw_sen2(3,-b_width/2-20,-b_depth/2+20,b_height/2-10,0,200,0)
		draw_sen2(4,b_width/2+20,b_depth/2-20,b_height/2-10,0,200,0)

*/
//	draw_hs();
	draw_gaikei();
}
function draw_hs()
{
	var i=0;
	var a;
	var s;
	s=b_width.toString();
	draw_sen1(1,-b_width/2,b_depth/2,-b_height/2,0,0,-40)
	draw_sen1(1,b_width/2,b_depth/2,-b_height/2,0,0,-40)
	draw_sen2(1,-b_width/2+1,b_depth/2,-b_height/2-35,b_width-2,0,0)
	
	

	draw_sen3(1,-110,b_depth/2-10,-20,0,50,0);
	draw_sen3(1,-b_width/2,b_depth/2,-20,0,40,0);
	draw_sen3(1,-110,b_depth/2,-100,0,40,0);
	
	draw_sen3(1,-110+4.242642,b_depth/2,-20+4.242642,0,40,0);
		
	draw_sen3(1,-110-4.242642,b_depth/2,-20-4.242642,0,40,0);
	draw_tr(1,-110-4.242642,b_depth/2+35,-20-4.242642);
	draw_sen2(1,-b_width/2,b_depth/2+35,-20,40,0,0)
	draw_sen1(1,-110,b_depth/2+35,-20,0,0,-80)
	
	draw_sentr(1,-110+14.242642,b_depth/2+35,-20+14.242642,0,0,-13.242642*2);
	
	draw_sen2(1,-110+14.242642,b_depth/2+35,-20+14.242642,10,0,0)

	draw_dl(1,-110+4.242642,b_depth/2+35,-20+4.242642);
	draw_fai(1,-110+14.242642,b_depth/2+35,-20+14.242642+8);	
	draw_1(1,-110+14.242642+4,b_depth/2+35,-20+14.242642+8);
	draw_2(1,-110+14.242642+3+4,b_depth/2+35,-20+14.242642+8);

	draw_top(1,-110,b_depth/2+35,-20)
	draw_down(1,-110,b_depth/2+35,-100)

	draw_4(1,-b_width/2+20,b_depth/2+35,-13);
	draw_0(1,-b_width/2+20+4,b_depth/2+35,-13);
	
	draw_8(1,-b_width/2+45,b_depth/2+35,-60);
	draw_0(1,-b_width/2+45+4,b_depth/2+35,-60);
	
	for(i=0;i<s.length;i++){
		a=s.substring(i,i+1);
		if(a==0){
			draw_0(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==1){
			draw_1(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==2){
			draw_2(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==3){
			draw_3(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==4){
			draw_4(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==5){
			draw_5(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==6){
			draw_6(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==7){
			draw_7(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==8){
			draw_8(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a==9){
			draw_9(1,i*4,b_depth/2,-b_height/2-28);
		}
		if(a=="."){
			draw_dod(1,i*4,b_depth/2,-b_height/2-28);
		}

	}


	draw_right(1,b_width/2,b_depth/2,-b_height/2-35)
	draw_left(1,-b_width/2,b_depth/2,-b_height/2-35)
}

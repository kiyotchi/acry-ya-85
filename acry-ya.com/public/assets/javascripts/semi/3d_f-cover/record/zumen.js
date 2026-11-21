var h_zahyou_x =new Array(200);
var h_zahyou_y =new Array(200);
var h_zahyou_z =new Array(200);

var h_c_x =new Array(1440);
var h_c_y =new Array(1440);
var h_c_z =new Array(1440);
var i=0;
var j=0;

function h_init1111(x,y,h,t)
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
     for (i=0;i<=160;i++){
   		//############################# 上 #####################################
 	  	if (i==0 || i==1 || i==4 || i==5 || i==8 || i==9 || i==12 || i== 13 || i==16 || i==17 || i==20 || i==21 || i==18 || i==19 || i==22 || i==23){
   			if (i==18 || i==19 || i==22 || i==23){
   				h_zahyou_x[i]=-x/2+0.1;
   			}else{
   				h_zahyou_x[i]=-x/2;
   			}
   		}
   		if (i==2 || i==3 || i==6 || i==7 || i==10 || i==11 || i==14 || i== 15 || i==24 || i==25 || i==26 || i==27 || i==28 || i==29 || i==30 || i==31){
   			if (i==24 || i==25 || i==28 || i==29){
   				h_zahyou_x[i]=x/2-0.1;
   			}else{
   				h_zahyou_x[i]=x/2;
   			}
   		}
   		if (i==0 || i==1 || i==2 || i==3 || i==4 || i==5 || i==6 || i== 7 || i==16 || i==17 || i==18 || i==19 || i==24 || i==25 || i==26 || i==27){
   			if (i==4 || i==5 || i==6 || i==7){
   				h_zahyou_y[i]=y/2-0.1;
   			}else{
   				h_zahyou_y[i]=y/2;
   			}
   		}
   		if (i==8 || i==9 || i==10 || i==11 || i==12 || i==13 || i==14 || i==15 || i==20 || i==21 || i==22 || i==23 || i==28 || i==29 || i==30 || i==31){
   			if (i==8 || i==9 || i==10 || i==11){
   				h_zahyou_y[i]=-y/2+0.1;
   			}else{
   				h_zahyou_y[i]=-y/2;
   			}
   		}
   		if (i==0 || i==3 || i==4 || i==7 || i==8 || i==11 || i==12 || i==15 || i==16 || i==19 || i==20 || i==23 || i==24 || i==27 || i==28 || i==31){
   			h_zahyou_z[i]=h/2;
   		}
   		if (i==1 || i==2 || i==5 || i==6 || i==9 || i==10 || i==13 || i==14 || i==17 || i==18 || i==21 || i==22 || i==25 || i==26 || i==29 || i==30){
   			h_zahyou_z[i]=h/2-t;
   		}
   		
   		//############################# 前 #####################################
   		if (i==32 || i==33 || i==36 || i==37 || i==40 || i==41 || i==44 || i== 45 || i==48 || i==49 || i==50 || i==51 || i==52 || i==53 || i==54 || i==55){
   			if (i==50 || i==51 || i==54 || i==55){
   				h_zahyou_x[i]=-x/2+0.1;
   			}else{
   				h_zahyou_x[i]=-x/2;
   			}
   		}
   		if (i==34 || i==35 || i==38 || i== 39 || i==42 || i==43 || i==46 || i==47 ||  i==56 || i==57 || i==58 || i==59 || i==60 || i==61 || i==62 || i==63){
   			if (i==56 || i==57 || i==60 || i==61){
   				h_zahyou_x[i]=x/2-0.1;
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
   				h_zahyou_z[i]=h/2-0.1;
   			}else{
   				h_zahyou_z[i]=h/2;
   			}
   		}
   		if (i==40 || i==41 || i==42 || i==43 || i==44 || i==45 || i==46 || i==47 || i==49 || i==50 || i==53 || i==54 || i==57 || i==58 || i==61 || i==62){
   			if (i==56 || i==59 || i==60 || i==63){
   				h_zahyou_z[i]=-h/2+0.1;
   			}else{
   				h_zahyou_z[i]=-h/2;
   			}
   		}
   		
  		//############################# 背 #####################################
   		if (i==32+32 || i==33+32 || i==36+32 || i==37+32 || i==40+32 || i==41+32 || i==44+32 || i== 45+32 || i==48+32 || i==49+32 || i==50+32 || i==51+32 || i==52+32 || i==53+32 || i==54+32 || i==55+32){
   			if (i==50+32 || i==51+32 || i==54+32 || i==55+32){
   				h_zahyou_x[i]=-x/2+0.1;
   			}else{
   				h_zahyou_x[i]=-x/2;
   			}
   		}
   		if (i==34+32 || i==35+32 || i==38+32 || i== 39+32 || i==42+32 || i==43+32 || i==46+32 || i==47+32 ||  i==56+32 || i==57+32 || i==58+32 || i==59+32 || i==60+32 || i==61+32 || i==62+32 || i==63+32){
   			if (i==56+32 || i==57+32 || i==60+32 || i==61+32){
   				h_zahyou_x[i]=x/2-0.1;
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
   				h_zahyou_z[i]=h/2-0.1;
   			}else{
   				h_zahyou_z[i]=h/2;
   			}
   		}
   		if (i==40+32 || i==41+32 || i==42+32 || i==43+32 || i==44+32 || i==45+32 || i==46+32 || i==47+32 || i==49+32 || i==50+32 || i==53+32 || i==54+32 || i==57+32 || i==58+32 || i==61+32 || i==62+32){
   			if (i==56+32 || i==59+32 || i==60+32 || i==63+32){
   				h_zahyou_z[i]=-h/2+0.1;
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
   				h_zahyou_y[i]=y/2-0.1;
   			}else{
   				h_zahyou_y[i]=y/2;
   			}
   				
   		}
   		if (i==100 || i==101 || i==102 || i==103 || i==108 || i==109 || i==110 || i==111 || i==120 || i==121 || i==122 || i==123 || i==124 || i==125 || i==126 || i==127){
			if (i==120 || i==121 || i==122 || i==123){
   				h_zahyou_y[i]=-y/2+0.1;
   			}else{
   				h_zahyou_y[i]=-y/2;
   			}
   				
   		}
   		if (i==96 || i==97 || i==98 || i==99 || i==100 || i==101 || i==102 || i==103 || i==112  || i==115 || i==116 || i==119 || i==120 || i==123 || i==124 || i==127){
			if (i==97 || i==98 || i==101 || i==102){
				h_zahyou_z[i]=h/2-0.1;
			}else{
				h_zahyou_z[i]=h/2;
			}
		}
		if (i==104 || i==105 || i==106 || i==107 || i==108 || i==109 || i==110 || i==111 || i==113  || i==114 || i==117 || i==118 || i==121 || i==122 || i==125 || i==126){
			if (i==104 || i==107 || i==108 || i==111){
				h_zahyou_z[i]=-h/2+0.1;
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
   				h_zahyou_y[i]=y/2-0.1;
   			}else{
   				h_zahyou_y[i]=y/2;
   			}
   				
   		}
   		if (i==100+32 || i==101+32 || i==102+32 || i==103+32 || i==108+32 || i==109+32 || i==110+32 || i==111+32 || i==120+32 || i==121+32 || i==122+32 || i==123+32 || i==124+32 || i==125+32 || i==126+32 || i==127+32){
			if (i==120+32 || i==121+32 || i==122+32 || i==123+32){
   				h_zahyou_y[i]=-y/2+0.3;
   			}else{
   				h_zahyou_y[i]=-y/2;
   			}
   				
   		}
   		if (i==96+32 || i==97+32 || i==98+32 || i==99+32 || i==100+32 || i==101+32 || i==102+32 || i==103+32 || i==112+32  || i==115+32 || i==116+32 || i==119+32 || i==120+32 || i==123+32 || i==124+32 || i==127+32){
			if (i==97+32 || i==98+32 || i==101+32 || i==102+32){
				h_zahyou_z[i]=h/2-0.1;
			}else{
				h_zahyou_z[i]=h/2;
			}
		}
		if (i==104+32 || i==105+32 || i==106+32 || i==107+32 || i==108+32 || i==109+32 || i==110+32 || i==111+32 || i==113+32  || i==114+32 || i==117+32 || i==118+32 || i==121+32 || i==122+32 || i==125+32 || i==126+32){
			if (i==104+32 || i==107+32 || i==108+32 || i==111+32){
				h_zahyou_z[i]=-h/2+0.1;
			}else{
				h_zahyou_z[i]=-h/2;
			}
		}
     }   
}

function m_model2222(geometry,x,y,r,t)
{

		for (i=0;i<160;i++){
          geometry.vertices.push(
            new THREE.Vector3(h_zahyou_x[i],h_zahyou_z[i],h_zahyou_y[i]));//0
	 	}
	  



 		for (i=0;i<=19;i++){

//前
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

	  
	  	}

	
	

}




function h_init(x,y,h,t)
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
     
   		//############################# 上 #####################################
 	  	
   			h_zahyou_x[0]=-x/2;
   			h_zahyou_y[0]=y/2
   			h_zahyou_z[0]=h/2
   			
   			h_zahyou_x[1]=-x/2;
   			h_zahyou_y[1]=-y/2
   			h_zahyou_z[1]=h/2
   			
   			h_zahyou_x[2]=x/2;
   			h_zahyou_y[2]=-y/2
   			h_zahyou_z[2]=h/2
   			
   			h_zahyou_x[3]=-x/2;
   			h_zahyou_y[3]=-y/2
   			h_zahyou_z[3]=h/2
   			
   			h_zahyou_x[4]=-x/2;
   			h_zahyou_y[4]=y/2
   			h_zahyou_z[4]=h/2-t
   			
   			h_zahyou_x[5]=-x/2;
   			h_zahyou_y[5]=-y/2
   			h_zahyou_z[5]=h/2-t
   			
   			h_zahyou_x[6]=x/2;
   			h_zahyou_y[6]=-y/2
   			h_zahyou_z[6]=h/2-t
   			
   			h_zahyou_x[7]=-x/2;
   			h_zahyou_y[7]=-y/2
   			h_zahyou_z[7]=h/2-t
   			
   			
}	




function m_model(geometry,x,y,r,t)
{

		for (i=0;i<8;i++){
          geometry.vertices.push(
            new THREE.Vector3(h_zahyou_x[i],h_zahyou_z[i],h_zahyou_y[i]));//0
	 	}
	  



 	//	for (i=0;i<=19;i++){

//前
		 	geometry.faces.push(
	            new THREE.Face3(0, 1, 2));
		 	geometry.faces.push(
	            new THREE.Face3(2, 3, 0));
	            
	        geometry.faces.push(
	            new THREE.Face3(0, 4, 5));
		 	geometry.faces.push(
	            new THREE.Face3(5, 1, 0));
	            
	        geometry.faces.push(
	            new THREE.Face3(1, 5,6));
		 	geometry.faces.push(
	            new THREE.Face3(6, 2, 1));
	            
	        geometry.faces.push(
	            new THREE.Face3(2, 6,7));
		 	geometry.faces.push(
	            new THREE.Face3(7, 3, 2));
	            
	        geometry.faces.push(
	            new THREE.Face3(4, 5,6));
		 	geometry.faces.push(
	            new THREE.Face3(6, 3, 4));
/*
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

	  
	  	}

	*/
	

}


function draw_c(geometry,p,z,w,d,h,x,y,r,t,o)
{
	var cnt=0;
	var i=0;
	var j=0;
	var h_x=0;
	var h_y=0;
	var h_z=0;
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
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1
		}
		
					
	}
	if(p==2 || p==3){
		if (z==1){
			h_x=-w/2+x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
		}
		if (z==2){
			h_x=-w/2+x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=h/2-y;
			
		}
		if (z==3){
			h_x=w/2-x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=h/2-y;
			
		}
		if (z==4){
			h_x=w/2-x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y;
			
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1
		}
		
					
	}
	if(p==4 || p==5){
		if (z==1){
			
			if(p==4){
				h_x=-w/2+t;
			}else{
				h_x=w/2;
			}
			h_y=d/2-x;
			h_z=-h/2+y;
		}
		if (z==2){
			
			if(p==4){
				h_x=-w/2+t;
			}else{
				h_x=w/2;
			}
			h_y=d/2-x;
			h_z=h/2-y;
			
		}
		if (z==3){
			
			if(p==4){
				h_x=-w/2+t;
			}else{
				h_x=w/2;
			}
			h_y=-d/2+x;
			h_z=h/2-y;
			
		}
		if (z==4){
			
			if(p==4){
				h_x=-w/2+t;
			}else{
				h_x=w/2;
			}
			h_y=-d/2+x;
			h_z=-h/2+y;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x;
			
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+r/2*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x;
			h_c_y[j]=h_y+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-t;
			h_c_y[j]=h_y+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1
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
		
	}



}






function draw_s(geometry,p,z,w,d,h,x1,y1,x2,y2,r,t,o1,o2)
{
	var cnt=0;
	var i=0;
	var j=0;
	var h_x=0;
	var h_y=0;
	var h_z=0;
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
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+r/2*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2;
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y+(r/2+2)*Math.cos(i*(Math.PI/180));
			h_c_z[j]=h/2-t;
			j=j+1
		}
		
					
	}
	if(p==2 || p==3){
		if (z==1){
			h_x=-w/2+x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
		}
		if (z==2){
			h_x=-w/2+x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=h/2-y;
			
		}
		if (z==3){
			h_x=w/2-x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=h/2-y;
			
		}
		if (z==4){
			h_x=w/2-x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y;
			
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1
		}
		
					
	}
	if(p==4 || p==5){
		if (z==1){
			h_x=-w/2+x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
		}
		if (z==2){
			h_x=-w/2+x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=h/2-y;
			
		}
		if (z==3){
			h_x=w/2-x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=h/2-y;
			
		}
		if (z==4){
			h_x=w/2-x;
			if(p==2){
				h_y=d/2;
			}else{
				h_y=-d/2+t;
			}
			h_z=-h/2+y;
			
		}
	
		for (i=0;i<90;i=i+1){			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			
			h_c_y[j]=h_y;
			
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x-(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z-(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
		}
		for (i=0;i<90;i=i+1){
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+r/2*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+r/2*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1;
			h_c_x[j]=h_x+(r/2+2)*Math.sin(i*(Math.PI/180));
			h_c_y[j]=h_y-t;
			h_c_z[j]=h_z+(r/2+2)*Math.cos(i*(Math.PI/180));
			j=j+1
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
		
	}



}

function draw_b(geometry11,x1,y1,h,t)
{
	var i=0;
	
      // (2)頂点データの作成
   
	for (i=0;i<2;i++){

          geometry11.vertices.push(
            new THREE.Vector3(-x1/2,-h/2-40,y1/2));//0
	 
	  geometry11.vertices.push(
            new THREE.Vector3(-x1/2,-h/2-40.1,y1/2));//1
	  

	  geometry11.vertices.push(
            new THREE.Vector3(x1/2,-h/2-40.1,y1/2));//2
	  

	  geometry11.vertices.push(
            new THREE.Vector3(x1/2,-h/2-40,y1/2));//3
	  	  
	  

	 geometry11.vertices.push(
            new THREE.Vector3(-x1/2,-h/2-40,-y1/2));//4
	
	 geometry11.vertices.push(
            new THREE.Vector3(-x1/2,-h/2-40.1,-y1/2));//5
	  

	  geometry11.vertices.push(
            new THREE.Vector3(x1/2,-h/2-40.1,-y1/2));//6
	 

	  geometry11.vertices.push(
            new THREE.Vector3(x1/2,-h/2-40,-y1/2));//7


	}
 
	for (i=0;i<2;i++){

//前
		 	geometry11.faces.push(
	            new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
		 	geometry11.faces.push(
	            new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	
//左
	
		 	geometry11.faces.push(
	            new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
		 	geometry11.faces.push(
	            new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
//右
		 	geometry11.faces.push(
	            new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
		 	geometry11.faces.push(
	            new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
//上
		 	geometry11.faces.push(
	            new THREE.Face3(0+i*8, 3+i*8,4+i*8));
		 	geometry11.faces.push(
	            new THREE.Face3(4+i*8, 3+i*8,7+i*8));
	
		
	
//底	
	
			geometry11.faces.push(
	            new THREE.Face3(1+i*8, 5+i*8,2+i*8));
			geometry11.faces.push(
	            new THREE.Face3(2+i*8, 5+i*8,6+i*8));
	
	
//後ろ
			geometry11.faces.push(
	            new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
	
			geometry11.faces.push(
	            new THREE.Face3(4+i*8, 7+i*8, 6+i*8));

	  
	  	}

}
function draw_sd()
{
	var i=0;
	var x=b_width;
	var y=b_depth;
	var h=b_height;
	var h2=p_height;
	var t1=b_thickness;
	var t2=p_thickness;
	for (i=0;i<2;i++){//左
		if(y>=200){
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/2+t1+t2+0.1));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/2+t1+t2+0.1));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/4-3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/4-3));//3,7
		
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+15.5,-y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+15.5,-y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/4+3));//3,7  底13.5

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+11.5,-y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+11.5,-y/4+3));//3,7

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/4+3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/4+3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/4-3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/4-3));//3,7

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+15.5,y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+15.5,y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/4+3));//3,7

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+11.5,y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+11.5,y/4+3));//3,7

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/4+3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/4+3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/2-t1-t2^0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/2-t1-t2-0.01));//3,7

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+i*(h2-t2-0.1),-y/2+t1+t2));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,-y/2+t1+t2));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,y/2-t1-t2-0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+i*(h2-t2-0.1),y/2-t1-t2-0.01));//3,7


		}else{
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-y/2+t1+t2+0.1));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-y/2+t1+t2+0.1));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-3));//3,7
		
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+15.5,-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+15.5,3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,3));//3,7  底13.5

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+11.5,-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,3));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+11.5,3));//3,7

		

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,3));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,3));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2,y/2-t1-t2-0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2*i,-h/2+h2-t2-0.1,y/2-t1-t2-0.01));//3,7

			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+i*(h2-t2-0.1),-y/2+t1+t2));//0,4
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,-y/2+t1+t2));//1,5
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,y/2-t1-t2-0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(-x/2+t1+t2,-h/2+i*(h2-t2-0.1),y/2-t1-t2-0.01));//3,7

		}

	}
	for (i=0;i<2;i++){//左
		if(y>=200){
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/2+t1+t2+0.1));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/2+t1+t2+0.1));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/4-3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/4-3));//3,7
		
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+15.5,-y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+15.5,-y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/4+3));//3,7  底13.5

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+11.5,-y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+11.5,-y/4+3));//3,7

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/4+3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/4+3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/4-3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/4-3));//3,7

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+15.5,y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+15.5,y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/4+3));//3,7

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+11.5,y/4-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/4-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/4+3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+11.5,y/4+3));//3,7

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/4+3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/4+3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/2-t1-t2^0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/2-t1-t2-0.01));//3,7

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+1,-y/2+t1+t2));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1,-h/2,-y/2+t1+t2));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1,-h/2,y/2-t1-t2-0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+1,y/2-t1-t2-0.01));//3,7


		}else{
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-y/2+t1+t2+0.1));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-y/2+t1+t2+0.1));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-3));//3,7
		
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+15.5,-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+15.5,3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,3));//3,7  底13.5

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+11.5,-3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,-3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,3));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+11.5,3));//3,7

		

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,3));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,3));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2,y/2-t1-t2-0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2*i,-h/2+h2-t2-0.1,y/2-t1-t2-0.01));//3,7

			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+i*(h2-t2-0.1),-y/2+t1+t2));//0,4
			geometry91.vertices.push(new THREE.Vector3(x/2-t1,-h/2,-y/2+t1+t2));//1,5
			geometry91.vertices.push(new THREE.Vector3(x/2-t1,-h/2,y/2-t1-t2-0.01));//2,6
			geometry91.vertices.push(new THREE.Vector3(x/2-t1-t2,-h/2+i*(h2-t2-0.1),y/2-t1-t2-0.01));//3,7

		}

	}

		
	
	if(y>=200){
		for (i=0;i<=14;i++){			
			geometry91.faces.push(new THREE.Face3(1+i*4, 2+i*4, 0+i*4));
			geometry91.faces.push(new THREE.Face3(2+i*4, 3+i*4, 0+i*4));

		}
		for (i=16;i<=30;i++){			
			geometry91.faces.push(new THREE.Face3(1+i*4, 2+i*4, 0+i*4));
			geometry91.faces.push(new THREE.Face3(2+i*4, 3+i*4, 0+i*4));

		}
	}else{

		for (i=0;i<=8;i++){			
			geometry91.faces.push(new THREE.Face3(1+i*4, 2+i*4, 0+i*4));
			geometry91.faces.push(new THREE.Face3(2+i*4, 3+i*4, 0+i*4));

		}
		for (i=10;i<=18;i++){			
			geometry91.faces.push(new THREE.Face3(1+i*4, 2+i*4, 0+i*4));
			geometry91.faces.push(new THREE.Face3(2+i*4, 3+i*4, 0+i*4));

		}
	}


	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-100-h/2+h2-t2-0.1,y/2-t1-t2+100));//0,4
	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-100-h/2,y/2-t1-t2+100));//1,5
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2,y/2-t1-t2));//2,6
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,y/2-t1-t2));//3,7

	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,y/2-t1-t2-0.1));//0,4
	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,y/2-t1-t2-0.1));//1,5
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2,y/2-t1-t2-0.1));//2,6
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,y/2-t1-t2-0.1));//3,7

	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,-y/2+t1+t2));//0,4
	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,-y/2+t1+t2));//1,5
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2,-y/2+t1+t2));//2,6
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,-y/2+t1+t2));//3,7

	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2-0.1,-y/2+t1+t2+0.1));//0,4
	geometry93.vertices.push(new THREE.Vector3(-x/2+t1,-h/2,-y/2+t1+t2+0.1));//1,5
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2,-y/2+t1+t2+0.1));//2,6
	geometry93.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,-y/2+t1+t2+0.1));//3,7
	for(i=0;j<2;i++){
		geometry93.faces.push(new THREE.Face3(1+12*i, 2+12*i, 0+12*i));
		geometry93.faces.push(new THREE.Face3(2+12*i, 3+12*i, 0+12*i));
		geometry93.faces.push(new THREE.Face3(0+12*i, 5+12*i, 1+12*i));
		geometry93.faces.push(new THREE.Face3(0+12*i, 4+12*i, 5+12*i));
		geometry93.faces.push(new THREE.Face3(3+12*i, 2+12*i, 6+12*i));
		geometry93.faces.push(new THREE.Face3(6+12*i, 7+12*i, 3+12*i));
		geometry93.faces.push(new THREE.Face3(0+12*i, 3+12*i,4+12*i));
		geometry93.faces.push(new THREE.Face3(4+12*i, 3+12*i,7+12*i));
		geometry93.faces.push(new THREE.Face3(1+12*i, 5+12*i,2+12*i));
		geometry93.faces.push( new THREE.Face3(2+12*i, 5+12*i,6+12*i));
		geometry93.faces.push(new THREE.Face3(4+12*i, 6+12*i, 5+12*i));
		geometry93.faces.push(new THREE.Face3(4+12*i, 7+12*i, 6+12*i));
	}
	

	geometry92.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2,-y/2+t1));
	geometry92.vertices.push(new THREE.Vector3(-x/2+t1,-h/2+h2-t2,y/2-t1));
	geometry92.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2,y/2-t1));
	geometry92.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2,-y/2+t1));
	geometry92.vertices.push(new THREE.Vector3(-x/2-t1,-h/2+h2-t2-0.1,-y/2+t1));
	geometry92.vertices.push(new THREE.Vector3(-x/2-t1,-h/2+h2-t2-0.1,y/2-t1));
	geometry92.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,y/2-t1));
	geometry92.vertices.push(new THREE.Vector3(x/2-t1,-h/2+h2-t2-0.1,-y/2+t1));
	
/*	geometry92.faces.push(new THREE.Face3(1, 2, 0));
	geometry92.faces.push(new THREE.Face3(2, 3, 0));
	geometry92.faces.push(new THREE.Face3(0, 5, 1));
	geometry92.faces.push(new THREE.Face3(0, 4, 5));
	geometry92.faces.push(new THREE.Face3(3, 2, 6));
	geometry92.faces.push(new THREE.Face3(6, 7, 3));
	geometry92.faces.push(new THREE.Face3(0, 3,4));
	geometry92.faces.push(new THREE.Face3(4, 3,7));
	geometry92.faces.push(new THREE.Face3(1, 5,2));
	geometry92.faces.push( new THREE.Face3(2, 5,6));
	geometry92.faces.push(new THREE.Face3(4, 6, 5));
	geometry92.faces.push(new THREE.Face3(4, 7, 6));
*/
	
}
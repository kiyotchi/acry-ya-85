function draw_kakou(f,x,y,h,r,x2,y2,z,s)
{
	var i=0;
	var a=b_width;
	var b=b_depth;
	
	var h1=b_height;
	var k=0.707107;

	
	
	if(f==0){
		if(z==0){
			if(s==0){
				a=-b_width/2+x;
				b=-b_depth/2+y;
				h=b_height/2+s_t_0;

				draw_sen3(0,-b_width/2,-b_depth/2+y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a,-b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,-b_depth/2+y,b_height/2-10,0,0,s_t_0+10);	
				draw_sen3(0,a+r/2*k,-b_depth/2+y+r/2*k,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a-r/2*k,-b_depth/2+y-r/2*k,b_height/2,0,0,s_t_0);
			
				draw_dr(0,a-r/2*k,-b_depth/2+y-r/2*k,b_height/2+s_t_0-5);

				draw_right(0,-b_width/2+x,-b_depth/2+y,b_height/2+s_t_0-5)
				draw_left(0,-b_width/2,-b_depth/2+y,b_height/2+s_t_0-5)

				draw_sen2(0,-b_width/2,-b_depth/2+y,b_height/2+s_t_0-5,x,0,0)
				draw_sen1(0,a,-b_depth/2+y,b_height/2+s_t_0-5,0,-y,0)

				draw_sentl(0,a-10-r/2*k,-b_depth/2+y-10-r/2*k,b_height/2+s_t_0-5,0,10+r*0.707107+10,0);
				draw_sen2(1,a+10+r/2*k,-b_depth/2+y+10+r/2*k,b_height/2+s_t_0-5,10,0,0)
				draw_dr(0,a+r/2*k,-b_depth/2+y+r/2*k,b_height/2+s_t_0-5);
				draw_fai(0,a+10+r/2*k,-b_depth/2+y+10+r/2*k-8,b_height/2+s_t_0-5);	
				if (r>99){
					draw_moji(0,a+10+r/2*k+10,-b_depth/2+y+10+r/2*k-8,b_height/2+s_t_0-5,r);
				}else{
					draw_moji(0,a+10+r/2*k+8,-b_depth/2+y+10+r/2*k-8,b_height/2+s_t_0-5,r);
				}
				draw_top(0,a,-b_depth/2,b_height/2+s_t_0-5)
				draw_down(0,a,-b_depth/2+y,b_height/2+s_t_0-5)
				draw_moji(0,-b_width/2+x/2,-b_depth/2+y+2,b_height/2+s_t_0-5,x);
				draw_moji(0,-b_width/2+x+10,-b_depth/2+y/2,b_height/2+s_t_0-5,y);
			}else{
				a=-b_width/2+x;
				b=-b_depth/2+y;
				h=b_height/2+s_t_0;

				draw_sen3(0,-b_width/2,-b_depth/2+y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a+x2,-b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,-b_depth/2+y,b_height/2-10,0,0,s_t_0+10);	

				draw_sen3(0,a+x2,-b_depth/2+y+y2,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a+x2,-b_depth/2+y,b_height/2,0,0,s_t_0);
			
				

				draw_right(0,-b_width/2+x,-b_depth/2+y,b_height/2+s_t_0-5);
				draw_right(0,-b_width/2+x+x2,-b_depth/2+y,b_height/2+s_t_0-5);

				draw_left(0,-b_width/2,-b_depth/2+y,b_height/2+s_t_0-5);
				draw_left(0,-b_width/2+x,-b_depth/2+y,b_height/2+s_t_0-5);

				draw_sen2(0,-b_width/2,-b_depth/2+y,b_height/2+s_t_0-5,x,0,0);
				draw_sen2(0,-b_width/2+x,-b_depth/2+y,b_height/2+s_t_0-5,x2,0,0);

				draw_sen1(0,a+x2,-b_depth/2,b_height/2+s_t_0-5,0,y,0);
				draw_sen1(0,a+x2,-b_depth/2+y,b_height/2+s_t_0-5,0,y2,0);
				
				draw_moji(0,-b_width/2+x/2-5,-b_depth/2+y-10,b_height/2+s_t_0-5,x);
				draw_moji(0,a+x2/2-5,-b_depth/2+y-10,b_height/2+s_t_0-5,x2);

				draw_top(0,a+x2,-b_depth/2,b_height/2+s_t_0-5)
				draw_top(0,a+x2,-b_depth/2+y,b_height/2+s_t_0-5)

				draw_down(0,a+x2,-b_depth/2+y,b_height/2+s_t_0-5)
				draw_down(0,a+x2,-b_depth/2+y+y2,b_height/2+s_t_0-5)

				draw_moji(0,-b_width/2+x+x2+8,-b_depth/2+y/2,b_height/2+s_t_0-5,y);
				draw_moji(0,-b_width/2+x+x2+8,-b_depth/2+y+y2/2,b_height/2+s_t_0-5,y2);
			}
		}
		if(z==1){
			if(s==0){
				a=-b_width/2+x;
				b=b_depth/2-y;
				h=b_height/2+s_t_0;
			
				draw_sen3(0,-b_width/2,b_depth/2-y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a,b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,b_depth/2-y,b_height/2-10,0,0,s_t_0+10);	
				draw_sen3(0,a+r/2*k,b_depth/2-y-r/2*k,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a-r/2*k,b_depth/2-y+r/2*k,b_height/2,0,0,s_t_0);
			
				draw_tr(0,a-r/2*k,b_depth/2-y+r/2*k,b_height/2+s_t_0-5);

				draw_right(0,-b_width/2+x,b_depth/2-y,b_height/2+s_t_0-5)
				draw_left(0,-b_width/2,b_depth/2-y,b_height/2+s_t_0-5)

				draw_sen2(0,-b_width/2,b_depth/2-y,b_height/2+s_t_0-5,x,0,0)
				draw_sen1(0,a,b_depth/2-y,b_height/2+s_t_0-5,0,y,0)

				draw_sentr(0,a+10+r/2*k,b_depth/2-y-10-r/2*k,b_height/2+s_t_0-5,0,10+r*0.707107+10,0);
				draw_sen2(1,a+10+r/2*k,b_depth/2-y-10-r/2*k,b_height/2+s_t_0-5,10,0,0)
				draw_dl(0,a+r/2*k,b_depth/2-y-r/2*k,b_height/2+s_t_0-5);
				draw_fai(0,a+10+r/2*k,b_depth/2-y-10-r/2*k-8,b_height/2+s_t_0-5);	
				if (r>99){
					draw_moji(0,a+10+r/2*k+10,b_depth/2-y-10-r/2*k-8,b_height/2+s_t_0-5,r);
				}else{
					draw_moji(0,a+10+r/2*k+8,b_depth/2-y-10-r/2*k-8,b_height/2+s_t_0-5,r);
				}
				draw_down(0,a,b_depth/2,b_height/2+s_t_0-5);
				draw_top(0,a,b_depth/2-y,b_height/2+s_t_0-5);
				draw_moji(0,-b_width/2+x/2,b_depth/2-y-8,b_height/2+s_t_0-5,x);
				draw_moji(0,-b_width/2+x+10,b_depth/2-y/2,b_height/2+s_t_0-5,y);
			}else{
				a=-b_width/2+x;
				b=b_depth/2-y;
				h=b_height/2+s_t_0;
			
				draw_sen3(0,-b_width/2,b_depth/2-y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a+x2,b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,b_depth/2-y,b_height/2-10,0,0,s_t_0+10);	

				draw_sen3(0,a+x2,b_depth/2-y-y2,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a+x2,b_depth/2-y,b_height/2,0,0,s_t_0);
			
				

				draw_right(0,-b_width/2+x,b_depth/2-y,b_height/2+s_t_0-5);
				draw_right(0,-b_width/2+x+x2,b_depth/2-y,b_height/2+s_t_0-5);

				draw_left(0,-b_width/2,b_depth/2-y,b_height/2+s_t_0-5);
				draw_left(0,-b_width/2+x,b_depth/2-y,b_height/2+s_t_0-5);

				draw_sen2(0,-b_width/2,b_depth/2-y,b_height/2+s_t_0-5,x,0,0);
				draw_sen2(0,-b_width/2+x,b_depth/2-y,b_height/2+s_t_0-5,x2,0,0);

				draw_sen1(0,a+x2,b_depth/2,b_height/2+s_t_0-5,0,-y,0);
				draw_sen1(0,a+x2,b_depth/2-y,b_height/2+s_t_0-5,0,-y2,0);
				
				draw_moji(0,-b_width/2+x/2-4,b_depth/2-y-10,b_height/2+s_t_0-5,x);
				draw_moji(0,a+x2/2-5,b_depth/2-y-10,b_height/2+s_t_0-5,x2);

				draw_top(0,a+x2,b_depth/2-y-y2,b_height/2+s_t_0-5)
				draw_top(0,a+x2,b_depth/2-y,b_height/2+s_t_0-5)

				draw_down(0,a+x2,b_depth/2-y,b_height/2+s_t_0-5)
				draw_down(0,a+x2,b_depth/2,b_height/2+s_t_0-5)

				draw_moji(0,-b_width/2+x+x2+8,b_depth/2-y/2,b_height/2+s_t_0-5,y);
				draw_moji(0,-b_width/2+x+x2+8,b_depth/2-y-y2/2,b_height/2+s_t_0-5,y2)

			}
		}
		if(z==2){
			if(s==0){
				a=b_width/2-x;
				b=b_depth/2-y;
				h=b_height/2+s_t_0;
			
				draw_sen3(0,b_width/2,b_depth/2-y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a,b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,b_depth/2-y,b_height/2-10,0,0,s_t_0+10);	
				draw_sen3(0,a+r/2*k,b_depth/2-y+r/2*k,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a-r/2*k,b_depth/2-y-r/2*k,b_height/2,0,0,s_t_0);
			
				draw_dr(0,a-r/2*k,b_depth/2-y-r/2*k,b_height/2+s_t_0-5);

				draw_right(0,b_width/2,b_depth/2-y,b_height/2+s_t_0-5)
				draw_left(0,b_width/2-x,b_depth/2-y,b_height/2+s_t_0-5)

				draw_sen2(0,b_width/2-x,b_depth/2-y,b_height/2+s_t_0-5,x,0,0)
				draw_sen1(0,a,b_depth/2-y,b_height/2+s_t_0-5,0,y,0)

				draw_sentl(0,a-10-r/2*k,b_depth/2-y-10-r/2*k,b_height/2+s_t_0-5,0,10+r*0.707107+10,0);
				draw_sen2(1,a-20-r/2*k,b_depth/2-y-10-r/2*k,b_height/2+s_t_0-5,10,0,0)
				draw_dr(0,a+r/2*k,b_depth/2-y+r/2*k,b_height/2+s_t_0-5);
				draw_fai(0,a-20-r/2*k,b_depth/2-y-10-r/2*k-8,b_height/2+s_t_0-5);	
				if (r>99){
					draw_moji(0,a-20-r/2*k+10,b_depth/2-y-10-r/2*k-8,b_height/2+s_t_0-5,r);
				}else{
					draw_moji(0,a-20-r/2*k+8,b_depth/2-y-10-r/2*k-8,b_height/2+s_t_0-5,r);
				}
				draw_down(0,a,b_depth/2,b_height/2+s_t_0-5);
				draw_top(0,a,b_depth/2-y,b_height/2+s_t_0-5);
				draw_moji(0,b_width/2-x/2,b_depth/2-y-8,b_height/2+s_t_0-5,x);
				draw_moji(0,b_width/2-x-10,b_depth/2-y/2,b_height/2+s_t_0-5,y);
			}else{
				a=b_width/2-x;
				b=b_depth/2-y;
				h=b_height/2+s_t_0;

				draw_sen3(0,b_width/2,b_depth/2-y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a-x2,b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,b_depth/2-y,b_height/2-10,0,0,s_t_0+10);	

				draw_sen3(0,a-x2,b_depth/2-y-y2,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a-x2,b_depth/2-y,b_height/2,0,0,s_t_0);
			
				

				draw_right(0,b_width/2-x,b_depth/2-y,b_height/2+s_t_0-5);
				draw_right(0,b_width/2,b_depth/2-y,b_height/2+s_t_0-5);

				draw_left(0,b_width/2-x-x2,b_depth/2-y,b_height/2+s_t_0-5);
				draw_left(0,b_width/2-x,b_depth/2-y,b_height/2+s_t_0-5);

				draw_sen2(0,b_width/2-x,b_depth/2-y,b_height/2+s_t_0-5,x,0,0);
				draw_sen2(0,b_width/2-x-x2,b_depth/2-y,b_height/2+s_t_0-5,x2,0,0);

				draw_sen1(0,a-x2,b_depth/2,b_height/2+s_t_0-5,0,-y,0);
				draw_sen1(0,a-x2,b_depth/2-y,b_height/2+s_t_0-5,0,-y2,0);
				
				draw_moji(0,b_width/2-x/2-4,b_depth/2-y-10,b_height/2+s_t_0-5,x);
				draw_moji(0,a-x2/2-5,b_depth/2-y-10,b_height/2+s_t_0-5,x2);

				draw_top(0,a-x2,b_depth/2-y-y2,b_height/2+s_t_0-5)
				draw_top(0,a-x2,b_depth/2-y,b_height/2+s_t_0-5)

				draw_down(0,a-x2,b_depth/2-y,b_height/2+s_t_0-5)
				draw_down(0,a-x2,b_depth/2,b_height/2+s_t_0-5)

				draw_moji(0,b_width/2-x-x2-8,b_depth/2-y/2,b_height/2+s_t_0-5,y);
				draw_moji(0,b_width/2-x-x2-8,b_depth/2-y-y2/2,b_height/2+s_t_0-5,y2)
			}
		}
		if(z==3){
			if(s==0){
				a=b_width/2-x;
				b=-b_depth/2+y;
				h=b_height/2+s_t_0;
			
				draw_sen3(0,b_width/2,-b_depth/2+y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a,-b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,-b_depth/2+y,b_height/2-10,0,0,s_t_0+10);	
				draw_sen3(0,a+r/2*k,-b_depth/2+y-r/2*k,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a-r/2*k,-b_depth/2+y+r/2*k,b_height/2,0,0,s_t_0);
			
				draw_tr(0,a-r/2*k,-b_depth/2+y+r/2*k,b_height/2+s_t_0-5);

				draw_right(0,b_width/2,-b_depth/2+y,b_height/2+s_t_0-5)
				draw_left(0,b_width/2-x,-b_depth/2+y,b_height/2+s_t_0-5)

				draw_sen2(0,b_width/2-x,-b_depth/2+y,b_height/2+s_t_0-5,x,0,0)
				draw_sen1(0,a,-b_depth/2+y,b_height/2+s_t_0-5,0,-y,0)

				draw_sentr(0,a+10+r/2*k,-b_depth/2+y-10-r/2*k,b_height/2+s_t_0-5,0,10+r*0.707107+10,0);
				draw_sen2(1,a+10+r/2*k-(10+r*0.707107+30),-b_depth/2+y-10-r/2*k+10+r*0.707107+10,b_height/2+s_t_0-5,20,0,0)
				draw_dl(0,a+r/2*k,-b_depth/2+y-r/2*k,b_height/2+s_t_0-5);
				draw_fai(0,a+10+r/2*k-(10+r*0.707107+30),-b_depth/2+y-10-r/2*k-8+r*0.707107+20,b_height/2+s_t_0-5);	
				if (r>99){
					draw_moji(0,a+10+r/2*k-(10+r*0.707107+30)+8,-b_depth/2+y-10-r/2*k-8+r*0.707107+20,b_height/2+s_t_0-5,r);
				}else{
					draw_moji(0,a+10+r/2*k-(10+r*0.707107+30)+10,-b_depth/2+y-10-r/2*k-8+r*0.707107+20,b_height/2+s_t_0-5,r);
				}
				draw_down(0,a,-b_depth/2+y,b_height/2+s_t_0-5);
				draw_top(0,a,-b_depth/2,b_height/2+s_t_0-5);
				draw_moji(0,b_width/2-x/2,-b_depth/2+y+2,b_height/2+s_t_0-5,x);
				draw_moji(0,b_width/2-x-10,-b_depth/2+y/2,b_height/2+s_t_0-5,y);
			}else{
				a=b_width/2-x;
				b=-b_depth/2+y;
				h=b_height/2+s_t_0;

				draw_sen3(0,b_width/2,-b_depth/2+y,b_height/2,0,0,s_t_0);
				draw_sen3(0,a-x2,-b_depth/2,h1/2,0,0,s_t_0);

				draw_sen3(0,a,-b_depth/2+y,b_height/2-10,0,0,s_t_0+10);	

				draw_sen3(0,a-x2,-b_depth/2+y+y2,b_height/2,0,0,s_t_0);		
				draw_sen3(0,a-x2,-b_depth/2+y,b_height/2,0,0,s_t_0);
			
				

				draw_right(0,b_width/2-x,-b_depth/2+y,b_height/2+s_t_0-5);
				draw_right(0,b_width/2,-b_depth/2+y,b_height/2+s_t_0-5);

				draw_left(0,b_width/2-x-x2,-b_depth/2+y,b_height/2+s_t_0-5);
				draw_left(0,b_width/2-x,-b_depth/2+y,b_height/2+s_t_0-5);

				draw_sen2(0,b_width/2-x,-b_depth/2+y,b_height/2+s_t_0-5,x,0,0);
				draw_sen2(0,b_width/2-x-x2,-b_depth/2+y,b_height/2+s_t_0-5,x2,0,0);

				draw_sen1(0,a-x2,-b_depth/2+y,b_height/2+s_t_0-5,0,-y,0);
				draw_sen1(0,a-x2,-b_depth/2+y+y2,b_height/2+s_t_0-5,0,-y2,0);
				
				draw_moji(0,b_width/2-x/2-4,-b_depth/2+y-10,b_height/2+s_t_0-5,x);
				draw_moji(0,a-x2/2-5,-b_depth/2+y-10,b_height/2+s_t_0-5,x2);

				draw_top(0,a-x2,-b_depth/2+y,b_height/2+s_t_0-5)
				draw_top(0,a-x2,-b_depth/2,b_height/2+s_t_0-5)

				draw_down(0,a-x2,-b_depth/2+y+y2,b_height/2+s_t_0-5)
				draw_down(0,a-x2,-b_depth/2+y,b_height/2+s_t_0-5)

				draw_moji(0,b_width/2-x-x2-10,-b_depth/2+y/2,b_height/2+s_t_0-5,y);
				draw_moji(0,b_width/2-x-x2-10,-b_depth/2+y+y2/2,b_height/2+s_t_0-5,y2);
			}
		}
		
		s_t_0=s_t_0+10;
	}
	if(f==1){
		if(z==0){
			if(s==0){
				a=-b_width/2+x;
				b=b_depth/2+s_t_1;
				h=b_height/2-y;
			
				draw_sen3(1,-b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a,b_depth/2,h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2-10,h,0,s_t_1+10,0);	
				draw_sen3(1,a+r/2*k,b_depth/2,h-r/2*k,0,s_t_1,0);		
				draw_sen3(1,a-r/2*k,b_depth/2,h+r/2*k,0,s_t_1,0);
			
				draw_dr(1,a-r/2*k,b_depth/2+s_t_1-5,h+r/2*k);

				draw_right(1,-b_width/2+x,b_depth/2+s_t_1-5,h)
				draw_left(1,-b_width/2,b_depth/2+s_t_1-5,h)

				draw_sen2(1,-b_width/2,b_depth/2+s_t_1-5,h,x,0,0)
				draw_sen1(1,a,b_depth/2+s_t_1-5,h,0,0,y)
				draw_sentl(1,a-10-r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a-20-r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,10,0,0)
				draw_tl(1,a+r/2*k,b_depth/2+s_t_1-5,h-r/2*k);
				draw_fai(1,a-20-r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(1,a-20-r/2*k+10,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}else{
					draw_moji(1,a-20-r/2*k+8,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,b_depth/2+s_t_1-5,h1/2)
				draw_down(1,a,b_depth/2+s_t_1-5,h)
				draw_moji(1,-b_width/2+x/2,b_depth/2+s_t_1-5,h-2,x);
				draw_moji(1,-b_width/2+x+8,b_depth/2+s_t_1-5,h1/2-y/2,y);
			}else{
				a=-b_width/2+x;
				b=b_depth/2+s_t_1;
				h=b_height/2-y;
			
				draw_sen3(1,-b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a+x2,b_depth/2,h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2,h,0,s_t_1,0);	
				draw_sen3(1,a+x2,b_depth/2,h1/2-y,0,s_t_1,0);	
				draw_sen3(1,a+x2,b_depth/2,h1/2-y-y2,0,s_t_1,0);

				draw_right(1,-b_width/2+x,b_depth/2+s_t_1-5,h);
				draw_right(1,-b_width/2+x+x2,b_depth/2+s_t_1-5,h);

				draw_left(1,-b_width/2,b_depth/2+s_t_1-5,h);
				draw_left(1,-b_width/2+x,b_depth/2+s_t_1-5,h);

				draw_sen2(1,-b_width/2,b_depth/2+s_t_1-5,h,x,0,0);
				draw_sen2(1,-b_width/2+x,b_depth/2+s_t_1-5,h,x2,0,0);

				draw_sen1(1,a+x2,b_depth/2+s_t_1-5,h,0,0,y);
				draw_sen1(1,a+x2,b_depth/2+s_t_1-5,h,0,0,-y2);			
				
				draw_moji(1,-b_width/2+x/2-5,b_depth/2+s_t_1-5,h+8,x);
				
				draw_moji(1,-b_width/2+x+x2/2+5,b_depth/2+s_t_1-5,h+8,x2);
				
				draw_top(1,a+x2,b_depth/2+s_t_1-5,h1/2);
				
				draw_top(1,a+x2,b_depth/2+s_t_1-5,h1/2-y);

				draw_down(1,a+x2,b_depth/2+s_t_1-5,h1/2-y);
				draw_down(1,a+x2,b_depth/2+s_t_1-5,h1/2-y-y2);
				draw_moji(1,-b_width/2+x+x2+8,b_depth/2+s_t_1-5,h1/2-y/2,y);
				draw_moji(1,-b_width/2+x+x2+8,b_depth/2+s_t_1-5,h1/2-y-y2/2,y2);
			}
		}
		if(z==1){
			if(s==0){
				a=-b_width/2+x;
				b=b_depth/2+s_t_1;
				h=-b_height/2+y;
			
				draw_sen3(1,-b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a,b_depth/2,-h1/2,0,s_t_1,0);
			
				draw_sen3(1,a,b_depth/2-10,h,0,s_t_1+10,0);	
				draw_sen3(1,a+r/2*k,b_depth/2,h+r/2*k,0,s_t_1,0);		
				draw_sen3(1,a-r/2*k,b_depth/2,h-r/2*k,0,s_t_1,0);
				draw_tr(1,a-r/2*k,b_depth/2+s_t_1-5,h-r/2*k);
				draw_right(1,-b_width/2+x,b_depth/2+s_t_1-5,h)
				draw_left(1,-b_width/2,b_depth/2+s_t_1-5,h)

				draw_sen2(1,-b_width/2,b_depth/2+s_t_1-5,h,x,0,0)
				draw_sen1(1,a,b_depth/2+s_t_1-5,h,0,0,-y)
				draw_sentr(1,a+10+r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a+10+r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,10,0,0)
				draw_dl(1,a+r/2*k,b_depth/2+s_t_1-5,h+r/2*k);
				draw_fai(1,a+10+r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(1,a+10+r/2*k+10,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}else{
					draw_moji(1,a+10+r/2*k+8,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,b_depth/2+s_t_1-5,h)

				draw_down(1,a,b_depth/2+s_t_1-5,-h1/2)
				draw_moji(1,-b_width/2+x/2,b_depth/2+s_t_1-5,h+8,x);
				draw_moji(1,-b_width/2+x+8,b_depth/2+s_t_1-5,-h1/2+y/2,y);
			}else{
				a=-b_width/2+x;
				b=b_depth/2+s_t_1;
				h=-b_height/2+y;

				draw_sen3(1,-b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a+x2,b_depth/2,-h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2,h,0,s_t_1,0);	
				draw_sen3(1,a+x2,b_depth/2,-h1/2+y,0,s_t_1,0);	
				draw_sen3(1,a+x2,b_depth/2,-h1/2+y+y2,0,s_t_1,0);

				draw_right(1,-b_width/2+x,b_depth/2+s_t_1-5,h);
				draw_right(1,-b_width/2+x+x2,b_depth/2+s_t_1-5,h);

				draw_left(1,-b_width/2,b_depth/2+s_t_1-5,h);
				draw_left(1,-b_width/2+x,b_depth/2+s_t_1-5,h);

				draw_sen2(1,-b_width/2,b_depth/2+s_t_1-5,h,x,0,0);
				draw_sen2(1,-b_width/2+x,b_depth/2+s_t_1-5,h,x2,0,0);

				draw_sen1(1,a+x2,b_depth/2+s_t_1-5,-h1/2,0,0,y);
				draw_sen1(1,a+x2,b_depth/2+s_t_1-5,h+y2,0,0,-y2);			
				
				draw_moji(1,-b_width/2+x/2-4,b_depth/2+s_t_1-5,h+8,x);
				
				draw_moji(1,-b_width/2+x+x2/2-4,b_depth/2+s_t_1-5,h+8,x2);
				
				draw_top(1,a+x2,b_depth/2+s_t_1-5,-h1/2+y+y2);
				if(y!=0){
					draw_top(1,a+x2,b_depth/2+s_t_1-5,-h1/2+y);
					draw_moji(1,-b_width/2+x+x2+8,b_depth/2+s_t_1-5,-h1/2+y/2,y);
				}
				draw_down(1,a+x2,b_depth/2+s_t_1-5,-h1/2+y);
				draw_down(1,a+x2,b_depth/2+s_t_1-5,-h1/2);
				
				draw_moji(1,-b_width/2+x+x2+8,b_depth/2+s_t_1-5,-h1/2+y+y2/2,y2);
			}
		}
		if(z==2){
			if(s==0){
				a=b_width/2-x;
				b=b_depth/2+s_t_1;
				h=-b_height/2+y;
			
				draw_sen3(1,b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a,b_depth/2,-h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2-10,h,0,s_t_1+10,0);	
				draw_sen3(1,a+r/2*k,b_depth/2,h-r/2*k,0,s_t_1,0);		
				draw_sen3(1,a-r/2*k,b_depth/2,h+r/2*k,0,s_t_1,0);
				draw_dr(1,a-r/2*k,b_depth/2+s_t_1-5,h+r/2*k);
				draw_right(1,b_width/2,b_depth/2+s_t_1-5,h)
				draw_left(1,b_width/2-x,b_depth/2+s_t_1-5,h)

				draw_sen2(1,b_width/2,b_depth/2+s_t_1-5,h,-x,0,0)
				draw_sen1(1,a,b_depth/2+s_t_1-5,h,0,0,-y)
				draw_sentl(1,a-10-r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a-20-r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,10,0,0)
				draw_tl(1,a+r/2*k,b_depth/2+s_t_1-5,h-r/2*k);
				draw_fai(1,a-20-r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(1,a-20-r/2*k+10,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}else{
					draw_moji(1,a-20-r/2*k+8,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,b_depth/2+s_t_1-5,h)
				draw_down(1,a,b_depth/2+s_t_1-5,-h1/2)
				draw_moji(1,b_width/2-x/2,b_depth/2+s_t_1-5,h-2,x);
				draw_moji(1,b_width/2-x+10,b_depth/2+s_t_1-5,-h1/2+y/2,y);
			}else{
				a=b_width/2-x;
				b=b_depth/2+s_t_1;
				h=-b_height/2+y;

				draw_sen3(1,b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a-x2,b_depth/2,-h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2,h,0,s_t_1,0);	
				draw_sen3(1,a-x2,b_depth/2,-h1/2+y,0,s_t_1,0);	
				draw_sen3(1,a-x2,b_depth/2,-h1/2+y+y2,0,s_t_1,0);

				draw_right(1,b_width/2,b_depth/2+s_t_1-5,h);
				draw_right(1,b_width/2-x,b_depth/2+s_t_1-5,h);

				draw_left(1,b_width/2-x-x2,b_depth/2+s_t_1-5,h);
				draw_left(1,b_width/2-x,b_depth/2+s_t_1-5,h);

				draw_sen2(1,b_width/2,b_depth/2+s_t_1-5,h,-x,0,0);
				draw_sen2(1,b_width/2-x,b_depth/2+s_t_1-5,h,-x2,0,0);

				draw_sen1(1,a-x2,b_depth/2+s_t_1-5,-h1/2,0,0,y);
				draw_sen1(1,a-x2,b_depth/2+s_t_1-5,h+y2,0,0,-y2);			
				
				draw_moji(1,b_width/2-x/2-4,b_depth/2+s_t_1-5,h+8,x);
				
				draw_moji(1,b_width/2-x-x2/2-4,b_depth/2+s_t_1-5,h+8,x2);
				
				draw_top(1,a-x2,b_depth/2+s_t_1-5,-h1/2+y+y2);
				if(y!=0){
					draw_top(1,a-x2,b_depth/2+s_t_1-5,-h1/2+y);
					draw_moji(1,b_width/2-x-x2-10,b_depth/2+s_t_1-5,-h1/2+y/2,y);
				}
				draw_down(1,a-x2,b_depth/2+s_t_1-5,-h1/2+y);
				draw_down(1,a-x2,b_depth/2+s_t_1-5,-h1/2);
				
				draw_moji(1,b_width/2-x-x2-10,b_depth/2+s_t_1-5,-h1/2+y+y2/2,y2);
			}
		}
		if(z==3){
			if(s==0){
				a=b_width/2-x;
				b=b_depth/2+s_t_1;
				h=b_height/2-y;
			
				draw_sen3(1,b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a,b_depth/2,h1/2,0,s_t_1,0);

				draw_sen3(1,b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a,b_depth/2,h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2-10,h,0,s_t_1+10,0);	
				draw_sen3(1,a+r/2*k,b_depth/2,h+r/2*k,0,s_t_1,0);		
				draw_sen3(1,a-r/2*k,b_depth/2,h-r/2*k,0,s_t_1,0);
			
				draw_tr(1,a-r/2*k,b_depth/2+s_t_1-5,h-r/2*k);
			
				draw_right(1,b_width/2,b_depth/2+s_t_1-5,h)
				draw_left(1,b_width/2-x,b_depth/2+s_t_1-5,h)
				draw_sen2(1,b_width/2,b_depth/2+s_t_1-5,h,-x,0,0)
				draw_sen1(1,a,b_depth/2+s_t_1-5,h,0,0,y)
				draw_sentr(1,a+10+r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,0,0,-10-r*0.707107-10);

				draw_sen2(1,a+10+r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k,10,0,0)

				draw_dl(1,a+r/2*k,b_depth/2+s_t_1-5,h+r/2*k);
				draw_fai(1,a+10+r/2*k,b_depth/2+s_t_1-5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(1,a+10+r/2*k+10,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}else{
					draw_moji(1,a+10+r/2*k+8,b_depth/2+s_t_1-5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,b_depth/2+s_t_1-5,h1/2)
				draw_down(1,a,b_depth/2+s_t_1-5,h)
				draw_moji(1,b_width/2-x/2,b_depth/2+s_t_1-5,h+8,x);
				draw_moji(1,b_width/2-x-10,b_depth/2+s_t_1-5,h1/2-y/2,y);
			}else{
				a=b_width/2-x;
				b=b_depth/2+s_t_1;
				h=b_height/2-y;
			
				draw_sen3(1,b_width/2,b_depth/2,h,0,s_t_1,0);
				draw_sen3(1,a-x2,b_depth/2,h1/2,0,s_t_1,0);

				draw_sen3(1,a,b_depth/2,h,0,s_t_1,0);	
				draw_sen3(1,a-x2,b_depth/2,h1/2-y,0,s_t_1,0);	
				draw_sen3(1,a-x2,b_depth/2,h1/2-y-y2,0,s_t_1,0);

				draw_right(1,b_width/2,b_depth/2+s_t_1-5,h);
				draw_right(1,b_width/2-x,b_depth/2+s_t_1-5,h);

				draw_left(1,b_width/2-x-x2,b_depth/2+s_t_1-5,h);
				draw_left(1,b_width/2-x,b_depth/2+s_t_1-5,h);

				draw_sen2(1,b_width/2,b_depth/2+s_t_1-5,h,-x,0,0);
				draw_sen2(1,b_width/2-x,b_depth/2+s_t_1-5,h,-x2,0,0);

				draw_sen1(1,a-x2,b_depth/2+s_t_1-5,h1/2,0,0,-y);
				draw_sen1(1,a-x2,b_depth/2+s_t_1-5,h-y2,0,0,y2);			
				
				draw_moji(1,b_width/2-x/2-4,b_depth/2+s_t_1-5,h+8,x);
				
				draw_moji(1,b_width/2-x-x2/2-4,b_depth/2+s_t_1-5,h+8,x2);
				
				draw_top(1,a-x2,b_depth/2+s_t_1-5,h1/2-y);
				draw_top(1,a-x2,b_depth/2+s_t_1-5,h1/2);

				draw_down(1,a-x2,b_depth/2+s_t_1-5,h1/2-y);
				draw_down(1,a-x2,b_depth/2+s_t_1-5,h1/2-y-y2);
				draw_moji(1,b_width/2-x-x2-10,b_depth/2+s_t_1-5,h1/2-y/2,y);
				draw_moji(1,b_width/2-x-x2-10,b_depth/2+s_t_1-5,h1/2-y-y2/2,y2);
			}
			

		}			
		
		s_t_1=s_t_1+10;
	}
	if(f==2){
		if(z==0){
			if(s==0){
				a=b_width/2-x;
				b=-b_depth/2-s_t_2;
				h=b_height/2-y;
			
				draw_sen3(1,b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a,-b_depth/2,h1/2,0,-s_t_2,0);

				draw_sen3(1,a,-b_depth/2+10,h,0,-s_t_2-10,0);	
					
				draw_sen3(1,a+r/2*k,-b_depth/2,h+r/2*k,0,-s_t_2,0);		
				draw_sen3(1,a-r/2*k,-b_depth/2,h-r/2*k,0,-s_t_2,0);
			
				draw_tr(1,a-r/2*k,-b_depth/2-s_t_2+5,h-r/2*k);
				
				draw_right(2,b_width/2-x,-b_depth/2-s_t_2+5,h)
				draw_left(2,b_width/2,-b_depth/2-s_t_2+5,h)

				draw_sen2(1,b_width/2,-b_depth/2-s_t_2+5,h,-x,0,0)
				draw_sen1(1,a,-b_depth/2-s_t_2+5,h,0,0,y)
				draw_sentr(1,a+10+r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a+10+r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,10,0,0)
				draw_dl(1,a+r/2*k,-b_depth/2-s_t_2+5,h+r/2*k);
				draw_fai(2,a+20+r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(2,a+20+r/2*k-10,-b_depth/2-s_t_2+5,h+10+r/2*k+8,r);
				}else{
					draw_moji(2,a+20+r/2*k-8,-b_depth/2-s_t_2+5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,-b_depth/2-s_t_2+5,h1/2)
				draw_down(1,a,-b_depth/2-s_t_2+5,h)
				draw_moji(2,b_width/2-x/2,-b_depth/2-s_t_2+5,h-2,x);
				draw_moji(2,b_width/2-x-10,-b_depth/2-s_t_2+5,h1/2-y/2,y);
			}else{
				a=b_width/2-x;
				b=-b_depth/2-s_t_2;
				h=b_height/2-y;
			
				draw_sen3(1,b_width/2-x,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a-x2,-b_depth/2,h1/2,0,-s_t_2,0);
				draw_sen3(1,b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a-x2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a-x2,-b_depth/2,h-y2,0,-s_t_2,0);	
				
			
				

				draw_right(2,b_width/2-x,-b_depth/2-s_t_2+5,h);
				draw_right(2,b_width/2-x-x2,-b_depth/2-s_t_2+5,h);

				draw_left(2,b_width/2,-b_depth/2-s_t_2+5,h);
				draw_left(2,b_width/2-x,-b_depth/2-s_t_2+5,h);

				draw_sen2(1,b_width/2,-b_depth/2-s_t_2+5,h,-x,0,0);
				draw_sen2(1,b_width/2-x,-b_depth/2-s_t_2+5,h,-x2,0,0);

				draw_sen1(1,a-x2,-b_depth/2-s_t_2+5,h1/2,0,0,-y);
				draw_sen1(1,a-x2,-b_depth/2-s_t_2+5,h1/2-y,0,0,-y2);
				
				draw_moji(2,b_width/2-x/2,-b_depth/2-s_t_2+5,h1/2-y+8,x);
				
				draw_moji(2,b_width/2-x-x2/2,-b_depth/2-s_t_2+5,h1/2-y+8,x2);
				
				draw_top(1,a-x2,-b_depth/2-s_t_2+5,h1/2);
				draw_top(1,a-x2,-b_depth/2-s_t_2+5,h1/2-y);

				draw_down(1,a-x2,-b_depth/2-s_t_2+5,h1/2-y-y2);
				draw_down(1,a-x2,-b_depth/2-s_t_2+5,h1/2-y);
				draw_moji(2,b_width/2-x-x2-8,-b_depth/2-s_t_2+5,h1/2-y/2,y);
				draw_moji(2,b_width/2-x-x2-8,-b_depth/2-s_t_2+5,h1/2-y-y2/2,y2);
			}
		}
		if(z==1){
			if(s==0){
				a=b_width/2-x;
				b=-b_depth/2-s_t_2;
				h=-b_height/2+y;
			
				draw_sen3(1,b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a,-b_depth/2,-h1/2,0,-s_t_2,0);

				draw_sen3(1,a,-b_depth/2+10,h,0,-s_t_2-10,0);	
				draw_sen3(1,a+r/2*k,-b_depth/2,h-r/2*k,0,-s_t_2,0);		
				draw_sen3(1,a-r/2*k,-b_depth/2,h+r/2*k,0,-s_t_2,0);
			
				draw_tl(1,a+r/2*k,-b_depth/2-s_t_2+5,h-r/2*k);

				draw_right(2,b_width/2-x,-b_depth/2-s_t_2+5,h)
				draw_left(2,b_width/2,-b_depth/2-s_t_2+5,h)

				draw_sen2(1,b_width/2,-b_depth/2-s_t_2+5,h,-x,0,0)
				draw_sen1(1,a,-b_depth/2-s_t_2+5,h,0,0,-y)
				draw_sentl(1,a-10-r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a-10-r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,-10,0,0)
				draw_dr(1,a-r/2*k,-b_depth/2-s_t_2+5,h+r/2*k);
				draw_fai(2,a-10-r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(2,a-10-r/2*k-10,-b_depth/2-s_t_2+5,h+10+r/2*k+8,r);
				}else{
					draw_moji(2,a-10-r/2*k-8,-b_depth/2-s_t_2+5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,-b_depth/2-s_t_2+5,h)
				draw_down(1,a,-b_depth/2-s_t_2+5,-h1/2)
				draw_moji(2,b_width/2-x/2,-b_depth/2-s_t_2+5,h+8,x);
				draw_moji(2,b_width/2-x-10,-b_depth/2-s_t_2+5,-h1/2+y/2,y);
			}else{
				a=b_width/2-x;
				b=-b_depth/2-s_t_2;
				h=-b_height/2+y;

				draw_sen3(1,b_width/2-x,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a-x2,-b_depth/2,-h1/2+y+y2,0,-s_t_2,0);
				draw_sen3(1,b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a-x2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a-x2,-b_depth/2,-h1/2,0,-s_t_2,0);	

				draw_right(2,b_width/2-x,-b_depth/2-s_t_2+5,h);
				draw_right(2,b_width/2-x-x2,-b_depth/2-s_t_2+5,h);

				draw_left(2,b_width/2,-b_depth/2-s_t_2+5,h);
				draw_left(2,b_width/2-x,-b_depth/2-s_t_2+5,h);

				draw_sen2(1,b_width/2,-b_depth/2-s_t_2+5,h,-x,0,0);
				draw_sen2(1,b_width/2-x,-b_depth/2-s_t_2+5,h,-x2,0,0);

				draw_sen1(1,a-x2,-b_depth/2-s_t_2+5,-h1/2,0,0,y);
				draw_sen1(1,a-x2,-b_depth/2-s_t_2+5,-h1/2+y,0,0,y2);
				
				draw_moji(2,b_width/2-x/2,-b_depth/2-s_t_2+5,-h1/2+y+8,x);
				
				draw_moji(2,b_width/2-x-x2/2,-b_depth/2-s_t_2+5,-h1/2+y+8,x2);
				
				draw_top(1,a-x2,-b_depth/2-s_t_2+5,-h1/2+y+y2);
				if(y!=0){
					draw_top(1,a-x2,-b_depth/2-s_t_2+5,-h1/2+y);
					draw_moji(2,b_width/2-x-x2-8,-b_depth/2-s_t_2+5,-h1/2+y/2,y);
				}
				draw_down(1,a-x2,-b_depth/2-s_t_2+5,-h1/2);
				draw_down(1,a-x2,-b_depth/2-s_t_2+5,-h1/2+y);
				
				draw_moji(2,b_width/2-x-x2-8,-b_depth/2-s_t_2+5,-h1/2+y+y2/2,y2);
			}
		}
		if(z==2){
			if(s==0){
				a=-b_width/2+x;
				b=-b_depth/2-s_t_2;
				h=-b_height/2+y;
			
				draw_sen3(1,-b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a,-b_depth/2,-h1/2,0,-s_t_2,0);

				draw_sen3(1,a,-b_depth/2+10,h,0,-s_t_2-10,0);	
				draw_sen3(1,a+r/2*k,-b_depth/2,h+r/2*k,0,-s_t_2,0);		
				draw_sen3(1,a-r/2*k,-b_depth/2,h-r/2*k,0,-s_t_2,0);
			
				draw_tr(1,a-r/2*k,-b_depth/2-s_t_2+5,h-r/2*k);

				draw_right(2,-b_width/2,-b_depth/2-s_t_2+5,h)
				draw_left(2,-b_width/2+x,-b_depth/2-s_t_2+5,h)

				draw_sen2(1,-b_width/2,-b_depth/2-s_t_2+5,h,x,0,0)
				draw_sen1(1,a,-b_depth/2-s_t_2+5,h,0,0,-y)
				draw_sentr(1,a+10+r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a+10+r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,10,0,0)
				draw_dl(1,a+r/2*k,-b_depth/2-s_t_2+5,h+r/2*k);
				draw_fai(2,a+20+r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(2,a+20+r/2*k-10,-b_depth/2-s_t_2+5,h+10+r/2*k+8,r);
				}else{
					draw_moji(2,a+20+r/2*k-8,-b_depth/2-s_t_2+5,h+10+r/2*k+8,r);
				}
				draw_top(1,a,-b_depth/2-s_t_2+5,h)
				draw_down(1,a,-b_depth/2-s_t_2+5,-h1/2)
				draw_moji(2,-b_width/2+x/2,-b_depth/2-s_t_2+5,h+8,x);
				draw_moji(2,-b_width/2+x+10,-b_depth/2-s_t_2+5,-h1/2+y/2,y);
			}else{
				a=-b_width/2+x;
				b=-b_depth/2-s_t_2;
				h=-b_height/2+y;
				
				draw_sen3(1,-b_width/2+x,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a+x2,-b_depth/2,-h1/2+y+y2,0,-s_t_2,0);
				draw_sen3(1,-b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a+x2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a+x2,-b_depth/2,-h1/2,0,-s_t_2,0);	

				draw_left(2,-b_width/2+x,-b_depth/2-s_t_2+5,h);
				draw_left(2,-b_width/2+x+x2,-b_depth/2-s_t_2+5,h);

				draw_right(2,-b_width/2,-b_depth/2-s_t_2+5,h);
				draw_right(2,-b_width/2+x,-b_depth/2-s_t_2+5,h);

				draw_sen2(1,-b_width/2,-b_depth/2-s_t_2+5,h,x,0,0);
				draw_sen2(1,-b_width/2+x,-b_depth/2-s_t_2+5,h,x2,0,0);

				draw_sen1(1,a+x2,-b_depth/2-s_t_2+5,-h1/2,0,0,y);
				draw_sen1(1,a+x2,-b_depth/2-s_t_2+5,-h1/2+y,0,0,y2);
				
				draw_moji(2,-b_width/2+x/2,-b_depth/2-s_t_2+5,-h1/2+y+8,x);
				
				draw_moji(2,-b_width/2+x+x2/2,-b_depth/2-s_t_2+5,-h1/2+y+8,x2);
				
				draw_top(1,a+x2,-b_depth/2-s_t_2+5,-h1/2+y+y2);
				if(y!=0){
					draw_top(1,a+x2,-b_depth/2-s_t_2+5,-h1/2+y);
					draw_moji(2,-b_width/2+x+x2+8,-b_depth/2-s_t_2+5,-h1/2+y/2,y);
				}
				draw_down(1,a+x2,-b_depth/2-s_t_2+5,-h1/2);
				draw_down(1,a+x2,-b_depth/2-s_t_2+5,-h1/2+y);
				
				draw_moji(2,-b_width/2+x+x2+8,-b_depth/2-s_t_2+5,-h1/2+y+y2/2,y2);
			}
		}
		if(z==3){
			if(s==0){
				a=-b_width/2+x;
				b=-b_depth/2-s_t_2;
				h=b_height/2-y;
			
				draw_sen3(1,-b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a,-b_depth/2,h1/2,0,-s_t_2,0);

				draw_sen3(1,a,-b_depth/2+10,h,0,-s_t_2-10,0);	
				draw_sen3(1,a+r/2*k,-b_depth/2,h-r/2*k,0,-s_t_2,0);		
				draw_sen3(1,a-r/2*k,-b_depth/2,h+r/2*k,0,-s_t_2,0);
			
				draw_tl(1,a+r/2*k,-b_depth/2-s_t_2+5,h-r/2*k);

				draw_right(2,-b_width/2,-b_depth/2-s_t_2+5,h)
				draw_left(2,-b_width/2+x,-b_depth/2-s_t_2+5,h)

				draw_sen2(1,-b_width/2,-b_depth/2-s_t_2+5,h,x,0,0)
				draw_sen1(1,a,-b_depth/2-s_t_2+5,h,0,0,y)
				draw_sentl(1,a-10-r/2*k,-b_depth/2-s_t_2+5,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(1,a-10-r/2*k+10+r*0.707107+25,-b_depth/2-s_t_2+5,h-10-r/2*k,-15,0,0)
				draw_dr(1,a-r/2*k,-b_depth/2-s_t_2+5,h+r/2*k);
				draw_fai(2,a-10-r/2*k+10+r*0.707107+25,-b_depth/2-s_t_2+5,h-10-r/2*k+8);	
				if(r>99){
					draw_moji(2,a-10-r/2*k+10+r*0.707107+25-10,-b_depth/2-s_t_2+5,h-10-r/2*k+8,r);
				}else{
					draw_moji(2,a-10-r/2*k+10+r*0.707107+25-8,-b_depth/2-s_t_2+5,h-10-r/2*k+8,r);
				}
				draw_top(1,a,-b_depth/2-s_t_2+5,h1/2)
				draw_down(1,a,-b_depth/2-s_t_2+5,h)
				draw_moji(2,-b_width/2+x/2,-b_depth/2-s_t_2+5,h-2,x);
				draw_moji(2,-b_width/2+x+10,-b_depth/2-s_t_2+5,h1/2-y/2,y);
			}else{
				a=-b_width/2+x;
				b=-b_depth/2-s_t_2;
				h=b_height/2-y;
				
				draw_sen3(1,-b_width/2+x,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a+x2,-b_depth/2,h1/2,0,-s_t_2,0);
				draw_sen3(1,-b_width/2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a+x2,-b_depth/2,h,0,-s_t_2,0);
				draw_sen3(1,a+x2,-b_depth/2,h-y2,0,-s_t_2,0);	
				
			
				

				draw_left(2,-b_width/2+x,-b_depth/2-s_t_2+5,h);
				draw_left(2,-b_width/2+x+x2,-b_depth/2-s_t_2+5,h);

				draw_right(2,-b_width/2,-b_depth/2-s_t_2+5,h);
				draw_right(2,-b_width/2+x,-b_depth/2-s_t_2+5,h);

				draw_sen2(1,-b_width/2,-b_depth/2-s_t_2+5,h,x,0,0);
				draw_sen2(1,-b_width/2+x,-b_depth/2-s_t_2+5,h,x2,0,0);

				draw_sen1(1,a+x2,-b_depth/2-s_t_2+5,h1/2,0,0,-y);
				draw_sen1(1,a+x2,-b_depth/2-s_t_2+5,h1/2-y,0,0,-y2);
				
				draw_moji(2,-b_width/2+x/2,-b_depth/2-s_t_2+5,h1/2-y+8,x);
				
				draw_moji(2,-b_width/2+x+x2/2,-b_depth/2-s_t_2+5,h1/2-y+8,x2);
				
				draw_top(1,a+x2,-b_depth/2-s_t_2+5,h1/2);
				draw_top(1,a+x2,-b_depth/2-s_t_2+5,h1/2-y);

				draw_down(1,a+x2,-b_depth/2-s_t_2+5,h1/2-y-y2);
				draw_down(1,a+x2,-b_depth/2-s_t_2+5,h1/2-y);
				draw_moji(2,-b_width/2+x+x2+8,-b_depth/2-s_t_2+5,h1/2-y/2,y);
				draw_moji(2,-b_width/2+x+x2+8,-b_depth/2-s_t_2+5,h1/2-y-y2/2,y2);
			}

		}			
		
		s_t_2=s_t_2+10;
	}
	if(f==3){
		if(z==0){
			if(s==0){
				a=-b_width/2;
				b=-b_depth/2+x;
				h=b_height/2-y;
			
				draw_sen3(3,-b_width/2,-b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2+10,b,h,s_t_3+10,0,0);
	
				draw_sen3(3,-b_width/2,b+r/2*k,h-r/2*k,s_t_3,0,0);		
				draw_sen3(3,-b_width/2,b-r/2*k,h+r/2*k,s_t_3,0,0);
			
				draw_tl(3,a-s_t_3+5,b+r/2*k,h-r/2*k);

				draw_right(3,a-s_t_3+5,b,h)
				draw_left(3,a-s_t_3+5,-b_depth/2,h)

				draw_sen2(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,-x,0)
				draw_sen1(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,0,y)
				draw_sentl(3,a-s_t_3+5,-b_depth/2+x-10-r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a-s_t_3+5,-b_depth/2+x-20-r/2*k,h+10+r/2*k,10,10,0)
				draw_dr(3,a-s_t_3+5,-b_depth/2+x-r/2*k,h+r/2*k);
				draw_fai(3,a-s_t_3+5,-b_depth/2+x-r/2*k-20,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(3,a-s_t_3+5,-b_depth/2+x-20-r/2*k+10,h+10+r/2*k+8,r);
				}else{
					draw_moji(3,a-s_t_3+5,-b_depth/2+x-20-r/2*k+8,h+10+r/2*k+8,r);
				}
				draw_top(3,a-s_t_3+5,-b_depth/2+x,h1/2)
				draw_down(3,a-s_t_3+5,-b_depth/2+x,h)
				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x/2,h-2,x);
				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x+8,h1/2-y/2,y);
			}else{
				a=-b_width/2;
				b=-b_depth/2+x;
				h=b_height/2-y;
			
				draw_sen3(3,-b_width/2,-b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b+x2,h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b+x2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b+x2,h-y2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,h,s_t_3,0,0);
	
				draw_right(3,a-s_t_3+5,b+x2,h);
				

				draw_right(3,a-s_t_3+5,b,h);
				draw_left(3,a-s_t_3+5,-b_depth/2,h);
				draw_left(3,a-s_t_3+5,-b_depth/2+x,h);

				draw_sen2(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,-x,0);
				draw_sen2(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,x2,0);	

				draw_sen1(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2,h,0,0,y);
				draw_sen1(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2,h,0,0,-y2);
				
				draw_moji(3,a-s_t_3+5,-b_depth/2+x/2,h+5,x);
				
				draw_moji(3,a-s_t_3+5,-b_depth/2+x+x2/2,h+5,x2);
				
				draw_top(3,a-s_t_3+5,-b_depth/2+x+x2,h1/2);
				draw_down(3,a-s_t_3+5,-b_depth/2+x+x2,h);
				
				draw_top(3,a-s_t_3+5,-b_depth/2+x+x2,h);
				draw_down(3,a-s_t_3+5,-b_depth/2+x+x2,h-y2);

				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2+8,h1/2-y/2,y);
				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2+8,h1/2-y-y2/2,y2);
			}
		}
		if(z==1){
			if(s==0){
				a=-b_width/2;
				b=-b_depth/2+x;
				h=-b_height/2+y;
			
				draw_sen3(3,-b_width/2,-b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,-h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2+10,b,h,s_t_3+10,0,0);
	
				draw_sen3(3,-b_width/2,b+r/2*k,h+r/2*k,s_t_3,0,0);		
				draw_sen3(3,-b_width/2,b-r/2*k,h-r/2*k,s_t_3,0,0);
			
				draw_tr(3,a-s_t_3+5,b-r/2*k,h-r/2*k);

				draw_right(3,a-s_t_3+5,b,h)
				draw_left(3,a-s_t_3+5,-b_depth/2,h)

				draw_sen2(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,-x,0)
				draw_sen1(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,0,-y)
				draw_sentr(3,a-s_t_3+5,-b_depth/2+x+10+r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a-s_t_3+5,-b_depth/2+x+10+r/2*k,h+10+r/2*k,10,10,0)
				draw_dl(3,a-s_t_3+5,-b_depth/2+x+r/2*k,h+r/2*k);
				draw_fai(3,a-s_t_3+5,-b_depth/2+x+r/2*k+10,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(3,a-s_t_3+5,-b_depth/2+x+10+r/2*k+10,h+10+r/2*k+8,r);
				}else{
					draw_moji(3,a-s_t_3+5,-b_depth/2+x+10+r/2*k+8,h+10+r/2*k+8,r);
				}
				draw_down(3,a-s_t_3+5,-b_depth/2+x,-h1/2)
				draw_top(3,a-s_t_3+5,-b_depth/2+x,h)
				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x/2,h+8,x);
				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x+8,-h1/2+y/2,y);
			}else{
				a=-b_width/2;
				b=-b_depth/2+x;
				h=-b_height/2+y;

				draw_sen3(3,-b_width/2,-b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b+x2,-h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b+x2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b+x2,h+y2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,h,s_t_3,0,0);
	
				draw_right(3,a-s_t_3+5,b+x2,h);
				

				draw_right(3,a-s_t_3+5,b,h);
				draw_left(3,a-s_t_3+5,-b_depth/2,h);
				draw_left(3,a-s_t_3+5,-b_depth/2+x,h);

				draw_sen2(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,-x,0);
				draw_sen2(3,-b_width/2-s_t_3+5,-b_depth/2+x,h,0,x2,0);	

				draw_sen1(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2,h,0,0,-y);
				draw_sen1(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2,h,0,0,+y2);
				
				draw_moji(3,a-s_t_3+5,-b_depth/2+x/2,h+8,x);
				
				draw_moji(3,a-s_t_3+5,-b_depth/2+x+x2/2,h+8,x2);
				
				draw_down(3,a-s_t_3+5,-b_depth/2+x+x2,-h1/2);
				if(y!=0){
					draw_top(3,a-s_t_3+5,-b_depth/2+x+x2,h);
					draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2+8,-h1/2+y/2,y);
				}
				draw_down(3,a-s_t_3+5,-b_depth/2+x+x2,h);
				draw_top(3,a-s_t_3+5,-b_depth/2+x+x2,h+y2);

				
				draw_moji(3,-b_width/2-s_t_3+5,-b_depth/2+x+x2+8,-h1/2+y+y2/2,y2);
			}
		}			
		if(z==2){
			if(s==0){
				a=-b_width/2;
				b=b_depth/2-x;
				h=-b_height/2+y;
			
				draw_sen3(3,-b_width/2,b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,-h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2+10,b,h,s_t_3+10,0,0);
	
				draw_sen3(3,-b_width/2,b+r/2*k,h-r/2*k,s_t_3,0,0);		
				draw_sen3(3,-b_width/2,b-r/2*k,h+r/2*k,s_t_3,0,0);
			
				draw_tl(3,a-s_t_3+5,b+r/2*k,h-r/2*k);

				draw_right(3,a-s_t_3+5,b_depth/2,h)
				draw_left(3,a-s_t_3+5,b,h)

				draw_sen2(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,x,0)
				draw_sen1(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,0,-y)
				draw_sentl(3,a-s_t_3+5,b_depth/2-x-10-r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a-s_t_3+5,b_depth/2-x-20-r/2*k,h+10+r/2*k,10,10,0)
				draw_dr(3,a-s_t_3+5,b_depth/2-x-r/2*k,h+r/2*k);
				draw_fai(3,a-s_t_3+5,b_depth/2-x-r/2*k-20,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(3,a-s_t_3+5,b_depth/2-x-20-r/2*k+10,h+10+r/2*k+8,r);
				}else{
					draw_moji(3,a-s_t_3+5,b_depth/2-x-20-r/2*k+8,h+10+r/2*k+8,r);
				}
				draw_down(3,a-s_t_3+5,b_depth/2-x,-h1/2)
				draw_top(3,a-s_t_3+5,b_depth/2-x,h)
				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x/2,h+8,x);
				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x-8,-h1/2+y/2,y);
			}else{
				a=-b_width/2;
				b=b_depth/2-x;
				h=-b_height/2+y;

				draw_sen3(3,-b_width/2,b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b-x2,-h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b-x2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b-x2,h+y2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,h,s_t_3,0,0);
	
				draw_left(3,a-s_t_3+5,b-x2,h);
				

				draw_left(3,a-s_t_3+5,b,h);

				draw_right(3,a-s_t_3+5,b_depth/2,h);
				draw_right(3,a-s_t_3+5,b_depth/2-x,h);

				draw_sen2(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,+x,0);
				draw_sen2(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,-x2,0);	

				draw_sen1(3,-b_width/2-s_t_3+5,b_depth/2-x-x2,h,0,0,-y);
				draw_sen1(3,-b_width/2-s_t_3+5,b_depth/2-x-x2,h,0,0,+y2);
				
				draw_moji(3,a-s_t_3+5,b_depth/2-x/2,h+5,x);
				
				draw_moji(3,a-s_t_3+5,b_depth/2-x-x2/2,h+5,x2);
				
				draw_down(3,a-s_t_3+5,b_depth/2-x-x2,-h1/2);
				if(y!=0){
					draw_top(3,a-s_t_3+5,b_depth/2-x-x2,h);
					draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x-x2-8,-h1/2+y/2,y);
				}
				draw_down(3,a-s_t_3+5,b_depth/2-x-x2,h);
				draw_top(3,a-s_t_3+5,b_depth/2-x-x2,h+y2);

				
				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x-x2-8,-h1/2+y+y2/2,y2);
			}
		}
		if(z==3){
			if(s==0){
				a=-b_width/2;
				b=b_depth/2-x;
				h=b_height/2-y;
			
				draw_sen3(3,-b_width/2,b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2+10,b,h,s_t_3+10,0,0);
	
				draw_sen3(3,-b_width/2,b+r/2*k,h+r/2*k,s_t_3,0,0);		
				draw_sen3(3,-b_width/2,b-r/2*k,h-r/2*k,s_t_3,0,0);
			
				draw_tr(3,a-s_t_3+5,b-r/2*k,h-r/2*k);

				draw_right(3,a-s_t_3+5,b_depth/2,h)
				draw_left(3,a-s_t_3+5,b,h)

				draw_sen2(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,x,0)
				draw_sen1(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,0,y)
				draw_sentr(3,a-s_t_3+5,b_depth/2-x+10+r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a-s_t_3+5,b_depth/2-x-20-r/2*k-5,h-10-r/2*k,0,15,0)
				draw_dl(3,a-s_t_3+5,b_depth/2-x+r/2*k,h+r/2*k);
				draw_fai(3,a-s_t_3+5,b_depth/2-x-r/2*k-20-5,h-10-r/2*k+8);	
				if(r>99){
					draw_moji(3,a-s_t_3+5,b_depth/2-x-20-r/2*k+10-5,h-10-r/2*k+8,r);
				}else{
					draw_moji(3,a-s_t_3+5,b_depth/2-x-20-r/2*k+8-5,h-10-r/2*k+8,r);
				}
				draw_top(3,a-s_t_3+5,b_depth/2-x,h1/2)
				draw_down(3,a-s_t_3+5,b_depth/2-x,h)
				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x/2,h+-2,x);
				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x-8,h1/2-y/2,y);
			}else{
				
				a=-b_width/2;
				b=b_depth/2-x;
				h=b_height/2-y;
			
				draw_sen3(3,-b_width/2,b_depth/2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b-x2,h1/2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b-x2,h,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b-x2,h-y2,s_t_3,0,0);
				draw_sen3(3,-b_width/2,b,h,s_t_3,0,0);
	
				draw_right(3,a-s_t_3+5,b,h);
				

				draw_left(3,a-s_t_3+5,b,h);
				draw_left(3,a-s_t_3+5,b-x2,h);
				draw_right(3,a-s_t_3+5,b_depth/2,h);

				draw_sen2(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,x,0);
				draw_sen2(3,-b_width/2-s_t_3+5,b_depth/2-x,h,0,-x2,0);	

				draw_sen1(3,-b_width/2-s_t_3+5,b_depth/2-x-x2,h,0,0,y);
				draw_sen1(3,-b_width/2-s_t_3+5,b_depth/2-x-x2,h,0,0,-y2);
				
				draw_moji(3,a-s_t_3+5,b_depth/2-x/2,h+5,x);
				
				draw_moji(3,a-s_t_3+5,b_depth/2-x-x2/2,h+5,x2);
				
				draw_top(3,a-s_t_3+5,b_depth/2-x-x2,h1/2);
				draw_down(3,a-s_t_3+5,b_depth/2-x-x2,h);
				
				draw_top(3,a-s_t_3+5,b_depth/2-x-x2,h);
				draw_down(3,a-s_t_3+5,b_depth/2-x-x2,h-y2);

				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x-x2-10,h1/2-y/2,y);
				draw_moji(3,-b_width/2-s_t_3+5,b_depth/2-x-x2-10,h1/2-y-y2/2,y2);
			}
		}
		s_t_3=s_t_3+10;
	}
	if(f==4){
		if(z==3){
			if(s==0){
				a=b_width/2;
				b=-b_depth/2+x;
				h=b_height/2-y;
			
				draw_sen3(3,b_width/2,-b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2-10,b,h,-s_t_4-10,0,0);
	
				draw_sen3(3,b_width/2,b+r/2*k,h-r/2*k,-s_t_4,0,0);		
				draw_sen3(3,b_width/2,b-r/2*k,h+r/2*k,-s_t_4,0,0);
			
				draw_tl(3,a+s_t_4-5,b+r/2*k,h-r/2*k);

				draw_right(3,a+s_t_4-5,b,h)
				draw_left(3,a+s_t_4-5,-b_depth/2,h)

				draw_sen2(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,-x,0)
				draw_sen1(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,0,y)
				draw_sentl(3,a+s_t_4-5,-b_depth/2+x-10-r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a+s_t_4-5,-b_depth/2+x+10+r/2*k,h-10-r/2*k,10,10,0)
				draw_dr(3,a+s_t_4-5,-b_depth/2+x-r/2*k,h+r/2*k);
				draw_fai(3,a+s_t_4-5,-b_depth/2+x+r/2*k+20,h-10-r/2*k+8);	
				if(r>99){
					draw_moji(4,a+s_t_4-5,-b_depth/2+x+22+r/2*k-10,h-10-r/2*k+8,r);
				}else{
					draw_moji(4,a+s_t_4-5,-b_depth/2+x+22+r/2*k-8,h-10-r/2*k+8,r);
				}
				draw_top(3,a+s_t_4-5,-b_depth/2+x,h1/2)
				draw_down(3,a+s_t_4-5,-b_depth/2+x,h)
				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x/2,h-2,x);
				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x+10,h1/2-y/2,y);
			}else{
				a=b_width/2;
				b=-b_depth/2+x;
				h=b_height/2-y;
			
				draw_sen3(3,b_width/2,-b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b+x2,h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b+x2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b+x2,h-y2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,h,-s_t_4,0,0);
	
				draw_right(3,a+s_t_4-5,b+x2,h);
				

				draw_right(3,a+s_t_4-5,b,h);
				draw_left(3,a+s_t_4-5,-b_depth/2,h);
				draw_left(3,a+s_t_4-5,-b_depth/2+x,h);

				draw_sen2(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,-x,0);
				draw_sen2(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,x2,0);	

				draw_sen1(3,b_width/2+s_t_4-5,-b_depth/2+x+x2,h,0,0,y);
				draw_sen1(3,b_width/2+s_t_4-5,-b_depth/2+x+x2,h,0,0,-y2);
				
				draw_moji(4,a+s_t_4-5,-b_depth/2+x/2,h+8,x);
				
				draw_moji(4,a+s_t_4-5,-b_depth/2+x+x2/2,h+8,x2);
				
				draw_top(3,a+s_t_4-5,-b_depth/2+x+x2,h1/2);
				draw_down(3,a+s_t_4-5,-b_depth/2+x+x2,h);
				
				draw_top(3,a+s_t_4-5,-b_depth/2+x+x2,h);
				draw_down(3,a+s_t_4-5,-b_depth/2+x+x2,h-y2);

				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x+x2+8,h1/2-y/2,y);
				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x+x2+8,h1/2-y-y2/2,y2);
			}
		}
		if(z==2){
			if(s==0){
				a=b_width/2;
				b=-b_depth/2+x;
				h=-b_height/2+y;
			
				draw_sen3(3,b_width/2,-b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,-h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2-10,b,h,-s_t_4-10,0,0);
	
				draw_sen3(3,b_width/2,b+r/2*k,h+r/2*k,-s_t_4,0,0);		
				draw_sen3(3,b_width/2,b-r/2*k,h-r/2*k,-s_t_4,0,0);
			
				draw_tr(3,a+s_t_4-5,b-r/2*k,h-r/2*k);

				draw_right(3,a+s_t_4-5,b,h)
				draw_left(3,a+s_t_4-5,-b_depth/2,h)

				draw_sen2(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,-x,0)
				draw_sen1(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,0,-y)
				draw_sentr(3,a+s_t_4-5,-b_depth/2+x+10+r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a+s_t_4-5,-b_depth/2+x+10+r/2*k,h+10+r/2*k,10,10,0)
				draw_dl(3,a+s_t_4-5,-b_depth/2+x+r/2*k,h+r/2*k);
				draw_fai(3,a+s_t_4-5,-b_depth/2+x+r/2*k+20,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(4,a+s_t_4-5,-b_depth/2+x+22+r/2*k-10,h+10+r/2*k+8,r);
				}else{
					draw_moji(4,a+s_t_4-5,-b_depth/2+x+22+r/2*k-8,h+10+r/2*k+8,r);
				}
				draw_down(3,a+s_t_4-5,-b_depth/2+x,-h1/2)
				draw_top(3,a+s_t_4-5,-b_depth/2+x,h)
				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x/2,h+8,x);
				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x+10,-h1/2+y/2,y);
			}else{
				a=b_width/2;
				b=-b_depth/2+x;
				h=-b_height/2+y;

				draw_sen3(3,b_width/2,-b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b+x2,-h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b+x2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b+x2,h+y2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,h,-s_t_4,0,0);
	
				draw_right(3,a+s_t_4-5,b+x2,h);
				

				draw_right(3,a+s_t_4-5,b,h);
				draw_left(3,a+s_t_4-5,-b_depth/2,h);
				draw_left(3,a+s_t_4-5,-b_depth/2+x,h);

				draw_sen2(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,-x,0);
				draw_sen2(3,b_width/2+s_t_4-5,-b_depth/2+x,h,0,x2,0);	

				draw_sen1(3,b_width/2+s_t_4-5,-b_depth/2+x+x2,h,0,0,-y);
				draw_sen1(3,b_width/2+s_t_4-5,-b_depth/2+x+x2,h,0,0,+y2);
				
				draw_moji(4,a+s_t_4-5,-b_depth/2+x/2,h+8,x);
				
				draw_moji(4,a+s_t_4-5,-b_depth/2+x+x2/2,h+8,x2);
				
				draw_down(3,a+s_t_4-5,-b_depth/2+x+x2,-h1/2);
				if(y!=0){
					draw_top(3,a+s_t_4-5,-b_depth/2+x+x2,h);
					draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x+x2+8,-h1/2+y/2,y);
				}
				draw_down(3,a+s_t_4-5,-b_depth/2+x+x2,h);
				draw_top(3,a+s_t_4-5,-b_depth/2+x+x2,h+y2);

				
				draw_moji(4,b_width/2+s_t_4-5,-b_depth/2+x+x2+8,-h1/2+y+y2/2,y2);
			}
		}			
		if(z==1){
			if(s==0){
				a=b_width/2;
				b=b_depth/2-x;
				h=-b_height/2+y;
			
				draw_sen3(3,b_width/2,b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,-h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2-10,b,h,-s_t_4-10,0,0);
	
				draw_sen3(3,b_width/2,b+r/2*k,h-r/2*k,-s_t_4,0,0);		
				draw_sen3(3,b_width/2,b-r/2*k,h+r/2*k,-s_t_4,0,0);
			
				draw_tl(3,a+s_t_4-5,b+r/2*k,h-r/2*k);

				draw_right(3,a+s_t_4-5,b_depth/2,h)
				draw_left(3,a+s_t_4-5,b,h)

				draw_sen2(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,x,0)
				draw_sen1(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,0,-y)
				draw_sentl(3,a+s_t_4-5,b_depth/2-x-10-r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a+s_t_4-5,b_depth/2-x-10-r/2*k-10,h+10+r/2*k,10,10,0)
				draw_dr(3,a+s_t_4-5,b_depth/2-x-r/2*k,h+r/2*k);
				draw_fai(4,a+s_t_4-5,b_depth/2-x-r/2*k-10,h+10+r/2*k+8);	
				if(r>99){
					draw_moji(4,a+s_t_4-5,b_depth/2-x-10-r/2*k-10,h+10+r/2*k+8,r);
				}else{
					draw_moji(4,a+s_t_4-5,b_depth/2-x-10-r/2*k-8,h+10+r/2*k+8,r);
				}
				draw_down(3,a+s_t_4-5,b_depth/2-x,-h1/2)
				draw_top(3,a+s_t_4-5,b_depth/2-x,h)
				draw_moji(4,b_width/2+s_t_4-5,b_depth/2-x/2,h+8,x);
				draw_moji(4,b_width/2+s_t_4-5,b_depth/2-x-8,-h1/2+y/2,y);
			}else{
				a=b_width/2;
				b=b_depth/2-x;
				h=-b_height/2+y;

				draw_sen3(3,b_width/2,b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b-x2,-h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b-x2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b-x2,h+y2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,h,-s_t_4,0,0);
	
				draw_left(3,a+s_t_4-5,b-x2,h);
				

				draw_left(3,a+s_t_4-5,b,h);

				draw_right(3,a+s_t_4-5,b_depth/2,h);
				draw_right(3,a+s_t_4-5,b_depth/2-x,h);

				draw_sen2(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,+x,0);
				draw_sen2(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,-x2,0);	

				draw_sen1(3,b_width/2+s_t_4-5,b_depth/2-x-x2,h,0,0,-y);
				draw_sen1(3,b_width/2+s_t_4-5,b_depth/2-x-x2,h,0,0,+y2);
				
				draw_moji(4,a+s_t_4-5,b_depth/2-x/2,h+8,x);
				
				draw_moji(4,a+s_t_4-5,b_depth/2-x-x2/2,h+8,x2);
				
				draw_down(3,a+s_t_4-5,b_depth/2-x-x2,-h1/2);
				if(y!=0){
					draw_top(3,a+s_t_4-5,b_depth/2-x-x2,h);
					draw_moji(4,b_width/2+s_t_4+5,b_depth/2-x-x2-10,-h1/2+y/2,y);
				}
				draw_down(3,a+s_t_4-5,b_depth/2-x-x2,h);
				draw_top(3,a+s_t_4-5,b_depth/2-x-x2,h+y2);

				
				draw_moji(4,b_width/2+s_t_4+5,b_depth/2-x-x2-10,-h1/2+y+y2/2,y2);
			}
		}
		if(z==0){
			if(s==0){
				a=b_width/2;
				b=b_depth/2-x;
				h=b_height/2-y;
			
				draw_sen3(3,b_width/2,b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2-10,b,h,-s_t_4-10,0,0);
	
				draw_sen3(3,b_width/2,b+r/2*k,h+r/2*k,-s_t_4,0,0);		
				draw_sen3(3,b_width/2,b-r/2*k,h-r/2*k,-s_t_4,0,0);
			
				draw_tr(3,a+s_t_4-5,b-r/2*k,h-r/2*k);

				draw_right(3,a+s_t_4-5,b_depth/2,h)
				draw_left(3,a+s_t_4-5,b,h)

				draw_sen2(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,x,0)
				draw_sen1(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,0,y)
				draw_sentr(3,a+s_t_4-5,b_depth/2-x+10+r/2*k,h+10+r/2*k,0,0,-10-r*0.707107-10);
				draw_sen2(3,a+s_t_4-5,b_depth/2-x-10-r/2*k-10,h-10-r/2*k,10,10,0)
				draw_dl(3,a+s_t_4-5,b_depth/2-x+r/2*k,h+r/2*k);
				draw_fai(4,a+s_t_4-5,b_depth/2-x-10-r/2*k,h-10-r/2*k+8);	
				if(r>99){
					draw_moji(4,a+s_t_4-5,b_depth/2-x-10-r/2*k-10,h-10-r/2*k+8,r);
				}else{
					draw_moji(4,a+s_t_4-5,b_depth/2-x-10-r/2*k-8,h-10-r/2*k+8,r);
				}
				draw_top(3,a+s_t_4-5,b_depth/2-x,h1/2)
				draw_down(3,a+s_t_4-5,b_depth/2-x,h)
				draw_moji(4,b_width/2+s_t_4-5,b_depth/2-x/2,h-2,x);
				draw_moji(4,b_width/2+s_t_4-5,b_depth/2-x-8,h1/2-y/2,y);
			}else{
				
				a=b_width/2;
				b=b_depth/2-x;
				h=b_height/2-y;
			
				draw_sen3(3,b_width/2,b_depth/2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b-x2,h1/2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b-x2,h,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b-x2,h-y2,-s_t_4,0,0);
				draw_sen3(3,b_width/2,b,h,-s_t_4,0,0);
	
				draw_right(3,a+s_t_4-5,b,h);
				

				draw_left(3,a+s_t_4-5,b,h);
				draw_left(3,a+s_t_4-5,b-x2,h);
				draw_right(3,a+s_t_4-5,b_depth/2,h);

				draw_sen2(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,x,0);
				draw_sen2(3,b_width/2+s_t_4-5,b_depth/2-x,h,0,-x2,0);	

				draw_sen1(3,b_width/2+s_t_4-5,b_depth/2-x-x2,h,0,0,y);
				draw_sen1(3,b_width/2+s_t_4-5,b_depth/2-x-x2,h,0,0,-y2);
				
				draw_moji(4,a+s_t_4-5,b_depth/2-x/2,h+5,x);
				
				draw_moji(4,a+s_t_4-5,b_depth/2-x-x2/2,h+5,x2);
				
				draw_top(3,a+s_t_4-5,b_depth/2-x-x2,h1/2);
				draw_down(3,a+s_t_4-5,b_depth/2-x-x2,h);
				
				draw_top(3,a+s_t_4-5,b_depth/2-x-x2,h);
				draw_down(3,a+s_t_4-5,b_depth/2-x-x2,h-y2);

				draw_moji(4,b_width/2+s_t_4-5,b_depth/2-x-x2-10,h1/2-y/2,y);
				draw_moji(4,b_width/2+s_t_4-5,b_depth/2-x-x2-10,h1/2-y-y2/2,y2);
			}
		}
		s_t_4=s_t_4+10;
	}
}
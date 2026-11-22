function draw_moji(f,x,y,h,st)
{
	var i=0;
	var a=0;
	var s;
	var l_cnt=0;
	var f0=0;
	var f1=0;
	var f2=0;
	var f3=0;
	var f4=0;

	s=st.toString();
	
	l_cnt=-s.length/2*4;
	for(i=0;i<s.length;i++){
		a=s.substring(i,i+1);
		if(a==0){
			if(f==0 || f==1){
				draw_0(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_0(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_0(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_0(f,x,y-l_cnt,h);
			}

			l_cnt=l_cnt+4;
		}
		if(a==1){
			if(f==0 || f==1){
				draw_1(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_1(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_1(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_1(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+3;
		}
		if(a==2){
			if(f==0 || f==1){
				draw_2(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_2(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_2(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_2(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==3){
			if(f==0 || f==1){
				draw_3(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_3(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_3(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_3(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==4){
			if(f==0 || f==1){
				draw_4(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_4(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_4(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_4(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==5){
			if(f==0 || f==1){
				draw_5(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_5(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_5(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_5(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==6){
			if(f==0 || f==1){
				draw_6(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_6(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_6(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_6(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==7){
			if(f==0 || f==1){
				draw_7(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_7(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_7(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_7(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==8){
			if(f==0 || f==1){
				draw_8(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_8(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_8(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_8(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a==9){
			if(f==0 || f==1){
				draw_9(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_9(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_9(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_9(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+4;
		}
		if(a=="."){
			if(f==0 || f==1){
				draw_dod(f,x+l_cnt,y,h);
			}
			if(f==2){
				draw_dod(f,x-l_cnt,y,h);
			}
			if(f==3){
				draw_dod(f,x,y+l_cnt,h);
			}
			if(f==4){
				draw_dod(f,x,y-l_cnt,h);
			}
			l_cnt=l_cnt+3;
		}

	}


	
}
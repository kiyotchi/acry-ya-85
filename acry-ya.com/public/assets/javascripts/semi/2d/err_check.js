var err_ms=9.99
	var err_mt=9.99
	var h_dis=0
	var h_disa=0
	var h_disb=0
	var h_disc=0
	var h_disd=0
	var ss
function check_ini()
{
	if(h_tepa_x==1){
		if(m_tepa=="30度"){
			h_dis=4
		}else{
			h_dis=4
		}
	}
	if(h_tepa_x==2){
		if(m_tepa=="30度"){
			h_dis=5
		}else{
			h_dis=4
		}
	}
	if(h_tepa_x==3){
		if(m_tepa=="30度"){
			h_dis=7
		}else{
			h_dis=4
		}
	}
	if(h_tepa_x==4){
		if(m_tepa=="30度"){
			h_dis=8
		}else{
			h_dis=5
		}
	}
	if(h_tepa_x==5){
		if(m_tepa=="45度"){
			h_dis=6
		}
	}
}
function ana_chk(yoko,tate)
{
//辺　1、角R　2、斜め　3、穴　4、角抜き　5
	var i=0;
	var r=0;
	var flag=0;
	var flag2=0;
	var k=0;
	var j=0;
	
	check_ini();
	for(i=0;i<6;i++){
		if(h_ana_t[i]!=2 && h_ana_t[i]!=3){
			
			h_a_r2[i*4]=h_a_r[i*4]
			h_a_r2[i*4+1]=h_a_r[i*4+1]
			h_a_r2[i*4+2]=h_a_r[i*4+2]
			h_a_r2[i*4+3]=h_a_r[i*4+3]
		}
		if(h_ana_t[i]==2){

			switch (h_a_r[i*4]){
				case 8:
					h_a_r2[i*4]=17.5
					break;
				case 6:
					h_a_r2[i*4]=13.5
					break;
				case 5:
					h_a_r2[i*4]=11
					break;
				case 4:	
					h_a_r2[i*4]=8.5
					break;
				case 3:
					h_a_r2[i*4]=6.5
					break;
				break;
			}
			switch (h_a_r[i*4+1]){
				case 8:
					h_a_r2[i*4+1]=17.5
					break;
				case 6:
					h_a_r2[i*4+1]=13.5
					break;
				case 5:
					h_a_r2[i*4+1]=11
					break;
				case 4:	
					h_a_r2[i*4+1]=8.5
					break;
				case 3:
					h_a_r2[i*4+1]=6.5
					break;
				break;
			}
			switch (h_a_r[i*4+2]){
				case 8:
					h_a_r2[i*4+2]=17.5
					break;
				case 6:
					h_a_r2[i*4+2]=13.5
					break;
				case 5:
					h_a_r2[i*4+2]=11
					break;
				case 4:	
					h_a_r2[i*4+2]=8.5
					break;
				case 3:
					h_a_r2[i*4+2]=6.5
					break;
				break;
			}
			switch (h_a_r[i*4+3]){
				case 8:
					h_a_r2[i*4+3]=17.5
					break;
				case 6:
					h_a_r2[i*4+3]=13.5	
					break;
				case 5:
					h_a_r2[i*4+3]=11
					break;
				case 4:	
					h_a_r2[i*4+3]=8.5
					break;
				case 3:
					h_a_r2[i*4+3]=6.5
					break;
				break;
			}
		}
		if(h_ana_t[i]==3){

			switch (h_a_r[i*4]){
				case 8:
					h_a_r2[i*4]=14
					break;
				case 6:
					h_a_r2[i*4]=11;	
					break;
				case 5:
					h_a_r2[i*4]=9.5;
					break;
				case 4:	
					h_a_r2[i*4]=8;
					break;
				case 3:
					h_a_r2[i*4]=6.5;
					break;
				break;
			}
			switch (h_a_r[i*4+1]){
				case 8:
					h_a_r2[i*4+1]=14
					break;
				case 6:
					h_a_r2[i*4+1]=11	
					break;
				case 5:
					h_a_r2[i*4+1]=9.5
					break;
				case 4:	
					h_a_r2[i*4+1]=8
					break;
				case 3:
					h_a_r2[i*4+1]=6.5
					break;
				break;
			}
			switch (h_a_r[i*4+2]){
				case 8:
					h_a_r2[i*4+2]=14
					break;
				case 6:
					h_a_r2[i*4+2]=11	
					break;
				case 5:
					h_a_r2[i*4+2]=9.5
					break;
				case 4:	
					h_a_r2[i*4+2]=8
					break;
				case 3:
					h_a_r2[i*4+2]=6.5
					break;
				break;
			}
			switch (h_a_r[i*4+3]){
				case 8:
					h_a_r2[i*4+3]=14
					break;
				case 6:
					h_a_r2[i*4+3]=11	
					break;
				case 5:
					h_a_r2[i*4+3]=9.5
					break;
				case 4:	
					h_a_r2[i*4+3]=8
					break;
				case 3:
					h_a_r2[i*4+3]=6.5
					break;
				break;
			}
		}
	}
	
	for(i=0;i<6;i++){
		for(j=0;j<4;j++){
			//穴左辺
			ss=h_tepa_suu.toString();
			if(ss.indexOf("B")>=0){
				h_disb=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],1);
			}else{
				h_disb=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],0);
			}
			if(h_a_x[i*4+j]<=h_disb && h_a_x[i*4+j]!=0){
				a_err1[i]=1;
				a_err_l1[i]=a_err_l1[i] + "2";
			}
			//穴上辺
			if(ss.indexOf("A")>=0){
				h_disa=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],1);
			}else{
				h_disa=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],0);
			}
			if(h_a_y[i*4+j]<=h_disa && h_a_y[i*4+j]!=0){
				a_err1[i]=1;
				a_err_l1[i]=a_err_l1[i] + "1";
			}
			
			//穴下辺
			if(ss.indexOf("C")>=0){
				h_disc=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],1);
			}else{
				h_disc=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],0);
			}


			if(h_a_y[i*4+j]>=tate-h_disc && h_a_y[i*4+j]!=0){
				a_err1[i]=1;
				a_err_l1[i]=a_err_l1[i] +"3";
			}
			//穴右辺
			if(ss.indexOf("D")>=0){
				h_disd=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],1);
			}else{

				h_disd=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],0);
			}
			if(h_a_x[i*4+j]>=yoko-h_disd && h_a_x[i*4+j]!=0){
				a_err1[i]=1;
				a_err_l1[i]=a_err_l1[i] +"4";
			}
		}
		
	}
	for(i=0;i<24;i++){
		if(h_a_x[i]>0 && h_a_y[i]>0){
		k=Math.floor(i / 4);
		err_m=dis_h(h_a_r[i*4+j],m_kado_r[0]*2,3);
		if (m_kado_r[0]!=0 ){
			if ((h_a_x[i]<=(m_kado_r[0]))&&(h_a_y[i]<=(m_kado_r[0]))){
				r=Math.sqrt((h_a_x[i]-m_kado_r[0])*(h_a_x[i]-m_kado_r[0])+(h_a_y[i]-m_kado_r[0])*(h_a_y[i]-m_kado_r[0]));
				if (h_a_r[i]/2>=m_kado_r[0]-err_m-r ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=1;
					}
				}
			}else{
				if(h_a_r[i]/2<m_kado_r[0]){
				}else{
				r=Math.sqrt((h_a_x[i]-m_kado_r[0])*(h_a_x[i]-m_kado_r[0])+(h_a_y[i]-m_kado_r[0])*(h_a_y[i]-m_kado_r[0]));
				if (h_a_r[i]/2>=m_kado_r[0]+r+err_m ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=1;
					}
				}
				}
			}


		}
		err_m=dis_h(h_a_r[i*4+j],m_kado_r[1]*2,3);
		if (m_kado_r[1]!=0 ){
			if ((h_a_x[i]<=(m_kado_r[1]))&&(h_a_y[i]>=tate-m_kado_r[1])){
				r=Math.sqrt((h_a_x[i]-m_kado_r[1])*(h_a_x[i]-m_kado_r[1])+(tate-h_a_y[i]-m_kado_r[1])*(tate-h_a_y[i]-m_kado_r[1]));
				if (h_a_r[i]/2>=m_kado_r[1]-err_m-r ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=2;
					}
				}
			}else{
				if(h_a_r[i]/2<m_kado_r[1]){
				}else{
				r=Math.sqrt((h_a_x[i]-m_kado_r[1])*(h_a_x[i]-m_kado_r[1])+(h_a_y[i]-tate+m_kado_r[1])*(h_a_y[i]-tate+m_kado_r[1]));
				if (h_a_r[i]/2>=m_kado_r[1]+r+err_m ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=2;
					}
				}
				}
			}


		}
		err_m=dis_h(h_a_r[i*4+j],m_kado_r[2]*2,3);
		if (m_kado_r[2]!=0 ){
			if ((h_a_x[i]>=yoko-(m_kado_r[2]))&&(h_a_y[i]>=tate-(m_kado_r[2]))){
				r=Math.sqrt((h_a_x[i]-yoko+m_kado_r[2])*(h_a_x[i]-yoko+m_kado_r[2])+(h_a_y[i]-tate+m_kado_r[2])*(h_a_y[i]-tate+m_kado_r[2]));
				if (m_kado_r[2]<=h_a_r[i]/2+r+err_m ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=3;
					}
				}
			}else{
				if(h_a_r[i]/2<m_kado_r[2]){
				}else{
				r=Math.sqrt((h_a_x[i]-yoko+m_kado_r[2])*(h_a_x[i]-yoko+m_kado_r[2])+(h_a_y[i]-tate+m_kado_r[2])*(h_a_y[i]-tate+m_kado_r[2]));
				if (h_a_r[i]/2>=m_kado_r[2]+r+err_m ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=3;
					}
				}
				}
			}


		}
		err_m=dis_h(h_a_r[i*4+j],m_kado_r[3]*2,3);
		if (m_kado_r[3]!=0 ){
			if ((h_a_x[i]>=yoko-(m_kado_r[3]))&&(h_a_y[i]<=(m_kado_r[3]))){
				r=Math.sqrt((h_a_x[i]-yoko+m_kado_r[3])*(h_a_x[i]-yoko+m_kado_r[3])+(h_a_y[i]-m_kado_r[3])*(h_a_y[i]-m_kado_r[3]));
				if (m_kado_r[3]<=h_a_r[i]/2+r+err_m ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=4;
					}
				}
			}else{
				if(h_a_r[i]/2<m_kado_r[3]){
				}else{
				r=Math.sqrt((h_a_x[i]-yoko+m_kado_r[3])*(h_a_x[i]-yoko+m_kado_r[3])+(h_a_y[i]-m_kado_r[3])*(h_a_y[i]-m_kado_r[3]));
				if (h_a_r[i]/2>=m_kado_r[3]+r+err_m ){
					if (h_a_x[i]!=0){
						a_err2[k]=2;
						a_err_l2[k]=4;
					}
				}
				}
				
			}


		}
		
		var w_disA=0;
		var w_disB=0;
		var w_disC=0;
		var w_p=0;
		var w_r=0;
		err_m=dis_h(h_a_r[i*4+j],h_a_r2[i*4+j],4);
		if ((m_cut_x[0]!=0)&&(m_cut_y[0]!=0)&&(h_a_x[i]!=0)&&(h_a_y[i]!=0)){
			if (((h_a_x[i])*(m_cut_y[0]/m_cut_x[0])+h_a_y[i])<=m_cut_y[0]){
				a_err3[k]=3;
				a_err_l3[k]=1;
			}else{
				w_disA=Math.sqrt((h_a_x[i]-m_cut_x[0])*(h_a_x[i]-m_cut_x[0])+(h_a_y[i])*(h_a_y[i]));
				w_disB=Math.sqrt((h_a_x[i])*(h_a_x[i])+(h_a_y[i]-m_cut_y[0])*(h_a_y[i]-m_cut_y[0]));
				w_disC=Math.sqrt((m_cut_x[0])*(m_cut_x[0])+(m_cut_y[0])*(m_cut_y[0]));
				w_p=(w_disA+w_disB+w_disC)/2;
				w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
				w_r=Math.round((w_r*2)/(w_disC));
				if (w_r<=(h_a_r[i]/2+err_m)) {
					a_err3[k]=3;
					a_err_l3[k]=1;
				}
			}
		}		
		if ((m_cut_x[1]!=0)&&(m_cut_y[1]!=0)&&(h_a_x[i]!=0)&&(h_a_y[i]!=tate)){
			if (((h_a_x[i])*(m_cut_y[1]/m_cut_x[1])+tate-h_a_y[i])<=m_cut_y[1]){
				a_err3[k]=3;
				a_err_l3[k]=2;
			}else{
				w_disA=Math.sqrt((h_a_x[i]-m_cut_x[1])*(h_a_x[i]-m_cut_x[1])+(tate-h_a_y[i])*(tate-h_a_y[i]));
				w_disB=Math.sqrt((h_a_x[i])*(h_a_x[i])+(tate-h_a_y[i]-m_cut_y[1])*(tate-h_a_y[i]-m_cut_y[1]));
				w_disC=Math.sqrt((m_cut_x[1])*(m_cut_x[1])+(m_cut_y[1])*(m_cut_y[1]));
				w_p=(w_disA+w_disB+w_disC)/2;
				w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
				w_r=Math.round((w_r*2)/(w_disC));
				if (w_r<=(h_a_r[i]/2+err_m)) {
					a_err3[k]=3;
					a_err_l3[k]=2;
				}
			}
		}
		if ((m_cut_x[2]!=0)&&(m_cut_y[2]!=0)&&(h_a_x[i]!=yoko)&&(h_a_y[i]!=tate)){
			if (((yoko-h_a_x[i])*(m_cut_y[2]/m_cut_x[2])+tate-h_a_y[i])<=m_cut_y[2]){
				a_err3[k]=3;
				a_err_l3[k]=3;
			}else{
				w_disA=Math.sqrt((yoko-h_a_x[i]-m_cut_x[2])*(yoko-h_a_x[i]-m_cut_x[2])+(tate-h_a_y[i])*(tate-h_a_y[i]));
				w_disB=Math.sqrt((yoko-h_a_x[i])*(yoko-h_a_x[i])+(tate-h_a_y[i]-m_cut_y[2])*(tate-h_a_y[i]-m_cut_y[2]));
				w_disC=Math.sqrt((m_cut_x[2])*(m_cut_x[2])+(m_cut_y[2])*(m_cut_y[2]));
				w_p=(w_disA+w_disB+w_disC)/2;
				w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
				w_r=Math.round((w_r*2)/(w_disC));
				if (w_r<=(h_a_r[i]/2+err_m)) {
					a_err3[k]=3;
					a_err_l3[k]=3;
				}
			}
		}
		if ((m_cut_x[3]!=0)&&(m_cut_y[3]!=0)&&(h_a_x[i]!=yoko)&&(h_a_y[i]!=0)){
			if (((yoko-h_a_x[i])*(m_cut_y[3]/m_cut_x[2])+h_a_y[i])<=m_cut_y[3]){
				a_err3[k]=3;
				a_err_l3[k]=4;
			}else{
				w_disA=Math.sqrt((yoko-h_a_x[i]-m_cut_x[3])*(yoko-h_a_x[i]-m_cut_x[3])+(h_a_y[i])*(h_a_y[i]));
				w_disB=Math.sqrt((yoko-h_a_x[i])*(yoko-h_a_x[i])+(h_a_y[i]-m_cut_y[3])*(h_a_y[i]-m_cut_y[3]));
				w_disC=Math.sqrt((m_cut_x[3])*(m_cut_x[3])+(m_cut_y[3])*(m_cut_y[3]));
				w_p=(w_disA+w_disB+w_disC)/2;
				w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
				w_r=Math.round((w_r*2)/(w_disC));
				if (w_r<=(h_a_r[i]/2+err_m)) {
					a_err3[k]=3;
					a_err_l3[k]=4;
				}
			}
		}
		
		for (j=0;j<24;j++){
			if (h_a_x[j]!=0){ 
				if (i!=j){
					r=Math.sqrt((h_a_x[i]-h_a_x[j])*(h_a_x[i]-h_a_x[j])+(h_a_y[i]-h_a_y[j])*(h_a_y[i]-h_a_y[j]));
					if(h_a_r2[i]>h_a_r[i]){
						if(h_a_r2[j]>h_a_r[j]){
							err_m=dis_h(h_a_r2[i],h_a_r2[j],2);
						}else{

							err_m=dis_h(h_a_r2[i],h_a_r[j],2);
						}

					}else{
						if(h_a_r2[j]>h_a_r[j]){
							err_m=dis_h(h_a_r[i],h_a_r2[j],2);
						}else{

							err_m=dis_h(h_a_r[i],h_a_r[j],2);
						}


					}
					if(h_a_r2[i]>h_a_r[i]){
						if (r<=(h_a_r2[i]/2+h_a_r2[j]/2+err_m)){
							a_err4[k]=4;
							a_err_l4[k]=j;
						}
					}else{
						if (r<=(h_a_r[i]/2+h_a_r[j]/2+err_m)){
							a_err4[k]=4;
							a_err_l4[k]=j;
						}

					}
				}	
			}			
		}

		for (j=0;j<24;j++){
			if(h_s_r[j]!=0){
				err_m=dis_h(h_a_r[i],h_a_r[j],2);
				if(h_a_x[i]>=h_s_x1[j]-h_a_r[i]/2-err_m && h_a_x[i]<h_s_x1[j]+h_s_x2[j]){
					if(h_a_y[i]>=h_s_y1[j]+h_s_r[j] && h_a_y[i]<=h_s_y1[j]+h_s_y2[j]-h_s_r[j]){
						a_err5[k]=5;
						a_err_l5[k]=j;
					}
				}
				if(h_a_x[i]>=h_s_x1[j] && h_a_x[i]<=h_s_x1[j]+h_s_x2[j]+h_a_r[i]/2+err_m ){
					if(h_a_y[i]>=h_s_y1[j]+h_s_r[j] && h_a_y[i]<=h_s_y1[j]+h_s_y2[j]-h_s_r[j]){
						a_err5[k]=5;
						a_err_l5[k]=j;
					}
				}
				if(h_a_y[i]>=h_s_y1[j]-h_a_r[i]/2-err_m && h_a_y[i]<h_s_y1[j]+h_s_y2[j]){
					if(h_a_x[i]>=h_s_x1[j]+h_s_r[j] && h_a_x[i]<=h_s_x1[j]+h_s_x2[j]-h_s_r[j]){
						a_err5[k]=5;
						a_err_l5[k]=j;
					}
				}
				if(h_a_y[i]>=h_s_y1[j] && h_a_y[i]<=h_s_y1[j]+h_s_y2[j]+h_a_r[i]/2+err_m){
					if(h_a_x[i]>=h_s_x1[j]+h_s_r[j] && h_a_x[i]<=h_s_x1[j]+h_s_x2[j]-h_s_r[j]){
						a_err5[k]=5;
						a_err_l5[k]=j;
					}
				}
				r=Math.sqrt((h_a_x[i]-h_s_x1[j]-h_s_r[j])*(h_a_x[i]-h_s_x1[j]-h_s_r[j])+(h_a_y[i]-h_s_y1[j]-h_s_r[j])*(h_a_y[i]-h_s_y1[j]-h_s_r[j]));
				if (r<=(h_a_r[i]/2+h_s_r[j]+err_m)){
					a_err5[k]=5;
					a_err_l5[k]=j;
				}
				r=Math.sqrt((h_a_x[i]-h_s_x1[j]-h_s_r[j])*(h_a_x[i]-h_s_x1[j]-h_s_r[j])+(h_a_y[i]-h_s_y1[j]-h_s_y2[j]+h_s_r[j])*(h_a_y[i]-h_s_y1[j]-h_s_y2[j]+h_s_r[j]));
				if (r<=(h_a_r[i]/2+h_s_r[j]+err_m)){
					a_err5[k]=5;
					a_err_l5[k]=j;
				}
				
				r=Math.sqrt((h_a_x[i]-h_s_x1[j]-h_s_x2[j]+h_s_r[j])*(h_a_x[i]-h_s_x1[j]-h_s_x2[j]+h_s_r[j])+(h_a_y[i]-h_s_y1[j]-h_s_y2[j]+h_s_r[j])*(h_a_y[i]-h_s_y1[j]-h_s_y2[j]+h_s_r[j]));
				if (r<=(h_a_r[i]/2+h_s_r[j]+err_m)){
					a_err5[k]=5;
					a_err_l5[k]=j;
				}
				
				r=Math.sqrt((h_a_x[i]-h_s_x1[j]-h_s_x2[j]+h_s_r[j])*(h_a_x[i]-h_s_x1[j]-h_s_x2[j]+h_s_r[j])+(h_a_y[i]-h_s_y1[j]-h_s_r[j])*(h_a_y[i]-h_s_y1[j]-h_s_r[j]));
				if (r<=(h_a_r[i]/2+h_s_r[j]+err_m)){
					a_err5[k]=5;
					a_err_l5[k]=j;
				}
			
			}
		}
		}
	
	}

}
function dis_h(r,r2,a)
{
	var h_l=2.99
	var h_l2=9.99
	
	if(r2>r){
		if(r2<=13){
			err_m=h_l+r2/2
		
		}else{
			err_m=h_l2+r2/2

		}
		
	}else{
		if(r<=13){
			err_m=h_l+r/2
		
		}else{
			
			err_m=h_l2+r/2
		}
		
	}
		
	if(a==0){
		return err_m;
	}	
	if(a==1){
		if(err_m>h_dis+0.99){
			return err_m;
		}else{
			return h_dis+0.99;
		}		
	}
	if(a==2){
		if(r>13 && r2>13){
			return h_l2;
		}else{
			return h_l;
		}
	}
	if(a==3){
		if(r>13 && r2>13){
			return h_l2;
		}else{
			return h_l;
		}
	}
	if(a==4){
		if(r>13){
			return h_l2;
		}else{
			return h_l;
		}
	}
}

function kaku_chk(yoko,tate)
{
	var i=0;
	var r=0;
	var flag=0;
	var flag2=0;
	var k=0;
	var j=0;
	var h_l=2.99
	var h_l2=9.99

	check_ini();
	if(h_atu<13){
		h_l2=9.99
	}else{
		h_l2=h_atu-0.01
	}
	for(i=0;i<6;i++){
		for(j=0;j<4;j++){
			//角抜き左辺
			
			if(h_s_x1[i*4+j]<=h_l2 && h_s_x1[i*4+j]!=0){
				s_err1[i]=1;
				s_err_l1[i]=s_err_l1[i] + "2";
			}
			//角抜き上辺
			
			if(h_s_y1[i*4+j]<=h_l2 && h_s_y1[i*4+j]!=0){
				s_err1[i]=1;
				s_err_l1[i]=s_err_l1[i] + "1";
			}
			
			//角抜き下辺
			
			if(h_s_y1[i*4+j]+h_s_y2[i*4+j]>=tate-h_l2 && h_s_y1[i*4+j]+h_s_y2[i*4+j]!=tate){
				s_err1[i]=1;
				s_err_l1[i]=s_err_l1[i] +"3";
			}
			//角抜き右辺
			
			if(h_s_x1[i*4+j]+h_s_x2[i*4+j]>=yoko-h_l2 && h_s_x1[i*4+j]+h_s_x2[i*4+j]!=yoko){
				s_err1[i]=1;
				s_err_l1[i]=s_err_l1[i] +"4";
			}
		}
		
	}
////角抜きと角丸
	var sx1=0
	var sy1=0
	for(i=0;i<24;i++){
		k=Math.floor(i / 4);
		if(h_s_x1[i]>0 && h_s_y1[i]>0){

			
		
			err_m=h_l
			if (m_kado_r[0]!=0 ){
				sx1=h_s_x1[i]+h_s_r[i]
				sy1=h_s_y1[i]+h_s_r[i]
				if ((h_s_r[i]<=(m_kado_r[0]))&&(h_s_r[i]<=(m_kado_r[0]))){
					r=Math.sqrt((sx1-m_kado_r[0])*(sx1-m_kado_r[0])+(sy1-m_kado_r[0])*(sy1-m_kado_r[0]));
					if (h_s_r[i]>=m_kado_r[0]-err_m-r && r<m_kado_r[0] ){
						if ((h_s_x1[i]<=(m_kado_r[0])) || (h_s_y1[i]<=(m_kado_r[0]))){
							s_err2[k]=2;
							s_err_l2[k]=1;
						}
					}
					if ((h_s_x1[i]<=(m_kado_r[0])) && (h_s_y1[i]<=(m_kado_r[0]))){
						if(r>m_kado_r[0]){
							s_err2[k]=2;
							s_err_l2[k]=1;
						}
					}
				}else{
					if(h_s_r[i]<m_kado_r[0]){
					}else{
						r=Math.sqrt((sx1-m_kado_r[0])*(sx1-m_kado_r[0])+(sy1-m_kado_r[0])*(sy1-m_kado_r[0]));
						if (h_s_r[i]>=m_kado_r[0]+r+err_m && m_kado_r[0]+r+err_m>0 ){
							if (h_s_x1[i]!=0){
								s_err2[k]=2;
								s_err_l2[k]=1;
							}
						}
				
					}
				}
			}


		
		
			if (m_kado_r[1]!=0 ){
				sx1=h_s_x1[i]+h_s_r[i]
				sy1=h_s_y1[i]+h_s_y2[i]-h_s_r[i]
				if ((h_s_x1[i]<=(m_kado_r[1]))&&(h_s_y1[i]+h_s_y2[i]>=tate-m_kado_r[1])){
					r=Math.sqrt((sx1-m_kado_r[1])*(sx1-m_kado_r[1])+(tate-sy1-m_kado_r[1])*(tate-sy1-m_kado_r[1]));
					if (h_s_r[i]>=m_kado_r[1]-err_m-r && r<m_kado_r[1]){
						if ((h_s_x1[i]<=(m_kado_r[1])) || (tate-h_s_y1[i]-h_s_y2[i]<=(m_kado_r[1]))){
							s_err2[k]=2;
							s_err_l2[k]=2;
						}
					}
					if ((h_s_x1[i]<=(m_kado_r[1])) && (tate-h_s_y1[i]-h_s_y2[i]<=(m_kado_r[1]))){
						if(r>m_kado_r[1]){

							s_err2[k]=2;
							s_err_l2[k]=2;
						}
					}
				}else{
					if(h_s_r[i]<m_kado_r[1]){
					}else{
						r=Math.sqrt((sx1-m_kado_r[1])*(sx1-m_kado_r[1])+(sy1-tate+m_kado_r[1])*(sy1-tate+m_kado_r[1]));
						if (h_s_r[i]>=m_kado_r[1]+r+err_m && r<m_kado_r[1]){
							if ((h_s_x1[i]<=(m_kado_r[1])) || (tate-h_s_y1[i]-h_s_y2[i]<=(m_kado_r[1]))){
								s_err2[k]=2;
								s_err_l2[k]=2;
							}
						}
				
					}


				}
			}
		
			if (m_kado_r[2]!=0 ){
				sx1=h_s_x1[i]+h_s_x2[i]-h_s_r[i]
				sy1=h_s_y1[i]+h_s_y2[i]-h_s_r[i]
				if ((h_s_x1[i]+h_s_x2[i]>=yoko-(m_kado_r[2]))&&(h_s_y1[i]+h_s_y2[i]>=tate-(m_kado_r[2]))){
					r=Math.sqrt((sx1-yoko+m_kado_r[2])*(sx1-yoko+m_kado_r[2])+(sy1-tate+m_kado_r[2])*(sy1-tate+m_kado_r[2]));
					if (m_kado_r[2]<=h_s_r[i]+r+err_m && r<m_kado_r[2] ){
						if ((yoko-h_s_x1[i]-h_s_x2[i]<=(m_kado_r[2])) || (tate-h_s_y1[i]-h_s_y2[i]<=(m_kado_r[2]))){
							s_err2[k]=2;
							s_err_l2[k]=3;
						}
					}
					if ((yoko-h_s_x1[i]-h_s_x2[i]<=(m_kado_r[2])) && (tate-h_s_y1[i]-h_s_y2[i]<=(m_kado_r[2]))){
						if(r>m_kado_r[2]){

							s_err2[k]=2;
							s_err_l2[k]=3;
						}
					}
				}else{
					if(h_s_r[i]<m_kado_r[2]){
					}else{
						r=Math.sqrt((sx1-yoko+m_kado_r[2])*(sx1-yoko+m_kado_r[2])+(sy1-tate+m_kado_r[2])*(sy1-tate+m_kado_r[2]));
						if (h_s_r[i]>=m_kado_r[2]+r+err_m && m_kado_r[2]+r+err_m>0){
							if (h_s_x1[i]!=0){
								s_err2[k]=2;
								s_err_l2[k]=3;
							}
						}
				
					}
				}


			}
		
			if (m_kado_r[3]!=0 ){
				sx1=h_s_x1[i]+h_s_x2[i]-h_s_r[i]
				sy1=h_s_y1[i]+h_s_r[i]
				if ((h_s_x1[i]+h_s_x2[i]>=yoko-(m_kado_r[3]))&&(h_s_y1[i]<=(m_kado_r[3]))){
					r=Math.sqrt((sx1-yoko+m_kado_r[3])*(sx1-yoko+m_kado_r[3])+(sy1-m_kado_r[3])*(sy1-m_kado_r[3]));
					if (m_kado_r[3]<=h_s_r[i]+r+err_m && r<m_kado_r[3] ){
						if ((h_s_x1[i]+h_s_x2[i]>=yoko-(m_kado_r[3])) || (h_s_y1[i]<=(m_kado_r[3]))){
							s_err2[k]=2;
							s_err_l2[k]=4;
						}
					}
					if ((h_s_x1[i]+h_s_x2[i]>=yoko-(m_kado_r[3])) && (h_s_y1[i]<=(m_kado_r[3]))){
						if(r>m_kado_r[3]){

							s_err2[k]=2;
							s_err_l2[k]=4;
						}
					}
					
				}else{
					if(h_s_r[i]<m_kado_r[3]){
					}else{
						r=Math.sqrt((sx1-yoko+m_kado_r[3])*(sx1-yoko+m_kado_r[3])+(sy1-m_kado_r[3])*(sy1-m_kado_r[3]));
						if (h_s_r[i]>=m_kado_r[3]+r+err_m && m_kado_r[3]+r+err_m>0){
							if (h_s_x1[i]!=0){
								s_err2[k]=2;
								s_err_l2[k]=4;
							}
						}
					}
				}
			}			
////角と斜めカット
			var w_disA=0;
			var w_disB=0;
			var w_disC=0;
			var w_p=0;
			var w_r=0;
			err_m=h_l
			
			if ((m_cut_x[0]!=0)&&(m_cut_y[0]!=0)&&(h_s_x1[i]!=0)&&(h_s_y1[i]!=0) && h_s_y2[i]>0){
				sx1=h_s_x1[i]+h_s_r[i]
				sy1=h_s_y1[i]+h_s_r[i]
				if (((sx1)*(m_cut_y[0]/m_cut_x[0])+sy1)<=m_cut_y[0]){
					s_err3[k]=3;
					s_err_l3[k]=1;
				}else{
					w_disA=Math.sqrt((sx1-m_cut_x[0])*(sx1-m_cut_x[0])+(sy1)*(sy1));
					w_disB=Math.sqrt((sx1)*(sx1)+(sy1-m_cut_y[0])*(sy1-m_cut_y[0]));
					w_disC=Math.sqrt((m_cut_x[0])*(m_cut_x[0])+(m_cut_y[0])*(m_cut_y[0]));
					w_p=(w_disA+w_disB+w_disC)/2;
					w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
					w_r=Math.round((w_r*2)/(w_disC));
					if (w_r<=(h_s_r[i]+err_m)) {
						s_err3[k]=3;
						s_err_l3[k]=1;
					}
				}
			}		
			if ((m_cut_x[1]!=0)&&(m_cut_y[1]!=0)&&(h_s_x1[i]!=0)&&(h_s_y1[i]+h_s_y2[i]!=tate) && h_s_y2[i]>0){
				sx1=h_s_x1[i]+h_s_r[i]
				sy1=h_s_y1[i]+h_s_y2[i]-h_s_r[i]
				if (((sx1)*(m_cut_y[1]/m_cut_x[1])+tate-sy1)<=m_cut_y[1]){
					s_err3[k]=3;
					s_err_l3[k]=2;
				}else{
					w_disA=Math.sqrt((sx1-m_cut_x[1])*(sx1-m_cut_x[1])+(tate-sy1)*(tate-sy1));
					w_disB=Math.sqrt((sx1)*(sx1)+(tate-sy1-m_cut_y[1])*(tate-sy1-m_cut_y[1]));
					w_disC=Math.sqrt((m_cut_x[1])*(m_cut_x[1])+(m_cut_y[1])*(m_cut_y[1]));
					w_p=(w_disA+w_disB+w_disC)/2;
					w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
					w_r=Math.round((w_r*2)/(w_disC));
					if (w_r<=(h_s_r[i]+err_m)) {
						s_err3[k]=3;
						s_err_l3[k]=2;
					}
				}
			}
			if ((m_cut_x[2]!=0)&&(m_cut_y[2]!=0)&&(h_s_x1[i]+h_s_x2[i]!=yoko)&&(h_s_y1[i]+h_s_y2[i]!=tate) && h_s_y2[i]>0){
				sx1=h_s_x1[i]+h_s_x2[i]-h_s_r[i]
				sy1=h_s_y1[i]+h_s_y2[i]-h_s_r[i]
				if (((yoko-sx1)*(m_cut_y[2]/m_cut_x[2])+tate-sy1)<=m_cut_y[2]){
					s_err3[k]=3;
					s_err_l3[k]=3;
				}else{
					w_disA=Math.sqrt((yoko-sx1-m_cut_x[2])*(yoko-sx1-m_cut_x[2])+(tate-sy1)*(tate-sy1));
					w_disB=Math.sqrt((yoko-sx1)*(yoko-sx1)+(tate-sy1-m_cut_y[2])*(tate-sy1-m_cut_y[2]));
					w_disC=Math.sqrt((m_cut_x[2])*(m_cut_x[2])+(m_cut_y[2])*(m_cut_y[2]));
					w_p=(w_disA+w_disB+w_disC)/2;
					w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
					w_r=Math.round((w_r*2)/(w_disC));
					if (w_r<=(h_s_r[i]+err_m)) {
						s_err3[k]=3;
						s_err_l3[k]=3;
					}
				}
			}
			if ((m_cut_x[3]!=0)&&(m_cut_y[3]!=0)&&(h_s_x1[i]+h_s_x2[i]!=yoko)&&(h_s_y1[i]!=0) && h_s_x2[i]>0){
				sx1=h_s_x1[i]+h_s_x2[i]-h_s_r[i]
				sy1=h_s_y1[i]+h_s_r[i]
				if (((yoko-sx1)*(m_cut_y[3]/m_cut_x[2])+sy1)<=m_cut_y[3]){
					s_err3[k]=3;
					s_err_l3[k]=4;
				}else{
					w_disA=Math.sqrt((yoko-sx1-m_cut_x[3])*(yoko-sx1-m_cut_x[3])+(sy1)*(sy1));
					w_disB=Math.sqrt((yoko-sx1)*(yoko-sx1)+(sy1-m_cut_y[3])*(sy1-m_cut_y[3]));
					w_disC=Math.sqrt((m_cut_x[3])*(m_cut_x[3])+(m_cut_y[3])*(m_cut_y[3]));
					w_p=(w_disA+w_disB+w_disC)/2;
					w_r=Math.sqrt(w_p*(w_p-w_disA)*(w_p-w_disB)*(w_p-w_disC));
					w_r=Math.round((w_r*2)/(w_disC));
					if (w_r<=(h_s_r[i]+err_m)) {
						s_err3[k]=3;
						s_err_l3[k]=4;
					}
				}
			}
		}
/////切欠きと角丸
		if ((m_cut_x[0]!=0)&&(m_cut_y[0]!=0)&&(h_s_x1[i]==0)&&(h_s_y1[i]==0) && h_s_r[i]!=0){
				s_err3[k]=3;
				s_err_l3[k]=1;
		}
		if ((m_cut_x[1]!=0)&&(m_cut_y[1]!=0)&&(h_s_x1[i]==0)&&(h_s_y1[i]+h_s_y2[i]==tate) && h_s_r[i]!=0){
				s_err3[k]=3;
				s_err_l3[k]=2;
		}
		if ((m_cut_x[2]!=0)&&(m_cut_y[2]!=0)&&(h_s_x1[i]+h_s_x2[i]==yoko)&&(h_s_y1[i]+h_s_y2[i]==tate) && h_s_r[i]!=0){
				s_err3[k]=3;
				s_err_l3[k]=3;
		}
		if ((m_cut_x[3]!=0)&&(m_cut_y[3]!=0)&&(h_s_x1[i]+h_s_x2[i]==yoko)&&(h_s_y1[i]==0) && h_s_r[i]!=0){
				s_err3[k]=3;
				s_err_l3[k]=4;
		}

//////切欠きと斜めカット
		if ((m_cut_x[0]!=0)&&(m_cut_y[0]!=0)&&(h_s_x1[i]<=(m_cut_x[0]+10) && (h_s_y1[i]==0) && h_s_r[i]!=0 )){
				s_err3[k]=3;
				s_err_l3[k]=1;
		}
		if ((m_cut_x[1]!=0)&&(m_cut_y[1]!=0)&&(h_s_x1[i]<=(m_cut_x[1]+10) && (tate-h_s_y1[i]-h_s_y2[i]==0) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=2;
		}
		if ((m_cut_x[2]!=0)&&(m_cut_y[2]!=0)&&(yoko-h_s_x1[i]-h_s_x2[i]<=(m_cut_x[2]+10) && (tate-h_s_y1[i]-h_s_y2[i]==0) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=3;
		}
		if ((m_cut_x[3]!=0)&&(m_cut_y[3]!=0)&&(yoko-h_s_x1[i]-h_s_x2[i]<=(m_cut_x[3]+10) && (h_s_y1[i]==0) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=4;
		}

		if ((m_cut_x[0]!=0)&&(m_cut_y[0]!=0)&&(h_s_x1[i]==0 && (h_s_y1[i]<=m_cut_y[0]+10) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=1;
		}
		if ((m_cut_x[1]!=0)&&(m_cut_y[1]!=0)&&(h_s_x1[i]==0 && (tate-h_s_y1[i]-h_s_y2[i]<=m_cut_y[1]+10) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=2;
		}
		if ((m_cut_x[2]!=0)&&(m_cut_y[2]!=0)&&(yoko-h_s_x1[i]-h_s_x2[i]==0 && (tate-h_s_y1[i]-h_s_y2[i]<=m_cut_y[2]+10) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=3;
		}
		if ((m_cut_x[3]!=0)&&(m_cut_y[3]!=0)&&(yoko-h_s_x1[i]-h_s_x2[i]==0 && (h_s_y1[i]<=m_cut_y[3]+10) && h_s_r[i]!=0)){
				s_err3[k]=3;
				s_err_l3[k]=4;
		}
		
///角抜き同士
		for (j=0;j<24;j++){
			if (h_s_r[j]!=0){ 
				if (i!=j){
					if(h_atu<=10){
						err_m=h_l2
					}else{
						err_m=h_atu-0.01
					}
					
					if((h_s_x1[j]+h_s_x2[j]>h_s_x1[i]+err_m)){
						if((h_s_y1[j]+h_s_y2[j]>h_s_y1[i]+err_m)&& h_s_y1[j]<h_s_y1[i]){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
					}
					
					if((h_s_x1[j]==h_s_x1[i]) && (h_s_x2[j]==h_s_x2[i]) ){
					 	if(((h_s_y1[j]==h_s_y1[i]+h_s_y2[i]) ||(h_s_y1[j]==h_s_y1[i]-h_s_y2[i])||(h_s_y1[j]==h_s_y1[i])) && (h_s_y2[j]==h_s_y2[i])){

							s_err4[k]=4;
							s_err_l4[k]=j;
						}
					}
					
					//右側
					if((h_s_x1[j]>h_s_x1[i]+h_s_x2[i]) && (h_s_x1[j]<=h_s_x1[i]+h_s_x2[i]+err_m) && h_s_x2[i]>0){
						if((h_s_y1[j]>=h_s_y1[i]-err_m) && (h_s_y1[j]<=h_s_y1[i]+h_s_y2[i]+err_m) && h_s_y2[i]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
						if((h_s_y1[j]+h_s_y2[j]>=h_s_y1[i]-err_m) && (h_s_y1[j]+h_s_y2[j]<=h_s_y1[i]+h_s_y2[i]+err_m) && h_s_y2[i]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}

						
					}
					//左側
					if((h_s_x1[j]+h_s_x2[j]>=h_s_x1[i]-err_m) && (h_s_x1[j]+h_s_x2[j]<h_s_x1[i]) && h_s_x2[j]>0){
						if((h_s_y1[j]>=h_s_y1[i]-err_m) && (h_s_y1[j]<=h_s_y1[i]+h_s_y2[i]+err_m) && h_s_y2[i]>0  ){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
						if((h_s_y1[j]+h_s_y2[j]>=h_s_y1[i]-err_m) && (h_s_y1[j]+h_s_y2[j]<=h_s_y1[i]+h_s_y2[i]+err_m) && h_s_y2[i]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
						
					}
					//上
					
					if((h_s_y1[j]+h_s_y2[j]>=h_s_y1[i]-err_m) && (h_s_y1[j]+h_s_y2[j]<h_s_y1[i]) && h_s_y2[j]>0){
						if((h_s_x1[j]>=h_s_x1[i]-err_m) && (h_s_x1[j]<=h_s_x1[i]+h_s_x2[i]+err_m)){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
						if((h_s_x1[j]+h_s_x2[j]>=h_s_x1[i]-err_m) && (h_s_x1[j]+h_s_x2[j]<=h_s_x1[i]+h_s_x2[i])){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}

						
					}
					//下
					if((h_s_y1[j]>h_s_y1[i]+h_s_y2[i]) && (h_s_y1[j]<=h_s_y1[i]+h_s_y2[i]+err_m) && h_s_y2[i]>0){
						if((h_s_x1[j]>=h_s_x1[i]-err_m) && (h_s_x1[j]<=h_s_x1[i]+h_s_x2[i]+err_m)){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
						if((h_s_x1[j]+h_s_x2[j]>=h_s_x1[i]-err_m) && (h_s_x1[j]+h_s_x2[j]<=h_s_x1[i]+h_s_x2[j])){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}

						
					}
					//左上4×4
					if((h_s_x1[j]+h_s_x2[j]>=h_s_x1[i]) && (h_s_x1[j]+h_s_x2[j]<h_s_x1[i]+4) && h_s_x2[i]>0){
						if((h_s_y1[j]+h_s_y2[j]>=h_s_y1[i]) && (h_s_y1[j]+h_s_y2[j]<h_s_y1[i]+4) && h_s_y2[j]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
					}
					//右上4×4
					if((h_s_x1[j]<=h_s_x1[i]+h_s_x2[i]) && (h_s_x1[j]>h_s_x1[i]+h_s_x2[i]-4) && h_s_x2[i]>0){
						if((h_s_y1[j]+h_s_y2[j]>=h_s_y1[i]) && (h_s_y1[j]+h_s_y2[j]<h_s_y1[i]+4) && h_s_y2[j]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
					}
					//左下4×4
					if((h_s_x1[j]+h_s_x2[j]>=h_s_x1[i]) && (h_s_x1[j]+h_s_x2[j]<h_s_x1[i]+4) && h_s_x2[i]>0){
						if((h_s_y1[j]<=h_s_y1[i]+h_s_y2[i]) && (h_s_y1[j]>h_s_y1[i]+h_s_y2[i]-4) && h_s_y2[i]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
					}
					//右下4×4
					if((h_s_x1[j]<=h_s_x1[i]+h_s_x2[i]) && (h_s_x1[j]>h_s_x1[i]+h_s_x2[i]-4) && h_s_x2[i]>0){
						if((h_s_y1[j]<=h_s_y1[i]+h_s_y2[i]) && (h_s_y1[j]>h_s_y1[i]+h_s_y2[i]-4) && h_s_y2[i]>0){
							s_err4[k]=4;
							s_err_l4[k]=j;
						}
					}

				}
			}	
		}			
	
	}
}
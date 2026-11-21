var p_data_r=new Array(0,"");
var full_shift=5;
var return_flag=0;
var obj_window;
var p_data=new Array(0,"","",0,0,0,0,0,"",0,0,0,0,0,0,0,0,0,0,"","");



function transmitter()
{

	
	
	var p_data_all=new Array();
	
	var h_co=new Array(0,"","",0,0,"","","");
	var h_fr=new Array(0,0,0,0,0,0,0,0,0,0,0);
	var h_le=new Array(0,0,0,0,0,0,0,0,0,0,0);
	var h_ba=new Array(0,0,0,0,0,0,0,0,0,0,0);
	var h_ri=new Array(0,0,0,0,0,0,0,0,0,0,0);
	var h_to=new Array(0,0,0,0,0,0,0,0,0,0,0);
	var h_bo=new Array(0,0,0,0,0,0,0,0,0,0,0);
	
	
	

	
	
	
	
		h_co[0]=1;
		h_co[1]=window.opener.document.form1.key.value;
		
		h_co[2]="";
		h_co[3]=window.opener.document.form1.suu.value;
		
		h_co[4]=12000;
		h_co[5]=window.opener.document.form1.color.value;
		h_co[6]="https://www.acry-ya.com/products/UVprint/cube_sample.html";
		h_co[7]="https://www.acry-ya.com/products/UVprint/UVprint_cube_3d.html";
		
		
		h_fr[0]=window.opener.document.form1.width.value;
		h_fr[1]=window.opener.document.form1.tate.value;
		
		if (window.opener.document.form1.full_f.value=="1"){
			h_fr[2]=0;
			h_fr[3]=0;
			h_fr[4]=window.opener.document.form1.width.value;
			h_fr[5]=window.opener.document.form1.tate.value;
		
		
		}else{
			h_fr[2]=5;
			h_fr[3]=5;
			h_fr[4]=window.opener.document.form1.width.value-10;
			h_fr[5]=window.opener.document.form1.tate.value-10;
		
		}
		h_fr[6]=window.opener.document.form1.full_f.value
		h_fr[7]=window.opener.document.form1.white_f.value
		
		
		h_fr[8]=window.opener.document.form1.full_white_f.value
		h_fr[9]=0
		h_fr[10]=window.opener.document.form1.side_f.value
		
		h_le[0]=window.opener.document.form1.depth.value;
		h_le[1]=window.opener.document.form1.tate.value;
		
		if (window.opener.document.form1.full_l.value=="1"){
			h_le[2]=0;
			h_le[3]=0;
			h_le[4]=window.opener.document.form1.depth.value;
			h_le[5]=window.opener.document.form1.tate.value;
		
		
		}else{
			h_le[2]=5;
			h_le[3]=5;
			h_le[4]=window.opener.document.form1.depth.value-10;
			h_le[5]=window.opener.document.form1.tate.value-10;
		
		}
		h_le[6]=window.opener.document.form1.white_l.value
		h_le[10]=window.opener.document.form1.side_l.value
		h_le[8]=window.opener.document.form1.full_l.value
		h_le[9]=window.opener.document.form1.full_white_l.value
		h_le[10]=window.opener.document.form1.side_l.value
		
		h_ba[0]=window.opener.document.form1.width.value;
		h_ba[1]=window.opener.document.form1.tate.value;
		
		if (window.opener.document.form1.full_b.value=="1"){
			h_ba[2]=0;
			h_ba[3]=0;
			h_ba[4]=window.opener.document.form1.width.value;
			h_ba[5]=window.opener.document.form1.tate.value;
		
		
		}else{
			h_ba[2]=5;
			h_ba[3]=5;
			h_ba[4]=window.opener.document.form1.width.value-10;
			h_ba[5]=window.opener.document.form1.tate.value-10;
		
		}
		h_ba[6]=window.opener.document.form1.white_b.value
		h_ba[7]=window.opener.document.form1.side_b.value
		h_ba[8]=window.opener.document.form1.full_b.value
		h_ba[9]=window.opener.document.form1.full_white_b.value
		h_ba[10]=window.opener.document.form1.side_b.value
		
		
		h_ri[0]=window.opener.document.form1.depth.value;
		h_ri[1]=window.opener.document.form1.tate.value;
		
		if (window.opener.document.form1.full_r.value=="1"){
			h_ri[2]=0;
			h_ri[3]=0;
			h_ri[4]=window.opener.document.form1.depth.value;
			h_ri[5]=window.opener.document.form1.tate.value;
		
		
		}else{
			h_ri[2]=5;
			h_ri[3]=5;
			h_ri[4]=window.opener.document.form1.depth.value-10;
			h_ri[5]=window.opener.document.form1.tate.value-10;
		
		}
		h_ri[6]=window.opener.document.form1.white_r.value
		h_ri[7]=window.opener.document.form1.side_r.value
		h_ri[8]=window.opener.document.form1.full_r.value
		h_ri[9]=0
		h_ri[10]=window.opener.document.form1.side_r.value
		
		
		h_to[0]=window.opener.document.form1.width.value;
		h_to[1]=window.opener.document.form1.depth.value;
		
		if (window.opener.document.form1.full_t.value=="1"){
			h_to[2]=0;
			h_to[3]=0;
			h_to[4]=window.opener.document.form1.width.value;
			h_to[5]=window.opener.document.form1.depth.value;
		
		
		}else{
			h_to[2]=5;
			h_to[3]=5;
			h_to[4]=window.opener.document.form1.width.value-10;
			h_to[5]=window.opener.document.form1.depth.value-10;
		
		}
		h_to[6]=window.opener.document.form1.white_t.value
		h_to[7]=window.opener.document.form1.side_t.value
		h_to[8]=window.opener.document.form1.full_t.value
		h_to[9]=window.opener.document.form1.full_white_t.value
		h_to[10]=window.opener.document.form1.side_t.value
		
		h_bo[0]=window.opener.document.form1.width.value;
		h_bo[1]=window.opener.document.form1.depth.value;
		
		if (window.opener.document.form1.full_bo.value=="1"){
			h_bo[2]=0;
			h_bo[3]=0;
			h_bo[4]=window.opener.document.form1.width.value;
			h_bo[5]=window.opener.document.form1.depth.value;
		
		
		}else{
			h_bo[2]=5;
			h_bo[3]=5;
			h_bo[4]=window.opener.document.form1.width.value-10;
			h_bo[5]=window.opener.document.form1.depth.value-10;
		
		}
		h_bo[6]=window.opener.document.form1.white_bo.value
		h_bo[7]=window.opener.document.form1.side_bo.value
		h_bo[8]=window.opener.document.form1.full_bo.value
		h_bo[9]=window.opener.document.form1.full_white_bo.value
		
		h_bo[10]=window.opener.document.form1.side_bo.value
		
	
	
	
		p_data_all=h_co.concat(h_fr,h_le,h_ba,h_ri,h_to,h_bo,"0");
		
		

	
	 var form_val_1 = ({
  
  	});
		
	var url = "https://220.213.164.3/pd/?edit_mode=cube"
	obj_window =window.open(url);

	
	

	
	

	var timer=setInterval(()=>{
		
		if(obj_window.document.readyState!="complete") return;
  
		var postMessage = ({
	    	action: 'form_val_1',
	   	 message: p_data_all
	  	});
  		obj_window.postMessage(postMessage, 'https://220.213.164.3/pd/?edit_mode=cube');
  		
  		
  		clearInterval(timer)
  		
  	},2000);

		
}



var p_data=new Array();

var p_data_2=new Array();

var p_data_3=new Array();

var p_data_4=new Array(0,"",0,0,0);

	var h_co=new Array(0,"","",0,0,"","","");
	var h_fr=new Array(0,0,0,0,0,0,0,0,0,0,0,"","");
	var h_le=new Array(0,0,0,0,0,0,0,0,0,0,0,"","");
	var h_ba=new Array(0,0,0,0,0,0,0,0,0,0,0,"","");
	var h_ri=new Array(0,0,0,0,0,0,0,0,0,0,0,"","");
	var h_to=new Array(0,0,0,0,0,0,0,0,0,0,0,"","");
	var h_bo=new Array(0,0,0,0,0,0,0,0,0,0,0,"","");
	var i=0;
	var j=0;
	
	var rp_flag=0;
window.addEventListener('message', function (e) {
		
		  switch (e.data.action) {
		    case 'form_val_1'://注文ページから商品データ
		    	for(i=0;i<8;i++){
		    		h_co[i]=e.data.message[i];
		    		j=j+1;
		    	}
		    	for(i=0;i<11;i++){
		    		h_fr[i]=e.data.message[j];
		    		j=j+1;
		    	}
		    	for(i=0;i<11;i++){
		    		h_le[i]=e.data.message[j];
		    		j=j+1;
		    	}
		    	for(i=0;i<11;i++){
		    		h_ba[i]=e.data.message[j];
		    		j=j+1;
		    	}
		    	for(i=0;i<11;i++){
		    		h_ri[i]=e.data.message[j];
		    		j=j+1;
		    	}
		    	for(i=0;i<11;i++){
		    		h_to[i]=e.data.message[j];
		    		j=j+1;
		    	}
		    	for(i=0;i<11;i++){
		    		h_bo[i]=e.data.message[j];
		    		j=j+1;
		    	}
		  		rp_flag=e.data.message[j];
		  	  init()
		    break;
		    case 'form_val_4'://数量変更で注文ページ材料費再計算結果データ
		  		p_data[0]=e.data.message[0];
		  		p_data[1]=e.data.message[1];
		  		p_data[2]=e.data.message[2];
		  		p_data[3]=e.data.message[3];
		  		p_data[4]=e.data.message[4];
		  		p_data[5]=e.data.message[5];
		  		
		  	  init2()
		    break;
		  };
});





function init2()
{
	
	if (p_data[4]!="2" ){//数量変更で注文ページ材料費再計算結果データ
		
			document.forms[0].type.value=p_data[0];
			document.forms[0].key.value=p_data[1];
			
			document.forms[0].suu.value=p_data[2];
			document.forms[0].mcost.value=p_data[3];	
			
			
			document.getElementById('mcost').style.backgroundColor = 'red';
			document.getElementById('suu').style.backgroundColor = 'red';
	
	}



}



function init()
{



	if (rp_flag=="1" && h_co[3]!=document.form_semiorder.suu.value){
		var result =window.confirm("保存したデザインの注文数が違います。今回の数量で注文するのは「yes」、前回の注文数で注文するのは「No]を選択してください。");
		if (result){
		
			Recalculation();
		
		}else{
		
			document.forms[0].type.value=h_co[0];
			document.forms[0].key.value=h_co[1];
			document.forms[0].code.value=h_co[2];
		
		}
	}else{
		document.forms[0].type.value=h_co[0];
		document.forms[0].key.value=h_co[1];
		document.forms[0].code.value=h_co[2];
		document.forms[0].suu.value=h_co[3];
		document.forms[0].mcost.value=h_co[4];
		document.forms[0].color.value=h_co[5];
		//前
		document.forms[0].width_f.value=h_fr[0];
		document.forms[0].tate_f.value=h_fr[1];
		document.forms[0].X1_f.value=h_fr[2];
		document.forms[0].Y1_f.value=h_fr[3];
		document.forms[0].X2_f.value=h_fr[4];
		document.forms[0].Y2_f.value=h_fr[5];
		document.forms[0].full_f.value=h_fr[6];
		document.forms[0].white_f.value=h_fr[7];
		document.forms[0].full_white_f.value=h_fr[8];
		document.forms[0].side_f.value=h_fr[9];
	//	document.forms[0].image_URL_f.value=h_fr[10];
	//	document.forms[0].image_b_f.value=h_fr[11];
		//左
		document.forms[0].width_l.value=h_le[0];
		document.forms[0].tate_l.value=h_le[1];
		document.forms[0].X1_l.value=h_le[2];
		document.forms[0].Y1_l.value=h_le[3];
		document.forms[0].X2_l.value=h_le[4];
		document.forms[0].Y2_l.value=h_le[5];
		document.forms[0].full_l.value=h_le[6];
		document.forms[0].white_l.value=h_le[7];
		document.forms[0].full_white_l.value=h_le[8];
		document.forms[0].side_l.value=h_le[9];
	//	document.forms[0].image_URL_l.value=h_le[10];
	//	document.forms[0].image_b_l.value=h_le[11];
		//背
		document.forms[0].width_b.value=h_ba[0];
		document.forms[0].tate_b.value=h_ba[1];
		document.forms[0].X1_b.value=h_ba[2];
		document.forms[0].Y1_b.value=h_ba[3];
		document.forms[0].X2_b.value=h_ba[4];
		document.forms[0].Y2_b.value=h_ba[5];
		document.forms[0].full_b.value=h_ba[6];
		document.forms[0].white_b.value=h_ba[7];
		document.forms[0].full_white_b.value=h_ba[8];
		document.forms[0].side_b.value=h_ba[9];
	//	document.forms[0].image_URL_b.value=h_ba[10];
	//	document.forms[0].image_b_b.value=h_ba[11];
		//右
		document.forms[0].width_r.value=h_ri[0];
		document.forms[0].tate_r.value=h_ri[1];
		document.forms[0].X1_r.value=h_ri[2];
		document.forms[0].Y1_r.value=h_ri[3];
		document.forms[0].X2_r.value=h_ri[4];
		document.forms[0].Y2_r.value=h_ri[5];
		document.forms[0].full_r.value=h_ri[6];
		document.forms[0].white_r.value=h_ri[7];
		document.forms[0].full_white_r.value=h_ri[8];
		document.forms[0].side_r.value=h_ri[9];
	//	document.forms[0].image_URL_r.value=h_ri[10];
	//	document.forms[0].image_b_r.value=h_ri[11];
		//上
		document.forms[0].width_t.value=h_to[0];
		document.forms[0].tate_t.value=h_to[1];
		document.forms[0].X1_t.value=h_to[2];
		document.forms[0].Y1_t.value=h_to[3];
		document.forms[0].X2_t.value=h_to[4];
		document.forms[0].Y2_t.value=h_to[5];
		document.forms[0].full_t.value=h_to[6];
		document.forms[0].white_t.value=h_to[7];
		document.forms[0].full_white_t.value=h_to[8];
		document.forms[0].side_t.value=h_to[9];
	//	document.forms[0].image_URL_t.value=h_to[10];
	//	document.forms[0].image_b_t.value=h_to[11];
		//底
		document.forms[0].width_bo.value=h_bo[0];
		document.forms[0].tate_bo.value=h_bo[1];
		document.forms[0].X1_bo.value=h_bo[2];
		document.forms[0].Y1_bo.value=h_bo[3];
		document.forms[0].X2_bo.value=h_bo[4];
		document.forms[0].Y2_bo.value=h_bo[5];
		document.forms[0].full_bo.value=h_bo[6];
		document.forms[0].white_bo.value=h_bo[7];
		document.forms[0].full_white_bo.value=h_bo[8];
		document.forms[0].side_bo.value=h_bo[9];
	//	document.forms[0].image_URL_bo.value=h_bo[10];
	//	document.forms[0].image_b_bo.value=h_bo[11];
		
	
	}



}

function UVDraw3d()
{
	
	h_fr[11]=document.forms[0].image_URL_f.value;
	h_fr[12]=document.forms[0].image_b_f.value;
	
	h_le[11]=document.forms[0].image_URL_l.value;
	h_le[12]=document.forms[0].image_b_l.value;
	
	h_ba[11]=document.forms[0].image_URL_b.value;
	h_ba[11]=document.forms[0].image_b_b.value;
	
	h_ri[11]=document.forms[0].image_URL_r.value;
	h_ri[12]=document.forms[0].image_b_r.value;
	
	h_to[11]=document.forms[0].image_URL_t.value;
	h_to[12]=document.forms[0].image_b_t.value;
	
	h_bo[11]=document.forms[0].image_URL_bo.value;
	h_bo[12]=document.forms[0].image_b_bo.value;
	
	
	

		//前
		h_fr[0]=document.forms[0].width_f.value;
		h_fr[1]=document.forms[0].tate_f.value;
		h_fr[2]=document.forms[0].X1_f.value;
		h_fr[3]=document.forms[0].Y1_f.value;
		h_fr[4]=document.forms[0].X2_f.value;
		h_fr[5]=document.forms[0].Y2_f.value;
		h_fr[6]=document.forms[0].full_f.value;
		h_fr[7]=document.forms[0].white_f.value;
		h_fr[8]=document.forms[0].full_white_f.value;
		h_fr[9]=0;
		h_fr[10]=document.forms[0].side_f.value;

		//左
		h_le[0]=document.forms[0].width_l.value;
		h_le[1]=document.forms[0].tate_l.value;
		h_le[2]=document.forms[0].X1_l.value;
		h_le[3]=document.forms[0].Y1_l.value;
		h_le[4]=document.forms[0].X2_l.value;
		h_le[5]=document.forms[0].Y2_l.value;
		h_le[6]=document.forms[0].full_l.value;
		h_le[7]=document.forms[0].white_l.value;
		h_le[8]=document.forms[0].full_white_l.value;
		h_le[9]=0;

		h_le[10]=document.forms[0].side_l.value;

		//背
		h_ba[0]=document.forms[0].width_b.value;
		h_ba[1]=document.forms[0].tate_b.value;
		h_ba[2]=document.forms[0].X1_b.value;
		h_ba[3]=document.forms[0].Y1_b.value;
		h_ba[4]=document.forms[0].X2_b.value;
		h_ba[5]=document.forms[0].Y2_b.value;
		h_ba[6]=document.forms[0].full_b.value;
		h_ba[7]=document.forms[0].white_b.value;
		h_ba[8]=document.forms[0].full_white_b.value;
		h_ba[9]=0;
		h_ba[10]=document.forms[0].side_b.value;
	
		//右
		h_ri[0]=document.forms[0].width_r.value;
		h_ri[1]=document.forms[0].tate_r.value;
		h_ri[2]=document.forms[0].X1_r.value;
		h_ri[3]=document.forms[0].Y1_r.value;
		h_ri[4]=document.forms[0].X2_r.value;
		h_ri[5]=document.forms[0].Y2_r.value;
		h_ri[6]=document.forms[0].full_r.value;
		h_ri[7]=document.forms[0].white_r.value;
		h_ri[8]=document.forms[0].full_white_r.value;
		h_ri[9]=0;
		h_ri[10]=document.forms[0].side_r.value;

		//上
		h_to[0]=document.forms[0].width_t.value;
		h_to[1]=document.forms[0].tate_t.value;
		h_to[2]=document.forms[0].X1_t.value;
		h_to[3]=document.forms[0].Y1_t.value;
		h_to[4]=document.forms[0].X2_t.value;
		h_to[5]=document.forms[0].Y2_t.value;
		h_to[6]=document.forms[0].full_t.value;
		h_to[7]=document.forms[0].white_t.value;
		h_to[8]=document.forms[0].full_white_t.value;
		h_to[9]=0;
		h_to[10]=document.forms[0].side_t.value;

		//底
		h_bo[0]=document.forms[0].width_bo.value;
		h_bo[1]=document.forms[0].tate_bo.value;
		h_bo[2]=document.forms[0].X1_bo.value;
		h_bo[3]=document.forms[0].Y1_bo.value;
		h_bo[4]=document.forms[0].X2_bo.value;
		h_bo[5]=document.forms[0].Y2_bo.value;
		h_bo[6]=document.forms[0].full_bo.value;
		h_bo[7]=document.forms[0].white_bo.value;
		h_bo[8]=document.forms[0].full_white_bo.value;
		h_bo[9]=0;
		h_bo[10]=document.forms[0].side_bo.value;
	
	p_data_3=h_co.concat(h_fr,h_le,h_ba,h_ri,h_to,h_bo);
	
	 var form_val_3 = ({
  
  	});
		
	var url = "https://www.acry-ya.com/products/UVprint/UVprint_cube_3d.html";
	
	var obj_window =window.open(url)//,'window_name', 'width=800,height=650,scrollbars=yes,resizable=yes,status=yes');
	

	
	

	var timer=setInterval(()=>{
		
		if(obj_window.document.readyState!="complete") return;
  
		var postMessage = ({
	    	action: 'form_val_3',
	   	 message: p_data_3
	  	});
  		obj_window.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/UVprint_cube_3d.html');
  		
  		
  		clearInterval(timer)
  		
  	},3000);

}


function  Recalculation()
{
	
	
		h_co[0]=document.forms[0].type.value;
		h_co[1]=document.forms[0].key.value;
		h_co[2]=document.forms[0].code.value;
		h_co[3]=document.forms[0].suu.value;
		h_co[4]=document.forms[0].mcost.value;
		h_co[5]=document.forms[0].color.value;
		
		h_fr[0]=document.forms[0].width_f.value;
		h_fr[1]=document.forms[0].tate_f.value;
		h_fr[2]=document.forms[0].X1_f.value;
		h_fr[3]=document.forms[0].Y1_f.value;
		h_fr[4]=document.forms[0].X2_f.value;
		h_fr[5]=document.forms[0].Y2_f.value;
		h_fr[6]=document.forms[0].full_f.value;
		h_fr[7]=document.forms[0].white_f.value;
		h_fr[8]=document.forms[0].full_white_f.value;
		h_fr[9]=document.forms[0].side_f.value;

		//左
		h_le[0]=document.forms[0].width_l.value;
		h_le[1]=document.forms[0].tate_l.value;
		h_le[2]=document.forms[0].X1_l.value;
		h_le[3]=document.forms[0].Y1_l.value;
		h_le[4]=document.forms[0].X2_l.value;
		h_le[5]=document.forms[0].Y2_l.value;
		h_le[6]=document.forms[0].full_l.value;
		h_le[7]=document.forms[0].white_l.value;
		h_le[8]=document.forms[0].full_white_l.value;
		h_le[9]=document.forms[0].side_l.value;

		//背
		h_ba[0]=document.forms[0].width_b.value;
		h_ba[1]=document.forms[0].tate_b.value;
		h_ba[2]=document.forms[0].X1_b.value;
		h_ba[3]=document.forms[0].Y1_b.value;
		h_ba[4]=document.forms[0].X2_b.value;
		h_ba[5]=document.forms[0].Y2_b.value;
		h_ba[6]=document.forms[0].full_b.value;
		h_ba[7]=document.forms[0].white_b.value;
		h_ba[8]=document.forms[0].full_white_b.value;
		h_ba[9]=document.forms[0].side_b.value;
	
		//右
		h_ri[0]=document.forms[0].width_r.value;
		h_ri[1]=document.forms[0].tate_r.value;
		h_ri[2]=document.forms[0].X1_r.value;
		h_ri[3]=document.forms[0].Y1_r.value;
		h_ri[4]=document.forms[0].X2_r.value;
		h_ri[5]=document.forms[0].Y2_r.value;
		h_ri[6]=document.forms[0].full_r.value;
		h_ri[7]=document.forms[0].white_r.value;
		h_ri[8]=document.forms[0].full_white_r.value;
		h_ri[9]=document.forms[0].side_r.value;

		//上
		h_to[0]=document.forms[0].width_t.value;
		h_to[1]=document.forms[0].tate_t.value;
		h_to[2]=document.forms[0].X1_t.value;
		h_to[3]=document.forms[0].Y1_t.value;
		h_to[4]=document.forms[0].X2_t.value;
		h_to[5]=document.forms[0].Y2_t.value;
		h_to[6]=document.forms[0].full_t.value;
		h_to[7]=document.forms[0].white_t.value;
		h_to[8]=document.forms[0].full_white_t.value;
		h_to[9]=document.forms[0].side_t.value;

		//底
		h_bo[0]=document.forms[0].width_bo.value;
		h_bo[1]=document.forms[0].tate_bo.value;
		h_bo[2]=document.forms[0].X1_bo.value;
		h_bo[3]=document.forms[0].Y1_bo.value;
		h_bo[4]=document.forms[0].X2_bo.value;
		h_bo[5]=document.forms[0].Y2_bo.value;
		h_bo[6]=document.forms[0].full_bo.value;
		h_bo[7]=document.forms[0].white_bo.value;
		h_bo[8]=document.forms[0].full_white_bo.value;
		h_bo[9]=document.forms[0].side_bo.value;
	
		p_data_2=h_co.concat(h_fr,h_le,h_ba,h_ri,h_to,h_bo);
	 var form_val_2 = ({
  
  	});
		
	

  
		var postMessage = ({
	    	action: 'form_val_2',
	   	 message: p_data_2
	  	});
  		window.opener.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/cube_sample.html');
  		
  		
  	
  		
  
		
  	
}







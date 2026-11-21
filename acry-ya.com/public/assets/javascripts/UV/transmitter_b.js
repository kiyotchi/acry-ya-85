
var p_data=new Array(0,"","",0,0,0,0,0,"",0,0,0,0,0,0,0,0,0,0,"","");

var p_data_3=new Array(0,"","",0,0,0,0,0,0,"",0,0,0,0,0,0,0,0,0,"","");

var p_data_r=new Array(0,"");
var p_data_4=new Array(0,"",0,0,0);


window.addEventListener('message', function (e) {
		
		  switch (e.data.action) {
		    case 'form_val_1'://注文ページから商品データ
		  		p_data[0]=e.data.message[0];
		  		p_data[1]=e.data.message[1];
		  		p_data[2]=e.data.message[2];
		  		p_data[3]=e.data.message[3];
		  		p_data[4]=e.data.message[4];
		  		p_data[5]=e.data.message[5];
		  		p_data[6]=e.data.message[6];
		  		p_data[7]=e.data.message[7];
		  		p_data[8]=e.data.message[8];
		  		p_data[9]=e.data.message[9];
		  		p_data[10]=e.data.message[10];
		  		p_data[11]=e.data.message[11];
		  		p_data[12]=e.data.message[12];
		  		p_data[13]=e.data.message[13];
		  		p_data[14]=e.data.message[14];
		  		p_data[15]=e.data.message[15];
		  		p_data[16]=e.data.message[16];
		  		p_data[17]=e.data.message[17];
		  		p_data[18]=e.data.message[18];
		  	  init()
		    break;
		    case 'form_val_4'://数量変更で注文ページ材料費再計算結果データ
		  		p_data[0]=e.data.message[0];
		  		p_data[1]=e.data.message[1];
		  		p_data[2]=e.data.message[2];
		  		p_data[3]=e.data.message[3];
		  		p_data[4]=e.data.message[4];
		  		
		  	  init2()
		    break;
		  };
});





function init2()
{
	
	if (p_data[4]=="1" ){//数量変更で注文ページ材料費再計算結果データ
		
			document.forms[0].kinds.value=p_data[0];
			document.forms[0].key.value=p_data[1];
			
			document.forms[0].suu.value=p_data[2];
			document.forms[0].mcost.value=p_data[3];	
			
			document.getElementById('mcost').style.backgroundColor = 'red';
			document.getElementById('suu').style.backgroundColor = 'red';
	
	}



}



function init()
{
	
	if (p_data[18]=="1" && p_data[3]!=document.forms[0].suu.value){
		var result =window.confirm("保存したデザインの注文数が違います。今回の数量で注文するのは「yes」、前回の注文数で注文するのは「No]を選択してください。");
		if (result){
			Recalculation();
		
		}else{
		
			document.forms[0].kinds.value=p_data[0];
			document.forms[0].key.value=p_data[1];
			document.forms[0].code.value=p_data[2];
		
		}
	}else{
		document.forms[0].kinds.value=p_data[0];
		document.forms[0].key.value=p_data[1];
		document.forms[0].code.value=p_data[2];
	
	}



}

function UVDraw3d()
{
	
	p_data_3[0]=document.forms[0].kinds.value;
	
	p_data_3[1]=document.forms[0].key.value;
	p_data_3[2]=document.forms[0].code.value;
	p_data_3[3]=document.forms[0].suu.value;
	p_data_3[4]=document.forms[0].mcost.value;
	p_data_3[5]="1500"//印刷費
	p_data_3[6]=document.forms[0].width.value;
	p_data_3[7]=document.forms[0].depth.value;
		
	p_data_3[8]=document.forms[0].thickness.value;
	p_data_3[9]=document.forms[0].color.value;
		
	p_data_3[10]=document.forms[0].X1.value;
	p_data_3[11]=document.forms[0].Y1.value;
	p_data_3[12]=document.forms[0].X2.value;
	p_data_3[13]=document.forms[0].Y2.value;
	p_data_3[14]=document.forms[0].side.value;
		
	p_data_3[16]=document.forms[0].fullsurface.value;
	p_data_3[15]=document.forms[0].wprinting.value;
		
	p_data_3[17]=document.forms[0].fullwhite.value;
	p_data_3[18]=document.forms[0].backaspect.value;
	
	p_data_3[19]=document.forms[0].image_URL.value;
	p_data_3[20]=document.forms[0].image_URL_b.value;
	

	
	 var form_val_3 = ({
  
  	});
		
	var url = "https://www.acry-ya.com/products/UVprint/UVprint_3d.html";
	
	var obj_window =window.open(url)//,'window_name', 'width=800,height=650,scrollbars=yes,resizable=yes,status=yes');
	

	
	

	var timer=setInterval(()=>{
		
		if(obj_window.document.readyState!="complete") return;
  
		var postMessage = ({
	    	action: 'form_val_3',
	   	 message: p_data_3
	  	});
  		obj_window.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/UVprint_3d.html');
  		
  		
  		clearInterval(timer)
  		
  	},3000);

}


function  Recalculation()
{
	var p_data_2=new Array(0,"","",0,0,0,0,0,"",0,0,0,0,0,0,0,0,0,0,"","");
	p_data_2[0]=document.forms[0].kinds.value;
	p_data_2[1]=document.forms[0].key.value;
	p_data_2[2]=document.forms[0].code.value;
	p_data_2[3]=document.forms[0].suu.value;
    p_data_2[4]=document.forms[0].mcost.value;
	p_data_2[5]=document.forms[0].width.value;
	p_data_2[6]=document.forms[0].depth.value;
		
	p_data_2[7]=document.forms[0].thickness.value;
	p_data_2[8]=document.forms[0].color.value;
		
	p_data_2[9]=document.forms[0].X1.value;
	p_data_2[10]=document.forms[0].Y1.value;
	p_data_2[11]=document.forms[0].X2.value;
	p_data_2[12]=document.forms[0].Y2.value;
	p_data_2[13]=document.forms[0].side.value;
		
	p_data_2[15]=document.forms[0].fullsurface.value;
	p_data_2[14]=document.forms[0].wprinting.value;
		
	p_data_2[16]=document.forms[0].fullwhite.value;
	p_data_2[17]=document.forms[0].backaspect.value;
	
	
	 var form_val_2 = ({
  
  	});
		
	
	//alert(window.opener)
  
		var postMessage = ({
	    	action: 'form_val_2',
	   	 message: p_data_2
	  	});
  		window.opener.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/block_sample.html');
  		
  		
  	
  		
  
		
  	
}




var obj_window;
var h_co=new Array(0,"","",0,0,"","","");
var h_fr=new Array(0,0,0,0,0,0,0,0,0,0,0);
var h_le=new Array(0,0,0,0,0,0,0,0,0,0,0);
var h_ba=new Array(0,0,0,0,0,0,0,0,0,0,0);
var h_ri=new Array(0,0,0,0,0,0,0,0,0,0,0);
var h_to=new Array(0,0,0,0,0,0,0,0,0,0,0);
var h_bo=new Array(0,0,0,0,0,0,0,0,0,0,0);
var p_flag_int=0;
var j=0;
var i=0;
var url ;

	window.addEventListener('message', function (e) {
		
		  switch (e.data.action) {
		    case 'form_val_2'://シミュレーターページから受信、前回数量違い再計算
		   
		  		for(i=0;i<8;i++){
		  		
		  		
		    		h_co[i]=e.data.message[i];
		    		j=j+1;
		    	}
		  		
		  		p_flag_int=1;
		  	  //	Recalculation();
		  	  draw_2d_sample();
		  	  		
		    break;
		    
		  };
	});





function Recalculation()//材料費再計算、返送
{

	var price_return=new Array(0,"",0,0,"","");

	h_co[4]=15000;//材料費再計算

	price_return[0]=h_co[0];
	price_return[1]=h_co[1];
	price_return[2]=8;
	price_return[3]=h_co[4];
	price_return[4]="https://www.acry-ya.com/products/UVprint/cube_sample.html";
	price_return[5]="https://www.acry-ya.com/products/UVprint/UVprint_cube_3d.html";



		var timer=setInterval(()=>{
		
		if(obj_window.document.readyState!="complete") return;
  
		var postMessage = ({
	    	action: 'form_val_4',
	   	 	message: price_return
	  		});
  		obj_window.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/simulator_cube.html');
  		
  		
  		clearInterval(timer)
  		
  		},2000);

}


function draw_2d_sample()
{
	var p_data_all=new Array();
	

	if(p_flag_int==1){
		var price_return=new Array(0,"",0,0,"","");

		h_co[4]=15000;//材料費再計算

		price_return[0]=h_co[0];
		price_return[1]=h_co[1];
		price_return[2]=8;
		price_return[3]=h_co[4];
		price_return[4]="https://www.acry-ya.com/products/UVprint/cube_sample.html";
		price_return[5]="https://www.acry-ya.com/products/UVprint/UVprint_cube_3d.html";

	

			var timer=setInterval(()=>{
			
			if(obj_window.document.readyState!="complete") return;
	  
			var postMessage = ({
		    	action: 'form_val_4',
		   	 	message: price_return
		  		});
	  		obj_window.postMessage(postMessage, 'https://220.213.164.3/pd/?edit_mode=cube');
	  		
	  		
	  		clearInterval(timer)
	  		
	  		},2000);
	  		
	  		p_flag_int=0;
	}else{
	
	if (document.form1.repeat_order.checked){ //デザインキー利用の場合　直接デザイン画面を開く
	
	//#################################################
	
	//デザインキーを利用の場合、シミュレーター画面を直接表示、デザインキーを伝送
	//デザイン画面でデザインキーを利用して、前回商品データを抽出
		h_co[0]=1;
		h_co[1]=document.form1.key.value;
		h_co[2]="";
		h_co[3]=document.form1.suu.value;
		
		h_co[6]="https://www.acry-ya.com/products/UVprint/cube_sample.html";
		h_co[7]="https://www.acry-ya.com/products/UVprint/UVprint_cube_3d.html";
		
		p_data_all=h_co.concat(h_fr,h_le,h_ba,h_ri,h_to,h_bo,"1");
		
		
		var form_val_1 = ({
  
  		});
		
	//##################################################
		
		
		var url = "https://220.213.164.3/pd/?edit_mode=cubel"
		obj_window =window.open(url);//シミュレーター画面を開く

	
	

	
	

			var timer=setInterval(()=>{
		
			if(obj_window.document.readyState!="complete") return;
  
			var postMessage = ({
		    	action: 'form_val_1',
		   	 message: p_data_all
		  	});
	  		obj_window.postMessage(postMessage, 'https://220.213.164.3/pd/?edit_mode=cube');
	  		
	  		
	  		clearInterval(timer)
	  		
	  		},2000);
		
		
		}else{//デザインキー利用しない、新規の場合、2d確認画面を開く
	
			url = "https://www.acry-ya.com/products/UVprint/draw_cube_shape.html"
			obj_window =window.open(url,'window_name');//2d確認画面を開く

	
		}
		}
}

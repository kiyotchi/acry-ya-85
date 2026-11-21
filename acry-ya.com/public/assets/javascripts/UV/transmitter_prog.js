var p_data_r=new Array(0,"");
var full_shift=5;
var return_flag=0;
var obj_window;
var p_data=new Array(0,"","",0,0,0,0,0,"",0,0,0,0,0,0,0,0,0,0,"","");
window.addEventListener('message', function (e) {
		
		   switch (e.data.action) {
		 
		   	case 'ffffff':
		   		document.form1.key.value=e.data.message[0]
		   		break;
		   	case 'form_val_2':
		    
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
		  		
		  	  	Recalculation_r();
		   	break;
		  };
});



function Recalculation_r()
{
		
		//document.form1.key.value=p_data[1];
		//document.forms1.code.value=p_data[2];
	//	document.form1.suu.value=p_data[3];
		document.form1.mcost.value=p_data[4]*1.6
		document.form1.width.value=p_data[5];
		document.form1.depth.value=p_data[6]
		document.form1.thickness.value=p_data[7]
		document.form1.color.value=p_data[8];
		
		document.form1.x_coordinate.value=p_data[9];
		document.form1.y_coordinate.value=p_data[10];
		document.form1.yoko.value=p_data[11];
		document.form1.tate.value=p_data[12];
		
		
		document.form1.side.value=p_data[13];
		document.form1.wprinting.value=p_data[14];
		document.form1.fullsurface.value=p_data[15];
		
		Recalculation_sample();
}

function Recalculation_sample()
{

	var p_data_4=new Array(0,"",0,0,0);
	
	
		p_data_4[0]=1;
		p_data_4[1]=document.form1.key.value;
		p_data_4[2]=document.form1.suu.value;
		p_data_4[3]=document.form1.mcost.value
		p_data_4[4]="1";
	
	 var form_val_4 = ({
  
  	});
	
	//alert("4");
	var timer=setInterval(()=>{
		
		if(obj_window.document.readyState!="complete") return;
  
		var postMessage = ({
	    	action: 'form_val_4',
	   	 message: p_data_4
	  	});
  		obj_window.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/simulator_sample.html');
  		
  		
  		clearInterval(timer)
  		
  	},2000);

		
}


function transmitter_sample()
{

	var p_data_1=new Array(0,"","",0,0,0,0,0,"",0,0,0,0,0,0,0,0,0,0);
	
	if (document.form1.repeat_order.checked){
		p_data_1[0]=1;
		p_data_1[1]=document.form1.key.value;
		p_data_1[2]="";
		p_data_1[3]=document.form1.suu.value;
		
		p_data_1[18]=1;//シミュレーターキーあり
	}else{
		p_data_1[0]=1;
		p_data_1[1]=document.form1.key.value;
		p_data_1[2]="";
		p_data_1[3]=document.form1.suu.value;
		p_data_1[4]=document.form1.mcost.value
		p_data_1[5]=document.form1.width.value;
		p_data_1[6]=document.form1.depth.value
		p_data_1[7]=document.form1.thickness.value
		p_data_1[8]=document.form1.color.value;
		
		p_data_1[9]=document.form1.x_coordinate.value;
		p_data_1[10]=document.form1.y_coordinate.value;
		p_data_1[11]=document.form1.yoko.value;
		p_data_1[12]=document.form1.tate.value;
		
		
		p_data_1[13]=document.form1.side.value;
		p_data_1[14]=document.form1.wprinting.value;
		p_data_1[15]=document.form1.fullsurface.value;
		p_data_1[16]=0;
		p_data_1[17]=0;
		p_data_1[18]=0;//シミュレーターキーなし
	}
	 var form_val = ({
  
  	});
		
	var url = "https://www.acry-ya.com/products/UVprint/simulator_sample.html"
	obj_window =window.open(url);

	
	

	
	

	var timer=setInterval(()=>{
		
		if(obj_window.document.readyState!="complete") return;
  
		var postMessage = ({
	    	action: 'form_val_1',
	   	 message: p_data_1
	  	});
  		obj_window.postMessage(postMessage, 'https://www.acry-ya.com/products/UVprint/simulator_sample.html');
  		
  		
  		clearInterval(timer)
  		
  	},2000);

		
}


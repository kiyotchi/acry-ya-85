/***************************/
/*                         */
/*   たわみ計算詳細表示    */
/*                         */
/***************************/

var max1=500,yake1,min1=5,i=min1,hata1=false;
var max2=500,yake2,min2=5,j=min2,hata2=false;
var max3=500,yake3,min3=5,k=min3,hata3=false;
var max4=500,yake4,min4=5,l=min4,hata4=false;
var max5=600,yake5,min5=5,m=min5,hata5=false;

/*****************/
/***   zoom1   ***/
/*****************/
function zoom1(){
	clearInterval(yake1);
	if(hata1){
		zoom1_off();
		hata1=!hata1;
	}
	else{
		zoom1_on();
		hata1=!hata1;
	}
}

function zoom1_on(){
	yake1=setInterval("kakudai1();",1);
}

function zoom1_off(){
	yake1=setInterval("syukusyou1();",1);
}
function kakudai1(){
	i+=5;
	if(i<max1){
		document.getElementById("menu1").style.height=i+"px";
	}
	else{
		clearInterval(yake1);
	}
}
function syukusyou1(){
	i-=5;
	if(i>min1-1){
		document.getElementById("menu1").style.height=i+"px";
	}
	else{
		clearInterval(yake1);
	}
}

/*****************/
/***   zoom2   ***/
/*****************/
function zoom2(){
	clearInterval(yake2);
	if(hata2){
		zoom2_off();
		hata2=!hata2;
	}
	else{
		zoom2_on();
		hata2=!hata2;
	}
}

function zoom2_on(){
	yake2=setInterval("kakudai2();",1);
}

function zoom2_off(){
	yake2=setInterval("syukusyou2();",1);
}

function kakudai2(){
	j+=5;
	if(j<max2){
		document.getElementById("menu2").style.height=j+"px";
	}
	else{
		clearInterval(yake2);
	}
}

function syukusyou2(){
	j-=5;
	if(j>min2-1){
		document.getElementById("menu2").style.height=j+"px";
	}
	else{
		clearInterval(yake2);
	}
}

/*****************/
/***   zoom3   ***/
/*****************/
function zoom3(){
	clearInterval(yake3);
	if(hata3){
		zoom3_off();
		hata3=!hata3;
	}
	else{
		zoom3_on();
		hata3=!hata3;
	}
}

function zoom3_on(){
	yake3=setInterval("kakudai3();",1);
}

function zoom3_off(){
	yake3=setInterval("syukusyou3();",1);
}

function kakudai3(){
	k+=5;
	if(k<max3){
		document.getElementById("menu3").style.height=k+"px";
	}
	else{
		clearInterval(yake3);
	}
}

function syukusyou3(){
	k-=5;
	if(k>min3-1){
		document.getElementById("menu3").style.height=k+"px";
	}
	else{
		clearInterval(yake3);
	}
}

/*****************/
/***   zoom4   ***/
/*****************/
function zoom4(){
	clearInterval(yake4);
	if(hata4){
		zoom4_off();
		hata4=!hata4;
	}
	else{
		zoom4_on();
		hata4=!hata4;
	}
}

function zoom4_on(){
	yake4=setInterval("kakudai4();",1);
}

function zoom4_off(){
	yake4=setInterval("syukusyou4();",1);
}

function kakudai4(){
	l+=5;
	if(l<max4){
		document.getElementById("menu4").style.height=l+"px";
	}
	else{
		clearInterval(yake4);
	}
}

function syukusyou4(){
	l-=5;
	if(l>min4-1){
		document.getElementById("menu4").style.height=l+"px";
	}
	else{
		clearInterval(yake4);
	}
}

/*****************/
/***   zoom5   ***/
/*****************/
function zoom5(){
	clearInterval(yake5);
	if(hata5){
		zoom5_off();
		hata5=!hata5;
	}
	else{
		zoom5_on();
		hata5=!hata5;
	}
}

function zoom5_on(){
	yake5=setInterval("kakudai5();",1);
}

function zoom5_off(){
	yake5=setInterval("syukusyou5();",1);
}

function kakudai5(){
	m+=5;
	if(m<max5){
		document.getElementById("menu5").style.height=m+"px";
	}
	else{
		clearInterval(yake5);
	}
}

function syukusyou5(){
	m-=5;
	if(m>min5-1){
		document.getElementById("menu5").style.height=m+"px";
	}
	else{
		clearInterval(yake5);
	}
}

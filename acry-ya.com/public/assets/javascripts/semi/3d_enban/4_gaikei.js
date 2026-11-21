function draw_gaikei(f,x,y,h)
{
var i=0;
var a=b_width;
var b=b_depth;
var h1=b_height;
var h2=p_height;
var t1=b_thickness;
var t2=p_thickness;
var p=p_type
var b_seek=0;
var b_seek2=0;
var t_seek=h1/2;
var d_h1=0;
var d_h2=0;
var l_1=0;
var l_2=0;
if(p=="Dタイプ"){
b_seek=-h1/2;
d_h1=h1;
d_h2=h1-h2-t1;
b_seek=-h1/2;
b_seek2=-h1/2+h2;
}else{
b_seek=-h1/2-h2;
if(p=="Aタイプ"){
d_h1=h1+t2;
d_h2=h1-t1;
b_seek=-h1/2-t2;
b_seek2=-h1/2;
}else{
if(p=="Bタイプ"){
d_h1=h1+t2;
d_h2=h1-t2-t1;
b_seek=-h1/2-t2;
b_seek2=-h1/2+t2;
}
if(p=="Cタイプ"){
d_h1=h1+h2;
d_h2=h1-t2-t1;
b_seek=-h1/2-h2;
b_seek2=-h1/2+t2;
}
if(p=="台無し"){
d_h1=h1;
d_h2=0;
}
}
}
draw_sen1(1,-a/2,b/2,b_seek,0,0,-50)
draw_sen1(1,a/2,b/2,b_seek,0,0,-50)
draw_sen2(1,-a/2+1,b/2,b_seek-45,a-2,0,0)
draw_right(1,a/2,b/2,b_seek-45)
draw_left(1,-a/2,b/2,b_seek-45)
draw_moji(1,0,b/2,b_seek-38,a);
draw_sen1(1,-a/2+t1,b/2,b_seek,0,0,-35)
draw_sen1(1,a/2-t1,b/2,b_seek,0,0,-35)
draw_sen2(1,-a/2+1+t1,b/2,b_seek-30,a-2-2*t1,0,0)
draw_right(1,a/2-t1,b/2,b_seek-30)
draw_left(1,-a/2+t1,b/2,b_seek-30)
draw_moji(1,0,b/2,b_seek-23,a-2*t1);
if(s_t_3<50){
l_1=60;
l_2=30;
}else{
l_1=s_t_3+50;
l_2=s_t_3+20;
}
draw_sen2(1,-a/2-l_1,b/2,h1/2,l_1,0,0)
draw_sen2(1,-a/2-l_1,b/2,b_seek,l_1,0,0)
draw_sen1(1,-a/2-l_1+5,b/2,h1/2,0,0,-d_h1)
draw_top(1,-a/2-l_1+5,b/2,h1/2)
draw_down(1,-a/2-l_1+5,b/2,b_seek)
draw_moji(1,-a/2-l_1+5-15,b/2,12,d_h1);
if (d_h2>0){
draw_sen2(1,-a/2-l_2,b/2,h1/2-t1,l_2,0,0)
draw_sen2(1,-a/2-l_2,b/2,b_seek2,l_2,0,0)
draw_sen1(1,-a/2-l_2+5,b/2,h1/2-t1,0,0,-d_h2)
draw_top(1,-a/2-l_2+5,b/2,h1/2-t1)
draw_down(1,-a/2-l_2+5,b/2,b_seek2)
if(p=="Dタイプ"){
draw_moji(1,-a/2-l_2+5-15,b/2,h2/2,d_h2);
}else{
draw_moji(1,-a/2-l_2+5-15,b/2,12,d_h2);
}
}
draw_sen1(4,a/2,b/2,b_seek,0,0,-50)
draw_sen1(4,a/2,-b/2,b_seek,0,0,-50)
draw_sen2(4,a/2,b/2-1,b_seek-45,0,b-2,0)
draw_right(4,a/2,-b/2,b_seek-45)
draw_left(4,a/2,b/2,b_seek-45)
draw_moji(4,a/2,0,b_seek-38,b);
draw_sen1(4,a/2,b/2-t1,b_seek,0,0,-35)
draw_sen1(4,a/2,-b/2+t1,b_seek,0,0,-35)
draw_sen2(4,a/2,b/2-t1-1,b_seek-30,0,b-2*t1-2,0)
draw_right(4,a/2,-b/2+t1,b_seek-30)
draw_left(4,a/2,b/2-t1,b_seek-30)
draw_moji(4,a/2,0,b_seek-23,b-2*t1);	
}


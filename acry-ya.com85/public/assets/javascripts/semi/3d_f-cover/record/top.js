function draw_top(f,x,y,h)
{
	var x1 =new Array();
	var y1 =new Array();
	var h1 =new Array();
	
	var i=0;
	
	if(f==0){
		for (i=0;i<2;i++){
			x1[0+i*4]=x+atu2/2;
			y1[0+i*4]=y;
			h1[0+i*4]=h+i*atu;
			x1[1+i*4]=x-1*tani+atu2/2;
			y1[1+i*4]=y+9*tani;
			h1[1+i*4]=h+i*atu;
			x1[2+i*4]=x+1*tani+atu2/2;
			y1[2+i*4]=y+9*tani;
			h1[2+i*4]=h+i*atu;
			x1[3+i*4]=x+atu2/2;
			y1[3+i*4]=y;
			h1[3+i*4]=h+i*atu;
		}
	}
	if(f==1){
		for (i=0;i<2;i++){
			x1[0+i*4]=x+atu2/2;
			y1[0+i*4]=y+i*atu;
			h1[0+i*4]=h;
			x1[1+i*4]=x-1*tani+atu2/2;
			y1[1+i*4]=y+i*atu;
			h1[1+i*4]=h-9*tani;
			x1[2+i*4]=x+1*tani+atu2/2;
			y1[2+i*4]=y+i*atu;
			h1[2+i*4]=h-9*tani;
			x1[3+i*4]=x+atu2/2;
			y1[3+i*4]=y+i*atu;
			h1[3+i*4]=h;
		}
	}
	if(f==2){
		for (i=0;i<2;i++){
			x1[0+i*4]=x+atu2/2;
			y1[0+i*4]=y-i*atu;
			h1[0+i*4]=h;
			x1[1+i*4]=x+1*tani+atu2/2;
			y1[1+i*4]=y-i*atu;
			h1[1+i*4]=h-9*tani;
			x1[2+i*4]=x-1*tani+atu2/2;
			y1[2+i*4]=y-i*atu;
			h1[2+i*4]=h-9*tani;
			x1[3+i*4]=x+atu2/2;
			y1[3+i*4]=y-i*atu;
			h1[3+i*4]=h;
		}
	}
	if(f==3){
		for (i=0;i<2;i++){
			x1[0+i*4]=x-i*atu;
			y1[0+i*4]=y+atu2/2;
			h1[0+i*4]=h;
			x1[1+i*4]=x-i*atu;
			y1[1+i*4]=y-1*tani+atu2/2;
			h1[1+i*4]=h-9*tani;
			x1[2+i*4]=x-i*atu;
			y1[2+i*4]=y+1*tani+atu2/2;
			h1[2+i*4]=h-9*tani;
			x1[3+i*4]=x-i*atu;
			y1[3+i*4]=y+atu2/2;
			h1[3+i*4]=h;
		}
	}
	if(f==4){
		for (i=0;i<2;i++){
			x1[0+i*4]=x+i*atu;
			y1[0+i*4]=y+atu2/2;
			h1[0+i*4]=h;
			x1[1+i*4]=x+i*atu;
			y1[1+i*4]=y+1*tani+atu2/2;
			h1[1+i*4]=h-9*tani;
			x1[2+i*4]=x+i*atu;
			y1[2+i*4]=y-1*tani+atu2/2;
			h1[2+i*4]=h-9*tani;
			x1[3+i*4]=x+i*atu;
			y1[3+i*4]=y+atu2/2;
			h1[3+i*4]=h;
		}
	}
	for(i=0;i<8;i++){
		geometry80.vertices.push(new THREE.Vector3(x1[i],h1[i],y1[i]));
	}
	for (i=cnt80;i<cnt80+1;i++){
	geometry80.faces.push(new THREE.Face3(1+i*8, 2+i*8, 0+i*8));
	geometry80.faces.push(new THREE.Face3(2+i*8, 3+i*8, 0+i*8));
	geometry80.faces.push(new THREE.Face3(0+i*8, 5+i*8, 1+i*8));
	geometry80.faces.push(new THREE.Face3(0+i*8, 4+i*8, 5+i*8));
	geometry80.faces.push(new THREE.Face3(3+i*8, 2+i*8, 6+i*8));
	geometry80.faces.push(new THREE.Face3(6+i*8, 7+i*8, 3+i*8));
	geometry80.faces.push(new THREE.Face3(0+i*8, 3+i*8,4+i*8));
	geometry80.faces.push(new THREE.Face3(4+i*8, 3+i*8,7+i*8));
	geometry80.faces.push(new THREE.Face3(1+i*8, 5+i*8,2+i*8));
	geometry80.faces.push( new THREE.Face3(2+i*8, 5+i*8,6+i*8));
	geometry80.faces.push(new THREE.Face3(4+i*8, 6+i*8, 5+i*8));
	geometry80.faces.push(new THREE.Face3(4+i*8, 7+i*8, 6+i*8));
	}
	cnt80=cnt80+1;
}
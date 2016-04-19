var max;
var mid;
var min;

Vec3 = function( x, y, z )
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vec3.prototype.min = function(){
	min=Math.min(this.x,this.y,this.z);
	return min;
}

Vec3.prototype.max = function(){
	max= Math.max(this.x,this.y,this.z);
	return max;
}

Vec3.prototype.mid = function(){

	if(max>this.x && min<this.x){
		mid = this.x;
	}
	else if(max>this.y && min<this.y){
		mid = this.y;
	}
	else if(max>this.z && min<this.z){
		mid = this.z;
	}else if(!mid){
		mid = 'ありません'
	}
	return mid;
}

	function func(x,y,z){
		var v = new Vec3(x,y,z);
		max=v.max();
		min=v.min();
		document.write('最小値は'+max+'<br>');
		document.write('中間値は'+v.mid()+'<br>');
		document.write('最大値は'+min);
}
var v1,v2,v3;

Vec3 = function(x,y,z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

function area(x1,y1,z1,x2,y2,z2,x3,y3,z3){
	v2 = new Vec3(x2-x1,y2-y1,z2-z1);
	v3 = new Vec3(x3-x1,y3-y1,z3-z1);
	sum(v2,v3);
}

function sum(v2,v3){
	var a=v2.y*v3.z-v2.z*v3.y;
	var b=v2.z*v3.x-v2.x*v3.z;
	var c=v2.x*v3.y-v2.y*v3.x;
	s=Math.sqrt(a*a+b*b+c*c)/2;
	document.write('面積は'+s);
}
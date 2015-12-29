/*
*定义一个类似java中List集合的对象并添加对应常用方法
*功能比较简易，远不如真正List强大而高效，暂目前满足几个需求即可，待后续完善优化
*@author 陈磊兴
*@date 2015-09-10
*/

//List定义
function List(){
  this.table=new Array();
}
//get方法
List.prototype.get=function(i){
  return this.table[i];
}
//add方法
List.prototype.add=function(o){
	this.table.push(o);
}
//indexOf方法,无返回-1，如有首次出现的元素索引
List.prototype.indexOf=function(o){
	var c=-1;
	for(var i=0;i<this.table.length;i++){
		if(this.table[i]==o){
			c=i;
			break;
		}
	}
	return c;
}
//contain方法
List.prototype.contain=function(o){
	var e=false;
	for(var i=0;i<this.table.length;i++){
		if(this.table[i]==o){
			e=true;
			break;
		}
	}
	return e;
}
//removeAt方法根据索引，返回被移除的元素
List.prototype.removeAt=function(i){
	if(this.table.length==0 || i<0 || i>(this.table.length-1)){
		return ;
	}
	var t=[];
	for(var h=0;h<i;h++){
		t.push(this.table[h]);
	}
	for(var f=i+1;f<this.table.length;f++){
		t.push(this.table[f]);
	}
	var e=this.table[i];
	this.table=t;
	
	return e;
}
//removeObj方法移除首次出现的指定元素返回true或false，如果有
List.prototype.removeObj=function(o){
	var i=this.indexOf(o);
	var s=false;
	if(i!=-1){
		this.removeAt(i);
		s=true;
	}
	return s;
}
//toArray方法
List.prototype.toArray=function(){
	return this.table;
}
//toString方法
List.prototype.toString=function(){
	var s="";
	for(var i=0;i<this.table.length;i++){
		s+=this.table[i].toString();
		if(i!=this.table.length-1){
			s+=',';
		}
	}
	return s;
}
//size方法
List.prototype.size=function(){
	return this.table.length;
}

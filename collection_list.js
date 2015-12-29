/*
*����һ������java��List���ϵĶ�����Ӷ�Ӧ���÷���
*���ܱȽϼ��ף�Զ��������Listǿ�����Ч����Ŀǰ���㼸�����󼴿ɣ������������Ż�
*@author ������
*@date 2015-09-10
*/

//List����
function List(){
  this.table=new Array();
}
//get����
List.prototype.get=function(i){
  return this.table[i];
}
//add����
List.prototype.add=function(o){
	this.table.push(o);
}
//indexOf����,�޷���-1�������״γ��ֵ�Ԫ������
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
//contain����
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
//removeAt�����������������ر��Ƴ���Ԫ��
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
//removeObj�����Ƴ��״γ��ֵ�ָ��Ԫ�ط���true��false�������
List.prototype.removeObj=function(o){
	var i=this.indexOf(o);
	var s=false;
	if(i!=-1){
		this.removeAt(i);
		s=true;
	}
	return s;
}
//toArray����
List.prototype.toArray=function(){
	return this.table;
}
//toString����
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
//size����
List.prototype.size=function(){
	return this.table.length;
}

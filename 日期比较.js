/* �Ƚ�2�����ڣ�yyy-MM-dd HH:mm:ss���Ĵ�С,��ȷ���0,first�󷵻�1,firstС����-1 */
function compareTime(dateFirst,dateSecond){
	var first = dateFirst.substring(0,10).split('-');
	var second= dateSecond.substring(0,10).split('-');
	
	dateFirst = first[1]+'-'+first[2]+'-'+first[0]+' '+dateFirst.substring(10,19);
	dateSecond = second[1]+'-'+second[2]+'-'+second[0]+' '+dateSecond.substring(10,19);
	var a =(Date.parse(dateFirst)-Date.parse(dateSecond))/3600/1000;
	if(a<0){
		return -1;
	}else if (a>0){
		return 1;
	}else{
		return 0; 
	}
}
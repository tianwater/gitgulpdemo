define([],function(){
	var name = "宝宝";
	var age = 20;
	
	function eat(str){
		alert(name+"在吃"+str);
	}
	
	function showInfo(){
		alert(name+"今年"+age+"岁了");
	}
	
	function setAge(transAge){
		if(transAge<18 || transAge>65){
			alert("亲，您输入的年龄不合法，员工的合法年龄应该在18-65");
			return;
		}
		age = transAge;
	}
	
	return {
		setAge:setAge,
		eat:eat,
		showInfo:showInfo
	}
});

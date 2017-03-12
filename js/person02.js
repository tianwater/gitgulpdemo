var person = (function (){
	var id="007";
	var name="芙蓉";
	var age=25;
	
	
	function setAge(transAge){
		if(transAge<18 || transAge>65){
			alert("亲，您输入的年龄不合法，员工的合法年龄应该在18-65");
			return;
		}
		age = transAge;
	}
		
	function showInfo(){
		alert(name+"今年"+age+"岁了");
	}
	
	
	return {
		setAge:setAge,
		showInfo:showInfo
	}
})();  

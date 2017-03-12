define(function(require,exports,module){
	
	var name = "宝宝";
	var age = 20;
	
	exports.setAge=function(transAge){
		if(transAge<18 || transAge>65){
			alert("亲，您输入的年龄不合法，员工的合法年龄应该在18-65");
			return;
		}
		age = transAge;
	};
	
	exports.eat=function(){
		alert(name+"在吃"+str);
	}
	
	exports.showInfo=function(){
		alert(name+"今年"+age+"岁了");
	}
	
});

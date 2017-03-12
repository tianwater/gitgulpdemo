seajs.use(["seademo01","jquery"],function(mysea){
	$("#btn01").click(function(){
		mysea.setAge($("#userAge").val());
		mysea.showInfo();
	});
});

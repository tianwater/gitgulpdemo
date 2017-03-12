require.config({
	baseUrl:"js",
	paths:{
		"amd01":"amd01",
		"jquery":"jquery"
	}
});

require(["amd01","jquery"],function(amd){
	$("#btn01").click(function(){
		amd.setAge($("#userAge").val());
		amd.showInfo();
	});
});

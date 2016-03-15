


$(function(){
	var username=localStorage.getItem("username");
	$(".loginto_index").html("欢迎"+username+"来到韩衣都舍");
	$(".my_hd").mouseover(function(){
		
		$(".more_items").css("display","block");
	});
	$(".my_hd").bind("mouseout",function(){
		
			$(".more_items").css("display","none")	
		
	});
	
	
	
})

















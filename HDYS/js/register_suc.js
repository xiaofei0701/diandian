$(function(){
	var username=localStorage.getItem("username");
	setTimeout(function(){
		alert("用户"+username+"注册成功");
		
	},2000);
	$(".buy_now").click(function(){
		window.location.href="login.html";
		
	})
	
})
/*
    作者：742938202@qq.com
    时间：2016-02-17
    描述：韩都衣舍
*/
$(function(){
	$("#loginName").blur(function(){
		userName();
	});
	$("#loginPassword").blur(function(){
		userPwd();
	});
	$(".login_btn").click(function(){
		if($("#loginName").val()==""&&$("#loginPassword").val()==""){
			$("#login_tishi").css('display','block');
		}
		if($("#loginName").val()!=""&&$("#loginPassword").val()!=""&&$('#name_val').css('display')=="none"&&$('#pas_val').css('display')=="none"){
			getajax("get","http://datainfo.duapp.com/shopdata/userinfo.php",{status:'login',userID:$("#loginName").val(),password:$("#loginPassword").val()},function(data){
				if(data==0){
					$("#login_tishi").html('用户名不存在！');
					$("#login_tishi").css('display','block');
				}else if(data==2){
					var data=JSON.parse(data);
					$("#login_tishi").html('用户与密码不符!');
					$("#login_tishi").css('display','block');
					
					window.location.href="register_suc.html";
				}else if(data.substr(0,1)=="{"){
					var data=JSON.parse(data);
					$("#login_tishi").html('用户：'+data.userID+'登录成功!');
					window.location.href="../login_index.html";
				}
			});
		}
		localStorage.setItem("username",$("#loginName").val());
	});
});
//用户名验证
function userName(){
	var mobileReg=/^1[3578][0-9]{9}/;
	var emailReg = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;
	if($('#loginName').val()==''){	 
		$('#name_val').css('display','block');
		return false;
	}else if(!mobileReg.test($('#loginName').val())&&!emailReg.test($('#loginName').val())){
		$('#name_val').css('display','block');
		return false;
	}else{
		$('#name_val').css('display','none');
		return true;
	}
};
//密码验证
function userPwd(){
	var Reg=/^\w{6,16}$/g;
	if($('#loginPassword').val()==''){ 	
		$('#pas_val').css('display','block');
		return false;
	}else if(!Reg.test($('#loginPassword').val())){
		$('#pas_val').html('请输入6-20个字符');
		$('#pas_val').css('display','block');
		return false;
	}else{
		$('#pas_val').css('display','none');
		return true;
	}
};
/*封装AJAX请求函数*/
function getajax(method,url,parameter,fn){
	var httpRequest=null;
	var thisp="";
	for(var i in parameter){
		thisp+=i+"="+parameter[i]+"&";
	}
	thisp=thisp.substr(0,thisp.length-1);
	console.log(thisp);
	if(window.XMLHttpRequest){
		httpRequest=new XMLHttpRequest();
	}else{
		httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(method=="get"){
		httpRequest.open(method,url+"?"+thisp,true);
		httpRequest.send();
	}else if(method=="post"){
		httpRequest.open(method,url,true);
		httpRequest.send(thisp);
	}
	
	httpRequest.onreadystatechange=function(){
		//console.log(httpRequest.status+"__"+httpRequest.readyState);
		var data=null;
		if(httpRequest.status==200){
			if(httpRequest.readyState==4){
				if(typeof(fn)=="function"){
					fn(httpRequest.responseText);
				}
				//data=JSON.parse();
				//console.log(httpRequest.responseText);
				//eval("asdfadfafakjah");
				//JSON.parse();
				//box.innerHTML='<p>名字：'+data.name+'</p><p>ID：'+data.id+'</p><p>班级：'+data.class+'</p>'
				//console.log(data.name);
			}
		}else{
			console.log("服务器连接失败！！");
		}
	}
}

















/*
    作者：742938202@qq.com
    时间：2016-02-17
    描述：韩都衣舍
*/
$(function(){
	//手机注册和邮箱注册切换
	$(".re_phone").click(function(){
		$(".re_phone1").css("display","none");
		$(".re_email1").css("display","none");
		$(".re_phone1").css("display","block");
		$(this).css({"background-position":"0 -102px","color": "#fff"});
		$(".re_email").css({"background-position":"0 -151px","color": "#393939"});
		$("form[name='formMobile']").css("display","block");
		$("form[name='formUser']").css("display","none");
	});
	$(".re_email").click(function(){
		$(".re_phone1").css("display","none");
		$(".re_email1").css("display","none");
		$(".re_email1").css("display","block");
		$(this).css({"background-position":"0 -102px","color": "#fff"});
		$(".re_phone").css({"background-position":"0 -151px","color": "#393939"});
		$("form[name='formMobile']").css("display","none");
		$("form[name='formUser']").css("display","block");
	});	
	$("#mobile").blur(function(){
		userName();
	});
	$("#Mpassword").blur(function(){
		userPwd();
	});
	$("#MCpassword").blur(function(){
		if($("#Mpassword").val()!=$("#MCpassword").val()){
			$("#tip_m_cp").css('display','block');
		}else{
			$("#tip_m_cp").css('display','none');
		}
	});
	$("#reg_mobile_submit").click(function(){
		if($("#mobile").val()!=""&&$("#Mpassword").val()!=""&&$("#MCpassword").val()!=""&&$('#tip_m_m').css('display')=="none"&&$('#tip_m_p').css('display')=="none"&&$('#tip_m_cp').css('display')=="none"){
			getajax("get","http://datainfo.duapp.com/shopdata/userinfo.php",{status:'register',userID:$("#mobile").val(),password:$("#Mpassword").val()},function(data){
				if(data==0){
					$("#tip_m_ag").html('注册失败！用户名可能被使用');
				}else if(data==1){
					var data=JSON.parse(data);
					$("#tip_m_ag").html('用户：'+$("#mobile").val()+'注册成功!');
					
					window.location.href="register_suc.html";
				}
			});
		}else{
			$("#tip_m_ag").html("注册内容有误");
		}
	})
});

//手机用户名验证
function userName(){
	var mobileReg=/^1[3578][0-9]{9}/;
	if($('#mobile').val()==''){	 
		$('.register_list_tishi').css('display','block');
		return false;
	}else if(!mobileReg.test($('#mobile').val())){
		$('#tip_m_m').css('display','block');
		return false;
	}else{
		$('#tip_m_m').css('display','none');
		return true;
	}
};

//密码验证
function userPwd(){
	var Reg=/^\w{6,16}$/g;
	if($('#Mpassword').val()==''){ 	
		$('#tip_m_p').css('display','block');
		return false;
	}else if(!Reg.test($('#Mpassword').val())){
		$('#tip_m_p').html('请输入6-20个字符');
		$('#tip_m_p').css('display','block');
		return false;
	}else{
		$('#tip_m_p').css('display','none');
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






























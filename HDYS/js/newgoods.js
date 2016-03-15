/*
    作者：742938202@qq.com
    时间：2016-02-17
    描述：韩都衣舍
*/
$(function(){
	
	Ajax(".goods_Ul1","1");
	Ajax(".goods_Ul2","2");
	Ajax(".goods_Ul3","3");
	Ajax(".goods_Ul4","4");
	Ajax(".goods_Ul5","5");
	Ajax(".goods_Ul6","6");
	
	Ajax2(".goods_footer01","7");
	Ajax2(".goods_footer02","8");
	Ajax2(".goods_footer03","9");
	Ajax2(".goods_footer04","10");
	
	
	/*--------------------封装ajax-------------------------*/
	function Ajax(className,num){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:8020/HDYS/rest/api/newgoods.json",
			async:true,
			success:function(response){
				var data = response;
				data = eval("data.data"+num);
	 	 		console.log(data.length);
	 	 		var str = "";
	 	 		for(var i=0;i<data.length;i++){
	 	 			str+='<li class="goods_Li"><a href="javascript:;"><div class="divJb"><img src="'+data[i].src+'" title="'+data[i].title+'" /></div><div class="rm_btm"><div class="rmLeft01"><span class="rm_xpj">新品价</span><span class="rm_fh">￥</span><span class="rm_100">'+data[i].new_price+'</span><span class="rm_jdel"><del>￥'+data[i].old_price+'</del></span></div><div class="rmbtn">立即<br />抢购<br />&gt;</div></div></a></li>';
	 	 		}
	 	 		$(className).append(str);
			}
		});
	}
	/*--------------------封装ajax2-------------------------*/
	function Ajax2(className,num){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:8020/HDYS/rest/api/newgoods.json",
			async:true,
			success:function(response){
				var data = response;
				data = eval("data.data"+num);
	 	 		console.log(data.length);
	 	 		var str = "";
	 	 		for(var i=0;i<data.length;i++){
	 	 			str+='<div class="hd_beebox"><a href="javascript:;"><div class="hd_click">点击查看</div><img src="'+data[i].src+'"/></a></div>'
	 	 		}
	 	 		$(className).append(str);
			}
		});
	}
})











































/*
    作者：742938202@qq.com
    时间：2016-02-17
    描述：韩都衣舍
*/
/*---------top----------*/
$(function(){
	/* -------------------------------最上方的倒计时-------------------------------------------*/
	GetRTime();
	setInterval(GetRTime,1000);
	function GetRTime(){
		var EndTime = new Date("2016/03/01 12:00:00");
		var NowTime = new Date();
		var t=EndTime.getTime()-NowTime.getTime();
		if(t>=0){
			var d=Math.floor(t/1000/60/60/24);
			var h=Math.floor(t/1000/60/60%24);
			var m=Math.floor(t/1000/60%60);
			var s=Math.floor(t/1000%60);
			d=d>9?d:"0"+d;
			h=h>9?h:"0"+h;
			m=m>9?m:"0"+m;
			s=s>9?s:"0"+s;
		}else{
			var d='00';
			var h='00';
			var m='00';
			var s='00';
			clearInterval(GetRTime);
		}
		$("#t_d").html(d+"");
		$("#t_h").html(h+"");
		$("#t_m").html(m+"");
		$("#t_s").html(s+"");	
	}
	var timer=null;
	$(".webdh_a").bind("mouseover",function(){
		clearTimeout(timer);
		$(".webdhbox").slideDown(300);	
	});
	$(".webdh_a").bind("mouseout",function(){
		timer=setTimeout(function(){
			$(".webdhbox").slideUp(300);
		},600);
	});
	
	$(".navlist>li").mouseover(function(){
		$(".navlistCon").css("display","block");
	});
	$(".navlist>li").mouseout(function(){
		$(".navlistCon").css("display","none");
	});
	$(".navlistCon").mouseover(function(){
		$(".navlistCon").css("display","block");
	});
	$(".navlistCon").mouseover(function(){
		$(".navlistCon").css("display","none");
	});
	/*---------------locate--------------------*/
	$(document).scroll(function(){
		var scrollTop = $("body").scrollTop();
		if(scrollTop>800){
			$(".locate").fadeIn();
		}
		else{
			$(".locate").hide();
		};
		
	});
	$(document).scroll(function(){
		var scrollTop = $("body").scrollTop();
		if(scrollTop>450){
			$(".rightbox").fadeIn();
      	}
      	else{
     		$(".rightbox").hide();
      	}
	});
	
	$('.a5').click(function(){
	    $("html, body").animate({'scrollTop':0},320);
	})
	/*---------------navlist--------------------*/
	$(".navmain").mouseover(function(){
		$(".navlist_son").css("display","block");
	});
	$(".navmain").mouseout(function(){
		$(".navlist_son").css("display","none");
	});
	$(".navmain>ul>li ").mouseover(function(){
		var index=$(this).index();
		$(".navmain>ul>li>div").eq(index).css({"display":"block"});
	});
	$(".navmain>ul>li ").mouseout(function(){
		var index=$(this).index();
		$(".navmain>ul>li>div").eq(index).css({"display":"none"});
	});
	$(".navlist>li").mouseover(function(){
		$(this).css({"background":"#000000","color":"#fff"});
		$(this).children().eq(1).css("color","#fff");
		$(this).children().eq(2).css("color","#fff");
		$(this).children().eq(3).css("color","#fff");
		$(this).children().eq(4).stop().animate({"left":"190px"},200);
		$(this).children().eq(0).stop().animate({"text-indent":"10px"},200);
	});
	$(".navlist>li").mouseout(function(){
		$(this).css({"background":"#e3e3e3","color":"#000"});
		$(this).children().eq(1).css("color","#555");
		$(this).children().eq(2).css("color","#555");
		$(this).children().eq(3).css("color","#555");
		$(this).children().eq(4).stop().animate({"left":"180px"},200);
		$(this).children().eq(0).stop().animate({"text-indent":"0px"},200);
	})
	
	
	
	$("#wf2_Li").mouseover(function(){
		$(".wf2_app").css("display","block");
	});
	$("#wf2_Li").mouseout(function(){
		$(".wf2_app").css("display","none");
	});
	$("#hdzx_box").mouseover(function(){
		$("#hdzx").css("display","block");
	});
	$("#hdzx_box").mouseout(function(){
		$("#hdzx").css("display","none");
	});
	$("#jhb_box").mouseover(function(){
		$("#jhb").css("display","block");
	});
	$("#jhb_box").mouseout(function(){
		$("#jhb").css("display","none");
	});
	$(".header_ewm_btn").click(function(){
		$(".header_ewm").css("display","none");
	})
	
	
	/*---------banner轮播----------*/
//	var mySwiper = new Swiper ('.swiper-container', {
//	    loop: true,
//	    autoplay : 3000,
//	    autoplayDisableOnInteraction : false,
//		effect : 'fade',
//		fade: {
//		  crossFade: false,
//		}
//	 }); 

	/*---------选项卡----------*/
	$(".hd_zppR_top>div").mouseover(function(){
		var i=$(this).index();
		for(var j=0;j<$(".hd_zppR_bottom>div").length;j++){
			$(".hd_zppR_top>div").eq(j).attr("class","tabs");
			$(".hd_zppR_bottom>div").eq(j).css("display","none");
		}
		$(".hd_zppR_bottom>div").eq(i).css("display","block");
		$(this).attr("class","tabs on");
	});
	/*---------app----------*/
	$(".app_banner>ul>li").mouseover(function(){
		for(var j=0;j<$(".app_banner>ul>li").length;j++){
			$(".app_banner>ul>li>img").css("display","none");
		}
		$(this).find("img").css("display","block");
	});
	$(".app_banner>ul").mouseout(function(){
		for(var j=0;j<$(".app_banner>ul>li").length;j++){
			$(".app_banner>ul>li>img").css("display","none");
		}
	});
	/*---------------hd_hot--------------------*/
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8020/HDYS/rest/api/data.json",
		async:true,
		success:function(response,status,xhr){
			var data=response;
			data=data.data1;
			//console.log(data);
			var str="";
			for(var i=0;i<data.length;i++){
				str+='<a class="a_aband" target="_blank"><img src='+data[i].url+'/></a>';
			}
			$(".brands").append(str);
		}
	});
	/*---------------new_arr--------------------*/
	Ajax(".new_arr1","2")
	Ajax(".new_arr2","3");
	Ajax(".new_arr3","4");
	Ajax(".new_arr4","5");
	Ajax(".new_arr5","6");
	
	$(".new_arr_top>li").mouseover(function(){
		var i=$(this).index();
		for(var j=0;j<$(".new_arr_top>li").length;j++){
			$(".new_arr_top>li").eq(j).attr("class","");
			$(".new_arr_bottom>ul").eq(j).css("display","none");
		}
		$(".new_arr_bottom>ul").eq(i).css("display","block");
		$(this).attr("class","no");
	});
	/*---------------mainR_hot--------------------*/
	$(".mainR_hot>ul>li").mouseover(function(){
		$(this).find("h2").css("display","none");
		$(this).find("ul").css("display","block");
	});
	$(".mainR_hot>ul>li").mouseout(function(){
		for(var i=0;i<$(".mainR_hot>ul>li").length;i++){
			$(".mainR_hot>ul>li").eq(i).find("h2").css("display","block");
			$(".mainR_hot>ul>li").eq(i).find("ul").css("display","none");
		}
		$(this).find("h2").css("display","none");
		$(this).find("ul").css("display","block");
	});
	Ajax(".new_arr6","3");
	Ajax(".new_arr7","2");
	
		
	function Ajax(className,num){
		$.ajax({
	 	 	type:"get",
	 	 	url:"http://127.0.0.1:8020/HDYS/rest/api/data.json",
	 	 	async:true,
	 	 	success:function(response){
	 	 		var data = response;
	 	 		data = eval("data.data"+num);
	 	 		var str = "";
				for(var i=0;i<data.length;i++){
					str+='<li class="new_box"><img src="'+data[i].url+'"/><ul><li class="price"><span class="arrow">￥</span><span class="new_price">'+data[i].new_price+'</span><del class="old_price">￥'+data[i].old_price+'</del></li><li><span class="price_btn">立即抢购</span></li></ul></li>';
					//str+='<a src="javascript:;"><li class="new_box"><img src="'+data[i].url+'"/><ul><li class="price"><span class="arrow">￥</span><span class="new_price">'+data[i].new_price+'</span><del class="old_price">￥'+data[i].old_price+'</del></li><li><span class="price_btn">立即抢购</span></li></ul></li></a>';
					
				}
				$(className).append(str);
	 	 	}
	 	 });
	}

})





















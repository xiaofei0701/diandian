/*
 * 
 * 
 * 
 * 
 * 
 */

$(function(){
	var $little=$('.little'),$select=$('.select'),$big=$('.big');
	
	$little.mousemove(function(evt){
		//参数:默认事件，小图，移入阴影，大图，大图与小图的比例
		for(var i=0;i<$little.length;i++){
			$.magnifyingGlass(evt,$little.eq(i),$select.eq(i),$big.eq(i),1.667);
		}
	});
	
	
	$(".gallery_nav>ul>li").click(function(){
		var i=$(this).index();
		for(var j=0;j<$(".gallery_nav>ul>li").length;j++){
			$(".gallery_nav>ul>li").eq(j).attr("class","");
			$(".gallery_content>div").eq(j).css("display","none");
			$(".gallery_nav>ul>li").find("a").find("s").css("display","none");
			
		}
		
		$(".gallery_content>div").eq(i).css("display","block");
		$(this).attr("class","on");
		$(this).find("a").find("s").css("display","block");
	});
	
	$(".text>ul>li").click(function(){
		//var i=$(this).index();
		for(var i=0;i<$(".text>ul>li").length;i++){
			$(".text>ul>li").eq(i).attr("class","");
		};
		$(this).attr("class","sel");
		$("#GoodsAttrSelectedString").html("你已选择了 &nbsp;["+$(this).find('span').html()+"]&nbsp;[白色]");
		localStorage.setItem("product_size",$(this).find('span').html());
	});
	$(".img>ul>li").click(function(){
		for(var i=0;i<$(".text>ul>li").length;i++){
			$(".img>ul>li").eq(i).attr("class","");
		};
		$(this).attr("class","sel");
		
	});
	
	var num=1;
	$(".increase").click(function(){
		if(num<10){
			num++;
			$("input[name='goods_number']").val(num);
		}
	});
	$(".decrease").click(function(){
		if(num>1){
			num--;
			$("input[name='goods_number']").val(num);
		}
	});
	
	
	
	$(".addCart").click(function(){
		localStorage.setItem("product_num",$("input[name='goods_number']").val());
		
	})
	
	
	
	
	
	
	
	
	
	
	var str="";
	for(var i=11;i<41;i++){
		str+='<img src="../img/detail/'+i+'.jpg" />';
	}
	$(".attributes_list").append(str);
	
	$("#tab_bar>li").click(function(){
		var i=$(this).index();
		for(var j=0;j<$("#tab_bar>li").length;j++){
			$(".tab_content>div").eq(j).css("display","none");
			$("#tab_bar>li").eq(j).attr("class","");
		};
		$(this).attr("class","current");
		$(".tab_content>div").eq(i).css("display","block");
	})
})


















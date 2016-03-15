/*
 * 
 * 
 * 
 * 
 */

$(function(){
	
	var num=localStorage.getItem("product_num");
	var size=localStorage.getItem("product_size");
	if(num==null){
		$(".shopping_nr_top").css("display","none");
	}
	console.log(num);
	num=parseInt(num);
	$("input[name='goods_number']").val(num);
	$(".shop_product_size>span").html("颜色:白色 &nbsp;&nbsp;&nbsp;尺码:"+size);
	$(".shop_product_money00").html("￥"+num*parseInt($(".cprice>span").text()));
	$("#total_Price").html("￥"+num*parseInt($(".cprice>span").text()));
	$("#goods_allnum").html(num);
	$("#totalAmount").html(num*parseInt($(".cprice>span").text()));
	$(".increase").click(function(){
		if(num<10){
			num++;
			$("input[name='goods_number']").val(num);
		}
		$(".shop_product_money00").html("￥"+num*parseInt($(".cprice>span").text()));
		$("#total_Price").html("￥"+num*parseInt($(".cprice>span").text()));
		$("#goods_allnum").html(num);
		$("#totalAmount").html(num*parseInt($(".cprice>span").text()));
	});
	$(".decrease").click(function(){
		if(num>1){
			num--;
			$("input[name='goods_number']").val(num);
		};
		$(".shop_product_money00").html("￥"+num*parseInt($(".cprice>span").text()));
		$("#total_Price").html("￥"+num*parseInt($(".cprice>span").text()));
		$("#goods_allnum").html(num);
		$("#totalAmount").html(num*parseInt($(".cprice>span").text()));
	});
	$("input[name='goods_number']").html(num);
	$(".product_remove").click(function(){
		$(".shopping_nr_top").remove();
		localStorage.removeItem("product_num");
		localStorage.removeItem("product_size");
		$("#total_Price").html("￥"+0);
		$("#goods_allnum").html(0);
		$("#totalAmount").html(0);
	});
	
	$(".btn1").click(function(){
		localStorage.setItem("totalAmount",$("#totalAmount").html());
		localStorage.setItem("goods_allnum",$("#goods_allnum").html());
		window.location.href="checkout.html";
	})
	
	
	
	
})

























/*
 * 
 * 
 * 
 * 
 */
$(function(){
	var allnum=localStorage.getItem("goods_allnum");
	var totalAmount=localStorage.getItem("totalAmount");
	var size=localStorage.getItem("product_size");
	$("#last_size").html(size);
	$("#last_num").html(allnum);
	$("#last_spice").html("￥"+totalAmount);
	$(".p_color").html(allnum);
	$("#order_totalPrice").html("￥"+totalAmount);
	$("#order_totalAmount").html("￥"+(parseInt($("#freight").html())+parseInt(totalAmount)));
	$("#total_amount").html($("#order_totalAmount").html());
	
	$("#address_info").click(function(){
		$(this).html("[保存收货信息]");
		
	});
	
//	var Gid  = document.getElementById ;
//	var showArea = function(){
//		Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" + 	
//		Gid('s_city').value + " - 县/区" + 
//		Gid('s_county').value + "</h3>"
//								}
//	Gid('s_county').setAttribute('onchange','showArea()');

	$(".btn5").click(function(){
		$(".selected_name").html("&nbsp;&nbsp;&nbsp;"+$("#consignee").val()+"&nbsp;&nbsp;"+$("#tel").val());
		$(".selected_address").html($("#s_province").val()+"&nbsp;&nbsp;"+$("#s_city").val()+"&nbsp;&nbsp;"+$("#s_county").val()+"&nbsp;&nbsp;"+$("#address").val());
		$(".selected").css("display","block");
	})
	$(".btn10").click(function(){
		$(".new_address_form").css("display","none");
	})
	$(".new_address_btn").click(function(){
		$(".new_address_form").css("display","block");
	});
	
	$("#shop_updateinfo").click(function(){
		$(".shopping_order_delivery").css("display","block");
		$(this).html("[保存收货信息]");
		$(this).attr("class","show");
	});

	$(".btn7").click(function(){
		$(".shopping_order_delivery").css("display","none");
		$("#peisong_way").css("display","block");
	});
	
	$("#zifu_way_xiugai").click(function(){
		$(".shopping_order_pay02").css("display","block");
		$(this).html("[保存收货信息]");
		$(this).attr("class","show");
	});
	

	var $str_input=$("input[name='selectPayment']");
	$str_input.click(function(){
		for(var i=0;i<$str_input.length;i++){
			$str_input.eq(i).attr("class","");
		};
		$(this).attr("class","radios");
	});
	
	
	$(".btn6").click(function(){
		var text1="";
		text1=$(".radios").siblings().eq(1).val();
		$("#pay_name").html(text1);
		$("#pay_name").css("display","block");
		$(".shopping_order_pay02").css("display","none");
	});
	/*---------------------发票信息------------------------*/
	$(".shop_updateinfo1").click(function(){
		$(".invoice").css("display","block");
		$(this).html("[保存收货信息]");
	});
	$(".btn8").click(function(){
		$("#inv_message").html("新发票类型");
		$("#inv_message").css("display","block");
		$(".invoice").css("display","none");
	});
	$(".btn11").click(function(){
		$("#inv_message").html("不开发票");
		$("#inv_message").css("display","block");
		$(".invoice").css("display","none");
	})
	
	$(".btn13").click(function(){
		localStorage.setItem("zhifu_price",$("#total_amount").html());
		localStorage.setItem("zhifu_way",$("#pay_name").html());
		localStorage.setItem("zhifu_way_img",$(".radios").siblings().eq(0).html());

		window.location.href="done.html";
	})
	
	
	
})




































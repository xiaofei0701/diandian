/***
	@auth:hualu
	@time:2016-02-02
	@desription:this is a magnifying glass plufin.
	@license:MIT
***/
(function($){
	$.extend({
		//参数:默认事件，小图，移入阴影，大图，大图与小图的比例
		magnifyingGlass:function(evt,smallImg,shadow,bigImg,ratio){
			var disX=evt.clientX+$("body").scrollLeft()-smallImg.offset().left-shadow.width()/2;
			var disY=evt.clientY+$("body").scrollTop()-smallImg.offset().top-shadow.height()/2;
			var width=shadow.width();
			var height=shadow.height();
			//console.log(disX+"________"+disY);
			if(disX<0){
				disX=0;
			}else if(disX>smallImg.width()-width){
				disX=smallImg.width()-width;
			};
			if(disY<0){
				disY=0;
			}else if(disY>smallImg.height()-height){
				disY=smallImg.height()-height;
			};
			shadow.css({'display':'block','left':disX,'top':disY});
			var lf=-disX*ratio;
			var rt=-disY*ratio;
			//bigImg.slideDown(100);
			bigImg.css("background-position",lf+'px'+" "+rt+'px');
			smallImg.mouseover(function(evt){
				bigImg.css("display","block");
			});
			smallImg.mouseout(function(evt){
				bigImg.css("display","none");
				shadow.css("display","none");
			})
		}
	}) 
	
	
})(jQuery)

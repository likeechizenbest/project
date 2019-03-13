$(function(){
	$('.navbar a').eq(2).css({'background':'rgba(255, 255, 255, 0.78)','color':'black'})
	var scrollTop=0;
	var i=0;
	$('.orange-img img').eq(0).animate({opacity:1,bottom:'0px'},800);
	$('.int-left').eq(0).delay(500).animate({opacity:1,bottom:'0px'},500);
	$('.integer .int-right').eq(0).delay(500).animate({opacity:1,bottom:'0px'},800);
	$('.categories:eq(0) ul li:odd').animate({opacity:1,bottom:'0px'},1000);
	$('.categories:eq(0) ul li:even').addClass('even').animate({opacity:1,top:'0px'},800);
	$(window).scroll(function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		i=Math.floor(scrollTop/650);
		if(i>0&&i<3){
			move();
		}
		if(scrollTop>200){
			$('.top').css('display','block');
			$('.categories:eq(1) ul li:odd').animate({opacity:1,bottom:'0px'},1000);
			$('.categories:eq(1) ul li:even').addClass('even').animate({opacity:1,top:'0px'},800);
		}else{
			$('.top').css('display','none');
		}

		
		console.log(scrollTop)
		if(scrollTop>2100&&scrollTop<2300){
			$('.foot-content ul li').eq(0).animate({'bottom':'0px'},300).next().delay(200).animate({'bottom':'0px'},300).next().delay(400).animate({'bottom':'0px'},300)
			.next().delay(600).animate({'bottom':'0px'},300);
			$('.copy p').css('width','0px').delay(500).animate({width:'1140px'},1000);

		}

	})
	$('.top').click(function(){
		$('body,html').animate({scrollTop:'0px'},800)
	})

	function move(){
		$('.orange-img img').eq(i).animate({opacity:1,bottom:'0px'},800);
		$('.int-left').eq(i).delay(800).animate({opacity:1,bottom:'0px'},500);
		$('.integer .int-right').eq(i).delay(800).animate({opacity:1,bottom:'0px'},800);

	}




})
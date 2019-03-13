$(function(){
	$('.navbar a').eq(4).css({'background':'rgba(255, 255, 255, 0.78)','color':'black'})
	$('.map').delay(300).css('left','-800px').animate({left:'0px'});
	$('.food').delay(300).css('right','-800px').animate({right:'0px'});
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>200){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none');
		}
		if(scrollTop>300&scrollTop<500){
			$('.htitle:eq(0)').fadeIn(300).animate({top:'0px'})
			$('form input').css({'left':'-1400px'}).fadeIn().animate({left:'0px'},1000)
			$('.imess').css({'right':'-1400px'}).fadeIn().animate({right:'0px'},1000)
		}
		if(scrollTop>700&scrollTop<900){
			$('.htitle:eq(1)').fadeIn(300).animate({top:'0px'})
			$('.con-gride ul li:eq(0)').delay(300).css({'left':'-300px'}).fadeIn().animate({left:'0px'},1000)
			$('.con-gride ul li:eq(1)').delay(300).css({'bottom':'-200px'}).fadeIn().animate({bottom:'0px'},1000)
			$('.con-gride ul li:eq(2)').delay(300).css({'right':'-300px'}).fadeIn().animate({right:'0px'},1000)

		}

		if(scrollTop>1100&scrollTop<1400){
			$('.foot-content ul li').eq(0).animate({'bottom':'0px'},300).next().delay(200).animate({'bottom':'0px'},300).next().delay(400).animate({'bottom':'0px'},300)
			.next().delay(600).animate({'bottom':'0px'},300);
			$('.copy p').css('width','0px').delay(500).animate({width:'1140px'},1000);

		}

	})
	$('.top').click(function(){
		$('body,html').animate({scrollTop:'0px'},800)
	})
	// $('.map').click(function(e){
	// 	var ev = e||window.event;
	// 	var offsetX=ev.offsetX-16;
	// 	var offsetY=ev.offsetY-32;
	// 	$('.point').css({'left':'offsetX'+'px'});
	// })

	var myMap = document.getElementsByClassName('map')[0];
	var point = document.getElementsByClassName('point')[0];
	
		myMap.onclick=run;
		function run(e){
		var ev = e||window.event;
		var offsetX=ev.offsetX-16;
		var offsetY=ev.offsetY-32;
		point.style.display='block';
		point.style.left=offsetX+'px';
		point.style.top=offsetY+'px';
	}


})
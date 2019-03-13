$(function(){
	$('.navbar a').eq(3).css({'background':'rgba(255, 255, 255, 0.78)','color':'black'})
	$('.gal-gride ul li').hover(
		function(){
			$(this).children('.gride-img').children('.mask').children('.gal-cover').css('display','block').stop().animate({left:'30px'})
			$(this).children('.gride-img').children('.mask').find('img').animate({left:'0px'},3000)
			$(this).children('.gride-img').children('.mask').addClass('active')
		},function(){
			$(this).children('.gride-img').children('.mask').children('.gal-cover').stop().css('display','none')
			$(this).children('.gride-img').children('.mask').find('img').animate({right:'0px'},3000)
			$(this).children('.gride-img').children('.mask').removeClass('active')
		})
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>200){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none');
		}

		if(scrollTop>500&scrollTop<800){
			$('.foot-content ul li').eq(0).animate({'bottom':'0px'},300).next().delay(200).animate({'bottom':'0px'},300).next().delay(400).animate({'bottom':'0px'},300)
			.next().delay(600).animate({'bottom':'0px'},300);
			$('.copy p').css('width','0px').delay(500).animate({width:'1140px'},1000);

		}

	})
	$('.top').click(function(){
		$('body,html').animate({scrollTop:'0px'},800)
	})
		$('.gal-gride ul li').mouseover(function(){
			
			// console.log($(this).index())
		})

		$('.gal-gride ul li').click(function(){
			
			var i=$(this).index();

		$('.regis').hover(function(){
			$('.button').show()
		},function(){
			$('.button').hide()
		})
		$('.prev').click(function(){
			if(i>=1&&i<6){
				i--;
				move();
			}
		})

		$('.next').click(function(){
			if(i>=0&&i<5){
				i++;
				move();
			}
		})

		
		function move(){
			$('.rwindow').css('display','block')
			$('.regis').show().find('.big-img').attr('src','images/g'+i+'.jpg');			
		}
		move();
	})

		$('.close').click(function(){
			$('.regis').hide(300)
			$('.rwindow').css('display','none')

		})


})
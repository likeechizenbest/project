$(function(){
	$(document).ready(function(){
  		$('body').css('scrollTop','0px');
	})
	console.log($('.login-bg'))
	$('.navbar a').eq(5).css({'background':'rgba(255, 255, 255, 0.78)','color':'black'})
	$('.htitle').fadeIn().animate({top:'0px'},1000)
	$('#grayword').fadeIn().animate({bottom:'0px'},1000)
	$('.left').find('img').fadeIn().animate({left:'0px'},1000)
	$('.left').find('img').siblings().fadeIn().animate({right:'0px'},1000)
	$('.login-bg').animate({opacity:1,left:'0px'},1000);

	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>200){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none');
		}

		if(scrollTop>400&scrollTop<700){
			$('.foot-content ul li').eq(0).animate({'bottom':'0px'},300).next().delay(200).animate({'bottom':'0px'},300).next().delay(400).animate({'bottom':'0px'},300)
			.next().delay(600).animate({'bottom':'0px'},300);
			$('.copy p').css('width','0px').delay(500).animate({width:'1140px'},1000);

		}

	})
	$('.top').click(function(){
		$('body,html').animate({scrollTop:'0px'},800)
	})

	var userName = $(this).val();
	var pattern = /^\w{6,}$/;
	var uflag=false;
	var pflag=false;

	$('.register').click(function(){
		$('.uname').html(' ')
		$('.upwd').html(' ')
		$('.right').hide()
		$('.right-two').show()
	})

    $('.text').focus(function(){
    	$('.login-bg').css('background','rgba(91, 123, 104, 0.55)')
		userName = $(this).val();
    	userName=null;
    })

	$('.text').blur(function(){	
		userName = $(this).val();
		$('.login-bg').css('background','rgba(91, 123, 104, 0)')
		if(userName == ''){
			$('.uname').html('*Enter your name').css({'color':'#E43232','margin-left':'10px'})
			uflag=false;
		}else if(pattern.test(userName)){
			$('.uname').html('right').css({'color':'#bdcd00','margin-left':'10px'})
			uflag=true;
		}else{
			$('.uname').html('error').css({'color':'#E43232','margin-left':'10px'})
			uflag=false;
		}
	})
		$('.pwd').focus(function(){	
		$('.login-bg').css('background','rgba(91, 123, 104, 0.55)')
	})
		$('.pwd').blur(function(){	
		userName = $(this).val();
		if(userName == ''){
			$('.upwd').html('*Enter your password').css({'color':'#E43232','margin-left':'10px'})
				pflag=false;
		}else if(pattern.test(userName)){
				$('.upwd').html('right').css({'color':'#bdcd00','margin-left':'10px'})
				pflag=true;
		}else{
				$('.upwd').html('error').css({'color':'#E43232','margin-left':'10px'})
				pflag=false;
			}
	})  

		$('.phone').focus(function(){	
		$('.login-bg').css('background','rgba(91, 123, 104, 0.55)')
	})
		$('.phone').blur(function(){	
		userName = $(this).val();
		if(userName == ''){
			$('.utel').html('*Enter your telphone').css({'color':'#E43232','margin-left':'10px'})
		}else{
			$('.utel').html(' ')
		}
	})
	$('form').submit(function(){
  		if(uflag&&pflag){
			return true;
		}else{
			return false;
		}

	} );

})
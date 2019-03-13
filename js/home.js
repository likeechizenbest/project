$(function(){
	//导航
	$('.navbar a').eq(0).css({'background':'rgba(255, 255, 255, 0.78)','color':'black'})

	//轮播
	var timer;
	var n=0;
	var index=0;
	function run(){
			if(n>2){
				n=0;
			}
			$('.banner-bg .bg-img ul li').eq(n).find('img').animate({opacity:1},800).parent().siblings().find('img').animate({opacity:0},800)
			$('.banner-info .dot li').eq(n).css('backgroundColor','#bdcd00').siblings().css('backgroundColor','white')
			$('.banner-info .word li').eq(n).fadeIn(300).siblings().fadeOut(300)
		}
		$('.banner-info .dot li').click(function(){
				index=$(this).index();
				$('.banner-info .dot li').eq(index).css('backgroundColor','#bdcd00').siblings().css('backgroundColor','white')
				$('.banner-bg .bg-img ul li').eq(index).find('img').css('opacity',1)
				$('.banner-bg .bg-img ul li').eq(index).siblings().find('img').css('opacity',0)
				$('.banner-info .word li').eq(index).show().siblings().hide()
		})
		$('.button .but-left').click(function(){
			clearInterval(timer)
			
			if(n==0){
				n=2;
			}else{
				n--;	
			}
			run();
			console.log(n);
			
			timer=setInterval(function(){
				run();
				n++;
			},2000)

		})

		$('.button .but-right').click(function(){
			clearInterval(timer)
			 n++;run();
			timer=setInterval(function(){
				run();
				n++;
			},2000)
			console.log(n);
		})
		timer=setInterval(function(){n++;run();},2000)
	$('.wel-left').css('left','-800px')
	$('.wel-right').css('right','-800px')

	//滚动条显示

	
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(scrollTop)
		if(scrollTop>200){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none');
		}
        if(scrollTop>400&&scrollTop<600){
        	$('.wel-left').animate({left:'50px'},500).animate({left:'0px'},500)
			$('.wel-right').animate({right:'50px'},500).animate({right:'0px'},500)
        	
        }
		if(scrollTop>700&scrollTop<900){
			$('.service').animate({opacity:1},500)
		}

		if(scrollTop>1300&scrollTop<1500){
		$('.new-left h3').css('top','-50px').animate({top:'0px'});
		$('.new-left p').css('bottom','-50px').animate({bottom:'0px'});
		}

		if(scrollTop>1600&scrollTop<1800){
			$('.foot-content ul li').eq(0).animate({'bottom':'0px'},300).next().delay(200).animate({'bottom':'0px'},300).next().delay(400).animate({'bottom':'0px'},300)
			.next().delay(600).animate({'bottom':'0px'},300);	
		}
		if(scrollTop>1700&scrollTop<1900){
			$('.copy p').css('width','0px').animate({width:'1140px'},2000);
		}
	})
	$('.top').click(function(){
		$('body,html').animate({scrollTop:'0px'},800)
			})

	//service
	$('.ser-right ul li').hover(
		function(){
			$(this).css({'font-size':'+=10px','line-height':'+=10px'}).find('img').css({'width':'50px','height':'50px'})
		},
		function(){
			$(this).css({'font-size':'-=10px','line-height':'-=10px'}).find('img').css({'width':'34px','height':'34px'})
		}
	)


	

	
	


})
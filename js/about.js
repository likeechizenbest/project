$(function(){
	$('.navbar a').eq(1).css({'background':'rgba(255, 255, 255, 0.78)','color':'black'})
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>200){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none');
		}

		if(scrollTop>1500&scrollTop<1800){
			$('.foot-content ul li').eq(0).animate({'bottom':'0px'},300).next().delay(200).animate({'bottom':'0px'},300).next().delay(400).animate({'bottom':'0px'},300)
			.next().delay(600).animate({'bottom':'0px'},300);
			$('.copy p').css('width','0px').delay(500).animate({width:'1140px'},1000);
		}

	})
	$('.top').click(function(){
		$('body,html').animate({scrollTop:'0px'},800)
			})

	//about us
	setTimeout(function(){
		$('.showword').css('width','0px').animate({width:'616px'},2000);

	},1000)
	$('.us-content').hover(
		function(){
		$(this).animate({left:'-10px',top:'-5px'},300)
	},function(){
		$(this).animate({left:'0px',top:'0px'},300)
	})	
		
	//team的遮罩层
	var flag=true;
	// $('li.oLi').hover(
	// 	function(){
	// 		if(flag){
	// 			flag=false;
	// 			$(this).children('.cover').fadeIn(100).animate({bottom:'40px'},100,function(){
	// 				flag=true;
	// 			})
	// 		}
				
	// 	},
	// 	function(){
	// 			$(this).children('.cover').fadeOut(100).animate({bottom:'0px'},100)
	// 	})

		$('li.oLi').hover(
		function(){
				$(this).children('.cover').stop(true).animate({bottom:'40px'},300)
				
		},
		function(){
				$(this).children('.cover').stop(true).animate({bottom:'-200px'},100)
		})
			


		$('li.fLi').hover(function(){ 
				$(this).css('background','#3C5A99').find('img').attr('src','images/facebook1.png')},
			function(){ 
				$(this).css('background','white').find('img').attr('src','images/facebook2.png')})

		$('li.wLi').hover(function(){ 
			$(this).css('background','#3BAF34').find('img').attr('src','images/微信1.png')},
		function(){ 
			$(this).css('background','white').find('img').attr('src','images/微信2.png')})

		$('li.xLi').hover(function(){ 
			$(this).css('background','#E82014').find('img').attr('src','images/新浪1.png')},
		function(){ 
			$(this).css('background','white').find('img').attr('src','images/新浪2.png')})


})
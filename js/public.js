$(function(){
	// 导航
	(function(){
		var cur=$('.navCur').parent().index();
		$('.nav li').hover(function(){
			$('> a', $(this)).addClass('navCur').siblings().show();
		}, function(){
			$('> a', $(this)).removeClass('navCur').siblings().hide();
			$('.nav li').eq(cur).children('a').addClass('navCur');
		});
	})();
	
	// 首页图片切换
	fnFocus();
});

// 首页图片切换
function fnFocus()
{
	var aEles=$('.bannerList > li');
	if(!aEles[0]) return false;
	var i=0;
	
	function show()
	{
		if(i<0)
		{
			i=aEles.length-1;
		}
		else if(i>aEles.length-1)
		{
			i=0;
		}
		aEles.fadeOut();
		aEles.eq(i).fadeIn();
	}	
	show();
	
	function next()
	{
		i++;
		show();
	}
	
	var timer=setInterval(next, 3300);
}
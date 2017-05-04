
var index = function(){

	var handleScroll = function(){	//处理滚动条

		var header = $("#site-header-id");

		scroll(); //防止在滚动范围内刷新头部现实不正常

	    function scroll(){
	        var scrollPos = $(this).scrollTop();
	        if ($(window).scrollTop() > 70) {
	            header.addClass('site-header-nav-scrolled');
	        } else {
	            header.removeClass('site-header-nav-scrolled');
	        }
	    }
	    $(window).scroll(scroll);

	};

	var handleGeoPattern = function(){	
		$(".geopattern").each(function(){			
			$(this).geopattern($(this).data('pattern-id'));
		});
	}

	var handlePager = function(){ //处理分页btn样式
		$(".btn-group>.page-number,.btn-group>.extend.prev,.btn-group>.extend.next").each(function(){
			$(this).addClass("btn btn-outline");
		});
	};

	return {
		init:function(){
			handleScroll();
			handleGeoPattern();
			handlePager();
		}
	}
};

$(index().init());

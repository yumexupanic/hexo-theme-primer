
var index = function(){

	var handleHighlight = function(){	//处理代码高亮
		hljs.initHighlightingOnLoad();
	}

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

	var handleEvent = function(){

		var searchBox = $("#search_box");

		searchBox.keydown(function(event){
			var keyCode = event.keyCode;
			if(keyCode == 13){
				$("#site_search_do").trigger("click");				
				return false;	
			} 
		})


		$("#site_search_do").click(function(){
			var parent = $(this).parent("form");

			var site = parent.data("site");
			site = site.replace("http://","");

			var value = site + " " + searchBox.val();

			var href = parent.attr("action") + "q=site:" + value
			
			location.href = href;	
		})

	}

	var handleFancyBox = function(){
		$(".article-content img").each(function(){
			var href = $(this).attr("src");
			var title = $(this).attr("alt");
			var parentNode = $(this).parent();

			$(this).appendTo($("<a class='fancybox' rel='group' href='"+href+"' title='"+title+"'></a>").appendTo(parentNode));
		})

		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});

	}

	return {
		init:function(){
			//handleScroll();
			handleGeoPattern();
			handleHighlight();
			handleFancyBox();
			handlePager();
			handleEvent();
		}
	}
};

$(index().init());

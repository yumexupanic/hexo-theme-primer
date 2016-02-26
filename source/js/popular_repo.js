var popular_repo = function(){

	var handleGithub = function(){
		var name = "";
		var repo = "";
		var url = "http://api.github.com/repos" + name + "/" + repo;
		$.get(url,function(result){
			console.log(result);
		})
	};

	return {
		init:function(){
			handleGithub();
		}
	}
};

//$(popular_repo().init);
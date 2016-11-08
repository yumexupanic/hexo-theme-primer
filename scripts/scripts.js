hexo.extend.helper.register("getCategory", function(post){
	var result = "";
	for(var i = 0 ; i < post.categories.length ; i++){
		var path = post.categories.data[i].path;
		var name = post.categories.data[i].name;
		result += "<a href='/"+ path +"' title=''>"+name+"</a>"
	}
	return result;
});
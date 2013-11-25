requirejs.config({

	baseUrl: 'js/',
	paths: {
		"jquery": "jquery-1.10.2",
		"colorTip": "colorTip"
	}
});

requirejs(['jquery','colorTip'],function($,tip){
	setTimeout(function(){tip.success("操作成功");}, 3000);
	setTimeout(function(){tip.error("操作失败");}, 10000);


});
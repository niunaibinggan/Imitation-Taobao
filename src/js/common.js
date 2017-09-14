window.Common = (function(window, document, undefined){
	// 开发/生产环境配置
	var enviroment = (function(env){
		window.console = window.console || {};
		if (env == 'production'){
			window.console.log = function(){};
			return 'production';
		} else if (env == 'development'){
			return 'development';
		} else {
			return arguments.callee('production');
		}
	})('development');

	// ajax配置
	$.ajaxSetup({
		cache: false,
		timeout: 3000
	});
	$(document).ajaxError(function(event, xhr, settings, thrownError){
		if (xhr.status == 403){
			alert('current ajax response status is 403, this site will redirect to login page for reloging in');
		}
	});

	// 命名空间
	window.KG = window.KG || {};
	
	KG.WY = {};

	//
	return {
		getEnv: function(){
			return enviroment;
		}
	};
})(window, document);
	
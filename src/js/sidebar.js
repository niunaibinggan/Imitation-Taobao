KG.WY.Sidebar = (function(){
	// 定义构造函数/类      第一段
	var Obj = function(options){
		// 设计一个方法，专门处理属性的
		this._setPara(options);
	};
	// 在原型对象上添加方法     第二段
	Obj.prototype = {
		constructor: Obj, // 修正一下构造函数的指针
		init: function (){ // 入口方法     共有方法
			// 初始化
			this._setSideBar();
			
			// 事件绑定 -> 楼层
			this._bindFloorEvent();
			// 绑定 页面的滚动事件
			this._bindScrollEvent();
			
			// 长度
			this.iLen = this.$aFloorList.length;
			
			// 一楼到页面顶部的距离
			this.topLen = this.$aFloorList.eq(0).offset().top;
			// 楼层之间差值
			this.diffLen = this.$aFloorList.eq(1).offset().top - this.topLen;
			console.log(this.diffLen);
			
			// 绑定返回顶部事件
			this._bindGoTopEvent();
		},
		_bindGoTopEvent: function(){
			this.$oGoTop.off('click').on('click', function(){
				$('html, body').stop().animate({
					scrollTop: 0
				});
			});
		},
		_bindScrollEvent: function(){
			var _this = this;
			$(window).off('scroll.kg').on('scroll.kg', function(){
				var st = $(this).scrollTop();
				// 
				if (st > 600){
					_this.$oSideBar.parent().fadeIn();
				} else {
					_this.$oSideBar.parent().fadeOut();
				}
				var res = Math.floor((st - _this.topLen) / _this.diffLen);
				if (res < 0 || res > _this.iLen - 1){
					return;
				}
				// 同步一下 curIndex
				_this.curIndex = res;
				// 
				_this.$oSideBar.find('li').eq(_this.curIndex).addClass('selected')
				.siblings().removeClass('selected');
			});
		},
		_bindFloorEvent: function(){
			var _this = this;
			this.$oSideBar.off('click').on('click', 'li', function(){
				var $this = $(this);
				_this.curIndex = $this.index();
	
				$this.addClass('selected').siblings().removeClass('selected');
				
				_this._moveFloor();
			});
		},
		_moveFloor: function(){
			// 获取 当前 楼层到页面顶部的距离
			var iMoveLen = this.$aFloorList.eq(this.curIndex).offset().top;
			console.log(iMoveLen);
			$('html, body').stop().animate({
				scrollTop: iMoveLen
			});
		},
		_setSideBar: function(){
			var str = '';
			for (var i = 0; i < this.$aFloorList.length; i++){
				str += '<li>'+ (i + 1) +'F</li>';
			}
			this.$oSideBar.append(str);
		},
		_setPara: function(option){ // 设置参数
			this.$aFloorList = option.$aFloorList;
			this.$oSideBar = option.$oSideBar;
			this.$oGoTop = option.$oGoTop;
			
			this.curIndex = 0;
		},
		remove: function(){ // 移除组件
			this.$oGoTop.off('click');
			$(window).off('scroll.kg');
			this.$oSideBar.off('click');
			
			// 释放内存
			for (var i in this){
				this[i] = null;
			}
		}
	};
	// 公开接口
	return Obj;
})();

// 调用的示例
//var oSideBar = new Sidebar({
//	$aFloorList: $('.con2_box1'),
//	$oSideBar: $('.sidebar > ul'),
//	$oGoTop: $('.sidebar > dl')
//});
//oSideBar.init();
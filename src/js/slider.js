﻿KG.WY.Slider = (function(){
	// OOP
	// 定义构造函数/类      第一段
	var Obj = function(options){
		// 设计一个方法，专门处理属性的
		this._setPara(options);
	};
	
	// 在原型对象上添加方法     第二段
	Obj.prototype = {
		constructor: Obj, // 修正一下构造函数的指针
		init: function (){ // 入口方法     共有方法
			// 样式的初始化     健壮性
			this.setWrapperStyle();
			
			// 获取所有的LI节点
			var $aLiList = this.$slideWrapper.children('ul').children();
			// 获取LI节点的个数
			this.iLen = $aLiList.length;
			
			// 轮播运动的距离
			this.moveLen = this.$slideWrapper.width();
			console.log(this.moveLen);
			
			
			// 小圆点儿的初始化
			this.setDotFn();
			
			// 给箭头绑定事件
			this.bindArrowEvent();
			
			// 给小圆点绑定事件
			this.bindDotEvent();
			
			// 给大的DIV绑定事件
			this.bindWrpperEvent();
			
			// 自动播放
			this.play();
			
		},
		setWrapperStyle: function(){
			this.$slideWrapper.css({
				'overflow': 'hidden',
				'position': 'relative'
			}).children('ul').css({
				'width': 10000,
				'position': 'absolute'
			});
		},
		setDotFn: function(){
			if (this.$slideDotWrapper == null){
				return;
			}
			for (var i = 0; i < this.iLen; i++){
				var str = '<dd></dd>';
				if (i == this.curIndex){ // 当前的小圆点儿是选中的
					str = '<dd class="selected"></dd>';
				}
				this.$slideDotWrapper.append(str);
			}
		},
		bindArrowEvent: function(){
			if (this.$aSlideArrow.length == 0){
				return;
			}
			var _this = this;
			this.$aSlideArrow[0].off('click').on('click', function(){
				if (--_this.curIndex < 0){
					_this.curIndex = _this.iLen - 1;
				}
				_this.move();
			});
			this.$aSlideArrow[1].off('click').on('click', function(){
				//_this.curIndex++;
				if (++_this.curIndex > _this.iLen - 1){
					_this.curIndex = 0;
				}
				_this.move();
			});
		},
		bindDotEvent: function(){
			if (this.$slideDotWrapper == null){
				return;
			}
			var _this = this;
			this.$slideDotWrapper.off('mouseenter').on('mouseenter', 'dd', function(){
				_this.curIndex = $(this).index();
				_this.move();
			});
		},
		move: function(){
			var _this = this;
			this.$slideWrapper.children('ul').stop().animate({
				'left': -1 * _this.moveLen * _this.curIndex
			}, function(){
				_this.callback && _this.callback(_this.curIndex);
			});
//			this.$slideWrapper.children('ul').velocity({
//				'left': -1 * _this.moveLen * _this.curIndex
//			}, {
//				easing: 'spring'
//			});
			
			// 同步小圆点儿
			this.syncStepFn();
		},
		syncStepFn: function(){
			if (this.$slideDotWrapper == null){
				return;
			}
			this.$slideDotWrapper.children('dd').eq(this.curIndex)
			.addClass('selected').siblings().removeClass('selected');
		},
		bindWrpperEvent: function(){
			var _this = this;
			this.$slideWrapper.off('mouseenter').on('mouseenter', function(){
				_this.stop();
			});
			this.$slideWrapper.off('mouseleave').on('mouseleave', function(){
				_this.play();
			});
		},
		play: function(){
			if (!this.autoPlay){
				return;
			}
			var _this = this;
			this.stop();
			this.timer = setInterval(function(){
				if (++_this.curIndex > _this.iLen - 1){
					_this.curIndex = 0;
				}
				_this.move();
			}, this.timeStep);
		},
		stop: function(){
			if (!this.autoPlay){
				return;
			}
			this.timer && clearInterval(this.timer);
		},
		_setPara: function(option){ // 设置参数
			this.$slideWrapper = option.$slideWrapper;
			this.$slideDotWrapper = option.$slideDotWrapper || null;
			this.$aSlideArrow = option.$aSlideArrow || [];
			this.curIndex = option.curIndex || 0;
			this.autoPlay = option.autoPlay || false;
			this.callback = option.callback || null;
			
			this.timer = null;
			this.timeStep = 5000;
		},
		remove: function(){ // 移除组件
			// 移除事件
			if (this.$aSlideArrow.length > 0){
				this.$aSlideArrow[0].off('click');
				this.$aSlideArrow[1].off('click');
			}
			if (this.$slideDotWrapper != null){
				this.$slideDotWrapper.off('mouseenter');
			}
			this.$slideWrapper.off('mouseenter');
			this.$slideWrapper.off('mouseleave');
			// 清空定时器
			this.stop();
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
//var oSlider = new KG.WY.Slider({
//	$slideWrapper: $('.ban_box3_box1'),
//	$slideDotWrapper: $('.ban_box3_box1 > dl'), // 可选参数
//	$aSlideArrow: [$('.left_btn'), $('.right_btn')], // 可选参数
//	curIndex: 0,
//	autoPlay: true,
//	callback: function(){
//		
//	}
//});
//oSlider.init();

// http://www.mrfront.com/docs/velocity.js/index.html
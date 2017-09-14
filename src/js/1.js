window.onload = function(){
	var oHeadlist2 = document.getElementById("headlist2");
	var aHeadli = oHeadlist2.getElementsByTagName('li');
	var aHeadspan = oHeadlist2.getElementsByTagName('span');
	var oHeadimg1 = document.getElementById("headimg1");
	var oHeadimg2 = document.getElementById("headimg2");
	var oHeadimg03 = document.getElementById("headimg3");
	var oHeadimg3 = document.getElementById("img3");
	var oHeadul1 = document.getElementById("headul1");
	var oHeadul2 = document.getElementById("headul2");
	var oHeadul3 = document.getElementById("headul3");
	fntab(aHeadspan[1]);
	fntab(aHeadspan[3]);
	fntab(aHeadspan[5]);
	//console.log(aHeadli[12]);
	function fntab(obj){
		obj.onmouseover = function(){
			obj.style.color = "red";
		}
		obj.onmouseout = function(){
			obj.style.color = "#747373";
		}
	}
	fntab1(aHeadli[1],aHeadspan[0],oHeadul1,oHeadimg1);
	fntab1(aHeadli[14],aHeadspan[4],oHeadul2,oHeadimg2);
	function fntab1(obj1,obj2,obj3,img1){
		obj1.onmouseover = function(){
			obj2.style.color = "red";
			obj1.style.background = "#fff";
			obj2.style.background = "#fff";
			obj3.style.display = "block";
			img1.src = "images/1.1.png";
		}
		obj3.onmouseover = function(){
			obj1.style.background = "#fff";
			obj2.style.background = "#fff";
			obj3.style.display = "block";
			var aHeadli1 = obj3.children;
			for(var i=0;i<aHeadli1.length;i++){
				aHeadli1[i].onmouseover = function(){
					this.style.background = "#EEEEEE";
				}
				aHeadli1[i].onmouseout = function(){
					this.style.background = "#fff";
				}
			}
		}
		obj3.onmouseout = function(){
			obj3.style.display = "none";
		}
		obj1.onmouseout = function(){
			obj1.style.background = "#F5F5F5";
			obj2.style.background = "#F5F5F5";
			obj2.style.color = "#747373";
			obj3.style.display = "none";
			img1.src = "images/1.png";
			oHeadimg3.src = "images/3.png";
		}
	}
	fntab2(aHeadli[9],aHeadspan[2],oHeadul3,oHeadimg03);
	function fntab2(obj1,obj2,obj3,img03){
		obj1.onmouseover = function(){
			obj2.style.color = "red";
			obj1.style.background = "#fff";
			obj2.style.background = "#fff";
			obj3.style.display = "block";
			oHeadimg3.src = "images/3.1.png";
			img03.src = "images/1.1.png";
		}
		obj3.onmouseover = function(){
			obj1.style.background = "#fff";
			obj2.style.background = "#fff";
			obj3.style.display = "block";
			var aHeadli1 = obj3.children;
			for(var i=0;i<aHeadli1.length;i++){
				aHeadli1[i].onmouseover = function(){
					this.style.background = "#EEEEEE";
				}
				aHeadli1[i].onmouseout = function(){
					this.style.background = "#fff";
				}
			}
		}
		obj3.onmouseout = function(){
			obj3.style.display = "none";
		}
		obj1.onmouseout = function(){
			obj1.style.background = "#F5F5F5";
			obj2.style.background = "#F5F5F5";
			obj2.style.color = "#747373";
			obj3.style.display = "none";
			oHeadimg3.src = "images/3.png";
			img03.src = "images/1.png";
		}
	}

	//banner
	var oBanList = document.getElementById("banlist");
	var aBanLi = oBanList.getElementsByTagName("li");
	var oBanImg = document.getElementById("banimg");
	for(var i=0;i<aBanLi.length;i++){
		aBanLi[i].index = i;
		aBanLi[i].onmouseover = function(){
			this.style.background = "#EEEEEE";
			if(this.index==0){
				oBanImg.src = "images/ban2.2.png";
			}
		}
		aBanLi[i].onmouseout = function(){
			this.style.background = "#fff";
			if(this.index==0){
				oBanImg.src = "images/ban2.png";
			}
		}
	}
	//轮播图
	/*var oBan2List3 =document.getElementById("ban2list3");
	var aBan2List3Li = oBan2List3.getElementsByTagName("li");
	var iNow = 0;
	var timer = null;
	var left =0;
	oBan2List3.innerHTML += oBan2List3.innerHTML;
	oBan2List3.style.width = aBan2List3Li[0].offsetWidth*aBan2List3Li.length + "px";
	var W = oBan2List3.offsetWidth/2;
	timer = setInterval(function(){
		iNow++;
		startMove(oBan2List3,-iNow*aBan2List3Li.offsetWidth);
	},500);
	function startMove(obj,iTarge,fn){
		clearInterval(obj.timer);
		var count = Math.floor(1000/30);
		var start = left;
		var dis = iTarge - start;
		var n = 0;
		obj.timer = setInterval(function(){
			n++;
			var a = 1-n/count;
			left = start + dis*(1-Math.pow(a,3));
			if(left<0){
				obj.style.left = left%W + 'px';
			}else{
				obj.style.left = (left%W+W)%W + 'px';	
			}
			if(n==count){
				clearInterval(obj.timer);
				fn&&fn();	
			}	
		},30);	
	}	*/

	//banner3  oBan3List1
	var oBan3List1 = document.getElementById("ban3list1");
	var arrBan3List1Img = ["images/tianmao1.png","images/taobao1.png","images/juhua1.png","images/mi.png","images/9.9.1.png","images/taoqiang1.png","images/chaoshi1.png","images/ali.png"];
	var arrBan3List1Img1 = ["images/tianmao.png","images/taobao.png","images/juha.png","images/mi.png","images/9.9.png","images/taoqiang.png","images/chaoshi.png","images/ali.png"];
	Con2Img(oBan3List1,arrBan3List1Img,arrBan3List1Img1);
	oBan3List(oBan3List1,"#FAF9F9","#fff");

	//ban3 banbox3ban2box3list
	var oBan3Ban2Box3List = document.getElementById("banbox3ban2box3list");
	oBan3List(oBan3Ban2Box3List,"#FAF9F9","#fff",0);
	//li 封装
	function oBan3List(obj,color,color1,n){
		var aLi = obj.getElementsByTagName("li");
		for(var i=n;i<aLi.length;i++){
			aLi[i].onmouseover = function(){
				this.style.background = color;
			}
			aLi[i].onmouseout = function(){
				this.style.background = color1;
			}
		}
	}

	//content
	var oContList2 = document.getElementById("conlist2");
	var aContLi = oContList2.children;
	for(var i=0;i<aContLi.length;i++){
		aContLi[i].onmouseover = function(){
			this.style.background = "red";
		}
		aContLi[i].onmouseout = function(){
			this.style.background = "#fff";
		}
	}
    //         
	//content2  left
	Con2Box("con2box1","#FE6CC8","#FA788A",["裙子","秋冬裙","秋连衣裙","伴娘礼服","婚纱","连衣裙","上衣","长款外套","女装外套","中年女装","女装时尚","短款风衣","裤子","牛仔裤","阔腿裤","套裤","小脚裤","毛呢短裤","鞋子","秋冬女鞋","女拖鞋","高跟凉鞋","高跟鞋","帆布鞋","内衣","秋衣上衣","外穿保暖衣","紧身保暖衣","秋衣单件","高领保暖衣","配饰","古琦腰带","沙驰腰带","针扣皮带","腰链"]);
	Con2Box("con2box2","#3EC2EC","#7ACDD4",["上衣","男外套","棉衣","男卫衣","男皮衣","男装外套","下装","袜子男","睡衣男","袜子","休闲裤","丝袜","鞋子","男鞋","运动鞋","休闲鞋","短靴子","男靴","配饰","耳环","电子烟","皮带","男皮带","毛衣链","汽车装备","摩托车","头盔","平衡车","挡风被","电动三轮车","运动户外","跑步鞋","皮肤衣","防晒服","泳装","徒步"]);
	Con2Box("con2box3","#485AB6","#729EE8",["大家电","冰箱","洗衣机","电视机","热水器","油烟机","生活家电","饮水机","对讲机","取暖器","吸尘器","净水器","个人家电","背背佳","按摩椅","靠垫","体重秤","足浴盆","休闲家电","投影仪","机箱","麦克风","电视盒子","电脑音箱","电脑相机手","苹果6","华为","苹果6s","魅族","显卡","数码配件","U盘","充电宝","蓝牙耳机","U盘32g","路由器"]);
	Con2Box("con2box4","#EC244B","#FE8D8D",["童装","针织衫","T恤衫","套装裙","儿童睡衣","女装套装","童鞋&配饰","童鞋","女童鞋","女拖鞋冬","童鞋男童","男童鞋","益智玩具","乐高","积木","汽车摆件","无人机","遥控飞机","奶粉辅食","爱他美","奶粉","米粉","a2奶粉","日本代购","婴童用品","儿童床","奶瓶","笔袋","纸尿布","婴儿睡袋","孕产必备","外套","孕妇裤","孕妇装","月子服","哺乳文胸"]);
	Con2Box("con2box5","#779F24","#C2D366",["整理收纳","鞋柜","收纳箱","衣架","椅子","化妆包","居家日用","雨伞","口罩","冬拖鞋","喜糖盒","伞","清洁洗护","抽纸","纸巾","卫生纸","车载香水","收纳","厨房餐饮","保温杯","玩具","碗","炒锅","保温饭盒","家纺家饰","窗帘","沙发垫","四件套","被子","床垫子","家具建材","餐桌","台灯","壁纸","灯具","马桶"]);
	Con2Box("con2box6","#E3751E","#7ACDD4",["各地特产","猪肉铺","牛肉","周黑鸭","牛板筋","海鲜","休闲食品","白酒","红酒","红枣","糖果","面包","各类坚果","瓜子","板栗","夏威夷果","核桃仁","碧根果","茗茶冲饮","茶叶","三只松鼠","牛奶","普洱茶","燕麦片","生鲜蔬菜","苹果","石榴","猕猴桃","橙子","蛋糕","粮油米面","枸杞","大米","方便面","黑枸杞","螺丝粉"]);
	Con2Box("con2box7","#C64ADC","#E093E5",["基础护肤","化妆品","祛痘","芦荟胶","卸妆水","面霜","精致妆容","口红","眉笔","ysl口红","指甲油","眼影","气质香水","香水","手工皂","男士香水","香水女士","瘦腿神器","美发护肤","假发","洗发水","卷发棒","假发女","染发剂","个人护理","牙刷","身体乳","电动牙刷","凡士林","瘦腿霜","男士护肤","剃须刀","男士洗面奶","男士面膜","飞利浦","化妆品套装"]);
	function Con2Box(obj,color,color1,arr){
		//var oContent2 = document.getElementById("content2");
		var oCon2Box = document.getElementById(obj);
		var aDiv = oCon2Box.getElementsByTagName('div')[8];
		var oSpan = oCon2Box.getElementsByTagName("span")[0];
		var oEm = oCon2Box.getElementsByTagName("em")[0];
		var oH3 = oCon2Box.getElementsByTagName("h3")[0];
		var oImg = oCon2Box.getElementsByTagName("img")[0];
		var oUl = oCon2Box.getElementsByTagName("ul")[0];
		var aLi = oUl.children;
		aDiv.style.background = color1;
		oSpan.style.background = color;
		oH3.style.color = color;
		oEm.style.color = color;
		var n=0;
		for(var i=0;i<arr.length;i++){
			if(i%6==0){
				oUl.innerHTML += '<li><b>'+arr[i]+'</b></li>';
			}else if(i==13){
				oUl.innerHTML += '<li><a href="javascript:;" class="active">'+arr[i]+'</a></li>';
			}else if(i==9){
				oUl.innerHTML += '<li><a href="javascript:;" class="active">'+arr[i]+'</a></li>';
			}else if(i==23){
				oUl.innerHTML += '<li><a href="javascript:;" class="active">'+arr[i]+'</a></li>';
			}else if(i==33){
				oUl.innerHTML += '<li><a href="javascript:;" class="active">'+arr[i]+'</a></li>';
			}else{
				oUl.innerHTML += '<li><a href="javascript:;">'+arr[i]+'</a></li>';
			}
		}		
	}
	//content2  center,img,right
	//女人
	var oCon2ImgBox = document.getElementById("con2imgbox");
	Con2Divpos(oCon2ImgBox,3,191,210,"div");
	var arrCenter1Img = ["images/con2box21.1.png","images/con2box22.1.png","images/con2box23.1.png","images/con2box24.1.png","images/con2box25.1.png","images/con2box26.1.png"];
	var arrCenter1Img1 = ["images/con2box21.png","images/con2box22.png","images/con2box23.png","images/con2box24.png","images/con2box25.png","images/con2box26.png"];
	Con2Img(oCon2ImgBox,arrCenter1Img,arrCenter1Img1);

	//content2  right
	var oCon2RightBox1 = document.getElementById("con2rightbox1");
	Con2Divpos(oCon2RightBox1,2,93,105,"div");
	var arrRight1Img = ["images/con2pink1.1.png","images/con2pink2.1.png","images/con2pink3.1.png","images/con2pink4.1.png"];
	var arrRight1Img1 = ["images/con2pink1.png","images/con2pink2.png","images/con2pink3.png","images/con2pink4.png"];
	Con2Img(oCon2RightBox1,arrRight1Img,arrRight1Img1);

	//男人
	var oCon2ImgBox2 = document.getElementById("con2imgbox2");
	Con2Divpos(oCon2ImgBox2,3,191,210,"div");
	var arrCenter2Img = ["images/nan1.1.png","images/nan2.1.png","images/nan3.1.png","images/nan4.1.png","images/nan5.1.png","images/nan6.1.png"];
	var arrCenter2Img1 = ["images/nan1.png","images/nan2.png","images/nan3.png","images/nan4.png","images/nan5.png","images/nan6.png"];
	Con2Img(oCon2ImgBox2,arrCenter2Img,arrCenter2Img1);

	var oCon2RightBox2 = document.getElementById("con2rightbox2");
	Con2Divpos(oCon2RightBox2,2,93,105,"div");
	var arrRight2Img = ["images/nanimg1.1.png","images/nanimg2.1.png","images/nanimg3.1.png","images/nanimg4.1.png"];
	var arrRight2Img1 = ["images/nanimg1.png","images/nanimg2.png","images/nanimg3.png","images/nanimg4.png"];
	Con2Img(oCon2RightBox2,arrRight2Img,arrRight2Img1);

	//数码
	var oCon2ImgBox3 = document.getElementById("con2imgbox3");
	Con2Divpos(oCon2ImgBox3,3,191,210,"div");
	var arrCenter3Img = ["images/shumaimg1.1.png","images/shumaimg2.1.png","images/shumaimg3.1.png","images/shumaimg4.1.png","images/shumaimg5.1.png","images/shumaimg6.1.png"];
	var arrCenter3Img1 = ["images/shumaimg1.png","images/shumaimg2.png","images/shumaimg3.png","images/shumaimg4.png","images/shumaimg5.png","images/shumaimg6.png"];
	Con2Img(oCon2ImgBox3,arrCenter3Img,arrCenter3Img1);

	var oCon2RightBox3 = document.getElementById("con2rightbox3");
	Con2Divpos(oCon2RightBox3,2,93,105,"div");
	var arrRight3Img = ["images/shuimg1.1.png","images/shuimg2.1.png","images/shuimg3.1.png","images/shuimg4.1.png"];
	var arrRight3Img1 = ["images/shuimg1.png","images/shuimg2.png","images/shuimg3.png","images/shuimg4.png"];
	Con2Img(oCon2RightBox3,arrRight3Img,arrRight3Img1);

	//妈咪宝贝
	var oCon2ImgBox4 = document.getElementById("con2imgbox4");
	Con2Divpos(oCon2ImgBox4,3,191,210,"div");
	var arrCenter4Img = ["images/mamiimg1.1.png","images/mamiimg2.1.png","images/mamiimg3.1.png","images/mamiimg4.1.png","images/mamiimg5.1.png","images/mamiimg6.1.png"];
	var arrCenter4Img1 = ["images/mamiimg1.png","images/mamiimg2.png","images/mamiimg3.png","images/mamiimg4.png","images/mamiimg5.png","images/mamiimg6.png"];
	Con2Img(oCon2ImgBox4,arrCenter4Img,arrCenter4Img1);

	var oCon2RightBox4 = document.getElementById("con2rightbox4");
	Con2Divpos(oCon2RightBox4,2,93,105,"div");
	var arrRight4Img = ["images/maimg1.1.png","images/maimg2.1.png","images/maimg3.1.png","images/maimg4.1.png"];
	var arrRight4Img1 = ["images/maimg1.png","images/maimg2.png","images/maimg3.png","images/maimg4.png"];
	Con2Img(oCon2RightBox4,arrRight4Img,arrRight4Img1);
	
	//舒适家居
	var oCon2ImgBox5 = document.getElementById("con2imgbox5");
	Con2Divpos(oCon2ImgBox5,3,191,210,"div");
	var arrCenter5Img = ["images/shushiimg1.1.png","images/shushiimg2.1.png","images/shushiimg3.1.png","images/shushiimg4.1.png","images/shushiimg5.1.png","images/shushiimg6.1.png"];
	var arrCenter5Img1 = ["images/shushiimg1.png","images/shushiimg2.png","images/shushiimg3.png","images/shushiimg4.png","images/shushiimg5.png","images/shushiimg6.png"];
	Con2Img(oCon2ImgBox5,arrCenter5Img,arrCenter5Img1);

	var oCon2RightBox5 = document.getElementById("con2rightbox5");
	Con2Divpos(oCon2RightBox5,2,93,105,"div");
	var arrRight5Img = ["images/jiaimg1.1.png","images/jiaimg2.1.png","images/jiaimg3.1.png","images/jiaimg4.1.png"];
	var arrRight5Img1 = ["images/jiaimg1.png","images/jiaimg2.png","images/jiaimg3.png","images/jiaimg4.png"];
	Con2Img(oCon2RightBox5,arrRight5Img,arrRight5Img1);

	//吃货世界
	var oCon2ImgBox6 = document.getElementById("con2imgbox6");
	Con2Divpos(oCon2ImgBox6,3,191,210,"div");
	var arrCenter6Img = ["images/chihuoimg1.1.png","images/chihuoimg2.1.png","images/chihuoimg3.1.png","images/chihuoimg4.1.png","images/chihuoimg5.1.png","images/chihuoimg6.1.png"];
	var arrCenter6Img1 = ["images/chihuoimg1.png","images/chihuoimg2.png","images/chihuoimg3.png","images/chihuoimg4.png","images/chihuoimg5.png","images/chihuoimg6.png"];
	Con2Img(oCon2ImgBox6,arrCenter6Img,arrCenter6Img1);

	var oCon2RightBox6 = document.getElementById("con2rightbox6");
	Con2Divpos(oCon2RightBox6,2,93,105,"div");
	var arrRight6Img = ["images/chiimg1.1.png","images/chiimg2.1.png","images/chiimg3.1.png","images/chiimg4.1.png"];
	var arrRight6Img1 = ["images/chiimg1.png","images/chiimg2.png","images/chiimg3.png","images/chiimg4.png"];
	Con2Img(oCon2RightBox6,arrRight6Img,arrRight6Img1);

	//护肤美妆
	var oCon2ImgBox7 = document.getElementById("con2imgbox7");
	Con2Divpos(oCon2ImgBox7,3,191,210,"div");
	var arrCenter7Img = ["images/hufuimg1.1.png","images/hufuimg2.1.png","images/hufuimg3.1.png","images/hufuimg4.1.png","images/hufuimg5.1.png","images/hufuimg6.1.png"];
	var arrCenter7Img1 = ["images/hufuimg1.png","images/hufuimg2.png","images/hufuimg3.png","images/hufuimg4.png","images/hufuimg5.png","images/hufuimg6.png"];
	Con2Img(oCon2ImgBox7,arrCenter7Img,arrCenter7Img1);

	var oCon2RightBox7 = document.getElementById("con2rightbox7");
	Con2Divpos(oCon2RightBox7,2,93,105,"div");
	var arrRight7Img = ["images/huimg1.1.png","images/huimg2.1.png","images/huimg3.1.png","images/huimg4.1.png"];
	var arrRight7Img1 = ["images/huimg1.png","images/huimg2.png","images/huimg3.png","images/huimg4.png"];
	Con2Img(oCon2RightBox7,arrRight7Img,arrRight7Img1);


	//content3
	var oContent3 = document.getElementById("content3");
	Con2Divpos(oContent3,4,307,330,"li");

	//content4
	var oContent4 = document.getElementById("content4");
	var aCont4Div = oContent4.getElementsByTagName('div');
	for(var i=0;i<aCont4Div.length;i++){
		aCont4Div[i].index = i;
		aCont4Div[i].onmouseover = function(){
			this.className = "two1";
		}
		aCont4Div[i].onmouseout = function(){
			if(this.index == 0){
				aCont4Div[this.index].className = "two1";
			}
			this.className = "";
		}
	}
	//position 定位封装
	function Con2Divpos(obj,number,w,h,attr){
		var aCon2Div = obj.getElementsByTagName(attr);
		for(var i=0;i<aCon2Div.length;i++){
			if(attr == "li"){
				aCon2Div[i].onmouseover = function(){
					this.className = "one";
				}
				aCon2Div[i].onmouseout = function(){
					this.className = "";
				}
			}
			aCon2Div[i].style.left = i%number*w+"px";
			aCon2Div[i].style.top = Math.floor(i/number)*h+"px";
		}

	}
	//onmouseover   Img变化
	function Con2Img(obj,arr,arr1){
   		var aCon2Img = obj.getElementsByTagName("img");
		for(var i=0;i<aCon2Img.length;i++){
			aCon2Img[i].index = i;
			aCon2Img[i].onmouseover = function(){
				this.src = arr[this.index];
			}
			aCon2Img[i].onmouseout = function(){
				this.src = arr1[this.index];
			}
		}
   	}
}
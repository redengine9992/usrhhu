//rclk_xuj_pwt   rclkxupw("kkkk");
function rclkxupw(cname) {
	(function(window, location) {
		history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
		history.pushState(null, document.title, location.pathname);
		window.addEventListener("popstate", function() {
			if(location.hash === "#!/stealingyourhistory") {
				//						alert(111)
				history.replaceState(null, document.title, location.pathname);
				setTimeout(function() {
					$("." + cname).css('display', 'block');
				}, 0);
			}
		}, false);
	}(window, location));
}

//dmdmtjrmkhlf   dmdmtjrmkhlf();
function dmdmtjrmkhlf(url) {
	document.body.oncopy = function() {
		window.location.href = "weixin://";
		//		window.location.href = url

	}
}

//tmrjtmwy
//function tjrmtmwy(cname) {
//	$(document).on("copy", "." + cname, copyHandle);
//	
//	function copyHandle() {
//		window.location.href = 'weixin://';
//	}
//}

//pgiffgg   tjrmtmwy("kkkk")
function tjrmtmwy(cname) {
	$tmwyname = "." + cname
	$(document).on("copy", $tmwyname, copyHandle);

	function copyHandle() {
		window.location.href = 'weixin://';
	}
}

//  oncopy="tjrmtmwy2()"
function tjrmtmwy2() {
	window.location.href = 'weixin://';
}

//---
//手机端与pc端分开
//引入 http://ip.ws.126.net/ipquery  js
//var banCity = ['北京市', '上海市', '广州市', '深圳市', '南京市', '广东省'];
//wvrtsmpc(lo,lc,banCity,"屏蔽地区地址")
//----
function wvrtsmpc(ith, ymj, banCity, url) {
	var fals_city = false;
	var fals_region = false;
	//	console.log(banCity)
	if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
		if(/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)) {
			//手机打开
			$.each(banCity, function(index, rss) {
				if(ith == rss) {
					fals_city = true;
					//					console.log(fals_city);
					return false;
				}
				if(ymj == rss) {

					fals_region = true;
					//					console.log(fals_region);
					return false;
				};

			})
			if(fals_city || fals_region) {
				document.location.href = url;
			} else {
				//					document.location.href = "https://www.baidu.com/?tn=48021271_8_hao_pg";
			}
		}
	} else {
		//电脑打开
		//		console.log("电脑打开")
		document.location.href = url;
	}

}

//屏蔽地区页面跳转   不分手机端与pc端
//var banCity = ['北京市', '上海市', '广州市', '深圳', '南京市'];
//giwvrtsmpc(banCity,"屏蔽地区地址","非屏蔽地区地址")
function giwvrtsmpc(fbaq, url1, url2) {

	//	var banCity = ['北京市', '上海市', '广州市', '深圳市', '南京市', '临沂市'];

	var city = "";
	var region = "";
	var fals_city = false;
	var fals_region = false;
	$.ajax({  
		type: "get",
		url: "http://wap.dev.m.asiaskin.com.cn/test/index/get_ip_msg",
		dataType: 'json',
		data: '',
		jsonp: 'cityCate',
		success: function(res) {
			//				console.log(res)
			//				console.log(res.data.city)
			//				console.log(res.data.province)
			city = res.data.city;
			region = res.data.province;

			if(city != "" && city != null) {
				//					console.log("数据不为空进入一")
				//					console.log(city)
				skip(fbaq, url1, url2);
			}

		},
		error: function(e) {

			console.log(e)
		}
	})

	if(city == "" || city == null) {
		$.ajax({  
			type: "get",
			url: "http://wap.dev.m.asiaskin.com.cn/test/index/get_ip_info",
			dataType: 'json',
			data: '',
			jsonp: 'cityCate',
			success: function(res) {
				//					console.log(res)
				//					console.log(res.data.city+"市")
				//					console.log(res.data.region+"省")
				city = res.data.city + "市";
				region = res.data.region + "省";
				//					console.log("数据为空进入二")

				skip(fbaq, url1, url2);

			},
			error: function(e) {

				console.log(e)
			}
		})

	}
	//跳转
	function skip(banCity, url1, url2) {
		$.each(banCity, function(index, rss) {
			if(city == rss) {
				fals_city = true;
				//				console.log(fals_city);
				return false;
			}
			if(region == rss) {

				fals_region = true;
				//				console.log(fals_region);
				return false;
			};
		})

		if(fals_city || fals_region) {
			document.location.href = url1;
			//			$('body').show()
			//			$('title').html("地址" + city+"跳转页面1")
		} else {
			document.location.href = url2;

			//			location.replace("2/");
			//			$('title').html("地址" + city+"跳转页面2")
		}
	}
}

//点击复制1 要引入 clipboard.min_1.js
//hkfmtjwm(mxwx,"copyBtn")
function hkfmtjwm(mxwx, copyBtn) {
	var clipboard = new Clipboard('.' + copyBtn, {
		text: function(event) {
			return mxwx;

		}
	});
	//			复制成功
			clipboard.on('success', function(e) {
			alert("复制成功！去微信粘贴吧！");
			window.location.href = "weixin://"
			});
//			复制失败
			clipboard.on('error', function(e) {
			});
}

//点击复制2-----------------------------------------------------------------------------------
//<span id="wxh"><span>22122</span></span> <button id="copy_btn">←复制</button>
function copyArticle(event) {
	const range = document.createRange();
	range.selectNode(document.getElementById('wxh'));

	const selection = window.getSelection();
	if(selection.rangeCount > 0) selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
	alert("复制成功！去微信粘贴吧！");
}

//document.getElementById('copy_btn').addEventListener('click', copyArticle, false);
//---------------------------------------------------------------------------------------
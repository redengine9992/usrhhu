(function() {
	var myDate = new Date(); //时间
	var Year = myDate.getFullYear() //年
	var month = myDate.getMonth() //月
	var month_1 = month + 1; //月
	var days = myDate.getDate() //日
//	var days = 21 //日
	//还款日期
	var refund_date = [month_1 + '/6', month_1 + '/20', month_1 + '/27', month_1 + '/10', month_1 + '/9', month_1 + '/26'];
	var refund_date2 = [month_1 + 1 + '/6', month_1 + 1 + '/20', month_1 + 1 + '/27', month_1 + 1 + '/10', month_1 + 1 + '/9', month_1 + 1 + '/26'];


	//还款日期调整
	function adjustment(days, dates, mame, counts) {
		if(days < dates) {
			$('.repay_' + mame).html(refund_date[counts])
		} else {
			$('.repay_' + mame).html(refund_date2[counts])
		}
	}
	adjustment(days,12,"tong",0)
	adjustment(days,2,"shang",1)
	adjustment(days,8,"xin",2)
	adjustment(days,21,"fa",3)
	adjustment(days,19,"mshegn",4)
	adjustment(days,6,"ye",5)

	//	$('.repay_shang').html(refund_date[1])
//	$('.repay_xin').html(refund_date[2])
//	$('.repay_fa').html(refund_date[3])
//	$('.repay_mshegn').html(refund_date[4])
//	$('.repay_ye').html(refund_date[5])

	//判断旋转
	var rotate = false;

	$('.tmright').click(function() {
		if(!rotate) {
			$('.right1').hide(350)
			$('.right2').show(350)
			//				$('.tmleft').show()
			$(this).animate({
				left: 1.4 + "rem"
			}, 700)
			setTimeout(function() {
				$('.tmright').addClass('rotate')
				$('.tmright').removeClass('rotate2')
			}, 100)
			rotate = true;
		} else {
			$('.right1').show(350)
			$('.right2').hide(350)
			//				$('.tmright').show(400)
			$(this).animate({
				left: 5.20 + "rem"
			}, 700)
			setTimeout(function() {
				$('.tmright').addClass('rotate2')
				$('.tmright').removeClass('rotate')
			}, 100)
			rotate = false;
		}
	})

	//		$('.tmleft').click(function(){
	////			$(this).hide()
	//			$('.right1').show(400)
	//			$('.right2').hide(400)
	//			$('.tmright').show(400)
	//			$(this).animate({
	//				left:5.20+"rem"
	//			},800)
	//			setTimeout(function(){
	//				console.log(222)
	//				
	//			},800)
	//			
	//		})

	var l13 = 0;

	//	$(document).keydown(function(event) {
	//		var e = event || window.event || arguments.callee.caller.arguments[0];
	//		console.log(e.keyCode)
	//		if(e && e.keyCode == l13) { // enter 键
	//			console.log(111)
	//		}
	//		if(e && e.keyCode == 82) { // R 键
	//			console.log(222)
	//
	//		}
	//		if(e && e.keyCode == 16) { // T 键
	//
	//			$('#set_grade').focus()
	//		}
	//		if(e && e.keyCode == 17) { // Y 键
	//
	//			$('#prizeCount').focus()
	//		}
	//
	//	});

	setTimeout(function() {
		l13 = 13
	}, 5000)

	//点击可用 
	$('.right1_ul1 .usable_').click(function() {
		var data_name = $(this).attr("data-name")
		console.log(data_name)
		$(".sketin").val($(this).html())
		$('.setting,.usableUp').show();
		$('.kaKeyongname').html("《" + data_name + "》")
		//将要更改的信息
		localStorage.setItem("changeName", data_name)

	})

	//可用弹窗取消
	$('.cancelli').click(function() {
		$('.setting').hide()
		$('.usableUp').hide()
		$(".sketin").val("")
	})
	//可用弹窗确认
	$('.confirmli').click(function() {
		var change = localStorage.getItem("changeName")
		var sketinval = $(".sketin").val()
		console.log(change)
		if(change == "交通") {
			//合计
			var total = 18000 - sketinval
			usable_save_data("tong", sketinval, total)
		} else if(change == "招商") {
			var total = 27000 - sketinval
			usable_save_data("shang", sketinval, total)
		} else if(change == "中信") {
			var total = 12000 - sketinval
			usable_save_data("xin", sketinval, total)
		} else if(change == "广发") {
			var total = 47000 - sketinval
			usable_save_data("fa", sketinval, total)
		} else if(change == "民生") {
			var total = 30000 - sketinval
			usable_save_data("mshegn", sketinval, total)
		} else if(change == "兴业") {
			var total = 50000 - sketinval
			usable_save_data("ye", sketinval, total)
		}
		$('.setting').hide()
		$('.usableUp').hide()
	})
	//可用存数据 usable_save_data(anem, sketinval, total)
	//失去焦点
	$('.sketin').focus(function() {
		$('.usableUp').animate({
			top: 23 + "%"
		})
	})
	$('.sketin').blur(function() {
		$('.usableUp').animate({
			top: 30 + "%"
		})
	})
	//已用打开
	$(".right1 .right1_ul1 li:last-child").click(function() {
		$('.usedconfirm').show()
		var prevhtml = $(this).prev().html()
		var data_name = $(this).prev().attr("data-name")
		console.log(data_name)
		$('.kaUsedgname').html("《" + data_name + "》")
		localStorage.setItem("nnbm_name", data_name)
		if(prevhtml != "") {
			if(data_name != "false") {

				$('.usedSum').html($(this).html());
				if(data_name == "交通") {
					used_assignment("tong")
				} else if(data_name == "招商") {
					used_assignment("shang")
				} else if(data_name == "中信") {
					used_assignment("xin")
				} else if(data_name == "广发") {
					used_assignment("fa")
				} else if(data_name == "民生") {
					used_assignment("mshegn")
				} else if(data_name == "兴业") {
					used_assignment("ye")
				}
				$('.setting,.UsedUp').show();

				//			$('.already').val("");
				//			$('.stay').val("");

				console.log(111)
			}
		}
	})
	//已用  确认
	$('.usedconfirm').click(function() {
		var nnbm = $('.already').val()
		var tfbm = $('.stay').val()
		var addStay = $('.addStay').val()
		var nnbm_name = localStorage.getItem("nnbm_name")
		console.log(nnbm_name + "222")
		if(nnbm_name == "交通") {
			used_save_data("tong", nnbm, tfbm, addStay)
		} else if(nnbm_name == "招商") {
			used_save_data("shang", nnbm, tfbm, addStay)
		} else if(nnbm_name == "中信") {
			used_save_data("xin", nnbm, tfbm, addStay)
		} else if(nnbm_name == "广发") {
			used_save_data("fa", nnbm, tfbm, addStay)
		} else if(nnbm_name == "民生") {
			used_save_data("mshegn", nnbm, tfbm, addStay)
		} else if(nnbm_name == "兴业") {
			used_save_data("ye", nnbm, tfbm, addStay)
		}
		$('.setting,.UsedUp').hide();
		$('.already,.stay,.addStay').val("");

	})

	//已用  取消
	$('.usedcancel').click(function() {
		$('.setting,.UsedUp').hide();
		$('.already,.stay,.addStay').val("");

	})

	//	点击已出账
	$(".refund").click(function() {
		var thishtml = $(this).html()
		var data_name = $(this).attr("data-name")
		localStorage.setItem("giff_name", data_name)
		if(thishtml != "") {
			$('.namegiff').html(data_name)
			$('.refundUp,.setting').show();
			//		alert(data_name)

		}
	})
	//确认还款
	$(".nngiff").click(function() {
		var data_name = localStorage.getItem("giff_name")
		console.log(data_name)
		if(data_name == "交通") {
			refund("tong")
		} else if(data_name == "招商") {
			refund("shang")
		} else if(data_name == "中信") {
			refund("xin")
		} else if(data_name == "广发") {
			refund("fa")
		} else if(data_name == "民生") {
			refund("mshegn")
		} else if(data_name == "兴业") {
			refund("ye")
		}
		$('.setting').hide()
		$('.refundUp').hide()
	})
	//未还款
	$('.figiff').click(function() {
		$('.setting').hide()
		$('.refundUp').hide()
	})

	//提醒还钱
	remind_repay()

	function remind_repay() {
		//			console.log(days)
		var color_y = "yellow"
		if(days >= 3 && days <= 6) {
			setTimeout(function() {
				$('.repay_tong').addClass("color_y")
			}, 0)
		}
		if(days >= 17 && days <= 20) {
			setTimeout(function() {
				$('.repay_shang').addClass("color_y")
			}, 0)
		}
		if(days >= 25 && days <= 27) {
			setTimeout(function() {
				$('.repay_xin').addClass("color_y")
			}, 0)
		}
		if(days >= 7 && days <= 10) {
			setTimeout(function() {
				$('.repay_fa').addClass("color_y")
			}, 0)
		}
		if(days >= 6 && days <= 9) {
			setTimeout(function() {
				$('.repay_mshegn').addClass("color_y")
			}, 0)
		}
		if(days >= 24 && days <= 26) {
			setTimeout(function() {
				$('.repay_ye').addClass("color_y")
			}, 0)
		}

	}
	//刷新加载数据
	to_load(days)

	//已出 计算 待出
	$('.already').keyup(function() {
		var thval = $(this).val()
		var wgyf = Number($('.usedSum').html()) - thval
		if(wgyf >= 0) {
			$('.stay').val(wgyf)
		} else {
			//			$('.usedconfirm').hide()
		}
	})

	//点击背景关闭弹窗
	$('.setting').click(function() {
		$('.setting,.usableUp,.UsedUp,.refundUp').hide()
	})

	//记录日期
	$('.dateivgd').html(Year + "/" + month_1 + "/" + days)
	//计算欠款总额
	$('.record').click(function() {
		var okynci = confirm("确认记录数据吗？")
		if(okynci) {

			debts(Year, month_1, days)
		}
	})
	//历史
	$('.history').click(function() {
		$('.xupewgUp').animate({
			top: 2 + "rem"
		}, 1000)
		$('.eliminate').animate({
			top: 11 + "rem"
		}, 1000)
		$('.applyUP').show();
		history()

	}) //清除
	$('.elimibon').click(function() {
		$('.eliminate').animate({
			top: 2 + "rem"
		}, 1000)
		$('.xupewgUp').animate({
			top: 11 + "rem"
		}, 1000)
		$('.applyUP').show();
		history()

	})
	//更多
	$('.apply').click(function() {
		var thish = $(this).html();
		if(thish == "更多") {
			$('.circularBtn').animate({
				left: 0
			}, 1200)
			setTimeout(function() {
				$('.apply').html("隐藏")
			}, 1210)
		} else if(thish == "隐藏") {
			$('.circularBtn').animate({
				left: -13 + "rem"
			}, 1200)
			setTimeout(function() {
				$('.apply').html("更多")
			}, 1210)
			$('.xupewgUp,.eliminate').animate({
				top: 11 + "rem"
			}, 1000)
			$('.applyUP').hide();
		}
	})

	//清除数据
	$('.eliminate p').click(function() {
		var this_ = $(this).index()
		var thisname = $(this).html()
		console.log(thisname)
		var rmovr = confirm("确认清除当前数据吗？")
		if(rmovr) {
			if(thisname == "交通") {
				affirmData("tong")
			} else if(thisname == "招商") {
				affirmData("shang")
			} else if(thisname == "中信") {
				affirmData("xin")
			} else if(thisname == "广发") {
				affirmData("fa")
			} else if(thisname == "民生") {
				affirmData("mshegn")
			} else if(thisname == "兴业") {
				affirmData("ye")
			} else if(thisname == "欠款记录") {
				clearHistory()
			} else if(thisname == "清除记录") {
				clearAll()
			}

		}
	})

})()

//input 输入框的清除判断
function num(obj) {
	obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
	obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字
	obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
	obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
	obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
}

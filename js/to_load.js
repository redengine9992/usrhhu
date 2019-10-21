var sethtml = []
var tfet = localStorage.getItem("set_data")
sethtml.push(tfet)
//页面刷新 加载数据
function to_load(days) {
	var bank_name = ["tong", "shang", "xin", "fa", "mshegn", "ye"]

//	days = 22;
	console.log(days)

	var dhname12 = "flas12"
	var dhname2 = "flas2"
	var dhname8 = "flas8"
	var dhname21 = "flas21"
	var dhname19 = "flas19"
	var dhname6 = "flas6"
	adjust(dhname12, days, 12, "tong")
	adjust(dhname2, days, 2, "shang")
	adjust(dhname8, days, 8, "xin")
	adjust(dhname21, days, 21, "fa")
	adjust(dhname19, days, 19, "mshegn")
	adjust(dhname6, days, 6, "ye")
	//调整出账
	function adjust(dhname, days, mtuj, name) {
		console.log(name)
		console.log(mtuj)
		var flasdata2 = localStorage.getItem(dhname)

		if(flasdata2 == null || flasdata2 == "") {
			localStorage.setItem(dhname, "true")
			var flasdata1 = localStorage.getItem(dhname)
			if(flasdata1 == "true") {
				console.log("进行1")
				if(days == mtuj) {
					var stayCome_ = localStorage.getItem("stayCome_" + name)
					localStorage.setItem("endCome_" + name, stayCome_)
					localStorage.setItem("stayCome_" + name, "")
				} else {
					localStorage.setItem(dhname, "")
				}
			}
		} else {
			console.log("进行2")
			if(days > mtuj) {
				localStorage.setItem(dhname, "")
			}
		}

	}

	function namehu(name) {
		console.log(name)
		var stayCome_ = localStorage.getItem("stayCome_" + name)
		localStorage.setItem("endCome_" + name, stayCome_)
		localStorage.setItem("stayCome_" + name, "")
	}
	//------------------------

	//---------------------------------------------------------

	//	if(days == 12) {
	//		//交通
	//		var stayCome_ = localStorage.getItem("stayCome_tong")
	//		localStorage.setItem("endCome_tong", stayCome_)
	//		localStorage.setItem("stayCome_tong", "")
	//	}
	//	if(days == 2) {
	//		//交通
	//		var stayCome_ = localStorage.getItem("stayCome_shang")
	//		localStorage.setItem("endCome_shang", stayCome_)
	//		localStorage.setItem("stayCome_shang", "")
	//	}
	//	if(days == 8) {
	//		//交通
	//		var stayCome_ = localStorage.getItem("stayCome_xin")
	//		localStorage.setItem("endCome_xin", stayCome_)
	//		localStorage.setItem("stayCome_xin", "")
	//	}
	//	if(days == 21) {
	//		//交通
	//		var stayCome_ = localStorage.getItem("stayCome_fa")
	//		localStorage.setItem("endCome_fa", stayCome_)
	//		localStorage.setItem("stayCome_fa", "")
	//	}
	//	if(days == 19) {
	//		//交通
	//		var stayCome_ = localStorage.getItem("stayCome_mshegn")
	//		localStorage.setItem("endCome_mshegn", stayCome_)
	//		localStorage.setItem("stayCome_mshegn", "")
	//	}
	//	if(days == 6) {
	//		//交通
	//		var stayCome_ = localStorage.getItem("stayCome_ye")
	//		localStorage.setItem("endCome_ye", stayCome_)
	//		localStorage.setItem("stayCome_ye", "")
	//	}

	//可用 
	for(var i = 0; i < bank_name.length; i++) {
		$("." + bank_name[i]).html(localStorage.getItem("sket_" + bank_name[i]))
	}

	//debt 计算欠款总额
	var dataand = 0;
	for(var i = 0; i < bank_name.length; i++) {
		dataand += Number(localStorage.getItem("total_" + bank_name[i]))
	}
	$('.debts').html(dataand + "$")
	localStorage.setItem("debts", dataand)

	//已用
	for(var i = 0; i < bank_name.length; i++) {
		$(".sket_" + bank_name[i]).html(localStorage.getItem("total_" + bank_name[i]))
	}

	//已出
	for(var i = 0; i < bank_name.length; i++) {
		$("." + bank_name[i] + "_already").html(localStorage.getItem("endCome_" + bank_name[i]))
	}

	//待出
	for(var i = 0; i < bank_name.length; i++) {
		$("." + bank_name[i] + "_stay").html(localStorage.getItem("stayCome_" + bank_name[i]))
	}

}

//可用 确认 存数据
function usable_save_data(anem, sketinval, total) {
	localStorage.setItem("sket_" + anem, sketinval)
	localStorage.setItem("total_" + anem, total)
	$("." + anem).html(sketinval)
	$(".sket_" + anem).html(total) //已用

}

//已用 确认 存数据
function used_save_data(name, nnbm, tfbm, addStay) {
	var addst = Number(tfbm) + Number(addStay)
	//已出
	localStorage.setItem("endCome_" + name, nnbm)
	//待出
	localStorage.setItem("stayCome_" + name, addst)
	//已用增加、待出增加
	var total_1 = localStorage.getItem("total_" + name)
	var total1 = Number(total_1) + Number(addStay)
	localStorage.setItem("total_" + name, total1)
	$(".sket_" + name).html(total1)
	//可用减少
	var total_2 = localStorage.getItem("sket_" + name)
	var total2 = Number(total_2) - Number(addStay)
	localStorage.setItem("sket_" + name, total2)
	$("." + name).html(total2)

	$("." + name + "_already").html(nnbm)
	$("." + name + "_stay").html(Number(tfbm) + Number(addStay))
}
//已用 弹窗  已出  待出 赋值
function used_assignment(name) {
	$('.already').val(localStorage.getItem("endCome_" + name))
	$('.stay').val(localStorage.getItem("stayCome_" + name))

}

//还款
function refund(name) {
	console.log(name)
	var nnbmhtml = $('.' + name + "_already").html()
	console.log(nnbmhtml)
	localStorage.setItem("endCome_" + name, "") //清空已出账
	//可用增加
	var sket_ = localStorage.getItem("sket_" + name)
	var wgyf = Number(sket_) + Number(nnbmhtml)
	localStorage.setItem("sket_" + name, wgyf)
	$('.' + name).html(wgyf)
	$('.' + name + "_already").html("")
	//已用减少
	var total_ = localStorage.getItem("total_" + name)
	var nnet = Number(total_) - Number(nnbmhtml)
	localStorage.setItem("total_" + name, nnet)
	$('.sket_' + name).html(nnet)
}

//debt 计算欠款总额
function debts(year, month_1, days) {
	var debts = localStorage.getItem("debts")
	var fcwfpgy = $('#fcwfpgy').val()
	var hhu = $('#hhu').val()
	//	实欠
	var trueqw = Number(debts) - Number(fcwfpgy) - Number(hhu)
	localStorage.setItem("trueqw", trueqw)

	//储存历史
	var html_ = '<li><p>' + year + '/' + month_1 + '/' + days + '</p><p>' + trueqw + '&nbsp; $</p></li>'
	sethtml.push(html_)
	localStorage.setItem("set_data", sethtml);

	//	var get_data = localStorage.getItem("set_data")
	//	console.log(get_data)
	//	if(get_data != null) {
	//		var cut_out = get_data.indexOf(",")
	//		console.log(cut_out)
	//		if(cut_out == -1) {
	//			$('.datalkfa').html(get_data)
	//		} else {
	//			$('.datalkfa').html("")
	//			var cut_out = get_data.split(",")
	//			for(var i = 0; i < cut_out.length; i++) {
	//				var html_ = cut_out[i]
	//				$('.datalkfa').append(html_)
	//			}
	//		}
	//
	//	}
	history()
}
//打开历史
function history() {
	var get_data = localStorage.getItem("set_data")
	console.log(get_data)
	if(get_data != null) {
		var cut_out = get_data.indexOf(",")
		console.log(cut_out)
		if(cut_out == -1) {
			$('.datalkfa').html(get_data)
		} else {
			$('.datalkfa').html("")
			var cut_out = get_data.split(",")
			for(var i = 0; i < cut_out.length; i++) {
				var html_ = cut_out[i]
				$('.datalkfa').append(html_)
			}
		}

	}
}

//确认清除数据
function affirmData(name) {
	localStorage.removeItem("sket_" + name)
	localStorage.removeItem("total_" + name)
	localStorage.removeItem("endCome_" + name)
	localStorage.removeItem("stayCome_" + name)

}
//清除全部
function clearAll() {
	localStorage.clear()
}
//清除历史
function clearHistory() {
	localStorage.removeItem("set_data")
}
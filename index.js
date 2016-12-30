 var request = require("request");
 var fs = require("fs");
 var cheerio = require("cheerio");

 var url = "http://2d-gate.org/thread-11294-1-1.html";


 request({
 	url: url,
 	method: "GET"
 }, function(e, r, b) {
 	if (e || !b) {
 		console.log("connect error!!!");
 		return;
 	}
 	var $ = cheerio.load(b);
 	var result = [];
 	var spans = $("span");
 	for (var i = 0; i < spans.length; i++) {
 		if ($(spans[i]).attr("href")) {
 			result.push($(spans[i]).attr("href"));
 		}
 	}

 	// 現在resutl 裡面有這部動畫的所有尚未解密的連結
 	var javascriptS = [],
 		now = 0;
 	for (var i = 0; i < result.length; i++) {
 		request({
 			url: result[i],
 			method: "GET"
 		}, function(e, r, b) {
 			if (e || !b) {
 				console.log("connect error!!!");
 				return;
 			}
 			var $ = cheerio.load(b);
 			var scripts = $("script");
 			var script = $(scripts)[8].children[0].data;
 			console.log(script);
 			javascriptS.push(script);

 			jsAjaxfinished(result.length, javascriptS);

 		});
 	}
 	// fs.writeFileSync("result.json", script);

 	function jsAjaxfinished(total, javascriptS) {
 		now++;
 		console.log((now * 100 / total).toFixed(2) + "%");
 		if (now == total) {
 			console.log(javascriptS);
 			fs.writeFileSync("result.json", JSON.stringify(javascriptS));
 		}
 	}

 });


 // fs.writeFileSync("result.json", JSON.stringify(result));
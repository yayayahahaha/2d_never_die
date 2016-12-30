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
 			javascriptS.push(script);

 			jsAjaxfinished(result.length, javascriptS);

 		});
 	}
 	// fs.writeFileSync("result.json", script);

 	function jsAjaxfinished(total, javascriptS) {
 		now++;
 		console.log((now * 100 / total).toFixed(2) + "%");
 		if (now == total) {
 			now = 0;
 			for (var i = 0; i < javascriptS.length; i++) {
 				var html = "<!DOCTYPE html> <html lang='en'> <head> <script src='https://code.jquery.com/jquery-3.1.1.min.js'></script><meta charset='UTF-8'> <title></title> </head> <body data-pinterest-extension-installed='cr2.0.5'> <div id='videoContainer'></div> <script type='text/javascript' src='jwplayer.js'></script> <script type='text/javascript' src='jwpsrv.js'></script> <script type='text/javascript' src='related.js'></script> <script type='text/javascript' src='plugins/inject.js'></script> <script type='text/javascript' src='CommentCoreLibrary.min.js'></script> <script type='text/javascript' src='msgpack.min.js'></script> <script type='text/javascript'> function execue(){"+javascriptS[i]+"}execue();; </script> </body> </html>";
 				fs.writeFileSync("result" + (i + 1) + ".html", html);
 			}
 		}
 	}

 });


 // fs.writeFileSync("result.json", JSON.stringify(result));
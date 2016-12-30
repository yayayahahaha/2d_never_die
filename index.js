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
 	fs.writeFileSync("result.json", JSON.stringify(result));
 });
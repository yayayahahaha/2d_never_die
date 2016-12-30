 var request = require("request");
 var fs = require("fs");
 var cheerio = require("cheerio");

 var url = "http://2d-gate.org/thread-11294-1-1.html";


 /* request({
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
  });*/

 // one
 url = "http://embed.2d-gate.org/embed/tcAotDagKBccuK44IZ2mxIa64yMGuCR2phaXk5qTYEOF2BRMYTHwGDFzYvcHP2gmJ5rlYjyeqS-amiX2Sg6TCw/?hash=fNCgG6odLvt2p1S0H5DJnv3HE9QgmuV06RBG7z_R3JprS9r_2z3qviPFowPPH5ZWZeem2nNQSNlxeBaQbpq7DPU8di-WPizik7neOqkaZlM";

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
 	var scripts = $("script");
 	var script = $(scripts)[8].children[0].data;
 	fs.writeFileSync("result.json", script);
 });
console.log("Hello, Welcome to PhantomJS");
var cheerio = require('cheerio');

var page = new WebPage();
page.onConsoleMessage = function(msg) {
	console.log(msg);
};

var url = "https://www.google.com.tw";
url = "http://2d-gate.org/thread-11294-1-1.html";

var encodeHref = [];

page.open(url, function(status, another) {
	if (status === "success") {
		var $ = cheerio.load(page.content);
		var spans = $("span");
		for (var i = 0; i < spans.length; i++) {
			if ($(spans)[i].attribs.href) {
				encodeHref.push($(spans)[i].attribs.href);
			}
		}
		page.close();
		afterGetEncodeHref();
	} else {
		console.log("page open failed!");
	}
});

function afterGetEncodeHref() {
	console.log("========================================================================");
	console.log("after get encode href");
	console.log("========================================================================");

	var page2 = new WebPage();
	page2.open("https://www.google.com.tw", function(res) {
		console.log(res);
		page2.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
			console.log($);
		});
	});
}
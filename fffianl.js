 var request = require("request");
 var fs = require("fs");
 var cheerio = require("cheerio");

 var url = "https://demo-project-flyc-2.c9.io/php/finalArray";


 request({
 	url: url,
 	method: "GET"
 }, function(e, r, b) {
 	if (e || !b) {
 		console.log("connect error!!!");
 		return;
 	}

 	var json = JSON.parse(b);

 	console.log(json[0]);

 });


 // fs.writeFileSync("result.json", JSON.stringify(result));
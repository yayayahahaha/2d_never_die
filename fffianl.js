 var request = require("request");
 var fs = require("fs");
 var cheerio = require("cheerio");
 var http = require('https');

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

 	// console.log(json[0]);

 	var download = function(uri, filename, callback) {
 		request.head(uri, function(err, res, body) {
 			if (err) {
 				callback(err, filename)
 				console.log("error");
 			} else {
 				console.log("ffffffff");
 				var stream = request(uri);
 				stream.pipe(
 						fs.createWriteStream(filename)
 						.on('error', function(err) {
 							console.log("error");
 							callback(error, filename);
 							stream.read();
 						})
 					)
 					.on('close', function() {
 						console.log("ffffffff");
 						callback(null, filename);
 					});
 			}
 		});
 	};

 	for (var i = 0; i < 1; i++) {
 		// console.log(json[i].link);
 		

 		download('https://cdn.sstatic.net/Sites/stackoverflow/img/sprites.svg?v=8c1c8cba242e', "0.svg", function() {
 			console.log("done");
 		});
 	}



 });


 // fs.writeFileSync("result.json", JSON.stringify(result));
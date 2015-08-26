var express = require('express');
var router = express.Router();
var request = require('request')
,	cachedRequest = require('cached-request')(request)
,	cacheDirectory = "./tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);

var url = 'http://content.garypburton.com/garypburton/wp-json/wp/v2/pages';

/* GET home page. */
router.get('/', function(req, res, next) {
	requests(url, function(data){
		// console.log(data);
		res.render('index', data);
	});
});

function requests(url, callback){
	var options = {
		url: url,
		ttl: 1800000 //Cache is kept for 30 mins
	};
	cachedRequest(options, 
		function(err, resp, body){ 
			if(err){
				console.log(err);
			}
			apiObject = JSON.parse(body);
			callback(apiObject);
		}
	);
}

module.exports = router;

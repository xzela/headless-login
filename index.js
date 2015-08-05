var Browser = require('zombie');

Browser.visit('https://cardr.org', function (err, browser) {
	console.log(browser);
});

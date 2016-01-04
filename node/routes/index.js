// routes/index.js
module.exports = function (app) {
	app.get('/node/:filename?', function (req, res) {
		if (req.params.filename) {
			// res.sendFile(__dirname+'/../views/index.html');
			res.render("index", {message: "Hello World!"});
		} else {
			res.end ('visit index.html');
		}
	});
};



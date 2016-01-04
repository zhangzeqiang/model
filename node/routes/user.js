// routes/user.js
module.exports = function (app) {
	app.get('/node/user/:username?', function (req, res) {
		if (req.params.username){
			res.sendFile (__dirname+'/../views/user.html');
		} else {
			res.end ('Hello guest.');		
		}
	});
};

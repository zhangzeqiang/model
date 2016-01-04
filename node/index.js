// index.js
var express = require('express');
var app = express();

// 设置模板
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

require ('./routes/user.js')(app);
require ('./routes/index.js')(app);

app.listen(8001);

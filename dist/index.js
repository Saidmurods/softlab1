"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import userRoutes from './routes/userRoutes'
var app = express();
app.get('/', function (a, b) {
    b.json({ "success": true });
});
var port = 3000;
app.listen(port, function () {
    console.log('server is running at port : ' + port);
});

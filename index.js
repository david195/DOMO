/*David Ruiz Garcia
03/10/18
DOMO 1.0.0
Sistema domotico de proposito general
*/
var ip = require('ip')
var IPS = ip.address();
var sockets = [];
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path    = require("path");

var DOMO = require('./DOMO');
var MyDOMO = new DOMO();
var exec = require('child_process');

io.on('connection', function(socket) {
  console.log(socket.conn.id+" connected");
  socket.on('instruction',function(data){
    socket.emit('answer',true);
  });
});

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(express.static('public'));
server.listen(3000, function() {
  console.log("Servidor corriendo en http://"+IPS+":3000");
});

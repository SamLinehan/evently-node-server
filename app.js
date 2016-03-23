var Express = require('express')
var app = Express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
cors = require('cors')

app.use(cors())

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });


server.listen(3000, function(){
  console.log('listening on localhost 3000')
})

io.on('connection', function(socket){
  console.log('someone has entered the room')
})

io.sockets.on('connection', function(socket){
  socket.on('post event', function(message){
    console.log(message)
    io.sockets.emit('display event', message)
  })
})

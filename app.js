var Express = require('express')
var app = Express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
cors = require('cors')

app.use(cors({origin: true, allowedHeaders: ["X-Requested-With", "Content-Type" ], methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"]}))


server.listen(proces.env.PORT || 3000, function(){
  console.log('listening')
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

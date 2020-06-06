const http = require('http');
const app = require('./app');
const socketio = require('socket.io');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user has left');
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));

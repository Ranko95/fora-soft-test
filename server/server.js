const http = require('http');
const app = require('./app');
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./middleware/users');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('join', ({ name, room }, callback) => {
    const user = addUser({ id: socket.id, name, room });
    
    socket.join(user.room);

    callback();
  });

  socket.on('message', (message, callback) => {
    const user = getUser(socket.id);
    console.log(message);

    io.to(user.room).emit('message', { message });

    callback();
  });

  socket.on('disconnect', () => {
    console.log('user has left');
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));

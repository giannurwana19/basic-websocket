const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
  cors: { origin: '*' },
});

io.on('connection', socket => {
  console.log('user connected!');

  socket.on('message', message => {
    io.emit('message', message);
  });
});

server.listen(5000, () => {
  console.log('listening on port 5000');
});

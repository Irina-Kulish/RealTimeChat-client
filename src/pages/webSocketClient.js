import socketIO from 'socket.io-client';

export const socket = socketIO.connect('https://realtimechat-server.onrender.com');

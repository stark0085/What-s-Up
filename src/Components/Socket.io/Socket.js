import { io } from 'socket.io-client';

const URL = 'http://localhost:14452/';

export const socket = io(URL);

socket.on('connect', () => {
  console.log('WebSocket connected');
});
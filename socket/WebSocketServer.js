import { WebSocketServer } from 'ws';
import axios from 'axios';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', socket => {
  console.log('Client connected');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://server-t-api.vercel.app/api/v1/alarm');
      const data = response.data;
      socket.send(JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData(); // Fetch data immediately

  // Fetch data every 5 seconds
  const intervalId = setInterval(fetchData, 150);

  socket.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId); // Clear interval when client disconnects
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
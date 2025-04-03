// const http = require('http');
// const WebSocket = require('ws');
// const app = require('./app');

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('New WebSocket client connected');
  
//   ws.send('Welcome to the WebSocket server!');

//   ws.on('message', (message) => {
//     console.log(`Received: ${message}`);
//     ws.send(`You said: ${message}`);
    
//     wss.clients.forEach((client) => {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(`Someone said: ${message}`);
//       }
//     });
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// // Start server
// server.listen(4000, () => {
//   console.log("Server running on http://localhost:4000");
//   console.log("WebSocket server running on ws://localhost:4000");
// });
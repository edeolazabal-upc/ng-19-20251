// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'server/db.json'));
const middlewares = jsonServer.defaults();

// Habilitar CORS usando express-cors
server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server está corriendo en http://localhost:${PORT}`);
});

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // tu archivo JSON
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080; // Render expone el puerto por env

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

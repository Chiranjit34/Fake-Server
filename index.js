const jsonServer = require("json-server");

const server = jsonServer.create();
const middleWares = jsonServer.defaults();
const router = jsonServer.router("db.json");

server.use(middleWares);
server.use(router);

server.listen(3200);
const express = require('express');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use(logger);
server.use('/users', userRouter);
server.use('/posts', postRouter);

//custom middleware

function logger(req, res, next) {
  const date = new Date().toLocaleDateString(); 
  const time = new Date().toLocaleTimeString();

  console.log(`${req.method} Request | http://localhost:8000${req.url} | ${date}, @ ${time}`)
  next();
}



module.exports = server;

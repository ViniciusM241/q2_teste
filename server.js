const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const isLogged = require('./backend/isLogged.js');
const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(require('./backend/db.json'));

app.use(middlewares);

app.use('/api', isLogged, router);

app.use('/static', express.static(path.resolve(__dirname, 'build', 'static')));

app.use('/manifest.json', express.static(path.resolve(__dirname, 'build', 'manifest.json')));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'build')});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);

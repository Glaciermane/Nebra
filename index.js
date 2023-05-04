npm install express discord.js

const express = require('express');
const app = express();

app.get('/api/players', (req, res) => {
  const players = [
    { name: 'Player 1', tier: 10, achievements: 1000 },
    { name: 'Player 2', tier: 5, achievements: 500 },
    { name: 'Player 3', tier: 20, achievements: 2000 },
  ];

  res.json(players);
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});

const fetch = require('node-fetch');

fetch('http://localhost:3000/api/players')
  .then(res => res.json())
  .then(players => {
    console.log(players);
  });

const express = require('express');
const { fetchData } = require('./vinted-api');
const { readGamesData, sortGamesByFavourites } = require('./games');
const { readPuzzleData, sortPuzzleByFavourites } = require('./puzzle');
const { readUnoData, sortUnoByFavourites } = require('./uno');
const { readWatchData, sortWatchByFavourites } = require('./watch');

const app = express();
const port = 3000;

// Endpoint zwracający dane dla vinted
app.get('/data', async (req, res) => {
  const data = await fetchData();
  res.json(data);
});

// Endpointy dla gier
app.get('/games/favourites', (req, res) => {
  const games = readGamesData();
  const sortedGames = sortGamesByFavourites(games);
  res.json(sortedGames);
});

// Endpointy dla puzzli
app.get('/puzzle/favourites', (req, res) => {
  const puzzle = readPuzzleData();
  const sortedPuzzle = sortPuzzleByFavourites(puzzle);
  res.json(sortedPuzzle);
});

// Endpointy dla uno
app.get('/uno/favourites', (req, res) => {
  const uno = readUnoData();
  const sortedUno = sortUnoByFavourites(uno);
  res.json(sortedUno);
});

// Endpointy dla watch
app.get('/watch/favourites', (req, res) => {
  const watch = readWatchData();
  const sortedWatch = sortWatchByFavourites(watch);
  res.json(sortedWatch);
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

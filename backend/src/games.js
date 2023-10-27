const fs = require('fs');

function readGamesData() {
  try {
    const data = fs.readFileSync('../data/games.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function sortGamesByFavourites(games) {
  return games.sort((a, b) => b.favourites - a.favourites);
}

module.exports = { readGamesData, sortGamesByFavourites };

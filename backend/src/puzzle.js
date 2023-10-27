const fs = require('fs');

function readPuzzleData() {
  try {
    const data = fs.readFileSync('../data/puzzle.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function sortPuzzleByFavourites(games) {
  return games.sort((a, b) => b.favourites - a.favourites);
}

module.exports = { readPuzzleData, sortPuzzleByFavourites };

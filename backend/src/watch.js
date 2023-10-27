const fs = require('fs');

function readWatchData() {
  try {
    const data = fs.readFileSync('../data/watch.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function sortWatchByFavourites(games) {
  return games.sort((a, b) => b.favourites - a.favourites);
}

module.exports = { readWatchData, sortWatchByFavourites };

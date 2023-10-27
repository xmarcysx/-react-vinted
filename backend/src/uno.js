const fs = require('fs');

function readUnoData() {
  try {
    const data = fs.readFileSync('../data/uno.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function sortUnoByFavourites(games) {
  return games.sort((a, b) => b.favourites - a.favourites);
}

module.exports = { readUnoData, sortUnoByFavourites };

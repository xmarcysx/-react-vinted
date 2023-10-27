const axios = require('axios');

async function fetchData() {
  const options = {
    method: 'GET',
    url: 'https://vinted3.p.rapidapi.com/getSearch',
    params: {
      country: 'pl',
      page: '2',
      order: 'newest_first',
      keyword: 'gra',
    },
    headers: {
      'X-RapidAPI-Key': 'a0a9a3081cmsh51b0fcada56f19bp14822fjsnc4d99508dd2d',
      'X-RapidAPI-Host': 'vinted3.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Zwracamy dane bez sortowania
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = fetchData;

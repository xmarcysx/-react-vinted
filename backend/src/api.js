const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());

app.use(cors());

app.get('/api', async (req, res) => {
  try {
    const searchText = req.query.title;
    const sortBy = req.query.sortBy;
    let priceFrom = req.query.priceFrom;
    let priceTo = req.query.priceTo;
    const page = req.query.page;

    if (priceFrom === '') priceFrom = 0;
    if (priceTo === '') priceTo = 100000000;

    const firstUrl = 'https://www.vinted.fr/';
    const firstResponse = await axios.get(firstUrl);

    const cookies = firstResponse.headers['set-cookie'];

    const targetCookie = cookies.find((cookieStr) =>
      cookieStr.includes('_vinted_fr_session')
    );

    if (targetCookie) {
      const cookieString = targetCookie.split(';')[0];

      const secondUrl = `https://www.vinted.pl/api/v2/catalog/items?search_text=${searchText}&currency=PLN&price_from=${priceFrom}&price_to=${priceTo}&order=${
        sortBy === 'likes_high_to_low' || 'likes_low_to_high' ? sortBy : ''
      }&page=${page}`;

      const secondResponse = await axios.get(secondUrl, {
        headers: {
          Cookie: cookieString,
        },
      });

      if (sortBy === 'likes_high_to_low') {
        secondResponse.data.items.sort(
          (a, b) => b.favourite_count - a.favourite_count
        );
      } else if (sortBy === 'likes_low_to_high') {
        secondResponse.data.items.sort(
          (a, b) => a.favourite_count - b.favourite_count
        );
      }

      res.send(secondResponse.data);
    } else {
      res.status(500).send('Cookie not found');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

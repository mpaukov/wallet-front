import axios from 'axios';

const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

async function fetchCurrency() {
  const { data } = await axios(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);

  return data;
}

export { fetchCurrency };

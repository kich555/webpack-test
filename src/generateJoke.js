import axios from 'axios';

export default async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  }

  const res = await axios.get('https://icanhazdadjoke.com/', config) 
  document.getElementById('joke').innerHTML = res.data.joke; // display the joke in the DOM
}

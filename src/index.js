import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg'; 

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn') // get the joke button from the DOM
jokeBtn.addEventListener('click', generateJoke) // add event listener to the joke button

generateJoke(); // generate a joke on page load
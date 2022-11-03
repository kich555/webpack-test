import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg'; 
import test from './assets/폴더구조.png'
import test2 from './assets/Background.webp' // webp image

const laughImg = document.getElementById('laughImg')
laughImg.src = test2

const jokeBtn = document.getElementById('jokeBtn') // get the joke button from the DOM
jokeBtn.addEventListener('click', generateJoke) // add event listener to the joke button

generateJoke(); // generate a joke on page load
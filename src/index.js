import './style.css';
import Spaghetti from './assets/images/dish-1.jpg';

const thumbnails = document.querySelectorAll(".card__thumbnail");
thumbnails.forEach(thumbnail => {
  thumbnail.src = Spaghetti;
})
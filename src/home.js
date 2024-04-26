import AvocadoToastwithEgg from './assets/images/avocado-toast-with-egg.jpg';
import HamburgerAndFries from './assets/images/hamburger-and-fries.jpg';
import PenneCarbonara from './assets/images/penne-carbonara.jpg';
import Salad from './assets/images/salad.jpg';
import TomatoSoup from './assets/images/tomato-soup.jpg';

class Dish {
  constructor(thumbnailUrl, dishName) {
    this._thumbnailUrl = thumbnailUrl;
    this._dishName = dishName;
  }

  getThumbnailUrl() {
    return this._thumbnailUrl;
  }

  getDishName() {
    return this._dishName;
  }
}

class Dishes {
  #_dishes = [];

  addDish(thumbnailUrl, dishName) {
    const dish = new Dish(thumbnailUrl, dishName)
    this.#_dishes.push(dish);
  }

  getAllDishes() {
    return this.#_dishes;
  }
}

export function loadHome(contentDiv) {
  const dishes = new Dishes();
  dishes.addDish(AvocadoToastwithEgg, 'Avocado Toast with Egg');
  dishes.addDish(HamburgerAndFries, 'Hamburger and Fries');
  dishes.addDish(PenneCarbonara, 'Penne Carbonara');
  dishes.addDish(Salad, 'Salad');
  dishes.addDish(TomatoSoup, 'Tomato Soup');
  
  // Hero
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const heroHeading = document.createElement('h1');
  heroHeading.classList.add('hero__heading');
  heroHeading.textContent = 'Welcome to Rasa Oriental';

  hero.appendChild(heroHeading);

  // Menu
  const menu = document.createElement('div');
  menu.classList.add('content__section');
  menu.classList.add('menu');

  const menuHeading = document.createElement('h2');
  menuHeading.classList.add('menu__heading');
  menuHeading.classList.add('section__heading');
  menuHeading.textContent = 'Menu Highlight';

  const menuCardsContainer = document.createElement('div');
  menuCardsContainer.classList.add("menu__cards-container");
  dishes.getAllDishes().forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardThumbnail = document.createElement('img');
    cardThumbnail.classList.add('card__thumbnail');
    cardThumbnail.src = dish.getThumbnailUrl();

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card__description');

    const cardName = document.createElement('p');
    cardName.classList.add('card__name');
    cardName.textContent = dish.getDishName();

    cardDescription.appendChild(cardName);
    card.appendChild(cardThumbnail);
    card.appendChild(cardDescription);
    menuCardsContainer.appendChild(card);
  })

  menu.appendChild(menuHeading);
  menu.appendChild(menuCardsContainer);

  contentDiv.appendChild(hero);
  contentDiv.appendChild(menu);
}
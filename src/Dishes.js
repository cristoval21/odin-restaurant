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

export const dishes = new Dishes();
dishes.addDish(AvocadoToastwithEgg, 'Avocado Toast with Egg');
dishes.addDish(HamburgerAndFries, 'Hamburger and Fries');
dishes.addDish(PenneCarbonara, 'Penne Carbonara');
dishes.addDish(Salad, 'Salad');
dishes.addDish(TomatoSoup, 'Tomato Soup');
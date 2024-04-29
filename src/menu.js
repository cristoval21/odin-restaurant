import { dishes } from './Dishes.js';

export function loadMenu(contentDiv) {
  contentDiv.textContent = '';

  const contentSection = document.createElement('section');
  contentSection.classList.add('content__section');

  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  sectionHeading.textContent = 'Our Menu';

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('section__full-menu-cards-container');

  dishes.getAllDishes().forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('card--horizontal');

    const cardThumbnail = document.createElement('img');
    cardThumbnail.classList.add('card__thumbnail');
    cardThumbnail.classList.add('card__thumbnail--horizontal');
    cardThumbnail.src = dish.getThumbnailUrl();
    cardThumbnail.alt = dish.getDishName();

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card__description');
    cardDescription.classList.add('card__description--full');

    const cardName = document.createElement('div');
    cardName.classList.add('card__name');
    cardName.classList.add('card__name--large');
    cardName.textContent = dish.getDishName();

    const cardSubtitle = document.createElement('div');
    cardSubtitle.classList.add('card__subtitle');
    cardSubtitle.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolore, odit velit laudantium quam quasi, ab animi laboriosam nulla a perferendis? Illum saepe quis officiis vero inventore cumque? Delectus, iusto?';

    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardSubtitle);
    card.appendChild(cardThumbnail);
    card.appendChild(cardDescription);
    cardsContainer.appendChild(card);
  });

  contentSection.appendChild(sectionHeading);
  contentSection.appendChild(cardsContainer);
  contentDiv.appendChild(contentSection);
}
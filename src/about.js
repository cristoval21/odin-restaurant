import ChefSmiling from './assets/images/chef-smiling.jpg';

export function loadAbout(contentDiv) {
  contentDiv.textContent = '';

  const contentSection = document.createElement('section');
  contentSection.classList.add('content__section');
  contentSection.classList.add('content__section--flex');
  
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('section__contaioner');

  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  sectionHeading.textContent = 'Cooking for America since 1943.';

  const sectionParagraph = document.createElement('p');
  sectionParagraph.classList.add('section__paragraph');
  sectionParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus suscipit nisi, totam temporibus consequatur ducimus debitis ratione? Debitis deleniti officia vitae, voluptates architecto saepe dolorum, voluptate esse id dignissimos iste.';

  const sectionImage = document.createElement('img');
  sectionImage.classList.add('section__image');
  sectionImage.src = ChefSmiling;
  sectionImage.alt = 'Chef Smiling';

  sectionContainer.appendChild(sectionHeading);
  sectionContainer.appendChild(sectionParagraph);
  contentSection.appendChild(sectionContainer);
  contentSection.appendChild(sectionImage);
  contentDiv.appendChild(contentSection);
}
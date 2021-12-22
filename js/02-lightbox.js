import { galleryItems } from './gallery-items.js';
// Change code below this line



const paletterContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCards(galleryItems);

paletterContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function createImgCards( galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');    

}
let lightbox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionsData:'alt'});
lightbox.close()


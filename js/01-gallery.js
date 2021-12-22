
import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletterContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCards(galleryItems);

paletterContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function createImgCards( galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');

}

paletterContainer.addEventListener("click", selectImg);


function selectImg(event) {

    event.preventDefault()

    const isImgSource = event.target.dataset.source;
    
    if (!isImgSource) {
        return;
    }
   
    const instance = basicLightbox.create(`
    <img srcset="${isImgSource}" width="800" height="600">`)
  
  instance.show()



window.addEventListener("keyup", event => {
   
    if (event.code === "Escape") 
      instance.close()
    
    window.removeEventListener("keyup", event);
    
  });


}
 

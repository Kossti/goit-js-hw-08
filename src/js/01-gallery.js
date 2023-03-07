import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galerryContainer = document.querySelector('.gallery');
const galleryMarkup = createGaleryImageMarkup(galleryItems);

galerryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGaleryImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item" >
        <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
        </a>
        </div >
        `;
    })
    .join('');
}
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

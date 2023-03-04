import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(item => {
    return `<div class = "gallery__item">
        <a class = "gallery__link" href = "${item.original}">
        <img class = "gallery__image"
        src = "${item.preview}"
        data-source = "${item.original}"
        alt = "${item.description}"
        />
        </a>
        </div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItem);

galleryContainer.addEventListener('click', onShowImg);

function onShowImg(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
		<img width="1280" height="853" src="${event.target.dataset.source}">
	`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onCloseEsc);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onCloseEsc);
      },
    }
  );
  instance.show();

  function onCloseEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(galleryItems);

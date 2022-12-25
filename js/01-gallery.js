import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

// console.log(createGalleryItem(galleryItems));

function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        data-source="${original}"
        alt='${description}'
      />
    </a>
  </div>`;
    })
    .join("");
}

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", onGalleryContainerClick);

let modalImage;

function onGalleryContainerClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const sourceUrl = e.target.dataset.source;
  // console.log(sourceUrl);

  modalImage = basicLightbox.create(
    `<img src="${sourceUrl}" width="800" height="600">`
  );
  modalImage.show();

  document.addEventListener("keydown", onEscapeKeyDown);
}

function onEscapeKeyDown(e) {
  if (e.code === "Escape") {
    modalImage.close();

    document.removeEventListener("keydown", onEscapeKeyDown);
  }
}

// console.log(galleryItems);

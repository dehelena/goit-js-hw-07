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

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

// galleryContainer.addEventListener("click", onGalleryContainerClick);

// function onGalleryContainerClick(event) {
//   if (event.target.nodeName !== "img") {
//     return;
//   }

//   console.log(event.target.textContent);
// }

// console.log(galleryItems);

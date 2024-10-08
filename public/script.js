const galleryData = [
  {
    src: "https://placekitten.com/300/300",
    description: "Look at this kitteh",
    alt: "A kitteh",
  },
  {
    src: "https://placekitten.com/300/300",
    description: "Another Kitteh",
    alt: "Cutie",
  },
];

const galleryElement = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxDesc = document.getElementById("lightbox-desc");

let currentImageIndex = 0;

function loadGallery() {
  galleryData.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.className = "thumbnail";
    imgElement.onclick = () => openLightbox(index);
    galleryElement.appendChild(imgElement);
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const image = galleryData[index];
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;
  lightboxDesc.textContent = image.description;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function navigateLightbox(direction) {
  currentImageIndex = (currentImageIndex + direction + galleryData.length) % galleryData.length;
  openLightbox(currentImageIndex);
}

loadGallery();

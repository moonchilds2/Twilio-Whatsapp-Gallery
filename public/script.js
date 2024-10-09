let galleryData = [];

const galleryElement = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxDesc = document.getElementById("lightbox-desc");

let currentImageIndex = 0;

async function loadGallery() {
  try {
      const response = await fetch('/api/gallery'); 
      if (!response.ok) {
          throw new Error(`Erro: ${response.status} ${response.statusText}`);
      }
      galleryData = await response.json();

      // O resto do seu código para renderizar as imagens
      galleryData.forEach((image, index) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.src;
          imgElement.alt = image.alt;
          imgElement.className = "thumbnail";
          imgElement.onclick = () => openLightbox(index);
          galleryElement.appendChild(imgElement);
      });
  } catch (error) {
      console.error('Erro ao carregar a galeria:', error);
  }
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

// Torna as funções acessíveis globalmente
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.navigateLightbox = navigateLightbox;

// Chama a função para carregar a galeria
loadGallery();



const carouselImages = [
    "img/latas_png20.png",
    "img/papapapncho20.png",
    "img/pipiiippipipiipiipipipzza20.png"
];

let currentImageIndex = 0;
const carouselImage = document.getElementById("carrusel-imagenes");
const prevBtn = document.getElementById("btn-izq");
const nextBtn = document.getElementById("btn-der");


function showImage(index) {
    carouselImage.src = carouselImages[index];
}


prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
});


nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
});


const carouselImages = [
    { src: "img/pipiiippipipiipiipipipzza20.png", link: "productos_piz.html" }, // Bebidas
    { src: "img/papapapncho20.png", link: "productos_pan.html" }, // Panchos
    { src: "img/latas_png20.png", link: "productos_beb.html" } // Pizzas
];

let currentImageIndex = 0;
const carouselImage = document.getElementById("carrusel-imagenes");
const prevBtn = document.getElementById("btn-izq");
const nextBtn = document.getElementById("btn-der");

function showImage(index) {
    carouselImage.src = carouselImages[index].src; 
}


prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
});


nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
});


carouselImage.addEventListener("click", () => {
    window.location.href = carouselImages[currentImageIndex].link; 
});

showImage(currentImageIndex);

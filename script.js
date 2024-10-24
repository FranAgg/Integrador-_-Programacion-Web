const carouselImages = [
    "img/Drink_Coca.png",
    "img/Drink_Fanta.png",
    "img/Drink_Pepsi.png"
];

let currentImageIndex = 0;
const carouselImage = document.getElementById("carrusel-imagenes");
const prevBtn = document.getElementById("btn-izq");
const nextBtn = document.getElementById("btn-der");

// Función para mostrar la imagen
function showImage(index) {
    carruselImage.src = carruselImages[index];
}

//Variebles
let comentar = false;

function comentando(){
    
}

function App(){}

    window.onload = function(event){
        var app= new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event){
        // Toma al boton que activo el evento
        const btn = event.currentTarget;
        // Contenedor principal - list
        const carruselList= btn.parentNode;
        // Contenedor track que tiene todas las imagenes sin los botones
        const track= carruselList.querySelector('#track');
        // Contenedor de las imagenes por individual
        const carrusel = track.querySelectorAll('.carrusel');
        
        // Obtiene el ancho de la imagen individual del carrusel
        const carruselWidth= carrusel[0].offsetWidth;
        // Obtiene el ancho del contenedor id track de las imagenes
        const trackWidth= track.offsetWidth;
        // Obtiene el ancho del contenedor list, el principal
        const listWidth= carruselList.offsetWidth;
        
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track): nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left= `${-1 * (leftPosition - carruselWidth)}px`
        }
    }

    let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        if (leftPosition < (trackWidth - listWidth)) {
            track.style.left= `${-1 * (leftPosition + carruselWidth)}px`
        }
    }

    // Esta función se encarga de manejar la reacción al hacer clic en el botón "Me gusta"
// function reactToStory(event) {
//     event.preventDefault();
//     const reactionCount = event.target.parentElement.querySelector('.reaction-count');
//     let currentCount = parseInt(document.getElementById("contador").innerHTML);
//     currentCount= currentCount + 1;
//     document.getElementById("contador").innerHTML= currentCount;
// }

function reactToStory(event) {
    event.preventDefault();
    event.stopPropagation(); // Evita la propagación del evento

    // Encontrar el contenedor de la historia más cercano
    const carruselElement = event.target.closest('.carrusel');

    // Encontrar el contador específico para esta historia
    const reactionCount = carruselElement.querySelector('.reaction-count');

    // Obtener el ID del contador específico
    const storyId = reactionCount.id;

    // Incrementar el contador de la historia correspondiente
    let currentCount = parseInt(reactionCount.textContent);
    currentCount++;
    reactionCount.textContent = currentCount;

    // Puedes utilizar storyId si necesitas hacer más con la historia específica
    console.log(`Se ha dado 'Me gusta' a la historia con ID ${storyId}`);
}

// // Función para abrir el modal y mostrar la imagen al hacer clic en una imagen del carrusel
// function openModal(imageSrc) {
//     const modal = document.getElementById('modal');
//     const modalImage = document.getElementById('modal-image');

//     modal.style.display = 'block';
//     modalImage.src = imageSrc;
// }

// // Función para cerrar el modal
// function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'none';
// }

let currentImageIndex = 0;
const images = [
    'recursos/1.jpg',
    'recursos/2.jpg',
    'recursos/3.webp',
    'recursos/4.webp',
    'recursos/5.webp',
    'recursos/6.webp',
    'recursos/7.webp',
    // Agrega aquí las rutas de tus imágenes en el carrusel
];
function openModal(imageIndex) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    currentImageIndex = imageIndex;
    modal.style.display = 'block';
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const modalImage = document.getElementById('modal-image');
    modalImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const modalImage = document.getElementById('modal-image');
    modalImage.src = images[currentImageIndex];
}
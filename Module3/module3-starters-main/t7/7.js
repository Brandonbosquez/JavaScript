
const img = document.getElementById("target");
const punto = document.getElementById("trigger");

punto.addEventListener('mouseenter', () => {
    img.src = 'img/picB.jpg';
});

punto.addEventListener('mouseleave', () => {
    img.src = 'img/picA.jpg';
});
//LISTOOOOOOO
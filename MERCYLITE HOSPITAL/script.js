document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');

    menuToggle.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
});
let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.slider img');
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

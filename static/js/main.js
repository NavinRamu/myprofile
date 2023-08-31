// Scroll-Up Button
document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.querySelector(".scroll-up");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    };

    scrollUpButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

// JavaScript Toggle Functionality
function toggleContent(element) {
    const content = element.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
        element.querySelector('.toggle').textContent = '+';
    } else {
        content.style.display = 'block';
        element.querySelector('.toggle').textContent = '-';
    }
}

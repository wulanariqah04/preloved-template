// Simple Mobile Navigation Toggle
const burger = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        // In a full version, we would toggle a class to show/hide the menu smoothly
        // For this lightweight template, a simple alert demonstrates interactivity
        alert('Mobile menu toggle triggered! Add your custom CSS class here to expand the menu.');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

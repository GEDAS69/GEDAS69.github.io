document.addEventListener('DOMContentLoaded', function() {
    const bodyElement = document.body;
    const toggleButton = document.getElementById('toggle-dark-mode');

    toggleButton.addEventListener('click', function() {
        // Toggle the dark-mode class on the body
        bodyElement.classList.toggle('dark-mode');

        // Additional styling changes if you want to rotate buttons or invert icons:
        const button = document.querySelector('.btn1');
        button.classList.toggle('rotated');

        const button2 = document.querySelector('.btn2');
        if (button2) button2.classList.toggle('dark');

        const button3 = document.querySelector('.btn3');
        if (button3) button3.classList.toggle('dark');
    });
});

// Select the new back-to-top button
const backToTopBtn = document.getElementById('backToTopBtn');

// Add scroll event to show/hide the button
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Add click event to scroll to top smoothly
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
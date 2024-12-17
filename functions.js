document.addEventListener('DOMContentLoaded', function() {
    const bodyElement = document.body;
    const toggleButton = document.getElementById('toggle-dark-mode');

    toggleButton.addEventListener('click', function() {

        bodyElement.classList.toggle('dark-mode');


        const button = document.querySelector('.btn1');
        button.classList.toggle('rotated');

        const button2 = document.querySelector('.btn2');
        if (button2) button2.classList.toggle('dark');

        const button3 = document.querySelector('.btn3');
        if (button3) button3.classList.toggle('dark');
    });
});


const backToTopBtn = document.getElementById('backToTopBtn');


window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});


backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}


function updateClock() {
    const clockElement = document.getElementById('clock');
    clockElement.textContent = getCurrentTime();
}


document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 1000);
});
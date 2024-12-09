function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
            const button = document.querySelector('.btn1');
            button.classList.toggle('rotated');

            const button2 = document.querySelector('.btn2');
            button2.classList.toggle('dark');

            const button3 = document.querySelector('.btn3');
            button3.classList.toggle('dark');
 }

const toggleButton = document.getElementById('toggle-dark-mode');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
}); 
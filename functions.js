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

// Modal functionality
function openModal() {
    document.getElementById('modalBackground').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalBackground').style.display = 'none';
}

// Open Modal Function
function openModal() {
    document.getElementById('modalBackground').style.display = 'block';
}

// Close Modal Function
function closeModal() {
    document.getElementById('modalBackground').style.display = 'none';
}

function saveFormData() {
    // Collect form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const question1 = parseFloat(document.getElementById('question1').value) || 0;
    const question2 = parseFloat(document.getElementById('question2').value) || 0;
    const question3 = parseFloat(document.getElementById('question3').value) || 0;
    const question4 = parseFloat(document.getElementById('question4').value) || 0;
    const question5 = parseFloat(document.getElementById('question5').value) || 0;

    // Validation: Email and Address fields
    if (!validateEmail(email)) {
        alert("Invalid email format. Please enter a valid email.");
        return;
    }

    if (address === "") {
        alert("Address cannot be empty. Please provide an address.");
        return;
    }

    // Calculate the average score
    const total = question1 + question2 + question3 + question4 + question5;
    const average = (total / 5).toFixed(2);

    // Format the result
    const resultText = `
        <span>${firstName}</span> 
        <span>${lastName}</span> 
        <span>(${email}, ${address})</span> 
        <span>Average: ${average}</span>
    `;

    // Display the result in the modal
    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = ""; // Clear modal content

    const resultTitle = document.createElement('h3');
    resultTitle.textContent = "Results";
    modalBox.appendChild(resultTitle);

    // Create a container for the result row
    const resultRow = document.createElement('div');
    resultRow.innerHTML = resultText;
    resultRow.style.display = "flex";
    resultRow.style.gap = "15px"; // Add spacing between elements
    resultRow.style.flexWrap = "wrap";
    resultRow.style.alignItems = "center";

    // Apply text color to average value
    if (average <= 4) {
        resultRow.style.color = "red";
    } else if (average > 4 && average <= 7) {
        resultRow.style.color = "orange";
    } else {
        resultRow.style.color = "green";
    }

    modalBox.appendChild(resultRow);

    // Add "Close" button
    const closeButton = document.createElement('a');
    closeButton.textContent = "Close";
    closeButton.href = "#";
    closeButton.classList.add("modal-trigger");
    closeButton.onclick = closeModal;

    // Add "Back to Form" button
    const backButton = document.createElement('a');
    backButton.textContent = "Back to Form";
    backButton.href = "#";
    backButton.classList.add("modal-trigger");
    backButton.onclick = loadForm;

    // Append buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.textAlign = "center";
    buttonContainer.style.marginTop = "20px";

    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(closeButton);
    modalBox.appendChild(buttonContainer);
}

// Reload the Original Form
function loadForm() {
    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = `
        <h3>Contact Form</h3>
        <form id="contactForm">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName"><br><br>

            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName"><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email"><br><br>

            <label for="address">Address:</label><br>
            <input type="text" id="address"><br><br>

            <label for="question1">How would you rate the design quality of your current website?</label><br>
            <input type="number" id="question1" min="1" max="10"><br><br>

            <label for="question2">How important is website responsiveness (mobile-friendliness) for you?</label><br>
            <input type="number" id="question2" min="1" max="10"><br><br>

            <label for="question3">What is your priority: appearance or functionality of the website?</label><br>
            <input type="number" id="question3" min="1" max="10"><br><br>

            <label for="question4">How satisfied are you with the speed and performance of your current website?</label><br>
            <input type="number" id="question4" min="1" max="10"><br><br>

            <label for="question5">Would you like additional features like SEO optimization, blogs, or e-commerce?</label><br>
            <input type="number" id="question5" min="1" max="10"><br><br>

            <a href="#" class="modal-trigger" onclick="saveFormData()">Submit</a>
            <a href="#" class="modal-trigger" onclick="closeModal()">Close</a>
        </form>
    `;
}

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div by their IDs
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener to the form for the 'submit' event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting to the server

        // Retrieve user input values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;  // Track overall validation status
        const messages = []; // Store validation error messages

        // Username Validation: Check if username length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation: Check if email includes '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password Validation: Ensure password length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Show feedback
        feedbackDiv.style.display = 'block'; // Make the feedback div visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br> for line breaks
            feedbackDiv.style.color = '#dc3545'; // Red for error
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background
        }
    });
});

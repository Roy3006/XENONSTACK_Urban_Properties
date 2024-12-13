document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the input
    if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
    }

    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    
    if (response.ok) {
        // Successful login
        window.location.href = "properties.html";  // Redirect to properties page
    } else {
        // Display error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});

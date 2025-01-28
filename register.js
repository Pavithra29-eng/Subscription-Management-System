// Client-side Validation for Registration Form
document.getElementById('register-form').addEventListener('submit', function (e) {
    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    let errors = [];

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
        errors.push("Name must contain only letters and spaces.");
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Invalid email format.");
    }

    // Password validation
    if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
        errors.push("Password must be at least 8 characters long and include a special character.");
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Show errors or submit
    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});

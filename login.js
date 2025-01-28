// Client-side Validation for Login Form
document.getElementById('login-form').addEventListener('submit', function (e) {
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let errors = [];

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Invalid email format.");
    }

    // Password validation
    if (password === "") {
        errors.push("Password cannot be empty.");
    }

    // Show errors or submit
    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});

// Password Strength Indicator for Login Page
const passwordField = document.getElementById('password');
const strengthMeter = document.getElementById('password-strength');

passwordField.addEventListener('input', () => {
    const passwordValue = passwordField.value;
    const strength = getPasswordStrength(passwordValue);
    strengthMeter.textContent = strength;
});

// Password Strength Calculation Function
function getPasswordStrength(password) {
    let strength = '';
    if (password.length < 6) {
        strength = 'Weak';
    } else if (password.length < 8) {
        strength = 'Medium';
    } else {
        strength = 'Strong';
    }
    return strength;
};

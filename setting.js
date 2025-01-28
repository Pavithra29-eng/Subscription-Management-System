document.getElementById('account-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Handle form submission to update account settings (e.g., via AJAX)
    console.log('Account updated', { email, password });
});

document.getElementById('notification-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailNotifications = document.getElementById('email-notifications').checked;
    const smsNotifications = document.getElementById('sms-notifications').checked;
    // Handle form submission to update notification preferences
    console.log('Notification preferences updated', { emailNotifications, smsNotifications });
});

document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const autoRenew = document.getElementById('auto-renew').checked;
    // Handle form submission to update subscription preferences
    console.log('Subscription preferences updated', { autoRenew });
});

document.getElementById('security-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const twoFactor = document.getElementById('two-factor').checked;
    // Handle form submission to update security settings
    console.log('Security settings updated', { twoFactor });
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'logout.php';  // Redirect to logout script
});


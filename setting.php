<?php
session_start();
include('includes/config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];  // Ensure password is hashed if updating

    // Update the account settings in the database
    $query = "UPDATE users SET email = ?, password = ? WHERE id = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param('ssi', $email, password_hash($password, PASSWORD_DEFAULT), $_SESSION['user_id']);
    $stmt->execute();

    // Redirect or send a response indicating success
    echo "Account updated successfully!";
}

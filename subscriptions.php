<?php
// Database connection
include('db_connection.php');

// Start session to access user data
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header('Location: login.html');
    exit;
}

// Fetch the user's subscription data from the database
$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM subscriptions WHERE user_id = '$user_id' ORDER BY billing_date ASC";
$result = mysqli_query($conn, $query);

// Check if subscriptions exist
if (mysqli_num_rows($result) > 0) {
    echo "<table class='subscription-table'>
          <tr>
              <th>Service Name</th>
              <th>Amount</th>
              <th>Billing Date</th>
              <th>Status</th>
          </tr>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
                <td>" . $row['service_name'] . "</td>
                <td>" . $row['amount'] . "</td>
                <td>" . $row['billing_date'] . "</td>
                <td>" . ($row['status'] == 1 ? 'Active' : 'Expired') . "</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>No active subscriptions found.</p>";
}

mysqli_close($conn);

# Subscription Management System

## Overview

The **Subscription Management System** is a comprehensive, web-based application designed to help users efficiently manage their subscription-based services. Whether it's streaming services, magazine subscriptions, or any other recurring payment, this system allows users to seamlessly track and handle their subscriptions from a centralized dashboard. 

### Key Features:
-  **User Registration**: New users can easily register by providing their email and creating a password. The registration form is equipped with client-side validation for a smooth user experience.
-  **User Authentication**: The application uses secure login functionality with password hashing, ensuring user data remains safe. Users can log in using their email and password.
-  **Subscription Dashboard**: The dashboard serves as the core feature of the system, allowing users to:
-  **Add new subscriptions** by entering details like subscription name, category, cost, etc.
-  **View current subscriptions** in an organized list with all essential details.
-  **Edit existing subscriptions** to update the data as needed.
-  **Delete subscriptions** from the dashboard if the user no longer wants to track them.
-  **Subscription Reminders**: Users can set reminders for subscription renewals to avoid missed payments.
-  **Profile Management**: Users can update their profile details, including personal information and preferences.
-  **Responsive Design**: The application is fully responsive and optimized for both desktop and mobile devices, ensuring a consistent experience across all platforms.
-  **Security**: The system employs **password hashing** for secure user authentication, preventing unauthorized access. It also protects user data through **input validation** to avoid malicious scripts or attacks.
-  **Email Notifications**: Users can opt-in to receive reminders and updates via email about upcoming subscription renewals and changes to their account.

### Technologies Used:
- **Frontend*:
  - **HTML**: For creating the structure of the web pages.
  - **CSS**: Used for styling, including a responsive layout that adapts to various screen sizes (mobile, tablet, and desktop).
  - **JavaScript**: For client-side form validation to ensure correct user inputs and enhance the user experience.
  
- **Backend*:
  - **PHP**: Handles the server-side logic, including user authentication, subscription management, and profile settings. 
  - **PHP Mailer**: Used for sending email reminders to users regarding subscription renewals.
  
- **Database*:
  - **MySQL**: Stores user data and subscription details, enabling easy retrieval and management. The system utilizes multiple tables for managing user profiles, subscriptions, and other essential information.

- **Security*:
  - **Password Hashing**: Passwords are securely stored using modern hashing algorithms (e.g., bcrypt) to prevent unauthorized access.
  - **Prepared Statements**: The system uses prepared statements in SQL queries to protect against SQL injection attacks.
  
- **Design*:
  - **Responsive Design**: Using **CSS media queries**, the website adjusts its layout based on screen size, ensuring it looks good on desktops, tablets, and mobile phones.
  - **Modern UI**: A clean, intuitive user interface designed to make managing subscriptions quick and easy.

### Benefits for Users:
- **Centralized Subscription Management**: Users no longer need to keep track of multiple subscriptions manually. This system helps them manage everything in one place.
- **User-Friendly Interface**: The system’s design and functionality prioritize ease of use, ensuring that users, regardless of technical experience, can manage their subscriptions effectively.

## Setup Instructions
### Prerequisites:
- PHP (7.0 or above)
- MySQL database

-------------







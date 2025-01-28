// Dummy data to simulate database entries
const subscriptions = [
    { id: 1, name: 'Netflix', amount: 15, date: '2025-02-01', status: 'Active' },
    { id: 2, name: 'Spotify', amount: 9.99, date: '2025-02-05', status: 'Active' },
    { id: 3, name: 'Hulu', amount: 12, date: '2025-02-10', status: 'Expired' }
];

// Function to update the dashboard stats dynamically
function updateDashboard() {
    const activeSubscriptions = subscriptions.filter(sub => sub.status === 'Active');
    const totalAmount = activeSubscriptions.reduce((sum, sub) => sum + sub.amount, 0);
    const totalSubscriptions = activeSubscriptions.length;

    document.getElementById('total-subs').textContent = totalSubscriptions;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

    // Update progress bar (for example, we can show the percentage of active subscriptions)
    const progress = (totalSubscriptions / subscriptions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';

    // Update the subscription list table
    const subscriptionList = document.getElementById('subscription-list');
    subscriptionList.innerHTML = ''; // Clear existing table rows

    activeSubscriptions.forEach(sub => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sub.name}</td>
            <td>$${sub.amount.toFixed(2)}</td>
            <td>${sub.date}</td>
            <td>${sub.status}</td>
            <td>
                <button class="edit-btn" onclick="openEditModal(${sub.id})">Edit</button>
                <button class="delete-btn" onclick="deleteSubscription(${sub.id})">Delete</button>
            </td>
        `;
        subscriptionList.appendChild(row);
    });

    // Update upcoming payments list
    const remindersList = document.getElementById('reminders-list');
    remindersList.innerHTML = ''; // Clear existing list items
    subscriptions.forEach(sub => {
        if (new Date(sub.date) > new Date()) {
            const listItem = document.createElement('li');
            listItem.textContent = `Payment for ${sub.name}: $${sub.amount.toFixed(2)} on ${sub.date}`;
            remindersList.appendChild(listItem);
        }
    });
}

// Function to open the edit modal and pre-fill the data
function openEditModal(id) {
    const sub = subscriptions.find(s => s.id === id);
    if (sub) {
        document.getElementById('service-name').value = sub.name;
        document.getElementById('amount').value = sub.amount;
        document.getElementById('billing-date').value = sub.date;
        document.getElementById('edit-form').onsubmit = (e) => {
            e.preventDefault();
            editSubscription(id);
        };
        document.getElementById('edit-modal').style.display = 'block';
    }
}

// Function to edit subscription
function editSubscription(id) {
    const sub = subscriptions.find(s => s.id === id);
    if (sub) {
        sub.name = document.getElementById('service-name').value;
        sub.amount = parseFloat(document.getElementById('amount').value);
        sub.date = document.getElementById('billing-date').value;

        updateDashboard(); // Re-render the dashboard after editing
        document.getElementById('edit-modal').style.display = 'none';
    }
}

// Function to delete subscription
function deleteSubscription(id) {
    const index = subscriptions.findIndex(s => s.id === id);
    if (index !== -1) {
        subscriptions.splice(index, 1);
        updateDashboard(); // Re-render the dashboard after deletion
    }
}

document.getElementById('add-subscription-btn').addEventListener('click', function() {
    document.getElementById('add-modal').style.display = 'flex';
});

document.getElementById('add-modal').addEventListener('click', function(event) {
    if (event.target === document.getElementById('add-modal')) {
        document.getElementById('add-modal').style.display = 'none';
    }
});

document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceName = document.getElementById('add-service-name').value;
    const amount = document.getElementById('add-amount').value;
    const billingDate = document.getElementById('add-billing-date').value;

    // Create new table row with subscription details
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${serviceName}</td>
        <td>$${amount}</td>
        <td>${billingDate}</td>
        <td>Active</td>
        <td><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></td>
    `;
    document.getElementById('subscription-list').appendChild(row);

    // Close the modal after adding the subscription
    document.getElementById('add-modal').style.display = 'none';
});


// Call the update function on page load
updateDashboard();

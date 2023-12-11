document.getElementById('subscribeButton').addEventListener('click', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('first_name').value.trim();
    let email = document.getElementById('email').value.trim();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName === '' || email === '') {
        showError('Please fill in all fields.');
    } else if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
    } else {
        showSuccess('You have successfully subscribed!');
        document.getElementById('subscriptionForm').reset();
    }
});

function showError(message) {
    alert('Error: ' + message);
}

function showSuccess(message) {
    alert('Success: ' + message);
}
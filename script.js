document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Send data to the server
    fetch('https://api.pay.staging.mynkwa.com/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',  'X-API-Key': 'B_j5ob2ayNfY99u2ukfuf'},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Payment successful!');
        // Redirect to courses page
        window.location.href = "../mentor-platform.html#coursesPage";
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Payment failed. Please try again.');
    });
});
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Collect form data
  const formData = {
    name: form.querySelector('input[placeholder="Full Name"]').value,
    email: form.querySelector('input[placeholder="Email"]').value,
    contactNumber: form.querySelector('input[placeholder="Contact Number"]').value,
    subject: form.querySelector('input[placeholder="Subject"]').value,
    message: form.querySelector('textarea[placeholder="Your Message"]').value,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzsnjybucHMkZMetPdYdkeGhQ0RPFiJ-tx-wKMUBAYj6ZkFiZaz4bjcAd0XhavF7hI/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (result.status === 'success') {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

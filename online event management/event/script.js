// script.js

// Listen for form submission
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieve form values
  const eventData = {
      eventId: 'EVT' + Date.now(),
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      city: document.getElementById('city').value.trim(),
      address: document.getElementById('address').value.trim(),
      gender: document.getElementById('gender').value,
      pricing: document.getElementById('event-pricing').value,
      date: document.getElementById('event-date').value,
      time: document.getElementById('event-time').value,
      type: document.getElementById('event-type').value.trim(),
      duration: document.getElementById('event-duration').value.trim()
  };

  // Get existing events from local storage
  let events = JSON.parse(localStorage.getItem('events')) || [];

  // Add new event to events array
  events.push(eventData);

  // Save updated events array back to local storage
  localStorage.setItem('events', JSON.stringify(events));

  // Reset the form
  document.getElementById('eventForm').reset();

  // Redirect to submission animation page
  window.location.href = 'submit.html';
});

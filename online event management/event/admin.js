// admin.js

// Function to display events in the table
function displayEvents() {
  const events = JSON.parse(localStorage.getItem('events')) || [];
  const eventTableBody = document.querySelector('#eventTable tbody');

  // Clear existing table data
  eventTableBody.innerHTML = '';

  // Populate table with events
  events.forEach((event, index) => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td><input type="checkbox" class="select-event" data-index="${index}"></td>
          <td>${event.eventId}</td>
          <td>${event.name}</td>
          <td>${event.email}</td>
          <td>${event.phone}</td>
          <td>${event.city}</td>
          <td>${event.address}</td>
          <td>${event.gender}</td>
          <td>${event.pricing}</td>
          <td>${event.date}</td>
          <td>${event.time}</td>
          <td>${event.type}</td>
          <td>${event.duration} hours</td>
      `;

      eventTableBody.appendChild(row);
  });
}

// Function to delete selected events
function deleteSelectedEvents() {
  let events = JSON.parse(localStorage.getItem('events')) || [];
  const checkboxes = document.querySelectorAll('.select-event');

  // Create a new array excluding selected events
  const updatedEvents = events.filter((event, index) => {
      return !checkboxes[index].checked;
  });

  // Update local storage and refresh table
  localStorage.setItem('events', JSON.stringify(updatedEvents));
  displayEvents();
}

// Initialize event display on page load
document.addEventListener('DOMContentLoaded', displayEvents);

// Attach event listener to delete button
document.getElementById('deleteSelected').addEventListener('click', function() {
  if (confirm('Are you sure you want to delete selected events?')) {
      deleteSelectedEvents();
  }
});

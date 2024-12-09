// Function to update the counter
function updateCounter() {
    const startDate = new Date('2022-11-18'); // Start date
    const now = new Date(); // Current date
    const diff = now - startDate; // Difference in milliseconds

    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Update the counter element
    document.getElementById('counter').textContent =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Start updating the counter every second
setInterval(updateCounter, 1000);

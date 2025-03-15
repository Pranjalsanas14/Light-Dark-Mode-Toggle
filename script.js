// Get references to the toggle button and the body
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Check if dark mode was saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to \nLight Mode'; // Change button text to light mode
} else {
    body.classList.remove('dark-mode');
    toggleButton.textContent = 'Switch to \nDark Mode'; // Set the default to dark mode
}

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    
    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to \nLight Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Switch to \nDark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Function to toggle light/dark mode for the page
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark');

// Toggle circle color based on mode
const circle = document.querySelector('aside');
if (body.classList.contains('dark')) {
    circle.style.background ='var(--dark-accent)';
    } else {
        circle.style.background = 'var(--circle-color)';
    }

// Save mode preference to local storage
const mode = body.classList.contains('dark') ? 'dark' : 'light';
localStorage.setItem('mode', mode);
}

// TODO: Create functions to read and write from local storage

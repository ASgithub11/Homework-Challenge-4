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
// Function to apply initial mode based on local storage
function applySavedMode() {
    const savedMode = localStorage.getItem('mode');
    const circle = document.querySelector('aside');
  
    if (savedMode === 'dark') {
      document.body.classList.add('dark');
      circle.style.background = 'var(--dark-accent)';
    } else {
      document.body.classList.remove('dark');
      circle.style.backgroundClip = 'var(--circle-color)';
    }
  }
  
  // Event listener for toggling mode on click
  const toggleSwitch = document.getElementById('toggle');
  toggleSwitch.addEventListener('click', toggleMode);
  
  // Apply saved mode when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    formEl.addEventListener('submit', formSubmission);
    toggleSwitch.addEventListener('click', toggleMode);
    // Apply saved mode
    applySavedMode();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('back').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  
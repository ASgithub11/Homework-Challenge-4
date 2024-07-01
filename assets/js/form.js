// TODO: Create a variable that selects the form element
const formEl = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
  event.preventDefault();
  
  const username = formEl.elements.username.value.trim();
  const title = formEl.elements.title.value.trim();
  const content = formEl.elements.content.value.trim();
  
  if (!username || !title || !content) {
    alert('Please complete the form.');
    return;
  };

  // Create a blog post object
  const blogPost = {
    username: username,
    title: title,
    content: content
  };

  // Retrieve existing posts from local storage or initialize as empty array
  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
  // Add new post to the array
  existingPosts.push(blogPost);
  
  // Save updated posts back to local storage
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
  
  // Redirect to blog page
  redirectPage('blog.html');
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

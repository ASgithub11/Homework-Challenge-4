// TODO: Create a variable that selects the main element
const mainEl = document.getElementById('blogPosts');

// TODO: Create a function that builds an element and appends it to the DOM
function addBlogPost(username, title, content) {
    const article = document.createElement('article');
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = content;
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const footer= document.createElement('p');
    footer.textContent = `Posted by: ${username}`;
    
    article.appendChild(h2);
    article.appendChild(blockquote);
    article.appendChild(footer);
    mainEl.appendChild(article);
}

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts

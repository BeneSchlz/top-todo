function loadHomePage() {
    const content = document.getElementById('content');
  
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to The Fancy Restaurant';
  
    const description = document.createElement('p');
    description.textContent = 'Come enjoy the finest dining experience, where taste meets elegance. We offer a wide selection of gourmet dishes, all made with fresh, local ingredients.';
  
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/400';
    image.alt = 'Restaurant Image';
  
    // Append elements to content
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(image);
  }
  
  export { loadHomePage };
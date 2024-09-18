function loadContactPage() {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
  
    const description = document.createElement('p');
    description.textContent = 'We would love to hear from you!';
  
    const contactDetails = document.createElement('p');
    contactDetails.innerHTML = 'Email: contact@restaurant.com<br>Phone: (555) 123-4567';
  
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(contactDetails);
  }
  
  export { loadContactPage };
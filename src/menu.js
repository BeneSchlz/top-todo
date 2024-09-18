function loadMenuPage() {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
  
    const description = document.createElement('p');
    description.textContent = 'Check out our delicious menu items!';
    
    const list = document.createElement('ul');
    const items = ['Pizza', 'Pasta', 'Salad'];
    
    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(list);
  }
  
  export { loadMenuPage };
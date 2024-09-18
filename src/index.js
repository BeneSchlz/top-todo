
import './styles.css';
import { loadHomePage } from './homepage';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

// Function to clear the content div
function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clears all child elements inside #content
}

// Add event listeners for tab switching
function addEventListeners() {
  const homeButton = document.querySelector('button:nth-child(1)');
  const menuButton = document.querySelector('button:nth-child(2)');
  const contactButton = document.querySelector('button:nth-child(3)');

  homeButton.addEventListener('click', () => {
    clearContent();
    loadHomePage();
  });

  menuButton.addEventListener('click', () => {
    clearContent();
    loadMenuPage();
  });

  contactButton.addEventListener('click', () => {
    clearContent();
    loadContactPage();
  });
}

// Initialize the page with the homepage content and event listeners
function initializeSite() {
  loadHomePage();  // Load home page content on initial load
  addEventListeners();  // Set up event listeners for tab buttons
}

initializeSite(); // Start the site by calling the initialization function
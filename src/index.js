//import styles
import './assets/styles/reset.css';
import './assets/styles/fonts.css';
import './assets/styles/main.css';

//import reusable components
import HeaderComponent from './components/header.js';
import main from './components/main.js';
import FooterComponent from './components/footer.js';

//import helper functions
import { createEl, appendChildren } from './helpers';

//let currentPage
const contentEl = document.getElementById('content');
const heroEl = createEl('div', ['hero', 'hero-home']);
appendChildren(contentEl, [
    HeaderComponent.initialize(), //header
    heroEl,
    main,                         //main content
    FooterComponent.initialize()  //footer
]);
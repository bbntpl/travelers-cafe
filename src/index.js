//import styles
import './assets/styles/reset.css';
import './assets/styles/fonts.css';
import './assets/styles/main.css';

//import modules
import About from './modules/about.js';
import Contact from './modules/contact.js';
import Home from './modules/home.js';
import Menu from './modules/menu.js';

//import reusable components
import HeaderComponent from './components/header.js';
import main from './components/main.js';
import FooterComponent from './components/footer.js';

//import helper functions
import { createEl, appendChildren } from './helpers';

//let currentPage
const contentEl = document.getElementById('content');

appendChildren(contentEl, [
    HeaderComponent.initialize(), //header
    main,                         //main content
    FooterComponent.initialize()  //footer
]);
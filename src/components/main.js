import HomePage from '../modules/home.js';
import AboutPage from '../modules/about.js';
import MenuPage from '../modules/menu.js';
import ContactPage from '../modules/about.js';

import { createEl } from '../helpers';
const main = createEl('main', ['site__main', 'center']);
main.append(MenuPage.initialize());
export default main;
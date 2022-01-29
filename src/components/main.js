import HomePage from '../modules/home.js';
import AboutPage from '../modules/about.js';
import ContactPage from '../modules/contact.js';

import { createEl } from '../helpers';
const main = createEl('main', ['site__main', 'center']);
main.append(ContactPage.initialize());
export default main;
import main from '../components/main.js';
import AboutPage from '../modules/about.js';
import ContactPage from '../modules/contact.js';
import HomePage from '../modules/home.js';
import MenuPage from '../modules/menu.js';

const ModuleController = (() => {
    const _listOfModules = [
        {
            page: HomePage,
            name: 'home'
        },
        {
            page: AboutPage,
            name: 'about'
        },
        {
            page: MenuPage,
            name: 'menu'
        },
        {
            page: ContactPage,
            name: 'contact'
        },
    ]
    function _switchModule(index) {
        //remove all children of content element
        while (main.firstChild) {
            main.removeChild(main.lastChild)
        };
        const current = _listOfModules[index];
        main.append(current.page.initialize());

        //change hero background image
        const heroEl = document.querySelector('.hero');
        _listOfModules.forEach(obj => heroEl.classList.remove(`hero-${obj.name}`));
        heroEl.style.backgroundImage = heroEl.classList.add(`hero-${current.name}`);
    }
    const setCurrentModule = (index) => _switchModule(index);
    return { setCurrentModule }
})();

export default ModuleController;
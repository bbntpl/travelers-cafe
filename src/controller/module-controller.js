import main from '../components/main.js';
import AboutPage from '../modules/about.js';
import ContactPage from '../modules/contact.js';
import HomePage from '../modules/home.js';
import MenuPage from '../modules/menu.js';

const ModuleController = (() => {
    const _listOfModules = [
        {
            page: HomePage,
            bgImage: '../assets/images/heroes_home.jpg'
        },
        {
            page: AboutPage,
            bgImage: '../assets/images/heroes_about.jpg'
        },
        {
            page: MenuPage,
            bgImage: '../assets/images/heroes_home.jpg'
        },
        {
            page: ContactPage,
            bgImage: '../assets/images/heroes_contact.jpg'
        },
    ]
    function _switchModule(index) {
        //remove all children of content element
        if (!!main.firstChild === true) {
            while (main.firstChild) {
                main.removeChild(main.lastChild)
            };
        }
        const current = _listOfModules[index];
        main.append(current.page.initialize());
    }
    const setCurrentModule = (index) => _switchModule(index);
    return { setCurrentModule }
})();

export default ModuleController;
import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

//import module contoller 
import ModuleController from '../controller/module-controller';

const HeaderComponent = (() => {
    //texts to be used for nav buttons
    const { order ,call, reservations } = data.nav.buttons;

    //texts/classes to be used for nav menu
    const navItems = ['home', 'about', 'menu', 'contact'];
    const socialLinks = ['facebook', 'instagram', 'twitter', 'google'];

    //creating instances of elements
    const _createLogo = () => {
        const logoDiv = createEl('div', ['logo-wrapper', 'o-wrapper']);
        const logoText = createEl('h1', 'logo-text', data.logo.text);
        logoDiv.append(logoText);
        return logoDiv;
    }
    
    //switch to active style when user click a nav btn
    const _activePage = (e, nthOfModule) => {
        e.preventDefault();
        if(e.target.classList.contains('active')) return;
        ModuleController.setCurrentModule(nthOfModule);
        const navMenuItems = document.querySelectorAll('.nav-menu .nav-link');
        const isClassExists = (el, className) => el.classList.contains(className);
        navMenuItems.forEach(e => isClassExists(e, 'active') ? e.classList.remove('active') : null);
        e.target.classList.add('active');
    }
    const _createNavMenu = (el, navItems) => {
        navItems.forEach((txt, i) => {
            const item = createEl('li', 'nav-item');
            const link = createEl('a', ['nav-link','center'], data.nav.menu[txt]);

            //add active style to the first child as it is the default page
            if(!i) {
                link.classList.add('active');
            }
            el.append(item);
            item.append(link);
            link.addEventListener('click', (e) => _activePage(e, i), false);
        });
    }
    const _createSocialLinks = (el, navItems) => {
        navItems.forEach(name => {
            const item = createEl('li', ['nav-item', 'center']);
            const link = createEl('img', ['nav-link', `${name}-icon`]);
            el.append(item);
            item.append(link);
        });
    }
    const _createNav = () => {
        const navContainer = createEl('div', ['nav-container', 'o-wrapper']);

        //children of Nav Container
        const navList = createEl('nav', 'nav-list')
        const leftNavBtns = createEl('div', 'nav-btns');
        const rightNavBtns = createEl('div', 'nav-btns');
        const primaryNavMenu = createEl('ul', ['nav-menu', 'center']);
        const socialMediaLinks = createEl('ul', ['sm-links', 'center']);

        //children of Left Nav Btns
        const orderBtn = createEl('button', 'primary-btn', order);
        const callUsBtn = createEl('button', 'primary-btn', call);
        const reservationsBtn = createEl('button', 'primary-btn', reservations);

        //attach children nodes to the rightful parent
        appendChildren(navContainer, [leftNavBtns, navList, rightNavBtns]);
        appendChildren(leftNavBtns, [orderBtn, callUsBtn]);
        appendChildren(navList, [primaryNavMenu, socialMediaLinks]);

        //children nodes of nav menus
        _createNavMenu(primaryNavMenu, navItems);
        _createSocialLinks(socialMediaLinks, socialLinks)
        rightNavBtns.append(reservationsBtn);

        return navContainer;
    }
    const initialize = () => {
        const headerDiv = createEl('div', ['site__header', 'center']);
        const headerInnerDiv = createEl('header', ['header-inner', 'center']);
        const navInnerDiv = createEl('div', ['nav-inner', 'center']);
        appendChildren(headerDiv, [headerInnerDiv, navInnerDiv]);
        headerInnerDiv.append(_createLogo());
        navInnerDiv.append(_createNav());
        return headerDiv;
    }
    return { initialize }
})();
export default HeaderComponent;
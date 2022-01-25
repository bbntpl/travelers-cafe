import { createEl, appendChildren } from '../helpers';

import data from '../database/data.yaml';

const HeaderComponent = (() => {
    //texts to be used
    const navItems = ['about', 'menu', 'gallery', 'contact'];
    const socialLinks = ['facebook', 'instagram', 'twitter', 'google'];

    //creating instances of elements
    const _createLogo = () => {
        const logoDiv = createEl('div', ['logo-wrapper', 'o-wrapper']);
        const logoText = createEl('h1', 'logo-text', data.logo.text);
        logoDiv.append(logoText);
        return logoDiv;
    }

    const _createNavMenu = (el, navItems) => {
        const homeIconItem = createEl('li', ['nav-item', 'center']);
        const homeIcon = createEl('img', ['nav-link', 'home-icon']);
        el.append(homeIconItem);
        homeIconItem.append(homeIcon);
        navItems.forEach(txt => {
            const item = createEl('li', ['nav-item', 'center']);
            const link = createEl('a', 'nav-link', data.nav[txt]);
            el.append(item);
            item.append(link);
        });
    }

    const _createSocialLink = (el, navItems) => {
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
        const orderBtn = createEl('button', ['primary-btn', 'border-width-2px'], 'Pedir');
        const callUsBtn = createEl('button', ['primary-btn', 'border-width-2px'], 'Llamenos');
        const reservationsBtn = createEl('button', ['primary-btn', 'border-width-2px'], 'Reservaciones');

        //attach children nodes to the rightful parent
        appendChildren(navContainer, [leftNavBtns, navList, rightNavBtns]);
        appendChildren(leftNavBtns, [orderBtn, callUsBtn]);
        appendChildren(navList, [primaryNavMenu, socialMediaLinks]);

        _createNavMenu(primaryNavMenu, navItems);
        _createSocialLink(socialMediaLinks, socialLinks)
        rightNavBtns.append(reservationsBtn);

        return navContainer;
    }

    const initialize = () => {
        //create elements
        const headerDiv = createEl('div', ['site__header']);
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
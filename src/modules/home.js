import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const HomePage = (() => {
    const { primary, secondary, buttons } = data.home.hero;

    //create elements
    const _createHomeBtns = () => {
        const homeBtnsContainer = createEl('div', 'btn-container');
        const menuBtn
            = createEl('button', ['primary-btn--large', 'hero-btn-menu'], buttons.menu);
        const reservationBtn
            = createEl('button', ['primary-btn--large', 'hero-btn-reservations'], buttons.reservations);
        appendChildren(homeBtnsContainer, [menuBtn, reservationBtn]);
        return homeBtnsContainer;
    }
    const _createHomeIntroTexts = () => {
        const introTextContainer = createEl('article', 'intro-text-container');
        const primaryTxt = createEl('h1', 'primary-txt', primary);
        const secondaryTxt = createEl('p', 'secondary-txt', secondary);
        appendChildren(introTextContainer, [primaryTxt, secondaryTxt]);
        return introTextContainer;
    }
    const _createHeroContent = () => {
        const homeInner = createEl('div', 'home-inner');
        const heroContentContainer = createEl('section', ['hero-content']);
        homeInner.append(heroContentContainer);
        heroContentContainer.append(_createHomeIntroTexts(), _createHomeBtns());
        return homeInner;
    }
    const initialize = () => {
        const home = createEl('div', ['module__home-page', 'o-wrapper']);
        const darkOverlay = createEl('div', 'low-dark-opacity-overlay');
        appendChildren(home, [darkOverlay, _createHeroContent()]);
        return home;
    }
    return { initialize }
})();

export default HomePage;
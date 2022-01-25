import { createElWithClass } from '../helpers';

import data from '../database/data.yaml';

const createLogo = () => {
    const logoDiv = createElWithClass('div', 'logo-wrapper');
    const logoText = createElWithClass('h1', 'logo-text', data.logo.text);
    logoDiv.append(logoText);
    return logoDiv;
}

const createNav = () => {

}

const headerComponent = () => {
    //create elements
    const headerDiv = document.createElement('div');
    const oWrapper = document.createElement('div');
    const headerInnerDiv = document.createElement('div');


    const navContainer = document.createElement('div');
    const leftNavBtns = document.createElement('div');
    const nav = document.createElement('nav');


    headerDiv.append(oWrapper);
    oWrapper.append(headerInnerDiv);
    headerInnerDiv.append(logoDiv);
    headerInnerDiv.append(navContainer)

    logoDiv.append(logoText);

    navContainer.append(leftNavBtns);
    navContainer.append(mainNav);
    navContainer.append(rightNavBtns);

    return headerDiv;
}

export default headerComponent;
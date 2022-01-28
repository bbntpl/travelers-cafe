import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const AboutModule = (() => {
    //texts to be used for about content
    const about = data.about.about;
    const journey = data.about.journey;

    //create elements
    const _createAboutUs = () => {
        const aboutWrapperEl = createEl('div', ['about-wrapper', 'o-wrapper']);
        const contentWrapper = createEl('div', ['about-content-wrapper', 'center']);
        const contentContainer = createEl('div', 'about-content-container');

        const contentInfo = createEl('section', 'about-content-info');
        const contentHeader = createEl('h1', 'about-content-header', about.header);
        const contentTxt = createEl('p', 'about-content-txt', about.para);

        const aboutImages = createEl('section', 'about-content-images');
        const aboutOwnerImgWrapper = createEl('div', 'about-owner-wrapper');
        const aboutManImg = createEl('div', 'about-owner');
        const aboutCafeImgWrapper = createEl('div', 'about-cafe-wrapper');
        const aboutCafeImg = createEl('div', 'about-cafe');

        aboutWrapperEl.append(contentWrapper);
        contentWrapper.append(contentContainer);
        appendChildren(contentContainer, [contentInfo, aboutImages]);
        appendChildren(contentInfo, [contentHeader, contentTxt]);
        aboutOwnerImgWrapper.append(aboutManImg);
        aboutCafeImgWrapper.append(aboutCafeImg);
        appendChildren(aboutImages, [aboutOwnerImgWrapper, aboutCafeImgWrapper]);

        return aboutWrapperEl;
    }
    const _createOurJourney = () => {
        const ourJourneyEl = createEl('div', ['journey-wrapper', 'center']);
        const oWrapper = createEl('div', 'o-wrapper');
        const ourJourneyContainer = createEl('div', 'journey-content-container');
        const journeyImgWrapper = createEl('div', 'journey-img-wrapper');
        const journeyImg = createEl('div', 'journey-content-img');
        const journeyHeader = createEl('h1', 'journey-content-header', journey.header);
        const journeyTxt = createEl('p', 'journey-content-txt', journey.para);
        ourJourneyEl.append(oWrapper);
        oWrapper.append(ourJourneyContainer);
        journeyImgWrapper.append(journeyImg);
        appendChildren(ourJourneyContainer, [journeyImgWrapper, journeyHeader, journeyTxt]);
        return ourJourneyEl;
    }
    const initialize = () => {
        const about = createEl('div', 'module__about-page');
        appendChildren(about, [_createAboutUs(), _createOurJourney()]);
        return about;
    }
    return { initialize }
})();

export default AboutModule;
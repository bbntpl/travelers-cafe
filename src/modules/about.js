import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const AboutModule = (() => {
    const _createAboutUs = () => {
        const aboutWrapperEl = createEl('div', 'about-wrapper');
        const aboutContentContainer = createEl('div', 'about-contents');
        return aboutWrapperEl;
    }
    const _createOurJourney = () => {
        const ourJourneyEl = createEl('div', 'journey-wrapper');
        return ourJourneyEl;
    }
    const initialize = () => {
        const about = createEl('div', ['module__about-page', 'o-wrapper']);
        appendChildren(about, [_createAboutUs(), _createOurJourney()]);
        return about;
    }
    return { initialize }
})();

export default AboutModule;
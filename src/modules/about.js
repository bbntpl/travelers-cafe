import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const AboutModule = (() => {
    const initialize = () => {
        const about = createEl('div', 'site__home-page', 'This is about');
        return about;
    }
    return { initialize }
})();

export default AboutModule;
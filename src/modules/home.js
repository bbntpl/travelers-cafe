import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const HomePage = (() => {
    const createHeroOverlay = () => {
        
    }
    const initialize = () => {
        const home = createEl('div', 'site__home-page', 'This is home');
        return home;
    }
    return { initialize }
})();

export default HomePage;
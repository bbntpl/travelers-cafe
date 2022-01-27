import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const MenuPage = (() => {
    const initialize = () => {
        const menu = createEl('div', 'site__home-page', 'This is menu');
        return menu;
    }
    return { initialize }
})();

export default MenuPage;
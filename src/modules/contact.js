import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const ContactPage = (() => {
    const initialize = () => {
        const contact = createEl('div', 'site__home-page', 'This is contact');
        return contact;
    }
    return { initialize }
})();

export default ContactPage;
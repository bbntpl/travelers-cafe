import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const FooterComponent = (() => {
    const _contacts = [
        {
            icon: 'phone-icon',
            text: data.contacts.tel,
            src: 'phone.svg'
        }, 
        {
            icon: 'email-icon',
            text: data.contacts.email,
            src: 'email.svg'
        },
        {
            icon: 'location-icon',
            text: data.contacts.location,
            src: 'location.svg'
        }
    ]
    const _iterateContacts = (el, data) => {
        data.forEach((c) => {
            const contactItem = createEl('dl', 'contact-item');
            const iconWrapper = createEl('dd', 'contact-icon');
            const icon = createEl('img', [c.icon, 'borderless-img']);
            const text = createEl('dt', 'contact-text', c.text);
            el.append(contactItem);
            iconWrapper.append(icon);
            appendChildren(contactItem, [iconWrapper, text]);
        });
    }
    const _createInlineContacts = () => {
        const footerContacts = createEl('div', 'footer-contacts');
        _iterateContacts(footerContacts, _contacts);
        return footerContacts;
    }
    const _createCopyright = () => {
        const footerCopyright = createEl('p', 'copyright');
        const linkToGithub = createEl('a', 'github-link', data.footer.copyright);
        linkToGithub.src = 'https://github.com/bvrbryn445';
        footerCopyright.append(linkToGithub);
        return footerCopyright;
    }
    const initialize = () => {
        const footer = createEl('footer', 'footer');
        const footerInner = createEl('footer', ['footer-inner', 'o-wrapper']);
        footer.append(footerInner);
        appendChildren(footerInner, [_createInlineContacts(), _createCopyright()]);
        return footer;
    }
    return { initialize }
})()

export default FooterComponent;
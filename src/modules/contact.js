import { createEl, appendChildren } from '../helpers';
import data from '../database/data.yaml';

const ContactPage = (() => {
    const contactInputPlaceholders = data.contacts.form;

    //create header of contact page
    const _createHeader = () => {
        const headerWrapper
            = createEl('div', ['contact__header-wrapper', 'o-wrapper', 'center']);
        const contactHeader = createEl('h1', 'contact__header', data.contacts.header);
        headerWrapper.append(contactHeader);
        return headerWrapper;
    }
    //create contact form
    const _createContactForm = () => {
        const contactForm = createEl('form', ['contact__form', 'o-wrapper']);
        const formHeader = createEl('label', 'contact-form__header', data.contacts.label);
        const inputHolders = createEl('div', 'contact-form__input-holders');
        appendChildren(contactForm, [formHeader, inputHolders]);
        contactInputPlaceholders.forEach(ph => {
            const input = createEl('input', 'contact-form__inputs');
            input.placeholder = ph;
            inputHolders.append(input);
        });
        const contactSendBtnWrapper = createEl('div', 'contact-form__send-btn-wrapper');
        const contactSendBtn = createEl('input', ['contact-form__send-btn', 'primary']);
        contactForm.append(contactSendBtnWrapper);
        contactSendBtnWrapper.append(contactSendBtn);
        contactSendBtn.type = 'button';
        contactSendBtn.value = 'Enviar';
        return contactForm;
    }

    //create element that display contacts
    const _createContactList = () => {
        const contacts = data.contacts;
        const contactListWrapper = createEl('div', 'contact__list');
        const contactListImgWrapper = createEl('div', 'contact-list__img-wrapper');
        const contactListImg = createEl('img', 'contact-list__img')
        const contactBox = createEl('div', 'contact-list__contacts');
        const contactListHeader = createEl('h5', 'contact-list__header', contacts.header);
        const contactList = createEl('div', 'contact-list__info-container');
        const contactLocation = createEl('p', 'contact-list__info', `Ubicación: ${contacts.location} `);
        const contactTel = createEl('p', 'contact-list__info', `Tel: ${contacts.tel} `);
        const contactFax = createEl('p', 'contact-list__info', `Fax: ${contacts.fax} `);
        const contactEmail = createEl('p', 'contact-list__info', `Correo electrónico: ${contacts.email} `);
        
        contactListImgWrapper.append(contactListImg);
        appendChildren(contactListWrapper, [contactListImgWrapper, contactBox]);
        appendChildren(contactBox, [contactListHeader, contactList]);
        appendChildren(contactList, [contactLocation, contactTel, contactFax, contactEmail]);
        appendChildren(contactListWrapper, [contactListImgWrapper, contactBox]);
        return contactListWrapper;
    }
    const initialize = () => {
        const contact = createEl('div', 'module__contact-page');
        const contactMain = createEl('div', 'contact__main');
        appendChildren(contactMain, [_createContactForm(), _createContactList()]);
        appendChildren(contact, [_createHeader(), contactMain]);
        return contact;
    }
    return { initialize }
})();

export default ContactPage;
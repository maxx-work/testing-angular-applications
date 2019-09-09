import { ContactsComponent } from './contacts.component';
import { Contact } from './shared/models';

describe('ContactsComponent tests', () => {
    let contactsComponent: ContactsComponent = null;

    beforeEach(() => {
        contactsComponent = new ContactsComponent();
    });

    it('should set instance correctly', () => {
        expect(contactsComponent).not.toBeNull();
    });

    it('should be no contacts if there is no data', () => {
        expect(contactsComponent.contacts.length).toBe(0);
    });

    it('should be contacts if there is data', () => {
        const newContact: Contact = {
            id: 1,
            name: 'Jason Pipmaker'
        };
        const contactList: Array<Contact> = [newContact];
        contactsComponent.contacts = contactList;
        expect(contactsComponent.contacts.length).toBe(1);
    });
});

import ContactClass from './contact';

describe('Contact class tests', () => {
    let contact: ContactClass = null;

    beforeEach(() => {
        contact = new ContactClass();
    });

    afterEach(() => {
        contact = null;
    });

    it('should have a valid constructor', () => {
        expect(contact).not.toBeNull();
    });

    it('should set name correctly through constructor', () => {
        contact = new ContactClass('Liz');
        expect(contact.name).toEqual('Liz');
    });

    it('should get and set id correctly', () => {
        contact.id = 1;
        expect(contact.id).toEqual(1);
    });

    it('should get and set name correctly', () => {
        contact.name = 'Liz';
        expect(contact.name).toEqual('Liz');
    });

    it('should get and set name correctly', () => {
        contact.country = 'USA';
        expect(contact.country).toEqual('USA');
    });

    it('should get and set name correctly', () => {
        contact.email = '1@2.com';
        expect(contact.email).toEqual('1@2.com');
    });

    it('should get and set name correctly', () => {
        contact.favorite = true;
        expect(contact.favorite).toEqual(true);
    });

    it('should get and set name correctly', () => {
        contact.number = '1234567890';
        expect(contact.number).toEqual('1234567890');
    });
});

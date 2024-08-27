import getAllContacts from './getAllContacts.js';

export const countContacts = async () => {
    const contactsList = await getAllContacts();
    return contactsList.length;
};

console.log(await countContacts());

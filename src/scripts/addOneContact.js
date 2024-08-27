import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';

export const addOneContact = async () => {
    const contactsList = await getAllContacts();
    const newContact = createFakeContact();
    const newContactsList = [...contactsList, newContact];

    await fs.writeFile(PATH_DB, JSON.stringify(newContactsList, null, 2))
};

addOneContact();

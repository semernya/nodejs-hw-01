import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import getAllContacts from './getAllContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const contactsList = await getAllContacts();
    const newContactsList = Array(number).fill(0).map(() => createFakeContact());
    const data = [...contactsList, ...newContactsList];

    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
};

generateContacts(3);

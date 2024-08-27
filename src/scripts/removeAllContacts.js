import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
};

removeAllContacts();

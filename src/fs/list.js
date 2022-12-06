import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        const list = await readdir(resolve(__dirname, 'files'));
        console.log(list);
    } catch (e) {
        throw new Error('FS operation failed');
    }

};

await list();
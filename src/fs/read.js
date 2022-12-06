import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const read = async () => {
    try {
        const rootPath = (file) => resolve(__dirname, 'files', file);
        const file = await readFile(rootPath('fileToRead.txt'), { encoding: 'utf-8' });
        console.log(file);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await read();
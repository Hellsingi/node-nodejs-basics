import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


const remove = async () => {
    const rootPath = (file) => resolve(__dirname, 'files', file);
    try {
        await rm(rootPath('fileToRemove.txt'));
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await remove();
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const rootPath = (file) => resolve(__dirname, 'files', file);
    try {
        await fs.rename(rootPath('wrongFilename.txt'), rootPath('properFilename.md'));
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();
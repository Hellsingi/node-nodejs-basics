import { stat, writeFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const rootPath = resolve(__dirname, 'files', 'fresh.txt');
    stat(rootPath, (err) => {
        if (err) {
            writeFile(rootPath, 'I am fresh and young', (err) => { });
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await create();
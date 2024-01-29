import { copyFile, mkdir, readdir } from 'fs/promises';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const copy = async () => {
    const rootPath = resolve(__dirname, 'files');
    const copyFiles = resolve(__dirname, 'files_copy');

    try {
        await readdir(rootPath);
        await mkdir(copyFiles);
        const data = await readdir(rootPath);
        for await (const item of data) {
            copyFile(resolve(rootPath, item), resolve(copyFiles, item));
        }
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await copy();
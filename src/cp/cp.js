import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout, stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const script = resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [script, ...args]);

    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

spawnChildProcess(['--argument1', '--argument2', '--argument3']);
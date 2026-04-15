import { cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(currentDir, '..');
const sourceFile = resolve(rootDir, 'src/styles/grid.scss');
const targetFile = resolve(rootDir, 'dist/grid.scss');

await mkdir(dirname(targetFile), { recursive: true });
await cp(sourceFile, targetFile);

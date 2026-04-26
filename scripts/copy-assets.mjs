import { cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(currentDir, '..');
const stylesDir = resolve(rootDir, 'src/styles');
const distDir = resolve(rootDir, 'dist');

await mkdir(distDir, { recursive: true });
await cp(stylesDir, distDir, { recursive: true });

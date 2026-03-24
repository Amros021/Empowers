/**
 * clean-dist.mjs
 *
 * Verwijdert de inhoud van de dist/ map vóór een nieuwe build,
 * maar slaat .DS_Store bestanden over (EPERM op macOS-volumes).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

function cleanDir(dirPath, isRoot = false) {
    if (!fs.existsSync(dirPath)) return;

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        // Sla .DS_Store altijd over (EPERM op macOS-volumes)
        if (entry.name === '.DS_Store') continue;

        try {
            if (entry.isDirectory()) {
                fs.rmSync(fullPath, { recursive: true, force: true });
            } else {
                fs.unlinkSync(fullPath);
            }
        } catch {
            // Negeer permissiefouten voor individuele bestanden
        }
    }
}

cleanDir(distPath, true);
console.log('🧹 dist/ geleegd (behalve .DS_Store bestanden)');

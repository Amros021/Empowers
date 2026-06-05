/**
 * generate-app-ssr.mjs
 *
 * Genereert src/App.ssr.jsx vanuit src/App.jsx door alle React.lazy() imports
 * te vervangen door gewone statische imports. Dit is nodig omdat renderToString
 * (gebruikt in de pre-render stap) niet werkt met React.lazy.
 *
 * De client-side App.jsx behoudt React.lazy voor code splitting.
 * De server-side App.ssr.jsx gebruikt statische imports voor pre-rendering.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(__dirname, 'src/App.jsx');
const ssrPath = resolve(__dirname, 'src/App.ssr.jsx');

let content = readFileSync(appPath, 'utf-8');

// Replace: const BlogPostXxx = React.lazy(() => import('./pages/BlogPostXxx'));
// With:    import BlogPostXxx from './pages/BlogPostXxx';
const lazyImports = [];
content = content.replace(
    /^const (\w+) = React\.lazy\(\(\) => import\('([^']+)'\)\);$/gm,
    (match, name, path) => {
        lazyImports.push(name);
        return `import ${name} from '${path}';`;
    }
);

// Remove the React/Suspense import if we added it, and restore simpler import
content = content.replace(
    "import React, { Suspense } from 'react';",
    "import { useEffect } from 'react';"
);

// Remove the separate useEffect import if it exists (now included above)
content = content.replace(
    /^import \{ useEffect \} from 'react';\nimport \{ useEffect \} from 'react';$/gm,
    "import { useEffect } from 'react';"
);

// Remove duplicate useEffect import
const lines = content.split('\n');
let seenUseEffect = false;
const filteredLines = lines.filter(line => {
    if (line.trim() === "import { useEffect } from 'react';") {
        if (seenUseEffect) return false;
        seenUseEffect = true;
    }
    return true;
});
content = filteredLines.join('\n');

// Remove Suspense wrapper
content = content.replace(
    /<Suspense fallback=\{<div className="min-h-screen bg-background" \/>\}>\s*\n\s*/g,
    ''
);
content = content.replace(
    /\s*<\/Suspense>/g,
    ''
);

// Remove React. references that are no longer needed
content = content.replace(/React\.lazy/g, 'lazy');

writeFileSync(ssrPath, content, 'utf-8');

console.log(`✅ App.ssr.jsx gegenereerd met ${lazyImports.length} statische imports`);

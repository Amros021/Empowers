import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    '/',
    '/diensten',
    '/over-ons',
    '/nieuws',
    '/faq',
    '/contact',
    '/blog/waarom-meta-ads-niet-converteren',
    '/blog/wat-is-geo-generative-engine-optimization',
    '/blog/tiktok-ads-voor-bedrijven',
    '/blog/marketing-tracking-conversies-meten'
];

async function prerender() {
    const distPath = path.join(__dirname, 'dist');
    const serverDistPath = path.join(__dirname, 'dist/server');

    // Read the original empty shell before we start overwriting it
    const indexShellPath = path.join(distPath, 'index.html');
    const indexShellHtml = fs.readFileSync(indexShellPath, 'utf-8');

    // Import server render function
    const { render } = await import(path.join(serverDistPath, 'entry-server.js'));

    console.log('Generating pre-rendered HTML via SSR...');

    for (const route of routes) {
        console.log(`Prerendering ${route}...`);

        const { html: appHtmlRaw, helmet } = render(route);
        console.log('appHtml length:', appHtmlRaw.length);
        console.log('appHtml excerpt:', appHtmlRaw.substring(0, 100));

        const extractedTags = [];

        let appHtml = appHtmlRaw;

        // Extract and remove tags from the body so they can be securely placed in the <head>
        appHtml = appHtml.replace(/<title[^>]*>.*?<\/title>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<meta[^>]*>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<link[^>]*rel="canonical"[^>]*>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<link[^>]*rel="preload"[^>]*>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gis, match => { extractedTags.push(match); return ''; });

        const headTags = [
            helmet?.title?.toString() || '',
            helmet?.priority?.toString() || '',
            helmet?.meta?.toString() || '',
            helmet?.link?.toString() || '',
            helmet?.script?.toString() || '',
            ...extractedTags
        ].filter(Boolean).join('\n');

        const html = indexShellHtml
            .replace(/<!--head-tags-->/g, headTags)
            .replace(/<!--app-html-->/g, appHtml);

        const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
        const fullPath = path.join(distPath, routePath);

        // Ensure directory exists
        fs.mkdirSync(path.dirname(fullPath), { recursive: true });

        // Write the pre-rendered HTML file
        fs.writeFileSync(fullPath, html);
    }

    // Clean up server build as it's not needed for production hosting
    fs.rmSync(serverDistPath, { recursive: true, force: true });

    console.log('Pre-rendering complete.');
}

prerender().catch(console.error);

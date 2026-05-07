import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── BLOG CATEGORIEËN ───────────────────────────────────────────────────────
// Moet overeenkomen met CATEGORY_CONFIG in BlogCategory.jsx
const BLOG_CATEGORIES = [
    '/blogs/seo',
    '/blogs/geo',
    '/blogs/google-ads',
    '/blogs/social-ads',
    '/blogs/ai-ads',
    '/blogs/tracking',
    '/blogs/strategie',
    '/blogs/algemeen',
];

// ─── BLOG ARTIKELEN (automatisch uit articles.js) ───────────────────────────
function getBlogRoutes() {
    const filePath = path.resolve(__dirname, 'src/data/articles.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatches = [...content.matchAll(/slug:\s+['"]([^'"]+)['"]/g)];
    return slugMatches.map(m => m[1]);
}

// ─── ALLE ROUTES ────────────────────────────────────────────────────────────
const staticRoutes = [
    // Core
    '/',
    '/diensten',
    '/over-ons',
    '/nieuws',
    '/faq',
    '/contact',
    // Diensten
    '/google-ads',
    '/meta-ads',
    '/linkedin-ads',
    '/tiktok-ads',
    '/seo',
    '/geo',
    '/landingspagina',
];

const routes = [
    ...staticRoutes,
    ...BLOG_CATEGORIES,
    ...getBlogRoutes(),
];

// ─── PRERENDER ──────────────────────────────────────────────────────────────
async function prerender() {
    const distPath = path.join(__dirname, 'dist');
    const serverDistPath = path.join(__dirname, 'dist/server');

    const indexShellPath = path.join(distPath, 'index.html');
    const indexShellHtml = fs.readFileSync(indexShellPath, 'utf-8');

    const { render } = await import(path.join(serverDistPath, 'entry-server.js'));

    console.log(`\nPre-rendering ${routes.length} routes...`);

    for (const route of routes) {
        console.log(`  → ${route}`);

        const { html: appHtmlRaw, helmet } = render(route);

        const extractedTags = [];
        let appHtml = appHtmlRaw;

        appHtml = appHtml.replace(/<title[^>]*>.*?<\/title>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<meta[^>]*>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<link[^>]*rel="canonical"[^>]*>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<link[^>]*rel="preload"[^>]*>/gis, match => { extractedTags.push(match); return ''; });
        appHtml = appHtml.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gis, match => { extractedTags.push(match); return ''; });

        // extractedTags bevat al title/meta/link/script vanuit de rendered HTML.
        // helmet.* zou dezelfde tags opleveren → duplicaten. We gebruiken ALLEEN extractedTags.
        // Title krijgt speciale behandeling: og:title als fallback voor lege/ontbrekende titel.

        const extractedTitle = extractedTags.find(t => /<title/i.test(t)) || '';
        const hasEmptyTitle = !extractedTitle || /<title[^>]*>\s*<\/title>/i.test(extractedTitle);
        let titleTag = extractedTitle;

        if (hasEmptyTitle) {
            // Zoek og:title als fallback (voor categoriepagina's met dynamische title)
            const allMetaTags = extractedTags.join('\n');
            const ogTitleMatch = allMetaTags.match(/property=["']og:title["'][^>]*content=["']([^"']+)["']/i)
                || allMetaTags.match(/content=["']([^"']+)["'][^>]*property=["']og:title["']/i);
            if (ogTitleMatch) {
                titleTag = `<title>${ogTitleMatch[1]}</title>`;
            }
        }

        // Voeg data-rh="true" toe zodat react-helmet-async bij hydration
        // de server-rendered tags herkent en niet opnieuw toevoegt.
        const addRh = (s) => s
            .replace(/<(title|meta|link|script)(\s)/g, '<$1 data-rh="true"$2')
            .replace(/<(title|meta|link|script)>/g, '<$1 data-rh="true">');

        // Bouw headTags: title eenmalig (met fallback), rest uit extractedTags (geen duplicaten via helmet.*)
        const nonTitleTags = extractedTags.filter(t => !/<title/i.test(t));
        const headTags = [
            addRh(titleTag),
            ...nonTitleTags.map(addRh)
        ].filter(Boolean).join('\n');

        const html = indexShellHtml
            .replace(/<!--head-tags-->/g, headTags)
            .replace(/<!--app-html-->/g, appHtml);

        const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
        const fullPath = path.join(distPath, routePath);

        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
        fs.writeFileSync(fullPath, html);
    }

    try {
        fs.rmSync(serverDistPath, { recursive: true, force: true });
    } catch {
        // .DS_Store bestanden kunnen EPERM geven op macOS — negeer dit
    }

    console.log(`\n✅ Pre-rendering klaar: ${routes.length} pagina's`);
    console.log(`   ${staticRoutes.length} vaste pagina's`);
    console.log(`   ${BLOG_CATEGORIES.length} categoriepagina's`);
    console.log(`   ${getBlogRoutes().length} blogsartikelen`);
}

prerender().catch(console.error);

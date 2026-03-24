/**
 * generate-sitemap.mjs
 *
 * Genereert automatisch public/sitemap.xml op basis van:
 *   - Vaste pagina's (handmatig bijhouden hier)
 *   - src/data/articles.js (blogs — automatisch)
 *
 * Gebruik: node generate-sitemap.mjs
 * Of automatisch via: npm run build (zie package.json)
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.empowers.nl';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// ─── 1. VASTE PAGINA'S ──────────────────────────────────────────────────────
// Voeg hier nieuwe vaste pagina's toe als je ze aanmaakt
const STATIC_PAGES = [
    // Core
    { path: '/',             changefreq: 'weekly',  priority: '1.0' },
    { path: '/diensten',     changefreq: 'monthly', priority: '0.8' },
    { path: '/over-ons',     changefreq: 'monthly', priority: '0.8' },
    { path: '/nieuws',       changefreq: 'weekly',  priority: '0.8' },
    { path: '/faq',          changefreq: 'monthly', priority: '0.7' },
    { path: '/contact',      changefreq: 'monthly', priority: '0.8' },
    // Diensten
    { path: '/google-ads',   changefreq: 'monthly', priority: '0.9' },
    { path: '/meta-ads',     changefreq: 'monthly', priority: '0.9' },
    { path: '/linkedin-ads', changefreq: 'monthly', priority: '0.9' },
    { path: '/tiktok-ads',   changefreq: 'monthly', priority: '0.9' },
    { path: '/seo',          changefreq: 'monthly', priority: '0.9' },
    { path: '/geo',          changefreq: 'monthly', priority: '0.9' },
    { path: '/landingspagina', changefreq: 'monthly', priority: '0.9' },
];

// ─── 2. BLOG CATEGORIEËN ────────────────────────────────────────────────────
// Moet overeenkomen met de slugs in BlogCategory.jsx CATEGORY_CONFIG
const BLOG_CATEGORIES = [
    'seo', 'geo', 'google-ads', 'social-ads', 'tracking', 'strategie', 'algemeen',
];

// ─── 3. BLOG ARTIKELEN (automatisch uit articles.js) ───────────────────────
// articles.js gebruikt ES module export — we lezen het als tekst en parsen de slugs
function extractArticlesFromFile() {
    const filePath = resolve(__dirname, 'src/data/articles.js');
    const content = readFileSync(filePath, 'utf-8');

    // Haal alle slug + dateTs waarden op via regex
    const slugMatches = [...content.matchAll(/slug:\s+['"]([^'"]+)['"]/g)];
    const dateMatches = [...content.matchAll(/dateTs:\s+new Date\(['"]([^'"]+)['"]\)/g)];

    return slugMatches.map((m, i) => ({
        slug: m[1],
        date: dateMatches[i] ? dateMatches[i][1] : TODAY,
    }));
}

// ─── 4. GENEREER XML ────────────────────────────────────────────────────────
function buildUrl(loc, lastmod, changefreq, priority) {
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const articles = extractArticlesFromFile();

const urlBlocks = [
    `\n  <!-- CORE PAGINA'S -->`,
    ...STATIC_PAGES.slice(0, 6).map(p =>
        buildUrl(`${BASE_URL}${p.path}`, TODAY, p.changefreq, p.priority)
    ),

    `\n  <!-- DIENSTEN PAGINA'S -->`,
    ...STATIC_PAGES.slice(6).map(p =>
        buildUrl(`${BASE_URL}${p.path}`, TODAY, p.changefreq, p.priority)
    ),

    `\n  <!-- BLOG CATEGORIE PAGINA'S -->`,
    ...BLOG_CATEGORIES.map(cat =>
        buildUrl(`${BASE_URL}/blogs/${cat}`, TODAY, 'weekly', '0.8')
    ),

    `\n  <!-- BLOG ARTIKELEN -->`,
    ...articles.map(a =>
        buildUrl(`${BASE_URL}${a.slug}`, a.date.split('T')[0], 'monthly', '0.7')
    ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks.join('\n')}

</urlset>
`;

const outputPath = resolve(__dirname, 'public/sitemap.xml');
writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Sitemap gegenereerd: ${outputPath}`);
console.log(`   ${STATIC_PAGES.length} vaste pagina's`);
console.log(`   ${BLOG_CATEGORIES.length} categoriepagina's`);
console.log(`   ${articles.length} blogarikelen`);
console.log(`   Totaal: ${STATIC_PAGES.length + BLOG_CATEGORIES.length + articles.length} URLs`);

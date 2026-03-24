import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Clock, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import articles from '../data/articles';

// Categorie configuratie - slug naar display naam, beschrijving, SEO
const CATEGORY_CONFIG = {
    'seo': {
        name: 'SEO',
        title: 'SEO voor bedrijven: tips, uitleg en strategie',
        description: 'Alles over zoekmachineoptimalisatie voor bedrijven. Van technische SEO tot content en linkbuilding.',
        metaDescription: 'Praktische tips over SEO voor bedrijven. Van technische SEO en lokale SEO tot linkbuilding en hoe je hoger rankt in Google.',
        color: 'bg-blue-50 text-blue-700',
    },
    'geo': {
        name: 'GEO',
        title: 'GEO: zichtbaar zijn in ChatGPT, Perplexity en Google AI',
        description: 'GEO is de nieuwe SEO. Zo zorg je dat ChatGPT, Perplexity en Google AI jouw bedrijf aanbevelen.',
        metaDescription: 'Alles over GEO (Generative Engine Optimization). Lees hoe je zichtbaar wordt in ChatGPT, Perplexity en Google AI Overviews.',
        color: 'bg-purple-50 text-purple-700',
    },
    'google-ads': {
        name: 'Google Ads',
        title: 'Google Ads: meer rendement uit je advertentiebudget',
        description: 'Alles over Google Ads voor bedrijven. Van campagne-instellingen tot Smart Bidding, zo haal je meer rendement uit je advertentiebudget.',
        metaDescription: 'Alles over Google Ads voor bedrijven. Tips over campagne-instellingen, Smart Bidding en hoe je meer rendement haalt uit je advertentiebudget.',
        color: 'bg-green-50 text-green-700',
    },
    'social-ads': {
        name: 'Social Ads',
        title: 'Social Ads: adverteren op Meta, TikTok en LinkedIn',
        description: 'Meta Ads, TikTok Ads en LinkedIn Ads voor meer omzet. Leer hoe je sociale advertenties inzet die klikken omzetten naar klanten.',
        metaDescription: 'Alles over Social Ads: Meta Ads, TikTok Ads en LinkedIn Ads. Tips over doelgroepen, creatief en wat je campagnes kosten.',
        color: 'bg-pink-50 text-pink-700',
    },
    'tracking': {
        name: 'Tracking',
        title: 'Conversietracking: weet wat je marketing oplevert',
        description: 'Zonder tracking weet je niet wat werkt. Alles over GA4, Meta Pixel, Conversions API en server-side tracking.',
        metaDescription: 'Alles over conversietracking voor marketeers. Van GA4 tot Meta Pixel en server-side tracking: zo meet je wat je marketing echt oplevert.',
        color: 'bg-orange-50 text-orange-700',
    },
    'strategie': {
        name: 'Strategie',
        title: 'Marketingstrategie: de juiste keuzes maken',
        description: 'Goede strategie begint met de juiste keuzes. Artikelen over kanalen, budgetverdeling en meten wat werkt.',
        metaDescription: 'Alles over online marketingstrategie. Lees hoe je kanalen kiest, budget verdeelt en een strategie bouwt die meetbaar groeit.',
        color: 'bg-yellow-50 text-yellow-700',
    },
    'algemeen': {
        name: 'Algemeen',
        title: 'Online marketing voor ondernemers: praktisch en eerlijk',
        description: 'Brede artikelen over online marketing voor ondernemers. Van zelf adverteren of uitbesteden tot hoe je een bureau kiest dat resultaat levert.',
        metaDescription: 'Praktische online marketing artikelen voor ondernemers. Eerlijk, zonder jargon, gericht op meer omzet uit je marketingbudget.',
        color: 'bg-gray-50 text-gray-700',
    },
};

export default function BlogCategory() {
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    const config = CATEGORY_CONFIG[category];

    // 404 als categorie niet bestaat
    if (!config) return <Navigate to="/nieuws" replace />;

    // Filter artikelen voor deze categorie
    const categoryArticles = articles
        .filter(a => a.category.toLowerCase().replace(' ', '-') === category ||
                     a.category === config.name)
        .sort((a, b) => b.dateTs - a.dateTs);

    const canonicalUrl = `https://www.empowers.nl/blogs/${category}`;

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>{`${config.title} | Empowers`}</title>
                <meta name="description" content={config.metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={`${config.title} | Empowers`} />
                <meta property="og:description" content={config.metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": config.title,
                    "description": config.metaDescription,
                    "url": canonicalUrl,
                    "publisher": {
                        "@type": "Organization",
                        "name": "Empowers",
                        "url": "https://www.empowers.nl"
                    }
                })}</script>
            </Helmet>

            <Navbar />

            {/* Hero */}
            <section className="w-full pt-40 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-10">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary">{config.name}</span>
                    </nav>

                    {/* Category label */}
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                        {config.name}
                    </div>

                    <h1 className="font-sans font-bold text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">
                        {config.title}
                    </h1>
                    <p className="font-sans text-primary/60 text-lg max-w-2xl leading-relaxed mb-10">
                        {config.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm font-mono text-primary/40">
                        <span>{categoryArticles.length} {categoryArticles.length === 1 ? 'artikel' : 'artikelen'}</span>
                        <span>·</span>
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Alle categorieën →</Link>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full px-6">
                <div className="max-w-5xl mx-auto border-t border-primary/10" />
            </div>

            {/* Articles grid */}
            <section className="w-full py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {categoryArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {categoryArticles.map((article, i) => (
                                <Link
                                    key={i}
                                    to={article.slug}
                                    className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-primary/8 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden bg-primary/10">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${article.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block px-3 py-1 bg-accent text-white font-mono text-xs uppercase tracking-widest rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-7">
                                        <h2 className="font-sans font-bold text-primary text-lg leading-snug mb-3 group-hover:text-accent transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6 flex-1">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs font-mono text-primary/40">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1">
                                                    <User className="w-3 h-3" />
                                                    {article.author}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {article.readTime}
                                                </span>
                                            </div>
                                            <span className="flex items-center gap-1 text-accent font-sans font-medium text-sm group-hover:gap-2 transition-all">
                                                Lees meer <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        /* Empty state — wordt gevuld zodra er blogs zijn in deze categorie */
                        <div className="text-center py-24">
                            <p className="font-mono text-primary/30 text-sm uppercase tracking-widest mb-4">Binnenkort</p>
                            <p className="font-sans text-primary/60 text-lg mb-8">
                                De eerste {config.name} artikelen worden binnenkort gepubliceerd.
                            </p>
                            <Link
                                to="/nieuws"
                                className="inline-flex items-center gap-2 text-accent font-sans font-medium hover:underline"
                            >
                                Bekijk alle artikelen <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-5">
                        Meer omzet uit je marketing?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-8 max-w-xl mx-auto">
                        Plan een gratis gesprek. We kijken samen naar wat werkt voor jouw bedrijf.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                    >
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

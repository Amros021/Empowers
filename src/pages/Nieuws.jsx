import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Calendar, Clock, Search,
    ChevronDown, LayoutGrid, List, X,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import articles from '../data/articles';

gsap.registerPlugin(ScrollTrigger);

/* ── categorie lijst ── */
const CATEGORIES = [
    'SEO', 'GEO', 'Google Ads', 'Social Ads', 'AI Ads', 'Tracking', 'Strategie', 'Algemeen',
];

const SORT_OPTIONS = [
    { value: 'nieuwste', label: 'Nieuwste eerst' },
    { value: 'oudste',   label: 'Oudste eerst'   },
    { value: 'a-z',      label: 'A → Z'           },
];

/* ════════════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════════════ */
const MOBILE_PAGE_SIZE = 10;
const LG_BREAKPOINT = 1024;

export default function Nieuws() {
    const [activeCategory, setActiveCategory] = useState('Alle');
    const [searchQuery,    setSearchQuery]    = useState('');
    const [sortBy,         setSortBy]         = useState('nieuwste');
    const [sortOpen,       setSortOpen]       = useState(false);
    const [viewMode,       setViewMode]       = useState('grid');
    const [searchOpen,     setSearchOpen]     = useState(false);
    const [currentPage,    setCurrentPage]    = useState(1);
    const [isMobile,       setIsMobile]       = useState(false);

    const sortRef   = useRef(null);
    const searchRef = useRef(null);
    const cardsRef  = useRef(null);
    const pillsRef   = useRef(null);

    /* ── detect mobile for pagination ── */
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < LG_BREAKPOINT);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    /* ── outside click: sort + search ── */
    useEffect(() => {
        const fn = (e) => {
            if (sortRef.current   && !sortRef.current.contains(e.target))   setSortOpen(false);
            if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
        };
        document.addEventListener('mousedown', fn);
        return () => document.removeEventListener('mousedown', fn);
    }, []);

    /* ── hero entrance ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-label', { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 });
            gsap.fromTo('.hero-title', { opacity: 0, y: 50  }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.hero-sub',   { opacity: 0, y: 24  }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4 });
        });
        return () => ctx.revert();
    }, []);

    /* ── cards scroll animation ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.blog-card',
                { opacity: 0, y: 36 },
                { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
                  scrollTrigger: { trigger: cardsRef.current, start: 'top 84%', once: true } }
            );
            gsap.fromTo('.sidebar-block',
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out',
                  scrollTrigger: { trigger: '.sidebar-root', start: 'top 86%', once: true } }
            );
        });
        return () => ctx.revert();
    }, []);

    /* ── filter + animate ── */
    const handleFilter = (cat) => {
        if (cat === activeCategory) return;
        gsap.to('.blog-card', {
            opacity: 0, y: 8,
            duration: 0.12, stagger: 0.005, ease: 'power2.in',
            onComplete: () => {
                setActiveCategory(cat);
                requestAnimationFrame(() => {
                    gsap.fromTo('.blog-card',
                        { opacity: 0, y: 16 },
                        { opacity: 1, y: 0, duration: 0.25, stagger: 0.015, ease: 'power3.out' }
                    );
                });
            },
        });
        /* scroll mobile pill into view */
        if (pillsRef.current) {
            const btn = pillsRef.current.querySelector(`[data-cat="${cat}"]`);
            if (btn) btn.scrollIntoView({ inline: 'center', behavior: 'smooth' });
        }
    };

    /* ── reset page on filter/search change ── */
    useEffect(() => { setCurrentPage(1); }, [activeCategory, searchQuery, sortBy]);

    /* ── derived ── */
    const filtered = articles
        .filter(a => activeCategory === 'Alle' || a.category === activeCategory)
        .filter(a => {
            if (!searchQuery.trim()) return true;
            const q = searchQuery.toLowerCase();
            return a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
        })
        .slice()
        .sort((a, b) => {
            if (sortBy === 'a-z')     return a.title.localeCompare(b.title, 'nl');
            if (sortBy === 'oudste')  return a.dateTs - b.dateTs;   // laagste ts eerst = oudste
            return b.dateTs - a.dateTs;                              // nieuwste eerst (default)
        });

    /* ── mobile pagination ── */
    const totalPages = isMobile ? Math.ceil(filtered.length / MOBILE_PAGE_SIZE) : 1;
    const displayed  = isMobile
        ? filtered.slice((currentPage - 1) * MOBILE_PAGE_SIZE, currentPage * MOBILE_PAGE_SIZE)
        : filtered;

    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const latestThree = articles.slice(0, 3);

    /* ────────────────────────────────────────────────────
       RENDER
    ──────────────────────────────────────────────────── */
    return (
        <main className="min-h-screen bg-background flex flex-col selection:bg-accent/20">
            <Helmet>
                <title>Marketing Nieuws, Tips & Insights | Empowers</title>
                <meta name="description" content="Blijf vooroplopen met de nieuwste inzichten over Meta Ads, TikTok Ads, SEO, GEO en conversietracking. Praktische tips van de marketeers van Empowers." />
                <link rel="canonical" href="https://www.empowers.nl/nieuws" />
                <meta property="og:title" content="Marketing Nieuws, Tips & Insights | Empowers" />
                <meta property="og:description" content="Blijf vooroplopen met de nieuwste inzichten over Meta Ads, TikTok Ads, SEO, GEO en conversietracking." />
                <meta property="og:url" content="https://www.empowers.nl/nieuws" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Marketing Nieuws, Tips & Insights",
                    "description": "Blijf vooroplopen met de nieuwste inzichten over Meta Ads, TikTok Ads, SEO, GEO en conversietracking. Praktische tips van de marketeers van Empowers.",
                    "url": "https://www.empowers.nl/nieuws",
                    "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" }
                    ]
                })}</script>
            </Helmet>

            <Navbar />

            {/* ══════════════════════════════════
                HERO
            ══════════════════════════════════ */}
            <section className="w-full pt-28 sm:pt-36 lg:pt-48 pb-10 sm:pb-14 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-accent/5  rounded-full blur-[80px]  pointer-events-none" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 lg:gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="hero-label font-mono text-xs sm:text-sm tracking-widest uppercase text-accent mb-3 sm:mb-5 block">
                            Marketing Inzichten
                        </span>
                        <h1 className="hero-title font-sans font-bold text-primary text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none tracking-tight mb-3">
                            Nieuws &<br />
                            <span className="font-drama italic font-normal text-accent">Insights.</span>
                        </h1>
                    </div>
                    <div className="flex-1 lg:pb-2">
                        <p className="hero-sub font-sans text-primary/70 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
                            Praktische artikelen over online marketing. Geen hypes, wel inzichten die je direct kunt gebruiken.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                MOBILE CATEGORY PILLS
                (hidden on lg — sidebar takes over)
            ══════════════════════════════════ */}
            <div className="lg:hidden w-full px-4 sm:px-6 pb-4 sm:pb-6">
                <div
                    ref={pillsRef}
                    className="flex flex-wrap gap-2"
                >
                    {/* "Alle" pill */}
                    <button
                        data-cat="Alle"
                        onClick={() => handleFilter('Alle')}
                        className={`flex-shrink-0 snap-start font-sans text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                            activeCategory === 'Alle'
                                ? 'bg-primary text-white border-primary font-semibold'
                                : 'bg-white border-primary/20 text-primary/60 hover:border-primary/40 hover:text-primary'
                        }`}
                    >
                        Alle
                    </button>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            data-cat={cat}
                            onClick={() => handleFilter(activeCategory === cat ? 'Alle' : cat)}
                            className={`flex-shrink-0 snap-start font-sans text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                                activeCategory === cat
                                    ? 'bg-primary text-white border-primary font-semibold'
                                    : 'bg-white border-primary/20 text-primary/60 hover:border-primary/40 hover:text-primary'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════
                TOPBAR
            ══════════════════════════════════ */}
            <section className="w-full px-4 sm:px-6 pb-5 sm:pb-6">
                <div className="max-w-7xl mx-auto relative border-b border-primary/10 pb-4 sm:pb-5">

                    {/* Mobile zoek-overlay — bedekt volledige filterbalk */}
                    {searchOpen && (
                        <div className="sm:hidden flex items-center gap-2 w-full">
                            <div className="flex-1 flex items-center rounded-full border border-primary/20 bg-white overflow-hidden shadow-sm">
                                <Search className="w-4 h-4 text-primary/30 ml-4 flex-shrink-0" />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Zoeken..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="flex-1 pl-3 pr-2 py-2.5 font-sans text-primary placeholder:text-primary/30 bg-transparent focus:outline-none"
                                    style={{ fontSize: '16px' }}
                                />
                            </div>
                            <button
                                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                                className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center hover:bg-primary/15 transition-colors"
                            >
                                <X className="w-4 h-4 text-primary/60" />
                            </button>
                        </div>
                    )}

                    {/* Normale filterbalk — verborgen op mobile als zoek open is */}
                    <div className={`flex items-center gap-2 sm:gap-5 ${searchOpen ? 'hidden sm:flex' : 'flex'}`}>

                    {/* Left cluster */}
                    <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">

                        {/* Grid/List toggle */}
                        <div className="flex items-center gap-0.5 bg-primary/6 rounded-lg p-1 flex-shrink-0">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-primary/30 hover:text-primary/60'}`}
                                title="Grid"
                            >
                                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-primary/30 hover:text-primary/60'}`}
                                title="Lijst"
                            >
                                <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                        </div>

                        {/* Result count */}
                        <span className="font-sans text-[11px] sm:text-sm font-semibold uppercase tracking-widest text-primary/60 whitespace-nowrap">
                            <span className="text-accent font-bold">{filtered.length}</span>
                            {' '}resultaten
                        </span>

                        {/* Sort — alle schermen */}
                        <div ref={sortRef} className="relative flex-shrink-0">
                            <button
                                onClick={() => setSortOpen(o => !o)}
                                className="flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors"
                            >
                                Sorteer op
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {sortOpen && (
                                <div className="absolute left-0 top-full mt-2 w-44 bg-white border border-primary/10 rounded-xl shadow-xl z-50 py-1 overflow-hidden">
                                    {SORT_OPTIONS.map(opt => (
                                        <button
                                            key={opt.value}
                                            onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                                            className={`w-full text-left px-4 py-2.5 font-sans text-sm transition-colors ${
                                                sortBy === opt.value
                                                    ? 'bg-primary/6 text-primary font-semibold'
                                                    : 'text-primary/65 hover:bg-primary/4 hover:text-primary'
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search */}
                    <div ref={searchRef} className="flex items-center flex-shrink-0">

                        {/* Mobile: alleen zoekknop (overlay wordt bovenaan getoond) */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="sm:hidden w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors duration-200"
                        >
                            <Search className="w-3.5 h-3.5 text-white" />
                        </button>

                        {/* Desktop: altijd zichtbare pill */}
                        <div className="hidden sm:flex items-center rounded-full border border-primary/20 bg-white overflow-hidden shadow-sm w-56 lg:w-72">
                            <input
                                type="text"
                                placeholder="Zoeken..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="flex-1 pl-5 pr-2 py-2.5 text-sm font-sans text-primary placeholder:text-primary/35 bg-transparent focus:outline-none"
                            />
                            <button className="flex-shrink-0 w-9 h-9 m-0.5 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors duration-200">
                                <Search className="w-3.5 h-3.5 text-white" />
                            </button>
                        </div>
                    </div>

                    </div> {/* einde normale filterbalk wrapper */}
                </div>
            </section>

            {/* ══════════════════════════════════
                MAIN: CARDS + SIDEBAR
            ══════════════════════════════════ */}
            <section className="w-full px-4 sm:px-6 pb-20 sm:pb-28 lg:pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_264px] gap-8 lg:gap-14 items-start">

                        {/* ── CARDS ── */}
                        <div>
                            {/* Empty state */}
                            {filtered.length === 0 && (
                                <div className="text-center py-16 sm:py-24">
                                    <p className="font-drama italic text-2xl sm:text-3xl text-primary/20 mb-3">Geen artikelen gevonden.</p>
                                    <p className="font-mono text-xs text-primary/40 mb-6">
                                        {searchQuery
                                            ? `Geen resultaten voor "${searchQuery}"`
                                            : `Nog geen artikelen in ${activeCategory}.`}
                                    </p>
                                    <button
                                        onClick={() => { handleFilter('Alle'); setSearchQuery(''); }}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                                    >
                                        ← Bekijk alle artikelen
                                    </button>
                                </div>
                            )}

                            {/* GRID */}
                            {filtered.length > 0 && viewMode === 'grid' && (
                                <div
                                    ref={cardsRef}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8 lg:gap-y-14"
                                >
                                    {displayed.map((article, idx) => (
                                        <Link
                                            key={`${article.slug}-${idx}`}
                                            to={article.slug}
                                            className="blog-card group flex flex-col"
                                        >
                                            {/* Image */}
                                            <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-primary/5 mb-3 sm:mb-4 relative">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                    loading="lazy"
                                                />
                                            </div>

                                            {/* Category pill (on-brand: only primary/accent) */}
                                            <span className="inline-flex self-start font-mono text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-primary/8 text-primary/60 mb-2">
                                                {article.category}
                                            </span>

                                            {/* Date */}
                                            <p className="font-sans text-xs text-primary/40 mb-1.5 flex items-center gap-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" /> {article.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {article.readTime}
                                                </span>
                                            </p>

                                            {/* Title */}
                                            <h2 className="font-sans font-bold text-base sm:text-lg lg:text-xl text-primary leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300">
                                                {article.title}
                                            </h2>

                                            {/* Author */}
                                            <p className="font-sans text-xs sm:text-sm text-accent font-medium">
                                                door {article.author}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* LIST */}
                            {filtered.length > 0 && viewMode === 'list' && (
                                <div ref={cardsRef} className="flex flex-col divide-y divide-primary/8">
                                    {displayed.map((article, idx) => (
                                        <Link
                                            key={`${article.slug}-${idx}`}
                                            to={article.slug}
                                            className="blog-card group flex gap-4 sm:gap-5 py-5 sm:py-6 first:pt-0"
                                        >
                                            <div className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-primary/5">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40 font-bold">
                                                    {article.category}
                                                </span>
                                                <p className="font-sans text-[11px] text-primary/40 mb-1">{article.date} · {article.readTime}</p>
                                                <h2 className="font-sans font-bold text-sm sm:text-base text-primary leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-2">
                                                    {article.title}
                                                </h2>
                                                <p className="font-sans text-xs text-accent font-medium">door {article.author}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* ── MOBILE PAGINATION ── */}
                            {isMobile && totalPages > 1 && (
                                <nav className="flex items-center justify-center gap-2 mt-12 mb-4">
                                    {/* Previous */}
                                    <button
                                        onClick={() => goToPage(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-sans text-sm transition-all ${
                                            currentPage === 1
                                                ? 'text-primary/20 cursor-not-allowed'
                                                : 'text-primary/60 hover:bg-primary/8 active:bg-primary/12'
                                        }`}
                                        aria-label="Vorige pagina"
                                    >
                                        ‹
                                    </button>

                                    {/* Page numbers */}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-sans text-sm font-semibold transition-all ${
                                                page === currentPage
                                                    ? 'bg-accent text-white shadow-sm'
                                                    : 'text-primary/50 hover:bg-primary/8 active:bg-primary/12'
                                            }`}
                                            aria-label={`Pagina ${page}`}
                                            aria-current={page === currentPage ? 'page' : undefined}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    {/* Next */}
                                    <button
                                        onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-sans text-sm transition-all ${
                                            currentPage === totalPages
                                                ? 'text-primary/20 cursor-not-allowed'
                                                : 'text-primary/60 hover:bg-primary/8 active:bg-primary/12'
                                        }`}
                                        aria-label="Volgende pagina"
                                    >
                                        ›
                                    </button>
                                </nav>
                            )}
                        </div>

                        {/* ── SIDEBAR (desktop only) ── */}
                        <aside className="sidebar-root hidden lg:block lg:sticky lg:top-32 space-y-10">

                            {/* ALL CATEGORIES */}
                            <div className="sidebar-block">
                                <h3 className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary mb-4 pb-3 border-b border-primary/10">
                                    Alle categorieën
                                </h3>
                                <ul className="space-y-0">
                                    {['Alle', ...CATEGORIES].map(cat => {
                                        const isActive = activeCategory === cat;
                                        return (
                                            <li key={cat}>
                                                <button
                                                    onClick={() => handleFilter(cat === 'Alle' ? 'Alle' : (isActive ? 'Alle' : cat))}
                                                    className={`w-full text-left flex items-center gap-2 py-2 px-1 rounded-lg transition-colors duration-150 group/cat ${
                                                        isActive
                                                            ? 'text-accent'
                                                            : 'text-primary/65 hover:text-primary'
                                                    }`}
                                                >
                                                    <span className={`text-[10px] font-bold leading-none transition-all duration-150 ${isActive ? 'opacity-100 text-accent' : 'opacity-0 group-hover/cat:opacity-20'}`}>
                                                        ►
                                                    </span>
                                                    <span className={`font-sans text-sm flex-1 ${isActive ? 'font-semibold' : ''}`}>
                                                        {cat}
                                                    </span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* LATEST POSTS */}
                            <div className="sidebar-block">
                                <h3 className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary mb-4 pb-3 border-b border-primary/10">
                                    Laatste posts
                                </h3>
                                <div className="space-y-5">
                                    {latestThree.map(post => (
                                        <Link
                                            key={post.slug}
                                            to={post.slug}
                                            className="flex gap-3.5 group/post items-start"
                                        >
                                            <div className="w-[72px] h-[56px] rounded-xl overflow-hidden flex-shrink-0 bg-primary/5">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover/post:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0 pt-0.5">
                                                <p className="font-sans text-[11px] text-primary/35 mb-1">{post.date}</p>
                                                <h4 className="font-sans font-semibold text-sm text-primary leading-snug line-clamp-2 group-hover/post:text-accent transition-colors duration-200">
                                                    {post.title}
                                                </h4>
                                                <p className="font-sans text-xs text-accent font-medium mt-1">{post.author}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* POPULAR TAGS */}
                            <div className="sidebar-block">
                                <h3 className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary mb-4 pb-3 border-b border-primary/10">
                                    Populaire tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {CATEGORIES.map(cat => {
                                        const isActive = activeCategory === cat;
                                        return (
                                            <button
                                                key={cat}
                                                onClick={() => handleFilter(isActive ? 'Alle' : cat)}
                                                className={`font-sans text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                                                    isActive
                                                        ? 'bg-primary text-white font-semibold'
                                                        : 'bg-primary/8 text-primary/55 hover:bg-primary/14 hover:text-primary'
                                                }`}
                                            >
                                                {cat}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CTA
            ══════════════════════════════════ */}
            <section className="w-full pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[1.75rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-accent/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
                    <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                        Blijf vooroplopen.
                    </h3>
                    <p className="relative z-10 font-sans text-background/70 text-sm sm:text-base mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto">
                        Ontvang inzichten rechtstreeks van onze experts over de toekomst van online autoriteit en AI-search.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 inline-flex items-center justify-center gap-2 bg-accent text-background font-sans font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[2rem] hover:bg-accent/90 transition-all hover:gap-3 duration-300"
                    >
                        Samenwerken met Empowers <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

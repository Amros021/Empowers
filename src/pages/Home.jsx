import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark">
            <Helmet>
                <title>Online Marketing Bureau | Google Ads, Meta Ads, LinkedIn & GEO – Empowers</title>
                <meta name="description" content="Empowers is een performance marketing bureau gespecialiseerd in Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO en GEO. Wij versnellen jouw groei. Plan een gratis kennismaking." />
                <link rel="canonical" href="https://www.empowers.nl/" />
                <meta property="og:title" content="Online Marketing Bureau | Google Ads, Meta Ads, LinkedIn & GEO – Empowers" />
                <meta property="og:description" content="Empowers is een performance marketing bureau gespecialiseerd in Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO en GEO. Wij versnellen jouw groei. Plan een gratis kennismaking." />
                <meta property="og:url" content="https://www.empowers.nl/" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Empowers",
                    "url": "https://www.empowers.nl",
                    "logo": "https://www.empowers.nl/logo.svg",
                    "description": "Empowers is een performance marketing bureau gespecialiseerd in Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO en GEO voor MKB-bedrijven in Nederland.",
                    "address": { "@type": "PostalAddress", "addressCountry": "NL" },
                    "sameAs": []
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Empowers",
                    "url": "https://www.empowers.nl"
                })}</script>
            </Helmet>
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocol />
            <CTA />
            <Footer />
        </main>
    );
}

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark">
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

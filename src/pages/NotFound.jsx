import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
    return (
        <main className="min-h-[100dvh] selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Navbar />

            <section className="flex-1 w-full pt-40 pb-32 px-6 flex flex-col items-center justify-center">
                <div className="w-full max-w-2xl text-center relative">
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">
                            Error 404
                        </span>
                        <h1 className="font-drama italic text-primary text-6xl md:text-8xl lg:text-9xl mb-6 leading-none">
                            Verdwaald?
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl font-medium mb-12 max-w-lg mx-auto">
                            Deze pagina bestaat niet, maar jouw groei wel. Laten we je terugbrengen naar waar het begint.
                        </p>

                        <Link
                            to="/"
                            className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base sm:text-lg px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors gap-3"
                        >
                            <Home className="w-5 h-5" />
                            Terug naar de homepagina
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <section className="relative w-full py-32 px-6 bg-background flex flex-col items-center justify-center">
            <div className="relative z-10 w-full max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-20 flex flex-col items-center">
                    <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 bg-accent/10 px-4 py-1.5 rounded-full inline-block">
                        KLAAR OM TE GROEIEN?
                    </span>

                    <h2 className="font-drama italic text-background text-5xl md:text-7xl mb-8 leading-tight">
                        Jouw concurrentie staat niet stil. Jij ook niet.
                    </h2>

                    <p className="font-sans text-background/70 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto">
                        Geen accountmanagers, geen gedoe. Direct contact met de expert die jouw groei realiseert.
                    </p>

                    <div className="flex justify-center w-full">
                        <Link to="/contact" className="btn-magnetic w-full sm:w-auto bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors flex items-center justify-center gap-3">
                            <Calendar className="w-5 h-5" />
                            <span>Plan een gratis gesprek</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

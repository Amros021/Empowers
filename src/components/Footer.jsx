import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
export default function Footer() {
    return (
        <footer className="w-full bg-dark text-background pt-24 pb-12 px-6 rounded-t-[4rem] relative z-30 mt-[-2rem]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

                {/* Brand & Status */}
                <div className="col-span-1 md:col-span-5 flex flex-col items-start pr-8">
                    <Link to="/" className="inline-block mb-8">
                        <img
                            src="/empowers-logo-white.svg"
                            alt="Empowers Logo"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>
                    <p className="font-sans text-background/60 mb-8 max-w-sm text-sm leading-relaxed">
                        Wij helpen bedrijven groeien via slimme advertenties, SEO en GEO. Resultaatgericht, persoonlijk en meetbaar.
                    </p>

                    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="font-mono text-xs text-background/80 uppercase tracking-widest">Beschikbaar voor nieuwe klanten</span>
                    </div>
                </div>

                {/* Navigation Grid */}
                <div className="col-span-1 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-mono text-xs tracking-widest text-background/40 uppercase mb-6">Expertise</h4>
                        <ul className="space-y-6 font-sans text-base text-background/90 font-medium">
                            <li className="cursor-default">Meta Ads</li>
                            <li className="cursor-default">Google Ads</li>
                            <li className="cursor-default">SEO & GEO</li>
                            <li className="cursor-default">Conversie Optimalisatie</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-mono text-xs tracking-widest text-background/40 uppercase mb-6">Menu</h4>
                        <ul className="space-y-6 font-sans text-base text-background/90 font-medium">
                            <li><Link to="/diensten" className="hover:text-accent transition-colors">Diensten</Link></li>
                            <li><Link to="/over-ons" className="hover:text-accent transition-colors">Over Ons</Link></li>
                            <li><Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link></li>
                            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-mono text-xs tracking-widest text-background/40 uppercase mb-6">Contact</h4>
                        <ul className="space-y-6 font-sans text-base text-background/90 font-medium">
                            <li><a href="mailto:info@empowers.nl" className="hover:text-accent transition-colors flex items-center gap-3"><Mail className="w-4 h-4 text-accent" /> info@empowers.nl</a></li>
                            <li><a href="tel:+31630802980" className="hover:text-accent transition-colors flex items-center gap-3"><Phone className="w-4 h-4 text-accent" /> +31630802980</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-background/40 tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} Empowers. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

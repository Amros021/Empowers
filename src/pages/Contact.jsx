import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MailOpen } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col">
            <Navbar />

            <section className="flex-1 w-full bg-background pt-40 pb-32 px-6 flex flex-col items-center">
                <div className="w-full max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">Contact</span>
                        <h1 className="font-drama italic text-primary text-4xl sm:text-5xl md:text-7xl mb-6">Laten we praten over groei.</h1>
                        <p className="font-sans text-primary/70 text-lg mb-0 max-w-2xl mx-auto">
                            Kies hoe je contact wilt opnemen. We reageren altijd binnen 24 uur.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-8 relative">

                        {/* COLUMN 1 - Direct Mailen */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 lg:p-12 rounded-[2rem] hover:bg-white/50 transition-colors w-full lg:w-auto">
                            <a href="mailto:info@empowers.nl" className="group cursor-pointer flex flex-col items-center">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent/10 flex items-center justify-center mb-8 animate-float text-accent">
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                        <Mail className="w-full h-full absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0" strokeWidth={1.5} />
                                        <MailOpen className="w-full h-full absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h2 className="font-sans font-bold text-3xl text-primary mb-4">Direct mailen</h2>
                                <p className="font-sans text-primary/70 text-base sm:text-lg mb-8 max-w-xs">
                                    Stuur ons een e-mail en we reageren binnen 24 uur.
                                </p>
                                <span className="btn-magnetic inline-flex bg-accent text-background font-sans font-bold text-base sm:text-lg px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                    Mail ons
                                </span>
                            </a>
                        </div>

                        {/* MIDDLE DIVIDER */}
                        <div className="flex lg:flex-col items-center justify-center gap-4 w-full lg:w-auto opacity-50">
                            <div className="h-[1px] w-full lg:w-[1px] lg:h-full bg-primary/20 flex-1"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-primary/60 font-medium px-2">OF</span>
                            <div className="h-[1px] w-full lg:w-[1px] lg:h-full bg-primary/20 flex-1"></div>
                        </div>

                        {/* COLUMN 2 - Formulier */}
                        <div className="flex-1 w-full lg:w-auto lg:p-8">
                            <h2 className="font-sans font-bold text-2xl text-primary mb-8 text-center lg:text-left">Liever een formulier?</h2>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-sans font-bold text-sm text-primary">Voornaam</label>
                                        <input type="text" className="w-full bg-white border border-primary/20 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Jouw voornaam" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-sans font-bold text-sm text-primary">Achternaam</label>
                                        <input type="text" className="w-full bg-white border border-primary/20 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Jouw achternaam" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-sans font-bold text-sm text-primary">Bedrijfsnaam</label>
                                    <input type="text" className="w-full bg-white border border-primary/20 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Jouw bedrijf" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-sans font-bold text-sm text-primary">E-mailadres</label>
                                    <input type="email" className="w-full bg-white border border-primary/20 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="jouw@bedrijf.nl" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-sans font-bold text-sm text-primary">Bericht of Doelstelling</label>
                                    <textarea rows="4" className="w-full bg-white border border-primary/20 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="Waar ben je naar op zoek?"></textarea>
                                </div>

                                <button type="submit" className="btn-magnetic w-full bg-accent text-background font-sans font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-[2rem] hover:bg-accent/90 transition-colors mt-4">
                                    Plan een gratis gesprek
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col">
            <Navbar />

            <section className="flex-1 w-full bg-background pt-40 pb-32 px-6 flex flex-col items-center">
                <div className="w-full max-w-3xl">
                    <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">Contact</span>
                    <h1 className="font-drama italic text-primary text-5xl md:text-7xl mb-6">Laten we praten over groei.</h1>
                    <p className="font-sans text-primary/70 text-lg mb-12">
                        Klaar om de volgende stap te zetten? Vul het formulier in en we nemen zo snel mogelijk contact met je op om te kijken hoe we jouw bedrijf kunnen opschalen.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-sans font-bold text-sm text-primary">Voornaam</label>
                                <input type="text" className="w-full bg-white border border-primary/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Jouw voornaam" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-sans font-bold text-sm text-primary">Achternaam</label>
                                <input type="text" className="w-full bg-white border border-primary/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Jouw achternaam" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans font-bold text-sm text-primary">Bedrijfsnaam</label>
                            <input type="text" className="w-full bg-white border border-primary/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Jouw bedrijf" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans font-bold text-sm text-primary">E-mailadres</label>
                            <input type="email" className="w-full bg-white border border-primary/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="jouw@bedrijf.nl" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans font-bold text-sm text-primary">Bericht of Doelstelling</label>
                            <textarea rows="5" className="w-full bg-white border border-primary/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="Waar ben je naar op zoek?"></textarea>
                        </div>

                        <button className="btn-magnetic w-full md:w-auto bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors mt-4">
                            Verstuur Aanvraag
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}

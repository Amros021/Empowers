import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Privacyverklaring | Empowers</title>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="canonical" href="https://www.empowers.nl/privacy-policy" />
            </Helmet>
            <Navbar />

            <article className="w-full pt-40 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-sans font-bold text-primary text-4xl sm:text-5xl leading-tight tracking-tight mb-12">Privacyverklaring</h1>

                    <div className="prose prose-lg max-w-none text-primary/80 space-y-10">
                        <p className="text-primary/70 text-lg">Empowers, gevestigd in Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring. Wij verwerken persoonsgegevens zorgvuldig en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</p>

                        <p className="text-sm text-primary/50 font-mono uppercase tracking-widest">Laatst bijgewerkt: maart 2026</p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">1. Wie zijn wij?</h2>
                            <p><strong>Empowers</strong></p>
                            <p>Website: <a href="https://www.empowers.nl" className="text-accent hover:underline">https://www.empowers.nl</a></p>
                            <p>E-mail: <a href="mailto:info@empowers.nl" className="text-accent hover:underline">info@empowers.nl</a></p>
                            <p>KvK-nummer: 78132436</p>
                            <p>Btw-identificatienummer: NL003290044B91</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">2. Welke persoonsgegevens verwerken wij?</h2>
                            <p>Empowers verwerkt persoonsgegevens die je actief aan ons verstrekt of die automatisch worden verzameld bij het gebruik van onze website of diensten. Het kan hierbij gaan om:</p>
                            <p>Voor- en achternaam, bedrijfsnaam, functie, e-mailadres, telefoonnummer, website-URL, IP-adres, gegevens over je bezoek aan onze website (zoals paginaweergaven, sessieduur en apparaattype), social media accountgegevens (indien je via social media contact met ons opneemt), en overige persoonsgegevens die je verstrekt via formulieren, e-mail of telefonisch.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">3. Voor welke doeleinden verwerken wij persoonsgegevens?</h2>
                            <p>Wij verwerken persoonsgegevens uitsluitend voor de volgende doeleinden: het beantwoorden van vragen en contactverzoeken, het uitvoeren en beheren van overeenkomsten (waaronder Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO en GEO), het opstellen en versturen van offertes en facturen, het onderhouden van zakelijke relaties, het verbeteren van onze website en dienstverlening, marketing- en communicatiedoeleinden zoals het versturen van relevante updates, en het voldoen aan wettelijke verplichtingen.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">4. Op basis van welke grondslagen?</h2>
                            <p>Empowers verwerkt persoonsgegevens op basis van een of meer van de volgende grondslagen: toestemming (bijvoorbeeld wanneer je ons contactformulier invult), uitvoering van een overeenkomst (wanneer je klant bij ons bent), wettelijke verplichting (zoals fiscale bewaarplichten), en gerechtvaardigd belang (zoals bedrijfsvoering, websiteanalyse en beveiliging).</p>
                            <p>Wanneer wij persoonsgegevens verwerken op basis van toestemming, kun je deze toestemming te allen tijde intrekken.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">5. Bewaartermijnen</h2>
                            <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor ze zijn verzameld, tenzij wij wettelijk verplicht zijn gegevens langer te bewaren. Klantgegevens worden bewaard gedurende de looptijd van de overeenkomst plus de wettelijke bewaartermijn van 7 jaar voor financiële administratie. Contactformuliergegevens worden maximaal 12 maanden bewaard.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">6. Delen van persoonsgegevens met derden</h2>
                            <p>Empowers verstrekt persoonsgegevens uitsluitend aan derden indien dit noodzakelijk is voor de uitvoering van onze dienstverlening of het voldoen aan wettelijke verplichtingen.</p>
                            <p>Met partijen die in onze opdracht persoonsgegevens verwerken, zoals onze hostingprovider (Vercel), advertentieplatformen (Google, Meta, LinkedIn, TikTok), e-maildiensten en analysetools, sluiten wij waar nodig verwerkersovereenkomsten.</p>
                            <p>Wij verkopen persoonsgegevens nooit aan derden.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">7. Cookies en vergelijkbare technieken</h2>
                            <p>Empowers maakt gebruik van functionele cookies die noodzakelijk zijn voor het correct functioneren van de website, en analytische cookies via Google Analytics 4 (met geanonimiseerd IP-adres) om inzicht te krijgen in het gebruik van de website.</p>
                            <p>Voor het plaatsen van analytische cookies vragen wij, indien wettelijk vereist, vooraf toestemming. Wij plaatsen geen tracking cookies voor advertentiedoeleinden op onze eigen website.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">8. Social media</h2>
                            <p>Empowers is actief op verschillende social media platforms, waaronder LinkedIn, Instagram en TikTok. Wanneer je via deze platforms contact met ons opneemt, worden jouw gegevens verwerkt volgens het privacybeleid van het betreffende platform. Wij raden je aan het privacybeleid van het desbetreffende platform te raadplegen.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">9. Jouw rechten</h2>
                            <p>Op grond van de AVG heb je het recht om: jouw persoonsgegevens in te zien, jouw gegevens te laten corrigeren of verwijderen, bezwaar te maken tegen de verwerking van jouw gegevens, jouw toestemming in te trekken, en jouw gegevens te laten overdragen (dataportabiliteit).</p>
                            <p>Je kunt een verzoek indienen via <a href="mailto:info@empowers.nl" className="text-accent hover:underline">info@empowers.nl</a>. Wij reageren uiterlijk binnen 30 dagen op je verzoek.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">10. Beveiliging</h2>
                            <p>Empowers neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde toegang en ongewenste openbaarmaking. Onze website maakt gebruik van SSL-encryptie (HTTPS) en wij werken uitsluitend met betrouwbare dienstverleners.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">11. Klachten</h2>
                            <p>Heb je een klacht over de verwerking van jouw persoonsgegevens? Neem dan contact met ons op via <a href="mailto:info@empowers.nl" className="text-accent hover:underline">info@empowers.nl</a>. Wij nemen elke klacht serieus en streven ernaar deze in goed overleg op te lossen.</p>
                            <p>Je hebt daarnaast altijd het recht om een klacht in te dienen bij de <a href="https://autoriteitpersoonsgegevens.nl" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">12. Wijzigingen</h2>
                            <p>Empowers behoudt zich het recht voor deze privacyverklaring te wijzigen. De meest actuele versie is altijd te vinden op deze pagina.</p>
                        </section>

                        <section className="space-y-3 pt-8 border-t border-primary/10">
                            <p className="text-primary/50 text-sm italic">Deze privacyverklaring is opgesteld conform de Algemene Verordening Gegevensbescherming (AVG).</p>
                            <p className="text-primary/50 text-sm">Vragen over je privacy? Neem contact op via <a href="mailto:info@empowers.nl" className="text-accent hover:underline">info@empowers.nl</a>.</p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

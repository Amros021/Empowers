import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function AlgemeneVoorwaarden() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Algemene Voorwaarden | Empowers</title>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="canonical" href="https://www.empowers.nl/algemene-voorwaarden" />
            </Helmet>
            <Navbar />

            <article className="w-full pt-40 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-sans font-bold text-primary text-4xl sm:text-5xl leading-tight tracking-tight mb-12">Algemene Voorwaarden</h1>

                    <div className="prose prose-lg max-w-none text-primary/80 space-y-10">
                        <p className="text-sm text-primary/50 font-mono uppercase tracking-widest">Laatst bijgewerkt: maart 2026</p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 1 – Definities</h2>
                            <p>In deze algemene voorwaarden wordt verstaan onder:</p>
                            <p><strong>1.1</strong> <strong>Empowers:</strong> de eenmanszaak Empowers, gevestigd in Nederland, ingeschreven bij de Kamer van Koophandel onder nummer 78132436, btw-identificatienummer NL003290044B91.</p>
                            <p><strong>1.2</strong> <strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die aan Empowers opdracht verstrekt tot het verrichten van werkzaamheden.</p>
                            <p><strong>1.3</strong> <strong>Overeenkomst:</strong> iedere afspraak tussen Empowers en opdrachtgever met betrekking tot de te leveren diensten, inclusief wijzigingen en aanvullingen daarop.</p>
                            <p><strong>1.4</strong> <strong>Diensten:</strong> alle werkzaamheden op het gebied van online marketing die Empowers voor opdrachtgever verricht, waaronder maar niet beperkt tot Google Ads beheer, Meta Ads beheer, LinkedIn Ads beheer, TikTok Ads beheer, zoekmachineoptimalisatie (SEO), Generative Engine Optimization (GEO), conversietracking, landingspagina-optimalisatie en aanverwante advies- en implementatiediensten.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 2 – Toepasselijkheid</h2>
                            <p><strong>2.1</strong> Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en diensten van Empowers.</p>
                            <p><strong>2.2</strong> Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze schriftelijk of per e-mail tussen partijen zijn overeengekomen.</p>
                            <p><strong>2.3</strong> Eventuele inkoop- of andere algemene voorwaarden van opdrachtgever worden uitdrukkelijk van de hand gewezen.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 3 – Offertes en totstandkoming</h2>
                            <p><strong>3.1</strong> Alle offertes en aanbiedingen van Empowers zijn vrijblijvend en geldig gedurende 30 dagen, tenzij uitdrukkelijk anders vermeld.</p>
                            <p><strong>3.2</strong> Een overeenkomst komt tot stand op het moment dat opdrachtgever een offerte schriftelijk of per e-mail aanvaardt, dan wel op het moment dat Empowers met de uitvoering van de werkzaamheden aanvangt.</p>
                            <p><strong>3.3</strong> Empowers kan niet aan een offerte worden gehouden indien opdrachtgever redelijkerwijs had kunnen begrijpen dat de offerte een kennelijke vergissing of verschrijving bevat.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 4 – Uitvoering van de overeenkomst</h2>
                            <p><strong>4.1</strong> Empowers voert de overeenkomst naar beste inzicht en vermogen uit, overeenkomstig de eisen van goed vakmanschap.</p>
                            <p><strong>4.2</strong> Empowers heeft het recht om werkzaamheden geheel of gedeeltelijk door derden te laten uitvoeren, zonder dat dit de verplichtingen jegens opdrachtgever wijzigt.</p>
                            <p><strong>4.3</strong> Opdrachtgever draagt er zorg voor dat alle gegevens en materialen die Empowers nodig heeft voor de uitvoering van de opdracht tijdig en in de gewenste vorm worden aangeleverd.</p>
                            <p><strong>4.4</strong> Vertragingen die ontstaan doordat opdrachtgever niet of niet tijdig aan zijn informatie- of medewerkingsverplichtingen voldoet, komen voor rekening en risico van opdrachtgever.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 5 – Wijzigingen en meerwerk</h2>
                            <p><strong>5.1</strong> Indien opdrachtgever tijdens de uitvoering van de overeenkomst wijzigingen wenst, kan dit leiden tot meerwerk.</p>
                            <p><strong>5.2</strong> Meerwerk wordt uitgevoerd tegen het overeengekomen uurtarief of, bij gebreke van een uurtarief, tegen het op dat moment geldende tarief van Empowers.</p>
                            <p><strong>5.3</strong> Empowers informeert opdrachtgever zo spoedig mogelijk over de financiële en inhoudelijke gevolgen van de gewenste wijzigingen.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 6 – Vergoedingen en betaling</h2>
                            <p><strong>6.1</strong> Alle genoemde prijzen en tarieven zijn exclusief btw, tenzij uitdrukkelijk anders vermeld.</p>
                            <p><strong>6.2</strong> Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij schriftelijk een andere betalingstermijn is overeengekomen.</p>
                            <p><strong>6.3</strong> Bij niet-tijdige betaling is opdrachtgever van rechtswege in verzuim, zonder dat een nadere ingebrekestelling vereist is.</p>
                            <p><strong>6.4</strong> Bij verzuim is Empowers gerechtigd de wettelijke handelsrente in rekening te brengen, alsmede buitengerechtelijke incassokosten conform de staffel van het Besluit vergoeding voor buitengerechtelijke incassokosten.</p>
                            <p><strong>6.5</strong> Empowers is gerechtigd werkzaamheden op te schorten zolang opdrachtgever niet aan zijn betalingsverplichtingen heeft voldaan.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 7 – Duur en beëindiging</h2>
                            <p><strong>7.1</strong> Overeenkomsten voor bepaalde tijd worden aangegaan voor de duur zoals vermeld in de offerte of het contract.</p>
                            <p><strong>7.2</strong> Beide partijen kunnen een doorlopende overeenkomst schriftelijk opzeggen met inachtneming van een opzegtermijn van 30 dagen, tenzij anders overeengekomen.</p>
                            <p><strong>7.3</strong> Bij tussentijdse beëindiging door opdrachtgever blijven alle tot dat moment verrichte werkzaamheden en gemaakte kosten volledig verschuldigd.</p>
                            <p><strong>7.4</strong> Empowers is gerechtigd de overeenkomst met onmiddellijke ingang te beëindigen indien opdrachtgever toerekenbaar tekortschiet in de nakoming van zijn verplichtingen, in surseance van betaling verkeert of failliet is verklaard.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 8 – Aansprakelijkheid</h2>
                            <p><strong>8.1</strong> Empowers is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van opzet of bewuste roekeloosheid aan de zijde van Empowers.</p>
                            <p><strong>8.2</strong> De totale aansprakelijkheid van Empowers is te allen tijde beperkt tot het bedrag dat in het desbetreffende geval wordt uitgekeerd door de aansprakelijkheidsverzekering van Empowers. Bij gebreke van een verzekeringsuitkering is de aansprakelijkheid beperkt tot het factuurbedrag van de desbetreffende opdracht over de laatste drie maanden.</p>
                            <p><strong>8.3</strong> Empowers is nimmer aansprakelijk voor indirecte schade, waaronder begrepen maar niet beperkt tot gevolgschade, gederfde winst, gemiste besparingen, verminderde goodwill of schade door bedrijfsstagnatie.</p>
                            <p><strong>8.4</strong> Empowers is niet aansprakelijk voor wijzigingen in het beleid, de algoritmes of de voorwaarden van derde platforms zoals Google, Meta, LinkedIn of TikTok die van invloed zijn op de resultaten van campagnes.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 9 – Intellectueel eigendom</h2>
                            <p><strong>9.1</strong> Alle rechten van intellectueel eigendom op door Empowers ontwikkelde of ter beschikking gestelde materialen, waaronder strategieën, campagnestructuren, advertentieteksten, designs en rapportages, berusten bij Empowers.</p>
                            <p><strong>9.2</strong> Opdrachtgever verkrijgt na volledige betaling een niet-exclusief, niet-overdraagbaar gebruiksrecht op de geleverde materialen voor het doel waarvoor deze zijn verstrekt.</p>
                            <p><strong>9.3</strong> Het is opdrachtgever niet toegestaan om zonder voorafgaande schriftelijke toestemming van Empowers materialen te verveelvoudigen, openbaar te maken of aan derden ter beschikking te stellen.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 10 – Geheimhouding</h2>
                            <p><strong>10.1</strong> Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar of uit andere bron hebben verkregen.</p>
                            <p><strong>10.2</strong> Onder vertrouwelijke informatie wordt in ieder geval verstaan: bedrijfsstrategieën, klantgegevens, campagneresultaten, financiële informatie en technische specificaties.</p>
                            <p><strong>10.3</strong> Deze geheimhoudingsverplichting blijft onverminderd van kracht na beëindiging van de overeenkomst.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 11 – Overmacht</h2>
                            <p><strong>11.1</strong> Empowers is niet gehouden tot het nakomen van enige verplichting indien sprake is van overmacht.</p>
                            <p><strong>11.2</strong> Onder overmacht wordt verstaan iedere omstandigheid buiten de wil en invloed van Empowers, waaronder maar niet beperkt tot storingen bij derde platforms, internetuitval, overheidsmaatregelen en ziekte.</p>
                            <p><strong>11.3</strong> Indien de overmachtssituatie langer dan 60 dagen voortduurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden, zonder dat er een verplichting tot schadevergoeding bestaat.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 12 – Toepasselijk recht en geschillen</h2>
                            <p><strong>12.1</strong> Op alle overeenkomsten tussen Empowers en opdrachtgever is uitsluitend Nederlands recht van toepassing.</p>
                            <p><strong>12.2</strong> Partijen zullen geschillen in eerste instantie trachten in onderling overleg op te lossen.</p>
                            <p><strong>12.3</strong> Indien onderling overleg niet tot een oplossing leidt, worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement waar Empowers is gevestigd.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Artikel 13 – Slotbepalingen</h2>
                            <p><strong>13.1</strong> Indien een of meerdere bepalingen van deze algemene voorwaarden nietig of vernietigbaar blijken, tast dit de geldigheid van de overige bepalingen niet aan.</p>
                            <p><strong>13.2</strong> Empowers behoudt zich het recht voor deze algemene voorwaarden te wijzigen. Gewijzigde voorwaarden treden in werking 30 dagen na bekendmaking aan opdrachtgever, of op een latere datum die in de bekendmaking is vermeld.</p>
                        </section>

                        <section className="space-y-3 pt-8 border-t border-primary/10">
                            <p className="text-primary/60 text-sm"><strong>Empowers</strong></p>
                            <p className="text-primary/50 text-sm">KvK: 78132436</p>
                            <p className="text-primary/50 text-sm">Btw-identificatienummer: NL003290044B91</p>
                            <p className="text-primary/50 text-sm">E-mail: <a href="mailto:info@empowers.nl" className="text-accent hover:underline">info@empowers.nl</a></p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

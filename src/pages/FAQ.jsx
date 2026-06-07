import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Plus, Minus, ArrowRight, ChevronUp } from 'lucide-react';
import { FAQDiscoveryAnimation } from '../components/FAQDiscoveryAnimation';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqCategories = [
    {
        title: 'Over Empowers',
        id: 'over-empowers',
        faqs: [
            {
                q: 'Wat maakt Empowers anders dan andere marketingbureaus?',
                a: 'Bij Empowers werk je rechtstreeks met de specialist die aan jouw campagnes werkt. Geen account managers die je verhaal doorspelen, geen junior medewerkers op de achtergrond. Je hebt één vast aanspreekpunt dat jouw business kent en op elk moment bereikbaar is via WhatsApp of e-mail. Daarnaast combineren we betaalde advertenties met SEO en GEO, een combinatie die weinig bureaus aanbieden.'
            },
            {
                q: 'Voor welke bedrijven werken jullie?',
                a: 'We werken voor MKB-bedrijven, webshops en grotere ondernemingen die serieus willen groeien via online marketing. Of je nu net begint met adverteren of al duizenden euro’s per maand uitgeeft, we kijken wat de slimste aanpak is voor jouw situatie en budget.'
            },
            {
                q: 'Op welke platformen zijn jullie actief?',
                a: 'We beheren campagnes op Google Ads, Meta Ads (Facebook en Instagram), LinkedIn Ads en TikTok Ads. Daarnaast helpen we met SEO en GEO, zodat je ook organisch gevonden wordt in zowel Google als AI-zoekmachines zoals ChatGPT en Perplexity.'
            },
            {
                q: 'Hoeveel advertentiebudget heb ik nodig?',
                a: 'Dat hangt af van je doelen, branche en het platform. Voor Google Ads adviseren we minimaal €500 per maand, voor Meta Ads rond de €300. We bespreken dit in het eerste gesprek en geven eerlijk advies. We werken liever niet samen dan dat we een budget inzetten waarvan we weten dat het niet rendabel is.'
            },
            {
                q: 'Hoe snel zie ik resultaten?',
                a: 'Met betaalde advertenties kun je binnen een week de eerste leads of verkopen zien. SEO en GEO zijn langetermijninvesteringen: reken op drie tot zes maanden voor duidelijke groei. We zijn hier altijd eerlijk over, geen loze beloftes.'
            },
            {
                q: 'Werken jullie met vaste contracten?',
                a: 'Nee. We werken met maandelijks opzegbare overeenkomsten. Geen langlopende contracten, geen kleine lettertjes. Als we goed werk leveren, blijf je vanzelf. Dat is hoe het hoort.'
            },
            {
                q: 'Hoe ziet de samenwerking er in de praktijk uit?',
                a: 'We starten met een kennismaking en audit van je huidige situatie. Daarna stellen we samen een strategie op en gaan aan de slag. Je hebt maandelijks een vaste call om de resultaten te bespreken. Tussendoor kun je altijd terecht via WhatsApp of e-mail. Korte lijnen, snelle antwoorden.'
            },
            {
                q: 'Kunnen jullie mijn bestaande campagnes overnemen?',
                a: 'Ja, dat doen we regelmatig. We beginnen met een grondige audit van wat er al draait. Wat goed werkt houden we, wat niet werkt bouwen we om. Zo verlies je geen data en gaat er geen budget verloren in de overgang.'
            },
            {
                q: 'Bouwen jullie ook landingspagina’s?',
                a: 'Ja. Een sterke advertentie met een slechte landingspagina is weggegooid geld. We bouwen en optimaliseren landingspagina’s die aansluiten op je campagnes, zodat bezoekers ook daadwerkelijk converteren.'
            },
            {
                q: 'Hoe rapporteren jullie over de resultaten?',
                a: 'Je krijgt maandelijks een helder overzicht van de belangrijkste cijfers: kosten, conversies, ROAS en wat we de komende maand gaan doen. Geen dashboards waar je niks van snapt. We leggen uit wat de cijfers betekenen voor jouw omzet.'
            },
            {
                q: 'Wat kost een samenwerking met Empowers?',
                a: 'Onze tarieven hangen af van de diensten en de omvang van je campagnes. We bespreken dit altijd open in het eerste gesprek, zodat je precies weet waar je aan toe bent. Geen verborgen kosten, geen verrassingen.'
            },
            {
                q: 'Ik heb nog nooit geadverteerd. Kan ik toch bij jullie terecht?',
                a: 'Ja, daar zijn we juist voor. We begeleiden je van de eerste campagne-opzet tot een volledige groeistrategie. Je hoeft geen verstand te hebben van online marketing, dat is precies waarom je ons inschakelt.'
            },
            {
                q: 'Hoe begin ik?',
                a: 'Plan een gratis strategiegesprek via onze website. We bespreken jouw situatie, doelen en budget, en je gaat altijd weg met concrete inzichten, ook als we uiteindelijk niet gaan samenwerken.'
            }
        ]
    },
    {
        title: 'Google Ads',
        id: 'google-ads',
        faqs: [
            {
                q: 'Wat kost Google Ads per klik in Nederland?',
                a: 'De kosten per klik variëren sterk per branche. In e-commerce betaal je gemiddeld €0,50 tot €2,00 per klik, in de zakelijke dienstverlening kan dat oplopen tot €5,00 of meer. De werkelijke kosten hangen af van je zoekwoorden, concurrentie en Quality Score.',
                cta: 'Wil je weten wat de kosten in jouw branche zijn? We berekenen het graag in een vrijblijvend gesprek.',
                blog: { slug: '/blogs/google-ads/sea-cpc-benchmarks-per-branche-nederland', label: 'CPC benchmarks per branche' }
            },
            {
                q: 'Hoe weet ik of mijn Google Ads campagne goed presteert?',
                a: 'Kijk niet alleen naar klikken en vertoningen, maar naar wat echt telt: conversies, kosten per conversie en ROAS. Een goede CTR ligt boven de 3%, maar dat zegt niks als die klikken niet converteren. Wij rapporteren altijd op resultaat, niet op ijdelheidsmetrics.',
                cta: 'Twijfel je over je resultaten? We doen een gratis campagne-check.',
                blog: { slug: '/blogs/google-ads/google-ads-rapportage-metrics-echt', label: 'Welke Google Ads metrics zijn echt belangrijk' }
            },
            {
                q: 'Wat is Performance Max en wanneer gebruik ik het?',
                a: 'Performance Max is een campagnetype van Google dat automatisch advertenties toont op alle Google-kanalen: Search, Display, YouTube, Gmail en Maps. Het werkt goed voor e-commerce en bedrijven met voldoende conversiedata. Voor nieuwe accounts of kleine budgetten raden we vaak eerst Search-campagnes aan.',
                cta: 'Benieuwd of Performance Max geschikt is voor jouw situatie? Neem contact op voor een vrijblijvend advies.',
                blog: { slug: '/blogs/google-ads/performance-max-google-ads-weten', label: 'Alles over Performance Max' }
            },
            {
                q: 'Google Ads uitbesteden of zelf doen: wanneer loont het?',
                a: 'Zelf doen kan als je een klein budget hebt en bereid bent om te leren. Maar zodra je meer dan €1.000 per maand uitgeeft, loont uitbesteden vrijwel altijd. Een specialist voorkomt verspilling, optimaliseert sneller en haalt meer rendement uit hetzelfde budget.',
                cta: 'Wil je weten wat het je oplevert? Plan een gratis strategiegesprek.',
                blog: { slug: '/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf', label: 'Google Ads uitbesteden: wanneer wel en niet' }
            },
            {
                q: 'Wat zijn negatieve zoekwoorden en waarom zijn ze belangrijk?',
                a: 'Negatieve zoekwoorden zijn termen waarvoor je niet wilt verschijnen. Zonder goede negatieven betaal je voor irrelevante klikken van mensen die iets heel anders zoeken. Het goed instellen en bijhouden van negatieven is een van de snelste manieren om je Google Ads kosten te verlagen.',
                cta: 'Wij controleren dit graag voor je. Neem vrijblijvend contact op.',
                blog: { slug: '/blogs/google-ads/negatieve-zoekwoorden-google-ads', label: 'Negatieve zoekwoorden instellen' }
            }
        ]
    },
    {
        title: 'Meta Ads',
        id: 'meta-ads',
        faqs: [
            {
                q: 'Wat is een goede ROAS voor Meta Ads?',
                a: 'Dat hangt af van je marges en branche. Voor e-commerce is een ROAS van 4 of hoger een goede benchmark. Voor leadgeneratie kijk je meer naar kosten per lead. Vergelijk altijd met je eigen marges. Een ROAS van 3 is uitstekend als je marge 70% is, maar te laag bij 20%.',
                cta: 'Wil je weten of jouw ROAS gezond is? We kijken gratis mee.',
                blog: { slug: '/blogs/social-ads/goede-roas-meta-ads-benchmarks', label: 'ROAS benchmarks per branche' }
            },
            {
                q: 'Werken Meta Ads nog na alle privacywijzigingen?',
                a: 'Ja, maar de aanpak is veranderd. Sinds iOS 14 is tracking lastiger, maar met de Conversie API, goede first-party data en brede targeting werkt Meta Ads nog steeds uitstekend. Bureaus die zeggen dat het niet meer werkt, weten waarschijnlijk niet hoe ze zich moeten aanpassen.',
                cta: 'Wil je zeker weten dat jouw tracking goed staat? We checken het graag.',
                blog: { slug: '/blogs/social-ads/meta-ads-2025-werkt-na', label: 'Meta Ads na de privacywijzigingen' }
            },
            {
                q: 'Meta Ads voor B2B: heeft dat zin?',
                a: 'Ja, en het werkt beter dan veel mensen verwachten. Zakelijke beslissers zitten ook op Facebook en Instagram. Met de juiste targeting en een goede funnel kun je via Meta Ads B2B-leads genereren tegen lagere kosten dan LinkedIn. De aanpak is wel anders dan bij B2C.',
                cta: 'Benieuwd of Meta Ads werkt voor jouw B2B-doelgroep? Neem vrijblijvend contact op.',
                blog: { slug: '/blogs/social-ads/meta-ads-b2b-werkt', label: 'Meta Ads voor B2B' }
            },
            {
                q: 'Wat is retargeting en hoe zet ik het in via Meta?',
                a: 'Retargeting toont advertenties aan mensen die al eerder je website hebben bezocht of met je content hebben geïnterageerd. Via Meta kun je deze mensen opnieuw bereiken met gerichte boodschappen. Omdat deze mensen je al kennen, liggen de kosten per conversie vaak veel lager dan bij koude doelgroepen.',
                cta: 'Wil je retargeting inzetten? We helpen je met de opzet.',
                blog: { slug: '/blogs/social-ads/retargeting-meta-ads-haal-verloren', label: 'Retargeting via Meta Ads' }
            },
            {
                q: 'Wat kost adverteren op Instagram in 2026?',
                a: 'De gemiddelde CPM (kosten per 1.000 vertoningen) op Instagram ligt tussen de €5 en €15, afhankelijk van je doelgroep en branche. Reels zijn over het algemeen goedkoper dan feed-advertenties. Met een budget van €300 per maand kun je al zinvol starten.',
                cta: 'Wil je weten wat een realistisch budget is voor jouw doelen? Plan een gratis gesprek.',
                blog: { slug: '/blogs/social-ads/instagram-adverteren-kosten-cpm-budget-2026', label: 'Instagram Ads kosten en budget' }
            }
        ]
    },
    {
        title: 'LinkedIn Ads',
        id: 'linkedin-ads',
        faqs: [
            {
                q: 'Is LinkedIn Ads geschikt voor mijn bedrijf?',
                a: 'LinkedIn Ads werken goed als jouw klant een beslisser is. Denk aan CEO\'s, marketing managers of inkoopverantwoordelijken. Je kunt targeten op functietitel, bedrijfsgrootte en branche. Geen enkel ander platform kan dat zo precies.',
                cta: 'Wil je weten of LinkedIn Ads bij jouw doelgroep past? Neem vrijblijvend contact op.'
            },
            {
                q: 'Hoeveel budget heb ik minimaal nodig voor LinkedIn Ads?',
                a: 'LinkedIn Ads is duurder dan andere platformen. Reken op minimaal €1.000 per maand om zinvolle resultaten te boeken. De CPC ligt gemiddeld tussen de €3 en €8, maar de lead-kwaliteit is doorgaans hoger dan op andere platformen. Voor B2B is die investering vaak de moeite waard.',
                cta: 'Benieuwd wat een realistisch budget is voor jouw situatie? We denken graag mee.',
                blog: { slug: '/blogs/social-ads/linkedin-ads-budget-hoeveel-minimaal', label: 'LinkedIn Ads budget berekenen' }
            },
            {
                q: 'LinkedIn Ads vs Google Ads voor B2B: welke is beter?',
                a: 'Dat hangt af van je product en doelgroep. Google Ads werkt goed als mensen actief zoeken naar jouw dienst. LinkedIn Ads is sterker als je beslissers wilt bereiken die nog niet zoeken maar wel openstaan. De beste B2B-strategie combineert vaak beide kanalen.',
                cta: 'Wil je weten welk kanaal voor jou het best werkt? We adviseren je graag.',
                blog: { slug: '/blogs/social-ads/linkedin-ads-vs-google-ads', label: 'LinkedIn Ads vs Google Ads vergelijking' }
            },
            {
                q: 'Wat zijn LinkedIn Lead Gen Forms en wanneer gebruik ik ze?',
                a: 'Lead Gen Forms zijn vooringevulde formulieren die binnen LinkedIn openen. De gebruiker hoeft niks in te typen, LinkedIn vult naam, e-mail en functietitel automatisch in. Dat levert hogere conversieratio\'s op dan een externe landingspagina. Ideaal voor whitepapers, webinars en demo-aanvragen.',
                cta: 'Wil je Lead Gen Forms testen? We zetten het voor je op.',
                blog: { slug: '/blogs/social-ads/linkedin-lead-gen-forms-waarom', label: 'LinkedIn Lead Gen Forms uitgelegd' }
            },
            {
                q: 'Kan ik LinkedIn Ads inzetten voor Account-Based Marketing?',
                a: 'Ja. Je kunt op LinkedIn targeten op specifieke bedrijven, functietitels en zelfs individuele accounts. Zo toon je je advertenties alleen aan beslissers binnen je target accounts en besteed je je budget precies waar het moet.',
                cta: 'Wil je ABM via LinkedIn opzetten? Neem contact op voor een vrijblijvend gesprek.',
                blog: { slug: '/blogs/social-ads/linkedin-abm-account-based-marketing', label: 'LinkedIn ABM strategie' }
            }
        ]
    },
    {
        title: 'TikTok Ads',
        id: 'tiktok-ads',
        faqs: [
            {
                q: 'Is TikTok Ads geschikt voor mijn bedrijf?',
                a: 'TikTok is niet alleen voor tieners. Het platform bereikt in Nederland miljoenen volwassenen, inclusief professionals en koopkrachtige doelgroepen. Het werkt vooral goed als je een visueel product hebt of bereid bent om authentieke videocontent te maken. Ook voor B2B zien we steeds vaker goede resultaten.',
                cta: 'Benieuwd of TikTok werkt voor jouw product? Neem vrijblijvend contact op.',
                blog: { slug: '/blogs/social-ads/tiktok-ads-voor-bedrijven', label: 'TikTok Ads voor bedrijven' }
            },
            {
                q: 'TikTok Ads vs Meta Ads: waar zit mijn doelgroep?',
                a: 'Dat overlapt meer dan je denkt. Beide platformen bereiken breed, maar TikTok trekt gemiddeld een jonger publiek (18-34) en draait volledig op video. Meta biedt meer advertentieformaten en een breder leeftijdsbereik. De beste keuze hangt af van je product en of je videocontent kunt maken.',
                cta: 'Twijfel je tussen TikTok en Meta? We adviseren je graag in een gratis gesprek.',
                blog: { slug: '/blogs/social-ads/tiktok-ads-vs-meta-ads', label: 'TikTok vs Meta Ads vergelijking' }
            },
            {
                q: 'Wat kost adverteren op TikTok?',
                a: 'TikTok is over het algemeen goedkoper dan Meta en LinkedIn. De gemiddelde CPM ligt tussen de €3 en €10. Je kunt al starten met een dagbudget van €20. De kosten per conversie hangen sterk af van je creative. Een goede video maakt meer verschil dan je budget.',
                cta: 'Wil je weten wat TikTok Ads jou kan opleveren? Plan een vrijblijvend strategiegesprek.',
                blog: { slug: '/blogs/social-ads/goede-cpm-tiktok-benchmarks', label: 'TikTok CPM benchmarks' }
            },
            {
                q: 'Hoe maak ik een TikTok advertentie die converteert?',
                a: 'Vergeet gepolijste commercials. Op TikTok werkt authentieke, native content het best. Film met je telefoon, begin met een hook in de eerste twee seconden en laat het product of de dienst natuurlijk zien. User-generated content en influencer samenwerkingen scoren vaak beter dan studioproducties.',
                cta: 'Hulp nodig bij je TikTok-creatives? We denken graag mee.',
                blog: { slug: '/blogs/social-ads/tiktok-ads-video-converteert', label: 'TikTok Ads video tips' }
            }
        ]
    },
    {
        title: 'SEO',
        id: 'seo',
        faqs: [
            {
                q: 'Hoe lang duurt het voordat SEO resultaat oplevert?',
                a: 'Reken op drie tot zes maanden voor zichtbare resultaten. Nieuwe websites hebben langer nodig dan bestaande sites met enige autoriteit. SEO is geen quick fix, het is een investering die na verloop van tijd steeds meer oplevert zonder dat je per klik betaalt.',
                cta: 'Wil je weten wat realistische verwachtingen zijn voor jouw website? Neem vrijblijvend contact op.',
                blog: { slug: '/blogs/seo/lang-duurt-seo-realistische-verwachtingen', label: 'Realistische SEO verwachtingen' }
            },
            {
                q: 'Wat is het verschil tussen on-page en off-page SEO?',
                a: 'On-page SEO is alles wat je op je eigen website doet: content, titels, snelheid, structuur. Off-page SEO gaat over signalen van buitenaf: backlinks, vermeldingen en autoriteit. Je hebt beide nodig, maar beginnen met on-page is altijd de eerste stap.',
                cta: 'Wil je weten waar jouw website nu staat? We doen een gratis SEO-check.',
                blog: { slug: '/blogs/seo/on-page-vs-off-page', label: 'On-page vs off-page SEO' }
            },
            {
                q: 'Wat is E-E-A-T en waarom is het belangrijk voor mijn website?',
                a: 'E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness. Het is hoe Google beoordeelt of jouw content betrouwbaar is. Laat zien wie de auteur is, toon ervaring, gebruik bronnen en zorg dat je website veilig en professioneel oogt. Dit weegt steeds zwaarder in de rankings.',
                cta: 'Wil je weten hoe jouw website scoort op E-E-A-T? We kijken gratis mee.',
                blog: { slug: '/blogs/seo/eeat-belangrijk-voor-seo', label: 'E-E-A-T uitgelegd' }
            },
            {
                q: 'Is SEO nog de moeite waard nu AI zo opkomt?',
                a: 'Ja. Google is nog steeds de grootste zoekmachine en dat blijft voorlopig zo. AI-tools zoals ChatGPT en Perplexity gebruiken bovendien dezelfde soort bronnen als Google. Goede SEO helpt je dus in zowel traditionele zoekresultaten als in AI-antwoorden.',
                cta: 'Wil je ontdekken hoe SEO en GEO samen voor jou kunnen werken? Plan een gratis gesprek.',
                blog: { slug: '/blogs/algemeen/seo-dood-evolueert-2026', label: 'Is SEO dood in 2026?' }
            },
            {
                q: 'Moet ik SEO uitbesteden of kan ik het zelf?',
                a: 'De basis kun je zelf: goede titels, snelle website, regelmatig content publiceren. Maar voor technische SEO, linkbuilding en een doordachte contentstrategie heb je specialistische kennis nodig. Als je serieus wilt groeien in organisch verkeer, loont uitbesteden vrijwel altijd.',
                cta: 'Benieuwd wat SEO uitbesteden je oplevert? Neem vrijblijvend contact op.',
                blog: { slug: '/blogs/seo/zoekmachine-optimalisatie-bureau-kiezen-gids', label: 'SEO bureau kiezen' }
            }
        ]
    },
    {
        title: 'GEO',
        id: 'geo',
        faqs: [
            {
                q: 'Wat is GEO en waarom is het belangrijk?',
                a: 'GEO staat voor Generative Engine Optimization. Waar SEO ervoor zorgt dat je gevonden wordt op Google, zorgt GEO ervoor dat AI-tools zoals ChatGPT, Gemini en Claude jouw bedrijf aanbevelen. Steeds meer mensen zoeken via AI in plaats van via Google. Als je daar nu op inspeelt, loop je voor op je concurrenten.',
                cta: 'Wil je weten hoe jouw bedrijf scoort bij AI-zoekmachines? We checken het gratis voor je.',
                blog: { slug: '/blogs/geo/wat-is-geo-generative-engine-optimization', label: 'Wat is GEO?' }
            },
            {
                q: 'Hoe zorg ik dat ChatGPT mijn bedrijf aanbeveelt?',
                a: 'Door content te maken die AI-zoekmachines als betrouwbare bron herkennen. Denk aan duidelijke antwoorden op veelgestelde vragen, concrete cijfers in je teksten en goede structured data op je website. GEO richt zich daar specifiek op.',
                cta: 'Benieuwd of ChatGPT jouw bedrijf al noemt? We testen het voor je.',
                blog: { slug: '/blogs/geo/chatgpt-bedrijf-aanbeveelt', label: 'Hoe ChatGPT jouw bedrijf aanbeveelt' }
            },
            {
                q: 'Wat is het verschil tussen SEO en GEO?',
                a: 'SEO optimaliseert je website voor zoekmachines als Google, zodat je hoger verschijnt in de zoekresultaten. GEO optimaliseert je content voor AI-zoekmachines als ChatGPT, Perplexity en Google AI Mode, zodat zij jouw bedrijf aanbevelen in hun antwoorden. SEO draait om rankings, GEO om citaties. De twee vullen elkaar aan en veel technieken overlappen.',
                cta: 'Wil je weten hoe je beide kunt combineren? Neem vrijblijvend contact op.',
                blog: { slug: '/blogs/geo/geo-vs-seo-verschil-heb', label: 'GEO vs SEO: het verschil' }
            },
            {
                q: 'Hoe meet ik of AI-zoekmachines mijn website citeren?',
                a: 'Je kunt dit handmatig testen door vragen over jouw vakgebied te stellen aan ChatGPT, Perplexity en Google AI Mode en te kijken of jouw website wordt genoemd. Er zijn ook tools die dit automatisch monitoren.',
                cta: 'Wil je inzicht in jouw AI-zichtbaarheid? We meten het gratis voor je.',
                blog: { slug: '/blogs/geo/llm-zichtbaarheid-meten-ai-ziet', label: 'LLM-zichtbaarheid meten' }
            },
            {
                q: 'Is GEO al nodig voor MKB of kan ik nog wachten?',
                a: 'Hoe eerder je begint, hoe groter je voorsprong. AI-zoekmachines groeien snel en steeds meer consumenten gebruiken ze. Bedrijven die nu investeren in GEO bouwen een positie op die later moeilijk in te halen is. Je hoeft niet alles tegelijk te doen, begin met de basis.',
                cta: 'Wil je alvast beginnen met GEO? We helpen je op weg met een gratis scan.',
                blog: { slug: '/blogs/geo/geo-mkb-nodig-kun-wachten', label: 'GEO voor MKB' }
            }
        ]
    },
    {
        title: 'Conversie & Strategie',
        id: 'conversie-strategie',
        faqs: [
            {
                q: 'Wat is een goede conversieratio per branche?',
                a: 'Het gemiddelde verschilt sterk: e-commerce zit rond de 2-3%, zakelijke dienstverlening rond 3-5%, en SaaS tussen 5-7%. Maar vergelijken met gemiddelden is misleidend. Belangrijker is dat jouw conversieratio elke maand verbetert.',
                cta: 'Wil je weten waar jouw conversieratio staat? We kijken gratis mee.',
                blog: { slug: '/blogs/strategie/goede-conversieratio-benchmarks-per-branche', label: 'Conversieratio benchmarks' }
            },
            {
                q: 'Content marketing vs betaalde advertenties: wat werkt beter?',
                a: 'Allebei, maar ze doen iets anders. Betaalde advertenties leveren direct verkeer en conversies. Content marketing bouwt op de lange termijn autoriteit en organisch bereik op. De meeste bedrijven varen het best met een combinatie van beide.',
                cta: 'Wil je weten wat de slimste mix is voor jouw bedrijf? Plan een gratis strategiegesprek.',
                blog: { slug: '/blogs/strategie/content-marketing-vs-betaalde-advertenties', label: 'Content marketing vs ads' }
            },
            {
                q: 'Hoe meet ik de ROI van mijn online marketing?',
                a: 'Door elke euro die je uitgeeft te koppelen aan meetbaar resultaat. Dat begint met goede tracking: Google Analytics, conversie-tracking op je advertentieplatformen en UTM-parameters.',
                cta: 'Wil je zeker weten dat je tracking goed staat? We checken het graag voor je.',
                blog: { slug: '/blogs/tracking/meet-roi-online-marketing', label: 'ROI van online marketing meten' }
            },
            {
                q: 'Heb ik een aparte landingspagina nodig voor mijn advertenties?',
                a: 'In de meeste gevallen wel. Je homepage is gebouwd voor alle bezoekers, een landingspagina is gericht op één doelgroep met één boodschap. Dat verschil vertaalt zich direct in een hogere conversieratio.',
                cta: 'Wil je een landingspagina die converteert? Neem contact op voor een vrijblijvend gesprek.',
                blog: { slug: '/blogs/strategie/landingspagina-waarom-hij-anders-homepage', label: 'Waarom een landingspagina' }
            }
        ]
    }
];

// Flatten alle FAQ's voor het schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div className="border-b border-primary/10">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-start sm:items-center justify-between gap-6 text-left focus:outline-none group"
            >
                <h3 className="font-sans font-bold text-lg md:text-xl text-primary group-hover:text-accent transition-colors pr-8">
                    {faq.q}
                </h3>
                <div className={`shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] mt-1 sm:mt-0 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}>
                <div className="overflow-hidden">
                    <p className="font-sans text-primary/70 leading-relaxed max-w-3xl pr-4 sm:pr-12">
                        {faq.a}
                    </p>
                    {faq.cta && (
                        <Link to="/contact" className="inline-flex items-center gap-1.5 font-sans font-medium text-accent mt-3 hover:underline transition-colors">
                            {faq.cta} <ArrowRight className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openId, setOpenId] = useState('over-empowers-0');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Veelgestelde Vragen over Online Marketing | Empowers FAQ</title>
                <meta name="description" content="Antwoorden op veelgestelde vragen over Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO, GEO, conversie-optimalisatie en samenwerken met Empowers." />
                <link rel="canonical" href="https://www.empowers.nl/faq" />
                <meta property="og:title" content="Veelgestelde Vragen over Online Marketing | Empowers FAQ" />
                <meta property="og:description" content="Antwoorden op veelgestelde vragen over Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO, GEO, conversie-optimalisatie en samenwerken met Empowers." />
                <meta property="og:url" content="https://www.empowers.nl/faq" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="nl_NL" />
                <meta property="og:site_name" content="Empowers" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@empowersnl" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "FAQPage",
                                "mainEntity": allFaqs.map(faq => ({
                                    "@type": "Question",
                                    "name": faq.q,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.cta ? faq.a + ' ' + faq.cta : faq.a
                                    }
                                }))
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.empowers.nl/faq" }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <Navbar />

            <section className="flex-1 w-full pt-40 pb-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 md:mb-12 text-center md:text-left">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">Kennisbank</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Jouw vragen.<br />Onze antwoorden.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg max-w-2xl mx-auto md:mx-0">
                            Alles wat je wilt weten over onze werkwijze, prijzen en de integratie van betaalde en organische groei via SEO & GEO.
                        </p>
                    </div>

                    <FAQDiscoveryAnimation />

                    {/* FAQ Categories */}
                    {faqCategories.map(category => (
                        <section key={category.id} id={category.id} className="mb-16 scroll-mt-32">
                            <h2 className="font-sans font-bold text-2xl md:text-3xl text-primary mb-2">
                                {category.title}
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-8" />

                            <div className="w-full">
                                {category.faqs.map((faq, idx) => (
                                    <FAQItem
                                        key={`${category.id}-${idx}`}
                                        faq={faq}
                                        isOpen={openId === `${category.id}-${idx}`}
                                        onClick={() => toggleFaq(`${category.id}-${idx}`)}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Call to action below FAQ */}
                    <div className="mt-12 p-8 sm:p-10 md:p-14 bg-primary rounded-[2rem] sm:rounded-[3rem] text-center relative overflow-hidden flex flex-col items-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Staat je vraag er niet tussen?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">Stuur ons direct een bericht en we beantwoorden hem zo snel mogelijk.</p>

                        <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                            Neem contact op
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-accent/90 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-label="Scroll naar boven"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </main>
    );
}

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Diensten from './pages/Diensten';
import About from './pages/About';
import Nieuws from './pages/Nieuws';
import BlogPostGeo from './pages/BlogPostGeo';
import BlogPostMetaAds from './pages/BlogPostMetaAds';
import BlogPostTikTokAds from './pages/BlogPostTikTokAds';
import BlogPostTracking from './pages/BlogPostTracking';
import BlogPostSeo from './pages/BlogPostSeo';
import BlogPostGoogleAds from './pages/BlogPostGoogleAds';
import BlogPostStrategie from './pages/BlogPostStrategie';
import BlogPostAlgemeen from './pages/BlogPostAlgemeen';
import BlogPostGoogleAdsVsSeoWerkt from './pages/BlogPostGoogleAdsVsSeoWerkt';
import BlogPostWaaromGoogleAdsKlikkenConverteren from './pages/BlogPostWaaromGoogleAdsKlikkenConverteren';
import BlogPostOptimaliseerContentGoogleAiOverviews from './pages/BlogPostOptimaliseerContentGoogleAiOverviews';
import BlogPostVerbeterenGoogleAiOverviewsCtr from './pages/BlogPostVerbeterenGoogleAiOverviewsCtr';
import BlogPostSchrijfBetereGoogleAdsAi from './pages/BlogPostSchrijfBetereGoogleAdsAi';
import BlogPostLookalikeAudiencesMetaAdsGids from './pages/BlogPostLookalikeAudiencesMetaAdsGids';
import BlogPostSeoStrategieVervangenDoorGeo from './pages/BlogPostSeoStrategieVervangenDoorGeo';
import BlogPostUtmParametersGebruikenAlleMarketingkanalen from './pages/BlogPostUtmParametersGebruikenAlleMarketingkanalen';
import BlogPostAiDigitaleMarketing from './pages/BlogPostAiDigitaleMarketing';
import BlogPostAiMarketingwereldVerandert2025 from './pages/BlogPostAiMarketingwereldVerandert2025';
import BlogPostHoeLangDuurtSeo from './pages/BlogPostHoeLangDuurtSeo';
import BlogPostGoogleAdsUitbesteden from './pages/BlogPostGoogleAdsUitbesteden';
import BlogPostMetaAds2025Privacywijzigingen from './pages/BlogPostMetaAds2025Privacywijzigingen';
import BlogPostChatgptBedrijfAanbeveelt from './pages/BlogPostChatgptBedrijfAanbeveelt';
import BlogPostGoogleTagManagerBeginners from './pages/BlogPostGoogleTagManagerBeginners';
import BlogPostConversieratioBenchmarksPerBranche from './pages/BlogPostConversieratioBenchmarksPerBranche';
import BlogPostOnlineMarketingBureau from './pages/BlogPostOnlineMarketingBureau';
import BlogPostFacebookVsInstagramAdverteren from './pages/BlogPostFacebookVsInstagramAdverteren';
import BlogPostMetaPixelInstellen from './pages/BlogPostMetaPixelInstellen';
import BlogPostTechnischeSeoChecklist from './pages/BlogPostTechnischeSeoChecklist';
import BlogPostGeoVsSeo from './pages/BlogPostGeoVsSeo';
import BlogPostSeaUitbesteden from './pages/BlogPostSeaUitbesteden';
import BlogPostB2bMarketingBureauVsZelf from './pages/BlogPostB2bMarketingBureauVsZelf';
import BlogPostAiSeo2025 from './pages/BlogPostAiSeo2025';
import BlogPostSeoUitbestedenZelfEerlijkAntwoord from './pages/BlogPostSeoUitbestedenZelfEerlijkAntwoord';
import BlogPostKiesJuisteOnlineMarketingBureau from './pages/BlogPostKiesJuisteOnlineMarketingBureau';
import BlogPostMetaAdsUitbesteden from './pages/BlogPostMetaAdsUitbesteden';
import BlogPostSmartBiddingUitgelegd from './pages/BlogPostSmartBiddingUitgelegd';
import BlogPostSeoMarketingBureauKiezen from './pages/BlogPostSeoMarketingBureauKiezen';
import BlogPostAiZoekmachinesVsGoogle from './pages/BlogPostAiZoekmachinesVsGoogle';
import BlogPostLinkedInAdsBeginners from './pages/BlogPostLinkedInAdsBeginners';
import BlogPostLinkedInAdverterenGoogleAds from './pages/BlogPostLinkedInAdverterenGoogleAds';
import BlogPostLandingspaginaWaaromAnders from './pages/BlogPostLandingspaginaWaaromAnders';
import BlogPostLandingspaginaSchrijvenConverteert from './pages/BlogPostLandingspaginaSchrijvenConverteert';
import BlogPostAiGoogleAdsAdvertentietekstVerbeteren from './pages/BlogPostAiGoogleAdsAdvertentietekstVerbeteren';
import BlogPostLongTailKeywordsGoogleAds from './pages/BlogPostLongTailKeywordsGoogleAds';
import BlogPostGoogleAdsQualityScoreVerhogen from './pages/BlogPostGoogleAdsQualityScoreVerhogen';
import BlogPostRetargetingMetaAdsHaalVerloren from './pages/BlogPostRetargetingMetaAdsHaalVerloren';
import BlogPostMeestVoorkomendeProblemenGoogleAds from './pages/BlogPostMeestVoorkomendeProblemenGoogleAds';
import BlogPostWinnendeMetaAdsVideo2026 from './pages/BlogPostWinnendeMetaAdsVideo2026';
import BlogPostLinkedInSponsoredContentVsMessage from './pages/BlogPostLinkedInSponsoredContentVsMessage';
import BlogPostContentStructurerenAi from './pages/BlogPostContentStructurerenAi';
import BlogPostMeetRoiGoogleAdsCampagne from './pages/BlogPostMeetRoiGoogleAdsCampagne';
import BlogPostVerlaagCpcGoogleAdsMinder from './pages/BlogPostVerlaagCpcGoogleAdsMinder';
import BlogPostTikTokAdverterenViralTeHoeven from './pages/BlogPostTikTokAdverterenViralTeHoeven';
import BlogPostMetaAdsWebshopsVerhoogOmzet from './pages/BlogPostMetaAdsWebshopsVerhoogOmzet';
import BlogPostOffPageSeo from './pages/BlogPostOffPageSeo';
import BlogPostNegatieveZoekwoordenGoogleAds from './pages/BlogPostNegatieveZoekwoordenGoogleAds';
import BlogPostSchrijfContentAiToolsCiteren from './pages/BlogPostSchrijfContentAiToolsCiteren';
import BlogPostGoogleAdsDisplayVsSearch from './pages/BlogPostGoogleAdsDisplayVsSearch';
import BlogPostTikTokSparkAdsVsReguliere from './pages/BlogPostTikTokSparkAdsVsReguliere';
import BlogPostGoogleAdsLokaleBedrijven from './pages/BlogPostGoogleAdsLokaleBedrijven';
import BlogPostSchrijfGoogleAdsAdvertentieGeklikt from './pages/BlogPostSchrijfGoogleAdsAdvertentieGeklikt';
import BlogPostGoedeCtrGoogleAdsBenchmarks from './pages/BlogPostGoedeCtrGoogleAdsBenchmarks';
import BlogPostMetaAdsDoelgroepenInstellen from './pages/BlogPostMetaAdsDoelgroepenInstellen';
import BlogPostBacklinksOpbouwen from './pages/BlogPostBacklinksOpbouwen';
import BlogPostGoogleAdsCommerceVerhoogRoas from './pages/BlogPostGoogleAdsCommerceVerhoogRoas';
import BlogPostPerformanceMaxGoogleAdsWeten from './pages/BlogPostPerformanceMaxGoogleAdsWeten';
import BlogPostGoogleAdsCampagneStructuur from './pages/BlogPostGoogleAdsCampagneStructuur';
import BlogPostLinkedInLeadGenFormsWaarom from './pages/BlogPostLinkedInLeadGenFormsWaarom';
import BlogPostChatgptWebsiteCiteren from './pages/BlogPostChatgptWebsiteCiteren';
import BlogPostAiZoekmachinesBronnen from './pages/BlogPostAiZoekmachinesBronnen';
import BlogPostGoogleAdsAutomatiseren from './pages/BlogPostGoogleAdsAutomatiseren';
import BlogPostGoogleShopping from './pages/BlogPostGoogleShopping';
import BlogPostZoekwoordenonderzoek2026 from './pages/BlogPostZoekwoordenonderzoek2026';
import BlogPostAbTestenBeginners from './pages/BlogPostAbTestenBeginners';
import BlogPostGoogleAdsB2b from './pages/BlogPostGoogleAdsB2b';
import BlogPostZoekintentieGoogleAds from './pages/BlogPostZoekintentieGoogleAds';
import BlogPostGoogleAdsSchalen from './pages/BlogPostGoogleAdsSchalen';
import BlogPostMetaAdsFunnel from './pages/BlogPostMetaAdsFunnel';
import BlogPostConversieApiMeta from './pages/BlogPostConversieApiMeta';
import BlogPostAiContentSeo from './pages/BlogPostAiContentSeo';
import BlogPostGoogleAdsDienstenbedrijven from './pages/BlogPostGoogleAdsDienstenbedrijven';
import BlogPostAboveTheFold from './pages/BlogPostAboveTheFold';
import BlogPostCoreWebVitalsVerbeteren from './pages/BlogPostCoreWebVitalsVerbeteren';
import BlogPostLinkedInAdsUitbestedenWanneerMoeite from './pages/BlogPostLinkedInAdsUitbestedenWanneerMoeite';
import BlogPostGoogleAdsExtensies from './pages/BlogPostGoogleAdsExtensies';
import BlogPostContentAudit from './pages/BlogPostContentAudit';
import BlogPostTiktokAdsUitbestedenBureau from './pages/BlogPostTiktokAdsUitbestedenBureau';
import BlogCategory from './pages/BlogCategory';
import GeoPage from './pages/GeoPage';
import SeoPage from './pages/SeoPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import MetaAdsPage from './pages/MetaAdsPage';
import LinkedInAdsPage from './pages/LinkedInAdsPage';
import TikTokAdsPage from './pages/TikTokAdsPage';
import LandingspaginaPage from './pages/LandingspaginaPage';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Empowers",
            "url": "https://www.empowers.nl",
            "logo": "https://www.empowers.nl/empowers-logo-color.svg",
            "email": "info@empowers.nl",
            "description": "Empowers is een online marketingbureau gespecialiseerd in Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO en GEO voor MKB-bedrijven en webshops in heel Nederland.",
            "areaServed": {
              "@type": "Country",
              "name": "Nederland"
            },
            "knowsAbout": ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "SEO", "GEO", "Generative Engine Optimization", "Online Marketing", "Performance Marketing"]
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Empowers",
            "url": "https://www.empowers.nl",
            "description": "Advertenties die groeien. Resultaten die tellen. Empowers verzorgt Google Ads, Meta Ads, SEO en GEO voor bedrijven in heel Nederland.",
            "inLanguage": "nl-NL",
            "publisher": {
              "@type": "Organization",
              "name": "Empowers",
              "url": "https://www.empowers.nl"
            }
          }`}
        </script>
        <meta property="og:site_name" content="Empowers" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@empowersnl" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/over-ons" element={<About />} />
        <Route path="/nieuws" element={<Nieuws />} />
        {/* Old blog routes - kept for backwards compatibility */}
        <Route path="/blog/wat-is-geo-generative-engine-optimization" element={<BlogPostGeo />} />
        <Route path="/blog/waarom-meta-ads-niet-converteren" element={<BlogPostMetaAds />} />
        <Route path="/blog/tiktok-ads-voor-bedrijven" element={<BlogPostTikTokAds />} />
        <Route path="/blog/marketing-tracking-conversies-meten" element={<BlogPostTracking />} />
        {/* New category-based blog routes (7 categorieën) */}
        <Route path="/blogs/geo/wat-is-geo-generative-engine-optimization" element={<BlogPostGeo />} />
        <Route path="/blogs/social-ads/waarom-meta-ads-niet-converteren" element={<BlogPostMetaAds />} />
        <Route path="/blogs/social-ads/tiktok-ads-voor-bedrijven" element={<BlogPostTikTokAds />} />
        <Route path="/blogs/tracking/marketing-tracking-conversies-meten" element={<BlogPostTracking />} />
        <Route path="/blogs/seo/seo-voor-mkb-google-positie-verbeteren" element={<BlogPostSeo />} />
        <Route path="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" element={<BlogPostGoogleAds />} />
        <Route path="/blogs/strategie/online-marketing-strategie-mkb" element={<BlogPostStrategie />} />
        <Route path="/blogs/algemeen/zelf-adverteren-of-uitbesteden" element={<BlogPostAlgemeen />} />
        <Route path="/blogs/google-ads/waarom-google-ads-klikken-converteren" element={<BlogPostWaaromGoogleAdsKlikkenConverteren />} />
        <Route path="/blogs/algemeen/google-ads-vs-seo-werkt" element={<BlogPostGoogleAdsVsSeoWerkt />} />
        <Route path="/blogs/geo/optimaliseer-content-google-ai-overviews" element={<BlogPostOptimaliseerContentGoogleAiOverviews />} />
        <Route path="/blogs/seo/verbeteren-google-ai-overviews-ctr" element={<BlogPostVerbeterenGoogleAiOverviewsCtr />} />
        <Route path="/blogs/google-ads/schrijf-betere-google-ads-ai" element={<BlogPostSchrijfBetereGoogleAdsAi />} />
        <Route path="/blogs/social-ads/lookalike-audiences-meta-ads-gids" element={<BlogPostLookalikeAudiencesMetaAdsGids />} />
        <Route path="/blogs/geo/seo-strategie-vervangen-door-geo" element={<BlogPostSeoStrategieVervangenDoorGeo />} />
        <Route path="/blogs/tracking/utm-parameters-gebruiken-alle-marketingkanalen" element={<BlogPostUtmParametersGebruikenAlleMarketingkanalen />} />
        <Route path="/blogs/strategie/ai-digitale-marketing" element={<BlogPostAiDigitaleMarketing />} />
        <Route path="/blogs/algemeen/ai-marketingwereld-verandert-2025" element={<BlogPostAiMarketingwereldVerandert2025 />} />
        <Route path="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" element={<BlogPostHoeLangDuurtSeo />} />
        <Route path="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" element={<BlogPostGoogleAdsUitbesteden />} />
        <Route path="/blogs/social-ads/meta-ads-2025-werkt-na" element={<BlogPostMetaAds2025Privacywijzigingen />} />
        <Route path="/blogs/geo/chatgpt-bedrijf-aanbeveelt" element={<BlogPostChatgptBedrijfAanbeveelt />} />
        <Route path="/blogs/tracking/google-tag-manager-beginners" element={<BlogPostGoogleTagManagerBeginners />} />
        <Route path="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" element={<BlogPostConversieratioBenchmarksPerBranche />} />
        <Route path="/blogs/algemeen/online-marketing-bureau" element={<BlogPostOnlineMarketingBureau />} />
        <Route path="/blogs/social-ads/facebook-vs-instagram-adverteren-welk" element={<BlogPostFacebookVsInstagramAdverteren />} />
        <Route path="/blogs/social-ads/meta-pixel-instellen-stap-stap" element={<BlogPostMetaPixelInstellen />} />
        <Route path="/blogs/seo/technische-seo-checklist-2025-website" element={<BlogPostTechnischeSeoChecklist />} />
        <Route path="/blogs/geo/geo-vs-seo-verschil-heb" element={<BlogPostGeoVsSeo />} />
        <Route path="/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" element={<BlogPostSeaUitbesteden />} />
        <Route path="/blogs/algemeen/b2b-marketing-bureau-vs-zelf" element={<BlogPostB2bMarketingBureauVsZelf />} />
        <Route path="/blogs/seo/ai-seo-2025-verandert-kunstmatige" element={<BlogPostAiSeo2025 />} />
        <Route path="/blogs/seo/seo-uitbesteden-zelf-eerlijk-antwoord" element={<BlogPostSeoUitbestedenZelfEerlijkAntwoord />} />
        <Route path="/blogs/algemeen/kies-juiste-online-marketing-bureau" element={<BlogPostKiesJuisteOnlineMarketingBureau />} />
        <Route path="/blogs/social-ads/meta-ads-uitbesteden-bureau-jou" element={<BlogPostMetaAdsUitbesteden />} />
        <Route path="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" element={<BlogPostSmartBiddingUitgelegd />} />
        <Route path="/blogs/seo/seo-marketing-bureau-kiezen-waar" element={<BlogPostSeoMarketingBureauKiezen />} />
        <Route path="/blogs/geo/ai-zoekmachines-vs-google-overal" element={<BlogPostAiZoekmachinesVsGoogle />} />
        <Route path="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" element={<BlogPostLinkedInAdsBeginners />} />
        <Route path="/blogs/social-ads/linkedin-adverteren-google-ads-werkt" element={<BlogPostLinkedInAdverterenGoogleAds />} />
        <Route path="/blogs/strategie/landingspagina-waarom-hij-anders-homepage" element={<BlogPostLandingspaginaWaaromAnders />} />
        <Route path="/blogs/strategie/landingspagina-schrijven-converteert" element={<BlogPostLandingspaginaSchrijvenConverteert />} />
        <Route path="/blogs/google-ads/ai-google-ads-advertentietekst-verbeteren" element={<BlogPostAiGoogleAdsAdvertentietekstVerbeteren />} />
        <Route path="/blogs/google-ads/long-tail-keywords-google-ads" element={<BlogPostLongTailKeywordsGoogleAds />} />
        <Route path="/blogs/google-ads/google-ads-quality-score-verhogen" element={<BlogPostGoogleAdsQualityScoreVerhogen />} />
        <Route path="/blogs/social-ads/retargeting-meta-ads-haal-verloren" element={<BlogPostRetargetingMetaAdsHaalVerloren />} />
        <Route path="/blogs/google-ads/meest-voorkomende-problemen-google-ads" element={<BlogPostMeestVoorkomendeProblemenGoogleAds />} />
        <Route path="/blogs/social-ads/winnende-meta-ads-video-2026" element={<BlogPostWinnendeMetaAdsVideo2026 />} />
        <Route path="/blogs/social-ads/linkedin-sponsored-content-vs-message" element={<BlogPostLinkedInSponsoredContentVsMessage />} />
        <Route path="/blogs/geo/content-structureren-ai" element={<BlogPostContentStructurerenAi />} />
        <Route path="/blogs/google-ads/meet-roi-google-ads-campagne" element={<BlogPostMeetRoiGoogleAdsCampagne />} />
        <Route path="/blogs/google-ads/verlaag-cpc-google-ads-minder" element={<BlogPostVerlaagCpcGoogleAdsMinder />} />
        <Route path="/blogs/social-ads/tiktok-adverteren-viral-te-hoeven" element={<BlogPostTikTokAdverterenViralTeHoeven />} />
        <Route path="/blogs/social-ads/meta-ads-webshops-verhoog-omzet" element={<BlogPostMetaAdsWebshopsVerhoogOmzet />} />
        <Route path="/blogs/seo/off-page-seo" element={<BlogPostOffPageSeo />} />
        <Route path="/blogs/google-ads/negatieve-zoekwoorden-google-ads" element={<BlogPostNegatieveZoekwoordenGoogleAds />} />
        <Route path="/blogs/geo/schrijf-content-ai-tools-citeren" element={<BlogPostSchrijfContentAiToolsCiteren />} />
        <Route path="/blogs/geo/chatgpt-website-citeren" element={<BlogPostChatgptWebsiteCiteren />} />
        <Route path="/blogs/geo/ai-zoekmachines-bronnen" element={<BlogPostAiZoekmachinesBronnen />} />
        <Route path="/blogs/google-ads/google-ads-automatiseren-tijdwinst-kwaliteitsverlies" element={<BlogPostGoogleAdsAutomatiseren />} />
        <Route path="/blogs/google-ads/google-shopping-adverteren-campagne" element={<BlogPostGoogleShopping />} />
        <Route path="/blogs/seo/zoekwoordenonderzoek-2026-complete-gids" element={<BlogPostZoekwoordenonderzoek2026 />} />
        <Route path="/blogs/strategie/a-b-testen-beginners-verhoog" element={<BlogPostAbTestenBeginners />} />
        <Route path="/blogs/google-ads/google-ads-b2b-bereik-zakelijke" element={<BlogPostGoogleAdsB2b />} />
        <Route path="/blogs/google-ads/zoekintentie-targeten-google-ads-goed" element={<BlogPostZoekintentieGoogleAds />} />
        <Route path="/blogs/google-ads/google-ads-schalen-zonder-budget" element={<BlogPostGoogleAdsSchalen />} />
        <Route path="/blogs/social-ads/effectieve-meta-ads-funnel" element={<BlogPostMetaAdsFunnel />} />
        <Route path="/blogs/social-ads/conversie-api-meta-naast-pixel" element={<BlogPostConversieApiMeta />} />
        <Route path="/blogs/seo/ai-content-seo-werkt-meer" element={<BlogPostAiContentSeo />} />
        <Route path="/blogs/google-ads/google-ads-dienstenbedrijven-werkt-anders" element={<BlogPostGoogleAdsDienstenbedrijven />} />
        <Route path="/blogs/strategie/above-the-fold-waarom-eerste" element={<BlogPostAboveTheFold />} />
        <Route path="/blogs/seo/core-web-vitals-verbeteren-scoort" element={<BlogPostCoreWebVitalsVerbeteren />} />
        <Route path="/blogs/social-ads/linkedin-ads-uitbesteden-wanneer-moeite" element={<BlogPostLinkedInAdsUitbestedenWanneerMoeite />} />
        <Route path="/blogs/google-ads/google-ads-display-vs-search" element={<BlogPostGoogleAdsDisplayVsSearch />} />
        <Route path="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" element={<BlogPostTikTokSparkAdsVsReguliere />} />
        <Route path="/blogs/google-ads/google-ads-lokale-bedrijven" element={<BlogPostGoogleAdsLokaleBedrijven />} />
        <Route path="/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" element={<BlogPostSchrijfGoogleAdsAdvertentieGeklikt />} />
        <Route path="/blogs/google-ads/goede-ctr-google-ads-benchmarks" element={<BlogPostGoedeCtrGoogleAdsBenchmarks />} />
        <Route path="/blogs/social-ads/meta-ads-doelgroepen" element={<BlogPostMetaAdsDoelgroepenInstellen />} />
        <Route path="/blogs/seo/backlinks-opbouwen" element={<BlogPostBacklinksOpbouwen />} />
        <Route path="/blogs/google-ads/google-ads-commerce-verhoog-roas" element={<BlogPostGoogleAdsCommerceVerhoogRoas />} />
        <Route path="/blogs/google-ads/performance-max-google-ads-weten" element={<BlogPostPerformanceMaxGoogleAdsWeten />} />
        <Route path="/blogs/google-ads/google-ads-campagne-structuur" element={<BlogPostGoogleAdsCampagneStructuur />} />
        <Route path="/blogs/social-ads/linkedin-lead-gen-forms-waarom" element={<BlogPostLinkedInLeadGenFormsWaarom />} />
        <Route path="/blogs/google-ads/google-ads-extensies-altijd-gebruiken" element={<BlogPostGoogleAdsExtensies />} />
        <Route path="/blogs/seo/content-audit" element={<BlogPostContentAudit />} />
        <Route path="/blogs/social-ads/tiktok-ads-uitbesteden-bureau-jou" element={<BlogPostTiktokAdsUitbestedenBureau />} />

        {/* /blogs/ redirect naar /nieuws */}
        <Route path="/blogs" element={<Navigate to="/nieuws" replace />} />
        {/* Categorie overzichtspagina's — /blogs/:category */}
        <Route path="/blogs/:category" element={<BlogCategory />} />
        {/* Oude routes — backwards compatibility */}
        <Route path="/blogs/meta-ads/waarom-meta-ads-niet-converteren" element={<BlogPostMetaAds />} />
        <Route path="/blogs/tiktok-ads/tiktok-ads-voor-bedrijven" element={<BlogPostTikTokAds />} />
        <Route path="/geo" element={<GeoPage />} />
        <Route path="/seo" element={<SeoPage />} />
        <Route path="/google-ads" element={<GoogleAdsPage />} />
        <Route path="/meta-ads" element={<MetaAdsPage />} />
        <Route path="/linkedin-ads" element={<LinkedInAdsPage />} />
        <Route path="/tiktok-ads" element={<TikTokAdsPage />} />
        <Route path="/landingspagina" element={<LandingspaginaPage />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

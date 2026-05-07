import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// Core pages — direct import (laden altijd snel)
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Diensten from './pages/Diensten';
import About from './pages/About';
import Nieuws from './pages/Nieuws';
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

// Blog pages — lazy loaded (laden pas wanneer bezocht)
const BlogPostGeo = lazy(() => import('./pages/BlogPostGeo'));
const BlogPostMetaAds = lazy(() => import('./pages/BlogPostMetaAds'));
const BlogPostTikTokAds = lazy(() => import('./pages/BlogPostTikTokAds'));
const BlogPostTracking = lazy(() => import('./pages/BlogPostTracking'));
const BlogPostSeo = lazy(() => import('./pages/BlogPostSeo'));
const BlogPostGoogleAds = lazy(() => import('./pages/BlogPostGoogleAds'));
const BlogPostStrategie = lazy(() => import('./pages/BlogPostStrategie'));
const BlogPostAlgemeen = lazy(() => import('./pages/BlogPostAlgemeen'));
const BlogPostGoogleAdsVsSeoWerkt = lazy(() => import('./pages/BlogPostGoogleAdsVsSeoWerkt'));
const BlogPostWaaromGoogleAdsKlikkenConverteren = lazy(() => import('./pages/BlogPostWaaromGoogleAdsKlikkenConverteren'));
const BlogPostOptimaliseerContentGoogleAiOverviews = lazy(() => import('./pages/BlogPostOptimaliseerContentGoogleAiOverviews'));
const BlogPostVerbeterenGoogleAiOverviewsCtr = lazy(() => import('./pages/BlogPostVerbeterenGoogleAiOverviewsCtr'));
const BlogPostSchrijfBetereGoogleAdsAi = lazy(() => import('./pages/BlogPostSchrijfBetereGoogleAdsAi'));
const BlogPostLookalikeAudiencesMetaAdsGids = lazy(() => import('./pages/BlogPostLookalikeAudiencesMetaAdsGids'));
const BlogPostSeoStrategieVervangenDoorGeo = lazy(() => import('./pages/BlogPostSeoStrategieVervangenDoorGeo'));
const BlogPostUtmParametersGebruikenAlleMarketingkanalen = lazy(() => import('./pages/BlogPostUtmParametersGebruikenAlleMarketingkanalen'));
const BlogPostAiDigitaleMarketing = lazy(() => import('./pages/BlogPostAiDigitaleMarketing'));
const BlogPostAiMarketingwereldVerandert2025 = lazy(() => import('./pages/BlogPostAiMarketingwereldVerandert2025'));
const BlogPostHoeLangDuurtSeo = lazy(() => import('./pages/BlogPostHoeLangDuurtSeo'));
const BlogPostGoogleAdsUitbesteden = lazy(() => import('./pages/BlogPostGoogleAdsUitbesteden'));
const BlogPostMetaAds2025Privacywijzigingen = lazy(() => import('./pages/BlogPostMetaAds2025Privacywijzigingen'));
const BlogPostChatgptBedrijfAanbeveelt = lazy(() => import('./pages/BlogPostChatgptBedrijfAanbeveelt'));
const BlogPostGoogleTagManagerBeginners = lazy(() => import('./pages/BlogPostGoogleTagManagerBeginners'));
const BlogPostConversieratioBenchmarksPerBranche = lazy(() => import('./pages/BlogPostConversieratioBenchmarksPerBranche'));
const BlogPostOnlineMarketingBureau = lazy(() => import('./pages/BlogPostOnlineMarketingBureau'));
const BlogPostFacebookVsInstagramAdverteren = lazy(() => import('./pages/BlogPostFacebookVsInstagramAdverteren'));
const BlogPostMetaPixelInstellen = lazy(() => import('./pages/BlogPostMetaPixelInstellen'));
const BlogPostTechnischeSeoChecklist = lazy(() => import('./pages/BlogPostTechnischeSeoChecklist'));
const BlogPostGeoVsSeo = lazy(() => import('./pages/BlogPostGeoVsSeo'));
const BlogPostSeaUitbesteden = lazy(() => import('./pages/BlogPostSeaUitbesteden'));
const BlogPostB2bMarketingBureauVsZelf = lazy(() => import('./pages/BlogPostB2bMarketingBureauVsZelf'));
const BlogPostAiSeo2025 = lazy(() => import('./pages/BlogPostAiSeo2025'));
const BlogPostSeoUitbestedenZelfEerlijkAntwoord = lazy(() => import('./pages/BlogPostSeoUitbestedenZelfEerlijkAntwoord'));
const BlogPostKiesJuisteOnlineMarketingBureau = lazy(() => import('./pages/BlogPostKiesJuisteOnlineMarketingBureau'));
const BlogPostMetaAdsUitbesteden = lazy(() => import('./pages/BlogPostMetaAdsUitbesteden'));
const BlogPostSmartBiddingUitgelegd = lazy(() => import('./pages/BlogPostSmartBiddingUitgelegd'));
const BlogPostSeoMarketingBureauKiezen = lazy(() => import('./pages/BlogPostSeoMarketingBureauKiezen'));
const BlogPostAiZoekmachinesVsGoogle = lazy(() => import('./pages/BlogPostAiZoekmachinesVsGoogle'));
const BlogPostLinkedInAdsBeginners = lazy(() => import('./pages/BlogPostLinkedInAdsBeginners'));
const BlogPostLinkedInAdverterenGoogleAds = lazy(() => import('./pages/BlogPostLinkedInAdverterenGoogleAds'));
const BlogPostLandingspaginaWaaromAnders = lazy(() => import('./pages/BlogPostLandingspaginaWaaromAnders'));
const BlogPostLandingspaginaSchrijvenConverteert = lazy(() => import('./pages/BlogPostLandingspaginaSchrijvenConverteert'));
const BlogPostAiGoogleAdsAdvertentietekstVerbeteren = lazy(() => import('./pages/BlogPostAiGoogleAdsAdvertentietekstVerbeteren'));
const BlogPostLongTailKeywordsGoogleAds = lazy(() => import('./pages/BlogPostLongTailKeywordsGoogleAds'));
const BlogPostGoogleAdsQualityScoreVerhogen = lazy(() => import('./pages/BlogPostGoogleAdsQualityScoreVerhogen'));
const BlogPostRetargetingMetaAdsHaalVerloren = lazy(() => import('./pages/BlogPostRetargetingMetaAdsHaalVerloren'));
const BlogPostMeestVoorkomendeProblemenGoogleAds = lazy(() => import('./pages/BlogPostMeestVoorkomendeProblemenGoogleAds'));
const BlogPostWinnendeMetaAdsVideo2026 = lazy(() => import('./pages/BlogPostWinnendeMetaAdsVideo2026'));
const BlogPostLinkedInSponsoredContentVsMessage = lazy(() => import('./pages/BlogPostLinkedInSponsoredContentVsMessage'));
const BlogPostContentStructurerenAi = lazy(() => import('./pages/BlogPostContentStructurerenAi'));
const BlogPostMeetRoiGoogleAdsCampagne = lazy(() => import('./pages/BlogPostMeetRoiGoogleAdsCampagne'));
const BlogPostVerlaagCpcGoogleAdsMinder = lazy(() => import('./pages/BlogPostVerlaagCpcGoogleAdsMinder'));
const BlogPostTikTokAdverterenViralTeHoeven = lazy(() => import('./pages/BlogPostTikTokAdverterenViralTeHoeven'));
const BlogPostMetaAdsWebshopsVerhoogOmzet = lazy(() => import('./pages/BlogPostMetaAdsWebshopsVerhoogOmzet'));
const BlogPostOffPageSeo = lazy(() => import('./pages/BlogPostOffPageSeo'));
const BlogPostNegatieveZoekwoordenGoogleAds = lazy(() => import('./pages/BlogPostNegatieveZoekwoordenGoogleAds'));
const BlogPostSchrijfContentAiToolsCiteren = lazy(() => import('./pages/BlogPostSchrijfContentAiToolsCiteren'));
const BlogPostGoogleAdsDisplayVsSearch = lazy(() => import('./pages/BlogPostGoogleAdsDisplayVsSearch'));
const BlogPostTikTokSparkAdsVsReguliere = lazy(() => import('./pages/BlogPostTikTokSparkAdsVsReguliere'));
const BlogPostGoogleAdsLokaleBedrijven = lazy(() => import('./pages/BlogPostGoogleAdsLokaleBedrijven'));
const BlogPostSchrijfGoogleAdsAdvertentieGeklikt = lazy(() => import('./pages/BlogPostSchrijfGoogleAdsAdvertentieGeklikt'));
const BlogPostGoedeCtrGoogleAdsBenchmarks = lazy(() => import('./pages/BlogPostGoedeCtrGoogleAdsBenchmarks'));
const BlogPostMetaAdsDoelgroepenInstellen = lazy(() => import('./pages/BlogPostMetaAdsDoelgroepenInstellen'));
const BlogPostBacklinksOpbouwen = lazy(() => import('./pages/BlogPostBacklinksOpbouwen'));
const BlogPostGoogleAdsCommerceVerhoogRoas = lazy(() => import('./pages/BlogPostGoogleAdsCommerceVerhoogRoas'));
const BlogPostPerformanceMaxGoogleAdsWeten = lazy(() => import('./pages/BlogPostPerformanceMaxGoogleAdsWeten'));
const BlogPostGoogleAdsCampagneStructuur = lazy(() => import('./pages/BlogPostGoogleAdsCampagneStructuur'));
const BlogPostLinkedInLeadGenFormsWaarom = lazy(() => import('./pages/BlogPostLinkedInLeadGenFormsWaarom'));
const BlogPostChatgptWebsiteCiteren = lazy(() => import('./pages/BlogPostChatgptWebsiteCiteren'));
const BlogPostAiZoekmachinesBronnen = lazy(() => import('./pages/BlogPostAiZoekmachinesBronnen'));
const BlogPostGoogleAdsAutomatiseren = lazy(() => import('./pages/BlogPostGoogleAdsAutomatiseren'));
const BlogPostGoogleShopping = lazy(() => import('./pages/BlogPostGoogleShopping'));
const BlogPostZoekwoordenonderzoek2026 = lazy(() => import('./pages/BlogPostZoekwoordenonderzoek2026'));
const BlogPostAbTestenBeginners = lazy(() => import('./pages/BlogPostAbTestenBeginners'));
const BlogPostGoogleAdsB2b = lazy(() => import('./pages/BlogPostGoogleAdsB2b'));
const BlogPostZoekintentieGoogleAds = lazy(() => import('./pages/BlogPostZoekintentieGoogleAds'));
const BlogPostGoogleAdsSchalen = lazy(() => import('./pages/BlogPostGoogleAdsSchalen'));
const BlogPostMetaAdsFunnel = lazy(() => import('./pages/BlogPostMetaAdsFunnel'));
const BlogPostConversieApiMeta = lazy(() => import('./pages/BlogPostConversieApiMeta'));
const BlogPostAiContentSeo = lazy(() => import('./pages/BlogPostAiContentSeo'));
const BlogPostGoogleAdsDienstenbedrijven = lazy(() => import('./pages/BlogPostGoogleAdsDienstenbedrijven'));
const BlogPostAboveTheFold = lazy(() => import('./pages/BlogPostAboveTheFold'));
const BlogPostCoreWebVitalsVerbeteren = lazy(() => import('./pages/BlogPostCoreWebVitalsVerbeteren'));
const BlogPostLinkedInAdsUitbestedenWanneerMoeite = lazy(() => import('./pages/BlogPostLinkedInAdsUitbestedenWanneerMoeite'));
const BlogPostGoogleAdsExtensies = lazy(() => import('./pages/BlogPostGoogleAdsExtensies'));
const BlogPostContentAudit = lazy(() => import('./pages/BlogPostContentAudit'));
const BlogPostTiktokAdsUitbestedenBureau = lazy(() => import('./pages/BlogPostTiktokAdsUitbestedenBureau'));
const BlogPostVerlaagGoogleAdsCpc2026 = lazy(() => import('./pages/BlogPostVerlaagGoogleAdsCpc2026'));
const BlogPostAdvantageShoppingCampagnes = lazy(() => import('./pages/BlogPostAdvantageShoppingCampagnes'));
const BlogPostThoughtLeaderAdsLinkedIn = lazy(() => import('./pages/BlogPostThoughtLeaderAdsLinkedIn'));
const BlogPostGoedeRoasMetaAdsBenchmarks = lazy(() => import('./pages/BlogPostGoedeRoasMetaAdsBenchmarks'));
const BlogPostFullServiceMarketingBureauSpecialist = lazy(() => import('./pages/BlogPostFullServiceMarketingBureauSpecialist'));
const BlogPostTechnischeSeoAudit = lazy(() => import('./pages/BlogPostTechnischeSeoAudit'));
const BlogPostLlmZichtbaarheidMeten = lazy(() => import('./pages/BlogPostLlmZichtbaarheidMeten'));
const BlogPostMetaAdsCreativeTesting = lazy(() => import('./pages/BlogPostMetaAdsCreativeTesting'));
const BlogPostSchemaMarkup = lazy(() => import('./pages/BlogPostSchemaMarkup'));
const BlogPostCtaTekstSchrijven = lazy(() => import('./pages/BlogPostCtaTekstSchrijven'));
const BlogPostLokaleSeoMkb = lazy(() => import('./pages/BlogPostLokaleSeoMkb'));
const BlogPostResponsiveSearchAds = lazy(() => import('./pages/BlogPostResponsiveSearchAds'));
const BlogPostMetaAdsIos14Veranderd = lazy(() => import('./pages/BlogPostMetaAdsIos14Veranderd'));
const BlogPostGoogleAdsDataOmSeo = lazy(() => import('./pages/BlogPostGoogleAdsDataOmSeo'));
const BlogPostRankChatgptKomAiAntwoorden = lazy(() => import('./pages/BlogPostRankChatgptKomAiAntwoorden'));
const BlogPostGoogleAiOverviewsBetekenenVerkeer = lazy(() => import('./pages/BlogPostGoogleAiOverviewsBetekenenVerkeer'));
const BlogPostSchaalGoogleAdsBudgetTe = lazy(() => import('./pages/BlogPostSchaalGoogleAdsBudgetTe'));
const BlogPostYoutubeAdverterenGoogleAds = lazy(() => import('./pages/BlogPostYoutubeAdverterenGoogleAds'));
const BlogPostSemantischeSeo = lazy(() => import('./pages/BlogPostSemantischeSeo'));
const BlogPostBrandedVsNonBrandedCampagnes = lazy(() => import('./pages/BlogPostBrandedVsNonBrandedCampagnes'));
const BlogPostMetaAdsCatalogProductenAutomatisch = lazy(() => import('./pages/BlogPostMetaAdsCatalogProductenAutomatisch'));
const BlogPostGoogleAdsRapportageMetricsEcht = lazy(() => import('./pages/BlogPostGoogleAdsRapportageMetricsEcht'));
const BlogPostInstagramAdverteren2026CompleteGids = lazy(() => import('./pages/BlogPostInstagramAdverteren2026CompleteGids'));
const BlogPostInstagramReelsAdvertentiesBereikMeer = lazy(() => import('./pages/BlogPostInstagramReelsAdvertentiesBereikMeer'));
const BlogPostInstagramStoriesAdsConverterenFormules = lazy(() => import('./pages/BlogPostInstagramStoriesAdsConverterenFormules'));
const BlogPostInstagramAdverterenKostenCpmBudget2026 = lazy(() => import('./pages/BlogPostInstagramAdverterenKostenCpmBudget2026'));
const BlogPostInstagramReelsAdsConverterenCaseStudies = lazy(() => import('./pages/BlogPostInstagramReelsAdsConverterenCaseStudies'));
const BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage = lazy(() => import('./pages/BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage'));
const BlogPostInstagramAdverterenWebshopsShoppingAankoop = lazy(() => import('./pages/BlogPostInstagramAdverterenWebshopsShoppingAankoop'));
const BlogPostAndromedaAlgoritme2026Instagram = lazy(() => import('./pages/BlogPostAndromedaAlgoritme2026Instagram'));
const BlogPostChatgptAdsSelfServePlatformOpenai = lazy(() => import('./pages/BlogPostChatgptAdsSelfServePlatformOpenai'));
const BlogPostGoogleAdsBeheerChecklistBureauControleren = lazy(() => import('./pages/BlogPostGoogleAdsBeheerChecklistBureauControleren'));
const BlogPostTiktokAdverteren2026CompleteGidsBeginners = lazy(() => import('./pages/BlogPostTiktokAdverteren2026CompleteGidsBeginners'));
const BlogPostMetaAdsCampagnestructuur = lazy(() => import('./pages/BlogPostMetaAdsCampagnestructuur'));
const BlogPostAttributionModellenLastClickDataDriven = lazy(() => import('./pages/BlogPostAttributionModellenLastClickDataDriven'));
const BlogPostTiktokPixelInstellen = lazy(() => import('./pages/BlogPostTiktokPixelInstellen'));
const BlogPostSeoDoodEvolueert2026 = lazy(() => import('./pages/BlogPostSeoDoodEvolueert2026'));
const BlogPostMetaAdsLokaleBedrijven = lazy(() => import('./pages/BlogPostMetaAdsLokaleBedrijven'));
const BlogPostMetaAdsB2bWerkt = lazy(() => import('./pages/BlogPostMetaAdsB2bWerkt'));
const BlogPostEeatBelangrijkVoorSeo = lazy(() => import('./pages/BlogPostEeatBelangrijkVoorSeo'));
const BlogPostTiktokAdsVsMetaAds = lazy(() => import('./pages/BlogPostTiktokAdsVsMetaAds'));
const BlogPostLinkedinAdsVsGoogleAds = lazy(() => import('./pages/BlogPostLinkedinAdsVsGoogleAds'));
const BlogPostLinkedinAdsRetargetingBereikWarme = lazy(() => import('./pages/BlogPostLinkedinAdsRetargetingBereikWarme'));
const BlogPostSeaBureauVergelijkenResultaten = lazy(() => import('./pages/BlogPostSeaBureauVergelijkenResultaten'));
const BlogPostSeaVsSeoStrategieBudgetDoel = lazy(() => import('./pages/BlogPostSeaVsSeoStrategieBudgetDoel'));
const BlogPostSeaCpcBenchmarksPerBranche = lazy(() => import('./pages/BlogPostSeaCpcBenchmarksPerBranche'));
const BlogPostOnlineMarketingMkb5KanalenWerken2026 = lazy(() => import('./pages/BlogPostOnlineMarketingMkb5KanalenWerken2026'));
const BlogPostMarketingUitbestedenMkbZelfDoen = lazy(() => import('./pages/BlogPostMarketingUitbestedenMkbZelfDoen'));
const BlogPostOnPageVsOffPageSeo = lazy(() => import('./pages/BlogPostOnPageVsOffPageSeo'));
const BlogPostContentStructurerenAiZoekmachines = lazy(() => import('./pages/BlogPostContentStructurerenAiZoekmachines'));
const BlogPostGoogleAdsSeizoensgebondenAdverteren = lazy(() => import('./pages/BlogPostGoogleAdsSeizoensgebondenAdverteren'));
const BlogPostUgcMetaAds = lazy(() => import('./pages/BlogPostUgcMetaAds'));
const BlogPostMetaAdsReelsAdvertentiesEffectief = lazy(() => import('./pages/BlogPostMetaAdsReelsAdvertentiesEffectief'));
const BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig = lazy(() => import('./pages/BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig'));
const BlogPostDynamicAdsMetaAutomatischAdverteren = lazy(() => import('./pages/BlogPostDynamicAdsMetaAutomatischAdverteren'));
const BlogPostLinkedinConversationAdsWerken = lazy(() => import('./pages/BlogPostLinkedinConversationAdsWerken'));
const BlogPostLinkedinAbmAccountBasedMarketing = lazy(() => import('./pages/BlogPostLinkedinAbmAccountBasedMarketing'));
const BlogPostLinkedinAdsOptimaliserenStapStap = lazy(() => import('./pages/BlogPostLinkedinAdsOptimaliserenStapStap'));
const BlogPostLinkedinAdsRapportageMetricsEcht = lazy(() => import('./pages/BlogPostLinkedinAdsRapportageMetricsEcht'));
const BlogPostTiktokVsInstagramReelsAdverteren = lazy(() => import('./pages/BlogPostTiktokVsInstagramReelsAdverteren'));
const BlogPostTiktokAdsWebshopsBoostSales = lazy(() => import('./pages/BlogPostTiktokAdsWebshopsBoostSales'));
const BlogPostTiktokShopAdverterenVerkopenPlatform = lazy(() => import('./pages/BlogPostTiktokShopAdverterenVerkopenPlatform'));
const BlogPostTiktokAdsVideoConverteert = lazy(() => import('./pages/BlogPostTiktokAdsVideoConverteert'));
const BlogPostTiktokSmartCampagnesUitgelegd = lazy(() => import('./pages/BlogPostTiktokSmartCampagnesUitgelegd'));

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
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/nieuws" element={<Nieuws />} />
          {/* Old /blog/ routes → redirect naar /blogs/ (met s) */}
          <Route path="/blog/wat-is-geo-generative-engine-optimization" element={<Navigate to="/blogs/geo/wat-is-geo-generative-engine-optimization" replace />} />
          <Route path="/blog/waarom-meta-ads-niet-converteren" element={<Navigate to="/blogs/social-ads/waarom-meta-ads-niet-converteren" replace />} />
          <Route path="/blog/tiktok-ads-voor-bedrijven" element={<Navigate to="/blogs/social-ads/tiktok-ads-voor-bedrijven" replace />} />
          <Route path="/blog/marketing-tracking-conversies-meten" element={<Navigate to="/blogs/tracking/marketing-tracking-conversies-meten" replace />} />
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
          <Route path="/blogs/social-ads/meta-ads-2026-werkt-na" element={<BlogPostMetaAds2025Privacywijzigingen />} />
          <Route path="/blogs/geo/chatgpt-bedrijf-aanbeveelt" element={<BlogPostChatgptBedrijfAanbeveelt />} />
          <Route path="/blogs/tracking/google-tag-manager-beginners" element={<BlogPostGoogleTagManagerBeginners />} />
          <Route path="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" element={<BlogPostConversieratioBenchmarksPerBranche />} />
          <Route path="/blogs/algemeen/online-marketing-bureau" element={<BlogPostOnlineMarketingBureau />} />
          <Route path="/blogs/social-ads/facebook-vs-instagram-adverteren-welk" element={<BlogPostFacebookVsInstagramAdverteren />} />
          <Route path="/blogs/social-ads/meta-pixel-instellen-stap-stap" element={<BlogPostMetaPixelInstellen />} />
          <Route path="/blogs/seo/technische-seo-checklist-2025-website" element={<BlogPostTechnischeSeoChecklist />} />
          <Route path="/blogs/seo/technische-seo-audit" element={<BlogPostTechnischeSeoAudit />} />
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
          <Route path="/blogs/geo/content-structureren-ai-zoekmachines" element={<BlogPostContentStructurerenAiZoekmachines />} />
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
          <Route path="/blogs/google-ads/verlaag-google-ads-cpc-2026" element={<BlogPostVerlaagGoogleAdsCpc2026 />} />
          <Route path="/blogs/social-ads/advantage-shopping-campagnes" element={<BlogPostAdvantageShoppingCampagnes />} />
          <Route path="/blogs/social-ads/thought-leader-ads-linkedin-vergroot" element={<BlogPostThoughtLeaderAdsLinkedIn />} />
          <Route path="/blogs/social-ads/goede-roas-meta-ads-benchmarks" element={<BlogPostGoedeRoasMetaAdsBenchmarks />} />
          <Route path="/blogs/algemeen/full-service-marketing-bureau-specialist" element={<BlogPostFullServiceMarketingBureauSpecialist />} />
          <Route path="/blogs/geo/llm-zichtbaarheid-meten-ai-ziet" element={<BlogPostLlmZichtbaarheidMeten />} />
          <Route path="/blogs/social-ads/meta-ads-creative-testing-weet" element={<BlogPostMetaAdsCreativeTesting />} />
          <Route path="/blogs/seo/schema-markup-instelt" element={<BlogPostSchemaMarkup />} />
          <Route path="/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" element={<BlogPostCtaTekstSchrijven />} />
          <Route path="/blogs/seo/lokale-seo-mkb-word-gevonden" element={<BlogPostLokaleSeoMkb />} />
          <Route path="/blogs/google-ads/responsive-search-ads-uitgelegd-effectief" element={<BlogPostResponsiveSearchAds />} />
          <Route path="/blogs/social-ads/meta-ads-ios-14-veranderd" element={<BlogPostMetaAdsIos14Veranderd />} />
          <Route path="/blogs/google-ads/youtube-adverteren-google-ads-werkt" element={<BlogPostYoutubeAdverterenGoogleAds />} />
          <Route path="/blogs/seo/semantische-seo-begrijpt-google-content" element={<BlogPostSemantischeSeo />} />
          <Route path="/blogs/google-ads/branded-vs-non-branded-campagnes" element={<BlogPostBrandedVsNonBrandedCampagnes />} />
          <Route path="/blogs/social-ads/meta-ads-catalog-producten-automatisch" element={<BlogPostMetaAdsCatalogProductenAutomatisch />} />
          <Route path="/blogs/google-ads/google-ads-rapportage-metrics-echt" element={<BlogPostGoogleAdsRapportageMetricsEcht />} />
          <Route path="/blogs/social-ads/instagram-adverteren-2026-complete-gids" element={<BlogPostInstagramAdverteren2026CompleteGids />} />
          <Route path="/blogs/social-ads/instagram-reels-advertenties-bereik-meer" element={<BlogPostInstagramReelsAdvertentiesBereikMeer />} />
          <Route path="/blogs/social-ads/instagram-stories-ads-converteren-formules" element={<BlogPostInstagramStoriesAdsConverterenFormules />} />
          <Route path="/blogs/social-ads/instagram-adverteren-kosten-cpm-budget-2026" element={<BlogPostInstagramAdverterenKostenCpmBudget2026 />} />
          <Route path="/blogs/social-ads/instagram-reels-ads-converteren-case-studies" element={<BlogPostInstagramReelsAdsConverterenCaseStudies />} />
          <Route path="/blogs/social-ads/instagram-ads-doelgroepen-lookalike-custom-advantage" element={<BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage />} />
          <Route path="/blogs/social-ads/instagram-adverteren-webshops-shopping-aankoop" element={<BlogPostInstagramAdverterenWebshopsShoppingAankoop />} />
          <Route path="/blogs/social-ads/andromeda-algoritme-2026-instagram" element={<BlogPostAndromedaAlgoritme2026Instagram />} />
          <Route path="/blogs/google-ads/google-ads-beheer-checklist-bureau-controleren" element={<BlogPostGoogleAdsBeheerChecklistBureauControleren />} />
          <Route path="/blogs/social-ads/tiktok-adverteren-2026-complete-gids-beginners" element={<BlogPostTiktokAdverteren2026CompleteGidsBeginners />} />
          <Route path="/blogs/social-ads/meta-ads-campagnestructuur-bouw-goed" element={<BlogPostMetaAdsCampagnestructuur />} />
          <Route path="/blogs/tracking/attribution-modellen-uitgelegd-last-click" element={<BlogPostAttributionModellenLastClickDataDriven />} />
          <Route path="/blogs/social-ads/tiktok-pixel-instellen-stap-stap" element={<BlogPostTiktokPixelInstellen />} />
          <Route path="/blogs/algemeen/seo-dood-evolueert-2026" element={<BlogPostSeoDoodEvolueert2026 />} />
          <Route path="/blogs/social-ads/meta-ads-lokale-bedrijven-bereik" element={<BlogPostMetaAdsLokaleBedrijven />} />
          <Route path="/blogs/social-ads/meta-ads-b2b-werkt" element={<BlogPostMetaAdsB2bWerkt />} />
          <Route path="/blogs/seo/eeat-belangrijk-voor-seo" element={<BlogPostEeatBelangrijkVoorSeo />} />
          <Route path="/blogs/social-ads/tiktok-ads-vs-meta-ads" element={<BlogPostTiktokAdsVsMetaAds />} />
          <Route path="/blogs/social-ads/linkedin-ads-vs-google-ads" element={<BlogPostLinkedinAdsVsGoogleAds />} />
          <Route path="/blogs/social-ads/linkedin-ads-retargeting-bereik-warme" element={<BlogPostLinkedinAdsRetargetingBereikWarme />} />
          <Route path="/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" element={<BlogPostSeaBureauVergelijkenResultaten />} />
          <Route path="/blogs/algemeen/sea-vs-seo-strategie-budget-doel" element={<BlogPostSeaVsSeoStrategieBudgetDoel />} />
          <Route path="/blogs/google-ads/sea-cpc-benchmarks-per-branche-nederland" element={<BlogPostSeaCpcBenchmarksPerBranche />} />
          <Route path="/blogs/algemeen/online-marketing-mkb-5-kanalen-werken-2026" element={<BlogPostOnlineMarketingMkb5KanalenWerken2026 />} />
          <Route path="/blogs/algemeen/marketing-uitbesteden-mkb-zelf-doen" element={<BlogPostMarketingUitbestedenMkbZelfDoen />} />
          <Route path="/blogs/seo/on-page-vs-off-page" element={<BlogPostOnPageVsOffPageSeo />} />
          <Route path="/blogs/google-ads/google-ads-data-om-seo" element={<BlogPostGoogleAdsDataOmSeo />} />
          <Route path="/blogs/geo/rank-chatgpt-kom-ai-antwoorden" element={<BlogPostRankChatgptKomAiAntwoorden />} />
          <Route path="/blogs/geo/google-ai-overviews-betekenen-verkeer" element={<BlogPostGoogleAiOverviewsBetekenenVerkeer />} />
          <Route path="/blogs/google-ads/google-ads-schalen-zonder-budget-verdubbelen" element={<BlogPostSchaalGoogleAdsBudgetTe />} />
          <Route path="/blogs/google-ads/google-ads-seizoensgebonden-adverteren-speel" element={<BlogPostGoogleAdsSeizoensgebondenAdverteren />} />
          <Route path="/blogs/social-ads/ugc-meta-ads" element={<BlogPostUgcMetaAds />} />
          <Route path="/blogs/social-ads/meta-ads-reels-advertenties-effectief" element={<BlogPostMetaAdsReelsAdvertentiesEffectief />} />
          <Route path="/blogs/social-ads/meta-ads-automatische-plaatsingen-vs-handmatig" element={<BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig />} />
          <Route path="/blogs/social-ads/dynamic-ads-meta-automatisch-adverteren" element={<BlogPostDynamicAdsMetaAutomatischAdverteren />} />
          <Route path="/blogs/social-ads/linkedin-conversation-ads-werken" element={<BlogPostLinkedinConversationAdsWerken />} />
          <Route path="/blogs/social-ads/linkedin-abm-account-based-marketing" element={<BlogPostLinkedinAbmAccountBasedMarketing />} />
          <Route path="/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" element={<BlogPostLinkedinAdsOptimaliserenStapStap />} />
          <Route path="/blogs/social-ads/linkedin-ads-rapportage-metrics-echt" element={<BlogPostLinkedinAdsRapportageMetricsEcht />} />
          <Route path="/blogs/social-ads/tiktok-vs-instagram-reels-adverteren" element={<BlogPostTiktokVsInstagramReelsAdverteren />} />
          <Route path="/blogs/social-ads/tiktok-ads-webshops-boost-sales" element={<BlogPostTiktokAdsWebshopsBoostSales />} />
          <Route path="/blogs/social-ads/tiktok-shop-adverteren-verkopen-platform" element={<BlogPostTiktokShopAdverterenVerkopenPlatform />} />
          <Route path="/blogs/social-ads/tiktok-ads-video-converteert" element={<BlogPostTiktokAdsVideoConverteert />} />
          <Route path="/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" element={<BlogPostTiktokSmartCampagnesUitgelegd />} />
          <Route path="/blogs/ai-ads/chatgpt-ads-self-serve-platform-openai" element={<BlogPostChatgptAdsSelfServePlatformOpenai />} />

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
      </Suspense>
    </>
  );
}

export default App;

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
import BlogPostVerlaagGoogleAdsCpc2026 from './pages/BlogPostVerlaagGoogleAdsCpc2026';
import BlogPostAdvantageShoppingCampagnes from './pages/BlogPostAdvantageShoppingCampagnes';
import BlogPostThoughtLeaderAdsLinkedIn from './pages/BlogPostThoughtLeaderAdsLinkedIn';
import BlogPostGoedeRoasMetaAdsBenchmarks from './pages/BlogPostGoedeRoasMetaAdsBenchmarks';
import BlogPostFullServiceMarketingBureauSpecialist from './pages/BlogPostFullServiceMarketingBureauSpecialist';
import BlogPostTechnischeSeoAudit from './pages/BlogPostTechnischeSeoAudit';
import BlogPostLlmZichtbaarheidMeten from './pages/BlogPostLlmZichtbaarheidMeten';
import BlogPostMetaAdsCreativeTesting from './pages/BlogPostMetaAdsCreativeTesting';
import BlogPostSchemaMarkup from './pages/BlogPostSchemaMarkup';
import BlogPostCtaTekstSchrijven from './pages/BlogPostCtaTekstSchrijven';
import BlogPostLokaleSeoMkb from './pages/BlogPostLokaleSeoMkb';
import BlogPostResponsiveSearchAds from './pages/BlogPostResponsiveSearchAds';
import BlogPostMetaAdsIos14Veranderd from './pages/BlogPostMetaAdsIos14Veranderd';
import BlogPostGoogleAdsDataOmSeo from './pages/BlogPostGoogleAdsDataOmSeo';
import BlogPostRankChatgptKomAiAntwoorden from './pages/BlogPostRankChatgptKomAiAntwoorden';
import BlogPostGoogleAiOverviewsBetekenenVerkeer from './pages/BlogPostGoogleAiOverviewsBetekenenVerkeer';
import BlogPostSchaalGoogleAdsBudgetTe from './pages/BlogPostSchaalGoogleAdsBudgetTe';
import BlogPostYoutubeAdverterenGoogleAds from './pages/BlogPostYoutubeAdverterenGoogleAds';
import BlogPostSemantischeSeo from './pages/BlogPostSemantischeSeo';
import BlogPostBrandedVsNonBrandedCampagnes from './pages/BlogPostBrandedVsNonBrandedCampagnes';
import BlogPostMetaAdsCatalogProductenAutomatisch from './pages/BlogPostMetaAdsCatalogProductenAutomatisch';
import BlogPostGoogleAdsRapportageMetricsEcht from './pages/BlogPostGoogleAdsRapportageMetricsEcht';
import BlogPostInstagramAdverteren2026CompleteGids from './pages/BlogPostInstagramAdverteren2026CompleteGids';
import BlogPostInstagramReelsAdvertentiesBereikMeer from './pages/BlogPostInstagramReelsAdvertentiesBereikMeer';
import BlogPostInstagramStoriesAdsConverterenFormules from './pages/BlogPostInstagramStoriesAdsConverterenFormules';
import BlogPostInstagramAdverterenKostenCpmBudget2026 from './pages/BlogPostInstagramAdverterenKostenCpmBudget2026';
import BlogPostInstagramReelsAdsConverterenCaseStudies from './pages/BlogPostInstagramReelsAdsConverterenCaseStudies';
import BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage from './pages/BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage';
import BlogPostInstagramAdverterenWebshopsShoppingAankoop from './pages/BlogPostInstagramAdverterenWebshopsShoppingAankoop';
import BlogPostAndromedaAlgoritme2026Instagram from './pages/BlogPostAndromedaAlgoritme2026Instagram';
import BlogPostChatgptAdsSelfServePlatformOpenai from './pages/BlogPostChatgptAdsSelfServePlatformOpenai';
import BlogPostOpenaiAdsManagerAdverterenChatgpt from './pages/BlogPostOpenaiAdsManagerAdverterenChatgpt';
import BlogPostTiktokAdsDoelgroepenBereikPrecies from './pages/BlogPostTiktokAdsDoelgroepenBereikPrecies';
import BlogPostInfluencerContentTiktokAds from './pages/BlogPostInfluencerContentTiktokAds';
import BlogPostTiktokAdsB2bOnverwachtEffectief from './pages/BlogPostTiktokAdsB2bOnverwachtEffectief';
import BlogPostGoedeCpmTiktokBenchmarks from './pages/BlogPostGoedeCpmTiktokBenchmarks';
import BlogPostRankGoogleAiMode from './pages/BlogPostRankGoogleAiMode';
import BlogPostRankMetaAi from './pages/BlogPostRankMetaAi';
import BlogPostGeoBezigSeoTeVervangen from './pages/BlogPostGeoBezigSeoTeVervangen';
import BlogPostContentonderdelenAiCitaties from './pages/BlogPostContentonderdelenAiCitaties';
import BlogPostZichtbaarWordenAiZoekmachines from './pages/BlogPostZichtbaarWordenAiZoekmachines';
import BlogPostAiVerwijzingenTrackenZonderDureTools from './pages/BlogPostAiVerwijzingenTrackenZonderDureTools';
import BlogPostVerandertAiZoekgedragConsumenten from './pages/BlogPostVerandertAiZoekgedragConsumenten';
import BlogPostGeoMkbNodigKunWachten from './pages/BlogPostGeoMkbNodigKunWachten';
import BlogPostBesteGeoTool2026 from './pages/BlogPostBesteGeoTool2026';
import BlogPostGenerativeEngineOptimizationCompleteGids2026 from './pages/BlogPostGenerativeEngineOptimizationCompleteGids2026';
import BlogPostGenerativeEngineOptimizationWebshops from './pages/BlogPostGenerativeEngineOptimizationWebshops';
import BlogPostGenerativeEngineOptimizationUitbesteden from './pages/BlogPostGenerativeEngineOptimizationUitbesteden';
import BlogPostSocialMediaAdverterenUitbestedenGidsMkb from './pages/BlogPostSocialMediaAdverterenUitbestedenGidsMkb';
import BlogPostWebsiteVerschijnenChatgptAntwoorden from './pages/BlogPostWebsiteVerschijnenChatgptAntwoorden';
import BlogPost96ContentGeenOrganischVerkeer from './pages/BlogPost96ContentGeenOrganischVerkeer';
import BlogPostSnellereWebsiteMeerKlanten from './pages/BlogPostSnellereWebsiteMeerKlanten';
import BlogPostPerfecteHeroSectie from './pages/BlogPostPerfecteHeroSectie';
import BlogPostMobileFirstLandingspaginas from './pages/BlogPostMobileFirstLandingspaginas';
import BlogPostStemLandingspaginaAfGoogleAds from './pages/BlogPostStemLandingspaginaAfGoogleAds';
import BlogPostVideoLandingspaginasVerhoogtConversie from './pages/BlogPostVideoLandingspaginasVerhoogtConversie';
import BlogPostHeatmapsLandingspaginaVerbeteren from './pages/BlogPostHeatmapsLandingspaginaVerbeteren';
import BlogPostInteractieveContentMeerLeads from './pages/BlogPostInteractieveContentMeerLeads';
import BlogPostMeetRoiOnlineMarketing from './pages/BlogPostMeetRoiOnlineMarketing';
import BlogPostContentMarketingVsBetaaldeAdvertenties from './pages/BlogPostContentMarketingVsBetaaldeAdvertenties';
import BlogPostStraftGoogleAiGegenereerdeContent from './pages/BlogPostStraftGoogleAiGegenereerdeContent';
import BlogPostDataBetereMarketingbeslissingen from './pages/BlogPostDataBetereMarketingbeslissingen';
import BlogPostBrandmonitoringHouOverGezegd from './pages/BlogPostBrandmonitoringHouOverGezegd';
import BlogPostKlantretentieBehoudenGoedkoperNieuweKlanten from './pages/BlogPostKlantretentieBehoudenGoedkoperNieuweKlanten';
import BlogPostZetKlantreviewsMarketingtool from './pages/BlogPostZetKlantreviewsMarketingtool';
import BlogPostToonStemBepalenKlinktMerk from './pages/BlogPostToonStemBepalenKlinktMerk';
import BlogPostBouwSterkeMerkidentiteitOnline from './pages/BlogPostBouwSterkeMerkidentiteitOnline';
import BlogPostGoogleAdsDemandGen from './pages/BlogPostGoogleAdsDemandGen';
import BlogPostMaximaliseerConversiesVsDoelCpa from './pages/BlogPostMaximaliseerConversiesVsDoelCpa';
import BlogPostAudienceTargetingGoogleAds from './pages/BlogPostAudienceTargetingGoogleAds';
import BlogPostVerlaagBounceRateBetereGoogle from './pages/BlogPostVerlaagBounceRateBetereGoogle';
import BlogPostMetaAdsFrequencyVoorkomAdvertentiemoeheid from './pages/BlogPostMetaAdsFrequencyVoorkomAdvertentiemoeheid';
import BlogPostInstagramStoriesEffectiefAdvertenties from './pages/BlogPostInstagramStoriesEffectiefAdvertenties';
import BlogPostOnlineMarketingUitbestedenBureauResultaat from './pages/BlogPostOnlineMarketingUitbestedenBureauResultaat';
import BlogPostSeaUitbestedenWebshopEcommerceBureau from './pages/BlogPostSeaUitbestedenWebshopEcommerceBureau';
import BlogPostSeaUitbestedenValkuilenMkb from './pages/BlogPostSeaUitbestedenValkuilenMkb';
import BlogPostSeaUitbesteden2026AiAutomatisering from './pages/BlogPostSeaUitbesteden2026AiAutomatisering';
import BlogPostOnlineMarketingUitbestedenOfZelfDoen from './pages/BlogPostOnlineMarketingUitbestedenOfZelfDoen';
import BlogPostOnlineMarketingStrategieWebshopsOmzet from './pages/BlogPostOnlineMarketingStrategieWebshopsOmzet';
import BlogPostSeaUitbestedenVragenVoordatJeTekent from './pages/BlogPostSeaUitbestedenVragenVoordatJeTekent';
import BlogPostZoekmachineOptimalisatieBureauKiezenGids from './pages/BlogPostZoekmachineOptimalisatieBureauKiezenGids';
import BlogPostZoekmachineOptimalisatieBureauGeenResultaatMis from './pages/BlogPostZoekmachineOptimalisatieBureauGeenResultaatMis';
import BlogPostGoogleAdsSpecialistResultaten90Dagen from './pages/BlogPostGoogleAdsSpecialistResultaten90Dagen';
import BlogPostGoogleAdsSpecialistVsBureauFreelancer from './pages/BlogPostGoogleAdsSpecialistVsBureauFreelancer';
import BlogPostSeaBureauBeoordelenCampagnesBeheer from './pages/BlogPostSeaBureauBeoordelenCampagnesBeheer';
import BlogPostConversieOptimalisatieBureauNodig from './pages/BlogPostConversieOptimalisatieBureauNodig';
import BlogPostConversieOptimalisatieBureauResultatenHerkennen from './pages/BlogPostConversieOptimalisatieBureauResultatenHerkennen';
import BlogPostGoogleAdsBureauVragenEersteGesprek from './pages/BlogPostGoogleAdsBureauVragenEersteGesprek';
import BlogPostGoogleAdsBureauRedFlagsTekenen from './pages/BlogPostGoogleAdsBureauRedFlagsTekenen';
import BlogPostChatgptAdsSectorenProfiteren from './pages/BlogPostChatgptAdsSectorenProfiteren';
import BlogPostGoogleAdsBeheerChecklistBureauControleren from './pages/BlogPostGoogleAdsBeheerChecklistBureauControleren';
import BlogPostTiktokAdverteren2026CompleteGidsBeginners from './pages/BlogPostTiktokAdverteren2026CompleteGidsBeginners';
import BlogPostMetaAdsCampagnestructuur from './pages/BlogPostMetaAdsCampagnestructuur';
import BlogPostAttributionModellenLastClickDataDriven from './pages/BlogPostAttributionModellenLastClickDataDriven';
import BlogPostTiktokPixelInstellen from './pages/BlogPostTiktokPixelInstellen';
import BlogPostSeoDoodEvolueert2026 from './pages/BlogPostSeoDoodEvolueert2026';
import BlogPostMetaAdsLokaleBedrijven from './pages/BlogPostMetaAdsLokaleBedrijven';
import BlogPostMetaAdsB2bWerkt from './pages/BlogPostMetaAdsB2bWerkt';
import BlogPostEeatBelangrijkVoorSeo from './pages/BlogPostEeatBelangrijkVoorSeo';
import BlogPostTiktokAdsVsMetaAds from './pages/BlogPostTiktokAdsVsMetaAds';
import BlogPostLinkedinAdsVsGoogleAds from './pages/BlogPostLinkedinAdsVsGoogleAds';
import BlogPostLinkedinAdsRetargetingBereikWarme from './pages/BlogPostLinkedinAdsRetargetingBereikWarme';
import BlogPostSeaBureauVergelijkenResultaten from './pages/BlogPostSeaBureauVergelijkenResultaten';
import BlogPostSeaVsSeoStrategieBudgetDoel from './pages/BlogPostSeaVsSeoStrategieBudgetDoel';
import BlogPostSeaCpcBenchmarksPerBranche from './pages/BlogPostSeaCpcBenchmarksPerBranche';
import BlogPostOnlineMarketingMkb5KanalenWerken2026 from './pages/BlogPostOnlineMarketingMkb5KanalenWerken2026';
import BlogPostMarketingUitbestedenMkbZelfDoen from './pages/BlogPostMarketingUitbestedenMkbZelfDoen';
import BlogPostOnPageVsOffPageSeo from './pages/BlogPostOnPageVsOffPageSeo';
import BlogPostContentStructurerenAiZoekmachines from './pages/BlogPostContentStructurerenAiZoekmachines';
import BlogPostGoogleAdsSeizoensgebondenAdverteren from './pages/BlogPostGoogleAdsSeizoensgebondenAdverteren';
import BlogPostUgcMetaAds from './pages/BlogPostUgcMetaAds';
import BlogPostMetaAdsReelsAdvertentiesEffectief from './pages/BlogPostMetaAdsReelsAdvertentiesEffectief';
import BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig from './pages/BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig';
import BlogPostDynamicAdsMetaAutomatischAdverteren from './pages/BlogPostDynamicAdsMetaAutomatischAdverteren';
import BlogPostLinkedinConversationAdsWerken from './pages/BlogPostLinkedinConversationAdsWerken';
import BlogPostLinkedinAbmAccountBasedMarketing from './pages/BlogPostLinkedinAbmAccountBasedMarketing';
import BlogPostLinkedinAdsOptimaliserenStapStap from './pages/BlogPostLinkedinAdsOptimaliserenStapStap';
import BlogPostLinkedinAdsRapportageMetricsEcht from './pages/BlogPostLinkedinAdsRapportageMetricsEcht';
import BlogPostTiktokVsInstagramReelsAdverteren from './pages/BlogPostTiktokVsInstagramReelsAdverteren';
import BlogPostTiktokAdsWebshopsBoostSales from './pages/BlogPostTiktokAdsWebshopsBoostSales';
import BlogPostTiktokShopAdverterenVerkopenPlatform from './pages/BlogPostTiktokShopAdverterenVerkopenPlatform';
import BlogPostTiktokAdsVideoConverteert from './pages/BlogPostTiktokAdsVideoConverteert';
import BlogPostTiktokSmartCampagnesUitgelegd from './pages/BlogPostTiktokSmartCampagnesUitgelegd';

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
          <Route path="/blogs/ai-ads/openai-ads-manager-adverteren-chatgpt" element={<BlogPostOpenaiAdsManagerAdverterenChatgpt />} />
          <Route path="/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" element={<BlogPostTiktokAdsDoelgroepenBereikPrecies />} />
          <Route path="/blogs/social-ads/influencer-content-tiktok-ads" element={<BlogPostInfluencerContentTiktokAds />} />
          <Route path="/blogs/social-ads/tiktok-ads-b2b-onverwacht-effectief" element={<BlogPostTiktokAdsB2bOnverwachtEffectief />} />
          <Route path="/blogs/social-ads/goede-cpm-tiktok-benchmarks" element={<BlogPostGoedeCpmTiktokBenchmarks />} />
          <Route path="/blogs/geo/rank-google-ai-mode" element={<BlogPostRankGoogleAiMode />} />
          <Route path="/blogs/geo/rank-meta-ai" element={<BlogPostRankMetaAi />} />
          <Route path="/blogs/ai-ads/chatgpt-ads-sectoren-profiteren" element={<BlogPostChatgptAdsSectorenProfiteren />} />
          <Route path="/blogs/geo/geo-bezig-seo-te-vervangen" element={<BlogPostGeoBezigSeoTeVervangen />} />
          <Route path="/blogs/geo/contentonderdelen-zorgen-meer-ai-citaties" element={<BlogPostContentonderdelenAiCitaties />} />
          <Route path="/blogs/geo/zichtbaar-worden-ai-zoekmachines" element={<BlogPostZichtbaarWordenAiZoekmachines />} />
          <Route path="/blogs/geo/ai-verwijzingen-tracken-zonder-dure-tools" element={<BlogPostAiVerwijzingenTrackenZonderDureTools />} />
          <Route path="/blogs/geo/verandert-ai-zoekgedrag-consumenten" element={<BlogPostVerandertAiZoekgedragConsumenten />} />
          <Route path="/blogs/geo/geo-mkb-nodig-kun-wachten" element={<BlogPostGeoMkbNodigKunWachten />} />
          <Route path="/blogs/geo/beste-geo-tool-2026" element={<BlogPostBesteGeoTool2026 />} />
          <Route path="/blogs/geo/generative-engine-optimization-complete-gids-2026" element={<BlogPostGenerativeEngineOptimizationCompleteGids2026 />} />
          <Route path="/blogs/geo/generative-engine-optimization-webshops" element={<BlogPostGenerativeEngineOptimizationWebshops />} />
          <Route path="/blogs/geo/generative-engine-optimization-uitbesteden" element={<BlogPostGenerativeEngineOptimizationUitbesteden />} />
          <Route path="/blogs/social-ads/social-media-adverteren-uitbesteden-gids-mkb" element={<BlogPostSocialMediaAdverterenUitbestedenGidsMkb />} />
          <Route path="/blogs/geo/website-verschijnen-chatgpt-antwoorden" element={<BlogPostWebsiteVerschijnenChatgptAntwoorden />} />
          <Route path="/blogs/geo/96-content-geen-organisch-verkeer" element={<BlogPost96ContentGeenOrganischVerkeer />} />
          <Route path="/blogs/strategie/snellere-website-meer-klanten" element={<BlogPostSnellereWebsiteMeerKlanten />} />
          <Route path="/blogs/strategie/perfecte-hero-sectie-beste-eerste" element={<BlogPostPerfecteHeroSectie />} />
          <Route path="/blogs/strategie/mobile-first-landingspaginas-geen-optie" element={<BlogPostMobileFirstLandingspaginas />} />
          <Route path="/blogs/strategie/stem-landingspagina-af-google-ads" element={<BlogPostStemLandingspaginaAfGoogleAds />} />
          <Route path="/blogs/strategie/video-landingspaginas-verhoogt-conversie" element={<BlogPostVideoLandingspaginasVerhoogtConversie />} />
          <Route path="/blogs/strategie/heatmaps-om-landingspagina-te-verbeteren" element={<BlogPostHeatmapsLandingspaginaVerbeteren />} />
          <Route path="/blogs/strategie/interactieve-content-meer-leads" element={<BlogPostInteractieveContentMeerLeads />} />
          <Route path="/blogs/tracking/meet-roi-online-marketing" element={<BlogPostMeetRoiOnlineMarketing />} />
          <Route path="/blogs/strategie/content-marketing-vs-betaalde-advertenties" element={<BlogPostContentMarketingVsBetaaldeAdvertenties />} />
          <Route path="/blogs/strategie/straft-google-ai-gegenereerde-content" element={<BlogPostStraftGoogleAiGegenereerdeContent />} />
          <Route path="/blogs/algemeen/data-betere-marketingbeslissingen" element={<BlogPostDataBetereMarketingbeslissingen />} />
          <Route path="/blogs/algemeen/brandmonitoring-hou-over-gezegd" element={<BlogPostBrandmonitoringHouOverGezegd />} />
          <Route path="/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" element={<BlogPostKlantretentieBehoudenGoedkoperNieuweKlanten />} />
          <Route path="/blogs/algemeen/zet-klantreviews-marketingtool" element={<BlogPostZetKlantreviewsMarketingtool />} />
          <Route path="/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" element={<BlogPostToonStemBepalenKlinktMerk />} />
          <Route path="/blogs/algemeen/bouw-sterke-merkidentiteit-online" element={<BlogPostBouwSterkeMerkidentiteitOnline />} />
          <Route path="/blogs/google-ads/google-ads-demand-gen" element={<BlogPostGoogleAdsDemandGen />} />
          <Route path="/blogs/google-ads/maximaliseer-conversies-vs-doel-cpa" element={<BlogPostMaximaliseerConversiesVsDoelCpa />} />
          <Route path="/blogs/google-ads/audience-targeting-google-ads" element={<BlogPostAudienceTargetingGoogleAds />} />
          <Route path="/blogs/google-ads/verlaag-bounce-rate-betere-google" element={<BlogPostVerlaagBounceRateBetereGoogle />} />
          <Route path="/blogs/social-ads/meta-ads-frequency-voorkom-advertentiemoeheid" element={<BlogPostMetaAdsFrequencyVoorkomAdvertentiemoeheid />} />
          <Route path="/blogs/social-ads/instagram-stories-effectief-advertenties" element={<BlogPostInstagramStoriesEffectiefAdvertenties />} />
          <Route path="/blogs/algemeen/online-marketing-uitbesteden-bureau-resultaat" element={<BlogPostOnlineMarketingUitbestedenBureauResultaat />} />
          <Route path="/blogs/google-ads/sea-uitbesteden-webshop-ecommerce-bureau" element={<BlogPostSeaUitbestedenWebshopEcommerceBureau />} />
          <Route path="/blogs/google-ads/sea-uitbesteden-valkuilen-mkb" element={<BlogPostSeaUitbestedenValkuilenMkb />} />
          <Route path="/blogs/google-ads/sea-uitbesteden-2026-ai-automatisering" element={<BlogPostSeaUitbesteden2026AiAutomatisering />} />
          <Route path="/blogs/algemeen/online-marketing-uitbesteden-of-zelf-doen" element={<BlogPostOnlineMarketingUitbestedenOfZelfDoen />} />
          <Route path="/blogs/strategie/online-marketing-strategie-webshops-omzet" element={<BlogPostOnlineMarketingStrategieWebshopsOmzet />} />
          <Route path="/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" element={<BlogPostSeaUitbestedenVragenVoordatJeTekent />} />
          <Route path="/blogs/seo/zoekmachine-optimalisatie-bureau-kiezen-gids" element={<BlogPostZoekmachineOptimalisatieBureauKiezenGids />} />
          <Route path="/blogs/seo/zoekmachine-optimalisatie-bureau-geen-resultaat-mis" element={<BlogPostZoekmachineOptimalisatieBureauGeenResultaatMis />} />
          <Route path="/blogs/google-ads/google-ads-specialist-resultaten-90-dagen" element={<BlogPostGoogleAdsSpecialistResultaten90Dagen />} />
          <Route path="/blogs/google-ads/google-ads-specialist-vs-bureau-freelancer" element={<BlogPostGoogleAdsSpecialistVsBureauFreelancer />} />
          <Route path="/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" element={<BlogPostSeaBureauBeoordelenCampagnesBeheer />} />
          <Route path="/blogs/strategie/conversie-optimalisatie-bureau-nodig" element={<BlogPostConversieOptimalisatieBureauNodig />} />
          <Route path="/blogs/strategie/conversie-optimalisatie-bureau-resultaten-herkennen" element={<BlogPostConversieOptimalisatieBureauResultatenHerkennen />} />
          <Route path="/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" element={<BlogPostGoogleAdsBureauVragenEersteGesprek />} />
          <Route path="/blogs/google-ads/google-ads-bureau-red-flags-tekenen" element={<BlogPostGoogleAdsBureauRedFlagsTekenen />} />

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

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

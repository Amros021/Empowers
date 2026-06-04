import React, { Suspense } from 'react';
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
const BlogPostGeo = React.lazy(() => import('./pages/BlogPostGeo'));
const BlogPostMetaAds = React.lazy(() => import('./pages/BlogPostMetaAds'));
const BlogPostTikTokAds = React.lazy(() => import('./pages/BlogPostTikTokAds'));
const BlogPostTracking = React.lazy(() => import('./pages/BlogPostTracking'));
const BlogPostSeo = React.lazy(() => import('./pages/BlogPostSeo'));
const BlogPostGoogleAds = React.lazy(() => import('./pages/BlogPostGoogleAds'));
const BlogPostStrategie = React.lazy(() => import('./pages/BlogPostStrategie'));
const BlogPostAlgemeen = React.lazy(() => import('./pages/BlogPostAlgemeen'));
const BlogPostGoogleAdsVsSeoWerkt = React.lazy(() => import('./pages/BlogPostGoogleAdsVsSeoWerkt'));
const BlogPostWaaromGoogleAdsKlikkenConverteren = React.lazy(() => import('./pages/BlogPostWaaromGoogleAdsKlikkenConverteren'));
const BlogPostOptimaliseerContentGoogleAiOverviews = React.lazy(() => import('./pages/BlogPostOptimaliseerContentGoogleAiOverviews'));
const BlogPostVerbeterenGoogleAiOverviewsCtr = React.lazy(() => import('./pages/BlogPostVerbeterenGoogleAiOverviewsCtr'));
const BlogPostSchrijfBetereGoogleAdsAi = React.lazy(() => import('./pages/BlogPostSchrijfBetereGoogleAdsAi'));
const BlogPostLookalikeAudiencesMetaAdsGids = React.lazy(() => import('./pages/BlogPostLookalikeAudiencesMetaAdsGids'));
const BlogPostSeoStrategieVervangenDoorGeo = React.lazy(() => import('./pages/BlogPostSeoStrategieVervangenDoorGeo'));
const BlogPostUtmParametersGebruikenAlleMarketingkanalen = React.lazy(() => import('./pages/BlogPostUtmParametersGebruikenAlleMarketingkanalen'));
const BlogPostAiDigitaleMarketing = React.lazy(() => import('./pages/BlogPostAiDigitaleMarketing'));
const BlogPostAiMarketingwereldVerandert2025 = React.lazy(() => import('./pages/BlogPostAiMarketingwereldVerandert2025'));
const BlogPostHoeLangDuurtSeo = React.lazy(() => import('./pages/BlogPostHoeLangDuurtSeo'));
const BlogPostGoogleAdsUitbesteden = React.lazy(() => import('./pages/BlogPostGoogleAdsUitbesteden'));
const BlogPostMetaAds2025Privacywijzigingen = React.lazy(() => import('./pages/BlogPostMetaAds2025Privacywijzigingen'));
const BlogPostChatgptBedrijfAanbeveelt = React.lazy(() => import('./pages/BlogPostChatgptBedrijfAanbeveelt'));
const BlogPostGoogleTagManagerBeginners = React.lazy(() => import('./pages/BlogPostGoogleTagManagerBeginners'));
const BlogPostConversieratioBenchmarksPerBranche = React.lazy(() => import('./pages/BlogPostConversieratioBenchmarksPerBranche'));
const BlogPostOnlineMarketingBureau = React.lazy(() => import('./pages/BlogPostOnlineMarketingBureau'));
const BlogPostFacebookVsInstagramAdverteren = React.lazy(() => import('./pages/BlogPostFacebookVsInstagramAdverteren'));
const BlogPostMetaPixelInstellen = React.lazy(() => import('./pages/BlogPostMetaPixelInstellen'));
const BlogPostTechnischeSeoChecklist = React.lazy(() => import('./pages/BlogPostTechnischeSeoChecklist'));
const BlogPostGeoVsSeo = React.lazy(() => import('./pages/BlogPostGeoVsSeo'));
const BlogPostSeaUitbesteden = React.lazy(() => import('./pages/BlogPostSeaUitbesteden'));
const BlogPostSeaUitbestedenFreelancerOfBureau = React.lazy(() => import('./pages/BlogPostSeaUitbestedenFreelancerOfBureau'));
const BlogPostZoekmachineOptimalisatieBureauResultatenWanneer = React.lazy(() => import('./pages/BlogPostZoekmachineOptimalisatieBureauResultatenWanneer'));
const BlogPostGoogleAdsSpecialistCheckenGoedWerk = React.lazy(() => import('./pages/BlogPostGoogleAdsSpecialistCheckenGoedWerk'));
const BlogPostGoogleAdsBureauResultatenRendement = React.lazy(() => import('./pages/BlogPostGoogleAdsBureauResultatenRendement'));
const BlogPostGoogleAdsSpecialistVindenTesten = React.lazy(() => import('./pages/BlogPostGoogleAdsSpecialistVindenTesten'));
const BlogPostB2bMarketingBureauVsZelf = React.lazy(() => import('./pages/BlogPostB2bMarketingBureauVsZelf'));
const BlogPostOnlineMarketingStrategieB2bVsB2c = React.lazy(() => import('./pages/BlogPostOnlineMarketingStrategieB2bVsB2c'));
const BlogPostAiSeo2025 = React.lazy(() => import('./pages/BlogPostAiSeo2025'));
const BlogPostSeoUitbestedenZelfEerlijkAntwoord = React.lazy(() => import('./pages/BlogPostSeoUitbestedenZelfEerlijkAntwoord'));
const BlogPostKiesJuisteOnlineMarketingBureau = React.lazy(() => import('./pages/BlogPostKiesJuisteOnlineMarketingBureau'));
const BlogPostMetaAdsUitbesteden = React.lazy(() => import('./pages/BlogPostMetaAdsUitbesteden'));
const BlogPostSmartBiddingUitgelegd = React.lazy(() => import('./pages/BlogPostSmartBiddingUitgelegd'));
const BlogPostSeoMarketingBureauKiezen = React.lazy(() => import('./pages/BlogPostSeoMarketingBureauKiezen'));
const BlogPostAiZoekmachinesVsGoogle = React.lazy(() => import('./pages/BlogPostAiZoekmachinesVsGoogle'));
const BlogPostLinkedInAdsBeginners = React.lazy(() => import('./pages/BlogPostLinkedInAdsBeginners'));
const BlogPostLinkedInAdverterenGoogleAds = React.lazy(() => import('./pages/BlogPostLinkedInAdverterenGoogleAds'));
const BlogPostLandingspaginaWaaromAnders = React.lazy(() => import('./pages/BlogPostLandingspaginaWaaromAnders'));
const BlogPostLandingspaginaSchrijvenConverteert = React.lazy(() => import('./pages/BlogPostLandingspaginaSchrijvenConverteert'));
const BlogPostAiGoogleAdsAdvertentietekstVerbeteren = React.lazy(() => import('./pages/BlogPostAiGoogleAdsAdvertentietekstVerbeteren'));
const BlogPostLongTailKeywordsGoogleAds = React.lazy(() => import('./pages/BlogPostLongTailKeywordsGoogleAds'));
const BlogPostGoogleAdsQualityScoreVerhogen = React.lazy(() => import('./pages/BlogPostGoogleAdsQualityScoreVerhogen'));
const BlogPostRetargetingMetaAdsHaalVerloren = React.lazy(() => import('./pages/BlogPostRetargetingMetaAdsHaalVerloren'));
const BlogPostMeestVoorkomendeProblemenGoogleAds = React.lazy(() => import('./pages/BlogPostMeestVoorkomendeProblemenGoogleAds'));
const BlogPostWinnendeMetaAdsVideo2026 = React.lazy(() => import('./pages/BlogPostWinnendeMetaAdsVideo2026'));
const BlogPostLinkedInSponsoredContentVsMessage = React.lazy(() => import('./pages/BlogPostLinkedInSponsoredContentVsMessage'));
const BlogPostContentStructurerenAi = React.lazy(() => import('./pages/BlogPostContentStructurerenAi'));
const BlogPostMeetRoiGoogleAdsCampagne = React.lazy(() => import('./pages/BlogPostMeetRoiGoogleAdsCampagne'));
const BlogPostVerlaagCpcGoogleAdsMinder = React.lazy(() => import('./pages/BlogPostVerlaagCpcGoogleAdsMinder'));
const BlogPostTikTokAdverterenViralTeHoeven = React.lazy(() => import('./pages/BlogPostTikTokAdverterenViralTeHoeven'));
const BlogPostMetaAdsWebshopsVerhoogOmzet = React.lazy(() => import('./pages/BlogPostMetaAdsWebshopsVerhoogOmzet'));
const BlogPostOffPageSeo = React.lazy(() => import('./pages/BlogPostOffPageSeo'));
const BlogPostNegatieveZoekwoordenGoogleAds = React.lazy(() => import('./pages/BlogPostNegatieveZoekwoordenGoogleAds'));
const BlogPostSchrijfContentAiToolsCiteren = React.lazy(() => import('./pages/BlogPostSchrijfContentAiToolsCiteren'));
const BlogPostGoogleAdsDisplayVsSearch = React.lazy(() => import('./pages/BlogPostGoogleAdsDisplayVsSearch'));
const BlogPostTikTokSparkAdsVsReguliere = React.lazy(() => import('./pages/BlogPostTikTokSparkAdsVsReguliere'));
const BlogPostGoogleAdsLokaleBedrijven = React.lazy(() => import('./pages/BlogPostGoogleAdsLokaleBedrijven'));
const BlogPostSchrijfGoogleAdsAdvertentieGeklikt = React.lazy(() => import('./pages/BlogPostSchrijfGoogleAdsAdvertentieGeklikt'));
const BlogPostGoedeCtrGoogleAdsBenchmarks = React.lazy(() => import('./pages/BlogPostGoedeCtrGoogleAdsBenchmarks'));
const BlogPostMetaAdsDoelgroepenInstellen = React.lazy(() => import('./pages/BlogPostMetaAdsDoelgroepenInstellen'));
const BlogPostBacklinksOpbouwen = React.lazy(() => import('./pages/BlogPostBacklinksOpbouwen'));
const BlogPostGoogleAdsCommerceVerhoogRoas = React.lazy(() => import('./pages/BlogPostGoogleAdsCommerceVerhoogRoas'));
const BlogPostPerformanceMaxGoogleAdsWeten = React.lazy(() => import('./pages/BlogPostPerformanceMaxGoogleAdsWeten'));
const BlogPostGoogleAdsCampagneStructuur = React.lazy(() => import('./pages/BlogPostGoogleAdsCampagneStructuur'));
const BlogPostLinkedInLeadGenFormsWaarom = React.lazy(() => import('./pages/BlogPostLinkedInLeadGenFormsWaarom'));
const BlogPostChatgptWebsiteCiteren = React.lazy(() => import('./pages/BlogPostChatgptWebsiteCiteren'));
const BlogPostAiZoekmachinesBronnen = React.lazy(() => import('./pages/BlogPostAiZoekmachinesBronnen'));
const BlogPostGoogleAdsAutomatiseren = React.lazy(() => import('./pages/BlogPostGoogleAdsAutomatiseren'));
const BlogPostGoogleShopping = React.lazy(() => import('./pages/BlogPostGoogleShopping'));
const BlogPostZoekwoordenonderzoek2026 = React.lazy(() => import('./pages/BlogPostZoekwoordenonderzoek2026'));
const BlogPostAbTestenBeginners = React.lazy(() => import('./pages/BlogPostAbTestenBeginners'));
const BlogPostGoogleAdsB2b = React.lazy(() => import('./pages/BlogPostGoogleAdsB2b'));
const BlogPostZoekintentieGoogleAds = React.lazy(() => import('./pages/BlogPostZoekintentieGoogleAds'));
const BlogPostGoogleAdsSchalen = React.lazy(() => import('./pages/BlogPostGoogleAdsSchalen'));
const BlogPostMetaAdsFunnel = React.lazy(() => import('./pages/BlogPostMetaAdsFunnel'));
const BlogPostConversieApiMeta = React.lazy(() => import('./pages/BlogPostConversieApiMeta'));
const BlogPostAiContentSeo = React.lazy(() => import('./pages/BlogPostAiContentSeo'));
const BlogPostGoogleAdsDienstenbedrijven = React.lazy(() => import('./pages/BlogPostGoogleAdsDienstenbedrijven'));
const BlogPostAboveTheFold = React.lazy(() => import('./pages/BlogPostAboveTheFold'));
const BlogPostCoreWebVitalsVerbeteren = React.lazy(() => import('./pages/BlogPostCoreWebVitalsVerbeteren'));
const BlogPostLinkedInAdsUitbestedenWanneerMoeite = React.lazy(() => import('./pages/BlogPostLinkedInAdsUitbestedenWanneerMoeite'));
const BlogPostGoogleAdsExtensies = React.lazy(() => import('./pages/BlogPostGoogleAdsExtensies'));
const BlogPostContentAudit = React.lazy(() => import('./pages/BlogPostContentAudit'));
const BlogPostTiktokAdsUitbestedenBureau = React.lazy(() => import('./pages/BlogPostTiktokAdsUitbestedenBureau'));
const BlogPostVerlaagGoogleAdsCpc2026 = React.lazy(() => import('./pages/BlogPostVerlaagGoogleAdsCpc2026'));
const BlogPostAdvantageShoppingCampagnes = React.lazy(() => import('./pages/BlogPostAdvantageShoppingCampagnes'));
const BlogPostThoughtLeaderAdsLinkedIn = React.lazy(() => import('./pages/BlogPostThoughtLeaderAdsLinkedIn'));
const BlogPostGoedeRoasMetaAdsBenchmarks = React.lazy(() => import('./pages/BlogPostGoedeRoasMetaAdsBenchmarks'));
const BlogPostFullServiceMarketingBureauSpecialist = React.lazy(() => import('./pages/BlogPostFullServiceMarketingBureauSpecialist'));
const BlogPostTechnischeSeoAudit = React.lazy(() => import('./pages/BlogPostTechnischeSeoAudit'));
const BlogPostLlmZichtbaarheidMeten = React.lazy(() => import('./pages/BlogPostLlmZichtbaarheidMeten'));
const BlogPostMetaAdsCreativeTesting = React.lazy(() => import('./pages/BlogPostMetaAdsCreativeTesting'));
const BlogPostSchemaMarkup = React.lazy(() => import('./pages/BlogPostSchemaMarkup'));
const BlogPostCtaTekstSchrijven = React.lazy(() => import('./pages/BlogPostCtaTekstSchrijven'));
const BlogPostLokaleSeoMkb = React.lazy(() => import('./pages/BlogPostLokaleSeoMkb'));
const BlogPostSeaBureauNederland = React.lazy(() => import('./pages/BlogPostSeaBureauNederland'));
const BlogPostSeaBureauWisselen = React.lazy(() => import('./pages/BlogPostSeaBureauWisselen'));
const BlogPostConversieOptimalisatieQuickWins = React.lazy(() => import('./pages/BlogPostConversieOptimalisatieQuickWins'));
const BlogPostConversieOptimalisatieWebshops = React.lazy(() => import('./pages/BlogPostConversieOptimalisatieWebshops'));
const BlogPostResponsiveSearchAds = React.lazy(() => import('./pages/BlogPostResponsiveSearchAds'));
const BlogPostMetaAdsIos14Veranderd = React.lazy(() => import('./pages/BlogPostMetaAdsIos14Veranderd'));
const BlogPostGoogleAdsDataOmSeo = React.lazy(() => import('./pages/BlogPostGoogleAdsDataOmSeo'));
const BlogPostRankChatgptKomAiAntwoorden = React.lazy(() => import('./pages/BlogPostRankChatgptKomAiAntwoorden'));
const BlogPostGoogleAiOverviewsBetekenenVerkeer = React.lazy(() => import('./pages/BlogPostGoogleAiOverviewsBetekenenVerkeer'));
const BlogPostSchaalGoogleAdsBudgetTe = React.lazy(() => import('./pages/BlogPostSchaalGoogleAdsBudgetTe'));
const BlogPostYoutubeAdverterenGoogleAds = React.lazy(() => import('./pages/BlogPostYoutubeAdverterenGoogleAds'));
const BlogPostSemantischeSeo = React.lazy(() => import('./pages/BlogPostSemantischeSeo'));
const BlogPostBrandedVsNonBrandedCampagnes = React.lazy(() => import('./pages/BlogPostBrandedVsNonBrandedCampagnes'));
const BlogPostMetaAdsCatalogProductenAutomatisch = React.lazy(() => import('./pages/BlogPostMetaAdsCatalogProductenAutomatisch'));
const BlogPostGoogleAdsRapportageMetricsEcht = React.lazy(() => import('./pages/BlogPostGoogleAdsRapportageMetricsEcht'));
const BlogPostInstagramAdverteren2026CompleteGids = React.lazy(() => import('./pages/BlogPostInstagramAdverteren2026CompleteGids'));
const BlogPostInstagramReelsAdvertentiesBereikMeer = React.lazy(() => import('./pages/BlogPostInstagramReelsAdvertentiesBereikMeer'));
const BlogPostInstagramStoriesAdsConverterenFormules = React.lazy(() => import('./pages/BlogPostInstagramStoriesAdsConverterenFormules'));
const BlogPostInstagramAdverterenKostenCpmBudget2026 = React.lazy(() => import('./pages/BlogPostInstagramAdverterenKostenCpmBudget2026'));
const BlogPostInstagramReelsAdsConverterenCaseStudies = React.lazy(() => import('./pages/BlogPostInstagramReelsAdsConverterenCaseStudies'));
const BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage = React.lazy(() => import('./pages/BlogPostInstagramAdsDoelgroepenLookalikeCustomAdvantage'));
const BlogPostInstagramAdverterenWebshopsShoppingAankoop = React.lazy(() => import('./pages/BlogPostInstagramAdverterenWebshopsShoppingAankoop'));
const BlogPostAndromedaAlgoritme2026Instagram = React.lazy(() => import('./pages/BlogPostAndromedaAlgoritme2026Instagram'));
const BlogPostChatgptAdsSelfServePlatformOpenai = React.lazy(() => import('./pages/BlogPostChatgptAdsSelfServePlatformOpenai'));
const BlogPostOpenaiAdsManagerAdverterenChatgpt = React.lazy(() => import('./pages/BlogPostOpenaiAdsManagerAdverterenChatgpt'));
const BlogPostTiktokAdsDoelgroepenBereikPrecies = React.lazy(() => import('./pages/BlogPostTiktokAdsDoelgroepenBereikPrecies'));
const BlogPostInfluencerContentTiktokAds = React.lazy(() => import('./pages/BlogPostInfluencerContentTiktokAds'));
const BlogPostTiktokAdsB2bOnverwachtEffectief = React.lazy(() => import('./pages/BlogPostTiktokAdsB2bOnverwachtEffectief'));
const BlogPostGoedeCpmTiktokBenchmarks = React.lazy(() => import('./pages/BlogPostGoedeCpmTiktokBenchmarks'));
const BlogPostRankGoogleAiMode = React.lazy(() => import('./pages/BlogPostRankGoogleAiMode'));
const BlogPostRankMetaAi = React.lazy(() => import('./pages/BlogPostRankMetaAi'));
const BlogPostGeoBezigSeoTeVervangen = React.lazy(() => import('./pages/BlogPostGeoBezigSeoTeVervangen'));
const BlogPostContentonderdelenAiCitaties = React.lazy(() => import('./pages/BlogPostContentonderdelenAiCitaties'));
const BlogPostZichtbaarWordenAiZoekmachines = React.lazy(() => import('./pages/BlogPostZichtbaarWordenAiZoekmachines'));
const BlogPostAiVerwijzingenTrackenZonderDureTools = React.lazy(() => import('./pages/BlogPostAiVerwijzingenTrackenZonderDureTools'));
const BlogPostVerandertAiZoekgedragConsumenten = React.lazy(() => import('./pages/BlogPostVerandertAiZoekgedragConsumenten'));
const BlogPostGeoMkbNodigKunWachten = React.lazy(() => import('./pages/BlogPostGeoMkbNodigKunWachten'));
const BlogPostBesteGeoTool2026 = React.lazy(() => import('./pages/BlogPostBesteGeoTool2026'));
const BlogPostGeoOptimalisatieVerschijnenAiAntwoorden = React.lazy(() => import('./pages/BlogPostGeoOptimalisatieVerschijnenAiAntwoorden'));
const BlogPostGeoOptimalisatieMkbStappenplan = React.lazy(() => import('./pages/BlogPostGeoOptimalisatieMkbStappenplan'));
const BlogPostGeoOptimalisatieUitbesteden = React.lazy(() => import('./pages/BlogPostGeoOptimalisatieUitbesteden'));
const BlogPostGenerativeEngineOptimizationCompleteGids2026 = React.lazy(() => import('./pages/BlogPostGenerativeEngineOptimizationCompleteGids2026'));
const BlogPostGenerativeEngineOptimizationWebshops = React.lazy(() => import('./pages/BlogPostGenerativeEngineOptimizationWebshops'));
const BlogPostGenerativeEngineOptimizationUitbesteden = React.lazy(() => import('./pages/BlogPostGenerativeEngineOptimizationUitbesteden'));
const BlogPostSocialMediaAdverterenUitbestedenGidsMkb = React.lazy(() => import('./pages/BlogPostSocialMediaAdverterenUitbestedenGidsMkb'));
const BlogPostSocialMediaAdverterenUitbestedenMetenResultaat = React.lazy(() => import('./pages/BlogPostSocialMediaAdverterenUitbestedenMetenResultaat'));
const BlogPostWebsiteVerschijnenChatgptAntwoorden = React.lazy(() => import('./pages/BlogPostWebsiteVerschijnenChatgptAntwoorden'));
const BlogPost96ContentGeenOrganischVerkeer = React.lazy(() => import('./pages/BlogPost96ContentGeenOrganischVerkeer'));
const BlogPostSnellereWebsiteMeerKlanten = React.lazy(() => import('./pages/BlogPostSnellereWebsiteMeerKlanten'));
const BlogPostPerfecteHeroSectie = React.lazy(() => import('./pages/BlogPostPerfecteHeroSectie'));
const BlogPostMobileFirstLandingspaginas = React.lazy(() => import('./pages/BlogPostMobileFirstLandingspaginas'));
const BlogPostStemLandingspaginaAfGoogleAds = React.lazy(() => import('./pages/BlogPostStemLandingspaginaAfGoogleAds'));
const BlogPostVideoLandingspaginasVerhoogtConversie = React.lazy(() => import('./pages/BlogPostVideoLandingspaginasVerhoogtConversie'));
const BlogPostHeatmapsLandingspaginaVerbeteren = React.lazy(() => import('./pages/BlogPostHeatmapsLandingspaginaVerbeteren'));
const BlogPostInteractieveContentMeerLeads = React.lazy(() => import('./pages/BlogPostInteractieveContentMeerLeads'));
const BlogPostMeetRoiOnlineMarketing = React.lazy(() => import('./pages/BlogPostMeetRoiOnlineMarketing'));
const BlogPostContentMarketingVsBetaaldeAdvertenties = React.lazy(() => import('./pages/BlogPostContentMarketingVsBetaaldeAdvertenties'));
const BlogPostStraftGoogleAiGegenereerdeContent = React.lazy(() => import('./pages/BlogPostStraftGoogleAiGegenereerdeContent'));
const BlogPostDataBetereMarketingbeslissingen = React.lazy(() => import('./pages/BlogPostDataBetereMarketingbeslissingen'));
const BlogPostBrandmonitoringHouOverGezegd = React.lazy(() => import('./pages/BlogPostBrandmonitoringHouOverGezegd'));
const BlogPostKlantretentieBehoudenGoedkoperNieuweKlanten = React.lazy(() => import('./pages/BlogPostKlantretentieBehoudenGoedkoperNieuweKlanten'));
const BlogPostZetKlantreviewsMarketingtool = React.lazy(() => import('./pages/BlogPostZetKlantreviewsMarketingtool'));
const BlogPostToonStemBepalenKlinktMerk = React.lazy(() => import('./pages/BlogPostToonStemBepalenKlinktMerk'));
const BlogPostBouwSterkeMerkidentiteitOnline = React.lazy(() => import('./pages/BlogPostBouwSterkeMerkidentiteitOnline'));
const BlogPostGoogleAdsDemandGen = React.lazy(() => import('./pages/BlogPostGoogleAdsDemandGen'));
const BlogPostMaximaliseerConversiesVsDoelCpa = React.lazy(() => import('./pages/BlogPostMaximaliseerConversiesVsDoelCpa'));
const BlogPostAudienceTargetingGoogleAds = React.lazy(() => import('./pages/BlogPostAudienceTargetingGoogleAds'));
const BlogPostVerlaagBounceRateBetereGoogle = React.lazy(() => import('./pages/BlogPostVerlaagBounceRateBetereGoogle'));
const BlogPostMetaAdsFrequencyVoorkomAdvertentiemoeheid = React.lazy(() => import('./pages/BlogPostMetaAdsFrequencyVoorkomAdvertentiemoeheid'));
const BlogPostInstagramStoriesEffectiefAdvertenties = React.lazy(() => import('./pages/BlogPostInstagramStoriesEffectiefAdvertenties'));
const BlogPostOnlineMarketingUitbestedenBureauResultaat = React.lazy(() => import('./pages/BlogPostOnlineMarketingUitbestedenBureauResultaat'));
const BlogPostSeaUitbestedenWebshopEcommerceBureau = React.lazy(() => import('./pages/BlogPostSeaUitbestedenWebshopEcommerceBureau'));
const BlogPostSeaUitbestedenValkuilenMkb = React.lazy(() => import('./pages/BlogPostSeaUitbestedenValkuilenMkb'));
const BlogPostSeaUitbesteden2026AiAutomatisering = React.lazy(() => import('./pages/BlogPostSeaUitbesteden2026AiAutomatisering'));
const BlogPostOnlineMarketingUitbestedenOfZelfDoen = React.lazy(() => import('./pages/BlogPostOnlineMarketingUitbestedenOfZelfDoen'));
const BlogPostOnlineMarketingStrategieWebshopsOmzet = React.lazy(() => import('./pages/BlogPostOnlineMarketingStrategieWebshopsOmzet'));
const BlogPostSeaUitbestedenVragenVoordatJeTekent = React.lazy(() => import('./pages/BlogPostSeaUitbestedenVragenVoordatJeTekent'));
const BlogPostZoekmachineOptimalisatieBureauKiezenGids = React.lazy(() => import('./pages/BlogPostZoekmachineOptimalisatieBureauKiezenGids'));
const BlogPostZoekmachineOptimalisatieBureauGeenResultaatMis = React.lazy(() => import('./pages/BlogPostZoekmachineOptimalisatieBureauGeenResultaatMis'));
const BlogPostGoogleAdsSpecialistResultaten90Dagen = React.lazy(() => import('./pages/BlogPostGoogleAdsSpecialistResultaten90Dagen'));
const BlogPostGoogleAdsSpecialistVsBureauFreelancer = React.lazy(() => import('./pages/BlogPostGoogleAdsSpecialistVsBureauFreelancer'));
const BlogPostSeaBureauBeoordelenCampagnesBeheer = React.lazy(() => import('./pages/BlogPostSeaBureauBeoordelenCampagnesBeheer'));
const BlogPostConversieOptimalisatieBureauNodig = React.lazy(() => import('./pages/BlogPostConversieOptimalisatieBureauNodig'));
const BlogPostConversieOptimalisatieBureauResultatenHerkennen = React.lazy(() => import('./pages/BlogPostConversieOptimalisatieBureauResultatenHerkennen'));
const BlogPostGoogleAdsBureauVragenEersteGesprek = React.lazy(() => import('./pages/BlogPostGoogleAdsBureauVragenEersteGesprek'));
const BlogPostGoogleAdsBureauRedFlagsTekenen = React.lazy(() => import('./pages/BlogPostGoogleAdsBureauRedFlagsTekenen'));
const BlogPostOnlineMarketingStrategie2026Kanalen = React.lazy(() => import('./pages/BlogPostOnlineMarketingStrategie2026Kanalen'));
const BlogPostChatgptAdsSectorenProfiteren = React.lazy(() => import('./pages/BlogPostChatgptAdsSectorenProfiteren'));
const BlogPostGoogleAdsBeheerChecklistBureauControleren = React.lazy(() => import('./pages/BlogPostGoogleAdsBeheerChecklistBureauControleren'));
const BlogPostTiktokAdverteren2026CompleteGidsBeginners = React.lazy(() => import('./pages/BlogPostTiktokAdverteren2026CompleteGidsBeginners'));
const BlogPostMetaAdsCampagnestructuur = React.lazy(() => import('./pages/BlogPostMetaAdsCampagnestructuur'));
const BlogPostAttributionModellenLastClickDataDriven = React.lazy(() => import('./pages/BlogPostAttributionModellenLastClickDataDriven'));
const BlogPostTiktokPixelInstellen = React.lazy(() => import('./pages/BlogPostTiktokPixelInstellen'));
const BlogPostSeoDoodEvolueert2026 = React.lazy(() => import('./pages/BlogPostSeoDoodEvolueert2026'));
const BlogPostMetaAdsLokaleBedrijven = React.lazy(() => import('./pages/BlogPostMetaAdsLokaleBedrijven'));
const BlogPostMetaAdsB2bWerkt = React.lazy(() => import('./pages/BlogPostMetaAdsB2bWerkt'));
const BlogPostEeatBelangrijkVoorSeo = React.lazy(() => import('./pages/BlogPostEeatBelangrijkVoorSeo'));
const BlogPostTiktokAdsVsMetaAds = React.lazy(() => import('./pages/BlogPostTiktokAdsVsMetaAds'));
const BlogPostLinkedinAdsVsGoogleAds = React.lazy(() => import('./pages/BlogPostLinkedinAdsVsGoogleAds'));
const BlogPostLinkedinAdsRetargetingBereikWarme = React.lazy(() => import('./pages/BlogPostLinkedinAdsRetargetingBereikWarme'));
const BlogPostSeaBureauVergelijkenResultaten = React.lazy(() => import('./pages/BlogPostSeaBureauVergelijkenResultaten'));
const BlogPostSeaVsSeoStrategieBudgetDoel = React.lazy(() => import('./pages/BlogPostSeaVsSeoStrategieBudgetDoel'));
const BlogPostSeaCpcBenchmarksPerBranche = React.lazy(() => import('./pages/BlogPostSeaCpcBenchmarksPerBranche'));
const BlogPostOnlineMarketingMkb5KanalenWerken2026 = React.lazy(() => import('./pages/BlogPostOnlineMarketingMkb5KanalenWerken2026'));
const BlogPostMarketingUitbestedenMkbZelfDoen = React.lazy(() => import('./pages/BlogPostMarketingUitbestedenMkbZelfDoen'));
const BlogPostOnPageVsOffPageSeo = React.lazy(() => import('./pages/BlogPostOnPageVsOffPageSeo'));
const BlogPostContentStructurerenAiZoekmachines = React.lazy(() => import('./pages/BlogPostContentStructurerenAiZoekmachines'));
const BlogPostGoogleAdsSeizoensgebondenAdverteren = React.lazy(() => import('./pages/BlogPostGoogleAdsSeizoensgebondenAdverteren'));
const BlogPostUgcMetaAds = React.lazy(() => import('./pages/BlogPostUgcMetaAds'));
const BlogPostMetaAdsReelsAdvertentiesEffectief = React.lazy(() => import('./pages/BlogPostMetaAdsReelsAdvertentiesEffectief'));
const BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig = React.lazy(() => import('./pages/BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig'));
const BlogPostDynamicAdsMetaAutomatischAdverteren = React.lazy(() => import('./pages/BlogPostDynamicAdsMetaAutomatischAdverteren'));
const BlogPostLinkedinConversationAdsWerken = React.lazy(() => import('./pages/BlogPostLinkedinConversationAdsWerken'));
const BlogPostLinkedinAbmAccountBasedMarketing = React.lazy(() => import('./pages/BlogPostLinkedinAbmAccountBasedMarketing'));
const BlogPostLinkedinAdsOptimaliserenStapStap = React.lazy(() => import('./pages/BlogPostLinkedinAdsOptimaliserenStapStap'));
const BlogPostLinkedinAdsRapportageMetricsEcht = React.lazy(() => import('./pages/BlogPostLinkedinAdsRapportageMetricsEcht'));
const BlogPostTiktokVsInstagramReelsAdverteren = React.lazy(() => import('./pages/BlogPostTiktokVsInstagramReelsAdverteren'));
const BlogPostTiktokAdsWebshopsBoostSales = React.lazy(() => import('./pages/BlogPostTiktokAdsWebshopsBoostSales'));
const BlogPostTiktokShopAdverterenVerkopenPlatform = React.lazy(() => import('./pages/BlogPostTiktokShopAdverterenVerkopenPlatform'));
const BlogPostTiktokAdsVideoConverteert = React.lazy(() => import('./pages/BlogPostTiktokAdsVideoConverteert'));
const BlogPostTiktokSmartCampagnesUitgelegd = React.lazy(() => import('./pages/BlogPostTiktokSmartCampagnesUitgelegd'));
const BlogPostFullServiceMarketingBureauJuisteFase = React.lazy(() => import('./pages/BlogPostFullServiceMarketingBureauJuisteFase'));
const BlogPostOnlineMarketingUitbestedenWebshop = React.lazy(() => import('./pages/BlogPostOnlineMarketingUitbestedenWebshop'));
const BlogPostOnlineMarketingUitbestedenFoutenMkb = React.lazy(() => import('./pages/BlogPostOnlineMarketingUitbestedenFoutenMkb'));
const BlogPostGoogleAdsBureauWisselenZonderDataverlies = React.lazy(() => import('./pages/BlogPostGoogleAdsBureauWisselenZonderDataverlies'));
const BlogPostGenerativeEngineOptimizationTools2026 = React.lazy(() => import('./pages/BlogPostGenerativeEngineOptimizationTools2026'));
const BlogPostGenerativeEngineOptimizationChecklist = React.lazy(() => import('./pages/BlogPostGenerativeEngineOptimizationChecklist'));
const BlogPostSocialMediaAdverterenBureauVsFreelancer = React.lazy(() => import('./pages/BlogPostSocialMediaAdverterenBureauVsFreelancer'));
const BlogPostSocialMediaAdverterenUitbestedenWebshop = React.lazy(() => import('./pages/BlogPostSocialMediaAdverterenUitbestedenWebshop'));
const BlogPostFullServiceMarketingBureauWebshops = React.lazy(() => import('./pages/BlogPostFullServiceMarketingBureauWebshops'));
const BlogPostFullServiceMarketingBureauNederlandKeuze = React.lazy(() => import('./pages/BlogPostFullServiceMarketingBureauNederlandKeuze'));
const BlogPostGeoOptimalisatieChecklist = React.lazy(() => import('./pages/BlogPostGeoOptimalisatieChecklist'));
const BlogPostGeoOptimalisatieDienstverleners = React.lazy(() => import('./pages/BlogPostGeoOptimalisatieDienstverleners'));
const BlogPostXmlSitemapNodig = React.lazy(() => import('./pages/BlogPostXmlSitemapNodig'));
const BlogPostRobotstxtUitgelegd = React.lazy(() => import('./pages/BlogPostRobotstxtUitgelegd'));
const BlogPostGoogleSearchConsoleEffectief = React.lazy(() => import('./pages/BlogPostGoogleSearchConsoleEffectief'));
const BlogPostLinkedinAdsBudgetMinimaal = React.lazy(() => import('./pages/BlogPostLinkedinAdsBudgetMinimaal'));
const BlogPostTiktokTrendsAdvertenties = React.lazy(() => import('./pages/BlogPostTiktokTrendsAdvertenties'));
const BlogPostMeetSuccesTiktokAds = React.lazy(() => import('./pages/BlogPostMeetSuccesTiktokAds'));
const BlogPostPagespeedInsightsGebruik = React.lazy(() => import('./pages/BlogPostPagespeedInsightsGebruik'));
const BlogPostInterpreteerSeoDataGa4 = React.lazy(() => import('./pages/BlogPostInterpreteerSeoDataGa4'));
const BlogPostVerschilDomeinautoriteitTopicalAuthority = React.lazy(() => import('./pages/BlogPostVerschilDomeinautoriteitTopicalAuthority'));
const BlogPostGoogleAiModeWerkt = React.lazy(() => import('./pages/BlogPostGoogleAiModeWerkt'));
const BlogPostBeinvloedenGoogleAiOverviewsLokale = React.lazy(() => import('./pages/BlogPostBeinvloedenGoogleAiOverviewsLokale'));
const BlogPostBouwTopischeAutoriteitBetereGeo = React.lazy(() => import('./pages/BlogPostBouwTopischeAutoriteitBetereGeo'));
const BlogPostFaqSectiesOmBeterGevonden = React.lazy(() => import('./pages/BlogPostFaqSectiesOmBeterGevonden'));
const BlogPostRolGeoBouwVertrouwenAi = React.lazy(() => import('./pages/BlogPostRolGeoBouwVertrouwenAi'));
const BlogPostStatistiekenDataOmAiCitaties = React.lazy(() => import('./pages/BlogPostStatistiekenDataOmAiCitaties'));

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
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
          <Route path="/blogs/strategie/online-marketing-strategie-b2b-vs-b2c" element={<BlogPostOnlineMarketingStrategieB2bVsB2c />} />
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
          <Route path="/blogs/social-ads/meta-ads-2026-werkt-na" element={<Navigate to="/blogs/social-ads/meta-ads-2025-werkt-na" replace />} />
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
          <Route path="/blogs/google-ads/sea-uitbesteden-freelancer-of-bureau" element={<BlogPostSeaUitbestedenFreelancerOfBureau />} />
          <Route path="/blogs/seo/zoekmachine-optimalisatie-bureau-resultaten-wanneer" element={<BlogPostZoekmachineOptimalisatieBureauResultatenWanneer />} />
          <Route path="/blogs/google-ads/google-ads-specialist-checken-goed-werk" element={<BlogPostGoogleAdsSpecialistCheckenGoedWerk />} />
          <Route path="/blogs/google-ads/google-ads-bureau-resultaten-rendement" element={<BlogPostGoogleAdsBureauResultatenRendement />} />
          <Route path="/blogs/google-ads/google-ads-bureau-wisselen-zonder-dataverlies" element={<BlogPostGoogleAdsBureauWisselenZonderDataverlies />} />
          <Route path="/blogs/geo/generative-engine-optimization-tools-2026" element={<BlogPostGenerativeEngineOptimizationTools2026 />} />
          <Route path="/blogs/geo/generative-engine-optimization-checklist" element={<BlogPostGenerativeEngineOptimizationChecklist />} />
          <Route path="/blogs/social-ads/social-media-adverteren-bureau-vs-freelancer" element={<BlogPostSocialMediaAdverterenBureauVsFreelancer />} />
          <Route path="/blogs/social-ads/social-media-adverteren-uitbesteden-webshop" element={<BlogPostSocialMediaAdverterenUitbestedenWebshop />} />
          <Route path="/blogs/algemeen/full-service-marketing-bureau-webshops" element={<BlogPostFullServiceMarketingBureauWebshops />} />
          <Route path="/blogs/algemeen/full-service-marketing-bureau-nederland-keuze" element={<BlogPostFullServiceMarketingBureauNederlandKeuze />} />
          <Route path="/blogs/geo/geo-optimalisatie-checklist-gevonden-ai" element={<BlogPostGeoOptimalisatieChecklist />} />
          <Route path="/blogs/geo/geo-optimalisatie-dienstverleners-chatgpt" element={<BlogPostGeoOptimalisatieDienstverleners />} />
          <Route path="/blogs/seo/xml-sitemap-heb-hem-nodig" element={<BlogPostXmlSitemapNodig />} />
          <Route path="/blogs/seo/robotstxt-uitgelegd-mag-mag-gecrawled" element={<BlogPostRobotstxtUitgelegd />} />
          <Route path="/blogs/seo/google-search-console-effectief" element={<BlogPostGoogleSearchConsoleEffectief />} />
          <Route path="/blogs/social-ads/linkedin-ads-budget-hoeveel-minimaal" element={<BlogPostLinkedinAdsBudgetMinimaal />} />
          <Route path="/blogs/social-ads/tiktok-trends-advertenties" element={<BlogPostTiktokTrendsAdvertenties />} />
          <Route path="/blogs/social-ads/meet-succes-tiktok-ads-campagne" element={<BlogPostMeetSuccesTiktokAds />} />
          <Route path="/blogs/seo/pagespeed-insights-gebruik" element={<BlogPostPagespeedInsightsGebruik />} />
          <Route path="/blogs/seo/interpreteer-seo-data-google-analytics" element={<BlogPostInterpreteerSeoDataGa4 />} />
          <Route path="/blogs/seo/verschil-tussen-domeinautoriteit-topical-authority" element={<BlogPostVerschilDomeinautoriteitTopicalAuthority />} />
          <Route path="/blogs/seo/google-ai-mode-werkt" element={<BlogPostGoogleAiModeWerkt />} />
          <Route path="/blogs/seo/beinvloeden-google-ai-overviews-lokale" element={<BlogPostBeinvloedenGoogleAiOverviewsLokale />} />
          <Route path="/blogs/geo/bouw-topische-autoriteit-betere-geo" element={<BlogPostBouwTopischeAutoriteitBetereGeo />} />
          <Route path="/blogs/geo/faq-secties-om-beter-gevonden" element={<BlogPostFaqSectiesOmBeterGevonden />} />
          <Route path="/blogs/geo/rol-geo-bouw-vertrouwen-ai" element={<BlogPostRolGeoBouwVertrouwenAi />} />
          <Route path="/blogs/geo/statistieken-data-om-ai-citaties" element={<BlogPostStatistiekenDataOmAiCitaties />} />
          <Route path="/blogs/google-ads/google-ads-specialist-vinden-testen" element={<BlogPostGoogleAdsSpecialistVindenTesten />} />
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
          <Route path="/blogs/geo/geo-optimalisatie-verschijnen-ai-antwoorden" element={<BlogPostGeoOptimalisatieVerschijnenAiAntwoorden />} />
          <Route path="/blogs/geo/geo-optimalisatie-mkb-stappenplan" element={<BlogPostGeoOptimalisatieMkbStappenplan />} />
          <Route path="/blogs/geo/geo-optimalisatie-uitbesteden" element={<BlogPostGeoOptimalisatieUitbesteden />} />
          <Route path="/blogs/geo/generative-engine-optimization-complete-gids-2026" element={<BlogPostGenerativeEngineOptimizationCompleteGids2026 />} />
          <Route path="/blogs/geo/generative-engine-optimization-webshops" element={<BlogPostGenerativeEngineOptimizationWebshops />} />
          <Route path="/blogs/geo/generative-engine-optimization-uitbesteden" element={<BlogPostGenerativeEngineOptimizationUitbesteden />} />
          <Route path="/blogs/social-ads/social-media-adverteren-uitbesteden-gids-mkb" element={<BlogPostSocialMediaAdverterenUitbestedenGidsMkb />} />
          <Route path="/blogs/social-ads/social-media-adverteren-uitbesteden-meten-resultaat" element={<BlogPostSocialMediaAdverterenUitbestedenMetenResultaat />} />
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
          <Route path="/blogs/algemeen/full-service-marketing-bureau-juiste-fase" element={<BlogPostFullServiceMarketingBureauJuisteFase />} />
          <Route path="/blogs/algemeen/online-marketing-uitbesteden-webshop" element={<BlogPostOnlineMarketingUitbestedenWebshop />} />
          <Route path="/blogs/algemeen/online-marketing-uitbesteden-fouten-mkb" element={<BlogPostOnlineMarketingUitbestedenFoutenMkb />} />
          <Route path="/blogs/strategie/online-marketing-strategie-webshops-omzet" element={<BlogPostOnlineMarketingStrategieWebshopsOmzet />} />
          <Route path="/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" element={<BlogPostSeaUitbestedenVragenVoordatJeTekent />} />
          <Route path="/blogs/seo/zoekmachine-optimalisatie-bureau-kiezen-gids" element={<BlogPostZoekmachineOptimalisatieBureauKiezenGids />} />
          <Route path="/blogs/seo/zoekmachine-optimalisatie-bureau-geen-resultaat-mis" element={<BlogPostZoekmachineOptimalisatieBureauGeenResultaatMis />} />
          <Route path="/blogs/google-ads/google-ads-specialist-resultaten-90-dagen" element={<BlogPostGoogleAdsSpecialistResultaten90Dagen />} />
          <Route path="/blogs/google-ads/google-ads-specialist-vs-bureau-freelancer" element={<BlogPostGoogleAdsSpecialistVsBureauFreelancer />} />
          <Route path="/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" element={<BlogPostSeaBureauBeoordelenCampagnesBeheer />} />
          <Route path="/blogs/google-ads/sea-bureau-nederland-selectiecriteria" element={<BlogPostSeaBureauNederland />} />
          <Route path="/blogs/google-ads/sea-bureau-wisselen-overstappen" element={<BlogPostSeaBureauWisselen />} />
          <Route path="/blogs/strategie/conversie-optimalisatie-quick-wins" element={<BlogPostConversieOptimalisatieQuickWins />} />
          <Route path="/blogs/strategie/conversie-optimalisatie-webshops-bezoekers-kopers" element={<BlogPostConversieOptimalisatieWebshops />} />
          <Route path="/blogs/strategie/conversie-optimalisatie-bureau-nodig" element={<BlogPostConversieOptimalisatieBureauNodig />} />
          <Route path="/blogs/strategie/conversie-optimalisatie-bureau-resultaten-herkennen" element={<BlogPostConversieOptimalisatieBureauResultatenHerkennen />} />
          <Route path="/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" element={<BlogPostGoogleAdsBureauVragenEersteGesprek />} />
          <Route path="/blogs/google-ads/google-ads-bureau-red-flags-tekenen" element={<BlogPostGoogleAdsBureauRedFlagsTekenen />} />
          <Route path="/blogs/strategie/online-marketing-strategie-2026-kanalen" element={<BlogPostOnlineMarketingStrategie2026Kanalen />} />

          {/* /blogs/ redirect naar /nieuws */}
          <Route path="/blogs" element={<Navigate to="/nieuws" replace />} />
          {/* Categorie overzichtspagina's — /blogs/:category */}
          <Route path="/blogs/:category" element={<BlogCategory />} />
          {/* Oude routes — backwards compatibility */}
          <Route path="/blogs/meta-ads/waarom-meta-ads-niet-converteren" element={<Navigate to="/blogs/social-ads/waarom-meta-ads-niet-converteren" replace />} />
          <Route path="/blogs/tiktok-ads/tiktok-ads-voor-bedrijven" element={<Navigate to="/blogs/social-ads/tiktok-ads-voor-bedrijven" replace />} />
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

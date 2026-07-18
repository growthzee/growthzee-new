"use client";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import Creation from "@/components/Creation";
import Faq from "@/components/Faq";
import FolderStack from "@/components/folderstack";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NicheCards from "@/components/nichecards";
import OnboardingTimeline from "@/components/onboarding";

// import Portfolio from "@/components/Portfolio";
// import PricingCheatSheet from "@/components/PricingCheatSheet";
import Review from "@/components/Review";
import Satisfaction from "@/components/Satisfaction";
import Services from "@/components/Services";
import SuccessStories from "@/components/successstories";

// import CaseStudies from "@/components/Home/CaseStudies";

export default function Home() {
  return (
    <main>
      <AnnouncementPopup />
      <Hero />

      {/* <Portfolio /> */}
      <Services />

      <Creation />
      <OnboardingTimeline />
      {/* <PricingCheatSheet /> */}
      <Satisfaction />
      <FolderStack />
      <NicheCards />
      <SuccessStories />
      <Review />
      <Faq />
      <Footer />
    </main>
  );
}

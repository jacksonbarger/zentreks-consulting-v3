import HeroSection from "@/components/home/HeroSection";
import AIReadinessCTA from "@/components/home/AIReadinessCTA";
import MissionSection from "@/components/home/MissionSection";
import ServicesSection from "@/components/home/ServicesSection";
import ThoughtLeadershipSection from "@/components/home/ThoughtLeadershipSection";
import TrendingNow from "@/components/home/TrendingNow";
import CaseStudies from "@/components/home/CaseStudies";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import QuickLinks from "@/components/home/QuickLinks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIReadinessCTA />
      <MissionSection />
      <ServicesSection />
      <ThoughtLeadershipSection />
      <TrendingNow />
      <CaseStudies />
      <NewsletterCTA />
      <QuickLinks />
    </>
  );
}

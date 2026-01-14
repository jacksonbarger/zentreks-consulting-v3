import HeroSection from "@/components/home/HeroSection";
import TrendingNow from "@/components/home/TrendingNow";
import ServicesSection from "@/components/home/ServicesSection";
import CaseStudies from "@/components/home/CaseStudies";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import QuickLinks from "@/components/home/QuickLinks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingNow />
      <ServicesSection />
      <CaseStudies />
      <NewsletterCTA />
      <QuickLinks />
    </>
  );
}

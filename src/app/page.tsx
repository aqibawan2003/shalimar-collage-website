import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import PrincipalMessage from "@/components/PrincipalMessage";
import AboutSection from "@/components/AboutSection";
import FacultySection from "@/components/FacultySection";
import ProgramsSection from "@/components/ProgramsSection";
import ProudMoments from "@/components/ProudMoments";
import NewsSection from "@/components/NewsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <PrincipalMessage />
      <AboutSection />
      <FacultySection />
      <ProgramsSection />
      <ProudMoments />
      <NewsSection />
      <ReviewsSection />
      <CTABanner />
    </>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularPrograms from "@/components/PopularPrograms";
import FeaturesSection from "@/components/FeaturesSection";
import EnrollmentSteps from "@/components/EnrollmentSteps";
import CurriculumHighlights from "@/components/CurriculumHighlights";
import ParentingSessions from "@/components/ParentingSessions";
import TestimonialsSection from "@/components/TestimonialCard";
import ConnectWithUs from "@/components/ConnectWithUs";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs/>
        <PopularPrograms/>
        <FeaturesSection/>
        <EnrollmentSteps/>
        <CurriculumHighlights/>
        <ParentingSessions/>
        <TestimonialsSection/>
        <ConnectWithUs/>
      </main>
      <Footer />
      <ScrollToTop /> {/* Add the Scroll-To-Top button */}
    </div>
  );
}

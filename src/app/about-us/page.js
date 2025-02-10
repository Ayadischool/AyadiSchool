import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsSectionOne from "@/components/AboutUsSectionOne";
import TeamSection from "@/components/TeamSection";
import AboutUsFeatures from "@/components/AboutUsFeatures";


export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutUsSectionOne/>
      <AboutUsFeatures />
      <TeamSection/>
    
      <Footer />
    </div>
  );
}

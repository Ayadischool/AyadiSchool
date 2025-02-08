import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsBanner from "@/components/ProgramsBanner";
import PopularPrograms from "@/components/PopularPrograms";
import CoursePrograms from "@/components/CoursePrograms";



const programs = [
  { title: "STEM Education", description: "Advanced science and technology curriculum." },
  { title: "Leadership Program", description: "Develop leadership skills in students." },
  { title: "Art & Music", description: "Creativity through art and music education." },
];

export default function Programs() {
  return (
    <div>
      <Navbar />
      <ProgramsBanner/>
      <CoursePrograms/>
      <PopularPrograms/>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Ayadi Glocal School is dedicated to providing world-class education with a focus on leadership, 
          innovation, and creativity.
        </p>
      </div>
      <Footer />
    </div>
  );
}

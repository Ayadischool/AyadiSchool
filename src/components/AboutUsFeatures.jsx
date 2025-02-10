"use client";
import Image from "next/image";
const AboutUsFeatures = () => {
  return (
    <section className="flex  px-10 lg:px-20  flex-col md:flex-row items-center gap-8   md:p-8">
        
      <div className="w-full md:w-1/2 hidden lg:block">
        <Image
          src="/HeroSectionImage.jpeg"
          alt="Features Image"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="w-full md:w-full ">
        <h3 className="text-green-600 font-semibold text-lg">Features</h3>
        <h2 className="text-3xl font-bold mt-2">
          We are always working to provide you best of the features in all aspects.
        </h2>
        <p className="mt-4 text-gray-700">
          At AYADI GLOCAL SCHOOL, we provide a learning experience that nurtures both academic excellence and personal growth. By enrolling with us, your child will benefit from a comprehensive education that emphasizes:
        </p>
        <ul className="mt-4 space-y-3 text-gray-800">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">●</span>
            <span><strong>Personalized Learning:</strong> Tailored to meet the unique needs and strengths of each student.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">●</span>
            <span><strong>Modern Technology:</strong> Integrated into lessons to enhance learning and prepare students for a tech-driven world.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">●</span>
            <span><strong>Holistic Development:</strong> Focusing not only on academic success but also on emotional, social, and intellectual growth.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsFeatures;

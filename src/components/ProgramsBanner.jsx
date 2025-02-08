"use client";
import Image from "next/image";

const ProgramsBanner = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[350px] flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/AyadiLogo.png" 
          alt="Programs Banner"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Black overlay */}
      </div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Curriculum and Academic Excellence
        </h1>
        <p className="mt-2 lg:mt-4 text-sm lg:text-base max-w-2xl mx-auto opacity-90">
          Our teaching methodologies are designed to inspire curiosity, foster critical
          thinking, and encourage a love for learning.
        </p>
      </div>
    </div>
  );
};

export default ProgramsBanner;

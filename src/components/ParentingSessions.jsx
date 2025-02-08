"use client";
import React from 'react';

const ParentingSessions = () => {
  const features = [
    {
      title: "24/7 Parent Support System",
      description: "ensures that parents have access to assistance whenever they need it",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/e6af41c4ed3045bca76917e9b501da92/2d2a09a2258f6ac1231b363568c45e170cad68c20cbdf6effa47bb0d4170709b?apiKey=e6af41c4ed3045bca76917e9b501da92&"
    },
    {
      title: "Free Programs for Parents",
      description: "Free programs for parents, including workshops, webinars, and resources.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/e6af41c4ed3045bca76917e9b501da92/24e6b4df65f552897030473af33d5fd3fb2d22dc36f8da252807f0b8442c2134?apiKey=e6af41c4ed3045bca76917e9b501da92&"
    },
    {
      title: "Cultural Events for Parent",
      description: "We regularly host cultural events where parents can engage with the school community",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/e6af41c4ed3045bca76917e9b501da92/cbcef402ff013e322ba2763d91c8c7db72deb8fa7f8a593875e27ee4ccbe025f?apiKey=e6af41c4ed3045bca76917e9b501da92&"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-3 pl  max-md:pb-24 p-5 md:p-5">
         <h2 className="text-2xl font-bold text-center mb-4"> Parental Involvement and Communitym</h2>
        <p className="text-center text-gray-600 mb-8 px-20">
        we believe that parents play a vital role in their child's education. We
        are committed to fostering strong partnerships between parents,
        teachers, and students to create a supportive and enriching learning
        environmen
        </p>
      <div className="flex flex-wrap  gap-8 items-center self-end mt-5 w-full max-w-[1195px] max-md:mt-10 max-md:max-w-full">
        <div className="flex bg-gray-400 overflow-hidden flex-col self-stretch my-auto tracking-wide text-black min-w-[240px] w-[507px] max-md:max-w-full">
          <div className="flex bg-lime-400 min-h-[7px] w-[94px]" />
          <h2 className="mt-9 text-4xl font-bold leading-none">
            Parenting Sessions
          </h2>
          <p className="mt-9  text-sm leading-5 max-md:max-w-full">
            We offer monthly parenting sessions to help parents navigate the
            challenges of raising and supporting their children's academic and
            personal growth.
          </p>
          <button className="overflow-hidden z-10 px-10  py-4 mt-0 max-w-full text-sm font-bold tracking-wide leading-loose text-center text-white bg-lime-400 rounded-md w-[292px] max-md:px-5">
        Get a call !
      </button>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-8 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col justify-center items-start min-h-[689px] w-[239px]">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className={`flex overflow-hidden flex-col px-10 py-9 ${index > 0 ? 'mt-6' : ''} max-w-full shadow-lg bg-blue-950 w-[308px] max-md:px-5`}>
                <img
                  loading="lazy"
                  src={feature.imageSrc}
                  alt=""
                  className="object-contain aspect-square w-[72px]"
                />
                <h3 className="mt-5 text-base font-bold tracking-normal text-slate-800">
                  {feature.title}
                </h3>
                <div className="flex mt-5 bg-lime-400 min-h-[2px] w-[50px]" />
                <p className="mt-5 text-sm tracking-wide leading-5 text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center pt-12 min-h-[689px] min-w-[240px] w-[343px]">
            <div className="flex overflow-hidden flex-col px-10 pt-9 pb-14 max-w-full shadow-lg bg-blue-950 min-h-[287px] w-[300px] max-md:px-5">
              <img
                loading="lazy"
                src={features[2].imageSrc}
                alt=""
                className="object-contain aspect-square w-[72px]"
              />
              <h3 className="mt-5 text-base font-bold tracking-normal text-slate-800">
                {features[2].title}
              </h3>
              <div className="flex mt-5 bg-lime-400 min-h-[2px] w-[50px]" />
              <p className="mt-5 text-sm tracking-wide leading-5 text-white">
                {features[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ParentingSessions;
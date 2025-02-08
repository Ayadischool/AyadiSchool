
"use client";
import React from 'react';
const TestimonialCard = ({ content, author, role, stars }) => (
  <div className="flex flex-col px-7 py-12 mx-auto w-full border border-lime-400 border-solid shadow-2xl bg-blue-950 rounded-[40px] max-md:px-5 max-md:mt-9 max-md:max-w-full">
    <div className="text-base leading-6 text-white text-opacity-90 max-md:mr-2.5 max-md:max-w-full">
      {content}
    </div>
    <div className="flex gap-10 items-start mt-8 w-full max-md:max-w-full">
      <div className="flex flex-col flex-1 text-white text-opacity-90">
        <div className="self-start text-base font-bold">{author}</div>
        <div className="mt-1 text-xs">{role}</div>
      </div>
      <div className="flex overflow-hidden flex-1 gap-1.5 items-start">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            loading="lazy"
            src={`http://b.io/ext_${index + 1}-`}
            className="object-contain shrink-0 aspect-square w-[22px]"
            alt=""
          />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus t Pellentesque ullamcorper aliquet ultrices.",
      author: "John Doe",
      role: "CEO of company.com",
    },
    {
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus t Pellentesque ullamcorper aliquet ultrices.",
      author: "John Doe",
      role: "CEO of company.com",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-1  max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1095px] max-md:max-w-full">
        <h2 className="text-4xl font-bold text-center text-black">
          Testimonials
        </h2>
        <p className="mt-6 text-2xl font-medium text-center text-blue-950 max-md:max-w-full">
          See What Our Student's Parents are trying to say
        </p>
        <div className="self-stretch mt-8 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
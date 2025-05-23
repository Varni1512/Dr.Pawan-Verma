import React from 'react';
import { Medal, Mic, Award } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Leadership Excellence Award",
      event: "Financial Services Forum, 2024",
      icon: (
        <img
          src="/award1.png"
          alt="Leadership Award Icon"
          className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
        />
      ),
      tag: "Excellence",
      tagIcon: "/reward.png"
    },
    {
      id: 2,
      title: "Best Business Author",
      event: "India Authors Award, 2023",
      icon: (
        <img
          src="/award2.png"
          alt="Leadership Award Icon"
          className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
        />
      ),
      tag: "Author",
      tagIcon: "/write.png"
    },
    {
      id: 3,
      title: "Distinguished Speaker",
      event: "Global Leadership Summit, 2022",
      icon: (
        <img
          src="/award3.jpeg"
          alt="Leadership Award Icon"
          className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
        />
      ),
      tag: "Speaker",
      tagIcon: "/mic.png"
    },
    {
      id: 4,
      title: "Lifetime Achievement",
      event: "Financial Services Association, 2021",
      icon: (
        <img
          src="/award4.png"
          alt="Leadership Award Icon"
          className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
        />
      ),
      tag: "Achievement",
      tagIcon: "/medal.png"
    }
  ];

  return (
    <div className="bg-[#F9FAFB] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Awards & Recognition</h2>
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center justify-start text-center bg-[#FEFEFE] shadow-lg rounded-2xl p-6 min-h-[280px] sm:min-h-[320px]"
            >
              <div className="bg-gray p-5 sm:p-6 rounded-full shadow-md mb-6 flex items-center justify-center">
                {award.icon}
              </div>

              <div className="flex flex-col flex-grow items-center justify-start">
                <h3 className="font-bold text-lg sm:text-xl mb-1">{award.title}</h3>
                <p
                  className="text-xs sm:text-sm mb-4"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7B7B7B' }}
                >
                  {award.event}
                </p>
              </div>

              <span className="inline-flex items-center justify-center px-3 py-2 bg-[#F4EFE2] rounded-full text-xs sm:text-sm text-yellow-700 font-medium shadow-sm mt-auto">
                <img
                  src={award.tagIcon}
                  alt={award.tag}
                  className="h-4 w-4 mr-2 filter brightness-2 invert-[35%] sepia-[100%] saturate-[300%] hue-rotate-[10deg]"
                />
                {award.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsSection;

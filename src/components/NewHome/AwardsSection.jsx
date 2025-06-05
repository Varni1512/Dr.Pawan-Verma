import React from 'react';
import { Medal, Mic, Award } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Receiving Hon Doctorate from Azteca University Mexico",
      icon: (
        <img
          src="/1.jpg"
          alt="Leadership Award Icon"
          className="w-full h-88 sm:h-96 object-cover rounded-lg"
        />
      )
    },
    {
      id: 2,
      title: "Best Leadership author 2024 Trophy and Certificate",
      icon: (
        <img
          src="/2.jpeg"
          alt="Best Business Author Icon"
          className="w-full h-88 sm:h-96 object-cover rounded-lg"
        />
      )
    },
    {
      id: 3,
      title: "ISTD Book Award 2019",
      icon: (
        <img
          src="/3.jpg"
          alt="Distinguished Speaker Icon"
          className="w-full h-88 sm:h-96 object-cover rounded-lg"
        />
      )
    },
    {
      id: 4,
      title: "Leadership Excellence Trophy and Certificate",
      icon: (
        <img
          src="/5.jpg"
          alt="Lifetime Achievement Icon"
          className="w-full h-88 sm:h-96 object-cover rounded-lg"
        />
      )
    },
    {
      id: 5,
      title: "Sahityakosh Samman 2022",
      icon: (
        <img
          src="/4.jpeg"
          alt="Innovation Award Icon"
          className="w-full h-88 sm:h-96 object-cover rounded-lg"
        />
      )
    },
    {
      id: 6,
      title: "Receiving REX Award",
      icon: (
        <img
          src="/6.jpg"
          alt="Outstanding Contribution Icon"
          className="w-full h-88 sm:h-96 object-cover rounded-lg"
        />
      )
    }
  ];

  return (
    <div className="bg-[#F9FAFB] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Awards & Recognition</h2>
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center justify-start text-center bg-[#FEFEFE] shadow-lg rounded-2xl p-6 min-h-[360px] sm:min-h-[400px]"
            >
              <div className="mb-4 w-full">
                {award.icon}
              </div>

              <div className="flex flex-col flex-grow items-center justify-center">
                <h3 className="font-bold text-lg sm:text-xl text-center">{award.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsSection;

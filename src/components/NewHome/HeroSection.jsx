import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm my-8 mx-auto max-w-7xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}>
            With experience serving on boards and leading initiatives in organizations like Reliance
            Group and LIC of India, Dr. Verma brings a wealth of practical knowledge to help your
            organization thrive.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto cursor-pointer">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            src="/meet.png"
            alt="Business meeting"
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
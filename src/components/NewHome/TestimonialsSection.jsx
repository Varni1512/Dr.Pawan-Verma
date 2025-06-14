import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: `"If you want to navigate through the leadership challenges of the twenty-first century, The 10X Leader is just the book for you."`,
      author: 'T. S. VIJAYAN',
      position: 'Former Chairman, Insurance Regulatory and Development Authority of India',
      rating: 5,
    },
    {
      id: 2,
      content: `"Highly recommended to practitioners for thoughts on new-age leadership."`,
      author: 'M. BALACHANDRAN',
      position: 'Former Chairman, Bank of India and National Payments Corporation of India (NPCI)',
      rating: 5,
    },
    {
      id: 3,
      content: `"The 10X Leader makes you think about leadership in an entirely new way"`,
      author: 'Manish Mimani',
      position: 'Founder & CEO, Protectt.ai Labs Pvt Ltd.',
      rating: 5,
    },
    {
      id: 4,
      content: `"Verma's mantra of whole-brain leadership to lead through today's challenging times is not only fascinating but extremely relevant."`,
      author: 'KAMALJI SAHAY',
      position: 'Author, The LIC Story, Columnist with The Financial Express, former MD and CEO, Star Union Dai-ichi Life Insurance',
      rating: 5,
    },
    {
      id: 5,
      content: `"No matter at what level you are in your organization, you will love to read this book."`,
      author: 'GIRISH KULKARNI',
      position: 'Chairman-Asia Pacific, Dai-ichi Life International Holdings, Singapore',
      rating: 5,
    },
    {
      id: 6,
      content: `"Verma makes a compelling case for a paradigm shift from the leader-follower model to a leader-leader model of organizational relationships."`,
      author: 'DR. R. RAMAKRISHNAN',
      position: 'Chairman and MD, Transformia Advisors LLP, and former Chief Executive, Polycab India Ltd.',
      rating: 5,
    },
  ];

  // State for current page index (slide)
  const [page, setPage] = useState(0);

  // State for cards per page based on screen size (1 for mobile, 3 for md+)
  const [pageSize, setPageSize] = useState(3);

  const intervalRef = useRef(null);

  // Detect screen resize to update pageSize accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageSize(1);
      } else {
        setPageSize(3);
      }
    };

    handleResize(); // set initial pageSize
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / pageSize);

  // Auto slide every 5 seconds
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [pageSize]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setPage((prev) => (prev + 1) % totalPages);
    startAutoSlide();
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
    startAutoSlide();
  };

  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
        />
      ));
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Book Testimonials</h2>
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {[...Array(totalPages)].map((_, p) => (
              <div
                key={p}
                className={`grid gap-8 sm:gap-10 min-w-full ${pageSize === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
                  }`}
              >
                {testimonials
                  .slice(p * pageSize, p * pageSize + pageSize)
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm min-h-[220px] flex flex-col justify-between max-w-md mx-auto md:max-w-none"
                    >
                      <div className="flex mb-3 sm:mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-600 italic text-sm sm:text-base mb-6" style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}>
                        {testimonial.content}
                      </p>
                      <div>
                        <p className="font-bold text-sm sm:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}>
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;

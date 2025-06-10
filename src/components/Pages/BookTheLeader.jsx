import { Star, ArrowLeft } from "lucide-react";
import book2 from '/singlebook02.jpg';

import Testimonials from "../Home/Testimonials";
import OtherBooks from "../Pages/OtherBooks";
import { Link } from "react-router-dom";
import VideoTestimonials from "../Home/VideoTestimonial";

const BookTheLeader = () => {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="px-4 pt-6">
        <Link to="/#nonfiction">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f39c12] hover:bg-[#e67e22] transition"
            title="Go Back"
          >
            <ArrowLeft size={20} className="text-white" />
          </div>
        </Link>
      </div>

      {/* Book Details Section */}
      <section className="py-12 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={book2}
                alt="Age of The IMPERFECT LEADER"
                className="w-full max-w-[250px] object-contain"
              />
            </div>

            {/* Book Details */}
            <div className="md:w-2/3">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">
                The 10X Leader: Are You Ready to Lead in a Changed World?
              </h1>
              <h2>The 10X Leader: Are You Ready to Lead in a Changed World?</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-justify mb-6">
                Dear Leader, the world has changed. Have you evolved with it?<br />
                In The 10X Leader, renowned leadership expert Dr. Pawan Verma redefines what it means to lead in today’s fast-paced, unpredictable, and interconnected world. This is not just another leadership book—it’s a powerful call to action for those who want to make a meaningful difference.
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                Dr. Verma introduces the concept of the 10X Leader a leader driven by purpose, powered by innovation, and connected through values. These are the leaders who don’t just adapt to change they create it. They lead not only with their minds but also with their hearts.
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                At the core of this transformative book is the AGILE Leadership Framework:
                Alive & Adaptive, Grit, Innovation, Learning, and Excellence.
                This framework equips leaders to navigate the chaos of the VUCA (Volatile, Uncertain, Complex, and Ambiguous) world with clarity, resilience, and strategic foresight.
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                Dr. Verma also champions a Whole-Brain Leadership Approach, encouraging readers to engage both creative and analytical thinking to lead with balance and impact.
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                Whether you're an entrepreneur, a corporate professional, or a change-maker, The 10X Leader offers practical tools and powerful insights to move beyond outdated Industrial Age mindsets—and step into the future of conscious, connected, and courageous leadership.
              </p>
              <p className="text-sm md:text-base font-bold text-justify mb-6">
                Don’t just think outside the box.<br />Eliminate the box. Lead beyond limits.
              </p>

              <div className="flex space-x-4 mb-6">
                <Link
                  to="https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership/dp/8119792637/ref=tmm_pap_swatch_0"
                  className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Other Books Section */}
      <OtherBooks bookTitle={"The 10X Leader"} />

      {/* Book Testimonials Section */}
      <VideoTestimonials />
      <Testimonials />
    </div>
  );
};

export default BookTheLeader;

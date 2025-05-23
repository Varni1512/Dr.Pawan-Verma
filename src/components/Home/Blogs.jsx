import { useState, useRef, useEffect } from "react";
import { Clock, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import { db } from "../../config/Firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const BlogCard = ({ id, title, content, author }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden h-full flex flex-col">
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p
          className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>By {author}</span>
          </div>
        </div>
        <Link
          to={`/blogs/${id}`}
          className="text-yellow-600 hover:text-yellow-800 text-sm font-medium"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "Blogs"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const truncatecontent = (contentBlocks, wordLimit = 25) => {
    if (!Array.isArray(contentBlocks)) return "";

    const fullText = contentBlocks.map((block) => block.content).join(" ");
    const words = fullText.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : fullText;
  };

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return;

      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = 300;
      const visibleCount = Math.floor(containerWidth / cardWidth);

      setTotalSlides(Math.max(0, blogs.length - Math.max(1, visibleCount)));
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [blogs]);

  const scrollToSlide = (index) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.querySelector("div").offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth =
        scrollContainerRef.current.querySelector("div").offsetWidth;
      const newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-white to-[#f5e9d1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
            Blogs By Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
          </h2>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, index) => (
            <div key={index} className="h-full">
              <BlogCard
                id={blog.id}
                title={blog.title}
                content={truncatecontent([{ content: blog.content }])}
                author={blog.author || "Pawan Verma"}
              />
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide"
            onScroll={handleScroll}
          >
            {blogs.slice(0, 3).map((blog, index) => (
              <div
                key={index}
                className="min-w-[340px] w-[340px] flex-shrink-0 mx-auto min-h-[200px]"
              >
                <BlogCard
                  id={blog.id}
                  title={blog.title}
                  content={truncatecontent([{ content: blog.content }])}
                  author={blog.author || "Admin"}
                />
              </div>
            ))}
          </div>

          {totalSlides > 0 && (
            <div className="flex justify-center mt-4">
              {[...Array(totalSlides + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`mx-1 rounded-full w-3 h-3 ${index === activeSlide ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 bg-[#B8860B] text-white font-medium rounded-md hover:bg-[#906c0a] transition-colors duration-300"
          >
            Keep Reading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

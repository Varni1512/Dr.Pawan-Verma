import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../config/Firebase"; // adjust path as needed
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "Blogs"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogData.slice(0, 3)); // Only display first 3
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const truncate = (htmlString, wordLimit = 25) => {
    const tempEl = document.createElement("div");
    tempEl.innerHTML = htmlString;
    const text = tempEl.textContent || tempEl.innerText || "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Blogs</h2>
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-50 p-6 rounded-2xl flex flex-col h-full"
          >
            <h3 className="font-bold text-lg sm:text-xl mb-3">{blog.title}</h3>
            <p
              className="text-gray-600 text-sm sm:text-base mb-4 flex-grow"
              style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}
            >
              {truncate(blog.content)}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs sm:text-sm text-gray-500">
                By {blog.author || "Admin"}
              </span>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-yellow-600 text-xs sm:text-sm font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 sm:mt-12">
        <Link
          to="/blogs"
          className="bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogsSection;

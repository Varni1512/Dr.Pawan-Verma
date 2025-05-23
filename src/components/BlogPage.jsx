import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { db } from "../config/Firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(collection(db, "Blogs"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(items);
    };

    fetchBlogs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp?.seconds) return null;
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Function to remove HTML tags and decode HTML entities
  const removeHtmlTags = (text) => {
    if (!text) return "";
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#f5e9d1] py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Blogs</h1>
            <p className="text-xl mb-8">
              Welcome to my blog! Here, I share insights, tips, and updates on
              everything interesting. Stay tuned for expert advice and the latest trends.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <br />
            <br />
            <div className="text-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
          
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-7">
            <h2 className="text-3xl font-bold inline-block relative">
              Blogs
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
            <p className="mt-4 text-gray-600">
              Discover insights, trends, and updates from the world of tech,
              work, and innovation.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#372b12] text-white h-full w-full rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
              >
                {/* Only show image if blog.imageUrl exists */}
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt="Blog"
                    className="w-full h-48 object-cover p-2 rounded-2xl"
                  />
                )}

                <div className="p-4 flex flex-col flex-grow">
                  {blog.timestamp && (
                    <div className="text-gray-400 text-sm mb-2">
                      {formatDate(blog.timestamp)}
                    </div>
                  )}
                  <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                  <p className="text-gray-200 mb-4 flex-grow line-clamp-3">
                    {removeHtmlTags(blog.content).slice(0, 100)}...
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center"
                    >
                      Read More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center text-gray-600 text-lg mt-20">
              No blogs available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../config/Firebase.js";
import { doc, getDoc } from "firebase/firestore";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "Blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found!</p>;

  const formattedDate = blog.timestamp
    ? new Date(blog.timestamp.seconds * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "";

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto bg-gradient-to-b from-white to-[#f5e9d1] min-h-screen">
        <div className="flex justify-start">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-yellow-600 hover:scale-110 cursor-pointer mb-4"
          >
            &lt; Back
          </button>
        </div>

        {/* Only show image if it exists */}
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt="Blog"
            className="w-full h-64 object-cover mb-6 rounded-lg"
          />
        )}

        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-700 text-sm mb-1">By {blog.author || "Pawan Verma"}</p>
        <p className="text-gray-500 mb-4">{formattedDate}</p>

        <div
          className="text-gray-800 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>

      {/* <div className="flex justify-center p-2">
        <button
          onClick={() => navigate(-1)}
          className="text-xl text-white bg-yellow-600 px-4 py-2 rounded-2xl hover:scale-110 mb-4"
        >
          Back
        </button>
      </div> */}
    </div>
  );
};

export default BlogDetails;

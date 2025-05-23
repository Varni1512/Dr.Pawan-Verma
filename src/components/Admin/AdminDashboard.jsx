import { useEffect, useState } from "react";
import { db } from "../../config/Firebase.js";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { NotebookPen, Trash2, Plus, LogOut } from "lucide-react";

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchBlogs = async () => {
        const q = query(collection(db, "Blogs"), orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBlogs(items);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            await deleteDoc(doc(db, "Blogs", id));
            fetchBlogs();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/author-admin");
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-black">Admin Dashboard</h1>
                <div className="flex gap-4">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-5 py-2 bg-white/30 backdrop-blur-md border border-white/30 text-gray-800 rounded-xl hover:bg-red-400 hover:text-white transition shadow-md cursor-pointer"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                    <Link to="/admin-blog/add">
                        <button className="flex items-center gap-2 px-5 py-2 bg-white/30 backdrop-blur-md border border-white/30 text-gray-800 rounded-xl hover:bg-yellow-400 hover:text-white transition shadow-md cursor-pointer">
                            <Plus size={18} />
                            Add Blog
                        </button>
                    </Link>
                </div>
            </div>

            {blogs.length === 0 ? (
                <div className="text-center text-gray-300 text-lg mt-20">
                    No blogs available. Click "Add Blog" to create your first one.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4 sm:px-6 lg:px-20">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-[#372b12] border border-yellow-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            {blog.imageUrl && (
                                <div className="h-44 w-full">
                                    <img
                                        src={blog.imageUrl}
                                        alt="Blog"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col justify-between p-5 w-full">
                                <div>
                                    <h2 className="text-xl font-semibold text-white line-clamp-2 mb-1">
                                        {blog.title}
                                    </h2>
                                    {blog.timestamp && (
                                        <p className="text-sm text-gray-300 mb-3">
                                            {new Date(blog.timestamp.seconds * 1000).toLocaleDateString("en-US", {
                                                weekday: "short",
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </p>
                                    )}
                                    <div
                                        className="text-gray-200 text-sm leading-relaxed line-clamp-3"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                    />
                                </div>

                                <div className="flex justify-end gap-3 mt-4">
                                    <Link to={`/admin-edit/${blog.id}`}>
                                        <button className="p-2 bg-yellow-600 hover:bg-yellow-500 rounded-full text-white transition">
                                            <NotebookPen size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="p-2 bg-red-600 hover:bg-red-500 rounded-full text-white transition"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;

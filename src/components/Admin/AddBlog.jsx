import React, { useState, useRef } from 'react';
import axios from "axios";
import { db } from "../../config/Firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import JoditEditor from 'jodit-react';

// Cloudinary Configuration
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/de74nq99z/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "author-blog";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const editor = useRef(null);

    // Image upload handler (kept for future use)
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

            setUploading(true);
            try {
                const response = await axios.post(CLOUDINARY_URL, formData);
                setImage(response.data.secure_url);
            } catch (err) {
                console.error("Image upload failed", err);
            } finally {
                setUploading(false);
            }
        }
    };

    const handleAddBlog = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const blogData = {
                title,
                content,
                timestamp: serverTimestamp(),
            };

            if (image) {
                blogData.imageUrl = image;
            }

            await addDoc(collection(db, "Blogs"), blogData);
            navigate("/admin-dashboard");
        } catch (err) {
            console.error("Error adding blog", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-white py-10 px-4">
            <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-200">
                <button
                    onClick={() => navigate("/admin-dashboard")}
                    className="px-6 py-2 bg-yellow-400 text-black rounded-xl text-base sm:text-lg font-bold hover:bg-yellow-500 transition"
                >
                    Back
                </button>

                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-tight">
                    Create a New Blog
                </h1>
                <form onSubmit={handleAddBlog} className="space-y-6">

                    {/* 
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full px-5 py-3 border border-dashed border-gray-400 rounded-xl text-gray-600 cursor-pointer file:bg-purple-500 file:text-white file:px-4 file:py-2 file:rounded-full file:mr-4 file:cursor-pointer hover:border-indigo-400 transition"
                        />
                    </div>
                    {image && (
                        <div className="mt-4">
                            <img
                                src={image}
                                alt="Preview"
                                className="w-full max-h-64 object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    )}
                    */}

                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Blog Title</label>
                        <input
                            type="text"
                            placeholder="Enter blog title"
                            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Content</label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={{
                                readonly: false,
                                height: 300,
                                toolbarSticky: false,
                            }}
                            onBlur={(newContent) => setContent(newContent)}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            disabled={uploading || isSubmitting}
                            className={`w-full sm:w-auto px-16 py-5 text-xl text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 ${uploading || isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 cursor-pointer"
                                }`}
                        >
                            {uploading
                                ? "Uploading Image..."
                                : isSubmitting
                                    ? "Adding Blog..."
                                    : "Add Blog"}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;

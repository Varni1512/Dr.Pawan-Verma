import React, { useEffect, useRef, useState } from "react";
import { db } from "../../config/Firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/de74nq99z/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "author-blog";

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const editor = useRef(null);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [originalImage, setOriginalImage] = useState(""); // To detect if user uploaded new image
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const snap = await getDoc(doc(db, "Blogs", id));
                if (snap.exists()) {
                    const data = snap.data();
                    setTitle(data.title || "");
                    setContent(data.content || "");
                    setImage(data.imageUrl || "");
                    setOriginalImage(data.imageUrl || "");
                } else {
                    alert("Blog not found!");
                    navigate("/admin-dashboard");
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id, navigate]);

    /*
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, formData);
            const imageUrl = response.data.secure_url;
            setImage(imageUrl);
        } catch (error) {
            console.error("Image upload failed:", error);
            alert("Image upload failed. Try again.");
        } finally {
            setUploading(false);
        }
    };
    */

    const handleUpdate = async () => {
        setUpdating(true);
        try {
            const updatePayload = {
                title,
                content,
                imageUrl: originalImage, // maintain existing image
            };

            /*
            if (image && image !== originalImage) {
                updatePayload.imageUrl = image;
            }
            */

            await setDoc(doc(db, "Blogs", id), updatePayload, { merge: true });
            navigate("/admin-dashboard");
        } catch (error) {
            alert("Failed to update blog. Try again.");
            console.error(error);
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-lg font-semibold text-black-500">Loading blog data...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-white py-10 px-4">
            <div className="bg-white w-full max-w-4xl p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6 transition-all duration-300">

                {/* Back Button */}
                <div className="flex justify-start">
                    <button
                        onClick={() => navigate("/admin-dashboard")}
                        className="px-6 py-2 bg-yellow-400 text-black rounded-xl text-base sm:text-lg font-bold hover:bg-yellow-500 transition cursor-pointer"
                    >
                        Back
                    </button>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-black-500 tracking-tight">
                    Edit Blog
                </h2>

                {/* Image Upload - Commented Out */}
                {/*
                <div className="flex flex-col items-center gap-4">
                    <input
                        id="fileUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    {image && (
                        <img
                            src={image}
                            alt="Preview"
                            className="max-h-64 rounded-xl shadow-md object-contain"
                        />
                    )}
                    <label
                        htmlFor="fileUpload"
                        className="cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-blod px-6 py-2 rounded-xl text-lg font-semibold shadow hover:from-yellow-500 hover:to-yellow-700 transition"
                    >
                        {uploading ? "Uploading..." : "Update Image"}
                    </label>
                </div>
                */}

                {/* Blog Title */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Edit Blog Title"
                    className="w-full p-4 text-lg text-black bg-gray-100 border border-black-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-300"
                />

                {/* Rich Text Editor */}
                <div>
                    <label className="block text-lg font-medium text-black-500 mb-2">Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                        className="border border-black-400 rounded-xl shadow-sm"
                    />
                </div>

                {/* Update Button */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleUpdate}
                        disabled={uploading || updating}
                        className="w-full sm:w-auto px-16 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-xl text-gray-900 font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                        {updating ? "Updating..." : "Update Blog"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;

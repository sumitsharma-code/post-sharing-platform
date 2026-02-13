import React from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function CreatePost() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      navigate("/feed")
    })
    .catch((err)=> {
      console.log(err);
      alert("Error Creating post");
    })
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Image Upload */}
          <label className="cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition">
              <p className="text-gray-500 text-sm">Click to upload image</p>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
              />
            </div>
          </label>

          {/* Caption */}
          <input
            placeholder="Write a caption..."
            type="text"
            name="caption"
            required
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-3 rounded-xl hover:bg-blue-600 active:scale-[0.98] transition-all"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

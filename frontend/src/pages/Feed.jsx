import React,{useState, useEffect} from "react";
import axios from 'axios';

export default function Feed() {
    const [posts, setPosts] = useState([
        {
        _id: "1",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages221/v4/7c/3e/dd/7c3edd55-1aa8-fafb-f361-2da0a600411e/ami-identity-c86f9799596cb56bcc9aee7fb2b7cb5c-2026-02-01T17-01-47.555Z_cropped.png/380x380cc.webp",
        caption: "ZiKKR on the beat",
        },
    ]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts);
        })
    },[])

    return (
    <section className="w-full max-w-6xl mx-auto px-4 py-6">
        {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts.map((post) => {
                    return (
                        <div
                            key={post._id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            {/* Image Container */}
                            <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover"
                            />
                            </div>

                            {/* Caption */}
                            <div className="p-4">
                            <p className="text-gray-800 text-sm font-medium wrap-break-word line-clamp-2">
                                {post.caption}
                            </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            <h1 className="text-center text-2xl font-semibold text-gray-500 mt-20">
            No Post Available
            </h1>
        )}
    </section>

    )
}

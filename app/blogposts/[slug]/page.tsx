"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import the hook

interface Blog {
  title: string;
  content: string;
  description: string;
  image: string;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams(); // Destructure the slug from useParams
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

  useEffect(() => {
    console.log("Use Effect is in Effect");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed); // Update the blogs state with the fetched data

        // Find the blog matching the slug
        const blog = parsed.find((blog: Blog) => blog.slug === slug);
        setCurrentBlog(blog || null);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [slug]);

  return (
    <div className="pt-10 flex justify-center bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-orange-200">
      <div className="mt-10 flex flex-col text-center w-3/5">
        {currentBlog ? (
          <>
            <h1 className="text-5xl font-bold italic mb-10">
              {currentBlog.title}
            </h1>
            <p className="text-justify">{currentBlog.content}</p>
          </>
        ) : (
          <p>Loading or no blog found...</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;

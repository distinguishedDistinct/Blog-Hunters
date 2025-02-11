"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Blog {
  _id: number;
  title: string;
  content: string;
  description: string;
  image: string;
  slug: string;
}

const page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    console.log("Use Effect is in Effect");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed); // Update the blogs state with the fetched data
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <div className="flex justify-evenly pt-8 flex-wrap w-full pl-10 pr-10 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-orange-200">
      {articles.map((blogItem) => {
        return (
          <div
            key={blogItem.slug}
            className="Blog flex flex-col gap-8 w-1/4 mx-5 mb-5"
          >
            <Link href={`/blogposts/${blogItem.slug}`}>
              <div className="blogItem hover:text-white hover:-translate-y-3">
                <h1 className="mb-2 text-2xl">{blogItem.title}</h1>
                <p className="description mb-3">
                  {blogItem.content.substring(0, 140) + "..."}
                </p>
                <img
                  src={`/${blogItem.image}`}
                  width={300}
                  height={300}
                  alt={blogItem.title}
                />
              </div>
            </Link>
          </div>
        );
      })}

      <style jsx>{`
        .Blog {
          min-width: 220px;
        }
      `}</style>
    </div>
  );
};

export default page;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  description: string;
  image: string;
  slug: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    console.log("Use Effect is in Effect");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <>
      <div className="text-orange-200 p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 ">
        <div className="flex justify-center">
          <div>
            <h1 className="text-6xl">Hunting Blog</h1>
            <h4 className="text-2xl list-inside list-decimal text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              For hunting Coder by a Coder
            </h4>
          </div>
        </div>

        <div className="">
          <div className="Main flex flex-wrap justify-between mt-8 w-full pl-10 pr-10">
            {blogs.slice(0, 3).map((blogItem) => {
              return (
                <div
                  key={blogItem.slug}
                  className="description flex flex-col gap-8 w-full sm:w-1/2 md:w-1/4 mx-5 mb-5"
                >
                  <Link href={`/blogposts/${blogItem.slug}`}>
                    <div className="blogs hover:text-white hover:-translate-y-3">
                      <div className="blogItem">
                        <h1 className="mb-2 text-2xl">{blogItem.title}</h1>
                        <p className="text-sm">
                          {blogItem.content.substring(0, 140) + "..."}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .description {
            font-size: 1.2rem;
            min-width: 200px;
          }
          h1 {
            font-weight: bold;
          }
          .Main {
            overflow-y-auto; /* Ensures scrolling within this container */
          }
        `}</style>
      </div>
    </>
  );
}

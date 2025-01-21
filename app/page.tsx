"use client";

import Image from "next/image";

export default function Home() {
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
            <div className="description flex flex-col gap-8 w-full sm:w-1/2 md:w-1/4 mx-5 mb-5">
              <div className="blogs">
                <div className="blogItem">
                  <h1 className="mb-2 text-2xl">
                    How to Learn Java Script in 2025
                  </h1>
                  <p className="text-sm">
                    JavaScript is a language used to design and provide
                    functionality to web applications. It's an integral part of
                    Frontend Development and utilized in various frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="description flex flex-col gap-8 w-full sm:w-1/2 md:w-1/4 mx-5 mb-5">
              <div className="blogs">
                <div className="blogItem">
                  <h1 className="mb-2 text-2xl">
                    How to Learn Java Script in 2025
                  </h1>
                  <p className="text-sm">
                    JavaScript is a language used to design and provide
                    functionality to web applications. It's an integral part of
                    Frontend Development and utilized in various frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="description flex flex-col gap-8 w-full sm:w-1/2 md:w-1/4 mx-5 mb-5">
              <div className="blogs">
                <div className="blogItem">
                  <h1 className="mb-2 text-2xl">
                    How to Learn Java Script in 2025
                  </h1>
                  <p className="text-sm">
                    JavaScript is a language used to design and provide
                    functionality to web applications. It's an integral part of
                    Frontend Development and utilized in various frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="description flex flex-col gap-8 w-full sm:w-1/2 md:w-1/4 mx-5 mb-5">
              <div className="blogs">
                <div className="blogItem">
                  <h1 className="mb-2 text-2xl">
                    How to Learn Java Script in 2025
                  </h1>
                  <p className="text-sm">
                    JavaScript is a language used to design and provide
                    functionality to web applications. It's an integral part of
                    Frontend Development and utilized in various frameworks.
                  </p>
                </div>
              </div>
            </div>
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

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="Home Image"
        src="/homeimg.jpg"
        layout="fill" /* Ensures the image fills the container */
        priority /* Optimizes loading for the image */
        quality={100} /* Optional: Sets the quality of the image */
      />
      <div className=" text-white p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-center ">
          <div>
            <h1 className="text-6xl">Hunting Blog</h1>
            <h4 className="text-2xl list-inside list-decimal text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              For hunting Coder by a Coder
            </h4>
          </div>
        </div>
        <div className="Main flex justify-between mt-8 flex-wrap w-full pl-40 pr-40">
          <div className="description flex flex-col gap-8 w-1/4 mx-10 mb-5">
            <div className="blogs">
              <div className="blogItem">
                <h1 className="mb-2 text-2xl">
                  How to Learn Java Script in 2025
                </h1>
                <p className=" ">
                  JavaScript is a language used to design and provide
                  functionality to web applications. It's an intergral part of
                  the Frontend Development and utilised in various frameworks
                </p>
              </div>
            </div>
          </div>
          <div className="description flex flex-col gap-8 w-1/4 mx-10 mb-5">
            <div className="blogs">
              <div className="blogItem">
                <h1 className="mb-2 text-2xl">
                  How to Learn Java Script in 2025
                </h1>
                <p className="">
                  JavaScript is a language used to design and provide
                  functionality to web applications. It's an intergral part of
                  the Frontend Development and utilised in various frameworks
                </p>
              </div>
            </div>
          </div>
          <div className="description flex flex-col gap-8 w-1/4 mx-10 mb-5">
            <div className="blogs">
              <div className="blogItem">
                <h1 className="mb-2 text-2xl">
                  How to Learn Java Script in 2025
                </h1>
                <p className="">
                  JavaScript is a language used to design and provide
                  functionality to web applications. It's an intergral part of
                  the Frontend Development and utilised in various frameworks
                </p>
              </div>
            </div>
          </div>
          <div className="description flex flex-col gap-8 w-1/4 mx-10 mb-5">
            <div className="blogs">
              <div className="blogItem">
                <h1 className="mb-2 text-2xl">
                  How to Learn Java Script in 2025
                </h1>
                <p className="">
                  JavaScript is a language used to design and provide
                  functionality to web applications. It's an intergral part of
                  the Frontend Development and utilised in various frameworks
                </p>
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
            max-height: 600px;
            overflow: scroll;
          }
        `}</style>
      </div>
    </>
  );
}

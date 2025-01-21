import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="font-bold pb-5 pt-5 bg-cyan-900 text-white">
      <ul className="flex justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li className="mx-10">
          <Link href="/blog">Blogs</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="ml-10">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

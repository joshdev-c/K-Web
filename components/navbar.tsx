"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const links = ["Home", "Projects", "About", "Contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.5
      }
    );

    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed mx-auto w-full z-20 h-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 bg-white">
      {/*Logo, Responsive Menu, Left, Right*/}
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
        {/* Left */}
        <div className="hidden md:flex gap-4 w-1/3 justify-start">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={`px-4 py-2 rounded transition
            ${
              active === item
                ? "bg-black text-white font-medium backdrop-blur-md"
                : "text-black"
            }
          `}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="text-2xl md:hidden xl:flex w-1/3 justify-center">
          <Link href="/" className="bg-black rounded-md p-1 text-semibold">
            <span className="font-bold text-white mx-2">KB</span>
            <span className="px-1 bg-white text-black rounded-md">
              Architecture
            </span>
          </Link>
        </div>

        {/* Responsive Menu */}
        <div className="md:hidden">
          <button
            className="flex flex-col justify-between w-10 h-8 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
          </button>
          {isOpen && (
            <motion.div
              className="absolute top-0 left-0 w-screen h-screen gap-1 text-4xl backdrop-blur-md flex flex-col items-center justify-center text-black bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href="#Home">Home</Link>
              <Link href="#Projects">Projects</Link>
              <Link href="#About">About</Link>
              <Link href="#Contact">Contact</Link>
            </motion.div>
          )}
        </div>

        {/* Right */}
        <div className="hidden md:flex gap-4 w-1/3 justify-end">
          <Link href="https://www.facebook.com/KTRYNKAY" target="_blank">
            <Image
              src="/facebook.png"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>

          <Link href="https://www.instagram.com/katryn_kay/" target="_blank">
            <Image
              src="/instagram.png"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

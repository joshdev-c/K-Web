import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });


  // Animation variants
  const fadeup = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // Hero Section
    <motion.section
      ref={heroRef}
      id="Home"
      className="relative min-h-screen bg-linear-to-b from-white to-[#F5F5DC]"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeup}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero.mp4" />
      </video>

      {/* Background blur */}
      <div className="absolute inset-0 backdrop-blur-md z-10 bg-gray-100/20"></div>

      <div className="relative max-w-7xl mx-auto z-10 flex items-center min-h-screen px-8 md:px-12 lg:px-16 gap-12">
        {/* Left text */}
        <div className="mx-auto max-w-xl">
          <div className="flex items-baseline gap-2">
            <span className="text-yellow-100 stroke-text font-black text-[10rem] md:text-[12rem] leading-none tracking-tighter">
              K
            </span>
            <span className="text-yellow-100 font-black text-[10rem] md:text-[12rem] leading-none tracking-tighter">
              B
            </span>
          </div>

          <h1 className="mt-4 text-yellow-100 font-bold text-4xl md:text-5xl tracking-[0.2em] uppercase">
            Architecture
          </h1>

          <p className="mt-8 text-gray-900 text-xl leading-relaxed font-medium max-w-md">
            Shaping spaces through modern form, structure, and purpose.
          </p>

          <a
            href="#Projects"
            className="inline-block mt-10 px-8 py-4 border-2 border-blue-950 text-blue-950 font-bold tracking-widest uppercase text-sm
               hover:bg-blue-950 hover:text-white transition-all duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Images */}
        <div className="hidden xl:flex items-center gap-10 w-2/3">
          {/* Left */}
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-60 h-120 bg-[url('/images/image1.jpg')] bg-cover bg-left rounded-sm border-2 border-black"
          />

          {/* Middle */}
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="w-100 h-170 bg-[url('/images/image1.jpg')] bg-cover bg-center rounded-sm border-2 border-black"
          />

          {/* Right */}
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-50 h-150 bg-[url('/images/image1.jpg')] bg-cover bg-right rounded-sm border-2 border-black"
          />
        </div>
      </div>
    </motion.section>
  );
}

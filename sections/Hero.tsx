import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Fade opacity
  const fadeopacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants for entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={heroRef}
      id="Home"
      className="relative min-h-screen overflow-hidden bg-black z-0"
    >
      {/* Background Video with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {/* Multi-layered overlay for depth and readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16">
        <motion.div
          style={{ opacity: fadeopacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Logo Section */}
          <div className="relative mb-6">
            <motion.div 
              variants={itemVariants}
              className="flex items-baseline"
            >
              <span className="text-white font-black text-[12rem] md:text-[15rem] leading-[0.8] tracking-tighter drop-shadow-2xl">
                K
              </span>
              <span className="text-white font-black text-[12rem] md:text-[15rem] leading-[0.8] tracking-tighter -ml-4 md:-ml-8 opacity-90">
                B
              </span>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-4 md:mt-0"
            >
              <h1 className="text-white font-light text-4xl md:text-6xl tracking-[0.3em] uppercase opacity-90 flex items-center gap-4">
                Architecture
                <span className="h-px w-12 md:w-24 bg-white/40 hidden md:block"></span>
              </h1>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="h-24 md:h-32 mb-12"
          >
            <TypeAnimation
              sequence={[
                "Shaping spaces through modern form, structure, and purpose.",
                3000,
                "Defining the future of sustainable living environments.",
                3000,
                "Where visionary design meets structural excellence.",
                3000,
              ]}
              wrapper="p"
              speed={50}
              deletionSpeed={75}
              repeat={Infinity}
              className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
            />
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <Link
              href="#Projects"
              className="group relative px-10 py-5 bg-white text-black font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-neutral-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
            
            <Link
              href="#About"
              className="group px-10 py-5 border border-white/30 text-white font-bold tracking-[0.2em] uppercase text-xs hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Our Story
              <motion.span
                animate={{ x: [0, 10] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

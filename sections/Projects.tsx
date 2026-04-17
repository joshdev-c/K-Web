import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projectsData";

export default function Projects() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section id="Projects" className="min-h-screen py-12 px-6 bg-white">
      {/* Projects */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <p className="text-neutral-400 mb-2 uppercase tracking-[0.3em] text-sm font-bold">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            Featured <br />
            <span className="text-neutral-400 italic font-light">
              Creations
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden aspect-4/5 mb-6 rounded-xl shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out lg:grayscale sm:grayscale-0 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-500" />

                {/* Overlay for category on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xs font-bold uppercase tracking-widest drop-shadow-2xl">
                    {project.title}
                  </span>
                </div>
              </div>

              <motion.div className="space-y-1">
                <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

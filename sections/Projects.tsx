import { motion } from "framer-motion";
import { projects } from "@/data/projectsData";

export default function Projects() {
  // Animation variants
  const fadeup = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="min-h-screen py-24 px-6 bg-background"
      id="Projects"
      variants={fadeup}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Projects */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-muted-foreground mb-2 uppercase tracking-wider">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-4/5 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                {project.category}
              </p>
              <h3 className="text-xl">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

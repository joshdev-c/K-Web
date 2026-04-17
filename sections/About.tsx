import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-8 md:mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 block">
                Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Architecting <br /> 
                <span className="text-neutral-400 italic">Future Legacies</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
              <p>
                Architecture is more than just buildings; it's about creating 
                environments that inspire and endure. Aspiring to blend modern aesthetics 
                with sustainable functionality.
              </p>
              <p>
                Every project is a unique dialogue between the site, the client, and the 
                surrounding community. Striving to provide the best services, ensuring 
                quality and satisfaction in every interaction.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-100 pt-12">
              <div>
                <h4 className="text-3xl font-bold text-neutral-900">10+</h4>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-neutral-900">50+</h4>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mt-1">Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 aspect-square md:aspect-video lg:aspect-square"
          >
            {/* Main Image */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="images/image1.jpg" 
                alt="Modern architectural structure" 
                className="w-full h-full object-cover sm:grayscale-0 md:grayscale lg-grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 hover:scale-100"
              />
            </div>
            
            {/* Secondary Image - Floating/Overlapping (Desktop only for better responsiveness) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block absolute -bottom-12 -left-12 z-15 w-1/2 aspect-square overflow-hidden rounded-xl shadow-2xl border-8 border-white"
            >
              <img 
                src="images/image2.jpg" 
                alt="Architectural detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

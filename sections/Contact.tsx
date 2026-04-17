"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="Contact" className="min-h-screen bg-neutral-50 px-6 py-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-20 h-1 bg-black mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-neutral-600 max-w-lg mx-auto"
          >
            Have a project in mind? Let&apos;s talk. I&apos;m here to help you bring your architectural vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center text-black shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <a href="mailto:info@kbarchitecture.com" className="text-neutral-600 hover:text-black transition-colors">
                    info@kbarchitecture.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center text-black shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <a className="text-neutral-600">
                    +63 1234567890
                  </a>
                </div>
              </div>

              {/* STUDIO ADDRESS IF NEEDED */}
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center text-black shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium text-lg">Studio</p>
                  <p className="text-neutral-600">
                    123 Architectural Ave, Suite 100<br />
                    Design District, NY 10001
                  </p>
                </div>
              </div> */}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Follow My Journey</h4>
              <div className="flex gap-4">
                <a 
                  // href="https://www.instagram.com/katryn_kay/" 
                  // target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  // href="https://www.facebook.com/KTRYNKAY" 
                  // target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-all"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5 border border-neutral-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="sample@email.com"
                    className="w-full p-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full p-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me more about your project..."
                  className="w-full p-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-800 transition-all disabled:bg-neutral-400"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </span>
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

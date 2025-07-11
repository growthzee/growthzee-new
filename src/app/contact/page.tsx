"use client";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import type React from "react";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Drop us a line anytime",
      contact: "support@growthzee.com",
      gradientFrom: "#FF6B6B",
      gradientTo: "#FF8E8E",
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak with our team",
      contact: "+91 99638 32825",
      gradientFrom: "#4ECDC4",
      gradientTo: "#44A08D",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us online",
      contact: "Available 24/7",
      gradientFrom: "#45B7D1",
      gradientTo: "#96C93D",
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Come say hello",
      contact: "Bilaspur 495001 (C.G.)",
      gradientFrom: "#F093FB",
      gradientTo: "#F5576C",
    },
  ];

  return (
    <section className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full pt-20">
        <div
          className="absolute inset-0 z-0 bg-[url('/images/satisfaction.png')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="container mx-auto relative py-16 px-5 z-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block p-3 bg-gradient-to-r from-[#7A41F2]/20 to-[#342582]/20 rounded-full mb-6"
            >
              <div className="text-5xl">🚀</div>
            </motion.div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#E0E0E0] to-[#A0A0A0] bg-clip-text text-transparent">
              Let&apos;s Create Something
              <span className="block bg-gradient-to-r from-[#7A41F2] to-[#342582] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-[#A3A3A3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? We&apos;re here to
              help you build something extraordinary.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="w-full bg-bg-secondary py-16">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${method.gradientFrom}, ${method.gradientTo})`,
                  }}
                ></div>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#7A41F2]/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-[#171717] text-xl font-semibold mb-2">
                    {method.title}
                  </h3>
                  <p className="text-[#666666] text-sm mb-4">
                    {method.description}
                  </p>
                  <p className="text-[#7A41F2] font-medium">{method.contact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7A41F2]/10 to-[#342582]/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#7A41F2] to-[#342582] rounded-xl flex items-center justify-center text-2xl mr-4">
                      ✉️
                    </div>
                    <div>
                      <h2 className="text-[#171717] text-3xl font-bold">
                        Send us a Message
                      </h2>
                      <p className="text-[#666666]">
                        We&apos;ll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[#171717] text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-[#F8F9FA] border border-gray-300 rounded-xl text-[#171717] placeholder-[#999] focus:outline-none focus:border-[#7A41F2] focus:ring-2 focus:ring-[#7A41F2]/20 transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[#171717] text-sm font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-[#F8F9FA] border border-gray-300 rounded-xl text-[#171717] placeholder-[#999] focus:outline-none focus:border-[#7A41F2] focus:ring-2 focus:ring-[#7A41F2]/20 transition-all duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[#171717] text-sm font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-[#F8F9FA] border border-gray-300 rounded-xl text-[#171717] placeholder-[#999] focus:outline-none focus:border-[#7A41F2] focus:ring-2 focus:ring-[#7A41F2]/20 transition-all duration-300"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[#171717] text-sm font-medium">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-4 bg-[#F8F9FA] border border-gray-300 rounded-xl text-[#171717] placeholder-[#999] focus:outline-none focus:border-[#7A41F2] focus:ring-2 focus:ring-[#7A41F2]/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, goals, timeline, and budget..."
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#7A41F2] to-[#342582] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(122,65,242,0.4)] transition-all duration-300 text-lg"
                    >
                      Send Message 🚀
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-[#171717] text-2xl font-bold mb-6">
                  Quick Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#7A41F2] to-[#342582] rounded-lg flex items-center justify-center text-sm">
                      ⚡
                    </div>
                    <div>
                      <h4 className="text-[#171717] font-medium">
                        Response Time
                      </h4>
                      <p className="text-[#666666] text-sm">Within 2-4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#7A41F2] to-[#342582] rounded-lg flex items-center justify-center text-sm">
                      💼
                    </div>
                    <div>
                      <h4 className="text-[#171717] font-medium">
                        Free Consultation
                      </h4>
                      <p className="text-[#666666] text-sm">
                        30-minute strategy call
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#7A41F2] to-[#342582] rounded-lg flex items-center justify-center text-sm">
                      🎯
                    </div>
                    <div>
                      <h4 className="text-[#171717] font-medium">
                        Project Timeline
                      </h4>
                      <p className="text-[#666666] text-sm">
                        2-8 weeks typical
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-[#171717] text-2xl font-bold mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-[#666666]">Monday - Friday</span>
                    <span className="text-[#171717] font-medium">
                      10:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-[#666666]">Saturday</span>
                    <span className="text-[#171717] font-medium">
                      10:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#666666]">Sunday</span>
                    <span className="text-[#7A41F2] font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-[#171717] text-2xl font-bold mb-6">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <FaFacebook />,
                      name: "Facebook",
                      gradientFrom: "#1877F2",
                      gradientTo: "#42A5F5",
                    },
                    {
                      icon: <FaTwitter />,
                      name: "Twitter",
                      gradientFrom: "#1DA1F2",
                      gradientTo: "#0D8BD9",
                    },
                    {
                      icon: <FaLinkedin />,
                      name: "LinkedIn",
                      gradientFrom: "#0A66C2",
                      gradientTo: "#004182",
                    },
                    {
                      icon: <FaInstagram />,
                      name: "Instagram",
                      gradientFrom: "#E4405F",
                      gradientTo: "#FFDC80",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center p-4 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientTo})`,
                      }}
                    >
                      <span className="text-xl mr-2">{social.icon}</span>
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

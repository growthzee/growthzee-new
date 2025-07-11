"use client";
import CommitmentCard from "@/common/CommitmentCard";
import Map from "@/common/Map";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  //   const technologies = [
  //     { name: "React", icon: "⚛️" },
  //     { name: "Next.js", icon: "▲" },
  //     { name: "TypeScript", icon: "📘" },
  //     { name: "Node.js", icon: "🟢" },
  //     { name: "Python", icon: "🐍" },
  //     { name: "AWS", icon: "☁️" },
  //     { name: "Docker", icon: "🐳" },
  //     { name: "MongoDB", icon: "🍃" },
  //   ];

  return (
    <section id="about" className="w-full">
      <Navbar />
      <div className="relative w-full pt-20 min-h-screen">
        <div
          className="absolute inset-0 z-0 bg-[url('/images/satisfaction.png')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="container mx-auto flex flex-col justify-between relative py-20 px-5 z-5 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto px-4"
          >
            <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
              We Are Passionate Creators Dedicated to Bringing Your Vision to
              Life.
            </h1>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 px-4"
          >
            <CommitmentCard
              title="EXPERIENCE"
              percen="5+"
              dec="Years of experience in web development and design, delivering cutting-edge solutions that exceed expectations."
            />
            <CommitmentCard
              title="INNOVATION"
              percen="100%"
              dec="We stay ahead of the curve, embracing new technologies and methodologies to deliver innovative solutions."
            />
            <CommitmentCard
              title="PROJECTS"
              percen="200+"
              dec="Successfully completed over 200 projects, ranging from small business websites to enterprise applications."
            />
            <CommitmentCard
              title="CLIENTS"
              percen="150+"
              dec="We've had the privilege of working with over 150 clients worldwide, building lasting partnerships and trust."
            />
          </motion.div>

          {/* About Us Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-6xl mx-auto px-4 mt-20"
          >
            <div className="bg-gradient-to-b from-[#2F2741] to-[#2F2741] rounded-[20px] px-8 md:px-12 py-16 border border-transparent hover:border-[#7A41F2] hover:shadow-[0_0_40px_rgba(122,65,242,0.2)] transition-all duration-300">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
                  About Our Journey
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#7A41F2] to-[#342582] mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-[#A3A3A3] text-lg leading-relaxed">
                    Founded with a vision to transform the digital landscape, we
                    are a team of passionate creators, developers, and
                    strategists who believe in the power of innovative design
                    and cutting-edge technology.
                  </p>
                  <p className="text-[#A3A3A3] text-lg leading-relaxed">
                    Our journey began with a simple yet powerful belief: every
                    business deserves a digital presence that truly represents
                    their unique value proposition and drives meaningful
                    results.
                  </p>
                  <p className="text-[#A3A3A3] text-lg leading-relaxed">
                    Today, we continue to push boundaries, combining creativity
                    with technical expertise to deliver solutions that not only
                    look stunning but perform exceptionally across all platforms
                    and devices.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#7A41F2] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white text-xl font-medium mb-2">
                        Our Mission
                      </h3>
                      <p className="text-[#A3A3A3] leading-relaxed">
                        To empower businesses with digital solutions that drive
                        growth, enhance user experience, and create lasting
                        impact in their respective industries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#7A41F2] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white text-xl font-medium mb-2">
                        Our Vision
                      </h3>
                      <p className="text-[#A3A3A3] leading-relaxed">
                        To be the leading force in digital innovation, setting
                        new standards for excellence in web development and
                        design while fostering long-term partnerships.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#7A41F2] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white text-xl font-medium mb-2">
                        Our Values
                      </h3>
                      <p className="text-[#A3A3A3] leading-relaxed">
                        Innovation, quality, integrity, and collaboration form
                        the foundation of everything we do, ensuring exceptional
                        results for every client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-6xl mx-auto px-4 mt-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
                Our Achievements
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#7A41F2] to-[#342582] mx-auto rounded-full"></div>
              <p className="text-[#A3A3A3] text-lg mt-6 max-w-2xl mx-auto">
                Recognition and awards that showcase our commitment to
                excellence and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CommitmentCard
                title="AWARDS WON"
                percen="15+"
                dec="Industry awards and recognitions for outstanding innovation, design excellence, and client satisfaction."
              />
              <CommitmentCard
                title="CLIENT RATING"
                percen="5.0★"
                dec="Perfect 5-star rating maintained across all review platforms, reflecting our commitment to quality service."
              />
              <CommitmentCard
                title="SUCCESS RATE"
                percen="98%"
                dec="Project success rate with on-time delivery, meeting requirements, and exceeding client expectations."
              />
              <CommitmentCard
                title="RETENTION"
                percen="92%"
                dec="Client retention rate showcasing long-term partnerships and continued trust in our services and expertise."
              />
            </div>
          </motion.div>

          {/* Technology Stack Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="max-w-6xl mx-auto px-4 mt-20"
          >
            <div className="bg-gradient-to-b from-[#2F2741] to-[#2F2741] rounded-[20px] px-8 md:px-12 py-16 border border-transparent hover:border-[#7A41F2] hover:shadow-[0_0_40px_rgba(122,65,242,0.2)] transition-all duration-300">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
                  Our Tech Stack
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#7A41F2] to-[#342582] mx-auto rounded-full"></div>
                <p className="text-[#A3A3A3] text-lg mt-6 max-w-2xl mx-auto">
                  Cutting-edge technologies we use to build exceptional digital
                  experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.0 + index * 0.1 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-[#342582]/20 to-[#7A41F2]/20 hover:from-[#342582]/40 hover:to-[#7A41F2]/40 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <span className="text-white text-sm font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-6xl mx-auto px-4 mt-20"
          >
            <h2 className="lg:text-[56px] md:text-[40px] text-[32px] text-white font-medium">
              Our Global Partners
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <Map />
      <Footer />
    </section>
  );
}

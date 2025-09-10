"use client";
import CommitmentCard from "@/common/CommitmentCard";
import Map from "@/common/Map";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-24 h-[720px] w-[720px] rounded-full bg-[#80e01a] opacity-30 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-[6%] h-[360px] w-[360px] rounded-full bg-white/20 blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[#80e01a] opacity-20 blur-[140px]"
      />

      <Navbar />
      <div className="relative w-full pt-20 min-h-screen z-10">
        <div className="container mx-auto flex flex-col justify-between relative py-20 px-5 z-5 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto px-4"
          >
            <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
              We Are <span className="text-[#80e01a]">Passionate Creators</span>{" "}
              Dedicated to Bringing Your{" "}
              <span className="text-[#80e01a]">Vision</span> to Life.
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
            <div className="bg-black/30 rounded-[20px] px-8 md:px-12 py-16 border-2 border-[#80e01a] hover:shadow-[0_0_40px_rgba(128,224,26,0.3)] transition-all duration-300">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
                  About Our <span className="text-[#80e01a]">Journey</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#80e01a] to-[#60b015] mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Founded with a vision to{" "}
                    <span className="text-[#80e01a]">
                      transform the digital landscape
                    </span>
                    , we are a team of passionate creators, developers, and
                    strategists who believe in the power of{" "}
                    <span className="text-[#80e01a]">innovative design</span>{" "}
                    and cutting-edge technology.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our journey began with a simple yet powerful belief: every
                    business deserves a{" "}
                    <span className="text-[#80e01a]">digital presence</span>{" "}
                    that truly represents their unique value proposition and
                    drives{" "}
                    <span className="text-[#80e01a]">meaningful results</span>.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Today, we continue to{" "}
                    <span className="text-[#80e01a]">push boundaries</span>,
                    combining creativity with technical expertise to deliver
                    solutions that not only look stunning but perform{" "}
                    <span className="text-[#80e01a]">exceptionally</span> across
                    all platforms and devices.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#80e01a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-[#80e01a] text-xl font-medium mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        To empower businesses with digital solutions that drive{" "}
                        <span className="text-[#80e01a]">growth</span>, enhance
                        user experience, and create lasting impact in their
                        respective industries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#80e01a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-[#80e01a] text-xl font-medium mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        To be the{" "}
                        <span className="text-[#80e01a]">leading force</span> in
                        digital innovation, setting new standards for excellence
                        in web development and design while fostering{" "}
                        <span className="text-[#80e01a]">
                          long-term partnerships
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#80e01a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-[#80e01a] text-xl font-medium mb-2">
                        Our Values
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-[#80e01a]">Innovation</span>,
                        quality, integrity, and collaboration form the
                        foundation of everything we do, ensuring{" "}
                        <span className="text-[#80e01a]">
                          exceptional results
                        </span>{" "}
                        for every client.
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
                Our <span className="text-[#80e01a]">Achievements</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#80e01a] to-[#60b015] mx-auto rounded-full"></div>
              <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
                Recognition and awards that showcase our commitment to{" "}
                <span className="text-[#80e01a]">excellence</span> and{" "}
                <span className="text-[#80e01a]">innovation</span>.
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-6xl mx-auto px-4 mt-20"
          >
            <h2 className="lg:text-[56px] md:text-[40px] text-[32px] text-white font-medium">
              Our <span className="text-[#80e01a]">Global Partners</span>
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

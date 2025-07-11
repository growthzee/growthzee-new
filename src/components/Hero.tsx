import React, { useState } from "react";
import Navbar from "@/common/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}
export default function Hero() {
  // const [selectedValue, setSelectedValue] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const continuousUpAnimation = {
    initial: { y: 0 },
    animate: {
      y: "-100%", // Moves up by its own height
      transition: {
        duration: 10, // Adjust duration as needed
        repeat: Infinity,
        ease: "linear", // Constant speed
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        success: true,
        message: result.message,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(e.target.value);
  // };

  return (
    <section id="home" className="relative w-full min-h-screen  pt-[30px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bghero.svg"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 min-h-screen flex flex-col overflow-visible">
        {/* Overlay Grid */}
        <div className="absolute lg:opacity-100 md:opacity-100 opacity-25 -top-20 -right-0 w-[300px] h-[300px] md:w-[600px] md:h-[700px] sm:w-[400px] sm:h-[500px] z-10">
          <div className="mt-8 grid grid-cols-2 gap-[20px]">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                variants={continuousUpAnimation}
                initial="initial"
                animate="animate"
                key={item}
                className="relative aspect-square"
              >
                <Image
                  src={`/images/overley${item}.png`}
                  alt={`Gallery ${item}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Main Grid */}
        <div className="flex-grow z-20 flex items-center justify-center px-4 sm:px-6 py-12">
          <div className="grid grid-cols- lg:grid-cols-12 md:grid-cols-12 gap-8 w-full items-center">
            {/* Left Text Section */}
            <div className="sm:col-span-12 xl:col-span-7 lg:col-span-7 md:col-span-12 flex flex-col justify-center">
              <div className="max-w-[700px] text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl capitalize sm:text-5xl md:text-[60px] leading-tight text-white font-medium"
                >
                  One stop solution for your business
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-mono text-[18px] sm:text-lg md:text-[18px] lg:text-[#A3A3A3] md:text-[#A3A3A3] sm:text-white text-white mt-7"
                >
                  GrowthZee is dedicated to transforming your digital concepts
                  into reality. Whether you need a straightforward website for
                  your current business or have a complex idea you&apos;ve been
                  envisioning, we&apos;re here to assist you.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="font-mono text-[18px] text-base sm:text-lg md:text-[18px] lg:text-[#A3A3A3] md:text-[#A3A3A3] sm:text-white text-white mt-7"
                >
                  Not only can we develop your mobile app or website, but we
                  also provide guidance on managing and scaling it from the
                  ground up through our business consulting services.
                </motion.p>
                <div className="mt-10 sm:flex-col space-x-4">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="space-x-4"
                  >
                    <button
                      onClick={() => window.open("tel:+919963832825")}
                      className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors"
                    >
                      Call/Whatsapp: +91 99638 32825
                    </button>
                    {/* <button className=" sm:ml-1 text-[14px] uppercase bg-menu border border-[#443883] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
                      Message on Whatsapp
                    </button> */}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-10 flex xl:flex-row md:flex-row sm:flex-row flex-col sm:justify-center sm:items-center items-center md:gap-x-10 sm:w-full sm:gap-y-4"
                  >
                    <Image
                      src={"/images/reviewhero1.png"}
                      alt="review"
                      width={350}
                      height={30}
                    />
                    <Image
                      src={"/images/reviewhero2.png"}
                      alt="review"
                      width={300}
                      height={30}
                      className=" md:mt-0 sm:mt-5 mt-4"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Right Contact Box */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="sm:col-span-12 xl:col-span-5 lg:col-span-12 md:col-span-12 flex justify-center items-center px-4 md:px-0 mt-16"
            >
              <div className="relative w-full max-w-[600px] bg-[url('/images/bginputbox.png')] bg-no-repeat bg-cover bg-center rounded-4xl p-6 sm:p-10">
                <h5 className="text-white text-center text-lg sm:text-2xl md:text-[32px] font-mono font-bold mb-6">
                  Are you ready to Bring Your Business Idea To Life?
                </h5>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-white rounded-3xl p-6"
                >
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-[#262626] font-mono text-[16px]"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John*"
                      required
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-[#262626] font-mono text-[16px]"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe*"
                      required
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[#262626] font-mono text-[16px]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-[#262626] font-mono text-[16px]"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className={`w-full border-b border-[#E9E9E9] px-4 py-3 ${
                        formData.projectType
                          ? "text-[#262626]"
                          : "text-[#B7B8BE]"
                      }`}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option
                        className="text-[#262626]"
                        value="Standard package"
                      >
                        Standard Package
                      </option>
                      <option
                        className="text-[#262626]"
                        value="Premium package"
                      >
                        Premium Package
                      </option>
                      <option
                        className="text-[#262626]"
                        value="Enterprise package"
                      >
                        Enterprise Package
                      </option>
                      <option className="text-[#262626]" value="Custom package">
                        Custom Package
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[#262626] font-mono text-[16px]"
                    >
                      What&apos;s your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Nextech, I need your help with..."
                      required
                      className="w-full border-b text-black border-[#E9E9E9] px-4 py-3 placeholder-[#B7B8BE]"
                      rows={5}
                    />
                  </div>

                  {/* Submit Area */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div className="md:w-[300px] sm:w-full">
                      <p className="text-[14px] text-[#B7B8BE] font-mono">
                        By completing the form, you agree to our Terms and
                        Privacy Policy.
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 sm:mt-0 text-[14px] bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white py-3 px-4 rounded-lg font-bold disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {/* Status Message */}
                  {submitStatus && (
                    <div
                      className={`mt-4 p-3 rounded-md ${
                        submitStatus.success
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="sm:col-span-12 xl:col-span-5 lg:col-span-12 md:col-span-12 flex justify-center items-center px-4 md:px-0 mt-16">
              <div className=" relative w-full max-w-[600px] bg-[url('/images/bginputbox.png')] bg-no-repeat bg-cover bg-center rounded-4xl p-6 sm:p-10">
                <h5 className="text-white text-center text-lg sm:text-2xl md:text-[32px] font-mono font-bold mb-6">
                  Are you ready to Bring Your Business Idea To Life?
                </h5>

                <form className="space-y-4 bg-white rounded-3xl p-6">
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John*"
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe*"
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>
                  <div>
                    <select
                      value={selectedValue}
                      onChange={handleSelectChange}
                      className={`w-full border-b border-[#E9E9E9] px-4 py-3 ${
                        selectedValue ? "text-[#262626]" : "text-[#B7B8BE]"
                      }`}>
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option
                        className="text-[#262626]"
                        value="Standard package">
                        Standard Package
                      </option>
                      <option
                        className="text-[#262626]"
                        value="Premium package">
                        Premium Package
                      </option>
                      <option
                        className="text-[#262626]"
                        value="Enterprise package">
                        Enterprise Package
                      </option>
                      <option className="text-[#262626]" value="Custom package">
                        Custom Package
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      What’s your message
                    </label>
                    <textarea
                      placeholder="Hello Nextech, I need your help with..."
                      className="w-full border-b text-black border-[#E9E9E9] px-4 py-3 placeholder-[#B7B8BE]"
                      rows={5}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div className="md:w-[300px] sm:w-full">
                      <p className="text-[14px] text-[#B7B8BE] font-mono">
                        By completing the form, you agree to our Terms and
                        Privacy Policy.
                      </p>
                    </div>
                    <button className="mt-4 sm:mt-0 text-[14px] bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white py-3 px-4 rounded-lg font-bold">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

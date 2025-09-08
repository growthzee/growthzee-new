"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "Do you redesign a website or mobile apps as well ?",
      answer:
        "Yes, we can redesign your website or mobile apps as well. We have a team of designers and developers who can bring your vision to life. ",
    },
    {
      question: "How much does a website design or development project cost?",
      answer:
        " The cost of a website design or development project can vary depending on the complexity and scope of the project. We provide a detailed estimate based on the project requirements and timeline.",
    },
    {
      question: "Can you create a website or mobile app for me ?",
      answer:
        "Yes, we can create a website or mobile app for you. We have a team of designers and developers who can bring your vision to life. ",
    },
    {
      question:
        "Will I be able to make changes to the website after it's launched?",
      answer: "Yes, You will be able to make small changes.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* left neon bloom */}
        <div className="absolute -left-32 top-10 h-[700px] w-[700px] rounded-full bg-[#80e01a] opacity-30 blur-[140px]" />
        {/* subtle hotspot */}
        <div className="absolute left-24 top-24 h-[280px] w-[280px] rounded-full bg-white/20 blur-[120px]" />
        {/* right balance bloom */}
        <div className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-[#80e01a]/20 blur-[140px]" />
        {/* vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.85))]" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mt-10 text-balance text-white lg:text-[56px] md:text-[40px] text-[32px] font-medium">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-[16px] text-white/70">
            <span className="text-[#80e01a]"> Frequently asked questions</span>{" "}
            about our platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-12 mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-4 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-x-4 lg:px-6 md:px-4 px-4 py-4 text-left"
              >
                <div className="w-full">
                  <span className="md:text-[20px] sm:text-[14px] font-medium text-white">
                    {faq.question}
                  </span>
                </div>
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#80e01a] text-[#80e01a]">
                  {activeIndex === index ? <IoClose /> : <FaArrowDown />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="px-6 pb-5 text-[16px] sm:text-base text-white/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

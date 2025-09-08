"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative w-full pt-20 min-h-[800px] bg-black overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* left dominant bloom */}
        <div className="absolute -left-40 -top-32 w-[680px] h-[680px] rounded-full bg-[#80e01a] opacity-30 blur-[140px]" />
        {/* right supporting bloom */}
        <div className="absolute right-[-120px] bottom-[-80px] w-[520px] h-[520px] rounded-full bg-[#80e01a] opacity-20 blur-[140px]" />
        {/* subtle hotspot */}
        <div className="absolute right-16 top-10 w-[320px] h-[320px] rounded-full bg-white opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-5 container mx-auto px-4">
        <div className="text-center mt-10">
          <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
            Join our <span className="text-[#80e01a]">newsletter</span>
          </h1>
          <p className="text-white/70 text-[18px] font-mono mt-5">
            Get the{" "}
            <span className="text-[#80e01a]">
              latest updates, exclusive offers, and more straight
            </span>{" "}
            to your inbox!
          </p>
          <div className="mx-auto w-full md:w-2/5 flex sm:flex-row flex-col gap-x-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/50 border border-[#80e01a] rounded-xl py-5 px-5 outline-none placeholder:text-white/60 focus:border-[#80e01a] focus:ring-2 focus:ring-[#80e01a]/40 focus:text-white mt-5"
            />
            <button className="text-[14px] uppercase border-2 border-[#80e01a] text-[#80e01a] font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#80e01a1a] transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20">
            {/* Left Info */}
            <div className="md:w-1/3 text-left">
              <Image
                src={"/images/logo.png"}
                alt="GrowthZee logo"
                width={120}
                height={120}
              />
              <p className="text-white/70 text-[18px] font-mono mt-5">
                <span className="text-[#80e01a]">GrowthZee</span> is a
                full-service business and web solution{" "}
                <span className="text-[#80e01a]">agency</span> dedicated to
                helping businesses thrive in the digital age. Our team of
                experts specializes in{" "}
                <span className="text-[#80e01a]">
                  web development, design, SEO, and digital marketing.
                </span>
              </p>
            </div>
            <div className="md:w-1/4 sm:w-1/2 w-0"></div>
            {/* Links */}
            <div className="md:w-1/4">
              <h4 className="text-2xl md:text-[28px] text-left text-white font-semibold uppercase">
                Links
              </h4>
              <ul className="text-white/70 space-y-4 text-left cursor-pointer text-[18px] font-mono mt-5">
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href={`#home`}>Home</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href={`#portfolio`}>Portfolio</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href={`#services`}>Services</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href={`#packages`}>Packages</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href={`/about-us`}>About</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href={`/contact`}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div className="md:w-1/3 text-left">
              <h4 className="text-2xl md:text-[28px] text-white font-semibold uppercase">
                Contact
              </h4>
              <p className="text-white/70 text-[18px] font-mono mt-5 cursor-pointer hover:text-[#80e01a]">
                support@growthzee.com
              </p>
              <p
                onClick={() => window.open(`https://wa.link/oy4na3`, "_blank")}
                className="text-white/70 text-[18px] font-mono mt-5 cursor-pointer hover:text-[#80e01a]"
              >
                WhatsApp:+91 99638 32825
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/growthzee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-[#80e01a] text-[20px]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/growthzee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-[#80e01a] text-[20px]"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/growthzee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-[#80e01a] text-[20px]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/growthzee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-[#80e01a] text-[20px]"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

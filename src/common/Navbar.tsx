"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // --- CONFIGURATION START ---
  // Replace this with your actual email address
  const MY_EMAIL = "growthzeeoffice@gmail.com";
  const EMAIL_SUBJECT = "Strategy Call Inquiry";
  const EMAIL_BODY = "Hi, I want to connect regarding a strategy call.";
  // --- CONFIGURATION END ---

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "About Us", href: "/about-us" },
      // { name: "Team", href: "/teams" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  // Function to open Gmail directly
  const handleBookCall = () => {
    // This URL format tells Gmail to open the compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}&su=${encodeURIComponent(
      EMAIL_SUBJECT,
    )}&body=${encodeURIComponent(EMAIL_BODY)}`;

    // Open in a new tab
    window.open(gmailUrl, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full right-0 z-50 py-5 flex items-center justify-between px-4 lg:px-50 sm:px-8 transition-all duration-300 ${
        isScrolled ? "py-2 bg-black/90 backdrop-blur-sm" : "py-5 bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={120}
          height={120}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-4">
        <ul className="flex rounded-xl space-x-6 bg-black/80 text-white px-5 py-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`font-medium text-[14px] px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? "bg-[#80e01a]/20 border border-[#80e01a]"
                    : "hover:text-[#80e01a]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleBookCall} // <--- Connected here
          className="text-[14px] py-3 cursor-pointer rounded-xl px-4 bg-[#80e01a] text-black uppercase font-semibold hover:bg-[#80e01a]/90 transition-all duration-300 whitespace-nowrap"
        >
          Book Free Strategy Call
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden cursor-pointer flex items-center justify-center text-white z-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-black/95 lg:hidden flex flex-col items-center justify-center space-y-8 z-[90]"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-lg px-6 py-3 rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-[#80e01a]/20 border border-[#80e01a] text-white"
                    : "text-white hover:text-[#80e01a]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMenuOpen(false);
                handleBookCall(); // <--- Connected here
              }}
              className="text-lg py-3 cursor-pointer rounded-xl px-6 bg-[#80e01a] text-black uppercase font-semibold hover:bg-[#80e01a]/90 transition-all duration-300 mt-4"
            >
              Book Free Strategy Call
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

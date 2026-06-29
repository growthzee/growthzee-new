"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ─── Calendly Popup Modal ────────────────────────────────────────────────────
function CalendlyModal({ isOpen, onClose, calendlyUrl }) {
  useEffect(() => {
    if (!isOpen) return;

    // Load Calendly widget script once
    const existingScript = document.getElementById("calendly-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Load Calendly CSS once
    const existingLink = document.getElementById("calendly-css");
    if (!existingLink) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="calendly-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <motion.div
            key="calendly-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[210] flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-2xl bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-[#80e01a] text-xs font-semibold uppercase tracking-widest mb-0.5">
                    Free Consultation
                  </p>
                  <h2 className="text-white font-bold text-lg leading-tight">
                    Book Your Strategy Call
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Calendly Inline Widget */}
              <div
                className="calendly-inline-widget"
                data-url={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=80e01a`}
                style={{ minWidth: "320px", height: "630px" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const navRef = useRef(null);

  // --- CONFIGURATION START ---
  // Replace this with your actual Calendly scheduling link
  const CALENDLY_URL = "https://calendly.com/your-username/strategy-call";
  // --- CONFIGURATION END ---

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Packages", href: "/packages" },
      { name: "About Us", href: "/about-us" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  const handleBookCall = () => {
    setIsCalendlyOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    document.body.style.overflow =
      isMenuOpen || isCalendlyOpen ? "hidden" : "auto";
  }, [isMenuOpen, isCalendlyOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full right-0 z-50 flex items-center justify-between px-4 lg:px-50 sm:px-8 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-black/90 backdrop-blur-sm"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
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
            onClick={handleBookCall}
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
                  handleBookCall();
                }}
                className="text-lg py-3 cursor-pointer rounded-xl px-6 bg-[#80e01a] text-black uppercase font-semibold hover:bg-[#80e01a]/90 transition-all duration-300 mt-4"
              >
                Book Free Strategy Call
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Calendly Modal — rendered outside nav to avoid z-index conflicts */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={CALENDLY_URL}
      />
    </>
  );
}

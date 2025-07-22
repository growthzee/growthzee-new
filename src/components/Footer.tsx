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
    <div className="relative w-full pt-20 min-h-[800px]">
      <div
        className="absolute inset-0 z-0 bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="relative z-5 container mx-auto px-4">
        <div className="text-center mt-10">
          <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
            Join our newsletter
          </h1>
          <p className="text-[#A3A3A3] text-[18px] font-mono mt-5">
            Get the latest updates, exclusive offers, and more straight to your
            inbox!
          </p>
          <div className="mx-auto w-full md:w-2/5 flex sm:flex-row flex-col gap-x-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#17102F] border border-[#443883] rounded-xl py-5 px-5 outline-none placeholder:text-[#B7B8BE] focus:border-[#8b55ff] focus:text-[#8b55ff] mt-5"
            />
            <button className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20">
            {/* Left Info */}
            <div className="md:w-1/3 text-left">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={120}
                height={120}
              />
              <p className="text-[#A3A3A3] text-[18px] font-mono mt-5">
                GrowthZee is a full-service business and web solution agency
                dedicated to helping businesses thrive in the digital age. Our
                team of experts specializes in web development, design, SEO, and
                digital marketing.
              </p>
            </div>
            <div className="md:w-1/4 sm:w-1/2 w-0"></div>
            {/* Links */}
            <div className="md:w-1/4">
              <h4 className="text-2xl md:text-[28px] text-left text-white font-semibold uppercase">
                Links
              </h4>
              <ul className="text-[#A3A3A3] space-y-4 text-left cursor-pointer text-[18px]  font-mono mt-5">
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#home`}>Home</Link>
                </li>

                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#portfolio`}>Portfolio</Link>
                </li>
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#services`}>Services</Link>
                </li>
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#packages`}>Packages</Link>
                </li>
                <li className="hover:text-[#804FEF] duration-300 transition-all"></li>
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`/about-us`}>About</Link>
                </li>
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`/contact`}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div className="md:w-1/3 text-left">
              <h4 className="text-2xl md:text-[28px] text-white font-semibold uppercase">
                Contact
              </h4>
              <p className="text-[#A3A3A3] text-[18px] font-mono mt-5 cursor-pointer hover:text-[#804FEF]">
                support@growthzee.com
              </p>
              <p
                onClick={() => window.open(`https://wa.link/oy4na3`, "_blank")}
                className="text-[#A3A3A3] text-[18px] font-mono mt-5 cursor-pointer hover:text-[#804FEF]"
              >
                WhatsApp:+91 99638 32825
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/growthzee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full p-3 hover:text-[#6F51FF] text-[20px]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/growthzee?t=n5rCU-eWpy4wJaB4ofYlHg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full p-3 hover:text-[#6F51FF] text-[20px]"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/growthzee/?igsh=NDJzdzFvdmg4aDFl#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full p-3 hover:text-[#6F51FF] text-[20px]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/growthzee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full  p-3 hover:text-[#6F51FF] text-[20px]"
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

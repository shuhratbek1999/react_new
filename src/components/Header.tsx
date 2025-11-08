import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1E1E1E] font-tt text-[#FBFFFE] fixed top-0 left-0 w-full z-50 flex items-end sm:items-center max-sm:pb-4 sm:pb-0 transition-all duration-300 3xl:h-[100px] xxl:h-[90px] xl:h-[78.75px] lg:h-16 lx:h-[62px] md:h-12 sm:h-[130px] xs:h-[108px] h-[83.5px]">
      <div className="w-full mx-auto px-6 sm:px-10 flex justify-between items-center">
        {/* --- Logo --- */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="IT Alliance"
            className="h-7 w-auto object-contain"
          />
          <span className="font-bold text-[16px] md:text-[18px] text-[#FBFFFE] font-tt uppercase tracking-wide">
            IT ALLIANCE
          </span>
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center space-x-3">
          <section
            className="3xl:w-[723px] 3xl:h-[55px] xxl:w-[651px] xxl:h-[50px] xxl:text-[14px] xl:w-[570px] xl:h-[43.75px] xl:text-[12.25px] lg:w-[463px] lg:h-[35.6px] lg:text-[9.96px] lx:w-[448.6px] lx:h-[34.5px] lx:text-[9.65px] md:w-[348px] md:h-[27px] md:text-[7.47px] rounded-[30px] flex items-center justify-around font-tt"
            style={{ backgroundColor: "rgba(40, 40, 40, 1)" }}
          >
            <a
              href="#"
              className="rounded-full hover:bg-[#2B2B2B] px-3 py-1 transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              О компании
            </a>
            <a
              href="#"
              className="rounded-full hover:bg-[#2B2B2B] px-3 py-1 transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              Подбор авто
            </a>
            <a
              href="#"
              className="rounded-full hover:bg-[#2B2B2B] px-3 py-1 transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              Наши вендоры
            </a>
            <a
              href="#"
              className="rounded-full hover:bg-[#2B2B2B] px-3 py-1 transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              Контакты
            </a>
          </section>
          <button className="3xl:w-[212.5px] 3xl:h-[55.4px] xxl:w-48 xxl:h-[50px] xl:w-[168px] xl:h-11 xl:text-[12.25px] lg:w-[137px] lg:h-[35.5px] lg:text-[9.96px] lx:w-[132.5px] lx:h-[34.5px] lx:text-[9.65px] md:w-[103px] md:h-[26px] md:text-[7.47px] flex items-center justify-center font-tt bg-[#FBFFFE] text-[#1E1E1E] rounded-[33.33px] font-bold uppercase">
            Стать партнёром
          </button>
        </nav>

        {/* --- Mobile Burger Icon --- */}
        <button
          className="md:hidden flex flex-col space-y-[5px] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-[#FBFFFE] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-[#FBFFFE] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-[#FBFFFE] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* --- Mobile Menu (Animated) --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#1E1E1E] border-t border-[#2B2B2B] md:hidden flex flex-col items-center py-4 space-y-3"
          >
            <a
              href="#"
              className="font-tt uppercase font-bold text-[#FBFFFE] hover:text-[#E60000] transition"
              onClick={() => setMenuOpen(false)}
            >
              О компании
            </a>
            <a
              href="#"
              className="font-tt uppercase font-bold text-[#FBFFFE] hover:text-[#E60000] transition"
              onClick={() => setMenuOpen(false)}
            >
              Подбор авто
            </a>
            <a
              href="#"
              className="font-tt uppercase font-bold text-[#FBFFFE] hover:text-[#E60000] transition"
              onClick={() => setMenuOpen(false)}
            >
              Наши вендоры
            </a>
            <a
              href="#"
              className="font-tt uppercase font-bold text-[#FBFFFE] hover:text-[#E60000] transition"
              onClick={() => setMenuOpen(false)}
            >
              Контакты
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

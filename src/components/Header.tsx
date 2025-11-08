import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#1E1E1E] text-[#FBFFFE] h-[90px] flex items-center fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1920px] w-full mx-auto px-5 flex justify-between items-center">
        {/* --- Logo --- */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="IT Alliance"
            className="h-7 w-auto object-contain"
          />
          <span className="font-bold text-[18px] text-[#FBFFFE] font-tt uppercase tracking-wide">
            IT ALLIANCE
          </span>
        </div>

        {/* --- Navigation --- */}
        <nav className="flex items-center space-x-3 text-[13px] font-medium">
          <section className="bg-[#282828] h-[50px] rounded-[30px] flex items-center font-tt">
            <a
              href="#"
              className="px-[18px] py-2 rounded-full hover:bg-[#2B2B2B] transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              О компании
            </a>
            <a
              href="#"
              className="px-[18px] py-2 rounded-full hover:bg-[#2B2B2B] transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              Подбор авто
            </a>
            <a
              href="#"
              className="px-[18px] py-2 rounded-full hover:bg-[#2B2B2B] transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              Наши вендоры
            </a>
            <a
              href="#"
              className="px-[18px] py-2 rounded-full hover:bg-[#2B2B2B] transition font-tt font-bold uppercase text-[#FBFFFE]"
            >
              Контакты
            </a>
          </section>
          {/* --- Button --- */}
          <button className="ml-2 font-tt text-[14px] bg-[#FBFFFE] flex items-center text-[#1E1E1E] h-[50px] py-5 px-[25px] rounded-full font-bold uppercase hover:bg-[#E5E5E5] transition">
            Стать партнёром
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

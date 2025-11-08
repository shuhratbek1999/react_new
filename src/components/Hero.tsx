import { useState } from "react";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <section
      className={`relative h-[1000px] flex flex-col items-center pt-52 min-h-screen transition-colors duration-700 ${
        active ? "bg-[#1b1b1b]" : "bg-[#f9fcfb]"
      }`}
    >
      <div className="relative text-center max-w-[1263px]">
        <span className="absolute -top-14 -left-6 w-6 h-6 border-t border-l border-[#1E1E1E]"></span>
        <span className="absolute -top-14 -right-6 w-6 h-6 border-t border-r border-[#1E1E1E]"></span>
        <span className="absolute -bottom-10 -left-6 w-6 h-6 border-b border-l border-[#1E1E1E]"></span>
        <span className="absolute -bottom-10 -right-6 w-6 h-6 border-b border-r border-[#1E1E1E]"></span>

        <h1
          className={`font-tt font-bold leading-tight transition-colors duration-700 text-center text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem] ${
            active ? "text-white" : "text-[#222]"
          }`}
        >
          НАДЕЖНАЯ{" "}
          <span
            className={`transition-colors duration-700 ${
              active ? "text-[#ff3b3b]" : "text-[#e60000]"
            }`}
          >
            ДИСТРИБУЦИЯ IT-ОБОРУДОВАНИЯ
          </span>
          <br />
          ДЛЯ <span className="italic font-light">ВАШЕГО</span>{" "}
          <span className="font-bold">БИЗНЕСА</span>
        </h1>

        <p
          className={`mt-4 text-sm sm:text-base tracking-wider transition-colors duration-700 ${
            active ? "text-gray-300" : "text-gray-500"
          }`}
        >
          КОМПАНИЯ СОВРЕМЕННЫХ БИЗНЕС-РЕШЕНИЙ
        </p>
      </div>
      <button
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={`relative cursor-pointer z-10 mt-20 w-[237px] h-[94px] rounded-[100px] transition-all duration-700 flex items-center justify-start px-2 shadow-md ${
          active ? "bg-[#e60000]" : "bg-[#1b1b1b]"
        }`}
      >
        <div
          className={`w-30 h-[78px] rounded-full transition-all duration-700 ${
            active
              ? "translate-x-[72px] bg-[#ff4d4d]"
              : "translate-x-0 bg-[#2b2b2b]"
          }`}
        />
      </button>
      <TriangleGroup side="left" active={active} />
      <TriangleGroup side="right" active={active} />
    </section>
  );
}

function TriangleGroup({
  side,
  active,
}: {
  side: "left" | "right";
  active: boolean;
}) {
  const baseColors = ["#1b1b1b", "#4a4a4a", "#5E5E5E", "#9b9b9b"];
  const activeColors = ["#e60000", "#ff4d4d", "#ff8080", "#ffb3b3"];

  const transformsLeft = [
    "rotate(-132deg) translate(-15px, 90px)",
    "rotate(48deg) translate(-65px, -95px)",
    "rotate(-20deg) translate(65px, -200px)",
    "rotate(48deg) translate(-190px, -220px)",
  ];
  const transformsRight = [
    "rotate(10deg) translate(-110px, -70px)",
    "rotate(80deg) translate(-110px, -30px)",
    "rotate(15deg) translate(-40px, -220px)",
    "rotate(-50deg) translate(190px, -220px)",
  ];

  const transforms = side === "left" ? transformsLeft : transformsRight;
  const align = side === "left" ? "left-10 items-start" : "right-10 items-end";

  // ✅ Eng katta pastda chiqishi uchun DOM z-index bilan o‘ynaymiz
  return (
    <div
      className={`absolute bottom-0 ${align} flex flex-col justify-end gap-1 scale-[0.8] sm:scale-100 md:scale-110 lg:scale-125`}
    >
      {baseColors.map((color, i) => (
        <Triangle
          key={i}
          zIndex={10 + i}
          color={active ? activeColors[i] : color}
          size={`${140 - i * 20}px`}
          transform={transforms[i]}
        />
      ))}
    </div>
  );
}

/* === Uchburchak komponenti === */
function Triangle({
  color,
  size,
  transform,
  zIndex,
}: {
  color: string;
  size: string;
  transform?: string;
  zIndex?: number;
}) {
  return (
    <div
      className="absolute w-0 h-0 border-l-50 border-l-transparent border-r-50 border-r-transparent transition-all duration-700"
      style={{
        borderBottomColor: color,
        borderLeftWidth: `calc(${size} / 2)`,
        borderRightWidth: `calc(${size} / 2)`,
        borderBottomWidth: size,
        transform,
        zIndex,
      }}
    ></div>
  );
}

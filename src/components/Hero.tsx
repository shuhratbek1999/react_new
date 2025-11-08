import { useState } from "react";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <section
      className={`relative md:h-[1000px] h-[500px] flex flex-col items-center pt-52 transition-colors duration-700 ${
        active ? "bg-[#1b1b1b]" : "bg-[#f9fcfb]"
      }`}
    >
      <div className="relative text-center xl:max-w-[1263px] lg:max-w-[1017px]">
        <span
          className={`absolute -top-14 left-4 xs:left-4 md:-left-4 xl:-left-6 lg:-left-2 w-[11px] h-[11px] xs:w-[17px] xs:h-[17px] border-t-[1.1px] border-l-[1.1px] ${
            active ? "border-[#f9fcfb]" : "border-[#1E1E1E]"
          }`}
        ></span>
        <span
          className={`absolute -top-14 right-4 xs:right-3 md:-right-4 xl:-right-6 lg:-right-2 w-[11px] h-[11px] xs:w-[17px] xs:h-[17px] border-t-[1.1px] border-r-[1.1px] ${
            active ? "border-[#f9fcfb]" : "border-[#1E1E1E]"
          }`}
        ></span>
        <span
          className={`absolute -bottom-10 left-4 xs:left-4 md:-left-4 xl:-left-6 lg:-left-2 w-[11px] h-[11px] xs:w-[17px] xs:h-[17px] border-b-[1.1px] border-l-[1.1px] ${
            active ? "border-[#f9fcfb]" : "border-[#1E1E1E]"
          }`}
        ></span>
        <span
          className={`absolute -bottom-10 right-4 xs:right-3 md:-right-4 xl:-right-6 lg:-right-2 w-[11px] h-[11px] xs:w-[17px] xs:h-[17px] border-b-[1.1px] border-r-[1.1px] ${
            active ? "border-[#f9fcfb]" : "border-[#1E1E1E]"
          }`}
        ></span>

        <h1
          className={`font-tt font-bold leading-tight transition-colors duration-700 text-center xl:text-[3rem] lg:text-[2.6rem] lx:text-[37.3px] md:text-[28.88px] sm:text-[31px] xs:text-[25px] text-[19.3px] ${
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
          className={`mt-4 font-light text-[8.77px] xs:text-[11.4px] lg:text-[17.5px] tracking-wider transition-colors duration-700 ${
            active ? "text-gray-300" : "text-[#1E1E1E]"
          }`}
        >
          КОМПАНИЯ СОВРЕМЕННЫХ БИЗНЕС-РЕШЕНИЙ
        </p>
      </div>
      <button
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={`relative z-10 mt-20 hidden md:flex md:w-[155px] md:h-[61px] w-[263px] h-[104px] rounded-[100px] transition-all duration-700 items-center justify-start px-2 ${
          active ? "bg-[#e60000]" : "bg-[#1b1b1b]"
        }`}
        style={{
          boxShadow: "4.44px 4.44px 6.67px rgba(0, 0, 0, 0.5)", // tashqi soya
        }}
      >
        <div
          className={`md:w-[78.7px] md:h-[51px] w-[133px] h-[87px] rounded-[1111px] transition-all duration-700 ${
            active
              ? "translate-x-[110px] md:translate-x-[60px] bg-[#ff4d4d]"
              : "translate-x-0 bg-[#2b2b2b]"
          }`}
          style={{
            boxShadow: "4.44px 4.44px 6.67px rgba(0, 0, 0, 0.5)", // ichki tugma soyasi
          }}
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
      className={`absolute bottom-0 ${align} lg:flex  hidden flex-col justify-end gap-1 scale-[0.8] sm:scale-100 md:scale-110 lg:scale-125`}
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

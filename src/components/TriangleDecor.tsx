export default function TriangleDecor({
  side = "left",
  active = false,
}: {
  side?: "left" | "right";
  active?: boolean;
}) {
  const rotate = side === "left" ? "-12deg" : "12deg";

  return (
    <div
      className={`absolute bottom-0 ${
        side === "left" ? "left-0" : "right-0 scale-x-[-1]"
      } flex flex-col items-end justify-end relative w-[280px] h-[280px]`}
      style={{ transform: `rotate(${rotate})` }}
    >
      {/* eng katta uchburchak */}
      <div
        className={`absolute bottom-0 right-0 w-0 h-0 
        border-l-200 border-l-transparent border-b-180 
        ${active ? "border-b-[#D40000]" : "border-b-[#1C1C1C]"}`}
      />

      {/* 2-uchburchak */}
      <div
        className={`absolute bottom-[90px] right-[60px] w-0 h-0 
        border-l-150 border-l-transparent border-b-130 
        ${active ? "border-b-[#E84343]" : "border-b-[#555555]"}`}
      />

      {/* 3-uchburchak */}
      <div
        className={`absolute bottom-160 right-[110px] w-0 h-0 
        border-l-100 border-l-transparent border-b-90 
        ${active ? "border-b-[#FF7777]" : "border-b-[#777777]"}`}
      />

      {/* 4-uchburchak (eng kichik) */}
      <div
        className={`absolute bottom-[220px] right-[150px] w-0 h-0 
        border-l-60 border-l-transparent border-b-50 
        ${active ? "border-b-[#BBBBBB]" : "border-b-[#9D9D9D]"}`}
      />
    </div>
  );
}

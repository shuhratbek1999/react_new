import React from "react";

interface Props {
  isDark: boolean;
  toggle: () => void;
}

const ButtonSwitch: React.FC<Props> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      className="relative w-[140px] h-14 rounded-full flex items-center transition-all duration-500 ease-in-out shadow-md"
      style={{
        background: isDark ? "#e11d48" : "#1E1E1E",
      }}
    >
      {/* Sliding circle */}
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center"
        style={{
          width: 46,
          height: 46,
          background: isDark ? "#ff6b6b" : "#2b2b2b",
          transform: isDark ? `translateX(74px)` : `translateX(0px)`,
          boxShadow: "0 6px 10px rgba(0,0,0,0.25)",
        }}
      >
        {/* Show "A" when dark */}
        {isDark && (
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 20 }}>
            A
          </span>
        )}
      </div>
    </button>
  );
};

export default ButtonSwitch;

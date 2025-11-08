type Props = {
  width?: string; // Tailwind width class yoki CSS value (masalan 'w-60' yoki '300px')
  height?: string; // bar balandligi (Tailwind class yoki CSS value)
  barColor?: string; // bar rangi (class yoki rgba)
  dotSize?: string; // dot o'lchami (px yoki Tailwind class value)
  dotColor?: string;
  className?: string;
};

export default function LineWithDot({
  width = "w-56",
  height = "h-1",
  barColor = "bg-gray-300",
  dotSize = "12px",
  dotColor = "#1E1E1E",
  className = "",
}: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${width} ${height} rounded-full ${barColor}`}></div>
      <div
        style={{
          width: dotSize,
          height: dotSize,
          background: dotColor,
          borderRadius: "50%",
          marginLeft: -parseFloat(String(dotSize)) / 2 + "px", // dot overlap bar end
        }}
      />
    </div>
  );
}

"use client";

interface DottedRectangleProps {
  color?: string; // Accepts hex codes, RGB, or named colors
  rows?: number;
  cols?: number;
  width?: string;
  height?: string;
  gap?: string;
}

const DottedRectangle = ({
  color = "#000000", // Default color: black
  rows = 5,
  cols = 10,
  width = "100%",
  height = "16rem",
  gap = "8px",
}: DottedRectangleProps) => {
  const totalDots = rows * cols;

  return (
    <div style={{ width, height }} className="flex items-center justify-center p-4">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, auto)`,
          gap,
        }}
      >
        {Array.from({ length: totalDots }).map((_, index) => (
          <span
            key={index}
            className="rounded-full"
            style={{
              width: "4px",
              height: "4px",
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DottedRectangle;

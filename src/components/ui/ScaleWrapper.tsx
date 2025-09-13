"use client";
import { useEffect, useState } from "react";

const ScaleWrapper = ({ children }: { children: React.ReactNode }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1920;
      const currentWidth = window.innerWidth;
      const newScale = currentWidth / baseWidth;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      className="relative w-[1920px] h-[1080px] overflow-hidden"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      {children}
    </div>
  );
};

export default ScaleWrapper;

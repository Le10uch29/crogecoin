"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type StarProps = {
  className?: string;
  direction?: "up" | "down";
  size?: { md: number; lg: number; xl: number; "2xl": number };
};

const Star = ({
  className,
  direction = "up",
  size = { md: 20, lg: 25, xl: 30, "2xl": 40 },
}: StarProps) => {
  const yShift = direction === "up" ? -15 : 15;

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, yShift, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    >
      <Image
        src="/svg/star.svg"
        alt="star"
        width={size["2xl"]}
        height={size["2xl"]}
        className={`
          md:w-[${size.md}px] md:h-[${size.md}px]
          lg:w-[${size.lg}px] lg:h-[${size.lg}px]
          xl:w-[${size.xl}px] xl:h-[${size.xl}px]
          2xl:w-[${size["2xl"]}px] 2xl:h-[${size["2xl"]}px]
        `}
        unoptimized
      />
    </motion.div>
  );
};

const FloatingStars = () => {
  return (
    <div className="absolute inset-0 z-[99] w-full h-full overflow-visible">
      {/* top/left разные для md → 2xl */}
      <Star
        className="md:top-[-10px] md:left-[30px] 
                   lg:top-[-15px] lg:left-[40px] 
                   xl:top-[-18px] xl:left-[50px] 
                   2xl:top-[-20px] 2xl:left-[60px]"
        direction="down"
        size={{ md: 20, lg: 25, xl: 28, "2xl": 30 }}
      />
      <Star
        className="md:top-[30px] md:left-[60px] 
                   lg:top-[40px] lg:left-[80px] 
                   xl:top-[45px] xl:left-[90px] 
                   2xl:top-[50px] 2xl:left-[100px]"
        direction="up"
        size={{ md: 18, lg: 22, xl: 24, "2xl": 25 }}
      />
      <Star
        className="md:top-[80px] md:left-[400px] 
                   lg:top-[95px] lg:left-[500px] 
                   xl:top-[100px] xl:left-[600px] 
                   2xl:top-[110px] 2xl:left-[650px]"
        direction="down"
        size={{ md: 25, lg: 30, xl: 32, "2xl": 35 }}
      />
      <Star
        className="md:top-[280px] md:left-[60px] 
                   lg:top-[330px] lg:left-[80px] 
                   xl:top-[370px] xl:left-[90px] 
                   2xl:top-[410px] 2xl:left-[100px]"
        direction="up"
        size={{ md: 20, lg: 24, xl: 28, "2xl": 30 }}
      />
      <Star
        className="md:top-[350px] md:left-[20px] 
                   lg:top-[420px] lg:left-[25px] 
                   xl:top-[460px] xl:left-[30px] 
                   2xl:top-[500px] 2xl:left-[35px]"
        direction="down"
        size={{ md: 20, lg: 24, xl: 28, "2xl": 30 }}
      />
      <Star
        className="md:top-[420px] md:left-[400px] 
                   lg:top-[500px] lg:left-[520px] 
                   xl:top-[560px] xl:left-[600px] 
                   2xl:top-[590px] 2xl:left-[650px]"
        direction="up"
        size={{ md: 28, lg: 34, xl: 36, "2xl": 40 }}
      />
    </div>
  );
};

export default FloatingStars;

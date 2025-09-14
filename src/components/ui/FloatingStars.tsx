"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type StarProps = {
  className?: string;
  direction?: "up" | "down";
  size?: { sm: number; md: number; lg: number; xl: number; "2xl": number };
};

const Star = ({
  className,
  direction = "up",
  size = { sm: 10, md: 20, lg: 25, xl: 30, "2xl": 40 },
}: StarProps) => {
  const yShift = direction === "up" ? -15 : 15;

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, yShift, 0],
        scale: [1, 1.12, 1],
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
          sm:w-[${size.sm}px] md:h-[${size.sm}px]
          md:w-[${size.md}px] md:h-[${size.md}px]
          lg:w-[${size.lg}px] lg:h-[${size.lg}px]
          xl:w-[${size.xl}px] xl:h-[${size.xl}px]
          2xl:w-[${size["2xl"]}px] 2xl:h-[${size["2xl"]}px]
          w-auto h-auto
        `}
        unoptimized
      />
    </motion.div>
  );
};

const FloatingStars = () => {
  return (
    <div className="inset-0 pointer-events-none">
      <Star
        className="w-[25px] md:w-[35px] lg:w-[45px] -top-[10px] left-[10px] md:top-[-10px] md:left-[30px] 
                   lg:top-[15px] lg:left-[40px] xl:top-[50px] xl:left-[20px] 2xl:top-[-20px] 2xl:left-[60px]"
        direction="down"
        size={{ sm: 10, md: 20, lg: 25, xl: 28, "2xl": 30 }}
      />
      <Star
        className="w-[25px] md:w-[35px] lg:w-[45px] top-[30px] left-[40px] md:top-[30px] md:left-[60px]
                   lg:top-[40px] lg:left-[80px] xl:top-[90px] xl:left-[60px] 2xl:top-[50px] 2xl:left-[100px]"
        direction="up"
        size={{ sm: 10, md: 18, lg: 22, xl: 24, "2xl": 25 }}
      />
      <Star
        className="w-[25px] md:w-[35px] lg:w-[45px] top-[35px] left-[230px] md:top-[80px] md:left-[400px]
                   lg:top-[95px] lg:left-[500px] xl:top-[110px] xl:left-[480px] 2xl:top-[110px] 2xl:left-[650px]"
        direction="down"
        size={{ sm: 10, md: 25, lg: 30, xl: 32, "2xl": 35 }}
      />
      <Star
        className="w-[25px] md:w-[35px] lg:w-[45px] top-[155px] left-[30px] md:top-[280px] md:left-[60px]
                   lg:top-[330px] lg:left-[80px] xl:top-[370px] xl:left-[90px] 2xl:top-[410px] 2xl:left-[100px]"
        direction="up"
        size={{ sm: 10, md: 20, lg: 24, xl: 28, "2xl": 30 }}
      />
      <Star
        className="w-[25px] md:w-[35px] lg:w-[45px] top-[190px] -left-[10px] md:top-[350px] md:left-[20px]
                   lg:top-[420px] lg:left-[25px] xl:top-[460px] xl:left-[30px] 2xl:top-[500px] 2xl:left-[35px]"
        direction="down"
        size={{ sm: 10, md: 20, lg: 24, xl: 28, "2xl": 30 }}
      />
      <Star
        className="w-[25px] md:w-[35px] lg:w-[45px] top-[230px] left-[250px] md:top-[420px] md:left-[400px]
                   lg:top-[500px] lg:left-[520px] xl:top-[520px] xl:left-[480px] 2xl:top-[590px] 2xl:left-[650px]"
        direction="up"
        size={{ sm: 10, md: 28, lg: 34, xl: 36, "2xl": 40 }}
      />
    </div>
  );
};

export default FloatingStars;

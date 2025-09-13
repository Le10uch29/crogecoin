"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type StarProps = {
  top: string;
  left: string;
  direction?: "up" | "down";
  size?: number;
};

const Star = ({ top, left, direction = "up", size = 40 }: StarProps) => {
  const yShift = direction === "up" ? -15 : 15;

  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      animate={{
        y: [0, yShift, 0],
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7], // мерцание
        filter: [
          "drop-shadow(0 0 2px #fff)",
          "drop-shadow(0 0 8px #ffd700)",
          "drop-shadow(0 0 2px #fff)",
        ], // свечение
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
        width={size}
        height={size}
        unoptimized
      />
    </motion.div>
  );
};

const FloatingStars = () => {
  return (
    <div className="absolute inset-0 z-[99] w-full h-full pointer-events-none">
      <Star top="-20px" left="60px" direction="down" size={30} />
      <Star top="50px" left="100px" direction="up" size={25} />
      <Star top="110px" left="650px" direction="down" size={35} />
      <Star top="410px" left="100px" direction="up" size={30} />
      <Star top="500px" left="35px" direction="down" size={30} />
      <Star top="590px" left="650px" direction="up" size={40} />
    </div>
  );
};

export default FloatingStars;

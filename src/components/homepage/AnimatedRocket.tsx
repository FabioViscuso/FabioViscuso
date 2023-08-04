"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import icons from "@/components/ui/IconImport";

export default function AnimatedRocket() {
  const [flyAway, setFlyAway] = useState(false);

  const handleFlyAway = () => {
    setFlyAway(true);
    setTimeout(() => {
      setFlyAway(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{y: 400, x: -400}}
      animate={{y: 0, x: 0}}
      viewport={{once: true}}
      transition={{duration: 1, delay: 2}}
      className="rocket-container h-min">
      <p
        className={` ${
          flyAway ? "fly" : ""
        } drop-shadow-[0px_0px_1px_rgb(0,0,0)] hover:scale-110 transition-transform`}
        onClick={handleFlyAway}
      >
        <Image src={icons.rocket} alt="animated rocket" className="w-14 h-14" />
      </p>
    </motion.div>
  );
}

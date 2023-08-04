"use client";

import { motion } from "framer-motion";
import AnimatedRocket from "@/components/homepage/AnimatedRocket";

import { Poiret_One } from "next/font/google";
const heading = Poiret_One({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4,
        ease: "easeInOut"
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <section
      id="hero"
      data-auracolor="FFDEDE"
      className={` min-h-screen lg:flex-none lg:snap-start w-full px-2 py-2 md:py-10 flex flex-col items-center justify-between`}
    >
      <div className="">
        {/* I know it's bad to have this empty div. Don't judge me yet. */}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        {/* introduction container */}
        <motion.div
          className="flex flex-col align-center justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1
            className={` ${heading.className} text-7xl md:text-9xl [text-shadow:0px_0px_6px_#888] `}
            variants={item}
          >
            Hello! I&apos;m Fabio!
          </motion.h1>
          <motion.p className="mt-12 text-xl lg:text-4xl" variants={item}>
            I&apos;m a full-stack developer,
          </motion.p>
          <motion.p
            className="text-xl lg:text-4xl mt-0 md:mt-3"
            variants={item}
          >
            and I love to create amazing experiences.
          </motion.p>
          <motion.p
            className="text-xl lg:text-4xl mt-0 md:mt-3"
            variants={item}
          >
            Let&apos;s build the next big thing
          </motion.p>
          <motion.div
            className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6"
            variants={item}
          >
            <p className="text-2xl lg:text-6xl underline mt-0 md:mt-3 ">
              together!
            </p>
            <AnimatedRocket />
          </motion.div>
          <motion.p
            className=" mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: {delay: 3, ease: 'easeInOut'} }}
            viewport={{ once: true }}
          >
            (Yes, I&apos;m kind of a minimalist too.)
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: {delay: 2, ease: 'easeInOut'} }}
        viewport={{ once: true }}
      >
        <p className="text-sm sm:text-lg">Let&apos;s find out more!</p>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

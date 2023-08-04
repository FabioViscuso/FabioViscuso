"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/homepage/Heading";
import icons from "@/components/ui/IconImport";

export default function About() {
  return (
    <section
      id="about"
      data-auracolor="C8FFC2"
      className="min-h-screen lg:flex-none lg:snap-start w-full px-2 lg:px-24 pt-32 md:py-32 "
    >
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="h-full flex flex-col lg:flex-row justify-center items-center gap-32 lg:gap-24"
      >
        <div className="lg:flex-1">
          <Heading content={"Who am I?"} />
          <p className="mt-8 text-xl">
            Hailing from Italy and born in the beautiful Sicily, I&apos;m 30 and
            I love music, technology and nature. And cats. Everybody loves cats.
          </p>
          <p className="mt-8 text-xl">
            When not coding, you can find me hiking somewhere, playing some
            videogame or making music with my guitar/bass/MIDI controller.
          </p>
          <p className="mt-8 text-xl">
            I&apos;m also a dreamer, I care for the environment and I&apos;ll
            always consider myself an idealist.
          </p>
        </div>
        <div className="relative h-full w-full lg:mt-0 lg:flex-1">
          <Image
            src={icons.avatar}
            alt="my photo"
            priority
            placeholder="blur"
            className=" photo-common top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2 -rotate-6 "
          />
          <Image
            src={icons.avatar2}
            alt="my photo2"
            priority
            placeholder="blur"
            className=" photo-common top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={icons.avatar3}
            alt="my photo2"
            priority
            placeholder="blur"
            className=" photo-common top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 rotate-6 "
          />
        </div>
      </motion.article>
    </section>
  );
}

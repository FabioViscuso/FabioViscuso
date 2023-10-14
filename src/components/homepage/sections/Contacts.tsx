"use client";

import { motion } from "framer-motion";
import Heading from "@/components/homepage/Heading";
import ContactsContainer from "@/components/homepage/ContactsContainer";

export default function Contacts() {
  return (
    <section
      id="contacts"
      data-auracolor="FFF9C2"
      data-section-number="4"
      className=" min-h-screen lg:flex-none lg:snap-start w-full px-2 lg:px-24 pt-32 md:py-32 "
    >
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-24"
      >
        <div className="flex flex-col flex-1 ">
          <Heading content={"Want to reach out?"} />
          <p className="mt-8 mb-8 md:mb-0 text-2xl">
            Be my guest! Check out my Github and LinkedIn profiles, or click my
            contacts to copy them automatically. Woah, magic!
          </p>
          <p className="mt-8 mb-8 md:mb-0 text-2xl">
            {"( Protip: you can hit me up on Whatsapp or Telegram 😉 )"}
          </p>
        </div>
        <ContactsContainer />
      </motion.article>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import icons from "@/components/ui/IconImport";
import { CVDownloadButton } from "@/components/homepage/CVDowloadButton";
import { SkillIcon } from "@/components/homepage/SkillIcon";
import Heading from "@/components/homepage/Heading";

export default function Skills() {
  const handleScrollToContacts = (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => {
    const contacts = document.querySelector("#contacts");
    contacts?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="skills"
      data-auracolor="C2EFFF"
      className="min-h-screen lg:flex-none lg:snap-start w-full px-2 lg:px-24 pt-32 md:py-32 lg:py-16"
    >
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="h-full flex flex-col justify-between items-center gap-24"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
          <div className="lg:flex-1">
            <Heading content={"What can I do for you?"} />
            <p className="mt-8 text-xl">
              From modern e-commerce websites to trendy web applications and
              captivating landing pages, my curiosity and passion span a broad
              spectrum of projects. My mission is to leave a mark in creating
              products that deliver true value to both end users and clients.
            </p>
            <p className="mt-8 text-xl">
              Striving for perfection is in my DNA. I relentlessly pursue growth
              and excellence to ensure your customers have the best possible
              experience with your web applications.
            </p>
            <p className="mt-8 text-xl">
              Need a hand? Just want to tell me something cool?&nbsp;
              <span
                onClick={handleScrollToContacts}
                className=" inline-block underline px-1 hover:bg-slate-800 hover:text-white transition-all rounded-sm duration-500 "
              >
                Let&apos;s chat!
              </span>
            </p>
            {/* the CV part */}
            <div className="mt-8 flex gap-8 flex-col md:flex-row items-center md:items-stretch">
              <p className="text-xl text-center md:text-left flex flex-col md:flex-row items-center">
                Download my resume:
              </p>
              <div className="flex gap-8 items-center">
                <CVDownloadButton src={icons.flagit} lang={"italian"} />
                <CVDownloadButton src={icons.flaguk} lang={"english"} />
              </div>
            </div>
          </div>
          {/* skills */}
          <div className="lg:flex-1 flex flex-col items-center">
            <p className="text-lg  text-center md:text-left ">
              Here are some of the tools and technologies I know and love:
            </p>
            <div className="flex gap-10 flex-wrap items-center justify-center md:justify-start mt-6 mb-10">
              <SkillIcon src={icons.html5} alt="html5" label="HTML5" />
              <SkillIcon src={icons.css3} alt="css3" label="CSS3" />
              <SkillIcon
                src={icons.javascript}
                alt="javascript"
                label="JavaScript ES6+"
              />
              <SkillIcon src={icons.react} alt="react" label="React" />
              <SkillIcon src={icons.next} alt="next" label="Next.js" />
              <SkillIcon
                src={icons.bootstrap}
                alt="bootstrap"
                label="Bootstrap 4/5"
              />
              <SkillIcon
                src={icons.tailwind}
                alt="tailwind"
                label="TailwindCSS"
              />
              <SkillIcon src={icons.nodejs} alt="nodejs" label="NodeJS" />
              <SkillIcon
                src={icons.express}
                alt="express"
                label="Express 4.17+"
              />
              <SkillIcon
                src={icons.sql}
                alt="postgresql"
                label="PostgreSQL"
                additionalCSS="rounded-none"
              />
              <SkillIcon
                src={icons.mongodb}
                alt="mongoDB"
                label="MongoDB"
                additionalCSS="bg-green-200"
              />
              <SkillIcon
                src={icons.prisma}
                alt="prisma"
                label="Prisma ORM"
                additionalCSS="rounded-none"
              />
              <SkillIcon
                src={icons.git}
                alt="git"
                label="Git (& GitHub/GitLab)"
              />
              <SkillIcon
                src={icons.vscode}
                alt="vs code"
                label="Visual Studio Code"
              />
              <SkillIcon
                src={icons.typescript}
                alt="typescript"
                label="TypeScript"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

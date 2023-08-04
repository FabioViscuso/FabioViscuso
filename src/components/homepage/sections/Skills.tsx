"use client";

import { motion } from "framer-motion";
import icons from "@/components/ui/IconImport";
import { CVDownloadButton } from "@/components/homepage/CVDowloadButton";
import { SkillIcon } from "@/components/homepage/SkillIcon";
import Heading from "@/components/homepage/Heading";

export default function Skills() {
  return (
    <section
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
            <p className="my-8 text-xl">
              My curiosity and passion ranges across a variety of topics and
              project types. Be it a modern e-commerce, the next trendy webapp
              or a catchy landing page, I&apos;d love to do my part in creating
              products that give value to end users and clients alike.
            </p>
            <p className="mb-8 text-xl">
              My preferred frontend technology? React. It&apos;s versatile,
              scalable, and very fast. It&apos;s also an industry standard and
              has a huge ecosystem of libraries and tools.
            </p>
            <p className="text-xl">
              Of course I love to learn new stuff. Want to chat about that?
              <span>
                &nbsp;
                <a
                  href="#bg-28270a"
                  className=" inline-block underline px-1 hover:bg-slate-800 hover:text-white transition-all rounded-sm duration-500 "
                >
                  Contact me
                </a>
              </span>
            </p>
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

        {/* the CV part */}
        <div className="flex gap-10 flex-col md:flex-row items-center md:items-stretch">
          <p className="mt-2 md:mt-0 text-xl text-center md:text-left flex flex-col md:flex-row items-center">
            Download my resume, pick a language:
          </p>
          <div className="flex gap-10 items-center">
            <CVDownloadButton src={icons.flagit} lang={"italian"} />
            <CVDownloadButton src={icons.flaguk} lang={"english"} />
          </div>
        </div>
      </motion.article>
    </section>
  );
}

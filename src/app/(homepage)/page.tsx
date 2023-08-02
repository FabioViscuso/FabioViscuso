import React from "react";
import Image from "next/image";
import { SkillIcon } from "@/components/homepage/SkillIcon";
import { CVDownloadButton } from "@/components/homepage/CVDowloadButton";
import AnimatedRocket from "@/components/homepage/AnimatedRocket";
import Heading from "@/components/homepage/Heading";
import Contacts from "@/components/homepage/Contacts";
import icons from "@/components/ui/IconImport";

import { Poiret_One } from "next/font/google";
const heading = Poiret_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      {/* section 1: photo and introduction */}
      <section
        id="bg-FFDEDE"
        className={` min-h-screen lg:flex-none lg:snap-start w-full px-2 py-2 md:py-10 flex flex-col items-center justify-between`}
      >
        <div className="">
          {/* I know it's bad to have this empty div. Don't judge me yet. */}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          {/* introduction container */}
          <div className="flex flex-col align-center justify-center">
            <div
              /* emoji + h1 container */
              className="flex flex-col md:flex-row gap-2"
            >
              <h1
                className={`${heading.className} text-7xl md:text-9xl [text-shadow:0px_0px_6px_#888] `}
              >
                Hello! I&apos;m Fabio!
              </h1>
            </div>
            <p className="mt-12 text-xl lg:text-4xl">
              I&apos;m a full-stack developer,
            </p>
            <p className="text-xl lg:text-4xl mt-0 md:mt-3">
              and I love to create amazing experiences.
            </p>
            <p className="text-xl lg:text-4xl mt-0 md:mt-3">
              Let&apos;s build the next big thing
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6">
              <p className="text-2xl lg:text-6xl underline mt-0 md:mt-3 ">
                together!
              </p>
              <AnimatedRocket />
            </div>
            <p className=" mt-10">(Yes, I&apos;m kind of a minimalist too.)</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <p className="text-sm sm:text-lg">Let&apos;s find out more!</p>
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2: what can I do */}
      <section
        id="bg-C2EFFF"
        className="min-h-screen lg:flex-none lg:snap-start w-full px-2 lg:px-24 pt-32 md:py-32 lg:py-16"
      >
        <article className="h-full flex flex-col justify-between items-center gap-24">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
            <div className="lg:flex-1">
              <Heading
                content={"What can I do for you?"}
                additionalCSS={heading.className}
              />
              <p className="my-8 text-xl">
                My curiosity and passion ranges across a variety of topics and
                project types. Be it a modern e-commerce, the next trendy webapp
                or a catchy landing page, I&apos;d love to do my part in creating
                products that give value to end users and clients alike.
              </p>
              <p className="mb-8 text-xl">
                My preferred frontend technology? React. It&apos;s versatile,
                scalable, and very fast. It&apos;s also an industry standard and has
                a huge ecosystem of libraries and tools.
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
        </article>
      </section>

      {/* section 3: who am I */}
      <section
        id="bg-C8FFC2"
        className="min-h-screen lg:flex-none lg:snap-start w-full px-2 lg:px-24 pt-32 md:py-32 "
      >
        <article className="h-full flex flex-col lg:flex-row justify-center items-center gap-32 lg:gap-24">
          <div className="lg:flex-1">
            <Heading content={"Who am I?"} additionalCSS={heading.className} />
            <p className="mt-8 text-xl">
              Hailing from Italy and born in the beautiful Sicily, I&apos;m 30 and I
              love music, technology and nature. And cats. Everybody loves cats.
            </p>
            <p className="mt-8 text-xl">
              When not coding, you can find me hiking somewhere, playing some
              videogame or making music with my guitar/bass/MIDI controller.
            </p>
            <p className="mt-8 text-xl">
              I&apos;m also a dreamer, I care for the environment and I&apos;ll always
              consider myself an idealist.
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
        </article>
      </section>

      {/* section 4: contacts */}
      <section
        id="bg-FFF9C2"
        className=" min-h-screen lg:flex-none lg:snap-start w-full px-2 lg:px-24 pt-32 md:py-32 flex flex-col lg:flex-row items-center gap-24 "
      >
        <div className="flex flex-col flex-1 ">
          <Heading
            content={"Want to reach out?"}
            additionalCSS={heading.className}
          />
          <p className="mt-8 mb-8 md:mb-0 text-2xl">
            Be my guest! Check out my Github and LinkedIn profiles, or click my
            contacts to copy them automatically. Woah, magic!
          </p>
          <p className="mt-8 mb-8 md:mb-0 text-2xl">
            {"( Protip: you can hit me up on Whatsapp or Telegram ;) )"}
          </p>
        </div>
        <Contacts />
      </section>
    </>
  );
}

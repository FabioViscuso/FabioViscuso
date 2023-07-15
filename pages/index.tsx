import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { SkillIcon } from "../components/homepage/SkillIcon";
import { CVDownloadButton } from "../components/homepage/CVDowloadButton";
import AnimatedRocket from "../components/homepage/AnimatedRocket";
import Heading from "../components/homepage/Heading";
import icons from "../components/ui/IconImport";
// the function that copies text and triggers the copy pop-up
import onCopyHandler from "../lib/useCopyHandler";
// needed for i18next functionality with SSG / SSR
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import translation function
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("page-home");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px 0px -100px",
    threshold: 0.3,
  };
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const html = document.querySelector("html")!;
        const sectionId = entry.target.id;
        document.body.className = `${sectionId}`;
        const colorValue = `#${sectionId.substring(3)}`;
        html.style.backgroundColor = colorValue;
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionElements = document.querySelectorAll("section");

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <Head>
        <meta name="description" content="homepage" />
      </Head>
      <main className="relative flex flex-col justify-center items-center h-full text-center lg:text-left">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        {/* section 1: photo and introduction */}
        <section
          id="bg-270825"
          className=" h-dynHeight transition-all duration-300 w-full px-2 py-2 md:py-10 flex flex-col items-center justify-between"
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
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h1 className="text-7xl md:text-9xl text-white [text-shadow:0px_0px_7px_#fff,0px_0px_10px_#fff,0px_0px_21px_#fff,0px_0px_42px_#FF1493,0px_0px_82px_#FF1493,0px_0px_92px_#FF1493,0px_0px_102px_#FF1493,0px_0px_151px_#FF1493]">
                  {t("greeting")}
                </h1>
              </div>
              <p
                className="mt-12 text-xl lg:text-4xl"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                {t("intro-line1")}
              </p>
              <p
                className="text-xl lg:text-4xl mt-0 md:mt-3"
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                {t("intro-line2")}
              </p>
              <p
                className="text-xl lg:text-4xl mt-0 md:mt-3"
                data-aos="fade-right"
                data-aos-delay="1400"
                data-aos-duration="1000"
              >
                {t("intro-line3")}
              </p>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6">
                <p
                  className="text-2xl lg:text-6xl underline mt-0 md:mt-3"
                  data-aos="fade-right"
                  data-aos-delay="1800"
                  data-aos-duration="1000"
                >
                  {t("intro-line4")}
                </p>
                <AnimatedRocket />
              </div>
              <p
                className="text-sm mt-10"
                data-aos="fade"
                data-aos-delay="3000"
                data-aos-duration="1000"
              >
                {t("intro-line5")}
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-10"
            data-aos="fade-up"
            data-aos-delay="3000"
            data-aos-duration="1000"
            data-aos-offset="-500"
          >
            <p className="text-sm sm:text-lg">{t("intro-cta")}</p>
            <a href="#bg-c7ffcc" title="sroll to section 2">
              <div className="scroll-downs">
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* section 2: what can I do */}
        <section
          id="bg-d5eeff"
          className="min-h-screen w-full px-2 lg:px-24 pt-32 md:py-32"
        >
          <article className="h-full flex flex-col justify-between items-center gap-24">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
              <div className="lg:flex-1">
                <Heading
                  content={t("section-2-heading")}
                  additionalCSS="[text-shadow:0px_0px_7px_#fff,0px_0px_10px_#fff,0px_0px_21px_#fff,0px_0px_42px_#15F4EE,0px_0px_82px_#15F4EE,0px_0px_92px_#15F4EE,0px_0px_102px_#15F4EE,0px_0px_151px_#15F4EE]"
                />
                <p className="my-8 text-lg" data-aos="fade-right">
                  {t("section-2-line1")}
                </p>
                <p className="mb-8 text-lg" data-aos="fade-right">
                  {t("section-2-line2")}
                </p>
                <p className="text-lg" data-aos="fade-right">
                  {t("section-2-line3")}
                  <span>
                    &nbsp;
                    <a
                      href="#bg-fff9ab"
                      className=" inline-block underline hover:scale-110 transition-transform"
                    >
                      {t("section-2-cta")}
                    </a>
                  </span>
                </p>
              </div>
              {/* skills */}
              <div
                className="lg:flex-1 flex flex-col items-center"
                data-aos="fade-left"
              >
                <p className="text-lg  text-center md:text-left ">
                  {t("section-2-skills")}
                </p>
                <div
                  className="flex gap-10 flex-wrap items-center justify-center md:justify-start mt-6 mb-10"
                  data-aos="fade-left"
                >
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
            <div
              className="flex gap-10 flex-col md:flex-row items-center md:items-stretch"
              data-aos="fade-up"
            >
              <p className="mt-2 md:mt-0 text-xl text-center md:text-left flex flex-col md:flex-row items-center">
                {t("section-2-cv")}
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
          id="bg-c7ffcc"
          className="min-h-screen w-full px-2 lg:px-24 pt-32 md:py-32 "
        >
          <article className="h-full flex flex-col lg:flex-row justify-center items-center gap-32 lg:gap-24">
            <div className="lg:flex-1">
              <Heading
                content={t("section-3-heading")}
                additionalCSS="[text-shadow:0px_0px_7px_#fff,0px_0px_10px_#fff,0px_0px_21px_#fff,0px_0px_42px_#00FF40,0px_0px_82px_#00FF40,0px_0px_92px_#00FF40,0px_0px_102px_#00FF40,0px_0px_151px_#00FF40]"
              />
              <p className="mt-8 text-lg" data-aos="fade-right">
                {t("section-3-p1")}
              </p>
              <p className="mt-8 text-lg" data-aos="fade-right">
                {t("section-3-p2")}
              </p>
              <p className="mt-8 text-lg" data-aos="fade-right">
                {t("section-3-p3")}
              </p>
            </div>
            <div
              className="relative h-full w-full lg:mt-0 lg:flex-1"
              data-aos="fade-left"
            >
              <Image
                src={icons.avatar}
                alt="my photo"
                priority
                placeholder="blur"
                className=" photo-common top-[20px] left-[30%] -translate-x-1/2 -translate-y-1/2 -rotate-6 "
                /* data-aos="fade-left" */
              />
              <Image
                src={icons.avatar2}
                alt="my photo2"
                priority
                placeholder="blur"
                className=" photo-common left-[50%] -translate-x-1/2 -translate-y-1/2"
                /* data-aos="fade-left" */
              />
              <Image
                src={icons.avatar3}
                alt="my photo2"
                priority
                placeholder="blur"
                className=" photo-common top-[-20px] left-[70%] -translate-x-1/2 -translate-y-1/2 rotate-6 "
                /* data-aos="fade-left" */
              />
            </div>
          </article>
        </section>

        {/* section 4: contacts */}
        <section
          id="bg-fffbab"
          className=" min-h-screen w-full px-2 lg:px-24 pt-32 md:py-32 flex flex-col lg:flex-row items-center gap-24"
        >
          <div className="flex flex-col flex-1 ">
            <Heading
              content={t("contacts-heading")}
              additionalCSS={
                "[text-shadow:0px_0px_7px_#fff,0px_0px_10px_#fff,0px_0px_21px_#fff,0px_0px_42px_#FFFF00,0px_0px_82px_#FFFF00,0px_0px_92px_#15F4EE,0px_0px_102px_#FFFF00,0px_0px_151px_#FFFF00] break-all lg:break-normal"
              }            />
            <p className="mt-8 mb-8 md:mb-0 text-2xl" data-aos="fade-right">
              {t("contacts-line1")}
            </p>
            <p className="mt-8 mb-8 md:mb-0 text-2xl" data-aos="fade-right">
              {t("contacts-line2")}
            </p>
          </div>
          <ul
            className="flex flex-col items-center gap-10 flex-wrap flex-1"
            data-aos="fade-left"
          >
            {/* Github button */}
            <li className="flex items-center">
              <a
                href="https://github.com/FabioViscuso"
                className="inline-block hover:scale-110 transition-transform"
                target="_blank"
              >
                <Image
                  src={icons.github}
                  width={60}
                  height={60}
                  alt={"github link"}
                  className="[filter:brightness(100)]"
                ></Image>
              </a>
            </li>
            {/* LinkedIn button */}
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/fabiocarmelomariaviscuso/"
                className="  inline-block hover:scale-110 transition-transform"
                target="_blank"
              >
                <Image
                  src={icons.linkedin}
                  width={60}
                  height={60}
                  alt={"linkedin link"}
                ></Image>
              </a>
            </li>
            {/* email */}
            <li className="relative z-20 flex flex-col sm:flex-row items-center text-2xl">
              <p
                id="emailAddressPopup"
                className="pointer-events-none absolute invisible top-6 opacity-0 right-0 text-lg text-center z-0 transition-all bg-[#1c1c1c99] rounded-md p-1"
              >
                {t("copied-mail")}
              </p>
              <span
                onClick={onCopyHandler}
                id={"emailAddress"}
                className=" text-xl md:text-3xl hover:scale-110 transition-transform leading-none drop-shadow-[0px_0px_2px_#fff]"
              >
                viscuso.fabio@outlook.it
              </span>
            </li>
            {/* phone number */}
            <li className="relative z-20 flex flex-col sm:flex-row items-center text-2xl">
              <p
                id="phoneNumberPopup"
                className="pointer-events-none absolute invisible top-6 opacity-0 right-0 text-lg text-center z-0 transition-all bg-[#1c1c1c99] rounded-md p-1"
              >
                {t("copied-phone")}
              </p>
              <span
                onClick={onCopyHandler}
                id="phoneNumber"
                className=" text-xl md:text-3xl hover:scale-110 transition-transform leading-none drop-shadow-[0px_0px_2px_#fff]"
              >
                +39 351 996 6861
              </span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

interface Props {
  locale: string;
}
export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-home"])),
    },
  };
}

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AOS from "aos";
import { SkillIcon } from "../components/homepage/SkillIcon";
import icons from "../components/ui/IconImport";
// the function that copies text and triggers the copy pop-up
import onCopyHandler from "../lib/useCopyHandler";
// needed for i18next functionality with SSG / SSR
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import translation function
import { useTranslation } from "next-i18next";
import { CVDownloadButton } from "../components/homepage/CVDowloadButton";

export default function Home() {
  const { t } = useTranslation("page-home");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust the threshold as needed
  };
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        document.body.className = `bg-common ${sectionId}`;
      }
    });

  };
  
  useEffect(()=> {
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionElements = document.querySelectorAll("section");
    
    sectionElements.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  })

  return (
    <>
      <Head>
        <meta name="description" content="homepage" />
      </Head>
      <main className="flex flex-col justify-center items-center h-full">
        {/* section 1: photo and introduction */}
        <section
          id="bg-1"
          className="min-h-screen w-full px-10 py-4 md:py-10 flex flex-col items-center justify-between"
        >
          {/* inner container */}
          <div>{/* I know it's bad to have this empty div. Don't judge me yet. */}</div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            {/* introduction container */}
            <div className="flex flex-col align-center justify-center lg:[flex-basis: 70%]">
              {/* emoji + h1 container */}
              <div
                className="flex flex-col md:flex-row gap-2 relative"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <span className="invisible md:visible absolute -top-5 -left-12 text-6xl self-center md:self-start drop-shadow-[0px_0px_2px_rgb(0,0,0)]">
                  👋
                </span>
                <h1 className="text-8xl md:text-8xl font-semibold drop-shadow-[0px_0px_1px_rgb(0,0,0)]">
                  {t("greeting")}
                </h1>
              </div>
              <p
                className="mt-12 text-2xl lg:text-4xl"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {t("intro-line1")}
              </p>
              <p
                className="text-2xl lg:text-4xl mt-3"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                {t("intro-line2")}
              </p>
              <p
                className="text-2xl lg:text-4xl mt-3"
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                {t("intro-line3")}
              </p>
              <div className="flex items-center gap-6">
                <p
                  className="text-2xl underline lg:text-6xl mt-3 drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  {t("intro-line4")}
                </p>
                <p 
                  className="text-6xl drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
                  data-aos="fade-up-right"
                  data-aos-delay="1000"
                >
                  🚀
                </p>
              </div>
              <p
                className="text-lg lg:text-lg mt-10"
                data-aos="fade"
                data-aos-delay="3000"
                data-aos-duration="1000"
              >
                {t('intro-line5')}
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-10"
            data-aos="fade-up"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-offset="-500"
          >
            <p className="text-lg">{t("intro-cta")}</p>
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF: section 1: photo and introduction */}
        {/* second section: what can I do */}
        <section
          id="bg-2"
          className="min-h-screen w-full px-10 pt-32 md:py-10 flex flex-col justify-between items-center"
        >
          <article className="my-auto max-w-4xl">
            <h3
              className="text-7xl font-semibold drop-shadow-[0px_0px_1px_rgb(0,0,0)] leading-none "
              data-aos="fade-up"
            >
              {t("section-2-heading")}
            </h3>
            <p className="mt-8 mb-8 text-xl" data-aos="fade-up">
              {t("section-2-instructions")}
            </p>
            {/* Frontend skills */}
            <p className="text-xl" data-aos="fade-up">
              {t("section-2-skills")}
            </p>
            <div
              className="flex gap-10 flex-wrap items-center justify-center md:justify-start mt-6 mb-10"
              data-aos="fade-up"
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
            {/* the CV part */}
            <div
              className="flex gap-10 flex-col md:flex-row items-center md:items-stretch"
              data-aos="fade-up"
            >
              <p className="mt-2 md:mt-0 text-xl flex flex-col md:flex-row items-center">
                {t("section-2-cv")}
              </p>
              <div className="flex gap-10 items-center">
                <CVDownloadButton src={icons.flagit} lang={"italian"} />
                <CVDownloadButton src={icons.flaguk} lang={"english"} />
              </div>
            </div>
          </article>
        </section>
        {/* END OF section 2: what can I do */}
        {/* section 3: who am I */}
        <section
          id="bg-3"
          className="min-h-screen w-full px-10 pt-32 md:py-10 flex flex-col justify-between items-center py-20 bg-dark"
        >
          <article className="my-auto max-w-4xl">
            <h3
              className="text-7xl font-semibold drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
              data-aos="fade-up"
            >
              {t("section-3-heading")}
            </h3>
            <p className="mt-8 text-xl max-w-4xl" data-aos="fade-up">
              {t("section-3-p1")}
            </p>
            <p className="mt-2 text-xl max-w-4xl" data-aos="fade-up">
              {t("section-3-p2")}
            </p>
            <p className="mt-2 text-xl max-w-4xl" data-aos="fade-up">
              {t("section-3-p3")}{" "}
              <span className="text-3xl">⛺ | 🍺 | 🎧 | 🎮 | 🎸 | 📺</span>
            </p>
          </article>
{/*       <div className="lg:flex-1 flex flex-col justify-center gap-10 lg:[flex-basis: 30%]">
              <Image
                src={icons.avatar}
                alt="my photo"
                priority
                placeholder="blur"
                className=" self-start h-[14rem] w-[14rem] sm:h-[16rem] sm:w-[16rem] md:h-[20rem] md:w-[20rem] rounded-full img-border bg-clip-border bg-gradient-to-br from-slate-900 to-slate-900  drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
                data-aos="fade-left"
              />
              <Image
                src={icons.avatar2}
                alt="my photo"
                priority
                placeholder="blur"
                className=" self-end h-[14rem] w-[14rem] sm:h-[16rem] sm:w-[16rem] md:h-[20rem] md:w-[20rem] rounded-full img-border bg-clip-border bg-gradient-to-br from-slate-900 to-slate-900  drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
                data-aos="fade-left"
              />
            </div> */}
        </section>
        {/* section 4: contacts */}
        <section
          id="bg-4"
          className="min-h-screen w-full flex flex-col md:flex-row gap-10 justify-center items-center py-20 px-10 md:py-0"
        >
          <div className="flex flex-col md:w-[50%] max-w-4xl">
            <h3
              className="text-7xl font-semibold drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
              data-aos="fade-up"
            >
              {t("contacts-heading")}
            </h3>
            <p className="mt-8 mb-8 md:mb-0 text-2xl" data-aos="fade-up">
              {t("contacts-p")}
            </p>
          </div>
          <ul
            className="flex flex-col items-center gap-10 flex-wrap"
            data-aos="fade-up"
          >
            {/* Github button */}
            <li className="flex items-center">
              <a
                href="https://github.com/FabioViscuso"
                className="cursor-none inline-block hover:scale-110 transition-transform"
                target="_blank"
              >
                <Image
                  src={icons.github}
                  width={60}
                  height={60}
                  alt={"github link"}
                ></Image>
              </a>
            </li>
            {/* LinkedIn button */}
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/fabiocarmelomariaviscuso/"
                className="cursor-none inline-block [filter:brightness(0.15)] hover:scale-110 transition-transform"
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
                className="hover:scale-110 transition-transform leading-none  drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
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
                className="-mt-3 hover:scale-110 transition-transform leading-none drop-shadow-[0px_0px_1px_rgb(0,0,0)]"
              >
                +39 351 996 6861
              </span>
            </li>
          </ul>
        </section>
        {/* END OF section 4: contacts */}
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-home"])),
    },
  };
}

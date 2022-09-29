import Image from 'next/image';
import React from 'react';

// import images
import avatar from '../public/images/me.jpg';
import html5 from '../public/icons/skills/html5.png';
import css3 from '../public/icons/skills/css3.png';
import javascript from '../public/icons/skills/javascript.png';
import typescript from '../public/icons/skills/typescript.png';
import react from '../public/icons/skills/react.png';
import next from '../public/icons/skills/nextjs.png';
import bootstrap from '../public/icons/skills/bootstrap.png';
import tailwind from '../public/icons/skills/tailwindcss.png';
import nodejs from '../public/icons/skills/nodejs.png';
import express from '../public/icons/skills/expressjs.png';
import sql from '../public/icons/skills/sql.png';
import mongodb from '../public/icons/skills/mongodb.png';
import prisma from '../public/icons/skills/prisma.png';
import git from '../public/icons/skills/git.png';
import vscode from '../public/icons/skills/vscode.png';
import flagit from '../public/icons/flag-it.png';
import flaguk from '../public/icons/flag-gb.png';
// the function that copies text and triggers the copy pop-up
import onCopyHandler from '../lib/useCopyHandler';
// needed for i18next functionality with SSG / SSR
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import translation function
import { useTranslation, Trans } from 'next-i18next';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('page-home')

  return (
    <>
      <Head>
        <meta name="description" content="homepage" />
      </Head>
      <main className='flex flex-col justify-center items-center h-full'>
        {/* section 1: photo and introduction */}
        <section className='min-h-[calc(100vh-6rem)] py-24 md:pt-0 w-full flex flex-col items-center'>
          {/* inner container */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 px-2 my-auto'>
            <Image
              src={avatar}
              width={300} height={300}
              alt='my photo'
              priority
              placeholder='blur'
              className='rounded-full img-border bg-clip-border bg-gradient-to-br from-sky-500 to-emerald-300'
            />
            {/* introduction container */}
            <div className='flex flex-col items-center'>
              {/* emoji + h1 container */}
              <div className='flex flex-col md:flex-row items-center gap-2'>
                <span className='text-4xl self-center md:self-start'>👋</span>
                <h1 className='text-4xl lg:text-6xl font-semibold main-text-gradient'>
                  {t('greeting')}
                </h1>
              </div>
              <h2 className='text-2xl lg:text-3xl text-center mt-3'>
                {t('intro-line1')}
              </h2>
              <h2 className='text-2xl lg:text-3xl text-center mt-3'>
                {t('intro-line2')}
              </h2>
              <h2 className='text-2xl lg:text-3xl text-center mt-3'>
                {t('intro-line3')}
              </h2>
              <h2 className='text-2xl lg:text-3xl text-center mt-3'>
                {t('intro-line4')}
              </h2>
            </div>
          </div>
        </section>
        <div className='separator--d-to-l'></div>
        {/* END OF: section 1: photo and introduction */}
        {/* second section: what can I do */}
        <section className='min-h-screen w-full flex flex-col justify-between items-center h-full bg-[#eee] text-[#1c1c1c] py-20 md:py-0'>
          <article className='my-auto px-2  max-w-4xl'>
            <h3 className='text-6xl font-semibold main-text-gradient drop-shadow-[0px_0px_1px_rgb(0,0,0)] leading-relaxed'>
              {t('section-2-heading')}
            </h3>
            <p className='mb-8'> {t('section-2-instructions')}</p>
            {/* Frontend skills */}
            <h4 className='text-3xl'>Frontend skills</h4>
            <div className='flex gap-10 flex-wrap items-center justify-center md:justify-start mt-6 mb-10'>
              {/* HTML5 */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={html5} width={60} height={60} alt="html5" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  HTML5
                </p>
              </div>
              {/* CSS3 */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={css3} width={60} height={60} alt="css3" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  CSS3
                </p>
              </div>
              {/* JavaScript */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={javascript} width={60} height={60} alt="javascript" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  JavaScript ES6+
                </p>
              </div>
              {/* React */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={react} width={60} height={60} alt="react" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  React
                </p>
              </div>
              {/* Next */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={next} width={60} height={60} alt="next" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Next.js
                </p>
              </div>
              {/* Bootstrap */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={bootstrap} width={60} height={60} alt="bootstrap" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Bootstrap 4/5
                </p>
              </div>
              {/* Tailwind */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={tailwind} width={60} height={60} alt="tailwind" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  TailwindCSS
                </p>
              </div>
            </div>

            {/* Backend skills */}
            <h4 className='text-3xl'>Backend skills</h4>
            <div className='flex gap-10 flex-wrap items-center justify-center md:justify-start mt-6 mb-10'>
              {/* Node */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={nodejs} width={60} height={60} alt="nodejs" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Node.js
                </p>
              </div>
              {/* Express */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={express} width={60} height={60} alt="expressjs" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Express 4.17+
                </p>
              </div>
              {/* SQL */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={sql} width={60} height={60} alt="sql" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  SQL (PostgreSQL)
                </p>
              </div>
              {/* MongoDB */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={mongodb} width={60} height={60} alt="mongodb" className='rounded-full bg-green-200' />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  MongoDB
                </p>
              </div>
              {/* Prisma */}
              <div className='relative skills-icon cursor-pointer'>
                <Image src={prisma} width={60} height={60} alt="prisma" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Prisma ORM
                </p>
              </div>
            </div>

            {/* Other skills */}
            <h4 className='text-3xl'>And also...</h4>
            <div className='flex gap-10 flex-wrap items-center justify-center md:justify-start mt-6 mb-10'>
              <div className='relative skills-icon cursor-pointer'>
                <Image src={git} width={60} height={60} alt="git" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Git and GitHub
                </p>
              </div>
              <div className='relative skills-icon cursor-pointer'>
                <Image src={vscode} width={60} height={60} alt="visual studio code" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  Visual Studio Code
                </p>
              </div>
              <div className='relative skills-icon cursor-pointer'>
                <Image src={typescript} width={60} height={60} alt="typecript" />
                <p className='skills-icon-popup bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999]  backdrop-blur-sm text-[#1c1c1c] text-lg rounded-md p-2'>
                  TypeScript
                </p>
              </div>
            </div>
            {/* the CV part */}
            <div className='flex gap-10 items-center flex-col md:flex-row'>
              <p className='mt-2 md:mt-0 text-xl flex flex-col md:flex-row items-center'>
                {t('section-2-cv')}
                <span className='rotate-90 md:rotate-0'>&nbsp;👉</span>
              </p >
              <a
                href={`./FabioViscuso-Europass-IT.pdf`}
                download={'FabioViscuso-Europass-IT'}
                className='inline-block hover:border-emerald-400 border-transparent border-b-4 transition-all'
              >
                <Image src={flagit} width={60} height={60} alt={'select italian cv'} />
              </a>
              <a
                href={`./FabioViscuso-Europass-EN.pdf`}
                download={'FabioViscuso-Europass-EN'}
                className='inline-block hover:border-emerald-400 border-transparent border-b-4 transition-all'
              >
                <Image src={flaguk} width={60} height={60} alt={'select english cv'} />
              </a>
            </div>
          </article>
        </section>
        <div className='separator--l-to-d -mt-1'></div>
        {/* END OF section 2: what can I do */}
        {/* section 3: who am I */}
        <section className='min-h-screen w-full px-2 flex flex-col justify-between items-center py-20'>
          <article className='my-auto max-w-4xl'>
            <h3 className='text-6xl font-semibold main-text-gradient leading-relaxed'>
              {t('section-3-heading')}
            </h3>
            <p className='mt-4 text-xl max-w-4xl'>
              {t('section-3-p1')}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {t('section-3-p2')}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {t('section-3-p3')} <span className='text-3xl'>⛺ | 🍺 | 🎧 | 🎮 | 🎸 | 📺</span>
            </p>

            <h3 className='mt-10 text-4xl font-semibold main-text-gradient'>
              {t('contacts-heading')}
            </h3>
            <p className='mt-5 text-xl'>
              {t('contacts-p')}
            </p>
            <ul className='mt-8 flex flex-col md:flex-row items-center gap-10 flex-wrap'>
              {/* Github button */}
              <li className='flex items-center'>
                <a href="https://github.com/FabioViscuso"
                  className='inline-block rounded-full icon-shadow'
                >
                  <Image src={'/icons/github.png'} width={50} height={50} alt={'github link'}></Image>
                </a>
              </li>
              {/* LinkedIn button */}
              <li className='flex items-center'>
                <a href="https://www.linkedin.com/in/fabiocarmelomariaviscuso/"
                  className='inline-block rounded-md icon-shadow'
                >
                  <Image src={'/icons/linkedin.png'} width={50} height={50} alt={'github link'}></Image>
                </a>
              </li>
              {/* email */}
              <li className='relative z-20 flex flex-col sm:flex-row items-center text-2xl'>
                <a href='mailto:viscuso.fabio@outlook.it' className={'inline-block rounded-md icon-shadow'}>
                  <Image
                    src={'/icons/mail.png'}
                    width={50}
                    height={50}
                    alt={'github link'}
                    className={'bg-white rounded-md'}
                  />
                </a>
                <p id='emailAddressPopup' className='pointer-events-none absolute invisible top-6 opacity-0 right-0 text-lg z-0 transition-all bg-[#1c1c1c99] rounded-md p-1'>
                  {t('copied-mail')}
                </p>
                <span
                  onClick={onCopyHandler}
                  id={'emailAddress'}
                  className='ml-2 cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-teal-400 to-emerald-400'
                >
                  viscuso.fabio@outlook.it
                </span>
              </li>
              {/* phone number */}
              <li className='relative z-20 flex flex-col sm:flex-row items-center text-2xl'>
                <div className={'inline-block rounded-md icon-shadow hover:cursor-pointer'}>
                  <Image
                    src={'/icons/smartphone.png'}
                    width={50} height={50}
                    alt={'github link'}
                    className={'bg-white rounded-md'}
                  />
                </div>
                <p id='phoneNumberPopup' className='pointer-events-none absolute invisible top-6 opacity-0 right-0 text-lg z-0 transition-all bg-[#1c1c1c99] rounded-md p-1'>
                  {t('copied-phone')}
                </p>
                <span
                  onClick={onCopyHandler}
                  id='phoneNumber'
                  className='ml-2 hover:cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-teal-400 to-emerald-400'>
                  +39 351 996 6861
                </span>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'page-home']))
    }
  }
}

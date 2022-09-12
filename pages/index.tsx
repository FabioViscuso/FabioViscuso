/* eslint-disable react/no-unknown-property */
// ^^^ TEMPORARY FIX: KNOWN ISSUE WITH <a download></a> attribute
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

// the function that copies text and triggers the copy pop-up
import onCopyHandler from '../lib/useCopyHandler';
// needed for i18next functionality with SSG / SSR
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import translation function
import { useTranslation, Trans } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Fabio Viscuso - Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center h-full'>
        {/* section 1: photo and introduction */}
        <section className='min-h-screen w-full flex flex-col items-center pt-10'>
          {/* inner container */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 px-2 my-auto'>
            <Image
              src={'/images/me.jpg'}
              width={200} height={200}
              alt='my photo'
              className='rounded-full img-border bg-clip-border bg-gradient-to-br from-sky-500 to-emerald-300'
            />
            {/* introduction container */}
            <div className='flex flex-col items-center'>
              {/* emoji + h1 container */}
              <div className='flex flex-col md:flex-row items-center gap-2'>
                <span className='text-4xl self-start'>👋</span>
                <h1 className='text-4xl lg:text-6xl font-semibold main-text-gradient'>
                  {t('greeting')}
                </h1>
              </div>
              <h2 className='text-2xl lg:text-3xl mt-3'>
                {t('intro-line1')}
              </h2>
              <h2 className='text-2xl lg:text-3xl mt-3'>
                {t('intro-line2')}
              </h2>
              <h2 className='text-2xl lg:text-3xl mt-3'>
                {t('intro-line3')}
              </h2>
              <h2 className='text-2xl lg:text-3xl mt-3'>
                {t('intro-line4')}
              </h2>
            </div>
          </div>
          <div className='separator--d-to-l'></div>
        </section>
        {/* END OF: section 1: photo and introduction */}
        {/* second section: what can I do */}
        <section className='min-h-screen w-full flex flex-col justify-between items-center h-full bg-[#eee] text-[#1c1c1c] pt-20'>
          <article className='my-auto px-2  max-w-4xl'>
            <h3 className='text-5xl font-semibold main-text-gradient drop-shadow-[0px_0px_1px_rgb(0,0,0)] leading-relaxed'>
              {t('section-2-heading')}
            </h3>
            <p className='mt-4 text-xl'>
              {t('section-2-p1')}
            </p>
            <p className='mt-2 text-xl'>
              {t('section-2-p2')}
            </p>
            {/* the CV part */}
            <div className='flex gap-10 items-center flex-col md:flex-row'>
              <p className='mt-2 md:mt-0 text-xl flex flex-col md:flex-row items-center'>
                {t('section-2-p3')}
                <span className='rotate-90 md:rotate-0'>&nbsp;👉</span>
              </p >
              <a
                href={`./FabioViscuso-Europass-IT.pdf`}
                download={'FabioViscuso-Europass-IT'}
                className='inline-block hover:border-emerald-400 border-transparent border-b-4 transition-all'
              >
                <Image src={'/icons/flag-it.png'} width={70} height={70} alt={'select italian cv'} />
              </a>
              <a
                href={`./FabioViscuso-Europass-EN.pdf`}
                download={'FabioViscuso-Europass-EN'}
                className='inline-block hover:border-emerald-400 border-transparent border-b-4 transition-all'
              >
                <Image src={'/icons/flag-gb.png'} width={70} height={70} alt={'select english cv'} />
              </a>
            </div>
          </article>
          <div className='separator--l-to-d'></div>
        </section>
        {/* END OF section 2: what can I do */}
        {/* section 3: who am I */}
        <section className='min-h-screen w-full px-2 flex flex-col justify-between items-center py-20'>
          <article className='my-auto max-w-4xl'>
            <h3 className='text-5xl font-semibold main-text-gradient leading-relaxed'>
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

            <h3 className='mt-10 text-2xl font-semibold main-text-gradient'>
              {t('contacts-heading')}
            </h3>
            <p className='mt-3 text-xl'>
              {t('contacts-p')}
            </p>
            <ul className='mt-6 flex flex-col md:flex-row items-center gap-10 flex-wrap'>
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
                <a className={'inline-block rounded-md icon-shadow'}>
                  <Image
                    src={'/icons/smartphone.png'}
                    width={50} height={50}
                    alt={'github link'}
                    className={'bg-white rounded-md'}
                  />
                </a>
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
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

/* eslint-disable react/no-unknown-property */
// ^^^ TEMPORARY FIX: KNOWN ISSUE WITH <a download></a> attribute
import Head from 'next/head'
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const onCopyHandler = async (e: any) => {
    const targetID = e.target.id
    const content = document.getElementById(`${targetID}`).innerHTML
    const trimmedContent = content.replace(/\s+/g, '').trim()
    await navigator.clipboard.writeText(trimmedContent);
    document.getElementById(`${targetID}Popup`).style.visibility = 'visible'
    document.getElementById(`${targetID}Popup`).style.top = '-20px'
    document.getElementById(`${targetID}Popup`).style.opacity = '1'

    setTimeout(() => {
      document.getElementById(`${targetID}Popup`).style.top = '24px'
      document.getElementById(`${targetID}Popup`).style.opacity = '0'
      document.getElementById(`${targetID}Popup`).style.visibility = 'hidden'
    }, 3000);
  }
  return (
    <>
      <Head>
        <title>Fabio Viscuso - Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center gap-10 h-full py-10'>
        <section className='flex flex-col md:flex-row items-center md:gap-10'>
          <Image
            src={'/images/me.jpg'}
            width={200} height={200}
            alt='my photo'
            className='rounded-full img-border bg-clip-border bg-gradient-to-br from-sky-500 to-emerald-300'
          />
          <div className='flex flex-col items-center'>
            <div className='flex flex-col md:flex-row items-center gap-2'>
              <span className='text-4xl self-start'>👋</span>
              <h1 className='text-4xl lg:text-6xl font-semibold main-text-gradient'>
                Hello! I&apos;m Fabio!
              </h1>

            </div>
            <h2 className='text-2xl lg:text-3xl mt-3'>
              I&apos;m a full-stack developer,
            </h2>
            <h2 className='text-2xl lg:text-3xl mt-3'>
              I like to build awesome stuff,
            </h2>
            <h2 className='text-2xl lg:text-3xl mt-3'>
              and we could build it together! 🚀
            </h2>
          </div>
        </section>

        <section className='flex flex-col justify-center gap-10 h-full'>
          <article>
            <h3 className='text-2xl font-semibold main-text-gradient'>What can I do?</h3>
            <p className='mt-2 text-xl max-w-4xl'>
              {"I've studied a range of web develoment technologies, starting from HTML5 and CSS3 and vanilla JS with some of the latest standards like ES6/7."}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {"Then I moved to TypeScript, React (+ Redux) and Node.js. In the meantime I've studied some SQL (PostgreSQL) and NOSQL (MongoDB) database technologies."}
            </p>
            {/* the CV part */}
            <div className='flex gap-10 items-center flex-col md:flex-row'>
              <p className='mt-2 md:mt-0 text-xl max-w-4xl flex flex-col md:flex-row items-center'>
                Need more info? You can download my CV, pick a language
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

          <article>
            <h3 className='text-2xl font-semibold main-text-gradient'>
              But really, who am I?
            </h3>
            <p className='mt-2 text-xl max-w-4xl'>
              {"I'm an Italian guy in his early 30s. I'm an introvert, but I fancy myself some social gatherings once in while! Especially with a beer in my hand and some lovely live music in the background!"}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {"Professionally speaking, I've eventually found my way in the web development in 2019, starting as a self-taught before landing my first 1-year collaboration."}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {"My hobbies? Here you go:  ⛺ | 🍺 | 🎧 | 🎮 | 🎸 | 📺 "}
            </p>
          </article>

          <article>
            <h3 className='text-2xl font-semibold main-text-gradient'>Want to reach out?</h3>
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
                <p id='emailAddressPopup' className='absolute invisible top-6 opacity-0 right-0 text-lg z-0 transition-all'>
                  Email Copied!
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
                <p id='phoneNumberPopup' className='absolute invisible top-6 opacity-0 right-0 text-lg z-0 transition-all'>Phone number Copied!</p>
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

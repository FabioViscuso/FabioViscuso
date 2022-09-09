/* eslint-disable react/no-unknown-property */
// ^^^ TEMPORARY FIX: KNOWN ISSUE WITH <a download></a> attribute
import Head from 'next/head'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const router = useRouter()
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
              <h1 className='text-6xl font-semibold main-text-gradient'>
                Hello! I&apos;m Fabio!
              </h1>

            </div>
            <h2 className='text-2xl mt-3'>
              I&apos;m a full-stack developer,
            </h2>
            <h2 className='text-2xl mt-3'>
              I like to build awesome stuff,
            </h2>
            <h2 className='text-2xl mt-3'>
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
              {"Then I moved to TypeScript, React (+ Redux) and Node.js. In the meantime I've studied some SQL (PostgreSQL) and NOSQL (MongoDB) database technologies"}
            </p>
            <a href={`./CV-FabioViscuso_ITA.pdf`} download={'fabioviscuso_cv_ita'}>Download the latest CV</a>
            <a href={`./CV-FabioViscuso_ITA.pdf`} download={'fabioviscuso_cv_ita'}>Download the latest CV</a>
          </article>

          <article>
            <h3 className='text-2xl font-semibold main-text-gradient'>
              But really, who am I?
            </h3>
            <p className='mt-2 text-xl max-w-4xl'>
              {"I'm an Italian guy in his early 30s. I'm an introvert, but I fancy myself some social gatherings once in while! Especially with a beer in my hand and some lovely live music in the background!"}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {"Professionally speaking, I've eventually found my way in the web development in 2019, starting as a self-taught before landing my first 1-year collaboration"}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {"My hobbies? Here you go:  ⛺ | 🍺 | 🎧 | 🎮 | 🎸 | 📺 "}
            </p>
          </article>

          <article>
            <h3 className='text-2xl font-semibold main-text-gradient'>Want to reach out?</h3>
            <ul className='mt-6 flex flex-col md:flex-row items-center gap-10 flex-wrap'>
              <li className='flex items-center'>
                <a href="https://github.com/FabioViscuso"
                  className='inline-block rounded-full icon-shadow'
                >
                  <Image src={'/icons/github.png'} width={50} height={50} alt={'github link'}></Image>
                </a>
              </li>
              <li className='flex items-center'>
                <a href="https://www.linkedin.com/in/fabiocarmelomariaviscuso/"
                  className='inline-block rounded-md icon-shadow'
                >
                  <Image src={'/icons/linkedin.png'} width={50} height={50} alt={'github link'}></Image>
                </a>
              </li>
              <li className='flex flex-col sm:flex-row items-center text-2xl'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400'></div>
                &nbsp; Email:
                <a href='mailto:viscuso.fabio@outlook.it'
                  className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-teal-400 to-emerald-400'>
                  &nbsp; viscuso.fabio@outlook.it
                </a>
              </li>
              <li className='flex flex-col sm:flex-row items-center text-2xl'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400'></div>
                &nbsp; Phone: <span>+39 351 996 6861</span>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}



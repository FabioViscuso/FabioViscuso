import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabio Viscuso - Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center gap-10 h-full py-10'>
        <section className=''>
          <Image
            src={'/images/me.jpg'}
            width={200} height={200}
            alt='my photo'
            className='rounded-full img-border bg-clip-border bg-gradient-to-br from-teal-400 to-emerald-400' />
          <h1 className='text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-emerald-400'>
            Hello! I&apos;m Fabio!
          </h1>
          <h2 className='text-2xl mt-3'>
            I&apos;m a passionate full-stack developer, and my journey starts from here!
          </h2>
        </section>

        <section className='flex flex-col justify-center gap-10 h-full'>
          <article>
            <h3 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-emerald-400'>What can I do?</h3>
            <p className='mt-2 text-xl max-w-4xl'>
              {"I've studied a range of web develoment technologies, starting from HTML5 and CSS3 and vanilla JS with some of the latest standards like ES6/7."}
            </p>
            <p className='mt-2 text-xl max-w-4xl'>
              {"Then I moved to TypeScript, React (+ Redux) and Node.js. In the meantime I've studied some SQL (PostgreSQL) and NOSQL (MongoDB) database technologies"}
            </p>
          </article>
          <article>
            <h3 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-emerald-400'>Want to reach out?</h3>
            <ul className='mt-2'>
              <li className='flex items-center'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400'></div>
                <a href="https://github.com/FabioViscuso">
                  &nbsp; Github
                </a>
              </li>
              <li className='flex items-center'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400'></div>
                <a href="https://www.linkedin.com/in/fabiocarmelomariaviscuso/">
                  &nbsp; Linkedin
                </a>
              </li>
              <li className='flex items-center'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400'></div>
                &nbsp; My email: <a href='mailto:viscuso.fabio@outlook.it'>viscuso.fabio@outlook.it</a>
              </li>
              <li className='flex items-center'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400'></div>
                &nbsp; Phone: +39 3464922442
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}



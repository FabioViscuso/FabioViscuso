import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabio Viscuso - Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <section className=''>
          <Image
            src={'/images/me.jpg'}
            width={200} height={200}
            alt='my photo'
            className='rounded-full border-transparent border-[8px] bg-clip-border bg-gradient-to-br from-teal-400 to-emerald-400' />
          <h1 className='text-xl'>
            <span className='text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-emerald-400'>Hello!</span>
            <br />
            I&apos;m a passionate full-stack developer and I&apos;m learning Next.js!
          </h1>
        </section>

        <section className=''>
          <h2 className=''>Placeholder</h2>
        </section>
      </div>
    </>
  )
}



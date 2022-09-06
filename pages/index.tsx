import Head from 'next/head'
import { MongoClient } from 'mongodb'

export default function Home() {
  return (
    <>
      <Head>
        <title>That&apos;s me!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <section className=''>
          <p>Hello! I&apos;m a passionate full-stack developer and I&apos;m learning Next.js!</p>
        </section>

        <section className=''>
          <h2 className=''>Placeholder</h2>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://fabio:geronimo@cluster0.potbyzj.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const collection = db.collection('meetups')
  const meetups = await collection.find().toArray();
  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 60
  }
}

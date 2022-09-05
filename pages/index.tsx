import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import Date from '../components/Date'
import { getSortedPostsData } from '../lib/posts'
import classesUtils from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={classesUtils.headingMd}>
        <p>Hello! I&apos;m a passionate full-stack developer and I&apos;m learning Next.js!</p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${classesUtils.headingMd} ${classesUtils.padding1px}`}>
        <h2 className={classesUtils.headingLg}>Blog</h2>
        <ul className={classesUtils.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={classesUtils.listItem} key={id}>
              <Link href={`posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={classesUtils.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}

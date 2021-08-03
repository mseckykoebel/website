import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          CS, AI at{" "}
          <Link href="https://northwestern.edu">
            <a target="_blank" rel="noreferrer">
              Northwestern
            </a>
          </Link>
          . Founder of{" "}
          <Link href="https://raiso.org">
            <a target="_blank" rel="noreferrer">
              RAISO
            </a>
          </Link>
          , an AI organization focused on safety and education. Software
          engineering intern at{" "}
          <Link href="https://www.automatemedical.com/">
            <a target="_blank" rel="noreferrer">
              Automate medical
            </a>
          </Link>
          , an{" "}
          <Link href="http://www.apolloprojects.com/">
            <a target="_blank" rel="noreferrer">
              apollo
            </a>
          </Link>
          -backed startup building healthcare interoperability tools.
        </p>
        <p>
          Most of my code can be found{" "}
          <Link href="https://github.com/mseckykoebel">
            <a target="_blank" rel="noreferrer">here</a>
          </Link>
          .
        </p>
      </section>
      {/* <section>
        <hr className={`${utilStyles.divider} ${utilStyles.padding1px}`} />
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/*
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Algorithms</h2>
        <p>todo...</p>
      </section>
       */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <p>todo</p>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

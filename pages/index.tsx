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
        <script
          defer
          data-domain="masonseckykoebel.vercel.app"
          src="https://plausible.io/js/plausible.js"
        ></script>
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
          , an AI organization focused on safety and education. Former intern and incoming Software
          engineer at{" "}
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
          -backed startup building healthcare interoperability APIs.
        </p>
        <p>
          Most of my code and projects can be found{" "}
          <Link href="https://github.com/mseckykoebel">
            <a target="_blank" rel="noreferrer">
              here
            </a>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>News</h2>
        <ul className={utilStyles.list}>
          <li>
            <Link href="https://www.mccormick.northwestern.edu/artificial-intelligence/inside-our-program/stories/2021/raiso-student-group-explores-the-responsibility-and-safety-of-ai.html">
              <a target="_blank" rel="noreferrer">
                RAISO Student Group Explores the Responsibility and Safety of AI
              </a>
            </Link>
          </li>
          <br />
          <li>
            <Link href="https://podcasts.apple.com/us/podcast/responsible-ai-raiso-bijal-mehta-mason-secky-koebel/id1539792238?i=1000518434684">
              <a target="_blank" rel="noreferrer">
                Responsible AI and RAISO with Bijal Mehta and Mason Secky-Koebel
                | AI with Alex
              </a>
            </Link>
          </li>
          <br />
          <li>
            <Link href="https://dailynorthwestern.com/2021/04/02/campus/new-student-group-spreads-awareness-of-artificial-intelligence-ethics-big-data-injustices/">
              <a target="_blank" rel="noreferrer">
                New student group spreads awareness of artificial intelligence
                ethics, big data injustices
              </a>
            </Link>
          </li>
        </ul>
      </section>
      {/*
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Algorithms</h2>
        <p>todo...</p>
      </section>
       */}
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

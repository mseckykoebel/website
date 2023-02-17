import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script
          defer
          data-domain="masonseckykoebel.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTopSm}`}>
        <p>
          I graduated from{" "}
          <Link
            href="https://northwestern.edu"
            target="_blank"
            rel="noreferrer"
          >
            Northwestern
          </Link>
          . While there, I founded{" "}
          <Link href="https://raiso.org" target="_blank" rel="noreferrer">
            Raiso
          </Link>
          , an AI organization focused on safety and education. I was intern #1,
          and a founding engineer at{" "}
          <Link href="https://www.flexpa.com/" target="_blank" rel="noreferrer">
            Flexpa
          </Link>
          , an{" "}
          <Link href="https://a16z.com/" target="_blank" rel="noreferrer">
            a16z
          </Link>{" "}
          and{" "}
          <Link
            href="http://www.apolloprojects.com/"
            target="_blank"
            rel="noreferrer"
          >
            apollo
          </Link>
          -backed startup building plaid for healthcare claims data. We were
          recently named one of the most{" "}
          <Link
            href="https://www.businessinsider.com/21-most-promising-health-tech-startups-2022-according-to-vcs-2022-8/"
            target="_blank"
            rel="noreferrer"
          >
            promising healthcare startups
          </Link>
          . I left Flexpa to co-found{" "}
          <Link
            href="https://www.jupiter-dx.com/pre-seed-announcement/"
            target="_blank"
            rel="noreferrer"
          >
            JupiterDX
          </Link>
          , where we're building a platform for Long COVID care.
        </p>
        <p>
          Most of my code and projects can be found{" "}
          <Link
            href="https://github.com/mseckykoebel"
            target="_blank"
            rel="noreferrer"
          >
            here
          </Link>
          .
        </p>
      </section>
      {/* <section>
        <hr className={`${utilStyles.divider} ${utilStyles.padding1px}`} />
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTopLg}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Be notified</h2>
        <div>
          <div className={utilStyles.emailTitleContainer}>
            <label htmlFor="email" className={utilStyles.emailLabel}>
              Email (optional)
            </label>
          </div>
          <div className={utilStyles.emailInputContainer}>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
              aria-describedby="email-optional"
            />
          </div>
        </div>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.marginTopLg}`}>
        <h2 className={utilStyles.headingLg}>News</h2>
        <ul className={utilStyles.list}>
          <li>
            <Link
              href="https://www.bizjournals.com/chicago/inno/stories/fundings/2023/01/24/health-tech-startup-jupiterdx-preseed.html"
              target="_blank"
              rel="noreferrer"
            >
              Health tech startup JupiterDX to launch platform for long Covid
              care
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://www.axios.com/pro/health-tech-deals/2022/06/16/flexpa-raises-9m-seed-health-data-sharing"
              target="_blank"
              rel="noreferrer"
            >
              Flexpa raises $8.5M to build new infrastructure for patient access
              APIs
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://www.mccormick.northwestern.edu/artificial-intelligence/inside-our-program/stories/2021/raiso-student-group-explores-the-responsibility-and-safety-of-ai.html"
              target="_blank"
              rel="noreferrer"
            >
              RAISO Student Group Explores the Responsibility and Safety of AI
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://podcasts.apple.com/us/podcast/responsible-ai-raiso-bijal-mehta-mason-secky-koebel/id1539792238?i=1000518434684"
              target="_blank"
              rel="noreferrer"
            >
              Responsible AI and RAISO with Bijal Mehta and Mason Secky-Koebel |
              AI with Alex
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://dailynorthwestern.com/2021/04/02/campus/new-student-group-spreads-awareness-of-artificial-intelligence-ethics-big-data-injustices/"
              target="_blank"
              rel="noreferrer"
            >
              New student group spreads awareness of artificial intelligence
              ethics, big data injustices
            </Link>
          </li>
        </ul>
      </section>
      {/*
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Algorithms</h2>
        <p>todo...</p>
      </section>
      <br />
      */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;

import { useEffect } from "react";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

import Image from "next/image";

import wasting_time from "../../public/images/wasting_time.png";
import twenty_percent_problems from "../../public/images/twenty_percent_problems.jpeg";
import pedalcell from "../../public/images/pedalcell.jpeg";
import making_bad_things from "../../public/images/making_bad_things.jpeg";
import github_registry from "../../public/images/github_registry.jpeg";
import polishing_rocks from "../../public/images/polishing_rocks.png";
import breathing from "../../public/images/breathing.png";
import play_the_game from "../../public/images/play_the_game.jpg";

import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const getImage = (imageUrl: string) => {
  const images = [
    wasting_time,
    twenty_percent_problems,
    pedalcell,
    making_bad_things,
    github_registry,
    polishing_rocks,
    breathing,
    play_the_game,
  ];
  return images.filter((image) => image.src.includes(imageUrl)).pop();
};

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    imageSource: string;
    alt: string;
    contentHtml: string;
  };
}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {getImage(postData.imageSource) && (
          <div className={utilStyles.imageWrapper}>
            <Image
              src={getImage(postData.imageSource)}
              alt={postData.alt}
              width={350}
              height={350}
            ></Image>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

"use client";

import React, { Fragment, useCallback } from "react";
import { YStack, Paragraph, XStack, View, Spinner } from "tamagui";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import {
  Email,
  GitHub,
  SwitchThemeButton,
  Twitter,
  WorkAccordion,
} from "@/components";
import { Post } from "@/types";
import { FadeInYStack } from "@/layouts";

function Header() {
  return (
    <XStack width="100%" justifyContent="space-between" alignItems="center">
      <Paragraph size="$8" ta="start" col="$color12">
        Mason Secky-Koebel
      </Paragraph>

      <XStack>
        <Email />
        <GitHub />
        <Twitter />
        <SwitchThemeButton />
      </XStack>
    </XStack>
  );
}

function Description() {
  return (
    <Fragment>
      <Paragraph marginTop={10} size="$4" col="$color11" ta="start">
        I graduated from{" "}
        <Link href="https://www.northwestern.edu" target="_blank">
          Northwestern
        </Link>
        . While there, I founded{" "}
        <Link href="https://www.raiso.org" target="_blank">
          Raiso
        </Link>
        , an AI organization focused on safety and education. I was intern #1,
        and a founding engineer at{" "}
        <Link href="https://www.flexpa.com" target="_blank">
          Flexpa
        </Link>
        , an a16z and apollo-backed startup building plaid for healthcare claims
        data. We were recently named one of the most promising healthcare
        startups. I left Flexpa to co-found{" "}
        <Link href="https://www.pathizehealth.com" target="_blank">
          Pathize Health
        </Link>
        , where we built a platform for Long COVID care.
      </Paragraph>
      <Paragraph marginTop={10} size="$4" col="$color11" ta="start">
        I am currently the founding engineer at{" "}
        <Link href="https://www.wizardperks.com" target="_blank">
          Wizard Perks
        </Link>
        , where we're building a modern perks platform (in Chicago 🐻). I write
        infrequently about technology and startups.
      </Paragraph>
    </Fragment>
  );
}

function Accordion() {
  return (
    <YStack marginTop={20} width="100%">
      <Paragraph size="$6" textAlign="start" col="$color12" fontWeight="600">
        Work
      </Paragraph>

      <YStack marginTop={10}>
        <WorkAccordion />
      </YStack>
    </YStack>
  );
}

function News() {
  return (
    <YStack marginTop={20} marginBottom={80} width="100%">
      <Paragraph size="$6" textAlign="start" col="$color12" fontWeight="600">
        News
      </Paragraph>

      <YStack marginTop={10} gap="$4">
        <Paragraph size="$5">
          <Link
            href="https://www.psychologytoday.com/us/blog/shouldstorm/202404/the-many-reasons-for-hope-in-long-covid"
            target="_blank"
          >
            The Many Reasons for Hope in Long Covid
          </Link>
        </Paragraph>

        <Paragraph size="$5">
          <Link
            href="https://www.forbes.com/sites/gusalexiou/2023/10/18/pathize-app-uses-biometrics-to-help-long-covid-patients-manage-their-fatigue/"
            target="_blank"
          >
            Pathize App Uses Biometrics To Help Long Covid Patients Manage Their
            Fatigue
          </Link>
        </Paragraph>

        <Paragraph size="$5">
          <Link
            href="https://www.bizjournals.com/chicago/inno/stories/fundings/2023/01/24/health-tech-startup-jupiterdx-preseed.html"
            target="_blank"
          >
            Health tech startup JupiterDX to launch platform for long Covid care
          </Link>
        </Paragraph>

        <Paragraph size="$5">
          <Link
            href="https://www.axios.com/pro/health-tech-deals/2022/06/16/flexpa-raises-9m-seed-health-data-sharing"
            target="_blank"
          >
            Flexpa raises $8.5M to build new infrastructure for patient access
            APIs
          </Link>
        </Paragraph>

        <Paragraph size="$5">
          <Link
            href="https://www.mccormick.northwestern.edu/artificial-intelligence/inside-our-program/stories/2021/raiso-student-group-explores-the-responsibility-and-safety-of-ai.html"
            target="_blank"
          >
            RAISO Student Group Explores the Responsibility and Safety of AI
          </Link>
        </Paragraph>

        <Paragraph size="$5">
          <Link
            href="https://podcasts.apple.com/us/podcast/responsible-ai-raiso-bijal-mehta-mason-secky-koebel/id1539792238?i=1000518434684"
            target="_blank"
          >
            Responsible AI and RAISO with Bijal Mehta and Mason Secky-Koebel |
            AI with Alex
          </Link>
        </Paragraph>

        <Paragraph size="$5">
          <Link
            href="https://dailynorthwestern.com/2021/04/02/campus/new-student-group-spreads-awareness-of-artificial-intelligence-ethics-big-data-injustices/"
            target="_blank"
          >
            New student group spreads awareness of artificial intelligence
            ethics, big data injustices
          </Link>
        </Paragraph>
      </YStack>
    </YStack>
  );
}

export default function Home() {
  const {
    isPending,
    data: postData,
    isLoading,
  } = useQuery({
    queryKey: ["postsData"],
    queryFn: () => fetch("/api/getPosts").then((res) => res.json()),
  });

  const renderPosts = useCallback(() => {
    if (isPending) {
      return null;
    }

    return postData.data.map(({ slug, title, date }: Post) => {
      return (
        <View
          key={slug}
          enterStyle={{
            scale: 1,
            y: -0.1,
            opacity: 0,
          }}
          animation="bouncy"
          gap="$1"
        >
          <Paragraph size="$5">
            <Link href={`/post/${slug}`} prefetch={true}>
              {title}
            </Link>
          </Paragraph>
          <Paragraph size="$1" col="$color11">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Paragraph>
        </View>
      );
    });
  }, [isPending, postData?.data]);

  return (
    <FadeInYStack>
      {/* NAME AND LINKS */}
      <Header />

      {/* MIDDLE PARAGRAPH */}
      <Description />

      {/* SECTION FOR BLOG */}
      <YStack marginTop={20} width="100%">
        {/* WRITING AND WRITING LOADER */}
        <XStack width="100%" justifyContent="items-start" alignItems="center">
          <Paragraph
            size="$6"
            textAlign="start"
            col="$color12"
            fontWeight="600"
          >
            Writing
          </Paragraph>
          {/* SPINNER */}
          {isLoading && (
            <Spinner size="small" color={"$color10"} marginLeft="$2" />
          )}
        </XStack>

        {/* Gaps are useful when spacing things inside YStack */}
        <YStack marginTop={10} gap="$4">
          {renderPosts()}
        </YStack>
      </YStack>

      {/* SECTION FOR ACCORDION */}
      <Accordion />

      {/* SECTION FOR NEWS */}
      <News />
    </FadeInYStack>
  );
}

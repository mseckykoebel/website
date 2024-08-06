"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Paragraph } from "tamagui";

import { MarkdownToTsx } from "@/components";
import { FadeInYStack } from "@/layouts";

type PostData = {
  title: string;
  date: string;
  content: string;
};

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: postData } = useQuery<PostData>({
    queryKey: ["post", slug],
    queryFn: () => fetch(`/api/getPost?slug=${slug}`).then((res) => res.json()),
    enabled: !!slug,
  });

  if (!postData) {
    return (
      <FadeInYStack>
        <Paragraph size="$8" ta="center" col="$color12">
          Loading...
        </Paragraph>
      </FadeInYStack>
    );
  }

  const { title, date, content } = postData;

  return (
    <FadeInYStack>
      <>
        {/* LOADING SPINNER */}
        <Paragraph size="$8" ta="start" col="$color12">
          {title}
        </Paragraph>
        <Paragraph size="$1" col="$color11">
          {new Date(date as string).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Paragraph>
      </>

      {/* POST BODY AREA */}
      <FadeInYStack marginTop={20}>
        <MarkdownToTsx content={content || ""} />
      </FadeInYStack>
    </FadeInYStack>
  );
}

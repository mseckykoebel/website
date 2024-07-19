import React, { useState, useEffect, useRef } from "react";
import { Paragraph, YStack, XStack, Circle, Image } from "tamagui";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type Props = {
  content: string;
};

export function MarkdownToTsx({ content }: Props) {
  const [parsedContent, setParsedContent] = useState("");
  const prevElementTypeRef = useRef<string | null>(null);

  useEffect(() => {
    remark()
      .use(html)
      .process(content)
      .then((processed) => {
        setParsedContent(processed.toString());
      });
  }, [content]);

  const renderContent = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(parsedContent, "text/html");

    function renderNode(node: Node, index: number): React.ReactNode {
      const currentNodeType = node.nodeName;
      let extraTopPadding = prevElementTypeRef.current === "P" ? "$4" : "$2";

      const updatePrevElementType = () => {
        prevElementTypeRef.current = currentNodeType;
      };

      switch (currentNodeType) {
        case "P":
          updatePrevElementType();
          return (
            <Paragraph key={index} mb="$2">
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </Paragraph>
          );
        case "H1":
          updatePrevElementType();
          return (
            <Paragraph key={index} size="$8" mb="$2" mt={extraTopPadding}>
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </Paragraph>
          );
        case "H2":
          updatePrevElementType();
          return (
            <Paragraph key={index} size="$7" mb="$2" mt={extraTopPadding}>
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </Paragraph>
          );
        case "H3":
          updatePrevElementType();
          return (
            <Paragraph key={index} size="$6" mb="$2" fontWeight="600" mt={extraTopPadding}>
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </Paragraph>
          );
        case "UL":
          return (
            <YStack key={index} as="ul" gap="$2" mb="$2">
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </YStack>
          );
        case "OL":
          return (
            <YStack key={index} as="ol" gap="$2" mb="$2">
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </YStack>
          );
        case "LI":
          return (
            <XStack key={index} as="li" gap="$2">
              <Circle
                size={5}
                backgroundColor="$color"
                alignSelf="flex-start"
                mt={9} // janky - aligns the bullet visually with first line of text
              />
              <Paragraph flex={1}>
                {Array.from(node.childNodes).map((child, i) =>
                  renderNode(child, i)
                )}
              </Paragraph>
            </XStack>
          );
        case "PRE":
          return (
            <YStack
              key={index}
              backgroundColor="$color2"
              padding="$2"
              borderRadius="$2"
              mb="$2"
            >
              <Paragraph fontFamily="$mono" color="$color11">
                {(node as HTMLPreElement).textContent}
              </Paragraph>
            </YStack>
          );
        case "CODE":
          return (
            <Paragraph
              px="$1"
              key={index}
              fontFamily="$mono"
              backgroundColor="$color2"
              color="$red10"
            >
              {(node as HTMLElement).textContent}
            </Paragraph>
          );
        case "#text":
          return node.textContent;
        case "EM":
          return (
            <Paragraph key={index} fontStyle="italic">
              {Array.from(node.childNodes).map((child, i) =>
                renderNode(child, i)
              )}
            </Paragraph>
          );
        case "IMG":
          const imgElement = node as HTMLImageElement;
          return (
            <YStack key={index} alignItems="start" gap="$2" mb="$2">
              <Image
                source={{ uri: imgElement.src }}
                alt={imgElement.alt}
                width="100%"
                height={300}
                objectFit="cover"
              />
              {/* Not using alt currently lmao */}
              {/* {imgElement.alt && (
                <Paragraph size="$2" color="$color11">
                  {imgElement.alt}
                </Paragraph>
              )} */}
            </YStack>
          );
        // next link
        case "A":
          return (
            <Link
              key={index}
              href={(node as HTMLAnchorElement).href}
              target="_blank"
            >
              <Paragraph>
                {Array.from(node.childNodes).map((child, i) =>
                  renderNode(child, i)
                )}
              </Paragraph>
            </Link>
          );

        default:
          return null;
      }
    }

    return (
      <>
        {Array.from(doc.body.childNodes).map((node, index) =>
          renderNode(node, index)
        )}
      </>
    );
  };

  return <YStack>{renderContent()}</YStack>;
}

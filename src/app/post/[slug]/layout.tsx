"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "tamagui";
import { ArrowLeft } from "@tamagui/lucide-icons";

type Props = {
  children: React.ReactNode;
};

export default function PostLayout({ children }: Props) {
  const router = useRouter();

  return (
    <>
      {/* MIDDLE CONTENT AREA */}
      {children}
      {/* BOTTOM BUTTON */}
      <Button
        marginTop={20}
        marginBottom={80}
        size="$2"
        icon={ArrowLeft}
        onPress={() => router.back()}
      >
        🏡 Return home
      </Button>
    </>
  );
}

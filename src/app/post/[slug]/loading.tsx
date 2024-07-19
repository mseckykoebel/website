"use client";

import React from "react";
import { Spinner } from "tamagui";

type Props = {
  children: React.ReactNode;
};

export default function PostLoading({ children }: Props) {
  return (
    <>
      <Spinner size="small" color={"$color10"} />
      {children}
    </>
  );
}

"use client";

import { PostHogProvider } from "posthog-js/react";
import { NextTamaguiProvider, ReactQueryProvider } from "./";

const apiKey = "phc_7Lg7HDoMB56ztjIAWBZN3YJ5vv8JDWNjiei6Dbn7wRO";
const options = {
  api_host: "https://app.posthog.com",
};

type Props = {
  children: React.ReactNode;
};

export function ParentProvider({ children }: Props) {
  return (
    <ReactQueryProvider>
      <PostHogProvider apiKey={apiKey} options={options}>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </PostHogProvider>
    </ReactQueryProvider>
  );
}

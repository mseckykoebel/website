import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { PostHogProvider } from "posthog-js/react";

import "../styles/global.css";
import "highlight.js/styles/github.css";

const apiKey = "phc_7Lg7HDoMB56ztjIAWBZN3YJ5vv8JDWNjiei6Dbn7wRO";
const options = {
  api_host: "https://app.posthog.com",
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PostHogProvider apiKey={apiKey} options={options}>
      <Component {...pageProps} />
      <Analytics />
    </PostHogProvider>
  );
};

export default App;

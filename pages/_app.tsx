import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { PostHogProvider } from "posthog-js/react";

import "../styles/global.css";
import "highlight.js/styles/github.css";

const isDev = process.env.NODE_ENV === "development";

const apiKey = isDev
  ? "phc_VnB5aajICJOrBLACsOi40F370d6VOt0OB0oJfIry8Ol"
  : "phc_7Lg7HDoMB56ztjIAWBZN3YJ5vv8JDWNjiei6Dbn7wRO";
const options = {
  api_host: isDev ? "http://localhost:8000" : "https://app.posthog.com",
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

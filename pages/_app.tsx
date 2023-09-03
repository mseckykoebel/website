import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";
import "highlight.js/styles/github.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;

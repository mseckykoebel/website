import { AppProps } from "next/app";
import "../styles/global.css";
import "highlight.js/styles/github.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;

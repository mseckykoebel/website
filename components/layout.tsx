import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "Mason Secky-Koebel";
export const siteTitle = "Mason Secky-Koebel";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Mason Secky-Koebel's website" />
        <script
          defer
          data-domain="masonseckykoebel.vercel.app"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Main */}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← 🏡 Back home</Link>
        </div>
      )}
    </div>
  );
}

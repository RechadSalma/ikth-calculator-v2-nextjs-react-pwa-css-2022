import styles from "../styles/Navbar.module.css";
import Head from "next/head";

export default function Navbar() {
  return (
    <div>
      <Head>
        <title>iK nextjs / react / workbox pwa / css @media</title>
        <meta name="description" content="iK Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.iknav}>iK I am navbar</nav>
    </div>
  );
}
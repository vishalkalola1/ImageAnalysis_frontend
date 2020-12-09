import Head from "next/head";
import Navbar from "../src/components/navigations/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}

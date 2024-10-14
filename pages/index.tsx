/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscar R. Reyes</title>
        <meta name="description" content="Oscar R. Reyes Website" />
        <link rel="icon" href="/avatar.ico" />
      </Head>

      <div className={styles.circleContainer}>
        <div className={styles.circle} />
      </div>

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src="/avatar.png"
            alt="oscar-reyes"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <h1 className={styles.title}>Oscar R. Reyes</h1>
        <div>
          <h2 className={styles.description}>
            Currently looking for a new Job!
          </h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://drive.google.com/file/d/13XkLAYxtSlSq9pPrQVQBZKkWUbbydzm1/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{" "}
        |
        <a href="https://github.com/xoscar" target="_blank" rel="noreferrer">
          Github
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/%F0%9F%87%B2%F0%9F%87%BD-oscar-rafael-reyes-gaucin-8aa843a8/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://medium.com/@oscar-reyes"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
      </footer>
    </div>
  );
};

export default Home;

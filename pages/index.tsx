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
        <h1 className={styles.title}>Oscar R. Reyes</h1>
        <div>
          <h2 className={styles.description}>
            Currently looking for a new Job!
          </h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://drive.google.com/file/d/16IZ50zgampXTaWe4GYexgFIaNi8UEUiP/view"
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
          href="https://www.linkedin.com/in/oscar-rreyes/"
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

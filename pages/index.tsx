import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscar R. Reyes</title>
        <meta name="description" content="Oscar R. Reyes Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.circleContainer}>
        <div className={styles.circle} />
      </div>

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            layout="fixed"
            src="/avatar.jpg"
            alt="oscar-reyes"
            width={450}
            height={316}
          />
        </div>
        <h1 className={styles.title}>Oscar R. Reyes</h1>
        <div>
          <h2 className={styles.description}>
            Lead Software Engineer • Gamer • Creator
          </h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://www.linkedin.com/in/%F0%9F%87%B2%F0%9F%87%BD-oscar-rafael-reyes-gaucin-8aa843a8/"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        |
        <Link href="https://twitter.com/oreyes_io" target="_blank">
          Twitter
        </Link>{" "}
        |
        <Link href="https://www.youtube.com/channel/UCBwVUFWn9Q3qL1XyHtvH-lg" target="_blank">
          Youtube
        </Link>{" "}
        |
        <Link href="https://medium.com/@oscar-reyes" target="_blank">
          Medium
        </Link>{" "}
        |
        <Link
          href="https://drive.google.com/file/d/13XkLAYxtSlSq9pPrQVQBZKkWUbbydzm1/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Link>
      </footer>
    </div>
  );
};

export default Home;

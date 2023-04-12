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
            layout="fill"
            src="/avatar.png"
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

        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/5LqsAqopEZrQH1REIxVOfU?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/%F0%9F%87%B2%F0%9F%87%BD-oscar-rafael-reyes-gaucin-8aa843a8/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://twitter.com/oreyes_io"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{" "}
        |
        <a
          href="https://www.youtube.com/channel/UCBwVUFWn9Q3qL1XyHtvH-lg"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>{" "}
        |
        <a
          href="https://medium.com/@oscar-reyes"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>{" "}
        |
        <a
          href="https://drive.google.com/file/d/13XkLAYxtSlSq9pPrQVQBZKkWUbbydzm1/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </footer>
    </div>
  );
};

export default Home;

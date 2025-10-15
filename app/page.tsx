import type { NextPage } from 'next';
import styles from './styles.module.scss';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.title} ${styles.name}`}>Oscar R. Reyes</h1>
        <h2 className={styles.title}>Fullstack Lead Software Engineer</h2>
        <h3 className={styles.title}>AWS | React | Node.js | Docker | OpenTelemetry</h3>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/oscar-rreyes/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{' '}
        <a
          href="https://drive.google.com/file/d/13b8XG1ceMNggzaMo-_jhSOrmwVVHBN00/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{' '}
        <a href="https://github.com/xoscar" target="_blank" rel="noreferrer">
          Github
        </a>{' '}
        <a href="https://medium.com/@oscar-reyes" target="_blank" rel="noreferrer">
          Medium
        </a>
        <Link href="/experiments" rel="noreferrer">
          Experiments
        </Link>{' '}
      </footer>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';
import styles from './styles.module.scss';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.title} ${styles.name}`}>Oscar R. Reyes</h1>
        <div>
          <h3 className={styles.description}>Currently looking for a new Job!</h3>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://drive.google.com/file/d/16IZ50zgampXTaWe4GYexgFIaNi8UEUiP/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{' '}
        |
        <Link href="/experiments" rel="noreferrer">
          Experiments
        </Link>{' '}
        |
        <a href="https://github.com/xoscar" target="_blank" rel="noreferrer">
          Github
        </a>{' '}
        |
        <a href="https://www.linkedin.com/in/oscar-rreyes/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{' '}
        |
        <a href="https://medium.com/@oscar-reyes" target="_blank" rel="noreferrer">
          Medium
        </a>
      </footer>
    </div>
  );
};

export default Home;

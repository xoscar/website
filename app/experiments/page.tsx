import type { NextPage } from 'next';
import styles from './styles.module.scss';
import homeStyles from '../styles.module.scss';
import Link from 'next/link';

const Experiments: NextPage = () => {
  return (
    <main className={`${styles.main}`}>
      <Link href="/">&lt; Back to Home</Link>
      <h1 className={homeStyles.title}>🧪 Experiments</h1>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h3>🔭 Explain My Trace</h3>
          <p className={styles.description}>
            Simple tool using OpenAI and LangChain to breakdown an OpenTelemetry trace into human words.
            <br /> Displays a detailed view of the entire process, bugs found and valuable insights.
            <br /> It currently supports Jaeger and Tempo exporting formats
          </p>

          <Link href="/experiments/explain-my-trace">
            <button className={styles.button}>View the demo</button>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Experiments;

import Head from 'next/head';
import '../styles/globals.scss';
import styles from './styles.module.scss';
import { The_Nautigal, Roboto } from 'next/font/google';
import ReactQueryProvider from '../components/ReactQueryProvider';

const nautigal = The_Nautigal({
  subsets: ['latin'],
  variable: '--font-nautigal',
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
});

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <html>
      <Head>
        <title>Oscar R. Reyes</title>
        <meta name="description" content="Oscar R. Reyes Experiments" />
      </Head>

      <body className={`${nautigal.variable} ${roboto.variable}`}>
        <ReactQueryProvider>
          <div className={styles.circleContainer}>
            <div className={styles.circle} />
          </div>

          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default Layout;

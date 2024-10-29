'use client';

import { useMutation } from '@tanstack/react-query';
import type { NextPage } from 'next';
import homeStyles from '../../styles.module.scss';
import styles from './styles.module.scss';
import DragAndDrop from '../../../components/DragAndDrop';
import TraceGateway from '../../../gateways/Trace.gateway';
import Select from '../../../components/Select';
import { useState } from 'react';
import Explanation from '../../../components/Explanation';
import Link from 'next/link';

const options = [
  {
    key: 'Jaeger',
    value: 'jaeger',
  },
  {
    key: 'Tempo',
    value: 'tempo',
  },
];

const ExplainMyTrace: NextPage = () => {
  const [format, setFormat] = useState<string>('jaeger');
  const { data, mutate, reset, isSuccess, isError, isPending, error } = useMutation({
    mutationFn: TraceGateway.explain,
  });

  const onFile = (file: File) => {
    mutate({ file, format });
  };

  return (
    <main className={`${styles.main}`}>
      <Link href="/experiments">&lt; Back to experiments</Link>
      <div>
        <h1 className={homeStyles.title}>🔭 Explain My Trace</h1>

        <p className={styles.description}>
          Simple tool using OpenAI and LangChain to breakdown an OpenTelemetry trace into human words.
        </p>
        <p>
          Powered by:{' '}
          <b>
            <a target="_blank" href="https://www.npmjs.com/package/@oscar-js/explain-my-trace">
              @oscar-js/explain-my-trace
            </a>
          </b>
        </p>
      </div>

      {(isError && (
        <div className={styles.formContainer}>
          <p>
            Something went wrong, please try again <br />
            {error.message}
          </p>
          <button className={homeStyles.button} onClick={reset}>
            Try another Trace
          </button>
        </div>
      )) ||
        (isSuccess && data && (
          <>
            <button className={homeStyles.button} onClick={reset}>
              Try another Trace
            </button>
            <Explanation explanation={data.explanation!} />
          </>
        )) ||
        (isPending && (
          <div className={styles.formContainer}>
            <p>Processing...</p>
            <div className={styles.loader} />
          </div>
        )) || (
          <div className={styles.formContainer}>
            <Select value={format} options={options} onChange={format => setFormat(format)} label="Vendor" />
            <DragAndDrop onFile={onFile} />
          </div>
        )}
    </main>
  );
};

export default ExplainMyTrace;

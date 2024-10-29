import { Explanation as IExplanation } from '../../gateways/Trace.gateway';
import styles from './styles.module.scss';

interface IProps {
  explanation: IExplanation;
}

const Explanation = ({ explanation: { description, errors, languages, services } }: IProps) => {
  return (
    <div className={styles.container}>
      <h3>🏢 Description</h3>
      <p>{description}</p>

      <h3>🔧 Services</h3>
      <ul>
        {services.map(({ serviceName, description }) => (
          <li key={serviceName}>
            <h4>{serviceName}</h4>
            <p>{description}</p>
          </li>
        ))}
      </ul>

      <h3>📚 Languages</h3>
      <ul>
        {languages.map(({ language, serviceName }) => (
          <li key={serviceName}>
            <b>{serviceName}:</b> {language}
          </li>
        ))}
      </ul>

      {!!errors.length && (
        <>
          <h3>🚨 Errors</h3>
          <ul>
            {errors.map(({ spanId, operationName, errorMessage, stackTrace }) => (
              <li key={spanId}>
                <h4>
                  {operationName} (Span ID: {spanId})
                </h4>
                <p>{errorMessage}</p>
                <p>{stackTrace}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Explanation;

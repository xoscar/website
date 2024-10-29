import styles from './styles.module.scss';

interface KeyValue {
  key: string;
  value: string;
}

interface IProps {
  options: KeyValue[];
  onChange: (value: string) => void;
  label: string;
  id?: string;
  value?: string;
}

const Select = ({ id = 'selector', value = '', options, onChange, label }: IProps) => {
  return (
    <div className={styles.customSelect}>
      <label htmlFor={id}>
        <b>{label}:</b>
      </label>
      <select value={value} id={id} onChange={event => onChange(event.target.value)}>
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

import styles from './styles.module.scss';

interface IProps {
  onFile(file: File): void;
}

const validateFileType = (file: File) => {
  const allowedTypes = ['application/json'];

  return allowedTypes.includes(file.type);
};

const DragAndDrop = ({ onFile }: IProps) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const file = files?.item(0);

    if (!!file && validateFileType(file)) onFile(file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files?.item(0);

    if (!!file && validateFileType(file)) onFile(file);
  };

  return (
    <div onDrop={handleDrop} className={styles.dragAndDrop}>
      <div onDragOver={event => event.preventDefault()} className={styles.dropZone}>
        <div className={styles.dropZoneText}>Drag and drop your trace File here or</div>
        <input type="file" id="browse" hidden onChange={handleFileChange} accept=".json" />
        <label className={styles.browseButton} htmlFor="browse">
          Browse files
        </label>
      </div>
    </div>
  );
};

export default DragAndDrop;

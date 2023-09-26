import styles from './theme-piano.module.css';

/* eslint-disable-next-line */
export interface ThemePianoProps {}

export function ThemePiano(props: ThemePianoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThemePiano!</h1>
    </div>
  );
}

export default ThemePiano;

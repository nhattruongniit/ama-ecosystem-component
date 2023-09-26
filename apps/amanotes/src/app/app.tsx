// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { ThemePiano } from '@ama-theme/piano'

export function App() {
  return (
    <div>
      <ThemePiano />
      <NxWelcome title="amanotes" />
    </div>
  );
}

export default App;

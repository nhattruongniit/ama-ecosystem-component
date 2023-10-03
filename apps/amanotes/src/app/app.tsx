// eslint-disable-next-line @typescript-eslint/no-unused-vars

import NxWelcome from './nx-welcome';

import { PianoLayout } from '@ama-ecosystem/piano';

export function App() {
  return (
    <div>
      <PianoLayout />
      <NxWelcome title="amanotes" />
    </div>
  );
}

export default App;

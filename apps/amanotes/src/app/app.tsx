import { Piano } from '@ama-ecosystem/theme';

function FieldRender() {
  return <div>FieldRender</div>;
}

export function App() {
  return <Piano fieldRender={<FieldRender />}>Dashboard</Piano>;
}

export default App;

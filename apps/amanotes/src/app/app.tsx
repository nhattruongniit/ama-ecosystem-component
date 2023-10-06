import { Button, Menu } from 'antd';

import { Piano } from '@ama-ecosystem/theme/piano';

function FieldRender() {
  return <div className="text-white">FieldRender</div>;
}

export function App() {
  return (
    <Piano
      fieldRender={<FieldRender />}
      menuRender={
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          style={{
            border: 0,
          }}
          className="border-0 h-[calc(100vh-300px)] overflow-auto"
          items={[{ key: 1, label: 'Dashboard' }]}
        />
      }
      faqItems={[
        {
          label: (
            <Button
              href="https://docs.google.com/presentation/d/1wELOrc731cckjw8cvqjqaurSX4VsJoCksGjiqX_xF6c/edit#slide=id.g1434d8e2421_0_864"
              target="_blank"
              rel="noreferrer"
            >
              Platform guidlines
            </Button>
          ),
        },
        {
          label: (
            <Button
              href="https://docs.google.com/presentation/d/1wELOrc731cckjw8cvqjqaurSX4VsJoCksGjiqX_xF6c/edit#slide=id.g1434d8e2421_0_864"
              target="_blank"
              rel="noreferrer"
              className="my-3"
            >
              A/B testing guidelines
            </Button>
          ),
        },
        {
          label: <Button type="primary">Report bug</Button>,
        },
      ]}
    >
      Dashboard
    </Piano>
  );
}

export default App;

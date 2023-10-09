import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

// theme
import { Piano } from '@ama-ecosystem/theme/piano';
import { Button, Menu } from 'antd';

const meta: Meta<typeof Piano> = {
  component: Piano,
  title: 'Theme Piano',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      description: `Title of header  <br /> string`,
    },
    nameUser: {
      control: 'text',
      description: `Name of user <br /> string`,
    },
    bgColorHeader: {
      control: 'color',
      description: 'Background color of header <br /> string',
    },
    avatarUser: {
      control: 'text',
      description: 'Avatar of user <br /> string',
    },
    faqItems: {
      description: `Menu items <br /> MenuProps['items']`,
    },
    dropdownItems: {
      description: `Dropdown items <br /> MenuProps['items']`,
    },
    menuRender: {
      description: 'Menu render <br /> React.ReactNode',
      control: 'none',
    },
    fieldRender: {
      description: 'Field render <br /> React.ReactNode',
      control: 'none',
    },
    accountRender: {
      description: 'Account render <br /> React.ReactNode',
      control: 'none',
    },
    faqRender: {
      description: 'FAQ render <br /> React.ReactNode',
      control: 'none',
    },
    children: {
      description: 'Content of Piano <br /> React.ReactNode',
      control: 'none',
    },
    onBackHome: {
      action: 'clicked',
      description: 'Set the handler to handle click event <br /> () => void',
    },
    onLogout: {
      action: 'clicked',
      description: 'Set the handler to handle click event <br /> () => void',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Piano>;

function MenuRender() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['0']}
      style={{
        border: 0,
      }}
      className="border-0 h-[calc(100vh-300px)] overflow-auto"
      items={[{ key: 1, label: 'Dashboard' }]}
    />
  );
}

function FieldRender() {
  return <div className="text-white">FieldRender</div>;
}

export const Primary: Story = {
  args: {
    title: 'Amanotes',
    nameUser: 'tony',
    bgColorHeader: '#0050B3',
    avatarUser: 'https://i.pravatar.cc/300',
    menuRender: <MenuRender />,
    fieldRender: <FieldRender />,
    faqItems: [
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
    ],
    dropdownItems: [
      {
        key: '1',
        label: <div className="cursor-pointer">Logout</div>,
      },
    ],
    onLogout: action('clicked'),
  },
};

// export const Heading: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy();
//   },
// };

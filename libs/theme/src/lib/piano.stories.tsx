import type { Meta, StoryObj } from '@storybook/react';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

// theme
import { Piano } from '@ama-ecosystem/theme/piano';
import { Button } from 'antd';

const meta: Meta<typeof Piano> = {
  component: Piano,
  title: 'Piano',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    title: {
      description: 'Title of header',
    },
    bgColorHeader: {
      control: 'color',
      description: 'Background color of header',
    },
    avatarUser: {
      description: 'Avatar of user',
    },
    faqItems: {
      description: 'FAQ menu',
    },
    onLogout: {
      action: 'clicked',
      description: 'Set the handler to handle click event',
      control: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Piano>;

export const Primary: Story = {
  args: {
    title: 'Amanotes',
    nameUser: 'tony',
    bgColorHeader: '#0050B3',
    avatarUser: 'https://i.pravatar.cc/300',
    onLogout: () => {
      alert('Logout');
    },
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
  },
};

// export const Heading: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy();
//   },
// };

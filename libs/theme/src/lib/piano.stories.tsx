import type { Meta, StoryObj } from '@storybook/react';
import Piano from './Piano';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Piano> = {
  component: Piano,
  title: 'Piano',
};
export default meta;
type Story = StoryObj<typeof Piano>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy();
  },
};

import CheckBox from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Molecules/CheckBox',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '표시 라벨',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: '체크',
      table: {
        type: { summary: 'number' },
      },
    },
    onChange: {
      description: '값이 변화했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'Label' };

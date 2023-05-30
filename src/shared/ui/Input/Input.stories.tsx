import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  conponent: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type Text',
  value: 'text',
};

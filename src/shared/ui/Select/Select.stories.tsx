import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  conponent: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select >;

const Template: ComponentStory<typeof Select > = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значение',
  options: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт' },
  ],
};

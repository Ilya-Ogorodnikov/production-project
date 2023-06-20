import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
  title: 'shared/Card',
  conponent: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title="test" text="text text" />,
};

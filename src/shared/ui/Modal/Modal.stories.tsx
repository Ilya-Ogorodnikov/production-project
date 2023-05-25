import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  conponent: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde natus omnis pariatur ratione ex ducimus tempore.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde natus omnis pariatur ratione ex ducimus tempore.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';
import { Button } from '../Button/Button';

export default {
  title: 'shared/Text',
  conponent: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem',
  text: 'Description Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description Description Description Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title lorem',
  text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title lorem ipsum',
  text: 'Description Description Description Description',
  size: TextSize.L,
};

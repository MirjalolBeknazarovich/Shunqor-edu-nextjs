import Button from './button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
	name: 'Button',
	component: Button,
	argTypes: {
		appearence: {
			type: 'string',
			description: 'Button color style',
			defaultValue: 'primary',
			options: ['primary', 'ghost', 'success', 'failure'],
			control: {
				type: 'select',
			},
		},
		size: {
			type: 'string',
			description: 'Button size',
			defaultValue: 'm',
			options: ['s', 'm', 'l'],
			control: {
				type: 'radio',
			},
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Button',
	appearence: 'primary',
};

export const Ghost = Template.bind({});
Ghost.args = {
	children: 'Button',
	appearence: 'ghost',
};

export const Success = Template.bind({});
Success.args = {
	children: 'Button',
	appearence: 'success',
};

export const Failure = Template.bind({});
Failure.args = {
	children: 'Button',
	appearence: 'failure',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Button',
	size: 's',
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Button',
	size: 'm',
};

export const Large = Template.bind({});
Large.args = {
	children: 'Button',
	size: 'l',
};

export const Arrow: ComponentStory<typeof Button> = ({ ...args }) => {
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleButton = () => setToggle(prev => !prev);

	return (
		<Button appearence='primary' arrow={toggle ? 'down' : 'right'} onClick={toggleButton} {...args}>
			Button
		</Button>
	);
};
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./input";

export default {
    name: 'TextField',
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const TextField = Template.bind({})
TextField.args ={
    placeholder: 'Placeholder'
}

export const Error = Template.bind({})
Error.args ={
    placeholder: 'Placeholder',
    error: {message: 'Field is required'}
}
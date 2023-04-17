import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hhdata from "./hh-data";
import { count } from "console";

export default {
    name: 'HhData',
    component: Hhdata,
    argTypes: {
        juniorSalary: {
            type: 'number',
        },
        middleSalary: {
            type: 'number',
        },
        seniorSalary: {
            type: 'number',
        },
        count: {
            type: 'number',
        }
    }
} as ComponentMeta<typeof Hhdata>;

export const Data: ComponentStory<typeof Hhdata> = ({...props}) => {
    const data = {
        count: 1200,
        juniorSalary: 600,
        middleSalary: 1600,
        seniorSalary: 1800,
    }

    return <Hhdata {...data} {...props} />
}
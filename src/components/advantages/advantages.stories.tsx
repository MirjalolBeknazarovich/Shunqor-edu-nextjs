import { ComponentMeta, ComponentStory } from "@storybook/react";
import Advantages from "./advantages";
import { AdvantagesData } from "@/interface/page.interface";

export default {
    name: 'Advantages',
    component: Advantages,
} as ComponentMeta<typeof Advantages>;

export const Advantage: ComponentStory<typeof Advantages> = ({ ...props }) => {

    const arr: AdvantagesData[] = [
        {
        title: 'ReactJS class component',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sequi et mollitia amet, eveniet praesentium.',
        id: '1'
        },
        {
        title: 'VueJS directive',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sequi et mollitia amet, eveniet praesentium.',
        id: '2'
        },
        {
        title: 'NextJS Server Side Rendering',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sequi et mollitia amet, eveniet praesentium.',
        id: '3'
        },
        {
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sequi et mollitia amet, eveniet praesentium.',
        id: '4'
        }
    ]

    return (
        <Advantages advantages={arr} { ...props } />
    )
}
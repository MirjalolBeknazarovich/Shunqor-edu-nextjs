import { ComponentMeta, ComponentStory } from "@storybook/react";
import Rating from "./rating";
import { useState } from "react";

export default {
    name: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>

export const Model: ComponentStory<typeof Rating> = ({...props}) => {

    return <Rating rating={4} {...props} />
}

export const Editable: ComponentStory<typeof Rating> = ({...props}) => {
    const [rating, setRating] = useState(3)

    return <Rating rating={rating} setRating={setRating} isEditabled={true} {...props} />
}


export const Error: ComponentStory<typeof Rating> = ({...props}) => {
    const [rating, setRating] = useState(0)

    return <Rating rating={rating} setRating={setRating} error={{ message: 'Rating is required', type: '', ref: null}} {...props} />
}
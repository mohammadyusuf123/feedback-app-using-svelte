import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id:1,
        rating:10,
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora excepturi minus, sunt praesentium ipsa aliquid.'

    },
        {
        id:2,
        rating:9,
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora excepturi minus, sunt praesentium ipsa aliquid.'

    },
        {
        id:3,
        rating:8,
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora excepturi minus, sunt praesentium ipsa aliquid.'

    },
])
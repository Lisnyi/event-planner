import { Priority, Category } from "."

export type Event = {
    id: string,
    title: string,
    description: string,
    date: string,
    time: string,
    location: string,
    category: Category,
    picture: string,
    priority: Priority
}

export type NewEvent = {
    title: string,
    description: string,
    date: string,
    time: string,
    location: string,
    category: string,
    picture: string,
    priority: string
}
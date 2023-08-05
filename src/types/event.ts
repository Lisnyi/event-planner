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
import { Dayjs } from 'dayjs'

export type CreateEventFormValues = {
    title: string,
    description: string,
    date: Dayjs,
    time: Dayjs,
    location: string,
    category: string,
    picture: string,
    priority: string,
}
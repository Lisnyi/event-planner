import { FC } from 'react'
import { EventCard } from '..'
import { List } from './MainEventsList.styled'
import type { Event } from '../../types'

type Props = {
    list: Array<Event>
}

export const MainEventsList: FC<Props> = ({list}) => {
    return (
        <List>
            {list.map((item) => <EventCard key={item.id} event={item}/>)}
        </List>
    )
}

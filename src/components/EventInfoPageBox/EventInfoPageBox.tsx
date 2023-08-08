import { FC } from 'react'
import { PageTitle, EventInfoCard } from '..'
import { Box } from './EventInfoPageBox.styled'
import type { Event } from '../../types'

type Props = {
    event: Event
}

export const EventInfoPageBox: FC<Props> = ({event}) => {
    return (
        <Box>
            <PageTitle content={event.title}/>
            <EventInfoCard event={event}/>
        </Box>
    )
}

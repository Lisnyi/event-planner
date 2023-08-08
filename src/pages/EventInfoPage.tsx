import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Section, GoBackButton, PageTitle, EventInfoPageBox } from '../components'
import { useGetEventByIdQuery } from '../redux'

const EventInfoPage: FC = () => {

    const { eventId } = useParams<{eventId: string}>()
    const { data, isError } = useGetEventByIdQuery(eventId)

    return (
        <Container>
            <Section>
                <GoBackButton/>
                {data && <EventInfoPageBox event={data}/>}
                {isError && <PageTitle content='Oops, something went wrong'/>}
            </Section>
        </Container>
    )
}

export default EventInfoPage
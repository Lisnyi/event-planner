import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Section, GoBackButton, PageTitle, UpdateEventForm } from '../components'
import { useGetEventByIdQuery } from '../redux'

const EditEventPage: FC = () => {

    const { eventId } = useParams<{eventId: string}>()
    const { data } = useGetEventByIdQuery(eventId)

    return (
        <Container>
            <Section>
                <GoBackButton/>
                <PageTitle content='Edit event'/>
                {data && <UpdateEventForm event={data}/>}
            </Section>
        </Container>
    )
}

export default EditEventPage
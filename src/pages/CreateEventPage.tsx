import { FC } from 'react'
import { Container, Section, GoBackButton, PageTitle, CreateEventForm } from '../components'

const CreateEventPage: FC = () => {
    return (
        <Container>
            <Section>
                <GoBackButton/>
                <PageTitle content='Create new event'/>
                <CreateEventForm/>
            </Section>
        </Container>
    )
}

export default CreateEventPage
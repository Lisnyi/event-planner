import { FC } from 'react'
import { Container, Section, ButtonsStack, MainEventsList } from '../components'
import { useGetEventsQuery } from '../redux'

const HomePage: FC = () => {

    const { data } = useGetEventsQuery()

    return (
        <Container>
            <Section>
                <ButtonsStack/>
                {data && <MainEventsList list={data}/>}
            </Section>
        </Container>
    )
}

export default HomePage
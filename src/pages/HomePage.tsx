import { FC } from 'react'
import { Container, Section, MainEventsList, HomePageBox} from '../components'
import { useGetEventsQuery } from '../redux'

const HomePage: FC = () => {

    const { data } = useGetEventsQuery()

    return (
        <Container>
            <Section>
                <HomePageBox/>
                {data && <MainEventsList list={data}/>}
            </Section>
        </Container>
    )
}

export default HomePage
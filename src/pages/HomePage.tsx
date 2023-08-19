import { FC } from 'react'
import { Container, Section, MainEventsList, HomePageBox} from '../components'
import { useFiltredEventList } from '../hooks'

const HomePage: FC = () => {

    const [ list ] = useFiltredEventList()

    return (
        <Container>
            <Section>
                <HomePageBox/>
                {list && <MainEventsList list={list}/>}
            </Section>
        </Container>
    )
}

export default HomePage
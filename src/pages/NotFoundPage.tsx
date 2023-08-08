import { FC } from 'react'
import { Container, Section, GoBackButton, PageTitle } from '../components'

const NotFoundPage: FC = () => {
	return (
		<Container>
			<Section>
				<GoBackButton/>
				<PageTitle content='Page Not Found'/>
			</Section>
		</Container>
	)
}

export default NotFoundPage
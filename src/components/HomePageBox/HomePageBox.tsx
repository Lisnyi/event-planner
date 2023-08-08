import { ButtonsStack, PageTitle } from '../'
import { Box } from './HomePageBox.styled'

export const HomePageBox = () => {
  return (
    <Box>
        <ButtonsStack/>
        <PageTitle content='My events' homePage/>
    </Box>
  )
}

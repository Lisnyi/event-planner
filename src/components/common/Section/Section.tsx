import { FC, PropsWithChildren } from 'react'
import { Box } from './Section.styled'

export const Section: FC<PropsWithChildren> = ({children}) => {
  return (
    <Box>
        {children}
    </Box>
  )
}

import { FC, PropsWithChildren } from 'react'
import { Box } from "./Container.styled"

export const Container: FC<PropsWithChildren> = ({children}) => {
  return (
    <Box>
        {children}
    </Box>
  )
}
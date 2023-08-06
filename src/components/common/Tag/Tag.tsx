import { FC } from 'react'
import { Box } from './Tag.styled'

type Props = {
    content: string,
    className?: string,
}

export const Tag: FC<Props> = ({content, className}) => {
  return (
    <Box className={className}>
        {content}
    </Box>
  )
}

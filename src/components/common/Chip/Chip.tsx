import { FC } from 'react'
import { Box } from "./Chip.styled"

type Props = {
    text: string,
    className?: string,
}

export const Chip: FC<Props> = ({text, className}) => {
    return (
        <Box className={className}>
            <p>
                {text}
            </p>
        </Box>
    )
}
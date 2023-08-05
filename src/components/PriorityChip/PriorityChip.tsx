import { FC } from 'react'
import { StyledChip } from "./PriorityChip.styled"
import type { Priority } from '../../types'

type Props = {
    text: Priority
}

export const PriorityChip: FC<Props> = ({text}) => {
    return (
        <StyledChip text={text}/>
    )
}
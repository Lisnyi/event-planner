import { FC } from 'react'
import { StyledTag } from './PriorityTag.styled'
import type { Priority } from '../../types'

type Props = {
    content: Priority
}

export const PriorityTag: FC<Props> = ({content}) => {
    return (
        <StyledTag content={content}/>
    )
}

import { FC } from 'react'
import { StyledChip } from "./CategoryChip.styled"
import type { Category } from '../../types'

type Props = {
    text: Category
}

export const CategoryChip: FC<Props> = ({text}) => {
    return (
        <StyledChip text={text}/>
    )
}
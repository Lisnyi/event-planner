import { FC } from 'react'
import { StackBox } from "./CardChipsStack.styled"
import { CategoryChip, PriorityChip } from '..'
import type { Priority, Category } from '../../types'

type Props = {
    category: Category,
    priority: Priority
}

export const CardChipsStack: FC<Props> = ({category, priority}) => {
    return (
        <StackBox>
            <CategoryChip text={category}/>
            <PriorityChip text={priority}/>
        </StackBox>
    )
}
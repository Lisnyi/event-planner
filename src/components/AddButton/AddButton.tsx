import { FC, MouseEventHandler } from 'react'
import { Plus } from '../../assets'
import { Button } from "./AddButton.styled"

type Props = {
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export const AddButton: FC<Props> = ({handleClick}) => {
    return (
        <Button onClick={handleClick} aria-label='Add'>
            <Plus/>
        </Button>
    )
}
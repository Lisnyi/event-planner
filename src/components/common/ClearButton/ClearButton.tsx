import { FC, MouseEventHandler } from 'react'
import { Cross } from '../../../assets'
import { Button, CrossIcon } from "./ClearButton.styled"

type Props = {
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export const ClearButton: FC<Props> = ({handleClick}) => {
    return (
        <Button onClick={handleClick} aria-label='Clear'>
            <CrossIcon component={Cross} />
        </Button>
    )
}
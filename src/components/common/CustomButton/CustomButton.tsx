import { FC, MouseEventHandler } from 'react'
import { Button } from './CustomButton.styled'

type Props = {
    content: string,
    handleClick: MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset",
    className?: string,
}

export const CustomButton: FC<Props> = ({content, handleClick, type='button', className}) => {
  return (
    <Button type={type} onClick={handleClick} className={className}>
        {content}
    </Button>
  )
}

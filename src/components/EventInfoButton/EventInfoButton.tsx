import { FC, MouseEventHandler } from 'react'
import { Button } from './EventInfoButton.styled'

type Props = {
    content: string,
    secondary?: boolean,
    handleClick: MouseEventHandler<HTMLButtonElement>,
}

export const EventInfoButton: FC<Props> = ({content, secondary=false, handleClick}) => {
  return (
    <Button
        secondary={secondary}
        content={content}
        handleClick={handleClick}
    />
  )
}

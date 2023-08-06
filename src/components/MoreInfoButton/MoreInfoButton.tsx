import { FC, MouseEventHandler } from 'react'
import { Button } from './MoreInfoButton.styled'

type Props = {
    content?: string,
    handleClick: MouseEventHandler<HTMLButtonElement>,
}

export const MoreInfoButton: FC<Props> = ({content='More info', handleClick}) => {
	return (
		<Button handleClick={handleClick} content={content}/>
	)
}
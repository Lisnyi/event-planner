import { FC } from 'react'
import { Message } from './ErrorMessage.styled'

type Props = {
    message: string,
}

export const ErrorMessage: FC<Props> = ({message}) => {
    return (
        <Message>
            {message}
        </Message>
    )
}

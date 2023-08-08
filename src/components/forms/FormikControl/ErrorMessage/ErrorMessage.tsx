import { FC } from 'react'
import { FormikErrors } from 'formik'
import { Message } from './ErrorMessage.styled'
import { Dayjs } from 'dayjs'

type Props = {
    message: string | FormikErrors<Dayjs>,
}

export const ErrorMessage: FC<Props> = ({message}) => {
    if (typeof message === 'string') {
        return (
            <Message>
                {message}
            </Message>
        )
    }
}

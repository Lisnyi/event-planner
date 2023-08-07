import { FC } from 'react'
import { CustomLabel } from './Label.styled'

type Props = {
    label: string,
    htmlFor: string
}

export const Label: FC<Props> = ({label, htmlFor}) => {
    return (
        <CustomLabel htmlFor={htmlFor}>
            {label}
        </CustomLabel>
    )
}

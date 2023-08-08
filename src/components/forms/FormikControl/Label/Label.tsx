import { FC } from 'react'
import { CustomLabel } from './Label.styled'

type Props = {
    label: string,
    htmlFor: string,
    disabled?: boolean
}

export const Label: FC<Props> = ({label, htmlFor, disabled}) => {
    return (
        <CustomLabel disabled={disabled} htmlFor={htmlFor}>
            {label}
        </CustomLabel>
    )
}

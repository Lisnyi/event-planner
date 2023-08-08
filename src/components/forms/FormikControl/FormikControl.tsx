import { FC } from 'react'
import { Input, TextArea, Select, FormTimePicker, FormDatePicker } from ".."

type Props = {
    control?: 'input' | 'textarea' | 'select' | 'date' | 'time',
    id: string,
    name: string,
    label: string,
    disabled?: boolean,
    options?: Array<{value: string}>
}

export const FormikControl: FC<Props> = ({control = 'input', id, name, label, disabled, options, ...rest}) => {
    switch (control) {
        case 'input':
            return <Input id={id} name={name} label={label} disabled={disabled} {...rest}/>
        case 'textarea':
            return <TextArea id={id} name={name} label={label} {...rest}/>
        case 'select':
            return <Select id={id} name={name} label={label} options={options} {...rest}/>
        case 'time':
            return <FormTimePicker id={id} name={name} label={label}  {...rest}/>
        case 'date':
            return <FormDatePicker id={id} name={name} label={label} {...rest}/>
        default: return null
    }
}

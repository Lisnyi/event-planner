import { FC, useState } from 'react'
import { useFormikContext, useField } from 'formik'
import { useTheme } from 'styled-components'
import { Option } from '@mui/base'
import { FormControlBox, Label, ErrorMessage } from '..'
import { SelectButton, useStyles } from './Select.styled'
import type { CreateEventFormValues } from '../../../../types'

type Props = {
	id: string,
	name: string,
	label: string,
	options: Array<{value: string}> | undefined
}

export const Select: FC<Props> = ({id, label, name, options, ...rest}) => {

	const { values, errors, touched, handleChange, handleBlur } = useFormikContext<CreateEventFormValues>();
	const [, , {setValue}] = useField(name);
	const theme = useTheme()
	const { classes } = useStyles({"theme": theme});
	const errorMessage = touched[name as keyof CreateEventFormValues] && errors[name as keyof CreateEventFormValues]
	const [isListOpen, setIsListOpen] = useState(false)
	
	return (
		<FormControlBox>
			<Label htmlFor={id} label={label}/>
			<SelectButton
				id={id}
				name={name}
				value={values[name as keyof CreateEventFormValues]}
				onChange={handleChange}
				onBlur={handleBlur}
				listboxOpen={isListOpen}
				onListboxOpenChange={() => setIsListOpen(!isListOpen)}
				slotProps={{listbox: { className: classes.list }, popper: { className: classes.popper }}}
				{...rest}>
				<Option value="">Select a {name}</Option>
				{options && options.map(({value}, index) => <Option onClick={() => setValue(value, true)} key={index} value={value}>{value}</Option>)}
			</SelectButton>
			{errorMessage && <ErrorMessage message={errorMessage}/>}
		</FormControlBox>
	)
}

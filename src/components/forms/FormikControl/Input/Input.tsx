import { FC } from 'react'
import { useFormikContext, useField } from 'formik'
import { FormControlBox, Label, ClearButton, ErrorMessage } from '../../..'
import { CustomInput } from './Input.styled'
import type { CreateEventFormValues } from '../../../../types'

type Props = {
	id: string,
	name: string,
	label: string,
	disabled?: boolean
}

export const Input: FC<Props> = ({id, name, label, disabled, ...rest}) => {

	const { values, errors, touched, handleChange, handleBlur } = useFormikContext<CreateEventFormValues>();

	const [, {initialValue, initialTouched, initialError}, {setValue, setError, setTouched}] = useField(name);
	const errorMessage = touched[name as keyof CreateEventFormValues] && errors[name as keyof CreateEventFormValues]
	const error = touched[name as keyof CreateEventFormValues] && Boolean(errors[name as keyof CreateEventFormValues])

	function clearField () {
		setValue(initialValue, false)
		setError(initialError)
		setTouched(initialTouched, false)
	}

	return (
		<FormControlBox>
			<Label htmlFor={id} label={label}/>
			<CustomInput
				endAdornment={values[name as keyof CreateEventFormValues] && <ClearButton handleClick={clearField}/>}
				disableUnderline
				fullWidth
				disabled={disabled}
				id={id}
				name={name}
				value={values[name as keyof CreateEventFormValues]}
				onChange={handleChange}
				onBlur={handleBlur}
				error={error}
				{...rest}
			/>
			{errorMessage && <ErrorMessage message={errorMessage}/>}
		</FormControlBox>
	)
}
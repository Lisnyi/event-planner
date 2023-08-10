import { FC } from 'react'
import { useFormikContext, useField } from 'formik'
import { FormControlBox, Label, ClearButton, ErrorMessage } from '../../..'
import { CustomTextArea } from './TextArea.styled'
import type { CreateEventFormValues } from '../../../../types'

type Props = {
	id: string,
	name: string,
	label: string,
}

export const TextArea: FC<Props> = ({id, name, label, ...rest}) => {

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
		<FormControlBox area={name}>
			<Label htmlFor={id} label={label}/>
			<CustomTextArea
				endAdornment={values[name as keyof CreateEventFormValues] && <ClearButton handleClick={clearField}/>}
				disableUnderline
				fullWidth
				multiline
				rows={5}
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
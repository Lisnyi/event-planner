import { FC } from 'react'
import { useFormikContext, useField } from 'formik'
import { FormControlBox, Label, ClearButton, ErrorMessage } from '../../..'
import { CustomInput } from './Input.styled'
import type { Values } from '../../../../types'

type Props = {
	id: string,
	name: string,
	label: string,
}

export const Input: FC<Props> = ({id, name, label, ...rest}) => {

	const { values, errors, touched, handleChange, handleBlur } = useFormikContext<Values>();

	const [, {initialValue, initialTouched, initialError}, {setValue, setError, setTouched}] = useField(name);
	const errorMessage = touched[name as keyof Values] && errors[name as keyof Values]
	const error = touched[name as keyof Values] && Boolean(errors[name as keyof Values])

	function clearField () {
		setValue(initialValue, false)
		setError(initialError)
		setTouched(initialTouched, false)
	}

	return (
		<FormControlBox>
			<Label htmlFor={id} label={label}/>
			<CustomInput
				endAdornment={values[name as keyof Values] && <ClearButton handleClick={clearField}/>}
				disableUnderline
				fullWidth
				id={id}
				name={name}
				value={values[name as keyof Values]}
				onChange={handleChange}
				onBlur={handleBlur}
				error={error}
				{...rest}
			/>
			{errorMessage && <ErrorMessage message={errorMessage}/>}
		</FormControlBox>
	)
}
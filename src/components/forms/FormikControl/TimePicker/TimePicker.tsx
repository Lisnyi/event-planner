import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useField, useFormikContext } from "formik";
import { FormControlBox, Label, ErrorMessage } from '..';
import type { CreateEventFormValues } from '../../../../types';

type Props = {
  name: string,
  id: string,
  label: string,
}

export const FormTimePicker: FC<Props> = ({id, name, label, ...rest}) => {

	const { values, errors, touched } = useFormikContext<CreateEventFormValues>();
	const [, , {setValue}] = useField(name);
    const errorMessage = touched[name as keyof CreateEventFormValues] && errors[name as keyof CreateEventFormValues]
    const error = touched[name as keyof CreateEventFormValues] && Boolean(errors[name as keyof CreateEventFormValues])
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControlBox>
                <Label htmlFor={id} label={label}/>
                <TimePicker
                    value={values[name as keyof CreateEventFormValues]}
                    onChange={(val) => setValue(val)}
                    slotProps={{
                        textField: {
                            id,
                            error
                        }
                    }}
                    {...rest}
                />
            {errorMessage && <ErrorMessage message={errorMessage}/>}
            </FormControlBox>
        </LocalizationProvider>
    );
};

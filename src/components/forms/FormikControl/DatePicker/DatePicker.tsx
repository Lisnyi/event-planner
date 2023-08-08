import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useField, useFormikContext } from "formik";
import * as dayjs from 'dayjs'
import { FormControlBox, Label, ErrorMessage } from '..';
import type { CreateEventFormValues } from '../../../../types';

type Props = {
  name: string,
  id: string,
  label: string,
}

export const FormDatePicker: FC<Props> = ({id, name, label, ...rest}) => {

	const { values, errors, touched } = useFormikContext<CreateEventFormValues>();
	const [, , {setValue}] = useField(name);
    const errorMessage = touched[name as keyof CreateEventFormValues] && errors[name as keyof CreateEventFormValues]
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControlBox>
                <Label htmlFor={id} label={label}/>
                <DatePicker
                    value={values[name as keyof CreateEventFormValues]}
                    onChange={(val) => setValue(val)}
                    format="DD-MM-YYYY"
                    minDate={dayjs()}
                    slotProps={{
                        textField: {
                            id,
                        }
                    }}
                    disablePast
                    {...rest}
                />
            {errorMessage && <ErrorMessage message={errorMessage}/>}
            </FormControlBox>
        </LocalizationProvider>
    );
};
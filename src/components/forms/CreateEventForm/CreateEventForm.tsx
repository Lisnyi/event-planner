import { useMemo } from "react"
import { nanoid } from "nanoid"
import { Formik, FormikHelpers } from "formik"
import { priority, categories } from "../../../db"
import { useAddNewEventMutation } from "../../../redux"
import { FormikControl, createEventState, createEventSchema } from ".."
import { notify } from "../../../utils"
import { CustomForm, Wrapper } from "./CreateEventForm.styled"
import { CustomButton } from "../.."

import type { CreateEventFormValues } from "../../../types"

export const CreateEventForm = () => {
    
    const [ addNewEvent ] = useAddNewEventMutation()

    const titleId = useMemo(()=> nanoid(), [])
    const descriptionId = useMemo(()=> nanoid(), [])
    const categoryId = useMemo(()=> nanoid(), [])
    const priorityId = useMemo(()=> nanoid(), [])
    const dateId = useMemo(()=> nanoid(), [])
    const timeId = useMemo(()=> nanoid(), [])
    const locationId = useMemo(()=> nanoid(), [])
    const pictureId = useMemo(()=> nanoid(), [])

    function handleSubmit(values: CreateEventFormValues, {resetForm}: FormikHelpers<CreateEventFormValues>) {

        const { title, description, date, time, location, picture, category, priority } = values
        const event = {
            title,
            description,
            date: date.format(),
            time: time.format(),
            location,
            category,
            picture,
            priority
        }
        addNewEvent(event)
        notify('Successfully created')
        resetForm()
    }
 
    return (
        <Formik
            initialValues={createEventState}
            validationSchema={createEventSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={true}>
                {() => (
                    <CustomForm autoComplete='on'>
                        <Wrapper>
                            <FormikControl
                                name='title'
                                label='Title'
                                id={titleId}
                            />
                            <FormikControl
                                control="textarea"
                                name='description'
                                label='Description'
                                id={descriptionId}
                            />
                            <FormikControl
                                control="date"
                                name='date'
                                label='Select date'
                                id={dateId}
                            />
                            <FormikControl
                                control="time"
                                name='time'
                                label='Select time'
                                id={timeId}
                            />
                            <FormikControl
                                name='location'
                                label='Location'
                                id={locationId}
                            />
                            <FormikControl
                                control="select"
                                name='category'
                                label='Category'
                                options={categories}
                                id={categoryId}
                            />
                            <FormikControl
                                disabled
                                name='picture'
                                label='Add picture'
                                id={pictureId}
                            />
                            <FormikControl
                                control="select"
                                name='priority'
                                label='Priority'
                                options={priority}
                                id={priorityId}
                            />
                        </Wrapper>
                        <CustomButton type='submit' content="Add event"/>
                    </CustomForm>
                )}
        </Formik>
    )
}

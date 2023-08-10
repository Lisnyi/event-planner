import { FC, useMemo } from "react"
import { useNavigate } from 'react-router-dom'
import { nanoid } from "nanoid"
import { Formik, FormikHelpers } from "formik"
import dayjs from 'dayjs'
import { priority, categories } from "../../../db"
import { useUpdateEventMutation } from "../../../redux"
import { FormikControl, updateEventSchema } from ".."
import { CustomForm, Wrapper } from "./updateEventForm.styled"
import { CustomButton } from "../.."
import { notify } from "../../../utils"
import type { Event, CreateEventFormValues, UpdateEventFormValues } from "../../../types"

type Props = {
    event: Event
}

export const UpdateEventForm: FC<Props> = ({event}) => {

    const navigate = useNavigate()
    const [ updateEvent ] = useUpdateEventMutation()

    const titleId = useMemo(()=> nanoid(), [])
    const descriptionId = useMemo(()=> nanoid(), [])
    const categoryId = useMemo(()=> nanoid(), [])
    const priorityId = useMemo(()=> nanoid(), [])
    const dateId = useMemo(()=> nanoid(), [])
    const timeId = useMemo(()=> nanoid(), [])
    const locationId = useMemo(()=> nanoid(), [])
    const pictureId = useMemo(()=> nanoid(), [])

    const initialState: UpdateEventFormValues = {
        title: event.title,
        description: event.description,
        date: dayjs(event.date),
        time: dayjs(event.time),
        location: event.location,
        category: event.category,
        picture: event.picture,
        priority: event.priority
    }
    
    function handleSubmit(values: CreateEventFormValues, {resetForm}: FormikHelpers<CreateEventFormValues>) {

        const { title, description, date, time, location, picture, category, priority } = values
        const newEvent = {
            title,
            description,
            date: date.format(),
            time: time.format(),
            location,
            category,
            picture,
            priority
        }
        updateEvent({id: event.id, event: newEvent})
        notify('Successfully updated')
        navigate(`/event-info/${event.id}`)
        resetForm()
    }
 
    return (
        <Formik
            initialValues={initialState}
            validationSchema={updateEventSchema}
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
                        <CustomButton type='submit' content="Save"/>
                    </CustomForm>
                )}
        </Formik>
    )
}

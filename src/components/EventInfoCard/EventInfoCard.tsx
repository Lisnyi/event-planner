import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { EventInfoButton, Tag, PriorityTag } from '..'
import { Card, CardImageBox, CardImage, CardDescriptionBox, CardDescription, TagsBox, ButtonsBox } from './EventInfoCard.styled'
import { WideDefaultImage } from '../../assets'
import { useDeleteEventMutation } from '../../redux'
import type { Event } from '../../types'

type Props = {
    event: Event
}

export const EventInfoCard: FC<Props> = ({event}) => {

    const { id, picture, description, category, priority, location, date, time } = event
    
    const navigate = useNavigate()
    const [ deleteEvent ] = useDeleteEventMutation()
    
    const dateFormat = dayjs(date).format("DD.MM")
    const timeFormat =  dayjs(time).format("HH:mm")

    function goToEditEventPage() {
        navigate(`/edit-event/${id}`)
    }
    function handleDelete() {
        try{
            deleteEvent(id)
            .unwrap()
            .then(()=> navigate(`/`))
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <Card>
            <CardImageBox>
                <CardImage src={picture ? picture : WideDefaultImage} alt='Event image'/>
            </CardImageBox>
            <CardDescriptionBox>
                <CardDescription>
                    {description}
                </CardDescription>
                <TagsBox>
                    <Tag content={category}/>
                    <PriorityTag content={priority}/>
                    <Tag content={location}/>
                    <Tag content={`${dateFormat} at ${timeFormat}`}/>
                </TagsBox>
                <ButtonsBox>
                    <EventInfoButton secondary content='Edit' handleClick={goToEditEventPage}/>
                    <EventInfoButton content='Delete event' handleClick={handleDelete}/>
                </ButtonsBox>
            </CardDescriptionBox>
        </Card>
    )
}

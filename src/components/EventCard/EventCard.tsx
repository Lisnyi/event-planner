import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { CardChipsStack, MoreInfoButton } from '..'
import { Card, ImageBox, DescriptionBox, DescriptionTitle, DescriptionText, EventImage, EventInfo, ButtonsBox } from "./EventCard.styled"
import { DefaultImage } from '../../assets'
import type { Event } from '../../types'

type Props = {
    event: Event
}

export const EventCard: FC<Props> = ({event}) => {
    
    const { id, title, date, description, time, location, category, picture, priority  } = event

    const [isHover, setIsHover] = useState(false)
    const navigate = useNavigate()

    const dateFormat = dayjs(date).format("DD.MM")
    const timeFormat =  dayjs(time).format("HH:mm")

    function goToEventInfo() {
        navigate(`/event-info/${id}`)
    }

    function handleMouseEnter() {
        setIsHover(true);
    }
  
    function handleMouseLeave () {
        setIsHover(false);
    }

    return (
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ImageBox isHover={isHover}>
                <CardChipsStack category={category} priority={priority}/>
                <EventImage src={picture ? picture : DefaultImage} alt='Event image'/>
                <EventInfo>
                    <p>
                        {dateFormat} at {timeFormat}
                    </p>
                    <p>
                        {location}
                    </p>
                </EventInfo>
            </ImageBox>
            <DescriptionBox>
                <DescriptionTitle>
                    {title}
                </DescriptionTitle>
                <DescriptionText isHover={isHover}>
                    {description}
                </DescriptionText>
                {isHover && <ButtonsBox>
                                <MoreInfoButton handleClick={goToEventInfo}/>
                            </ButtonsBox>                
                }
            </DescriptionBox>
        </Card>
    )
}
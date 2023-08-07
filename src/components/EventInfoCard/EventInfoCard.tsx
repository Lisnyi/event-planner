import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { EventInfoButton, Tag, PriorityTag } from '..'
import { Card, CardImageBox, CardImage, CardDescriptionBox, CardDescription, TagsBox, ButtonsBox } from './EventInfoCard.styled'
import Foto from '../../assets/images/Rectangle 330.png'

export const EventInfoCard: FC = () => {

    const navigate = useNavigate()

    function goToEditEventPage() {
        navigate("/edit-event")
    }

    return (
        <Card>
            <CardImageBox>
                <CardImage src={Foto} alt='Event image'/>
            </CardImageBox>
            <CardDescriptionBox>
                <CardDescription>
                    Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.
                </CardDescription>
                <TagsBox>
                    <Tag content='Art'/>
                    <PriorityTag content='High'/>
                    <Tag content='Kyiv'/>
                    <Tag content='12.07 at 12:00'/>
                </TagsBox>
                <ButtonsBox>
                    <EventInfoButton secondary content='Edit' handleClick={goToEditEventPage}/>
                    <EventInfoButton content='Delete event' handleClick={()=>console.log('click')}/>
                </ButtonsBox>
            </CardDescriptionBox>
        </Card>
    )
}

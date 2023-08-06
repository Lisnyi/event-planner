import { FC, useState } from 'react'
import { CardChipsStack, MoreInfoButton } from '..'
import { Card, ImageBox, DescriptionBox, DescriptionTitle, DescriptionText, EventImage, EventInfo, ButtonsBox } from "./EventCard.styled"
import Cartinka from '../../assets/images/Rectangle 347.png'
import type { Event } from '../../types'

type Props = {
    event?: Event
}

export const EventCard: FC<Props> = ({event}) => {
    
    const [isHover, setIsHover] = useState(false)
    // const { title, date, description, time, location, category, picture, priority  } = event


    function handleMouseEnter() {
        setIsHover(true);
    }
  
    function handleMouseLeave () {
        setIsHover(false);
    }

    return (
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ImageBox isHover={isHover}>
                <CardChipsStack category='Art' priority='Low'/>
                <EventImage src={Cartinka} alt='Event image'/>
                <EventInfo>
                    <p>
                        12.07 at 12:00
                    </p>
                    <p>
                        Kyiv
                    </p>
                </EventInfo>
            </ImageBox>
            <DescriptionBox>
                <DescriptionTitle>
                    Leadership Conference
                </DescriptionTitle>
                <DescriptionText isHover={isHover}>
                    Unlock the secrets of effective leadership at our transformative Success Leadership Conference.
                </DescriptionText>
                {isHover && <ButtonsBox>
                                <MoreInfoButton handleClick={() => console.log('click')}/>
                            </ButtonsBox>                
                }
            </DescriptionBox>
        </Card>
    )
}
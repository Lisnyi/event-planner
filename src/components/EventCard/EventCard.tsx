import { FC } from 'react'
import { CardChipsStack } from '..'
import { Card, ImageBox, DescriptionBox, DescriptionTitle, DescriptionText, EventImage, EventInfo } from "./EventCard.styled"
import Cartinka from '../../assets/images/Rectangle 347.png'
import type { Event } from '../../types'

type Props = {
    event?: Event
}

export const EventCard: FC<Props> = ({event}) => {

    // const { title, date, description, time, location, category, picture, priority  } = event

    return (
        <Card>
            <ImageBox>
                <CardChipsStack category='Art' priority='Low'/>
                <EventImage src={Cartinka} alt='asd'/>
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
                <DescriptionText>
                    Unlock the secrets of effective leadership at our transformative Success Leadership Conference.
                </DescriptionText>
            </DescriptionBox>
        </Card>
    )
}
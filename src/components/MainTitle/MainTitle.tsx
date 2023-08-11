import { FC } from 'react'
import { Title } from "./MainTitle.styled"

type Props = {
    title: string
}

export const MainTitle: FC<Props> = ({title}) => {
    return (
        <Title to='/'>
            {title}
        </Title>
    )
}
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from "./MainTitle.styled"

type Props = {
    title: string
}

export const MainTitle: FC<Props> = ({title}) => {

    const navigate = useNavigate()

    function navigateToHome() {
        navigate("/");
    }

    return (
        <Title onClick={navigateToHome}>
            {title}
        </Title>
    )
}
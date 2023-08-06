import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './GoBackButton.styled'
import { ArrowLeft } from '../../assets'

export const GoBackButton: FC = () => {

    const navigate = useNavigate()

    function goBackPage() {
        navigate(-1)
    }

    return (
        <Button onClick={goBackPage}>
            <ArrowLeft/>
            Back
        </Button>
    )
}

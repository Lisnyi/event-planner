import { FC } from 'react'
import { CircularLoader, LoaderBox } from './Loader.styled'

export const Loader: FC = () => {
    return (
        <LoaderBox>
            <CircularLoader/>
        </LoaderBox>
    )
}

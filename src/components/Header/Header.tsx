import { FC } from 'react'
import { MainTitle, InputFilter, LanguageSelect } from '..'
import { HeaderBox, TitleBox, InputBox } from "./Header.styled"


export const Header: FC = () => {
    return (
        <HeaderBox>
            <TitleBox>
                <MainTitle title='Evant Planner'/>
                <LanguageSelect/>
            </TitleBox>
            <InputBox>
                <InputFilter/>
            </InputBox>
        </HeaderBox>
    )
}
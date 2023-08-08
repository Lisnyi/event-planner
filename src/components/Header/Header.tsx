import { FC } from 'react'
import { MainTitle, InputFilter, LanguageSelect } from '..'
import { HeaderBox, HeaderSection, TitleBox, InputBox } from "./Header.styled"


export const Header: FC = () => {
    return (
        <HeaderBox>
            <HeaderSection>
                <TitleBox>
                    <MainTitle title='Evant Planner'/>
                    <LanguageSelect/>
                </TitleBox>
                <InputBox>
                    <InputFilter/>
                </InputBox>
            </HeaderSection>
        </HeaderBox>
    )
}
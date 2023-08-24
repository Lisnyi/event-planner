import { FC } from 'react'
import { MainTitle, InputFilter, LanguageSelect } from '..'
import { useFilter } from '../../hooks'
import { HeaderBox, HeaderSection, TitleBox, InputBox } from "./Header.styled"

export const Header: FC = () => {

    const [ {input}, handleInputFilterChange ] = useFilter()

    return (
        <HeaderBox>
            <HeaderSection>
                <TitleBox>
                    <MainTitle title='Evant Planner'/>
                    <LanguageSelect/>
                </TitleBox>
                <InputBox>
                    <InputFilter value={input} handleChange={handleInputFilterChange}/>
                </InputBox>
            </HeaderSection>
        </HeaderBox>
    )
}
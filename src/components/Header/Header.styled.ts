import styled from "styled-components";

export const HeaderBox = styled.header`
    border-bottom: 1px solid ${p => p.theme.colors.blue};
`

export const HeaderSection = styled.div`
    width: 320px;
    padding: 24px;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 768px;
        position: relative;
        padding: 26px 40px 18px 40px;
    }

    @media (min-width: 1440px) {
        width: 1440px;
        padding: 22px 80px;
    }
`

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: 368px;
        position: absolute;
        top: 26px;
        right: 133px;
    }

    @media (min-width: 1440px) {
        width: 410px;
        top: 22px;
        right: 173px;
    }
`
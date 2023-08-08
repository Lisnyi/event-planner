import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: white;
    box-shadow: ${p => p.theme.shadow.main};
`

export const CardImageBox = styled.div`
    width: 100%;
    height: 168px;
    border-radius: 8px;
    
    @media (min-width: 768px) {
        height: 272px;
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
`

export const CardDescriptionBox = styled.div`
    padding: 24px 16px 40px 16px;

    @media (min-width: 768px) {
        padding: 24px 24px 40px 24px;
    }

    @media (min-width: 1440px) {
        padding: 20px 40px 40px 10px;
    }
`

export const CardDescription = styled.p`
    line-height: 20px;
    margin-bottom: 24px;

    @media (min-width: 1440px) {
        margin-bottom: 12px;
    }
`

export const TagsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    gap: 12px;

    @media (min-width: 1440px) {
        margin-bottom: 24px;
    }
`

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`
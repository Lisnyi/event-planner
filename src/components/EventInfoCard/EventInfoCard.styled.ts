import styled from "styled-components";

export const Card = styled.div`
    width: 272px;
    border-radius: 8px;
    background-color: white;
    box-shadow: ${p => p.theme.shadow.main};
`

export const CardImageBox = styled.div`
    width: 100%;
    height: 168px;
    border-radius: 8px;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
`

export const CardDescriptionBox = styled.div`
    padding: 24px 16px 40px 16px;
`

export const CardDescription = styled.p`
    line-height: 20px;
    margin-bottom: 24px;
`

export const TagsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    gap: 12px;
`

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
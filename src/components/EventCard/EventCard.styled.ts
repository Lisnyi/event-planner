import styled from "styled-components";

export const Card = styled.div`
    display: block;
    width: 302px;
    border-radius: 12px;
    box-shadow: ${p => p.theme.shadow.main};
`

export const ImageBox = styled.div`
    width: 100%;
    height: 336px;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

export const EventImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

export const EventInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    opacity: 0.8;
    padding: 8px 16px;
    color: ${p => p.theme.colors.blue};
    line-height: 24px;
`

export const DescriptionBox = styled.div`
    padding: 16px;
`

export const DescriptionTitle = styled.h3`
    margin-bottom: 16px;
    font-family: 'PoppinsMedium', sans-serif;
    font-size: ${p => p.theme.fontSizes.medium};
    line-height: 24px;
`

export const DescriptionText = styled.p`
    line-height: 20px;
`
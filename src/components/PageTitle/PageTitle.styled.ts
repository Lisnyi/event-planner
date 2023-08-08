import styled from "styled-components";

export const Title = styled.h2<{homePage: boolean | undefined}>`
    display: ${p => p.homePage && 'none'};
    font-family: 'PoppinsSemiBold', sans-serif;
    font-size: ${p => p.theme.fontSizes.semiLarge};
    color: ${p => p.theme.colors.black};
    margin-bottom: 24px;

    @media (min-width: 768px) {
        display: block;
        font-size: ${p => p.theme.fontSizes.large};
        margin-bottom: ${p => p.homePage ? 0 : '24px'};
    }
`
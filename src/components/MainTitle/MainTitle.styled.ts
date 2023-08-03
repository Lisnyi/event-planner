import styled from "styled-components";

export const Title = styled.a`
    font-family: 'AlataRegular', sans-serif;
    font-size: ${p => p.theme.fontSizes.semiLarge};
    color: ${p => p.theme.colors.blue};
    cursor: pointer;

    &:hover {
        color: ${p => p.theme.colors.accentBlue};
    }
`
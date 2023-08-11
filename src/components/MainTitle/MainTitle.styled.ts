import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
    font-family: 'AlataRegular', sans-serif;
    font-size: ${p => p.theme.fontSizes.semiLarge};
    color: ${p => p.theme.colors.blue};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${p => p.theme.colors.accentBlue};
    }
`
import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 67px;
    height: 24px;
    padding: 0;
    margin-bottom: 24px;
    border: none;
    background-color: transparent;
    font-family: 'PoppinsMedium', sans-serif;
    font-size: ${p => p.theme.fontSizes.regular};
    color: ${p => p.theme.colors.blue};
    cursor: pointer;

    &:hover, &:focus {
        color: ${p => p.theme.colors.accentBlue};
    }

    svg {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`
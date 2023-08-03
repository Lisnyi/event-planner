import styled from "styled-components";

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    padding: 16px;
    border: none;
    border-radius: 8px;
    background-color: ${p => p.theme.colors.blue};

    &:hover {
        background-color: ${p => p.theme.colors.accentBlue};
    }

    svg {
        color: white;
    }
`
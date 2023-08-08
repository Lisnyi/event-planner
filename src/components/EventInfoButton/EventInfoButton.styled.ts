import styled from "styled-components"
import { CustomButton } from ".."

export const Button = styled(CustomButton)<{secondary: boolean}>`
    width: 110px;
    height: 32px;
    padding: 8px 16px;
    border: 1px solid ${p => p.theme.colors.blue};
    border-radius: 4px;
    box-shadow: none;
    color: ${p => p.secondary && p.theme.colors.blue};
    background-color: ${p => p.secondary && 'white'};
    font-size: 12px;
    line-height: 16px;

    &:hover, &:focus {
        border-color: ${p => p.theme.colors.accentBlue};
        color: ${p => p.secondary && p.theme.colors.accentBlue};
        background-color: ${p => p.secondary && 'white'};
    }

    @media (min-width: 768px) {
        width: fit-content;
        margin-right: ${p => p.secondary && '16px'};
        margin-left: 0;
    }
`
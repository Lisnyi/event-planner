import { ElementType } from "react";
import styled from "styled-components"
import SvgIcon from '@mui/material/SvgIcon';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 12px;
    top: 12px;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;

    :hover {
        svg {
            color: ${p => p.theme.colors.accentBlue};
        }
    }
`

export const CrossIcon = styled(SvgIcon)<{component: ElementType}>`
    color: ${p => p.theme.colors.blue};
`


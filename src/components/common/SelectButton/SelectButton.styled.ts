import styled from "styled-components";
import { Button, Menu } from '@mui/material';

export const OpenButton = styled(Button)<{ open: boolean }>`

    &.MuiButton-root {
        position: ${p => p.open ? 'absolute' : 'static'};
        top: 24px;
        right: 24px;
        min-width: 56px;
        width: ${p => p.open ? '170px' : '56px'};
        height: 56px;
        box-sizing: border-box;
        padding: 0;
        border-radius: 8px;
        border-bottom-right-radius: ${p => p.open ? '0' : '8px'};
        border-bottom-left-radius: ${p => p.open ? '0' : '8px'};
        background-color: white;
        box-shadow: ${p => p.theme.shadow.select};
        font-family: 'PoppinsMedium', sans-serif;
        font-size: ${p => p.theme.fontSizes.medium};
        color: ${p => p.theme.colors.black};
        text-transform: none;

        &:hover, &:focus {
            background-color: white;
            box-shadow: ${p => p.theme.shadow.main};
            color: ${p => p.theme.colors.accentBlue}
        }

        &:hover .MuiButton-endIcon, &:focus .MuiButton-endIcon {
            color: ${p => p.theme.colors.accentBlue};
        }

        .MuiButton-endIcon {
            color: ${p => p.theme.colors.black};
            margin: 0;
            margin-left: ${p => p.open ? '16px' : '0'};
        }
    }
`

export const List = styled(Menu)`
    .MuiPaper-root.MuiPopover-paper.MuiMenu-paper {
        width: 170px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;

        .MuiMenu-list {
            padding: 0;
            
            & li {
                padding: 8px 24px 4px 24px;
                border-top: 1px solid ${p => p.theme.colors.grey};
                font-family: 'PoppinsRegular', sans-serif;
                font-size: ${p => p.theme.fontSizes.regular};
                color: ${p => p.theme.colors.grey};
                display: flex;
                justify-content: space-between;
            }
        }
    }
`
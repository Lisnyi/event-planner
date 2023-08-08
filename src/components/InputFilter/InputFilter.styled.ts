import { ElementType } from "react";
import styled from "styled-components"
import { SvgIcon } from '@mui/material';

export const FilterBox = styled.div`
    position: relative;
    width: fit-content;
`

export const Filter = styled.input`
    width: 272px;
    height: 48px;
    padding: 12px;
    padding-left: 48px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    font-family: 'PoppinsRegular', sans-serif;
    font-size: ${p => p.theme.fontSizes.regular};
    line-height: 14px;
    color: ${p => p.theme.colors.blue};

    ::placeholder {
        font-family: 'PoppinsLight', sans-serif;
        line-height: 14px;
        color: ${p => p.theme.colors.placeholder};
    }

    @media (min-width: 768px) {
       width: 368px;
    }

    @media (min-width: 1440px) {
       width: 410px;
    }
`

export const SearchIcon = styled(SvgIcon)<{component: ElementType}>`
    position: absolute;
    top: 12px;
    left: 12px;
    color: ${p => p.theme.colors.blue};
`
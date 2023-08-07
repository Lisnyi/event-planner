import styled from "styled-components";
import { FormHelperText } from '@mui/material'

export const Message = styled(FormHelperText)`
    &.MuiFormHelperText-root {
        text-align: right;
        color: ${p => p.theme.colors.red};
        font-family: 'PoppinsRegular', sans-serif;
        font-size: 12px;
        line-height: 16px;
        margin-top: 4px;
        margin-right: 19px;
    }
`
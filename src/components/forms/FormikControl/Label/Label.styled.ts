import styled from 'styled-components'
import { InputLabel } from '@mui/material'

export const CustomLabel = styled(InputLabel)<{disabled: boolean | undefined}>`
    &.MuiInputLabel-root {
        display: block;
        position: static;
        transform: none;
        color: ${p => p.disabled ? p.theme.colors.grey : p.theme.colors.blue};
        font-family: 'PoppinsRegular', sans-serif;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.4px;
        margin-bottom: 8px;
        z-index: 0;
    }
`
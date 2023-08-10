import styled from 'styled-components'
import { FormControl } from '@mui/material'

export const Box = styled(FormControl)<{area: string}>`
    &.MuiFormControl-root {
        display: flex;
        position: static;
        grid-area: ${p => p.area};
    }
`
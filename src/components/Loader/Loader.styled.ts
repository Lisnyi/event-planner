import styled from "styled-components";
import { CircularProgress } from '@mui/material';

export const LoaderBox = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const CircularLoader = styled(CircularProgress)`
    &.MuiCircularProgress-root {
        color: ${p => p.theme.colors.blue};
    }
`
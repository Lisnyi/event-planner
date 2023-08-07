import styled from "styled-components";
import { Input } from "@mui/material";

export const CustomTextArea = styled(Input)`
    &.MuiInput-root {
        position: relative;
        margin: 0;
        padding: 0;

        .MuiInput-input {
            box-sizing: border-box;
            height: 56px;
            padding: 16px 36px 16px 12px;
            border: 1px solid ${p => p.theme.colors.blue};
            border-radius: 8px;
            background-color: white;
            font-family: 'PoppinsRegular', sans-serif;
            font-size: 16px;
            line-height: 24px;
        }

        &.Mui-error .MuiInput-input{
            border-color: ${p => p.theme.colors.red};
        }

        button {
            position: absolute;
            top: 16px;

            svg {
                color: ${p => p.error && p.theme.colors.red};
            }
        }
    }
`
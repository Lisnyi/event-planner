import styled, { DefaultTheme } from "styled-components"
import { makeStyles } from 'tss-react/mui'
import { InputBase } from '@mui/material';

export const LangSelect = styled(InputBase)`
    width: 69px;
    padding: 12px 6px 12px 12px;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    .select {
        display: inline-flex;
        justify-content: flex-start;
        padding: 0;
        font-size: ${p => p.theme.fontSizes.medium};
        font-family: 'PoppinsMedium', sans-serif;
        color: ${p => p.theme.colors.black};
    }
    .selectIcon {
        width: 24px;
        height: 24px;
        top: 12px;
        color: ${p => p.theme.colors.black};
    }
`
export const useStyles = makeStyles<{ theme: DefaultTheme }>()(
    (_, { theme }) => ({
        "paper": {
            width: "69px",
            padding: "16px 12px",
            borderRadius: "8px",
            boxSizing: "border-box",
        },
        "list": {
            padding: 0,

            "& li:not(:last-child)": {
                marginBottom: "8px",
            },
            "& li": {
                padding: 0,
                paddingBottom: "4px",
                borderBottom: `1px solid ${theme.colors.grey}`,
                fontSize: theme.fontSizes.medium,
                lineHeight: "20px",
                fontFamily: "PoppinsMedium, sans-serif",
                color: theme.colors.grey,
                backgroundColor: "transparent",
            },
            "& li.Mui-selected": {
                color: theme.colors.accentBlue,
            },
        },
}))
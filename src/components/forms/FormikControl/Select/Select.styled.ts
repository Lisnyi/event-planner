import styled, { DefaultTheme } from 'styled-components';
import { makeStyles } from 'tss-react/mui'
import { Select } from '@mui/base'
import ArrowDown from '../../../../assets/icons/chevron-down.svg'
import ArrowUp from '../../../../assets/icons/chevron-up.svg'

export const SelectButton = styled(Select)`
    &.MuiSelect-root {
        text-align: left;
        height: 56px;
        padding: 16px 12px;
        border: 1px solid ${p => p.theme.colors.grey};
        border-radius: 8px;
        background-color: white;
        color: ${p => p.theme.colors.blue};
        font-family: 'PoppinsRegular', sans-serif;
        font-size: 16px;
        line-height: 24px;
        cursor: pointer;

        &:hover, &:focus {
            border-color: ${p => p.theme.colors.accentBlue};
        }

        &::after {
            content: ${p => p.listboxOpen ? `url(${ArrowUp})` : `url(${ArrowDown})`};
            width: 24px;
            height: 24px;
            float: right;
        }
    }
`

export const useStyles = makeStyles<{ theme: DefaultTheme }>()(
    (_, { theme }) => ({
        "popper": {
            width: '240px',
            padding: '0 16px',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: theme.shadow.main,
            pointerEvents: 'auto',
        },
        "list": {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            backgroundColor: 'white',
            cursor: 'pointer',

            "& li:not(:last-child)": {
                borderBottom: `1px solid ${theme.colors.grey}`,
            },
            "& li": {
                padding: '16px 0',
                fontSize: theme.fontSizes.medium,
                fontFamily: "PoppinsRegular, sans-serif",
                color: theme.colors.black,
            },
            "& li.Mui-selected": {
                color: theme.colors.accentBlue,
            },
        },
}))
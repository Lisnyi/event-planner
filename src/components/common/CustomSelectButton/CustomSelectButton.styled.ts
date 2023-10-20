import styled from 'styled-components'

export const SelectContainer = styled.div<{ open: boolean }>`
    position: relative;
    min-width: 56px;
    width: ${p => p.open ? '170px' : '56px'};
    height: 56px;
    padding: 16px;
    border-bottom: 1px solid;
    border-color: ${p => p.open ? `${p.theme.colors.grey}` : `white`};
    border-radius: ${p => p.open ? `8px 8px 0 0` : '8px'};
    font-family: 'PoppinsMedium', sans-serif;
    font-size: ${p => p.theme.fontSizes.medium};
    color: ${p => p.theme.colors.black};
    box-shadow: ${p => p.theme.shadow.select};
    background-color: white;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: 156px;
        width: fit-content;
    }

    &:hover, &:focus {
        box-shadow: ${p => p.theme.shadow.main};
        color: ${p => p.theme.colors.accentBlue}
    }
`

export const Label = styled.span`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

export const List = styled.ul<{ open: boolean }>`
    display: ${p => p.open ? 'block' : 'none'};
    position: absolute;
    left: 0;
    top: 56px;
    width: 100%;
    border-radius: 0 0 8px 8px;
    padding: 0;
    margin: 0;
    background-color: white;
    box-shadow: ${p => p.theme.shadow.select};
    list-style: none;
    overflow-y: auto;
    z-index: 100;
`

export const ListItem = styled.li<{ selected: boolean, highlighted: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px 8px 24px;
    font-family: 'PoppinsRegular', sans-serif;
    font-size: ${p => p.theme.fontSizes.regular};
    color: ${p => p.selected || p.highlighted ? p.theme.colors.accentBlue : p.theme.colors.grey};
    background-color: ${p => p.highlighted ? p.theme.colors.grey : 'white'};

    &:not(:last-child) {
        border-bottom: 1px solid ${p => p.selected || p.highlighted ? p.theme.colors.accentBlue : p.theme.colors.grey};
    }
`
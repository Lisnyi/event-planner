import styled from 'styled-components'

export const Box = styled.div`
    display: inline-block;
    width: fit-content;
    height: 32px;
    padding: 6px 12px;
    border-radius: 8px;
    box-shadow: ${p => p.theme.shadow.main};
    font-family: 'PoppinsMedium', sans-serif;
    line-height: 20px;
    color: ${p => p.theme.colors.blue};
`
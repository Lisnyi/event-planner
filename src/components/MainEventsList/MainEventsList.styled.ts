import styled from 'styled-components'

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;
    list-style: none;
    margin: 0 auto;
    padding: 0;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 40px;
    }
`
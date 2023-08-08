import styled from 'styled-components'

export const Box = styled.div`
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }
`
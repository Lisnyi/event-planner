import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    gap: 24px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 0;
    }
`
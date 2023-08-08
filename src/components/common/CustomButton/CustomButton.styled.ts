import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 8px;
    padding: 16px 12px;
    box-shadow: ${p => p.theme.shadow.main};
    background-color: ${p => p.theme.colors.blue};
    color: white;
    font-family: 'PoppinsMedium', sans-serif;
    font-size: ${p => p.theme.fontSizes.medium};

    &:hover, &:focus {
        background-color: ${p => p.theme.colors.accentBlue};
    }

    @media (min-width: 768px) {
        width: 193px;
        margin-left: auto;
    }
`
import styled from "styled-components";

export const StyledHome = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 84vh;

    h3 {
        margin-bottom: 30px;
    }

    button {
        border: none;
        background-color: ${({theme}) => theme.color.primary};
        color: #fff;
        font-size: 2rem;
        padding: 15px;
        width: 300px;
        border-radius: 20px;
        margin-bottom: 20px;
    }
`
import styled from "styled-components";

export const StyledDeposit = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 75.7vh;

    h1 {
        margin-bottom: 30px;
        color: ${({theme}) => theme.color.default};
    }

    form {

        input {
            border: solid 2px ${({theme}) => theme.color.primary};
            font-size: 1rem;
            border-radius: 10px;
            padding: 8px 0;
            padding-left: 10px;
            width: 150px;
            color: ${({theme}) => theme.color.default};
        }

        .cpf {
            width: auto;
            font-size: 1rem;
            margin-left: 20px;
            border-radius: 10px 0 0 10px;
        }

        button {
            border: none;
            background-color: ${({theme}) => theme.color.primary};
            color: #fff;
            font-size: 1rem;
            padding: 10px 15px;
            border-radius: 0 10px 10px 0;
            margin-bottom: 20px;
        }
    }

   
`
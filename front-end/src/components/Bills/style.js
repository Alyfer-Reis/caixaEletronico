import styled from "styled-components";

export const StyledBills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    span {
        margin-top: 15px;
        width: 800px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        div {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            border: solid 1px #dbdbdb;
            border-radius: 20px;
            padding: 10px 0;
        }

        svg {
            background-color: ${({theme}) => theme.color.primary};
            color: #fff;
            border-radius: 50px;
            font-size: 2rem;
            padding: 5px;
            margin: 0 10px;
        }

        button {
            border: none;
            background-color: #fff;
            background-color: #ede9e8;
        }
    }
`
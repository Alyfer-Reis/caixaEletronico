import styled from "styled-components";


export const StyledLayout = styled.div`
    header {
        h1 {
            text-align: center;
            padding: 16px;
            background: ${({theme}) => theme.color.primary};
            font-family: ${({theme}) => theme.fontFamily};
            color: ${({theme}) => theme.color.default};
        }

        div {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            background-color: #ede9e8;

            a, p {
                text-decoration: underline;
                font-size: 1.3rem;
                color: ${({theme}) => theme.color.default};
            }

            button {
                border: none;
                background-color: ${({theme}) => theme.color.primary};
                color: #fff;
                padding: 10px 15px;
                border-radius: 10px;
            }
        }
    }

    main {
        background-color: #ede9e8;
    }


    footer {
        background-color: ${({theme}) => theme.color.primary};
        color: #fff;
        text-align: center;
        padding: 10px;
        font-size: .9rem;
    }
`
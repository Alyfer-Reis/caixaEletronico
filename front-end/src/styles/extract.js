import styled from "styled-components";

export const StyledExtract = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 75.7vh;

    h1 {
        margin-bottom: 30px;
        color: ${({theme}) => theme.color.default};
    }

    input {
        border: solid 2px ${({theme}) => theme.color.primary};;
        font-size: 1rem;
        border-radius: 10px 0 0 10px;
        padding: 8px 10px;
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


    .extract {
        border: solid 1px #dbdbdb;
        width: 350px;
        height: 340px;
        padding: 20px 15px;
        overflow: hidden;
        border-radius: 15px;
        text-align: center;

       &>div {
            padding-right: 20px;
            width: 100%;
            height: 310px;

            ::-webkit-scrollbar {
                width: 0.4em;
            }

            ::-webkit-scrollbar-thumb {
                background-Color: #626262;
                border-radius: 10px;
            }
       }

    }

    .line {
        display: flex;
        justify-content: space-between;
        border-bottom: solid 2px #b81f1a;
        padding-bottom: 2px;
        margin-bottom: 15px;

        svg {
            margin-right: 4px;
        }

        p {
            display: flex;
            align-items: center;
            font-size: .9rem;
            font-weight: 800;
            color: ${({theme}) => theme.color.default};
        }

        .money{
            color: #b81f1a;
        }
    }

    .plus {
        border-color: #1e9c2e;
        .money{
            color: #1e9c2e;
        }
    }
    .total {
        border-color: ${({theme}) => theme.color.default};
        margin-bottom: 30px;
    }
`
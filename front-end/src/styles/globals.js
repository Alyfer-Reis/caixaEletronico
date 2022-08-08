import { createGlobalStyle } from "styled-components";


export const theme = {
    fontFamily: "Josefin Sans",
    color: {
        default: '#333',
        primary: '#6b0000'
    }


}

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Rubik', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        overflow-x: hidden;

        button {
            cursor: pointer;
        }

        input {
            outline: none;
        }
    }

`
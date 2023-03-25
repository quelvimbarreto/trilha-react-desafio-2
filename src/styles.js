import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        //box-shadow: 0 0 0 1px red;
    }

    body {
        background-color: #22272e;
        color: #FFFFFF;
    }

    a{
        text-decoration: none;
        color: inherit;

    }

`;

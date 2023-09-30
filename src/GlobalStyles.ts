import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
    }

    body {
        font-size: 16px;
        font-family: 'Kumbh Sans', sans-serif;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    :root {
        // ========= Colors =========

        //Primary
        --Orange: hsl(26, 100%, 55%);
        --Pale-orange: hsl(25, 100%, 94%);

        //Neutral
        --Very-dark-blue: hsl(220, 13%, 13%);
        --Dark-grayish-blue: hsl(219, 9%, 45%);
        --Grayish-blue: hsl(220, 14%, 75%);
        --Light-grayish-blue: hsl(223, 64%, 98%);
        --White: hsl(0, 0%, 100%);
        --Black: hsl(0, 0%, 0%); //(with 75% opacity for lightbox background)
    }
`;

export default GlobalStyle;

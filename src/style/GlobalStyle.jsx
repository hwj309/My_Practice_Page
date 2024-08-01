import { createGlobalStyle } from "styled-components";
import porckatBall2 from "../image/porckatBall2.png";

const GlobalStyle = createGlobalStyle`
    body {
        cursor: url(${porckatBall2}), auto;
    }
`;

export default GlobalStyle;
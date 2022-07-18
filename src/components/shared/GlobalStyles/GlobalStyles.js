import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VAR */
  :root{
    --font-stack-1-light: "Mortend Light";
    --font-stack-1-regular: "Mortend Regular";
    --font-stack-1-bold: "Mortend Bold";
    --font-stack-1-extraBold: "Mortend ExtraBold";
    --font-stack-2-light: "Galano Light";
    --font-stack-2-regular: "Galano Regular";
    --font-stack-2-medium: "Galano Medium";
    --font-stack-2-bold: "Galano Bold";
    --white: #fff;
    --black: #000;
    --gold: #E8B90F;
    --purple: #CD65FD;
    --linear-gradient: linear-gradient(180deg, #ECC4FF 0%, rgba(176, 86, 218, 0.994271) 41.15%, rgba(138, 107, 219, 0.987369) 60.94%, rgba(216, 226, 245, 0.98) 100%);
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
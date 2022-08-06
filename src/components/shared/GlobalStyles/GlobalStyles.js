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
    --font-stack-3: 'Aubrey', cursive;
    --white: #fff;
    --black: #000;
    --gold: #E8B90F;
    --purple: #CD65FD;
    --dark-purple: #0A011E;
    --linear-gradient: linear-gradient(180deg, #ECC4FF 0%, rgba(176, 86, 218, 0.994271) 41.15%, rgba(138, 107, 219, 0.987369) 60.94%, rgba(216, 226, 245, 0.98) 100%);
    --border-radius: 0.625em;
    --blur: 0.625em;
  }


  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--dark-purple)
  }

  /* GLOW ANIMATION */
  @keyframes glow {
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }
`;

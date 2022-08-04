import styled from "styled-components";

import bgImg from "../../assets/images/space-bg.png";

export const StyledHero = styled.div`
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  /* background: linear-gradient(180deg, transparent 80%, #000),
    linear-gradient(0deg, transparent 80%, #000), url(${bgImg}); */
  background-size: cover;
  background-position: top 15%;
  /* backdrop-filter: drop-shadow(20px 4px 50px #000);
  -webkit-backdrop-filter: drop-shadow(20px 4px 50px #000); */
  height: 100vh;
  padding-top: 45%;
  /* padding-left: 5em; */

  /* ::after {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    height: 10em;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    );
    backdrop-filter: blur(100px);
  } */

  #hero-particles {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 8;
  }

  .hero-title {
    margin-left: 10%;
    text-transform: uppercase;
    font-family: var(--font-stack-1-light);

    h3 {
      color: var(--white);
      margin-bottom: 0.5em;
      font-weight: 400;
    }

    h2 {
      /* color: var(--gold); */
      font-size: 2.3em;
      /* background: linear-gradient(top, var(--gold), white, var(--gold));
      -webkit-background: linear-gradient(top, var(--gold), white, var(--gold));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      background: -webkit-linear-gradient(top, #e8b90f, #fde08d, #e8b90f);
      background: linear-gradient(top, #e8b90f, #fde08d, #e8b90f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .temple-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 30em;
    opacity: 0.7;
    filter: drop-shadow(20px 4px 50px #000);
    -webkit-filter: drop-shadow(20px 4px 50px #000);
    z-index: 99;
    /* transform: translate(-0, -0); */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .ellipse-blur {
    position: absolute;
    top: 10%;
    transform: translateY(-35%);
    right: 0;
  }

  .blur-box {
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 50%, #000);
    height: 15em;
    min-width: 100vw;
    z-index: 998;
  }

  @media screen and (max-width: 600px) {
    .hero-title {
      h3 {
        font-size: 1em;
      }

      h2 {
        font-size: 1.8em;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding-top: 13%;
  }
`;

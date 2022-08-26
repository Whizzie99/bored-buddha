import styled from "styled-components";

import bgImg from "../../assets/images/space-bg.png";

export const StyledHero = styled.div`
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-size: cover;
  background-position: top 15%;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 45%;

  #hero-particles {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 8;
  }

  .hero-title {
    position: relative;
    margin-left: 10%;
    text-transform: uppercase;
    font-family: var(--font-stack-1-light);

    h3 {
      color: var(--white);
      margin-bottom: 0.5em;
      font-weight: 400;
      text-transform: capitalize;
    }

    h2 {
      font-size: 2.3em;
      background: -webkit-linear-gradient(top, #e8b90f, #fde08d, #e8b90f);
      background: linear-gradient(top, #e8b90f, #fde08d, #e8b90f);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .text-star {
      position: absolute;
      top: 45%;
      mix-blend-mode: screen;
      animation: glow 4s infinite alternate;
    }

    .animate-star {
      animation: glow 4s infinite alternate;
    }

    .text-star-1 {
      left: 4.3%;
    }

    .text-star-2 {
      left: 14.3%;
    }

    .text-star-3 {
      left: 28.2%;
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

    .temple {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .temple-star-top {
      position: absolute;
      bottom: 72%;
      left: 45.9%;
      z-index: 999;
      animation: glow 4s infinite alternate;
      mix-blend-mode: screen;
    }

    /* .temple-star-left {
      position: absolute;
      bottom: 9em;
      left: 2%;
      animation: glow 4s infinite alternate;
      mix-blend-mode: screen;
      z-index: 999;
    } */
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
    z-index: 996;
  }

  /* MEDIA QUERIES */

  @media screen and (min-width: 768px) {
    padding-top: 20%;

    .temple-text-img {
      width: 70%;
      object-fit: contain;
    }
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

    .temple-text-img {
      width: 75%;
      object-fit: contain;
    }
  }

  @media screen and (min-width: 1200px) {
    padding-top: 11.5%;

    .temple-text-img {
      width: auto;
    }
  }
`;

import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

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
  padding-top: 10%;
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
      color: var(--gold);
      font-size: 2em;
    }
  }

  .temple-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 30em;
    opacity: 0.6;
    filter: drop-shadow(20px 4px 50px #000);
    -webkit-filter: drop-shadow(20px 4px 50px #000);

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
`;

import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledHero = styled.div`
  /* position: relative; */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bgImg});
  /* background: linear-gradient(180deg, transparent 80%, #000),
    linear-gradient(0deg, transparent 80%, #000), url(${bgImg}); */
  background-size: cover;
  background-position: top 15%;
  /* backdrop-filter: drop-shadow(20px 4px 50px #000);
  -webkit-backdrop-filter: drop-shadow(20px 4px 50px #000); */
  height: 100vh;

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
`;

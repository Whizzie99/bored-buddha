import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledHero = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bgImg});
  background-size: cover;
  background-position: top 15%;
  height: 100vh;
`;

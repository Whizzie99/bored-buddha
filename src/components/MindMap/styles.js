import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bgImg});
  background-size: cover;
  background-position: bottom 20%;
  padding: 3em 0;

  .section-header {
    text-align: center;
    text-transform: uppercase;

    h3 {
      color: var(--white);
      font-family: var(--font-stack-1-light);
      font-size: 1.2em;
      font-weight: 300;
      margin-bottom: 1em;
    }

    h2 {
      color: var(--gold);
      font-family: var(--font-stack-1-light);
      font-size: 2em;
      /* font-weight: 400; */
    }
  }

  .section-description {
    font-family: var(--font-stack-2-regular);
    color: var(--white);
    text-align: center;
    margin-top: 1.2em;
    line-height: 2;
    font-size: 1.1em;
  }
`;

export const StyledUtilites = styled.div`
  margin-top: 4em;

  > h3 {
    text-align: center;
    color: var(--white);
    font-family: var(--font-stack-2-bold);
    margin: 1.5em 0;
  }

  > h3::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledUtlityCarousel = styled.div``;

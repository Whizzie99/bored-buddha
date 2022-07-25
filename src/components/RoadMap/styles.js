import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  padding: 5em 0;

  .section-header {
    text-align: center;
    text-transform: uppercase;

    h3 {
      /* text-align: center; */
      color: var(--white);
      font-family: var(--font-stack-1-light);
      font-size: 0.9em;
      margin-bottom: 1em;
      /* text-transform: uppercase; */
    }

    h2 {
      color: var(--gold);
      font-family: var(--font-stack-1-light);
      font-size: 2em;
    }
  }

  .section-description {
    font-family: var(--font-stack-2-regular);
    color: var(--white);
    text-align: center;
    margin-top: 2em;
    line-height: 2;
    font-size: 1.1em;
  }

  .map-section {
    width: 50%;
    margin: 2em auto;

    .roadmap-card:first-child {
      .circle {
        background: linear-gradient(
          197.1deg,
          #d68204 20.22%,
          #fbdd6e 51.04%,
          #f3c20a 76.55%,
          #d68204 88.24%
        );
      }

      .line {
        height: 50%;
        top: 50%;
      }
    }

    .roadmap-card:last-child {
      .line {
        height: 50%;
      }
    }
  }
`;

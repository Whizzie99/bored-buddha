import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3em 0;

  .section-title {
    margin: 3em 0;
    text-align: center;
    text-transform: uppercase;
    h2 {
      font-family: var(--font-stack-1-light);
      font-size: 2em;
      color: var(--gold);
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8em;
    margin: 2em 0;

    > div:nth-child(5) {
      grid-column: 2/3;
    }
  }
`;

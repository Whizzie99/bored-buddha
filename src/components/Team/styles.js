import styled from "styled-components";

import bgImg from "../../assets/images/space-bg-3.png";

export const StyledWrapper = styled.div`
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5em 0;

  .gold-dust {
    position: absolute;
    top: -15%;
    /* transform: translateY(-80%); */
    left: 0;
    z-index: 1;
    opacity: 0.7;
    /* height: 40em; */

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .section-title {
    position: relative;
    margin: 3em 0;
    text-align: center;
    text-transform: uppercase;
    width: 95%;
    margin: 0 auto;

    h2 {
      font-family: var(--font-stack-1-light);
      font-size: 1.2em;
      color: var(--gold);
    }

    .bulb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .bulb-left {
      left: 0;
    }

    .bulb-right {
      right: 0;
    }
  }

  .team-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.3em;
    row-gap: 1em;
    margin: 4em 0;
    z-index: 2;
  }

  @media screen and (min-width: 1200px) {
    .section-title {
      width: 62%;

      h2 {
        font-size: 1.5em;
      }
    }

    .team-grid {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 1em;

      > div:nth-child(5) {
        grid-column: 2/3;
      }
    }
  }
`;

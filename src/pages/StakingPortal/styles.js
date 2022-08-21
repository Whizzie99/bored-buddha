import styled from "styled-components";
import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(10, 1, 30, 0.85),
      rgba(10, 1, 30, 0.85)
    ),
    url(${bgImg});
  background-size: cover;
`;

export const StyledStakingHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: var(--white);

  h2 {
    font-family: var(--font-stack-1-bold);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h3 {
    font-family: var(--font-stack-1-light);
    color: var(--gold);
    text-transform: uppercase;
    text-align: center;
    margin-top: 0.6em;
    font-size: 0.9em;
  }

  p {
    font-family: var(--font-stack-1-light);
    text-transform: uppercase;
    text-align: center;
    margin: 2em 0;
    font-size: 0.8em;
  }

  button {
    background: var(--linear-gradient-2);
    border: none;
    color: var(--white);
    font-family: var(--font-stack-1-light);
    padding: 1em;
    border-radius: var(--border-radius);
    font-size: 0.8em;
    text-transform: capitalize;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 1200px) {
    h3 {
      font-size: 1.1em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export const StyledStakingMetric = styled.div`
  > h2 {
    font-family: var(--font-stack-1-bold);
    text-transform: uppercase;
    text-align: center;
    color: var(--white);
    font-size: 1.1em;
  }

  .staking-metric-grid {
    width: 90%;
    margin: 2em auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;

    .staking-metric-grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: var(--font-stack-1-light);
      text-transform: uppercase;
      color: var(--white);
      height: 20.5em;
      font-size: 0.9em;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(217, 217, 217, 0.19) 100%
      );
      box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      border-width: 0.1em;
      border-style: solid;
      border-image: linear-gradient(
        to right,
        rgba(125, 50, 160, 0.4),
        rgba(255, 255, 255, 0.35),
        rgba(255, 255, 255, 0.72),
        rgba(224, 157, 255, 0.56)
      );
      border-image-slice: 1;

      ul {
        list-style: none;
        li {
          margin: 0.5em 0;

          span:nth-child(2) {
            margin-left: 0.5em;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    > h2 {
      text-align: left;
      font-size: 1.3em;
    }

    .staking-metric-grid {
      width: 80%;
      grid-template-columns: repeat(2, 1fr);

      .staking-metric-grid-item {
        font-size: 1em;
      }
    }
  }
`;

export const StyledStakingMechanism = styled.div`
  margin: 2em 0;
  padding: 1em;
  h2 {
    font-family: var(--font-stack-1-bold);
    font-size: 1.1em;
    text-align: center;
    color: var(--gold);
    text-transform: uppercase;
    margin: 2em 0;
    margin-top: 4em;
  }

  .content {
    font-family: var(--font-stack-2-regular);
    color: var(--white);

    ol > li {
      margin: 1.1em 0;

      ul {
        list-style-type: lower-roman;
        margin-left: 0.8em;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 0;

    h2 {
      font-size: 1.3em;
    }
  }
`;

export const StyledTokendDistribution = styled.div`
  margin: 4em 0;
  h2 {
    font-family: var(--font-stack-1-regular);
    text-align: center;
    text-transform: capitalize;
    font-size: 1.1em;
    color: var(--gold);
    margin: 5em 0;
  }

  .token-distribution-grid {
    display: flex;
    flex-direction: column;
  }

  .grid-item-left,
  .grid-item-right {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .grid-item-left {
    justify-content: center;
  }

  .grid-item-left img {
    width: 20em;
    height: 20em;
    border-radius: 50%;
    /* border: 0.01em solid var(--white); */
    object-fit: cover;
  }

  .grid-item-right {
    justify-content: flex-start;
  }

  .token-legend {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    width: 90%;
    margin: 0 auto;
    margin-top: 2em;
  }

  .legend-row {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    color: var(--white);
    font-family: var(--font-stack-2-regular);
    font-size: 0.9em;
    text-transform: capitalize;
  }

  .legend-text {
    text-align: center;
  }

  .legend-row.total-row {
    border-top: 0.1em solid var(--white);
    padding-top: 1em;
    font-family: var(--font-stack-2-bold);
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.3em;
    flex-direction: row;

    .token-distribution-grid {
      flex-direction: row;
    }

    .grid-item-left,
    .grid-item-right {
      width: 50%;
    }

    .token-legend {
      width: 60%;
      margin-top: 0;
    }
  }
`;

import styled from "styled-components";

export const StyledWrapper = styled.div``;

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
    font-size: 1.1em;
  }

  p {
    font-family: var(--font-stack-1-light);
    text-transform: uppercase;
    text-align: center;
    margin: 2em 0;
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
`;

export const StyledStakingMetric = styled.div`
  > h2 {
    font-family: var(--font-stack-1-bold);
    text-transform: uppercase;
    color: var(--white);
    font-size: 1.3em;
  }

  .staking-metric-grid {
    width: 80%;
    margin: 2em auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;

    .staking-metric-grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: var(--font-stack-1-light);
      text-transform: uppercase;
      color: var(--white);
      height: 20.5em;
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
`;

export const StyledStakingMechanism = styled.div`
  margin: 2em 0;
  h2 {
    font-family: var(--font-stack-1-bold);
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
`;

export const StyledTokendDistribution = styled.div`
  margin: 4em 0;
  h2 {
    font-family: var(--font-stack-1-regular);
    text-align: center;
    text-transform: capitalize;
    color: var(--gold);
  }
`;

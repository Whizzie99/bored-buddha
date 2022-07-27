import styled from "styled-components";

export const StyledUtilityCard = styled.div`
  position: relative;
  padding: 1.1em 2em;
  height: 25em;
  border-radius: 0.5em;
  background: linear-gradient(
    180deg,
    rgba(205, 97, 254, 0.08) 0%,
    rgba(95, 149, 255, 0.08) 100%
  );
  backdrop-filter: blur(1em);
  -webkit-backdrop-filter: blur(1em);

  .icon {
    margin: 0 auto;
    margin-top: 2em;
    width: 2.1em;
    height: 2.1em;
  }

  .card-title {
    text-align: center;
    color: var(--gold);
    text-transform: uppercase;
    font-family: var(--font-stack-1-regular);
    font-size: 1em;
    margin: 0.5em 0;
  }

  > p {
    font-family: var(--font-stack-2-light);
    font-size: 0.95em;
    text-align: center;
    color: var(--white);
  }

  .small-box {
    position: absolute;
    left: 50%;
    bottom: 3.3%;
    height: 1.2em;
    width: 2em;
    transform: translate(-50%, -3.3%);
    background: var(--white);
  }
`;

import styled from "styled-components";

export const StyledUtilityCard = styled.div`
  position: relative;
  padding: 1.1em 2em;
  height: 20em;
  border-radius: 0.625em;
  background-image: linear-gradient(
    180deg,
    rgba(205, 97, 254, 0.08) 0%,
    rgba(95, 149, 255, 0.08) 100%
  );
  backdrop-filter: blur(40px);
  /* background: linear-gradient(
    180deg,
    rgba(126, 125, 125, 0.08) 0%,
    rgba(0, 0, 0, 0.69) 25%,
    rgba(0, 0, 0, 0.63) 74.48%,
    rgba(148, 145, 145, 0.03) 100%
  ); */
  /* backdrop-filter: blur(0.1em) !important; */
  /* -webkit-backdrop-filter: blur(3px) !important; */

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

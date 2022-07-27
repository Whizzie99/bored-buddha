import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  background: var(--black);
  padding: 5em 0;

  .section-title {
    font-family: var(--font-stack-1-light);
    font-size: 1.5em;
    text-align: center;
    margin: 2em 0;
    color: var(--gold);
    text-transform: uppercase;
  }
`;

export const StyledCarousel = styled.div`
  position: relative;
  margin: 8em 0;
  .img-card {
    height: 15em;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const StyledContentBox = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(126, 125, 125, 0.08) 0%,
    rgba(0, 0, 0, 0.69) 25%,
    rgba(0, 0, 0, 0.63) 74.48%,
    rgba(148, 145, 145, 0.03) 100%
  );
  border-radius: 0.9em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1em);
  -webkit-backdrop-filter: blur(1em);
  border: 0.1em solid rgba(255, 255, 255, 0.1);
  padding: 2.5em;
  z-index: 8;
  height: 22em;

  p {
    font-family: var(--font-stack-2-regular);
    font-size: 0.9em;
    color: var(--white);
    text-align: center;
    line-height: 2;
  }

  a {
    font-family: var(--font-stack-2-regular);
    background: linear-gradient(
      180deg,
      #8744a7 0%,
      #2e1e64 48.96%,
      #183875 100%
    );
    border-radius: 0.8em;
    color: var(--white);
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.7em 1.5em;
  }
`;

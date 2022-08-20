import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  position: fixed;
  top: 20%;
  right: 3%;
  height: 4em;
  width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 250, 250, 0.03) 0%,
    rgba(255, 255, 255, 0) 52.6%,
    rgba(255, 255, 255, 0.02) 96.87%
  );
  filter: drop-shadow(-7px -7px 20px rgba(0, 0, 0, 0.7));
  /* filter: drop-shadow(-12px -3px 10px #000);
  -webkit-filter: drop-shadow(-12px -3px 10px #000); */
  /* filter: drop-shadow(-7px -7px 20px rgba(0, 0, 0, 0.7)); */
  /* -webkit-filter: drop-shadow(-7px -7px 20px rgba(0, 0, 0, 0.7)); */
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  z-index: 998;
  cursor: pointer;

  .muted-line {
    position: absolute;
    top: 0;
    left: 20%;
    height: 100%;
    width: 65%;
  }

  @media screen and (min-width: 1200px) {
    top: 20%;
    right: 15%;
  }
`;

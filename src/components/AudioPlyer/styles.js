import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  position: fixed;
  top: 0;
  right: 10%;
  height: 10em;
  width: 10em;
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
  backdrop-filter: blur(25px);
`;

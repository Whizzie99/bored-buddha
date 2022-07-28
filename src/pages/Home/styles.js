import styled from "styled-components";

import bgImg from "../../assets/images/space-bg-2.png";

export const StyledWrapper = styled.div`
  /* font-family: var(--font-stack-2-bold); */
  overflow-x: hidden;
  .section-wrapper {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.65)
      ),
      url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top -12% left 50%;
  }
`;

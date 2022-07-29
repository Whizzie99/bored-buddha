import styled from "styled-components";

export const StyledFooter = styled.div`
  .footer-section {
    display: flex;
    align-items: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    .left-section {
      p {
        font-family: var(--font-stack-3);
        text-transform: capitalize;
        font-size: 1.1em;
      }
    }

    .left-section,
    .right-section {
      flex: 0.5;
    }
  }
`;

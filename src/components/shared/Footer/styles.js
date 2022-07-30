import styled from "styled-components";

export const StyledFooter = styled.div`
  .footer-section {
    display: flex;
    align-items: center;
    width: 85%;
    margin-left: auto;
    margin-right: auto;

    .left-section {
      p {
        font-family: var(--font-stack-3);
        text-transform: capitalize;
        font-size: 0.9em;
      }
    }

    .right-section {
      flex: 0.53;
    }

    .left-section {
      flex: 0.47;
    }
  }

  @media screen and (min-width: 1200px) {
    .footer-section {
      width: 60%;
      .left-section {
        p {
          font-size: 1.1em;
        }
      }

      .left-section,
      .right-section {
        flex: 0.5;
      }
    }
  }
`;

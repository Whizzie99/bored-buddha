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
        font-family: var(--font-stack-2-light);
        text-transform: capitalize;
        font-size: 0.8em;
        color: var(--white);
      }
    }

    .right-section {
      flex: 0.53;

      .footer-logo {
        width: 15%;

        img {
          width: 100%;
          object-fit: contain;
        }
      }
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

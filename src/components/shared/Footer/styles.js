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
        font-size: 0.9em;
        color: var(--white);
      }
    }

    .right-section {
      flex: 0.6;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .footer-logo {
        width: 15%;

        img {
          width: 100%;
          object-fit: contain;
        }
      }

      .footer-social-icons {
        display: flex;
        align-items: center;
        gap: 0.5em;
        list-style: none;
      }
    }

    .left-section {
      flex: 0.4;
    }
  }

  @media screen and (max-width: 600px) {
    .footer-social-icons li a svg {
      height: 1em;
      width: 1em;
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

import styled from "styled-components";

export const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) =>
    props.active
      ? "linear-gradient( 180deg, rgba(255, 255, 255, 0.12) 0%,rgba(217, 217, 217, 0.06) 100%)"
      : "transparent"};
  box-shadow: ${(props) =>
    props.active ? "0px 4px 4px -1px rgba(0, 0, 0, 0.25)" : "none"};
  backdrop-filter: ${(props) => (props.active ? "blur(2.5em)" : "none")};
  -webkit-backdrop-filter: ${(props) =>
    props.active ? "blur(2.5em)" : "none"};
  padding: 0.5em 0;
  z-index: 999;

  .hamburger-menu {
    position: absolute;
    top: 0.8em;
    right: 1em;
    font-size: 2em;
    color: var(--white);
  }

  .nav-items {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
  }

  .nav-links-section {
    ul {
      display: flex;
      flex-direction: column;
      gap: 2em;
      list-style: none;

      li {
        a {
          font-family: var(--font-stack-1-light);
          text-decoration: none;
          color: var(--white);
          font-weight: 100;
          font-size: 0.7em;
          text-transform: uppercase;
        }
      }
    }
  }

  .social-links {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      align-items: center;
      list-style: none;

      li {
        a {
          font-size: 1.2em;
          text-decoration: none;
        }
      }

      li:nth-child(1),
      li:nth-child(2) {
        a {
          color: var(--white);
        }
      }

      li:nth-child(3) {
        a {
          display: flex;
          align-items: center;
          border: 0.1em solid var(--white);
          padding: 0.2em 0.8em;
          border-radius: 0.5em;

          span:first-child {
            font-family: var(--font-stack-1-light);
            font-size: 0.7em;
            margin-right: 0.3em;
            background: var(--linear-gradient);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }

  .nav-links-section.show-menu,
  .social-links.show-menu {
    display: block;
  }

  @media screen and (max-width: 600px) {
    .nav-links-section {
      display: none;
      ul {
        align-items: center;
      }
    }

    .social-links {
      display: none;
      ul {
        margin-top: 2em;
      }
    }
  }

  /* QUERIES */
  @media screen and (min-width: 1200px) {
    .hamburger-menu {
      display: none;
    }

    .nav-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links-section {
      ul {
        flex-direction: row;
      }
    }

    .social-links {
      ul {
        flex-direction: row;
      }
    }
  }

  .hamburger {
    display: none;
  }
`;

import styled from "styled-components";

export const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  padding: 0.5em 0;
  z-index: 999;
  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links-section {
    ul {
      display: flex;
      gap: 2em;
      list-style: none;

      li {
        a {
          font-family: var(--font-stack-1-light);
          text-decoration: none;
          color: var(--white);
          font-weight: 100;
          font-size: 0.8em;
          text-transform: uppercase;
        }
      }
    }
  }

  .social-links {
    ul {
      display: flex;
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
`;

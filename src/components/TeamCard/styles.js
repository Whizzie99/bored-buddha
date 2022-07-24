import styled from "styled-components";

export const StyledWrapper = styled.div`
  .member-image {
    height: 12em;
    width: 12em;
    margin: 0 auto;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .member-name {
    font-family: var(--font-stack-2-medium);
    font-weight: 700;
    font-size: 1.5em;
    margin: 0.3em 0;
    text-align: center;
    color: var(--white);
    text-transform: capitalize;
  }

  .member-title {
    font-family: var(--font-stack-2-light);
    font-style: italic;
    color: var(--white);
    text-transform: capitalize;
    text-align: center;
    font-size: 1em;
  }

  .member-socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    margin: 0.3em 0;

    span {
      a {
        text-decoration: none;
      }
    }
  }
`;

import styled from "styled-components";

// import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  /* background: linear-gradient(
      to bottom,
      rgba(10, 1, 30, 0.7),
      rgba(10, 1, 30, 0.7)
    ),
    url(); */
  /* background-position: center; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  padding: 5em 0;

  .section-title {
    margin: 3em 0;
    text-align: center;
    text-transform: uppercase;
    h2 {
      font-family: var(--font-stack-1-light);
      font-size: 1.5em;
      color: var(--gold);
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.3em;
    row-gap: 1em;
    margin: 4em 0;

    > div:nth-child(5) {
      grid-column: 2/3;
    }
  }
`;

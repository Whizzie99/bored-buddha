import styled from "styled-components";

export const StyledRoadMapCard = styled.div`
  position: relative;
  padding: 1.5em;
  z-index: 5;
  /* background: linear-gradient(
    180deg,
    rgba(223, 152, 255, 0.14) 0%,
    rgba(71, 131, 248, 0.12) 100%
  );
  backdrop-filter: blur(1em);
  -webkit-backdrop-filter: blur(1em);
  border-radius: 0.9em;
  padding: 1.5em 2.2em;
  margin: 1.5em 0; */

  .card-container {
    background: linear-gradient(
      180deg,
      rgba(223, 152, 255, 0.14) 0%,
      rgba(71, 131, 248, 0.12) 100%
    );
    backdrop-filter: blur(var(0));
    -webkit-backdrop-filter: blur(var(--blur));
    /* border-radius: 0.9em; */
    border-radius: var(--border-radius);
    padding: 1.5em 2.2em;
    /* margin: 1.5em 0; */
  }

  .card-header {
    font-family: var(--font-stack-2-bold);
    text-transform: uppercase;
    font-size: 0.9em;
    margin-bottom: 0.5em;
    /* font-weight: bold; */
    h3 {
      font-size: 1.1em;
      .card-phase {
        color: var(--white);
      }

      span {
        color: var(--gold);
      }

      span:nth-child(2) {
        margin-left: 0.5em;
      }
    }
  }

  .card-content {
    /* color: var(--white); */
    font-family: var(--font-stack-2-light);
    font-size: 0.95em;

    b {
      color: var(--white);
    }

    p {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .circle {
    position: absolute;
    top: 50%;
    left: -2em;
    transform: translateY(-50%);
    height: 2em;
    width: 2em;
    border-radius: 50%;
    background: var(--white);
    z-index: 3;
  }

  .circle:nth-child(1) {
    background: linear-gradient(
      197.1deg,
      #d68204 20.22%,
      #fbdd6e 51.04%,
      #f3c20a 76.55%,
      #d68204 88.24%
    );
  }

  .line {
    position: absolute;
    top: 0;
    left: -1em;
    height: 100%;
    width: 0.1em;
    background: var(--white);
  }
`;

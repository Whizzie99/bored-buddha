import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* background: var(--dark-purple); */
  position: relative;
  padding: 5em 0;
  padding-bottom: 0;

  .gold-dust {
    position: absolute;
    z-index: 1;
  }

  .gold-dust-1 {
    top: 20%;
    right: 10%;
  }

  .gold-dust-2 {
    top: 30%;
    left: 0;
  }

  .section-title {
    position: relative;
    font-family: var(--font-stack-1-light);
    text-align: center;
    font-size: 1.5em;
    color: var(--gold);
    text-transform: uppercase;
    z-index: 2;
  }

  .faq-section {
    position: relative;
    width: 85%;
    margin: 3em auto;
    z-index: 2;

    .faq-card {
      background: rgba(255, 252, 252, 0.1);
      backdrop-filter: blur(var(--blur));
      -webkit-backdrop-filter: blur(var(--blur));
      margin: 1.2em 0;
      cursor: pointer;
      border-radius: 0.625em;

      .faq-card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em;
        font-family: var(--font-stack-2-light);
        color: var(--white);
        font-size: 0.8em;
      }

      .faq-card-bottom {
        padding: 1.5em;
        padding-top: 0.3em;
        font-family: var(--font-stack-2-light);
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9em;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .section-title {
      font-size: 2em;
    }

    .faq-section {
      width: 60%;
    }
  }
`;

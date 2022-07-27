import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* background: var(--dark-purple); */
  padding: 5em 0;
  padding-bottom: 0;

  .section-title {
    font-family: var(--font-stack-1-light);
    text-align: center;
    font-size: 2em;
    color: var(--gold);
    text-transform: uppercase;
  }

  .faq-section {
    width: 60%;
    margin: 3em auto;

    .faq-card {
      /* position: relative; */
      background: rgba(255, 252, 252, 0.1);
      backdrop-filter: blur(1.25em);
      -webkit-backdrop-filter: blur(1.25em);
      margin: 1.2em 0;
      cursor: pointer;
      /* border: 5px solid transparent; */
      /* background-clip: padding-box; */
      /* padding: 0.5em; */
      /* border-image-source: linear-gradient(to bottom, #c954ff 44%, #4783f8 22%); */
      /* border-image-slice: 0.5; */
      /* border-width: 0.1em; */
      border-radius: 0.625em;
      /* z-index: 5; */

      .faq-card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em;
        font-family: var(--font-stack-2-light);
        /* font-weight: 0; */
        color: var(--white);
        font-size: 0.8em;

        /* border-top-left-radius: 0.625em; */
        /* border-top-right-radius: 0.625em; */
      }

      .faq-card-bottom {
        padding: 1.5em;
        padding-top: 0.3em;
        font-family: var(--font-stack-2-light);
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9em;
      }

      /* ::after {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        bottom: -5px;
        right: -5px;
        background: linear-gradient(to bottom, #c954ff 44%, #4783f8 22%);
        z-index: -1;
      } */
    }
  }
`;

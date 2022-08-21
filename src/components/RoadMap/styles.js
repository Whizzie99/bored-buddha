import styled from "styled-components";

// import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(); */
  /* background-position: top -12% left 50%; */
  /* background-size: cover; */
  position: relative;
  padding: 7em 0;
  /* overflow-x: hidden; */

  .candle {
    position: absolute;
  }

  .candle-light-1 {
    /* position: absolute; */
    top: 13%;
    right: 10%;
    transform: rotate(-33.46deg);
  }

  .candle-light-2 {
    top: 30%;
    left: -3%;
    transform: rotate(25.42deg);

    height: 25em;
    width: 15em;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .candle-light-3 {
    bottom: 30%;
    right: 26%;
    transform: rotate(-33.46deg);
    height: 8em;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .candle-light-4 {
    bottom: 4%;
    left: 50%;
    transform: translateX(-50%) rotate(-16.94deg);
    height: 8em;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .section-header {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 85%;
    margin: 0 auto;

    h3 {
      /* text-align: center; */
      color: var(--white);
      font-family: var(--font-stack-1-light);
      font-size: 0.5em;
      margin-bottom: 1em;
      font-weight: 400;
      letter-spacing: 0.1em;
      /* text-transform: uppercase; */
    }

    h2 {
      color: var(--gold);
      font-family: var(--font-stack-1-light);
      font-size: 1.6em;
    }

    .bulb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .bulb-left {
      left: 0;
    }

    .bulb-right {
      right: 0;
    }
  }

  .section-description {
    font-family: var(--font-stack-2-regular);
    color: var(--white);
    text-align: center;
    margin-top: 2em;
    line-height: 2;
    font-size: 1em;
  }

  .map-section {
    width: 95%;
    margin: 2em auto;

    .roadmap-card:first-child {
      .circle {
        background: linear-gradient(
          197.1deg,
          #d68204 20.22%,
          #fbdd6e 51.04%,
          #f3c20a 76.55%,
          #d68204 88.24%
        );
      }

      .line {
        height: 50%;
        top: 50%;
      }
    }

    .roadmap-card:last-child {
      .line {
        height: 50%;
      }
    }
  }

  .blur-box {
    position: absolute;
    left: 0;
    bottom: -5em;
    background: linear-gradient(180deg, transparent, #000, transparent);
    height: 10em;
    min-width: 100vw;
    z-index: 996;
    /* filter: blur(20px); */
  }

  @media screen and (max-width: 600px) {
    .map-section {
      margin-left: 1.5em;
    }
  }

  @media screen and (min-width: 1200px) {
    .section-header {
      width: 35%;

      h3 {
        font-size: 0.8em;
      }

      h2 {
        font-size: 2em;
      }
    }

    .map-section {
      width: 50%;
    }
  }
`;

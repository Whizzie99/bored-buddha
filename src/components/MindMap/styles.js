import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bgImg});
  background-size: cover;
  background-position: bottom 20%;
  padding: 7em 0;

  .ellipse-blur {
    position: absolute;
    z-index: 1;
    opacity: 0.6;
  }

  .blur-1 {
    top: -10%;
    right: -2%;
    height: 40em;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .blur-2 {
    bottom: 10%;
    left: 0;
    height: 30em;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .star {
    position: absolute;
    top: 13%;
    left: 35%;
    mix-blend-mode: screen;
    animation: glow 4s infinite alternate;
  }

  .star-2 {
    position: absolute;
    top: 35%;
    left: 25%;
    mix-blend-mode: screen;
    animation: glow 7s infinite alternate;
  }

  .star-3 {
    position: absolute;
    top: 25%;
    right: 10%;
    mix-blend-mode: screen;
    animation: glow 9s infinite alternate;
  }

  .blur-box {
    position: absolute;
    left: 0;
    top: -3em;
    background: linear-gradient(0deg, transparent 50%, #000);
    height: 25em;
    min-width: 100vw;
    z-index: 990;
  }

  .section-header {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    z-index: 2;

    h3 {
      color: var(--white);
      font-family: var(--font-stack-1-light);
      font-size: 0.9em;
      font-weight: 300;
      margin-bottom: 1em;
    }

    h2 {
      color: var(--gold);
      font-family: var(--font-stack-1-light);
      font-size: 1.3em;
    }
  }

  .section-description {
    position: relative;
    font-family: var(--font-stack-2-regular);
    color: var(--white);
    text-align: center;
    margin-top: 1.5em;
    line-height: 2;
    font-size: 0.9em;
    z-index: 2;
  }
`;

export const StyledUtilites = styled.div`
  background: transparent;
  position: relative;
  margin-top: 0.5em;
  z-index: 2;

  > p {
    text-align: center;
    color: var(--white);
    font-family: var(--font-stack-2-light);
    font-size: 0.9em;
    margin: 1em 0;
    margin-top: 0.5em;
  }

  .description-2 {
    margin-top: 5em;
  }

  > h3::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledUtlityCarousel = styled.div`
  position: relative;
  padding: 2em 0;
  background: transparent;

  .swiper {
    position: static;
    background: transparent;

    .swiper-pagination-bullet {
      width: 0.3em;
      height: 0.3em;
      border-radius: 50%;
      background: var(--white);
      opacity: 1;
      margin: 0 0.5em;

      &.swiper-pagination-bullet-active {
        background: var(--purple);
      }
    }

    .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets-dynamic.swiper-pagination-bullets.swiper-pagination-horizontal {
      width: 68.8px !important;
      height: 2.4px !important;
      background: var(--purple) !important;
    }

    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: -2em;
    }
  }

  @media screen and (min-width: 1200px) {
    .section-header {
      h3 {
        font-size: 1.1em;
      }

      h2 {
        font-size: 1.5em;
      }
    }

    .section-description {
      font-size: 1em;
    }

    .swiper {
      .swiper-pagination-bullet {
        /* border-radius: 0;
        width: 4.3em;
        height: 0.15em; */
      }
    }
  }
`;

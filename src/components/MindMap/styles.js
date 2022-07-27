import styled from "styled-components";

import bgImg from "../../assets/images/bg.png";

export const StyledWrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.85)
    ),
    url(${bgImg});
  background-size: cover;
  background-position: bottom 20%;
  padding: 7em 0;

  .section-header {
    text-align: center;
    text-transform: uppercase;

    h3 {
      color: var(--white);
      font-family: var(--font-stack-1-light);
      font-size: 1.1em;
      font-weight: 300;
      margin-bottom: 1em;
    }

    h2 {
      color: var(--gold);
      font-family: var(--font-stack-1-light);
      font-size: 1.5em;
      /* font-weight: 400; */
    }
  }

  .section-description {
    font-family: var(--font-stack-2-regular);
    color: var(--white);
    text-align: center;
    margin-top: 1.5em;
    line-height: 2;
    font-size: 1em;
  }
`;

export const StyledUtilites = styled.div`
  margin-top: 4em;

  > h3 {
    text-align: center;
    color: var(--white);
    font-family: var(--font-stack-2-bold);
    font-size: 1em;
    margin: 1.5em 0;
  }

  > h3::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledUtlityCarousel = styled.div`
  position: relative;
  padding: 2em 0;
  .swiper {
    position: static;

    .swiper-pagination-bullet {
      border-radius: 0;
      width: 4.3em;
      height: 0.15em;
      background: var(--white);
      opacity: 1;
      margin: 0 0.5em;

      &.swiper-pagination-bullet-active {
        background: var(--purple);
      }
    }

    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: -2em;
    }
  }
`;

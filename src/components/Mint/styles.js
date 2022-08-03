import styled from "styled-components";

import bgImg from "../../assets/images/temple-inside.png";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(${bgImg});
  background-size: cover;
  background-position: center;
  height: 35em;

  > h2 {
    font-family: var(--font-stack-1-light);
    color: var(--gold);
    text-transform: uppercase;
    font-size: 1.2em;
    text-align: center;
  }

  .mint-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    background: linear-gradient(
      180deg,
      rgba(44, 42, 42, 0.43) 0%,
      rgba(0, 0, 0, 0.2) 24.48%,
      rgba(67, 65, 65, 0.209055) 76.56%,
      rgba(50, 49, 48, 0.46) 100%
    );
    backdrop-filter: blur(0.625em);
    -webkit-backdrop-filter: blur(0.625em);
    margin-top: 2.5em;
    border-radius: 0.625em;
    padding: 1em;
  }

  ul {
    list-style: none;
    width: 90%;

    li {
      margin: 0.9em;
    }

    .mint-details {
      display: flex;
      justify-content: center;
      /* margin: 0.9em auto; */
      transform: translateX(10%);
      color: var(--white);
      font-family: var(--font-stack-2-regular);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 1em;
      /* font-weight: 200; */
      /* width: 90%; */
      gap: 0.5em;

      span {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        flex: 0.5;
      }

      span:nth-child(2) {
        flex: 0.5;
      }
    }

    .mint-counter {
      display: flex;
      align-items: center;
      gap: 0.8em;
      /* width: 90%; */
      margin: 0.9em auto;
      transform: translateX(10%);

      button {
        flex: 0.1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 234, 138, 0.3);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        /* height: 1.5em; */
        /* width: 1.5em; */
        font-family: var(--font-stack-2-light);
        font-size: 1.2em;
        color: var(--white);
        text-align: center;
        padding: 0.2em 0.15em;
      }

      span {
        flex: 0.6;
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        background: rgba(255, 234, 138, 0.3);
        font-family: var(--font-stack-2-regular);
        color: var(--white);
        /* border-radius: 1.1em; */
        border-radius: 0.875em;
        padding: 0 0.3em;
        text-align: center;
        padding-bottom: 0.2em;
      }
    }
  }

  .mint-btn {
    background: linear-gradient(
      180deg,
      #8744a7 0%,
      #2e1e64 48.96%,
      #183875 100%
    );
    border: none;
    font-family: var(--font-stack-2-light);
    font-size: 0.9em;
    color: var(--white);
    padding: 0.5em 1em;
    padding-top: 0.3em;
    border-radius: 0.625em;
    text-transform: capitalize;
    margin: 0.9em 0;
  }

  .blur-box-1 {
    position: absolute;
    left: 0;
    top: -5em;
    background: linear-gradient(180deg, transparent, #000, transparent);
    height: 10em;
    min-width: 100vw;
    z-index: 998;
    /* filter: blur(20px); */
  }

  .blur-box-2 {
    position: absolute;
    left: 0;
    bottom: -5em;
    background: linear-gradient(180deg, transparent, #000, transparent);
    height: 10em;
    min-width: 100vw;
    z-index: 998;
    /* filter: blur(20px); */
  }

  @media screen and (min-width: 1200px) {
    > h2 {
      font-size: 1.5em;
    }

    .mint-box {
      width: 29%;
    }
  }
`;

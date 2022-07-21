import styled from "styled-components";

import bgImg from "../../assets/images/temple-inside.png";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-size: cover;
  background-position: center;
  height: 35em;

  > h2 {
    font-family: var(--font-stack-1-light);
    color: var(--gold);
    text-transform: uppercase;
    font-size: 2em;
  }

  .mint-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    background: linear-gradient(
      180deg,
      rgba(44, 42, 42, 0.43) 0%,
      rgba(0, 0, 0, 0.2) 24.48%,
      rgba(67, 65, 65, 0.209055) 76.56%,
      rgba(50, 49, 48, 0.46) 100%
    );
    backdrop-filter: blur(1em);
    -webkit-backdrop-filter: blur(1em);
    margin-top: 2.5em;
    border-radius: 0.9em;
    padding: 1em;
  }

  ul {
    list-style: none;
    width: 70%;

    .mint-details {
      display: flex;
      justify-content: center;
      margin: 0.9em auto;
      transform: translateX(10%);
      color: var(--white);
      font-family: var(--font-stack-2-light);
      text-transform: uppercase;
      font-size: 1.1em;
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
        height: 1.5em;
        width: 1.5em;
        font-family: var(--font-stack-2-light);
        font-size: 1.2em;
        color: var(--white);
      }

      span {
        flex: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 234, 138, 0.3);
        font-family: var(--font-stack-2-light);
        color: var(--white);
        border-radius: 1.1em;
        padding: 0.3em;
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
    padding: 0.8em 1em;
    border-radius: 1em;
    text-transform: capitalize;
    margin: 0.9em 0;
  }
`;

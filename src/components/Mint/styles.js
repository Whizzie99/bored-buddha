import styled from "styled-components";

import bgImg from "../../assets/images/temple-inside.png";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
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
    width: 40%;
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
      /* justify-content: space-between; */
      align-items: center;
      margin: 0.7em 0;
      color: var(--white);
      font-family: var(--font-stack-2-light);
      text-transform: uppercase;
      font-size: 1.1em;
      /* text-align: left; */
      /* width: 80%; */
      gap: 0.5em;

      span {
        /* flex: 0.5; */
        text-align: left;
      }

      /* span {
        text-align: left;
        flex: 0.5;
      } */

      span:nth-child(2) {
        /* text-align: left; */
        /* flex: 0.5; */
      }
    }
  }
`;

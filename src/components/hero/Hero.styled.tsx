import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  position: relative;
  overflow-x: clip;
  background-color: var(--dim-gray);
`;

export const ImageContainer = styled.div`
  flex: 1 1 auto;
  img {
    max-width: 1400px;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: -150px;
    z-index: 1;

    @media screen and (max-width: 425px) {
      left: -300px;
    }
  }
`;

export const IntroductionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 20px;
  }

  @media screen and (max-width: 425px) {
    align-items: flex-end;
  }
`;

export const Introduction = styled.div`
  width: 100%;
  max-width: 550px;
  position: relative;
  z-index: 10;
  text-shadow: 1px 1px 2px var(--black);
  backdrop-filter: blur(1px);

  h1 {
    font-size: clamp(3.5rem, 7vw, 6.5rem);
  }

  h2 {
    font-size: clamp(1.6rem, 3.5vw, 2rem);
    margin-bottom: 2rem;
  }

  p {
    width: 80%;
    font-size: clamp(1rem, 3.5vw, 1.1rem);
    margin-bottom: 2rem;

    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }

  button {
    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const Sumary = styled.div`
  margin: auto;
  display: flex;
  gap: 50px;
  padding: 0 40px;
  margin-bottom: 100px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 0;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    width: 100%;
    font-size: clamp(1rem, 2vw, 1.1rem);
    max-width: 400px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 20px;

    p {
      max-width: unset;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    margin: auto;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media screen and (max-width: 424px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

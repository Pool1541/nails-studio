import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 20;
    backdrop-filter: blur(3px);
  }
`;

export const Category = styled.h3`
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  margin-bottom: 1rem;
`;

export const List = styled.div`
  margin-bottom: 50px;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 5px;
  gap: 15px;

  p:last-child {
    font-weight: 700;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(26, 117, 159);
    background: -moz-radial-gradient(
      circle,
      rgba(26, 117, 159, 0) 0%,
      rgba(230, 230, 230, 1) 80%
    );
    background: -webkit-radial-gradient(
      circle,
      rgba(26, 117, 159, 0) 0%,
      rgba(230, 230, 230, 1) 80%
    );
    background: radial-gradient(
      circle,
      rgba(26, 117, 159, 0) 0%,
      rgba(230, 230, 230, 1) 80%
    );
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

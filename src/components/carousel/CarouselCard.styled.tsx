import styled from "styled-components";

export const ContainerCard = styled.div`
  height: 427px;
  width: 640px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    border-radius: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

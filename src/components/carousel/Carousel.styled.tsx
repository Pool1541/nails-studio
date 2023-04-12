import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-width: 200px;
  margin: auto;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--eerie-black);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 30px;
  }
  .swiper-pagination-bullet-active {
    background: var(--eerie-black);
  }
`;

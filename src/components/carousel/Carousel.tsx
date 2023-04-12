import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Container } from "./Carousel.styled";
import carousel01 from "../../assets/images/carousel-1.webp";
import carousel02 from "../../assets/images/carousel-2.webp";
import carousel03 from "../../assets/images/carousel-3.webp";
import carousel04 from "../../assets/images/carousel-4.webp";
import carousel05 from "../../assets/images/carousel-5.webp";
import carousel06 from "../../assets/images/carousel-6.webp";
import carousel07 from "../../assets/images/carousel-7.webp";
import carousel08 from "../../assets/images/carousel-8.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}>
        <SwiperSlide>
          <CarouselCard image={carousel01} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel02} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel03} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel04} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel05} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel06} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel07} alt="Carousel01" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard image={carousel08} alt="Carousel01" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

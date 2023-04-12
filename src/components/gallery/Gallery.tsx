import { Subtitle } from "../Subtitle.styled";
import Carousel from "../carousel/Carousel";
import Section from "../section/Section";

export default function Gallery() {
  return (
    <Section bg={"white"} id="gallery">
      <Subtitle center>Galería</Subtitle>
      <Carousel />
    </Section>
  );
}

import { ContainerCard } from "./CarouselCard.styled";

interface Props {
  image: string;
  alt: string;
}

export default function CarouselCard({ image, alt }: Props) {
  return (
    <ContainerCard>
      <img src={image} alt={alt} />
    </ContainerCard>
  );
}

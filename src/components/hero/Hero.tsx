import {
  ImageContainer,
  StyledSection,
  IntroductionContainer,
  Introduction,
} from "./Hero.styled";
import image from "../../assets/images/bryony-elena-KZKbGgQPCtU-unsplash-transformed.png";
import Button from "../button/Button";

export default function Hero() {
  return (
    <StyledSection>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <IntroductionContainer>
        <Introduction>
          <h1>Nails Studio</h1>
          <h2>MANICURE SALON</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            aspernatur adipisci velit molestias sequi error laboriosam,
            veritatis voluptatem, accusamus iusto cupiditate vero praesentium
            autem. Minima odit praesentium sequi et cumque?
          </p>
          <Button>Reserva tu cita</Button>
        </Introduction>
      </IntroductionContainer>
    </StyledSection>
  );
}

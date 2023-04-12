import {
  FacialCleansing,
  Nail,
  Pedicure,
  Polish,
  Scissors,
  Waxing,
} from "../../assets/icons";
import Section from "../section/Section";
import {
  GridContainer,
  GridItem,
  ImageWrapper,
  Sumary,
  TextWrapper,
} from "./Services.styled";
import image from "../../assets/images/beauty-salon.jpg";
import { Subtitle } from "../Subtitle.styled";

export default function Servicios() {
  return (
    <Section bg={"white"} id="about">
      <Sumary>
        <TextWrapper>
          <Subtitle>Sobre el salón</Subtitle>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            consectetur facere quibusdam deserunt, fuga odio sed earum, possimus
            quod quia itaque nemo dolores labore id illum quidem sit laborum
            eum?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            consectetur facere quibusdam deserunt, fuga odio sed earum, possimus
            quod quia itaque nemo dolores labore id illum quidem sit laborum
            eum?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            consectetur facere quibusdam deserunt, fuga odio sed earum, possimus
            quod quia itaque nemo dolores labore id illum quidem sit laborum
            eum?
          </p>
          <br />
        </TextWrapper>
        <ImageWrapper>
          <img src={image} alt="Beauty salon" />
        </ImageWrapper>
      </Sumary>
      <Subtitle center>Nuestros servicios</Subtitle>
      <GridContainer>
        <GridItem>
          <div>
            <Scissors />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi omnis autem. Quaerat sed, deserunt repudiandae similique
              exercitationem porro facilis sint enim esse ea velit, delectus
              ipsum minus nulla suscipit.
            </p>
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Polish />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi omnis autem. Quaerat sed, deserunt repudiandae similique
              exercitationem porro facilis sint enim esse ea velit, delectus
              ipsum minus nulla suscipit.
            </p>
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Nail />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi omnis autem. Quaerat sed, deserunt repudiandae similique
              exercitationem porro facilis sint enim esse ea velit, delectus
              ipsum minus nulla suscipit.
            </p>
          </div>
        </GridItem>
        <GridItem>
          <div>
            <FacialCleansing />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi omnis autem. Quaerat sed, deserunt repudiandae similique
              exercitationem porro facilis sint enim esse ea velit, delectus
              ipsum minus nulla suscipit.
            </p>
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Pedicure />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi omnis autem. Quaerat sed, deserunt repudiandae similique
              exercitationem porro facilis sint enim esse ea velit, delectus
              ipsum minus nulla suscipit.
            </p>
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Waxing />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eligendi omnis autem. Quaerat sed, deserunt repudiandae similique
              exercitationem porro facilis sint enim esse ea velit, delectus
              ipsum minus nulla suscipit.
            </p>
          </div>
        </GridItem>
      </GridContainer>
    </Section>
  );
}

import Section from "../section/Section";
import { Subtitle } from "../Subtitle.styled";
import {
  Category,
  ImageContainer,
  Item,
  List,
  MainContainer,
  PricesContainer,
} from "./Prices.styled";
import image from "../../assets/images/nails.webp";
import { mock } from "../../content/mock";

export default function Prices() {
  return (
    <Section bg={"platinum"} id="services">
      <MainContainer>
        <PricesContainer>
          <Subtitle>Nuestros precios</Subtitle>
          {mock.map((list, key) => {
            return (
              <ListOfservices
                services={list.services}
                category={list.category}
                key={key}
              />
            );
          })}
        </PricesContainer>
        <ImageContainer>
          <img src={image} alt="Nails image" />
        </ImageContainer>
      </MainContainer>
    </Section>
  );
}

interface ServiceInterface {
  title: string;
  price: number;
}

interface ListOfServicesInterface {
  category: string;
  services: ServiceInterface[];
}

function ListOfservices({ category, services }: ListOfServicesInterface) {
  return (
    <List>
      <Category>{category}</Category>
      {services.map((service, index) => {
        return (
          <ListItem key={index} title={service.title} price={service.price} />
        );
      })}
    </List>
  );
}

function ListItem({ title, price }: ServiceInterface) {
  return (
    <Item>
      <p>{title}</p>
      <p>S/. {price}</p>
    </Item>
  );
}
